# Implementation Plan: Coxcel Company Website

**Branch**: `001-company-website` | **Date**: 2026-10-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-company-website/spec.md`

## Summary

A statically generated marketing site for Coxcel with 50+ pages built from typed content files,
a strict token-based brand system (Poppins, Brand Blue/Ink/Mist/White, no gradients or emoji),
a geometric visual language derived from the hexagonal "C" logo, and a contact form that sends
branded emails through Resend via a Server Action with Zod validation, honeypot and in-memory
rate limiting. Server Components by default; small client islands for menus, the form and scroll
reveal.

## Technical Context

**Language/Version**: TypeScript (strict) on Node.js 24; React 19

**Primary Dependencies**: Next.js 16 (App Router, Turbopack), Tailwind CSS 4 (`@theme` tokens),
`next/font/google` (Poppins), `lucide-react`, `resend`, `@react-email/components`,
`react-hook-form`, `@hookform/resolvers`, `zod`, `@next/mdx` (+ `@mdx-js/loader`, `@mdx-js/react`),
`@fontsource/poppins` (font files for generated OG images), ESLint (flat config,
`eslint-config-next`), Prettier (+ `prettier-plugin-tailwindcss`)

**Storage**: None. Content in typed TS modules and MDX files; rate-limit counters in memory.

**Testing**: Type-check and lint via `npm run build`/`npm run lint`; `npm run check:brand` script
(grep for gradients and emoji); manual/automated viewport checks in a browser at 360/768/1280px;
form tested with and without `RESEND_API_KEY`.

**Target Platform**: Vercel (Node runtime); modern evergreen browsers.

**Project Type**: Web application (single Next.js project).

**Performance Goals**: Lighthouse 95+ on all four categories, mobile and desktop; LCP under 2.5s
on 4G; client JS limited to header menus, contact form and reveal observer.

**Constraints**: No gradients, no emoji, tokens only, WCAG 2.1 AA, reduced-motion support,
Poppins only, no third-party logos.

**Scale/Scope**: About 55 routes (12 top-level pages, 30 service pages, 4 case studies, 3 articles,
7 industries as anchors on one page, 3 legal pages, 404).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | How the design complies | Status |
|---|---|---|
| I. Brand Fidelity | Tokens defined once in `globals.css` `@theme`; Poppins via `next/font`; `Logo`/`LogoMark` SVG components read `--color-logo`; blue used as accent only | Pass |
| II. Restraint by Rule | No gradient utilities or SVG gradients; `scripts/check-brand.mjs` fails on gradient keywords or emoji code points; flat colour blocks only | Pass |
| III. Honest Credibility | Sample data marked `// SAMPLE: replace before launch`; `site.features` flags hide proof sections; `SampleBadge` shown on sample items | Pass |
| IV. Accessible by Default | Skip link, landmarks, focus ring token, `brand-700` for small blue text, keyboard menus with Escape/focus return, `motion-safe` variants and CSS reduced-motion guard | Pass |
| V. Performance and Server-First | RSC by default, `generateStaticParams` for all dynamic routes, `next/image` for PNG fallbacks, CSS-only motion | Pass |
| VI. Single Source of Content | `src/content/*.ts` and `src/config/site.ts` drive nav, sitemap, JSON-LD, form options | Pass |
| VII. Secure Contact Handling | Server Action re-validates with shared Zod schema; honeypot; IP rate limit; env-only secrets; graceful missing-key state | Pass |

Post-design re-check (after Phase 1): all seven principles still pass; no violations recorded.

## Project Structure

### Documentation (this feature)

```text
specs/001-company-website/
├── brief.md             # Condensed original brief
├── spec.md
├── plan.md              # This file
├── research.md          # Phase 0
├── data-model.md        # Phase 1
├── quickstart.md        # Phase 1
├── contracts/
│   └── contact-action.md
├── checklists/
└── tasks.md             # /speckit-tasks
```

### Source Code (repository root)

```text
public/                        # favicons, site.webmanifest, logo PNG fallbacks
scripts/check-brand.mjs        # gradient + emoji guard
src/
├── app/
│   ├── layout.tsx             # fonts, metadata base, header/footer, skip link, Org JSON-LD
│   ├── page.tsx               # Home
│   ├── globals.css            # Tailwind import, @theme tokens, base, motion, clip-paths
│   ├── opengraph-image.tsx    # default branded OG image
│   ├── not-found.tsx
│   ├── sitemap.ts, robots.ts
│   ├── services/page.tsx
│   ├── services/[slug]/page.tsx (+ opengraph-image.tsx)
│   ├── work/page.tsx, work/[slug]/page.tsx
│   ├── about/, process/, industries/, careers/, contact/
│   ├── insights/page.tsx, insights/[slug]/page.tsx
│   └── legal/privacy/, legal/terms/, legal/cookies/
├── components/
│   ├── ui/                    # Button, Container, Section, Card, Badge, Heading, SectionNumber,
│   │                          # SampleBadge, TextLink, Prose
│   ├── brand/                 # Logo, LogoMark, HexPattern, IsoGrid, HeroGraphic, Divider, Marker
│   ├── layout/                # Header, MegaMenu, MobileNav, Footer, SkipLink
│   ├── sections/              # home + shared sections (CTA, FAQ, ProcessSteps, ServiceGroups...)
│   ├── illustrations/         # mock dashboards and UI built in HTML/SVG
│   ├── contact/               # ContactForm (client), fields
│   └── reveal/                # Reveal (client IntersectionObserver)
├── content/
│   ├── services.ts            # groups + 30 services
│   ├── case-studies.ts        # SAMPLE
│   ├── team.ts                # SAMPLE
│   ├── testimonials.ts        # SAMPLE (hidden)
│   ├── industries.ts, faqs.ts, process.ts, values.ts, engagement.ts
│   └── insights/*.mdx + index.ts
├── config/site.ts             # contact details, socials, flags, budget bands
├── lib/                       # seo.ts, jsonld.ts, rate-limit.ts, contact-schema.ts, utils.ts
├── actions/contact.ts         # Server Action
└── emails/                    # ContactNotification.tsx, ContactConfirmation.tsx, theme.ts
mdx-components.tsx
```

**Structure Decision**: Single Next.js project with the `src/` layout the brief prescribes. The
Server Action sits in `src/actions` (shared by the form and no other caller).

## Complexity Tracking

No constitution violations to justify.
