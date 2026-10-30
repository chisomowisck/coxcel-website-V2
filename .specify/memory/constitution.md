<!--
Sync Impact Report
- Version change: template -> 1.0.0 (initial ratification)
- Principles added: I. Brand Fidelity; II. Restraint by Rule; III. Honest Credibility;
  IV. Accessible by Default; V. Performance and Server-First; VI. Single Source of Content;
  VII. Secure, Private Contact Handling
- Sections added: Technology and Design Constraints; Development Workflow and Quality Gates; Governance
- Removed sections: none
- Templates: plan/spec/tasks templates read this file at runtime; no template edits required
- Deferred TODOs: none
-->

# Coxcel Website Constitution

## Core Principles

### I. Brand Fidelity (NON-NEGOTIABLE)

- Typography MUST be Poppins only, loaded through `next/font/google`, weights 400, 500, 600, 700.
  Headings are large with tight tracking; body text is 16-18px with line height near 1.6.
- The palette is fixed: Brand Blue `#457AF4`, Ink `#25262C`, Mist `#E2E2E2`, White `#FFFFFF`,
  plus derived neutral and blue steps. Every colour MUST be a Tailwind theme token (`brand`,
  `ink`, `mist`, and their steps). Hex values MUST NOT appear in component files; they live only in
  the theme definition and in the logo colour variable.
- Brand Blue is an accent for CTAs, highlights, active states, focus rings and key lines. It MUST
  NOT be used as a large background wash. Ink is the primary text colour and the dark section
  colour. Mist is for borders, dividers and quiet section backgrounds.
- The logo mark MUST be an inline SVG component (hexagonal "C" whose lower stroke ends in an
  upward arrow head split by a thin gap) with light and reversed variants. Its fill colour MUST be a
  single variable so it can switch between `#457AF4` and `#007BFF`. PNGs remain as fallbacks.
- The logo meaning (an upward arrow integrated into the letter C: excellence, growth, forward
  momentum) is the source of the visual system: hexagons, 30/60 degree isometric angles and the
  arrow's split cut.

Rationale: a young firm earns trust through consistency; one token source prevents drift.

### II. Restraint by Rule (NON-NEGOTIABLE)

- No gradients anywhere: backgrounds, text, borders, overlays, meshes, SVG `linearGradient` or
  `radialGradient`, or Tailwind `bg-linear-*`/`bg-gradient-*`/`from-`/`via-`/`to-` utilities.
- No emoji characters anywhere: copy, UI, alt text, metadata, code or comments.
- No stock "glowing AI brain" or handshake imagery, no glassmorphism (backdrop blur on translucent
  panels), no neon or glow effects.
- Imagery MUST be custom inline SVG illustrations or mock UI built from real HTML/SVG.
- A repository grep for `gradient`, `bg-linear`, gradient `from-`/`via-`/`to-` utilities and emoji
  code points MUST return no matches in source files before any release.

Rationale: these are explicit brand constraints and are cheap to verify mechanically.

### III. Honest Credibility (NON-NEGOTIABLE)

- The site MUST NOT invent client names, client logos, testimonials, awards, certifications or
  statistics.
- Sections that need such proof (testimonials, client logos, case studies, team, numeric claims)
  MUST be fully built but filled with clearly labelled sample data marked
  `// SAMPLE: replace before launch`, and each MUST be hideable with a flag in `src/config/site.ts`.
- Visible sample content MUST be labelled as sample in the UI until replaced.
- Copy MUST be plain, specific English in a confident professional tone, free of buzzword soup.

Rationale: trust comes from clarity and specifics; fabricated proof is a legal and reputational risk.

### IV. Accessible by Default

- All text MUST meet WCAG 2.1 AA contrast. `#457AF4` on white is reserved for large text, icons
  and UI elements; small blue text and normal-size button labels use accessible darker tints
  (`brand-600` for button fills with white labels, `brand-700` for links).
- Semantic HTML, a skip link, visible Brand Blue focus states, labelled form fields, alt text on all
  images, and keyboard-operable mega-menu and mobile menu are REQUIRED.
- All motion MUST honour `prefers-reduced-motion`.

Rationale: accessibility is a legal baseline and a quality signal for a technology firm.

### V. Performance and Server-First

- React Server Components are the default; client components only where interaction requires it
  (menus, form, reveal observer).
- Images MUST use `next/image`. Motion MUST use CSS transforms/opacity only.
- Target Lighthouse 95+ for Performance, Accessibility, Best Practices and SEO on mobile and desktop.
- Each page MUST export metadata (title template "Page | Coxcel", Open Graph, Twitter, canonical).

Rationale: speed and discoverability are what a marketing site is for.

### VI. Single Source of Content

- Services live in `src/content/services.ts`; case studies, team, industries, FAQs and process in
  typed files under `src/content`; contact details and feature flags in `src/config/site.ts`.
- Navigation, sitemap, JSON-LD, static params and form options MUST be generated from these
  sources, never duplicated by hand.
- Placeholder contact details MUST be marked with a `TODO` comment.

Rationale: one edit point per fact keeps the site correct as the business changes.

### VII. Secure, Private Contact Handling

- The contact form MUST validate with Zod on client and server, include a honeypot field and
  per-IP rate limiting, and send via Resend with `reply_to` set to the visitor.
- Secrets come only from environment variables documented in `.env.example`; real keys MUST NOT be
  committed. A missing key MUST produce a clear, graceful error state, not a crash.
- Form states (idle, submitting, success, error) MUST be announced accessibly; `alert()` is banned.

Rationale: the form is the business's main conversion path and handles personal data.

## Technology and Design Constraints

- Stack: Next.js latest stable (App Router), TypeScript strict, Tailwind CSS latest stable,
  Resend with React Email, React Hook Form, Zod, `next/font`, `lucide-react`, MDX for Insights.
- Structure: `src/app`, `src/components`, `src/content`, `src/config`, `src/lib`, `src/emails`.
- Reusable primitives: Button, Container, Section, Card, Badge, Heading.
- Design language: editorial, generous whitespace, 12-column grid, asymmetric layouts, oversized
  section numbers, flat colour blocking (Ink, White, Mist), thin rules, angled clip-path corners,
  isometric line-art, restrained scroll reveal.
- Responsive from 360px to wide desktop. Light theme by default; dark theme (Ink background)
  optional.
- Deployment target: Vercel.

## Development Workflow and Quality Gates

- Work follows Spec Kit: constitution, specify, clarify, plan, checklist, tasks, analyze,
  implement, converge.
- A change is releasable only when: `npm run build` passes with no type or lint errors; ESLint and
  Prettier are clean; the gradient and emoji grep is empty; pages render at 360px, 768px and
  1280px+; the contact form fails gracefully without `RESEND_API_KEY`.
- The README MUST cover local setup, environment variables, Resend domain verification, and where
  to edit contact details and content.

## Governance

- This constitution supersedes other practices for this repository. Plans and task lists MUST
  include a Constitution Check against Principles I-VII.
- Amendments require a written rationale, a version bump and an updated Sync Impact Report.
  Versioning: MAJOR for removing or redefining a principle, MINOR for a new principle or material
  expansion, PATCH for wording.
- Any deviation MUST be recorded in the plan's Complexity Tracking table with justification.

**Version**: 1.0.0 | **Ratified**: 2026-10-30 | **Last Amended**: 2026-10-30
