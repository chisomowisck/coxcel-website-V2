import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesByGroup } from "@/content/services";
import { pad } from "@/lib/utils";
import { SectionIntro } from "./SectionIntro";

export function ServiceGroups({ n = 1 }: { n?: number }) {
  return (
    <Section labelledBy="services-title" id="services">
      <SectionIntro
        n={n}
        id="services-title"
        eyebrow="What we do"
        title="Six disciplines. One team accountable for the outcome."
        intro="Most problems cross boundaries: a new product needs data, a data platform needs good software, and growth depends on both. We bring the right mix of skills to each engagement."
      />
      <div className="mt-16 grid grid-cols-1 border-t border-l border-mist sm:grid-cols-2 lg:grid-cols-3">
        {servicesByGroup.map((group, i) => (
          <article
            key={group.id}
            data-reveal
            className="group relative flex flex-col border-r border-b border-mist p-6 transition-colors duration-300 hover:bg-mist-100 sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-ink-600">{pad(i + 1)}</span>
              <ServiceIcon
                name={group.services[0].icon}
                className="size-7 text-brand transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 motion-reduce:transition-none"
              />
            </div>
            <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase">
              {group.label}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              <Link href={`/services#${group.id}`} className="after:absolute after:inset-0">
                {group.title}
              </Link>
            </h3>
            <p className="mt-3 text-ink-600">{group.summary}</p>
            <ul className="mt-6 space-y-1.5 text-sm text-ink-700">
              {group.services.slice(0, 4).map((s) => (
                <li key={s.slug} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-1.5 w-2 shrink-0 bg-ink-300 clip-hex"
                  />
                  {s.title}
                </li>
              ))}
              {group.services.length > 4 ? (
                <li className="pl-4.5 text-ink-600">and {group.services.length - 4} more</li>
              ) : null}
            </ul>
            <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-semibold text-brand-700">
              {group.services.length} services
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
