import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { IsoGrid } from "@/components/brand/IsoGrid";
import { LogoMark } from "@/components/brand/LogoMark";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { serviceOptions } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Tell us about your project. Email ${site.email} or use the form and we will reply within one business day.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a project."
        intro="Tell us what you are trying to achieve. We reply within one business day with questions, a suggested next step and an honest view of whether we are the right fit."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section aria-label="Contact form and details" className="bg-white py-16 lg:py-24">
        <Container className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
            <div className="mt-8">
              {/* The form preselects a service from ?service= on the client. */}
              <ContactForm serviceOptions={serviceOptions} />
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-5" aria-labelledby="details-title">
            <div className="bg-ink p-8 text-white clip-corner-lg sm:p-10">
              <h2 id="details-title" className="text-2xl font-semibold tracking-tight">
                Contact details
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm text-ink-300">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="link-underline text-lg font-medium text-brand-300"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm text-ink-300">{site.phones.main.label}</p>
                    <a href={site.phones.main.href} className="link-underline text-lg font-medium">
                      {site.phones.main.display}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm text-ink-300">{site.phones.whatsapp.label}</p>
                    <a
                      href={site.phones.whatsapp.href}
                      className="link-underline text-lg font-medium"
                    >
                      {site.phones.whatsapp.display}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm text-ink-300">Office</p>
                    <address className="text-[0.95rem] not-italic">
                      {site.address.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm text-ink-300">Office hours ({site.timeZoneNote})</p>
                    <dl className="mt-1 space-y-1 text-[0.95rem]">
                      {site.hours.map((h) => (
                        <div key={h.days} className="flex flex-wrap gap-x-2">
                          <dt className="text-ink-200">{h.days}:</dt>
                          <dd>{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder: replace with an embedded map or static map image before launch. */}
            <div
              role="img"
              aria-label={site.address.mapLabel}
              className="relative mt-6 flex aspect-[4/3] items-center justify-center overflow-hidden bg-mist-100 ring-1 ring-mist ring-inset"
            >
              <IsoGrid cell={40} />
              <div className="relative flex flex-col items-center gap-3">
                <LogoMark className="h-12 w-auto" />
                <span className="bg-white px-3 py-1 text-sm font-medium text-ink-700 ring-1 ring-mist">
                  Map placeholder
                </span>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
