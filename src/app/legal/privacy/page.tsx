import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Coxcel collects, uses and protects personal information, including details sent through our contact form.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use and protect your personal information."
      updated="30 October 2026"
      href="/legal/privacy"
    >
      <h2>Who we are</h2>
      <p>
        This website is operated by {site.legalName} (&ldquo;Coxcel&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;). For any privacy question, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
        {/* TODO: add registered company number and registered address. */}
      </p>

      <h2>Information we collect</h2>
      <p>When you use our contact form, we collect the details you choose to give us:</p>
      <ul>
        <li>your name and email address</li>
        <li>optionally, your phone number, company and budget range</li>
        <li>the service you are interested in and your message</li>
      </ul>
      <p>
        Our hosting provider also processes standard technical information, such as your IP address
        and browser type, to deliver the site securely and to prevent abuse of the contact form.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>to reply to your enquiry and discuss a possible project</li>
        <li>to send you an automatic confirmation that we received your message</li>
        <li>
          to protect the form from spam and misuse, for example by limiting repeated submissions
        </li>
      </ul>
      <p>
        Our legal basis is your consent, which you give when you tick the consent box, and our
        legitimate interest in responding to business enquiries. We do not sell your information or
        use it for unrelated marketing.
      </p>

      <h2>How the contact form works</h2>
      <p>
        The website does not store your enquiry in a database. When you submit the form, your
        details are sent by email to our team and a confirmation is sent to you, using our email
        delivery provider, Resend. The emails are then held in our business mailbox for as long as
        needed to handle your enquiry and any resulting work.
      </p>

      <h2>Who we share it with</h2>
      <p>We use a small number of service providers who process data on our behalf:</p>
      <ul>
        <li>Resend, to deliver contact form emails</li>
        <li>our website hosting provider, to serve the site</li>
        <li>our email provider, to store and manage business email</li>
      </ul>
      <p>
        {/* TODO: name the hosting and email providers and confirm international transfer safeguards. */}
        Some providers may process data outside your country. Where they do, we rely on appropriate
        safeguards.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry emails for up to 24 months after our last contact unless we enter into a
        contract, in which case we keep records for as long as the law requires.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or restrict
        the use of your personal information, to object to processing and to withdraw consent. To
        exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. You
        may also complain to your local data protection authority.
      </p>

      <h2>Cookies, analytics and advertising measurement</h2>
      <p>
        If you accept cookies, we use analytics and advertising measurement tools (such as Google
        Analytics, Microsoft Clarity, Smartlook and the Meta and X pixels) to understand how the
        site is used and to measure our campaigns. These providers process device and usage data,
        including pages viewed and interactions, under their own privacy terms. If you reject
        cookies, these tools are not loaded. The <Link href="/legal/cookies">Cookie notice</Link>{" "}
        lists the tools currently in use and explains how to change your choice.
      </p>

      <h2>Changes</h2>
      <p>
        We will update this policy when our practices change and show the date of the latest version
        at the top.
      </p>
    </LegalPage>
  );
}
