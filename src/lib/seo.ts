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
export function buildMetadata({
  title,
  description,
  path,
  ogImagePath = "/opengraph-image",
  type = "website",
}: PageMeta): Metadata {
  // Defaults to the site-wide generated image. Segments with their own opengraph-image file
  // (for example /services/[slug]) override this automatically.
  const images = [{ url: ogImagePath, width: 1200, height: 630, alt: `${title} | ${site.name}` }];
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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: images.map((i) => i.url),
    },
  };
}
