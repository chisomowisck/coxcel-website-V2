import type { Metadata } from "next";
import Link from "next/link";
import { HexBullet } from "@/components/brand/Divider";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { industries } from "@/content/industries";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Coxcel works with finance, retail and e-commerce, healthcare, logistics, education, the public sector and startups.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Technology shaped by the realities of your sector."
        intro="We bring practical knowledge of the regulations, systems and customer expectations that shape each industry we serve."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      >
        <nav aria-label="Industries on this page" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <a
                  href={`#${ind.slug}`}
                  className="inline-flex border border-mist-300 bg-white px-3 py-1.5 text-sm font-medium hover:border-ink"
                >
                  {ind.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {industries.map((ind, i) => (
        <section
          key={ind.slug}
          id={ind.slug}
          aria-labelledby={`${ind.slug}-title`}
          className={i % 2 === 0 ? "bg-white py-20 lg:py-24" : "bg-mist-100 py-20 lg:py-24"}
        >
          <Container className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-5" data-reveal>
              <span
                aria-hidden="true"
                data-num={pad(i + 1)}
                className="block text-[5rem] leading-none font-semibold tracking-[-0.06em] text-mist-300 before:content-[attr(data-num)]"
              />
              <h2
                id={`${ind.slug}-title`}
                className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
              >
                {ind.name}
              </h2>
              <p className="mt-4 text-lg text-ink-600">{ind.summary}</p>
            </div>
            <div
              className="col-span-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-7"
              data-reveal
            >
              <div>
                <h3 className="text-sm font-semibold tracking-[0.18em] text-ink-600 uppercase">
                  Common challenges
                </h3>
                <ul className="mt-5 space-y-4">
                  {ind.challenges.map((c) => (
                    <li key={c} className="flex gap-3">
                      <HexBullet />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-[0.18em] text-ink-600 uppercase">
                  How we help
                </h3>
                <ul className="mt-5 space-y-3">
                  {ind.services.map((slug) => {
                    const s = getService(slug);
                    if (!s) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="group flex items-center justify-between gap-3 border-b border-mist-300 pb-3 font-medium hover:text-brand-700"
                        >
                          {s.title}
                          <span
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                          >
                            &rarr;
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
