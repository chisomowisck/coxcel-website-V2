import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { phases } from "@/content/process";
import { pad } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

/** "How we work": five phases on an Ink block with an upward stepped line. */
export function ProcessSteps({ n, showLink = true }: { n?: number; showLink?: boolean }) {
  return (
    <Section tone="ink" labelledBy="process-title">
      <SectionIntro
        n={n}
        tone="dark"
        id="process-title"
        eyebrow="How we work"
        title="Discover, Design, Build, Launch, Grow."
        intro="A simple, repeatable process with something tangible at the end of every phase, so you always know where the work stands."
        aside={showLink ? <TextLink href="/process" tone="dark" arrow>Our process</TextLink> : undefined}
      />
      <ol className="mt-16 grid grid-cols-1 gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-5">
        {phases.map((p, i) => (
          <li key={p.title} data-reveal className="relative flex flex-col bg-ink p-6 lg:pt-8" style={{ transitionDelay: `${i * 70}ms` }}>
            {/* stepped rise: each phase sits a little higher, echoing the logo arrow */}
            <div aria-hidden="true" className="mb-6 hidden h-24 items-end lg:flex">
              <span className="block w-full bg-ink-700" style={{ height: `${20 + i * 18}%` }}>
                <span className="block h-[3px] w-full bg-brand" />
              </span>
            </div>
            <span className="text-sm font-semibold text-brand-300">{pad(i + 1)}</span>
            <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-300">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
