import { Heading, Link, Text } from "@react-email/components";
import { EmailLayout } from "./EmailLayout";
import { emailStyles as s } from "./theme";

export type EnquiryEmailProps = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceLabel: string;
  budget?: string;
  message: string;
  submittedAt: string;
};

/** Sent to the Coxcel inbox. Reply goes straight to the visitor via reply_to. */
export function ContactNotification(props: EnquiryEmailProps) {
  const rows: [string, string | undefined][] = [
    ["Name", props.name],
    ["Email", props.email],
    ["Phone", props.phone],
    ["Company", props.company],
    ["Service", props.serviceLabel],
    ["Budget", props.budget],
    ["Received", props.submittedAt],
  ];
  return (
    <EmailLayout preview={`New enquiry from ${props.name}: ${props.serviceLabel}`}>
      <Heading as="h1" style={s.h1}>
        New website enquiry
      </Heading>
      {rows
        .filter(([, v]) => v)
        .map(([label, value]) => (
          <div key={label}>
            <Text style={s.label}>{label}</Text>
            <Text style={s.value}>
              {label === "Email" ? (
                <Link href={`mailto:${value}`} style={s.link}>
                  {value}
                </Link>
              ) : (
                value
              )}
            </Text>
          </div>
        ))}
      <Text style={s.label}>Message</Text>
      <Text style={s.message}>{props.message}</Text>
      <Text style={s.small}>Reply to this email to respond directly to {props.name}.</Text>
    </EmailLayout>
  );
}

export default ContactNotification;
