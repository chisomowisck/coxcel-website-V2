import type { Metadata } from "next";
import { Divider } from "@/components/brand/Divider";
import { HexOutline } from "@/components/brand/HexOutline";
import { LogoMark } from "@/components/brand/LogoMark";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { SampleBadge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { team } from "@/content/team";
import { values } from "@/content/values";
import { buildMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Coxcel is a technology company for software, data, AI and digital services. Learn about our story, the meaning of our logo, our values and how we work.",
  path: "/about",
});

const approach = [
  {
    title: "Start with the problem",
    text: "We agree what success looks like before discussing technology.",
  },
  {
    title: "Small, visible steps",
    text: "Short cycles with working results, so you can steer early and often.",
  },
  {
    title: "Build for the long run",
    text: "Documentation, tests and handover are part of the work, not extras.",
  },
  { title: "Measure what matters", text: "We report on outcomes you care about, not activity." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Coxcel"
        title="We help organisations make steady, measurable progress with technology."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <Section labelledBy="story-title">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
          <SectionIntro
            n={1}
            id="story-title"
            eyebrow="Our story"
            title="Built to close the gap between ambition and delivery."
            className="col-span-12"
          />
          <div
            className="col-span-12 space-y-5 text-lg text-ink-700 lg:col-span-7 lg:col-start-4"
            data-reveal
          >
            <p>
              Many organisations know what they want technology to do for them. Fewer have a partner
              who can take that ambition from a whiteboard to something people use every day, and
              then keep improving it.
            </p>
            <p>
              Coxcel was founded to be that partner. We bring software engineers, data specialists,
              designers and digital marketers together in one team, so a project does not stall at
              the boundary between disciplines or suppliers.
            </p>
            <p>
              We work with startups testing a new idea, established businesses modernising how they
              operate, and public bodies improving services for citizens. The common thread is a
              clear problem and a commitment to doing the work properly.
            </p>
          </div>
        </div>
        <Divider className="mt-20 lg:mt-28" />
      </Section>

      <Section tone="ink" labelledBy="logo-title">
        <HexOutline tone="dark" className="absolute -right-32 -bottom-40 w-[620px]" />
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-5" data-reveal>
            <div className="relative mx-auto aspect-square max-w-sm border border-ink-700 p-12">
              <LogoMark className="h-full w-full" title="The Coxcel mark" />
              <span
                aria-hidden="true"
                className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-brand"
              />
              <span
                aria-hidden="true"
                className="absolute -right-px -bottom-px h-6 w-6 border-r-2 border-b-2 border-brand"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7" data-reveal>
            <SectionIntro
              n={2}
              tone="dark"
              id="logo-title"
              eyebrow="Our mark"
              title="A letter C with an arrow that points upward."
              className="[&>div]:lg:col-span-12"
            />
            <div className="mt-8 space-y-5 text-lg text-ink-300">
              <p>
                The Coxcel mark joins two ideas. The hexagonal{" "}
                <strong className="font-semibold text-white">C</strong> is the first letter of our
                name: solid, structured and recognisable at any size.
              </p>
              <p>
                Its lower stroke ends in an{" "}
                <strong className="font-semibold text-white">upward-pointing arrow</strong>,
                separated by a thin cut. The arrow stands for excellence, growth and forward
                momentum: the progress we aim to deliver for every client, and our own commitment to
                keep improving.
              </p>
              <p>
                The same geometry runs through this website: the 30 degree angles, the hexagons and
                the split cut you see in dividers, cards and illustrations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="mission-title">
        <SectionIntro
          n={3}
          id="mission-title"
          eyebrow="Mission and values"
          title="Our mission: to help every client move forward with technology they can rely on."
        />
        <ul className="mt-16 grid grid-cols-1 gap-px bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <li key={v.title} className="bg-white p-6 sm:p-8" data-reveal>
              <span className="text-sm font-semibold text-brand-700">{pad(i + 1)}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-3 text-ink-600">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="approach-title">
        <SectionIntro
          n={4}
          id="approach-title"
          eyebrow="Approach"
          title="How we approach every engagement."
        />
        <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {approach.map((a, i) => (
            <li key={a.title} className="flex gap-6 border-t border-ink pt-6" data-reveal>
              <span
                aria-hidden="true"
                data-num={pad(i + 1)}
                className="text-4xl font-semibold tracking-[-0.04em] text-mist-300 before:content-[attr(data-num)]"
              />
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-2 text-ink-600">{a.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {site.features.team ? (
        <Section labelledBy="team-title">
          <SectionIntro
            n={5}
            id="team-title"
            eyebrow="Team"
            title="The people behind the work."
            aside={<SampleBadge />}
          />
          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li
                key={`${m.role}-${i}`}
                className="group flex gap-5 border-t border-mist pt-6"
                data-reveal
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-[4.5rem] shrink-0 items-center justify-center bg-ink text-lg font-semibold text-white transition-colors clip-hex group-hover:bg-brand-600"
                >
                  {m.initials}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {m.name}
                    {m.sample ? <span className="sr-only"> (sample)</span> : null}
                  </h3>
                  <p className="text-sm font-medium text-brand-700">{m.role}</p>
                  <p className="mt-2 text-[0.95rem] text-ink-600">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand
        title="Want to work with us?"
        text="Whether you have a project in mind or are exploring a career at Coxcel, we would like to hear from you."
      />
    </>
  );
}
