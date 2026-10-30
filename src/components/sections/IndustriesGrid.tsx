import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { industries } from "@/content/industries";
import { pad } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

export function IndustriesGrid({ n }: { n?: number }) {
  return (
    <Section tone="mist" labelledBy="industries-title">
      <SectionIntro
        n={n}
        id="industries-title"
        eyebrow="Industries"
        title="Sector knowledge that shortens the learning curve."
        intro="Regulation, seasonality, legacy systems and customer expectations differ by sector. We bring that context to the first conversation."
        aside={
          <TextLink href="/industries" arrow>
            All industries
          </TextLink>
        }
      />
      <ul className="mt-14 grid grid-cols-1 gap-px bg-mist-300 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <li key={ind.slug} data-reveal className="bg-mist-100">
            <Link
              href={`/industries#${ind.slug}`}
              className="group flex h-full flex-col p-6 transition-colors duration-200 hover:bg-white"
            >
              <span className="text-sm font-semibold text-ink-600">{pad(i + 1)}</span>
              <span className="mt-6 text-xl font-semibold tracking-tight group-hover:text-brand-700">
                {ind.name}
              </span>
              <span className="mt-2 text-[0.95rem] text-ink-600">{ind.summary}</span>
            </Link>
          </li>
        ))}
        <li className="bg-ink text-white">
          <Link href="/contact" className="group flex h-full flex-col justify-between p-6">
            <span className="text-sm font-semibold text-brand-300">Not listed?</span>
            <span className="mt-6 text-xl font-semibold tracking-tight">
              Tell us about your sector
              <span
                aria-hidden="true"
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </Section>
  );
}
