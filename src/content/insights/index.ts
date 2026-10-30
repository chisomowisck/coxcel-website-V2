import type { MDXContent } from "mdx/types";

/** Insights articles. Add an entry here and an .mdx file of the same slug to publish. */
export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date
  author: string;
  readingMinutes: number;
  tags: string[];
  load: () => Promise<{ default: MDXContent }>;
};

export const articles: Article[] = [
  {
    slug: "scoping-an-mvp",
    title: "Scoping an MVP that answers the right question",
    summary:
      "Most first releases are too big because nobody agreed what they were meant to prove. A practical method for cutting scope without cutting value.",
    date: "2026-10-20",
    author: "Coxcel",
    readingMinutes: 6,
    tags: ["Product", "Strategy"],
    load: () => import("./scoping-an-mvp.mdx"),
  },
  {
    slug: "rag-in-practice",
    title: "Retrieval-augmented generation in practice",
    summary:
      "What it really takes to let staff or customers ask questions of your documents and get answers they can trust, with sources.",
    date: "2026-10-06",
    author: "Coxcel",
    readingMinutes: 8,
    tags: ["AI", "Data"],
    load: () => import("./rag-in-practice.mdx"),
  },
  {
    slug: "signs-you-need-a-data-warehouse",
    title: "Five signs your reporting needs a data warehouse",
    summary:
      "When spreadsheets and point-to-point exports stop scaling, a warehouse pays for itself. Here is how to tell, and how to start small.",
    date: "2026-09-22",
    author: "Coxcel",
    readingMinutes: 5,
    tags: ["Data", "BI"],
    load: () => import("./signs-you-need-a-data-warehouse.mdx"),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
