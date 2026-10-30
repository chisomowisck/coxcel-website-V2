import { Heading, Link, Text } from "@react-email/components";
import { site } from "@/config/site";
import { EmailLayout } from "./EmailLayout";
import { emailStyles as s } from "./theme";

/** Auto-reply sent to the visitor. */
export function ContactConfirmation({
  name,
  serviceLabel,
  message,
}: {
  name: string;
  serviceLabel: string;
  message: string;
}) {
  const firstName = name.split(" ")[0] || name;
  return (
    <EmailLayout preview="We have received your enquiry and will reply within one business day.">
      <Heading as="h1" style={s.h1}>
        Thank you, {firstName}.
      </Heading>
      <Text style={s.text}>
        We have received your enquiry about <strong>{serviceLabel}</strong>. A member of the Coxcel
        team will reply within one business day, usually with a few questions and a suggested next
        step.
      </Text>
      <Text style={s.text}>For reference, here is what you sent:</Text>
      <Text style={s.message}>{message}</Text>
      <Text style={s.text}>
        If anything changes in the meantime, simply reply to this email or write to{" "}
        <Link href={`mailto:${site.email}`} style={s.link}>
          {site.email}
        </Link>
        .
      </Text>
      <Text style={s.text}>The Coxcel team</Text>
    </EmailLayout>
  );
}

export default ContactConfirmation;
