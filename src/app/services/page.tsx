import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesByGroup } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Thirty services across software and product, data and analytics, AI automation, cloud and operations, advisory and digital marketing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to build, run and grow digital products."
        intro="Thirty services in six disciplines. Start with one, or bring us a problem and we will assemble the right team."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      >
        <nav aria-label="Service groups" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {servicesByGroup.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex border border-mist-300 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:border-ink"
                >
                  {g.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {servicesByGroup.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-title`}
          className={gi % 2 === 0 ? "bg-white py-20 lg:py-28" : "bg-mist-100 py-20 lg:py-28"}
        >
          <Container>
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-6" data-reveal>
              <div className="col-span-12 lg:col-span-4">
                <span
                  aria-hidden="true"
                  data-num={pad(gi + 1)}
                  className="block text-[5rem] leading-none font-semibold tracking-[-0.06em] text-mist-300 before:content-[attr(data-num)] lg:text-[7rem]"
                />
              </div>
              <div className="col-span-12 lg:col-span-8">
                <Eyebrow>{group.label}</Eyebrow>
                <h2
                  id={`${group.id}-title`}
                  className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
                >
                  {group.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-ink-600">{group.summary}</p>
              </div>
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((s) => (
                <li key={s.slug} data-reveal>
                  <Card href={`/services/${s.slug}`}>
                    <ServiceIcon
                      name={s.icon}
                      className="size-7 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 motion-reduce:transition-none"
                    />
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-[0.95rem] text-ink-600">{s.summary}</p>
                    <span className="mt-auto pt-6 text-sm font-semibold text-brand-700">
                      <span className="link-underline">Learn more</span>
                      <span className="sr-only"> about {s.title}</span>
                    </span>
                  </Card>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem and we will recommend where to start. The first conversation is free and carries no obligation."
      />
    </>
  );
}
