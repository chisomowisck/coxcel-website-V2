# Coxcel website

Marketing website for Coxcel: software, data, AI and digital services.

Built with Next.js 16 (App Router, Cache Components), TypeScript (strict), Tailwind CSS 4, Resend and
React Email, React Hook Form and Zod, MDX for Insights, and `lucide-react` icons. Fonts are Poppins
via `next/font`.

## Local setup

Requirements: Node.js 20.9 or later (developed on Node 24) and npm.

```bash
npm install
cp .env.example .env.local   # then add your Resend key (optional for local work)
npm run dev                  # http://localhost:3000
```

Useful scripts:

| Command                              | What it does                                           |
| ------------------------------------ | ------------------------------------------------------ |
| `npm run dev`                        | Development server                                     |
| `npm run build`                      | Brand check, type check and production build           |
| `npm start`                          | Serve the production build                             |
| `npm run lint`                       | ESLint                                                 |
| `npm run format` / `format:check`    | Prettier                                               |
| `npm run check:brand`                | Fails if any gradient or emoji appears in source files |
| `npx tsx scripts/preview-emails.tsx` | Renders both contact emails to `.email-preview/`       |

## Environment variables

Set these in `.env.local` locally and in Vercel under Project Settings, Environment Variables.

| Variable               | Required    | Default                       | Purpose                                                                              |
| ---------------------- | ----------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`       | For sending | none                          | Resend API key. Without it the form shows a clear "not available, email us" message. |
| `CONTACT_TO_EMAIL`     | No          | `info@coxcel.com`             | Inbox that receives enquiries.                                                       |
| `CONTACT_FROM_EMAIL`   | No          | `Coxcel <noreply@coxcel.com>` | Sender address. Its domain must be verified in Resend.                               |
| `NEXT_PUBLIC_SITE_URL` | No          | `https://coxcel.com`          | Base URL for canonical links, sitemap and social images.                             |

Never commit real keys. `.env*` files are git-ignored except `.env.example`.

### Analytics, marketing tags and search verification

All optional. Leave a variable empty to switch that tool off. Values are read at build time, so
redeploy after changing them.

| Variable                   | Example           | What it turns on                                     |
| -------------------------- | ----------------- | ---------------------------------------------------- |
| `GOOGLE_SEO`               | `abc123...`       | Google Search Console `google-site-verification` tag |
| `GOOGLE_GTM`               | `GTM-XXXXXXX`     | Google Tag Manager                                   |
| `GA_TRACKING_ID`           | `G-XXXXXXXXXX`    | Google Analytics 4                                   |
| `FB_PIXEL_ID`              | `123456789012345` | Meta (Facebook) Pixel                                |
| `TW_PIXEL_ID`              | `o1abc`           | X (Twitter) Pixel                                    |
| `CLARITY_PROJECT_ID`       | `abcd1234ef`      | Microsoft Clarity                                    |
| `SMART_LOOK_TRACKING_CODE` | project key       | Smartlook                                            |
| `SMART_LOOK_REGION`        | `eu` or `us`      | Smartlook data region (default `eu`)                 |

When any tag is set, a cookie banner appears. Google Tag Manager loads on every page from the HTML
head with Google Consent Mode v2: consent starts as denied (no cookies), and "Accept cookies" switches
it to granted. In GTM, turn on consent checks for your tags so they respect this. Every other tag
(GA, pixels, Clarity, Smartlook) **loads only after the visitor accepts**. A
"Cookie settings" link in the footer lets visitors change their choice, and the Cookie notice lists
only the tools that are switched on. If you use GTM to fire GA or the pixels, set only `GOOGLE_GTM`
to avoid counting visits twice. Code: `src/config/analytics.ts`, `src/components/consent/`.

### Reducing what the site reveals about its technology

Done in code:

- No `X-Powered-By` header, and the Next.js version number and bundler flag are removed from the page.
- Icons are inline SVGs copied into the project (`src/components/ui/icon-data.ts`), so there are no
  icon-library class names. Regenerate with `node scripts/vendor-icons.mjs` after adding an icon.
- The WhatsApp link goes through `/go/whatsapp`, so pages do not link to the chat service directly.
- The CSS contains no framework banner comment.

