import type { Metadata } from "next";
import { HexBullet } from "@/components/brand/Divider";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { values } from "@/content/values";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Coxcel. We welcome open applications from engineers, data specialists, designers and digital marketers.",
  path: "/careers",
});

const roles = [
  "Software engineers (web, mobile, backend)",
  "Data engineers and analysts",
  "Machine learning and AI engineers",
  "Cloud and DevOps engineers",
  "Product and UX designers",
  "Digital marketing specialists",
  "Delivery and project managers",
  "QA and test engineers",
];

const applyHref = `mailto:${site.email}?subject=${encodeURIComponent("Open application")}`;

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Do your best work with people who care about the details."
        intro="We do not have specific openings listed right now, but we are always glad to hear from talented people. Send an open application and tell us what you would like to work on."
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      >
        <div className="mt-10">
          <ButtonLink href={applyHref} size="lg">
            Send an open application
          </ButtonLink>
        </div>
      </PageHeader>

      <Section labelledBy="values-title">
        <SectionIntro
          n={1}
          id="values-title"
          eyebrow="What we value"
          title="The way we work together."
        />
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className="border-t border-ink pt-6" data-reveal>
              <h3 className="text-xl font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-2 text-ink-600">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="roles-title">
        <SectionIntro
          n={2}
          id="roles-title"
          eyebrow="Who we look for"
          title="Skills we regularly need."
          intro="Experience matters less than curiosity, clear communication and care for quality."
        />
        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
          {roles.map((r) => (
            <li key={r} className="flex gap-3 border-b border-mist-300 pb-4 text-lg" data-reveal>
              <HexBullet />
              {r}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink" labelledBy="apply-title">
        <div className="max-w-3xl">
          <h2 id="apply-title" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            How to apply
          </h2>
          <p className="mt-6 text-lg text-ink-300">
            Email{" "}
            <a href={applyHref} className="link-underline font-medium text-brand-300">
              {site.email}
            </a>{" "}
            with the subject &ldquo;Open application&rdquo;. Include your CV or portfolio, the kind
            of work you want to do, and where you are based. We read every application and reply to
            all of them.
          </p>
          <div className="mt-10">
            <ButtonLink href={applyHref} size="lg" variant="inverse">
              Send an open application
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
