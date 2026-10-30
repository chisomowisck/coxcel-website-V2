import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { HexOutline } from "@/components/brand/HexOutline";
import { Container } from "@/components/ui/Container";
import { companyNav, legalNav, site } from "@/config/site";
import { getService, servicesByGroup } from "@/content/services";
import { CurrentYear } from "./CurrentYear";

const linkClass = "link-underline text-ink-200 transition-colors hover:text-white";

const popular = [
  "web-application-development",
  "mobile-app-development",
  "data-visualization-bi-dashboards",
  "ai-agents-chatbots",
  "cloud-solutions-migration",
  "search-engine-optimisation",
]
  .map((slug) => getService(slug))
  .filter((s) => s !== undefined);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <HexOutline tone="dark" className="absolute -right-40 -bottom-48 w-[640px] opacity-60" />
      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <Logo variant="reversed" />
            <p className="mt-6 max-w-sm text-[0.95rem] text-ink-300">{site.description}</p>
            <dl className="mt-8 space-y-3 text-[0.95rem]">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="link-underline font-medium text-brand-300">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">{site.phones.main.label}</dt>
                <dd>
                  <a href={site.phones.main.href} className={linkClass}>
                    {site.phones.main.display}
                  </a>
                  <span className="text-ink-300"> (main)</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">{site.phones.whatsapp.label}</dt>
                <dd>
                  <a href={site.phones.whatsapp.href} className={linkClass}>
                    {site.phones.whatsapp.display}
                  </a>
                  <span className="text-ink-300"> (WhatsApp)</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="text-ink-300">{site.address.lines.join(", ")}</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Services" className="col-span-12 sm:col-span-8 lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-300 uppercase">Services</p>
            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <ul className="space-y-2.5 text-[0.95rem]">
                {servicesByGroup.map((g) => (
                  <li key={g.id}>
                    <Link href={`/services#${g.id}`} className={linkClass}>
                      {g.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 text-[0.95rem]" aria-label="Popular services">
                {popular.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className={linkClass}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <nav aria-label="Company" className="col-span-6 sm:col-span-4 lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-300 uppercase">Company</p>
            <ul className="mt-5 space-y-2.5 text-[0.95rem]">
              {companyNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-ink-300 uppercase">Follow</p>
            <ul className="mt-5 space-y-2.5 text-[0.95rem]">
              {site.socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className={linkClass} rel="noopener noreferrer" target="_blank">
                    {s.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-700 pt-8 text-sm text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <CurrentYear /> {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
