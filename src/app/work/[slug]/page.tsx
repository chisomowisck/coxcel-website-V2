import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HexBullet } from "@/components/brand/Divider";
import { CaseVisual } from "@/components/illustrations/CaseVisual";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { SampleBadge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/config/site";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return buildMetadata({ title: c.title, description: c.summary, path: `/work/${c.slug}` });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c || !site.features.caseStudies) notFound();

  return (
    <>
      <PageHeader
        eyebrow={c.sector}
        title={c.title}
        intro={c.summary}
        breadcrumbs={[
          { label: "Work", href: "/work" },
          { label: c.sector, href: `/work/${c.slug}` },
        ]}
      >
        <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-mist pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-ink-600">Client</dt>
            <dd className="mt-1 flex flex-wrap items-center gap-2 font-medium">
              {c.client}
              {c.sample ? <SampleBadge /> : null}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-600">Sector</dt>
            <dd className="mt-1 font-medium">{c.sector}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-600">Services</dt>
            <dd className="mt-1 space-y-1">
              {c.services.map((slug) => (
                <Link key={slug} href={`/services/${slug}`} className="block font-medium text-brand-700 hover:underline">
                  {getService(slug)?.title}
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </PageHeader>

      <section aria-label="Project illustration" className="bg-mist-100 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <CaseVisual visual={c.visual} />
          </div>
        </Container>
      </section>

      <article className="bg-white py-20 lg:py-28">
        <Container className="grid grid-cols-12 gap-x-10 gap-y-16">
          <section aria-labelledby="challenge-title" className="col-span-12 grid grid-cols-12 gap-x-10 gap-y-6" data-reveal>
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>01</Eyebrow>
              <h2 id="challenge-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em]">The challenge</h2>
            </div>
            <p className="col-span-12 text-lg text-ink-700 lg:col-span-8">{c.challenge}</p>
          </section>
          <section aria-labelledby="approach-title" className="col-span-12 grid grid-cols-12 gap-x-10 gap-y-6 border-t border-mist pt-16" data-reveal>
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>02</Eyebrow>
              <h2 id="approach-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Our approach</h2>
            </div>
            <ol className="col-span-12 space-y-4 lg:col-span-8">
              {c.approach.map((a) => (
                <li key={a} className="flex gap-3 text-lg">
                  <HexBullet />
                  {a}
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="outcome-title" className="col-span-12 grid grid-cols-12 gap-x-10 gap-y-6 border-t border-mist pt-16" data-reveal>
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>03</Eyebrow>
              <h2 id="outcome-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em]">The outcome</h2>
            </div>
            <ul className="col-span-12 grid grid-cols-1 gap-px bg-mist sm:grid-cols-3 lg:col-span-8">
              {c.outcome.map((o) => (
                <li key={o} className="bg-white p-6 text-lg font-medium tracking-tight">
                  <span aria-hidden="true" className="mb-4 block h-[3px] w-8 bg-brand" />
                  {o}
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </article>

      <CtaBand title="Facing a similar challenge?" />
    </>
  );
}
