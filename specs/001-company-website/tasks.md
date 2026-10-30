# Tasks: Coxcel Company Website

**Input**: Design documents from `/specs/001-company-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md
**Tests**: Not requested as automated test suites; verification is via build, lint, brand guard
and browser checks (Polish phase).

## Phase 1: Setup

- [ ] T001 Scaffold Next.js (TypeScript, Tailwind, ESLint, App Router, `src/`, `@/*` alias) into the repository root, preserving `_brand/`, `.specify/`, `.claude/`, `specs/`
- [ ] T002 Install dependencies: resend, @react-email/components, react-hook-form, @hookform/resolvers, zod, lucide-react, @next/mdx, @mdx-js/loader, @mdx-js/react, @types/mdx, @fontsource/poppins; dev: prettier, prettier-plugin-tailwindcss in package.json
- [ ] T003 [P] Configure Prettier in .prettierrc.json and .prettierignore; add `format`, `lint`, `check:brand`, `prebuild` scripts in package.json
- [ ] T004 [P] Create scripts/check-brand.mjs failing on gradient keywords, `bg-linear|bg-radial|bg-conic`, gradient stop utilities and emoji (`\p{Extended_Pictographic}`)
- [ ] T005 [P] Unzip _brand/favicon_io.zip into public/, copy logo PNGs to public/logo-full.png and public/logo-mark.png, update public/site.webmanifest (name "Coxcel", short_name "Coxcel", theme_color #25262C, background_color #FFFFFF)
- [ ] T006 [P] Create .env.example with RESEND_API_KEY, CONTACT_TO_EMAIL=info@coxcel.com, CONTACT_FROM_EMAIL="Coxcel <noreply@coxcel.com>", NEXT_PUBLIC_SITE_URL; update .gitignore
- [ ] T007 Configure next.config.ts with @next/mdx (pageExtensions incl. mdx) and mdx-components.tsx

## Phase 2: Foundational (blocks all stories)

- [ ] T008 Define tokens in src/app/globals.css `@theme` (reset default palette; brand 50-900 with brand=#457AF4, brand-600=#3366E0, brand-700=#2A5BD7, brand-300=#8FB0F8; ink steps with ink=#25262C, ink-600=#5A5C66, ink-300=#A9AAB2; mist steps with mist=#E2E2E2; white; --color-logo), base typography, focus ring, link underline animation, clip-path utilities, reveal and reduced-motion rules
- [ ] T009 Load Poppins 400/500/600/700 via next/font in src/app/layout.tsx and map to --font-sans
- [ ] T010 [P] Create src/config/site.ts (name, url, description, email info@coxcel.com, phones main + whatsapp with TODO placeholders `+00 00 000 0000`, address, hours, socials, feature flags, budgetRanges, logoColor)
- [ ] T011 [P] Create src/lib/utils.ts (cn helper) and src/lib/seo.ts (buildMetadata with title, description, canonical, OG, Twitter)
- [ ] T012 [P] Create UI primitives in src/components/ui/: Button.tsx, Container.tsx, Section.tsx, Card.tsx, Badge.tsx, Heading.tsx, SectionNumber.tsx, SampleBadge.tsx, TextLink.tsx, Eyebrow.tsx
- [ ] T013 [P] Create brand components in src/components/brand/: LogoMark.tsx (inline SVG, var(--color-logo)), Logo.tsx (mark + wordmark, light/reversed), IsoGrid.tsx, HexOutline.tsx, Divider.tsx (angled split-cut divider), HexMarker list marker
- [ ] T014 Create src/content/services.ts with 6 groups and 30 services (slug, title, group, summary, valueProp, problems, deliverables, process, technologies, faqs, icon) plus helpers
- [ ] T015 Create layout shell: src/components/layout/SkipLink.tsx, Header.tsx (server) with MegaMenu.tsx and MobileNav.tsx (client, keyboard support, Escape, focus return/trap), Footer.tsx; wire into src/app/layout.tsx with Organization JSON-LD from src/lib/jsonld.ts
- [ ] T016 [P] Create src/components/reveal/Reveal.tsx (client IntersectionObserver, once, respects reduced motion)

## Phase 3: User Story 1 - Understand Coxcel and get in touch (P1)

**Goal**: Home page and working contact flow. **Independent test**: quickstart scenarios 1, 4, 5, 6.

- [ ] T017 [P] [US1] Create src/components/brand/HeroGraphic.tsx (animated isometric blocks assembling into the C, arrow rise; CSS only)
- [ ] T018 [P] [US1] Create content files src/content/faqs.ts, src/content/process.ts (Discover, Design, Build, Launch, Grow), src/content/industries.ts (7 industries), src/content/case-studies.ts (SAMPLE), src/content/testimonials.ts (SAMPLE)
- [ ] T019 [P] [US1] Create mock UI illustrations in src/components/illustrations/ (DashboardMock.tsx, CodeWindowMock.tsx, PipelineDiagram.tsx, AgentFlowMock.tsx)
- [ ] T020 [US1] Create shared sections in src/components/sections/: Hero.tsx, CapabilityStrip.tsx, ServiceGroups.tsx, ProcessSteps.tsx, IndustriesGrid.tsx, SelectedWork.tsx, WhyCoxcel.tsx, FaqList.tsx, CtaBand.tsx, Testimonials.tsx, ClientLogos.tsx (SAMPLE, flag), CapabilityNumbers.tsx (SAMPLE, flag), PageHeader.tsx
- [ ] T021 [US1] Compose Home in src/app/page.tsx
- [ ] T022 [P] [US1] Create src/lib/contact-schema.ts (Zod): name required 2-100; email valid max 254; phone optional max 40 `[0-9 +()-]`; company optional max 120; service one of slugs or "other"; budget optional one of budgetRanges; message 20-5000; consent must be true; website honeypot must be empty
- [ ] T023 [P] [US1] Create src/lib/rate-limit.ts (in-memory sliding window, 5 per 10 minutes per IP)
- [ ] T024 [P] [US1] Create email templates src/emails/ContactNotification.tsx and src/emails/ContactConfirmation.tsx (Poppins + fallback stack, flat Ink/Brand colours, no gradients or emoji)
- [ ] T025 [US1] Implement Server Action src/actions/contact.ts per contracts/contact-action.md, signature `(prevState, formData)` for no-JS progressive enhancement
- [ ] T026 [US1] Create client form src/components/contact/ContactForm.tsx (useActionState + React Hook Form + zodResolver, native `action` fallback, states idle/submitting/success/error, aria-live, focus first error, honeypot, preselect from `service` prop)
- [ ] T027 [US1] Create Contact page src/app/contact/page.tsx (form, details from site.ts, hours, map placeholder, reads `searchParams.service`)

## Phase 4: User Story 2 - Evaluate a specific service (P1)

**Goal**: Services overview and 30 detail pages. **Independent test**: quickstart scenario 3.

- [ ] T028 [US2] Create src/app/services/page.tsx (grouped cards with angled corners)
- [ ] T029 [US2] Create src/app/services/[slug]/page.tsx with generateStaticParams, metadata, Service JSON-LD, value prop, problems, deliverables, process, technologies labels, FAQs, CTA to /contact?service=slug
- [ ] T030 [P] [US2] Create src/app/services/[slug]/opengraph-image.tsx and src/lib/og.tsx shared OG renderer (Poppins from @fontsource)

## Phase 5: User Story 3 - Build trust (P2)

**Goal**: About, Process, Industries, Work, Insights, Careers. **Independent test**: navigate each page.

- [ ] T031 [P] [US3] Create src/content/team.ts (SAMPLE), src/content/values.ts, src/content/engagement.ts
- [ ] T032 [P] [US3] Create src/app/about/page.tsx (story, logo meaning, mission, values, approach, team)
- [ ] T033 [P] [US3] Create src/app/process/page.tsx (engagement models, phases)
- [ ] T034 [P] [US3] Create src/app/industries/page.tsx (7 industries with anchors)
- [ ] T035 [P] [US3] Create src/app/work/page.tsx and src/app/work/[slug]/page.tsx
- [ ] T036 [US3] Create Insights: src/content/insights/*.mdx (3 articles), src/content/insights/index.ts, src/app/insights/page.tsx, src/app/insights/[slug]/page.tsx, prose styles
- [ ] T037 [P] [US3] Create src/app/careers/page.tsx (open application CTA)

## Phase 6: User Story 4 - Comfortable on any device (P2)

- [ ] T038 [US4] Verify and refine mobile nav, mega-menu keyboard flow, focus styles, reduced motion and 360px layouts across pages (src/components/layout/*, src/app/globals.css)

## Phase 7: User Story 5 - Discoverable and shareable (P3)

- [ ] T039 [P] [US5] Create src/app/sitemap.ts and src/app/robots.ts from content sources
- [ ] T040 [P] [US5] Create src/app/opengraph-image.tsx (default) and set metadata icons/manifest in src/app/layout.tsx
- [ ] T041 [P] [US5] Create legal pages src/app/legal/privacy/page.tsx, src/app/legal/terms/page.tsx, src/app/legal/cookies/page.tsx
- [ ] T042 [P] [US5] Create src/app/not-found.tsx (brand style, links home/services/contact)

## Phase 8: Polish and cross-cutting

- [ ] T043 Write README.md (setup, env vars, Resend domain verification, where to edit content and contact details, placeholders list, Vercel deploy)
- [ ] T044 Run `npm run check:brand`, `npm run lint`, `npm run build`; fix all errors
- [ ] T045 Browser check at 360/768/1280 for every route; verify favicons, manifest, OG images, sitemap, 404, form with no key; run Lighthouse on home, a service page and contact (mobile and desktop) against the production build

## Dependencies

- Setup -> Foundational -> US1 and US2 (parallel) -> US3, US4, US5 -> Polish.
- US2 depends on T014 (services data) only; US1 form depends on T014 for options.
- US4 is a refinement pass over shell components built in T015.

## Parallel examples

- Foundational: T010, T011, T012, T013, T016 together.
- US1: T017, T018, T019, T022, T023, T024 together; then T020 -> T021 and T025 -> T026 -> T027.
- US3: T031-T035 and T037 together.

## Implementation strategy

MVP = Phases 1-4 (home, services, contact). Then trust pages, accessibility pass, SEO and legal,
then polish and verification.
