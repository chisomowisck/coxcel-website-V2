import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/lib/jsonld";
import type { ReactNode } from "react";
import { HexOutline } from "@/components/brand/HexOutline";
import { IsoGrid } from "@/components/brand/IsoGrid";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

/** Inner-page header with breadcrumb, large title and isometric line art. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-mist bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-1/2 border-l border-mist lg:block"
      >
        <IsoGrid className="opacity-70" />
      </div>
      <HexOutline className="absolute top-1/2 -right-24 hidden w-[520px] -translate-y-1/2 lg:block" />
      {breadcrumbs ? <JsonLd data={breadcrumbJsonLd(breadcrumbs)} /> : null}
      <Container className="relative pt-14 pb-16 sm:pt-20 sm:pb-24">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-600">
              <li>
                <Link href="/" className="link-underline hover:text-ink">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-3 w-px rotate-[30deg] bg-ink-400" />
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink">
                      {b.label}
                    </span>
                  ) : (
                    <Link href={b.href} className="link-underline hover:text-ink">
                      {b.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as={1} size="xl" className="mt-6">
            {title}
          </Heading>
          {intro ? <p className="mt-6 max-w-2xl text-lg text-ink-600 sm:text-xl">{intro}</p> : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
