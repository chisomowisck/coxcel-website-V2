import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that apply to your use of the Coxcel website.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms that apply when you use this website."
      updated="30 October 2026"
      href="/legal/terms"
    >
      <h2>About these terms</h2>
      <p>
        These terms apply to your use of this website, operated by {site.legalName}. By using the site you agree to them.
        Separate written agreements govern any services we provide to clients.
      </p>

      <h2>Using the site</h2>
      <ul>
        <li>You may view, download and print pages for your own reference.</li>
        <li>You must not misuse the site, for example by attempting to gain unauthorised access or sending spam through the contact form.</li>
        <li>You must not copy or republish substantial parts of the site without our permission.</li>
      </ul>

      <h2>Content and accuracy</h2>
      <p>
        We work to keep information on this site accurate and up to date, but it is provided for general information
        only and does not constitute professional advice. Examples and case studies describe typical approaches and do
        not guarantee particular results.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Coxcel name, logo, text, illustrations and design of this site belong to us or our licensors. Third-party
        product names mentioned on the site belong to their respective owners and are used only to describe technologies
        we work with.
      </p>

      <h2>Links to other sites</h2>
      <p>We are not responsible for the content or privacy practices of websites we link to.</p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising from your use of this website. Nothing in
        these terms limits liability that cannot be limited by law.
      </p>

      <h2>Governing law</h2>
      <p>
        {/* TODO: state the governing law and jurisdiction. */}
        These terms are governed by the laws of the jurisdiction in which {site.legalName} is registered.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
