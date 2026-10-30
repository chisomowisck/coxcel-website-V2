import type { Metadata } from "next";
import { site } from "@/config/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Set when the page has its own generated social image route. */
  ogImagePath?: string;
  type?: "website" | "article";
};

/**
 * Builds per-page metadata: title (templated as "Page | Coxcel" by the root layout),
 * description, canonical URL, Open Graph and Twitter cards.
 */
export function buildMetadata({ title, description, path, ogImagePath, type = "website" }: PageMeta): Metadata {
  const images = ogImagePath ? [{ url: ogImagePath, width: 1200, height: 630, alt: title }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type,
      locale: "en_GB",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
