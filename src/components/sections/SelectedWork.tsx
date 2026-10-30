import Link from "next/link";
import { CaseVisual } from "@/components/illustrations/CaseVisual";
import { SampleBadge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { SectionIntro } from "./SectionIntro";

export function SelectedWork({ n }: { n?: number }) {
  if (!site.features.caseStudies) return null;
  const [first, second] = caseStudies;
  return (
    <Section labelledBy="work-title">
      <SectionIntro
        n={n}
        id="work-title"
        eyebrow="Selected work"
        title="Representative projects, explained plainly."
        intro="Each project starts with a business problem and ends with something people use every day."
        aside={<TextLink href="/work" arrow>All work</TextLink>}
      />
      <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14">
        {[first, second].map((c, i) => (
          <article
            key={c.slug}
            data-reveal
            className={i === 0 ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-5 lg:mt-24"}
          >
            <Link href={`/work/${c.slug}`} className="group block">
              <div className="bg-mist-100 p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-10 motion-reduce:transition-none">
                <CaseVisual visual={c.visual} />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-600">
                <span>{c.sector}</span>
                {c.sample ? <SampleBadge /> : null}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-brand-700">{c.title}</h3>
              <p className="mt-3 text-ink-600">{c.summary}</p>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