Cannot be hidden without rebuilding the site on a different stack: React and Next.js are visible from
how the page loads (`/_next/` file paths and the page data format), Tailwind from its class names and
CSS variables, and Vercel from the response headers its platform adds. Open Graph tags and the web
manifest are kept on purpose: removing them would break link previews and home-screen icons. Placing
the site behind a proxy such as Cloudflare with header-removal rules can strip the hosting headers.

## Resend domain verification

1. Create an account at resend.com and add the domain `coxcel.com` under Domains.
2. Add the DNS records Resend shows (SPF, DKIM and the optional DMARC record) at your DNS provider.
3. Wait for Resend to mark the domain as Verified (usually minutes, sometimes up to a few hours).
4. Create an API key with "Sending access" and set it as `RESEND_API_KEY`.
5. Submit the contact form. The team receives the enquiry with reply-to set to the visitor, and the
   visitor receives a branded confirmation.

Until the domain is verified, Resend only allows sending from its test address to your own account
email, so the form will report a send failure for other recipients.

## Where to edit things

| What                                                                                         | File                                                                          |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Email, phone numbers, address, hours, social links                                           | `src/config/site.ts`                                                          |
| Show or hide sample proof sections (case studies, team, numbers, testimonials, client logos) | `src/config/site.ts` (`features`)                                             |
| Budget ranges in the contact form                                                            | `src/config/site.ts` (`budgetRanges`)                                         |
| Services (drives pages, menu, sitemap, structured data and form options)                     | `src/content/services.ts`                                                     |
| Case studies                                                                                 | `src/content/case-studies.ts`                                                 |
| Team                                                                                         | `src/content/team.ts`                                                         |
| Testimonials, client logos, capability numbers                                               | `src/content/testimonials.ts`                                                 |
| Industries                                                                                   | `src/content/industries.ts`                                                   |
| Home FAQs                                                                                    | `src/content/faqs.ts`                                                         |
| Process phases and engagement models                                                         | `src/content/process.ts`, `src/content/engagement.ts`                         |
| Values                                                                                       | `src/content/values.ts`                                                       |
| Insights articles                                                                            | `src/content/insights/*.mdx` plus an entry in `src/content/insights/index.ts` |
| Legal pages                                                                                  | `src/app/legal/*/page.tsx`                                                    |
| Colours, type scale, motion                                                                  | `src/app/globals.css` (`@theme` tokens)                                       |
| Colours for emails and social images                                                         | `src/config/brand.ts`                                                         |
| Logo colour (switch between #457AF4 and #007BFF)                                             | `--color-logo` in `globals.css` and `logo` in `src/config/brand.ts`           |
| Email templates                                                                              | `src/emails/`                                                                 |

## Brand rules enforced in code

- Colours exist only as tokens (`brand`, `ink`, `mist`, `white` and their steps). Tailwind's default
  palette is switched off, so off-brand colours cannot be used by accident.
- Brand Blue `#457AF4` is for large text, icons and lines. Buttons use `brand-600` and small links use
  `brand-700` so text meets WCAG 2.1 AA.
- `npm run check:brand` runs before every build and fails on gradients or emoji.

## Project structure

```
src/
  app/            routes, metadata, sitemap, robots, social images
  components/     ui primitives, brand (logo, geometry), layout, sections, illustrations, contact
  content/        typed content: services, case studies, team, industries, insights (MDX)
  config/         site.ts (contact details and flags), brand.ts (colour values)
  lib/            seo, structured data, contact schema, rate limiting, social image renderer
  actions/        contact Server Action
  emails/         React Email templates
specs/            Spec Kit specification, plan, tasks and checklists
_brand/           supplied brand assets (moodboard.pdf is kept out of git because of its size)
```

## Deploying to Vercel

1. Push the repository to GitHub, GitLab or Bitbucket.
2. Import it in Vercel. The framework is detected as Next.js; no build settings need changing.
3. Add the environment variables above.
4. Deploy, then point `coxcel.com` at the project under Domains.

Note: contact form rate limiting is in memory, so limits apply per server instance. For stricter
limits, replace `src/lib/rate-limit.ts` with a shared store such as Upstash Redis.

## Before launch

See [`LAUNCH-CHECKLIST.md`](./LAUNCH-CHECKLIST.md) for every placeholder that must be replaced.
