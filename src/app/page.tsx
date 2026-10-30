import type { Metadata } from "next";
import { Divider } from "@/components/brand/Divider";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ClientLogos, Testimonials } from "@/components/sections/Proof";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { WhyCoxcel } from "@/components/sections/WhyCoxcel";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { homeFaqs } from "@/content/faqs";
import { JsonLd, websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  let n = 0;
  const next = () => ++n;
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <CapabilityStrip />
      <ClientLogos />
      <ServiceGroups n={next()} />
      <ProcessSteps n={next()} />
      <IndustriesGrid n={next()} />
      {site.features.caseStudies ? <SelectedWork n={next()} /> : null}
      <WhyCoxcel n={next()} />
      {site.features.testimonials ? <Testimonials n={next()} /> : null}
      <Section labelledBy="faq-title">
        <Divider className="mb-16 lg:mb-20" />
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
          <SectionIntro
            n={next()}
            id="faq-title"
            eyebrow="Questions"
            title="Frequently asked questions."
            className="col-span-12 lg:col-span-5 [&>div]:lg:col-span-12"
          />
          <FaqList items={homeFaqs} className="col-span-12 lg:col-span-7" />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
