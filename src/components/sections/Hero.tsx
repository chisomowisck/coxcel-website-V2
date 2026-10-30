import { HeroGraphic } from "@/components/brand/HeroGraphic";
import { IsoGrid } from "@/components/brand/IsoGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { serviceGroups } from "@/content/services";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-mist bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-full lg:w-[46%] lg:border-l lg:border-mist"
      >
        <IsoGrid cell={56} className="opacity-80" />
      </div>
      <Container className="relative">
        <div className="grid grid-cols-12 items-center gap-y-10 pt-14 pb-16 sm:pt-20 lg:min-h-[calc(100dvh-4.5rem)] lg:gap-x-10 lg:py-20">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Software, data, AI and digital services</Eyebrow>
            <h1 id="hero-title" className="mt-7 text-display font-semibold">
              We transform your vision into reality with <Accent>innovative ICT solutions.</Accent>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-600 sm:text-xl">
              Coxcel designs, builds and runs the software, data platforms and AI automation that
              help organisations work better and grow with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg">
                Start a project
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <HeroGraphic className="mx-auto h-auto w-full max-w-[520px] overflow-visible" />
          </div>
        </div>
      </Container>
      <div className="relative border-t border-mist bg-white">
        <Container>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {serviceGroups.map((g, i) => (
              <li
                key={g.id}
                className="border-mist py-5 pr-4 text-sm odd:border-r sm:border-r sm:pl-0 lg:[&:nth-child(6)]:border-r-0"
              >
                <span className="mr-2 font-semibold text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`/services#${g.id}`}
                  className="link-underline font-medium text-ink hover:text-brand-700"
                >
                  {g.label}
                </a>
                <span className="block text-ink-600">{g.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
