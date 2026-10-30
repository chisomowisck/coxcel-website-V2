import type { Metadata } from "next";
import { HexBullet } from "@/components/brand/Divider";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Section } from "@/components/ui/Section";
import { engagementModels } from "@/content/engagement";
import { phases } from "@/content/process";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Process",
  description:
    "How Coxcel works: a five-phase delivery process and three engagement models (fixed scope, dedicated team and retainer).",
  path: "/process",
});

const commitments = [
  "A named delivery lead for every engagement",
  "A demo of working results every two weeks",
  "A shared board showing scope, progress and risks",
  "Budget reporting with no surprises",
  "Documentation and handover included",
  "You own the code, designs and data",
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A clear way of working, whichever model suits you."
        intro="Every engagement follows the same five phases. How we contract depends on how well-defined the work is and how long you need us."
        breadcrumbs={[{ label: "Process", href: "/process" }]}
      />

      <ProcessSteps n={1} showLink={false} />

      <Section labelledBy="phases-title">
        <SectionIntro
          n={2}
          id="phases-title"
          eyebrow="In detail"
          title="What each phase produces."
        />
        <div className="mt-14 border-t border-mist">
          {phases.map((p, i) => (
            <div
              key={p.title}
              className="grid grid-cols-12 gap-y-4 border-b border-mist py-8 lg:gap-x-6"
              data-reveal
            >
              <span
                aria-hidden="true"
                data-num={pad(i + 1)}
                className="col-span-2 text-3xl font-semibold tracking-[-0.04em] text-mist-300 before:content-[attr(data-num)] sm:text-4xl lg:col-span-1"
              />
              <h3 className="col-span-10 text-2xl font-semibold tracking-tight lg:col-span-3">
                {p.title}
              </h3>
              <p className="col-span-12 text-ink-600 lg:col-span-5">{p.text}</p>
              <ul
                className="col-span-12 flex flex-wrap gap-2 lg:col-span-3 lg:justify-end"
                aria-label={`${p.title} outputs`}
              >
                {p.outputs.map((o) => (
                  <li
                    key={o}
                    className="border border-mist-300 px-2.5 py-1 text-xs font-medium text-ink-700"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="models-title" id="engagement-models">
        <SectionIntro
          n={3}
          id="models-title"
          eyebrow="Engagement models"
          title="Three ways to work together."
          intro="Choose the model that matches your certainty about scope. Many clients start with a fixed-scope discovery and move to a dedicated team or retainer."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <article
              key={m.slug}
              id={m.slug}
              className="flex flex-col bg-white p-8 ring-1 ring-mist clip-corner-lg ring-inset"
              data-reveal
            >
              <span className="text-sm font-semibold text-brand-700">{pad(i + 1)}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{m.title}</h3>
              <p className="mt-3 text-ink-600">
                <strong className="font-semibold text-ink">Best for: </strong>
                {m.bestFor}
              </p>
              <ul className="mt-6 space-y-3">
                {m.how.map((h) => (
                  <li key={h} className="flex gap-3 text-[0.95rem]">
                    <HexBullet />
                    {h}
                  </li>
                ))}
              </ul>
              <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-mist pt-6 text-sm">
                <div>
                  <dt className="text-ink-600">Commercials</dt>
                  <dd className="mt-1 font-medium">{m.commercial}</dd>
                </div>
                <div>
                  <dt className="text-ink-600">Timeline</dt>
                  <dd className="mt-1 font-medium">{m.timeline}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section labelledBy="commit-title">
        <SectionIntro
          n={4}
          id="commit-title"
          eyebrow="Our commitments"
          title="What you can expect in every model."
        />
        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c) => (
            <li key={c} className="flex gap-3 border-b border-mist pb-5 text-lg" data-reveal>
              <HexBullet />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Not sure which model fits?"
        text="Tell us about the work and your constraints. We will recommend a model and explain the trade-offs."
      />
    </>
  );
}
