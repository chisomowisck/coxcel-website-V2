import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie notice",
  description: "Which cookies the Coxcel website uses and why.",
  path: "/legal/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie notice" intro="Which cookies this site uses and why." updated="30 October 2026" href="/legal/cookies">
      <h2>Our approach</h2>
      <p>
        This website is designed to work without tracking cookies. We do not use advertising cookies and we do not
        currently run analytics that set cookies.
      </p>

      <h2>Essential cookies</h2>
      <p>
        Our hosting platform may set strictly necessary cookies to deliver pages securely and protect the site from
        abuse. These do not identify you personally and cannot be switched off without affecting how the site works.
      </p>

      <h2>If this changes</h2>
      <p>
        If we add analytics or other non-essential cookies in future, we will update this notice and ask for your consent
        before setting them.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. Blocking essential cookies may stop parts of the site
        from working.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
