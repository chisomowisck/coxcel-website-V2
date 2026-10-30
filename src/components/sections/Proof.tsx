import { SampleBadge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { clientLogos, testimonials } from "@/content/testimonials";
import { SectionIntro } from "./SectionIntro";

/** Testimonials. Hidden unless site.features.testimonials is true. */
export function Testimonials({ n }: { n?: number }) {
  if (!site.features.testimonials) return null;
  return (
    <Section labelledBy="testimonials-title">
      <SectionIntro n={n} id="testimonials-title" eyebrow="Clients" title="What clients say." />
      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure key={i} className="border-l-2 border-brand pl-6">
            {t.sample ? <SampleBadge className="mb-4" /> : null}
            <blockquote className="text-xl font-medium tracking-tight">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-ink-600">
              {t.name}, {t.role}, {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/** Client logo row. Hidden unless site.features.clientLogos is true. */
export function ClientLogos() {
  if (!site.features.clientLogos) return null;
  return (
    <section aria-label="Clients" className="border-y border-mist bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-12 gap-y-6 px-4 sm:px-6 lg:px-10">
        <SampleBadge />
        {clientLogos.map((c) => (
          <span key={c.name} className="text-lg font-semibold tracking-tight text-ink-600">
            {c.name}
          </span>
        ))}
      </div>
    </section>
  );
}
