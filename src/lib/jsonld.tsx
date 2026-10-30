import { site } from "@/config/site";
import type { Service } from "@/content/services";

const orgId = () => `${site.url}/#organization`;

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-GB",
    publisher: { "@id": orgId() },
  };
}

/** Breadcrumb trail. Items are site-relative paths, starting after Home. */
export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: new URL(item.href, site.url).toString(),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId(),
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
    provider: { "@type": "Organization", "@id": orgId(), name: site.name, url: site.url },
    areaServed: "Worldwide",
  };
}

export function articleJsonLd(a: {
  title: string;
  summary: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.date,
    author: { "@type": "Organization", name: a.author },
    publisher: { "@type": "Organization", "@id": orgId(), name: site.name, url: site.url },
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
