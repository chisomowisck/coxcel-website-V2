import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { articles } from "@/content/insights";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/process", priority: 0.6 },
    { path: "/industries", priority: 0.6 },
    { path: "/insights", priority: 0.6 },
    { path: "/careers", priority: 0.4 },
    { path: "/contact", priority: 0.8 },
    { path: "/legal/privacy", priority: 0.2 },
    { path: "/legal/terms", priority: 0.2 },
    { path: "/legal/cookies", priority: 0.2 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: url(p.path),
      priority: p.priority,
      changeFrequency: "monthly" as const,
    })),
    ...services.map((s) => ({
      url: url(`/services/${s.slug}`),
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...(site.features.caseStudies
      ? caseStudies.map((c) => ({
          url: url(`/work/${c.slug}`),
          priority: 0.6,
          changeFrequency: "yearly" as const,
        }))
      : []),
    ...articles.map((a) => ({
      url: url(`/insights/${a.slug}`),
      lastModified: a.date,
      priority: 0.5,
    })),
  ];
}
