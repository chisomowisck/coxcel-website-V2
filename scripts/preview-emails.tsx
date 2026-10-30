// Renders both contact emails to .email-preview/ for a quick visual check.
// Usage: npx tsx scripts/preview-emails.tsx
import { mkdirSync, writeFileSync } from "node:fs";
import { render } from "@react-email/render";
import { ContactConfirmation } from "../src/emails/ContactConfirmation";
import { ContactNotification } from "../src/emails/ContactNotification";

async function main() {
  mkdirSync(".email-preview", { recursive: true });
  const notification = ContactNotification({
    name: "Sample Visitor",
    email: "visitor@example.com",
    phone: "+00 00 000 0000",
    company: "Sample Company",
    serviceLabel: "AI Integration",
    budget: "$10k to $25k",
    message: "We would like to add document search to our support portal.\nCan we talk next week?",
    submittedAt: new Date().toUTCString(),
  });
  const confirmation = ContactConfirmation({
    name: "Sample Visitor",
    serviceLabel: "AI Integration",
    message: "We would like to add document search to our support portal.",
  });
  writeFileSync(".email-preview/notification.html", await render(notification));
  writeFileSync(".email-preview/confirmation.html", await render(confirmation));
  writeFileSync(".email-preview/confirmation.txt", await render(confirmation, { plainText: true }));
  console.log("Wrote .email-preview/notification.html, confirmation.html and confirmation.txt");
}

main();
