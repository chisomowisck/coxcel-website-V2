import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { Container } from "@/components/ui/Container";

/** Shared layout for legal documents. */
export function LegalPage({
  title,
  intro,
  updated,
  href,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        intro={intro}
        breadcrumbs={[{ label: title, href }]}
      >
        <p className="mt-6 text-sm text-ink-600">Last updated: {updated}</p>
      </PageHeader>
      <section className="bg-white py-16 lg:py-24">
        <Container className="grid grid-cols-12">
          <div className="prose-coxcel col-span-12 lg:col-span-8 lg:col-start-3">
            <p className="border-l-4 border-ink bg-mist-100 p-4 text-[0.95rem]">
              {/* TODO: have this document reviewed by a qualified adviser before launch. */}
              This document is a template written in plain English. It must be reviewed by a
              qualified legal adviser and completed with Coxcel&apos;s registered company details
              before the site goes live.
            </p>
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
