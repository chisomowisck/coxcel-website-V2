import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Divider } from "@/components/brand/Divider";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { articles, getArticle } from "@/content/insights";
import { articleJsonLd, JsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.summary, path: `/insights/${a.slug}`, type: "article" });
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const { default: Body } = await article.load();
  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <PageHeader
        eyebrow={article.tags.join(" / ")}
        title={article.title}
        intro={article.summary}
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: article.title, href: `/insights/${article.slug}` },
        ]}
      >
        <p className="mt-8 flex flex-wrap gap-x-3 text-sm text-ink-600">
          <span>By {article.author}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden="true">/</span>
          <span>{article.readingMinutes} min read</span>
        </p>
      </PageHeader>

      <article className="bg-white py-16 lg:py-24">
        <Container className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="prose-coxcel">
              <Body />
            </div>
            <Divider className="mt-16" />
            <nav aria-label="More insights" className="mt-12">
              <h2 className="text-sm font-semibold tracking-[0.18em] text-ink-600 uppercase">More insights</h2>
              <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {others.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/insights/${a.slug}`} className="group block border-t border-ink pt-4">
                      <span className="text-lg font-semibold tracking-tight group-hover:text-brand-700">{a.title}</span>
                      <span className="mt-2 block text-sm text-ink-600">{a.readingMinutes} min read</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
