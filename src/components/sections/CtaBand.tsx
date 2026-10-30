import { HeroGraphic } from "@/components/brand/HeroGraphic";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";

/** Closing call to action on an Ink block. */
export function CtaBand({
  title = "Have a project in mind? Let us talk it through.",
  text = "Tell us what you are trying to achieve. We will reply within one business day with questions, a suggested next step and an honest view of whether we are the right fit.",
  href = "/contact",
  label = "Start a project",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ink text-white">
      <Container className="relative grid grid-cols-12 items-center gap-y-10 py-20 lg:py-28">
        <div className="col-span-12 lg:col-span-8">
          <h2
            id="cta-title"
            className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">{text}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href={href} size="lg" variant="inverse">
              {label}
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="link-underline self-start text-lg font-medium text-brand-300 sm:self-auto"
            >
              {site.email}
            </a>
          </div>
        </div>
        <div className="col-span-12 hidden lg:col-span-4 lg:block">
          <HeroGraphic tone="dark" decorative className="h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}
