# Original brief (condensed record of the client's prompt, 2026-10-30)

## Setup
- Location `D:\Codebase\Javascript\coxcel`. Next.js latest (App Router), TypeScript strict, Tailwind
  latest, Resend, next/font, lucide-react.
- Spec Kit flow: constitution, specify, clarify, plan, checklist, tasks, analyze, implement, converge.

## Brand assets (`_brand/`)
- brand-guidelines.pdf (source of truth), logo-full.png (2554x801), logo-mark.png (784x801),
  favicon_io.zip (favicon.ico, 16/32 png, apple-touch-icon, android-chrome 192/512, site.webmanifest).
- Unzip favicons into /public, wire through metadata API; update manifest name "Coxcel", short name,
  theme_color, background_color.
- Inline SVG logo: hexagonal "C" whose lower stroke ends in an upward arrow head split by a thin gap.
  Light and dark variants. Keep PNGs as fallbacks.
- Logo meaning: upward arrow integrated into the letter C: excellence, growth, forward momentum.

## Brand system
- Poppins only, 400/500/600/700. Large confident headings, tight tracking. Body 16-18px, lh ~1.6.
- Brand Blue #457AF4, Ink #25262C, Mist #E2E2E2, White #FFFFFF.
- Logo PNGs use #007BFF; use #457AF4 as token; keep logo colour in a single variable.
- Tokens only (brand, ink, mist, derived neutrals). Blue is accent, not wash. Ink for text and dark
  sections. Mist for borders, dividers, quiet sections.
- #457AF4 on white fails AA for small text: use for large text, icons, buttons with white/Ink labels;
  small links use brand-700. All text WCAG 2.1 AA.

## Design direction
- Hard rules: no gradients; no emojis; no glowing AI brain or handshake imagery, no glassmorphism,
  no neon.
- Clean, editorial, confident; creative but serious and established.
- Geometric system from logo: hexagons, 30/60 isometric angles, arrow split cut in dividers, card
  corners (angled clip-paths), list markers, thin line-art, isometric grid behind hero.
- Hero: big typographic statement + animated SVG from logo geometry (blocks assembling into C, or
  arrow rising). Subtle, performant.
- Layout: whitespace, 12-col grid, asymmetric, oversized section numbers, flat colour blocking,
  thin rules.
- Motion: restrained scroll reveal, hover shifts/rotates angled shapes, link underline animations,
  honour reduced motion.
- Imagery: custom SVG illustrations, mock UI/dashboards from real HTML/SVG.
- Light default; dark (Ink) optional. Responsive 360px to wide; polished mobile nav.

## Services (card on overview + /services/[slug]); grouped in mega-menu and overview
- Build: Software & Product: Custom Software Development; Website Development; Web Application
  Development; Mobile App Development; E-commerce Development; UI/UX & Product Design; MVP & Product
  Strategy; API Development & Systems Integration.
- Data: Analytics & Intelligence: Data Analysis; Data Visualization & BI Dashboards; Data Engineering
  & Pipelines; Business Intelligence & Reporting; Predictive Analytics & Machine Learning.
- AI: Intelligent Automation: AI Integration; AI Agents & Chatbots; Workflow & Business Process
  Automation; Document Processing & Intelligent Search (RAG).
- Cloud & Operations: Cloud Solutions & Migration; DevOps & CI/CD; Cybersecurity & Compliance
  Reviews; Quality Assurance & Testing; Maintenance, Support & Managed Services.
- Advisory: IT Consultancy; Digital Transformation; Technology Audits & Architecture Reviews.
- Growth: Digital Marketing: Digital Marketing Strategy; SEO; Paid Media; Content & Social Media
  Marketing; Analytics & Conversion Optimisation.
- Detail page: value prop, problems, deliverables, process, technologies (text labels), FAQs,
  CTA preselecting the service. Content in `src/content/services.ts` drives pages, nav, sitemap, form.

## Pages
Home (hero, capability strip, service groups, How we work: Discover/Design/Build/Launch/Grow,
industries, selected work, why Coxcel, FAQ, final CTA); Services; Work; About (story, logo meaning,
mission, values Excellence/Progress/Craft/Partnership, approach, team from data); Process (fixed
scope, dedicated team, retainer); Industries (finance, retail & e-commerce, healthcare, logistics,
education, public sector, startups); Insights (MDX, 2-3 real articles); Careers; Contact (form,
details, hours, map placeholder); Legal (Privacy, Terms, Cookies); custom 404.
Header: logo, services mega-menu, main links, "Start a project". Footer: logo, description, service
links, company links, contact, social, copyright.

## Contact details (`src/config/site.ts`)
Email info@coxcel.com (mailto). Main + WhatsApp phones as `+00 00 000 0000` placeholders with TODO.
Address, hours, socials (LinkedIn, X, GitHub, Facebook, Instagram) as placeholders.

## Contact form
Server Actions or Route Handler, React Hook Form, Zod client+server. Fields: name, email, phone?,
company?, service (from data + Other), budget?, message, consent (links Privacy). Honeypot, per-IP
rate limit, server validation. Resend to info@coxcel.com with reply_to visitor; branded auto-reply.
React Email templates, Poppins + fallback, no gradients/emojis. `.env.example`: RESEND_API_KEY,
CONTACT_TO_EMAIL=info@coxcel.com, CONTACT_FROM_EMAIL (e.g. Coxcel <noreply@coxcel.com>). States idle,
submitting, success, error; accessible inline; no alert().

## Credibility
No invented clients, logos, testimonials, awards, certifications, statistics. Build components with
sample data marked `// SAMPLE: replace before launch`, hideable via flag in site.ts. Plain confident
copy.

## Quality bar
SEO: metadata per page, "Page | Coxcel", OG/Twitter, generated OG images, sitemap.ts, robots.ts,
canonical, JSON-LD Organization + Service. Performance: Lighthouse 95+ all four, mobile + desktop;
next/image; server components by default. A11y: semantic, skip link, Brand Blue focus, keyboard
menus, alt text, labelled fields. Code: ESLint + Prettier; src/app, components, content, config, lib,
emails; primitives Button, Container, Section, Card, Badge, Heading. Vercel-ready README.

## Definition of done
`npm run build` passes; pages render at mobile/tablet/desktop; grep finds no gradients or emoji;
form sends with valid key and fails gracefully without; favicons, manifest, OG images load; final
summary plus list of placeholders.
