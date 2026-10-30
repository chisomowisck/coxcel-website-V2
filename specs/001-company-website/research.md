# Research: Coxcel Company Website

## R1. Framework and versions
- **Decision**: Next.js 16.x (App Router, Turbopack default), React 19, Tailwind CSS 4, TypeScript
  strict as installed by `create-next-app`.
- **Rationale**: Latest stable as of 2026-10-30 (`npm view`: next 16.4.3, tailwindcss 4.3.3).
- **Alternatives**: Pinning older Next 15: rejected, brief asks for latest stable.

## R2. Design tokens in Tailwind 4
- **Decision**: Define tokens with `@theme` in `src/app/globals.css`: `--color-brand` (+ 50..900
  steps), `--color-ink` (+ steps), `--color-mist` (+ steps), `--color-white`; clear Tailwind's
  default palette with `--color-*: initial` so only brand tokens exist.
- **Rationale**: Tailwind 4 is CSS-first; resetting the palette makes off-brand colours
  impossible to use by accident.
- **Contrast (computed)**: `#457AF4` vs white 3.9:1 and vs Ink 3.8:1, so it passes only for
  large text (24px+, or 18.7px+ bold), icons, rules and UI shapes. Decisions:
  - Large highlight words, icons, focus rings, key lines: `brand` (#457AF4).
  - Primary buttons (16px labels): `bg-brand-600` (#3366E0) with white label, 5.1:1; hover
    `bg-ink`. This keeps the CTA visibly brand blue while meeting AA.
  - Small blue links on white: `brand-700` (#2A5BD7), 5.9:1.
  - Small blue text on Ink: `brand-300` (#8FB0F8), 7.0:1.
  - Muted body text: `ink-600` (#5A5C66), 6.6:1 on white and 5.1:1 on Mist.
  - Muted text on Ink: `ink-300` (#A9AAB2), about 6.5:1.

## R3. Fonts
- **Decision**: `next/font/google` Poppins 400/500/600/700, `display: swap`, CSS variable
  `--font-poppins` mapped to `--font-sans`.
- OG images use Satori (`next/og`), which cannot read `next/font`; read Poppins `.woff` files from
  `@fontsource/poppins` with `fs` at build time. Emails use a `Poppins, Helvetica, Arial,
  sans-serif` stack with a Google Fonts link (clients that block it fall back).

## R4. MDX for Insights
- **Decision**: `@next/mdx` with `.mdx` files in `src/content/insights/`, each exporting a
  `metadata` object; an index module imports them statically for listing; article page uses
  `generateStaticParams` and dynamic import.
- **Rationale**: Zero runtime parsing, works with Turbopack without remark plugins.

## R5. Contact form transport
- **Decision**: Server Action (`'use server'`) called from a client component using React Hook
  Form + `zodResolver`; the same Zod schema runs on the server. Returns a discriminated result
  `{ status: 'success' } | { status: 'error', code, message, fieldErrors? }`.
- **Missing key**: if `RESEND_API_KEY` is absent, return `code: 'not_configured'` with a message
  pointing to info@coxcel.com; nothing throws.
- **Rate limit**: in-memory sliding window keyed by `x-forwarded-for` first address (via
  `headers()`), 5 per 10 minutes. Documented limitation: per instance on serverless.
- **Honeypot**: field named `website`, visually hidden, `tabIndex=-1`, `autoComplete="off"`. A
  filled honeypot returns success without sending.

## R6. Emails
- **Decision**: React Email components rendered by Resend's `react` option. Notification to
  `CONTACT_TO_EMAIL` with `replyTo` visitor; confirmation to visitor. Flat colours, Ink header bar,
  Brand Blue rule, text-only logo wordmark plus hosted PNG mark from `/logo-mark.png` on the site
  URL.

## R7. Favicons and manifest
- **Decision**: Unzip `favicon_io.zip` into `public/`; reference via `metadata.icons` and
  `metadata.manifest`; edit `site.webmanifest` (name "Coxcel", short_name "Coxcel",
  theme_color `#25262C`, background_color `#FFFFFF`, start_url "/", display "standalone").

## R8. Logo SVG geometry
- **Decision**: Hand-trace the mark from `logo-mark.png` (784x801) into a viewBox `0 0 784 801`:
  outer C polygon plus separate arrow-head polygon divided by a thin gap that follows the PNG.
  Fill uses `var(--color-logo)` defaulting to Brand Blue; reversed variant uses the same mark on
  Ink with the wordmark in White.

## R9. Motion
- **Decision**: CSS keyframes for the hero (isometric blocks fade/translate into the C, arrow rises)
  wrapped in `@media (prefers-reduced-motion: no-preference)`. Scroll reveal via a tiny client
  `Reveal` using IntersectionObserver that toggles a `data-revealed` attribute; content is visible
  by default when JS is off or reduced motion is set.

## R10. Brand guard
- **Decision**: `scripts/check-brand.mjs` walks `src/`, `public/*.webmanifest`, and root configs,
  failing on `/gradient/i`, `bg-linear`, `bg-radial`, `bg-conic`, `(from|via|to)-(brand|ink|mist|white)`
  gradient stop utilities, and emoji (`\p{Extended_Pictographic}`). Wired as `npm run check:brand`
  and run in `prebuild`.
