import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { articles } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";
import { formatDate, pad } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description: "Practical writing from Coxcel on software, data, AI and digital growth.",
  path: "/insights",
});

export default function InsightsPage() {
  const [lead, ...rest] = articles;
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Practical thinking on software, data and AI."
        intro="Short, useful articles drawn from our work. No hype, just what we have learned."
        breadcrumbs={[{ label: "Insights", href: "/insights" }]}
      />
      <section aria-label="Articles" className="bg-white py-20 lg:py-28">
        <Container>
          <article className="group grid grid-cols-12 gap-x-10 gap-y-6 border-b border-mist pb-16" data-reveal>
            <div className="col-span-12 lg:col-span-7">
              <p className="flex flex-wrap gap-x-3 text-sm text-ink-600">
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                <span aria-hidden="true">/</span>
                <span>{lead.readingMinutes} min read</span>
                <span aria-hidden="true">/</span>
                <span>{lead.tags.join(", ")}</span>
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                <Link href={`/insights/${lead.slug}`} className="group-hover:text-brand-700">
                  {lead.title}
                </Link>
              </h2>
            </div>
            <div className="col-span-12 flex flex-col justify-end lg:col-span-5">
              <p className="text-lg text-ink-600">{lead.summary}</p>
              <Link href={`/insights/${lead.slug}`} className="mt-6 font-semibold text-brand-700">
                <span className="link-underline">Read article</span>
                <span className="sr-only">: {lead.title}</span>
              </Link>
            </div>
          </article>
          <ul className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {rest.map((a, i) => (
              <li key={a.slug} className="border-b border-mist py-12" data-reveal>
                <article className="group">
                  <span aria-hidden="true" className="text-4xl font-semibold tracking-[-0.04em] text-mist-300">{pad(i + 2)}</span>
                  <p className="mt-4 flex flex-wrap gap-x-3 text-sm text-ink-600">
                    <time dateTime={a.date}>{formatDate(a.date)}</time>
                    <span aria-hidden="true">/</span>
                    <span>{a.readingMinutes} min read</span>
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    <Link href={`/insights/${a.slug}`} className="group-hover:text-brand-700">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-ink-600">{a.summary}</p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
