import { z } from "zod";
import { site } from "@/config/site";
import { serviceSlugs } from "@/content/services";

/** Shared by the browser form and the server action, so both validate identically. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .max(254, "Please use a shorter email address.")
    .pipe(z.email("Please enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .max(40, "Please use a shorter phone number.")
    .regex(/^[0-9 +()-]*$/, "Please use digits, spaces and + ( ) - only.")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(120, "Please keep the company name under 120 characters.")
    .optional()
    .or(z.literal("")),
  service: z.enum(["other", ...serviceSlugs] as [string, ...string[]], {
    error: "Please choose a service, or Other.",
  }),
  budget: z
    .enum([...site.budgetRanges] as [string, ...string[]])
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(5000, "Please keep your message under 5,000 characters."),
  consent: z.literal(true, { error: "Please confirm you agree to the Privacy Policy." }),
  /** Honeypot. Real visitors never see or fill this field. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;

export type ContactResult =
  | { status: "success" }
  | {
      status: "error";
      code: "validation" | "rate_limited" | "not_configured" | "send_failed";
      message: string;
      fieldErrors?: Partial<Record<ContactField, string>>;
    };

/** Converts native form data (including the no-JavaScript path) into schema input. */
export function formDataToInput(formData: FormData): Record<string, unknown> {
  const get = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };
  const consent = formData.get("consent");
  return {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    company: get("company"),
    service: get("service"),
    budget: get("budget"),
    message: get("message"),
    consent: consent === "on" || consent === "true",
    website: get("website"),
  };
}
