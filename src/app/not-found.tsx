import type { Metadata } from "next";
import { HexOutline } from "@/components/brand/HexOutline";
import { IsoGrid } from "@/components/brand/IsoGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative overflow-hidden bg-white">
      <IsoGrid className="opacity-70" />
      <HexOutline className="absolute top-1/2 -right-32 hidden w-[640px] -translate-y-1/2 md:block" />
      <Container className="relative py-24 sm:py-32 lg:py-40">
        <Eyebrow>Error 404</Eyebrow>
        <p aria-hidden="true" className="mt-6 text-[7rem] leading-none font-semibold tracking-[-0.06em] text-brand sm:text-[11rem]">
          404
        </p>
        <h1 id="nf-title" className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          This page has moved on. Let us point you forward.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-600">
          The page you were looking for does not exist or has been renamed. These links will get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Go to the home page
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="secondary">
            Browse services
          </ButtonLink>
        </div>
        <p className="mt-8">
          <TextLink href="/contact" arrow>
            Or contact us
          </TextLink>
        </p>
      </Container>
    </section>
  );
}
