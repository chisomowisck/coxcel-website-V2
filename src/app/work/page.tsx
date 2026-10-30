import type { Metadata } from "next";
import Link from "next/link";
import { CaseVisual } from "@/components/illustrations/CaseVisual";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { SampleBadge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description: "Case studies showing how Coxcel approaches software, data and AI projects, from the problem to the outcome.",
  path: "/work",
});

export default function WorkPage() {
  const items = site.features.caseStudies ? caseStudies : [];
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="How we turn business problems into working systems."
        intro="Each case study follows the same shape: the challenge, our approach and the outcome."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      >
        {items.some((c) => c.sample) ? (
          <p className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink-600">
            <SampleBadge />
            The projects below are representative examples and will be replaced with published client work.
          </p>
        ) : null}
      </PageHeader>

      <section aria-label="Case studies" className="bg-white py-20 lg:py-28">
        <Container>
          {items.length === 0 ? (
            <p className="text-lg text-ink-600">
              Case studies are being prepared. <Link href="/contact" className="font-medium text-brand-700 underline underline-offset-4">Ask us</Link> for examples relevant to your project.
            </p>
          ) : (
            <ul className="space-y-24">
              {items.map((c, i) => (
                <li key={c.slug} data-reveal>
                  <article className="grid grid-cols-12 items-center gap-x-10 gap-y-8">
                    <div className={i % 2 === 0 ? "col-span-12 lg:col-span-7" : "col-span-12 lg:order-2 lg:col-span-7"}>
                      <Link href={`/work/${c.slug}`} tabIndex={-1} aria-hidden="true" className="group block bg-mist-100 p-6 sm:p-10">
                        <div className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
                          <CaseVisual visual={c.visual} />
                        </div>
                      </Link>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                      <span aria-hidden="true" className="text-5xl font-semibold tracking-[-0.05em] text-mist-300">{pad(i + 1)}</span>
                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-600">
                        <span>{c.sector}</span>
                        {c.sample ? <SampleBadge /> : null}
                      </div>
                      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                        <Link href={`/work/${c.slug}`} className="hover:text-brand-700">
                          {c.title}
                        </Link>
                      </h2>
                      <p className="mt-4 text-lg text-ink-600">{c.summary}</p>
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services used">
                        {c.services.map((slug) => (
                          <li key={slug} className="border border-mist-300 px-2.5 py-1 text-xs font-medium text-ink-700">
                            {getService(slug)?.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
