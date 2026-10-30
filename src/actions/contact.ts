"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { site } from "@/config/site";
import { getService } from "@/content/services";
import { ContactConfirmation } from "@/emails/ContactConfirmation";
import { ContactNotification } from "@/emails/ContactNotification";
import {
  contactSchema,
  formDataToInput,
  type ContactField,
  type ContactResult,
} from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

const directEmailHint = `Please email us directly at ${site.email}.`;

/**
 * Contact form Server Action. Accepts native FormData so the form also works without JavaScript.
 * See specs/001-company-website/contracts/contact-action.md.
 */
export async function submitContact(_prev: ContactResult | null, formData: FormData): Promise<ContactResult> {
  // 1. Validate
  const parsed = contactSchema.safeParse(formDataToInput(formData));
  if (!parsed.success) {
    // A filled honeypot is a bot: report success and send nothing.
    if (parsed.error.issues.some((i) => i.path[0] === "website")) return { status: "success" };
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      code: "validation",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }
  const data = parsed.data;

  // 2. Honeypot (belt and braces)
  if (data.website) return { status: "success" };

  // 3. Rate limit per IP
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`).allowed) {
    return {
      status: "error",
      code: "rate_limited",
      message: `You have sent several messages in a short time. Please wait a few minutes and try again, or ${directEmailHint.toLowerCase()}`,
    };
  }

  // 4. Configuration
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; enquiry not sent.");
    return {
      status: "error",
      code: "not_configured",
      message: `Our contact form is not available right now. ${directEmailHint}`,
    };
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Coxcel <noreply@coxcel.com>";
  const serviceLabel = data.service === "other" ? "Other" : (getService(data.service)?.title ?? data.service);
  const resend = new Resend(apiKey);

  // 5. Notify the team
  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `New enquiry: ${serviceLabel} from ${data.name}`,
      react: ContactNotification({
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        company: data.company || undefined,
        serviceLabel,
        budget: data.budget || undefined,
        message: data.message,
        submittedAt: new Date().toUTCString(),
      }),
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact] Notification failed:", err);
    return {
      status: "error",
      code: "send_failed",
      message: `Sorry, we could not send your message just now. Please try again shortly. ${directEmailHint}`,
    };
  }

  // 6. Confirm to the visitor (failure here does not fail the enquiry)
  try {
    const { error } = await resend.emails.send({
      from,
      to: [data.email],
      replyTo: to,
      subject: "We have received your enquiry",
      react: ContactConfirmation({ name: data.name, serviceLabel, message: data.message }),
    });
    if (error) console.error("[contact] Confirmation failed:", error.message);
  } catch (err) {
    console.error("[contact] Confirmation failed:", err);
  }

  return { status: "success" };
}
