import { site } from "@/config/site";
import type { Service } from "@/content/services";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/android-chrome-512x512.png`,
    email: site.email,
    description: site.description,
    sameAs: site.socials.map((s) => s.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phones.main.display,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Worldwide",
  };
}

export function articleJsonLd(a: { title: string; summary: string; date: string; author: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.date,
    author: { "@type": "Organization", name: a.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${a.slug}`,
  };
}

/** Renders JSON-LD safely. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
