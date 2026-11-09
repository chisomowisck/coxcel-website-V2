import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { getAnalyticsConfig } from "@/config/analytics";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie notice",
  description: "Which cookies the Coxcel website uses and why.",
  path: "/legal/cookies",
});

export default function CookiesPage() {
  const a = getAnalyticsConfig();
  // Only the tools switched on through environment variables are listed.
  const tools = [
    a.gtmId && {
      name: "Google Tag Manager",
      provider: "Google",
      purpose:
        "Loads and manages our measurement tags. It runs in a cookieless mode until you accept.",
    },
    a.gaId && {
      name: "Google Analytics",
      provider: "Google",
      purpose: "Counts visits and shows which pages are used, so we can improve the site.",
    },
    a.clarityId && {
      name: "Microsoft Clarity",
      provider: "Microsoft",
      purpose: "Heatmaps and anonymised session recordings that show where pages are hard to use.",
    },
    a.smartlook && {
      name: "Smartlook",
      provider: "Smartlook",
      purpose: "Anonymised session recordings and funnels that show how visitors use the site.",
    },
    a.fbPixelId && {
      name: "Meta Pixel",
      provider: "Meta",
      purpose: "Measures the results of our Facebook and Instagram advertising.",
    },
    a.twPixelId && {
      name: "X Pixel",
      provider: "X",
      purpose: "Measures the results of our advertising on X.",
    },
  ].filter((t): t is { name: string; provider: string; purpose: string } => Boolean(t));

  return (
    <LegalPage
      title="Cookie notice"
      intro="Which cookies this site uses and why."
      updated="30 October 2026"
      href="/legal/cookies"
    >
      <h2>Our approach</h2>
      <p>
        The site works fully without optional cookies. Analytics and marketing cookies are only set
        if you choose &ldquo;Accept cookies&rdquo; in the cookie banner. If you choose
        &ldquo;Reject&rdquo;, no analytics or marketing cookies are set. Google Tag Manager still
        loads, but in a cookieless mode that respects your choice.
      </p>

      <h2>Essential storage</h2>
      <p>
        We store your cookie choice in your browser so we do not ask again on every page. Our
        hosting platform may also set strictly necessary cookies to deliver pages securely and
        protect the site from abuse. These do not identify you and cannot be switched off without
        affecting how the site works.
      </p>

      <h2>Optional analytics and marketing tools</h2>
      {tools.length > 0 ? (
        <ul>
          {tools.map((t) => (
            <li key={t.name}>
              <strong>{t.name}</strong> ({t.provider}): {t.purpose}
            </li>
          ))}
        </ul>
      ) : (
        <p>No optional analytics or marketing tools are currently in use.</p>
      )}

      <h2>Changing your choice</h2>
      <p>
        Use the &ldquo;Cookie settings&rdquo; link at the bottom of any page to change your choice
        at any time. You can also block or delete cookies in your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
