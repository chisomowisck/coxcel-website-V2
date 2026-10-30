import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HexBullet } from "@/components/brand/Divider";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { PageHeader } from "@/components/sections/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getGroup, getService, services } from "@/content/services";
import { JsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const group = getGroup(service.group);
  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 3);
  const contactHref = `/contact?service=${service.slug}`;

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <PageHeader
        eyebrow={group.name}
        title={service.title}
        intro={service.valueProp}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contactHref} size="lg">
            Discuss this service
          </ButtonLink>
          <ButtonLink href="#included" size="lg" variant="secondary" arrow={false}>
            What is included
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Problems */}
      <section aria-labelledby="problems-title" className="bg-white py-20 lg:py-28">
        <Container className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-4" data-reveal>
            <ServiceIcon name={service.icon} className="size-10 text-brand" />
            <Eyebrow className="mt-8">The problem</Eyebrow>
            <h2 id="problems-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Signs you need this
            </h2>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-px bg-mist sm:grid-cols-2 lg:col-span-8">
            {service.problems.map((p, i) => (
              <li key={p} data-reveal className="bg-white p-6 sm:p-8">
                <span className="text-sm font-semibold text-ink-400">{pad(i + 1)}</span>
                <p className="mt-3 text-lg font-medium tracking-tight">{p}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Deliverables */}
      <section id="included" aria-labelledby="included-title" className="bg-mist-100 py-20 lg:py-28">
        <Container className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-4" data-reveal>
            <Eyebrow>Deliverables</Eyebrow>
            <h2 id="included-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              What is included
            </h2>
            <p className="mt-4 text-ink-600">Scope is confirmed during discovery. A typical engagement includes:</p>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-8">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 border-b border-mist-300 pb-5 text-lg" data-reveal>
                <HexBullet />
                {d}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Process */}
      <section aria-labelledby="delivery-title" className="bg-ink py-20 text-white lg:py-28">
        <Container>
          <div data-reveal>
            <Eyebrow tone="dark">How we deliver</Eyebrow>
            <h2 id="delivery-title" className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              A clear path from first conversation to results
            </h2>
          </div>
          <ol className="mt-14 grid grid-cols-1 gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, i) => (
              <li key={step.title} className="bg-ink p-6" data-reveal>
                <span className="text-sm font-semibold text-brand-300">{pad(i + 1)}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] text-ink-300">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Technologies + FAQs */}
      <section aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
        <Container className="grid grid-cols-12 gap-x-10 gap-y-14">
          <div className="col-span-12 lg:col-span-4" data-reveal>
            <Eyebrow>Typical technologies</Eyebrow>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Typical technologies">
              {service.technologies.map((t) => (
                <li key={t}>
                  <Badge>{t}</Badge>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-600">
              We choose tools to fit your team, licences and constraints, not the other way round.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-title" className="mt-4 mb-8 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Frequently asked questions
            </h2>
            <FaqList items={service.faqs} />
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section aria-labelledby="related-title" className="border-t border-mist bg-mist-100 py-20">
          <Container>
            <h2 id="related-title" className="text-2xl font-semibold tracking-tight">
              More in {group.name}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <Card href={`/services/${s.slug}`}>
                    <ServiceIcon name={s.icon} className="text-brand" />
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{s.summary}</p>
                  </Card>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/services" className="link-underline font-semibold text-brand-700">
                View all services
              </Link>
            </p>
          </Container>
        </section>
      ) : null}

      <CtaBand title={`Ready to talk about ${service.title}?`} href={contactHref} label="Discuss this service" />
    </>
  );
}
