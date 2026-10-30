import { HexOutline } from "@/components/brand/HexOutline";
import { SampleBadge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { capabilityNumbers } from "@/content/testimonials";
import { pad } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

const reasons = [
  {
    title: "Senior people on your work",
    text: "The people who scope your project are involved in delivering it. No hand-off to an unknown team after the contract is signed.",
  },
  {
    title: "Software, data and AI under one roof",
    text: "One partner can design the product, build the data platform and add AI where it helps, without gaps between suppliers.",
  },
  {
    title: "Progress you can see every two weeks",
    text: "Working software, dashboards or campaigns at the end of each sprint, with clear reporting on budget and risk.",
  },
  {
    title: "You own everything",
    text: "Code, designs, data and accounts are yours. We document what we build so your team, or another supplier, can take it on.",
  },
  {
    title: "Built to standard",
    text: "Accessibility, security and performance are part of the definition of done, not optional extras.",
  },
  {
    title: "Honest advice",
    text: "If a simpler, cheaper option will do the job, we will tell you. If something is not working, we will say so early.",
  },
];

export function WhyCoxcel({ n }: { n?: number }) {
  return (
    <Section tone="mist" labelledBy="why-title">
      <HexOutline className="absolute -top-24 -left-40 w-[560px] opacity-80" />
      <SectionIntro
        n={n}
        id="why-title"
        eyebrow="Why Coxcel"
        title="A partner that is easy to work with and accountable for results."
      />
      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <div key={r.title} data-reveal className="border-t border-ink pt-6">
            <span className="text-sm font-semibold text-brand-700">{pad(i + 1)}</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{r.title}</h3>
            <p className="mt-3 text-ink-600">{r.text}</p>
          </div>
        ))}
      </div>

      {site.features.capabilityNumbers ? (
        <div className="mt-20 border-t border-mist-300 pt-10" data-reveal>
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-600 uppercase">At a glance</p>
            <SampleBadge />
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {capabilityNumbers.map((c) => (
              <div key={c.label} className="flex flex-col border-l border-mist-300 pl-5">
                <dt className="text-sm text-ink-600">{c.label}</dt>
                <dd className="order-first text-5xl font-semibold tracking-[-0.04em] text-ink">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </Section>
  );
}
