# Data Model: Coxcel Company Website

All entities are TypeScript types in `src/content/*` and `src/config/site.ts`. No database.

## ServiceGroup
| Field | Type | Notes |
|---|---|---|
| id | `'build' \| 'data' \| 'ai' \| 'cloud' \| 'advisory' \| 'growth'` | unique |
| label | string | short label, e.g. "Build" |
| title | string | e.g. "Software & Product" |
| summary | string | one sentence |

## Service
| Field | Type | Notes |
|---|---|---|
| slug | string | unique, kebab-case, used in `/services/[slug]` and form value |
| title | string | display name |
| group | ServiceGroup['id'] | |
| summary | string | card text, under 160 chars, used as meta description |
| valueProp | string | headline sentence on detail page |
| problems | string[] | 3-5 |
| deliverables | string[] | 4-8 |
| process | `{ title: string; text: string }[]` | 4-5 steps |
| technologies | string[] | text labels only |
| faqs | `{ q: string; a: string }[]` | 2-4 |
| icon | lucide icon name | |

Derived: `servicesByGroup`, `getService(slug)`, `serviceOptions` (form select incl. "Other").

## CaseStudy (SAMPLE)
slug, title, client (string, "Sample client"), sector, services (slug[]), summary, challenge,
approach (string[]), outcome (string[], qualitative), sample: true.

## TeamMember (SAMPLE)
name, role, bio, initials, sample: true. No photos; rendered as hexagon monograms.

## Testimonial (SAMPLE, hidden)
quote, name, role, company, sample: true.

## Industry
slug, name, summary, challenges (string[]), services (slug[]).

## Article (MDX)
slug (filename), metadata: { title, summary, date (ISO), author, readingMinutes, tags }.

## FAQ
q, a. Home FAQ list in `faqs.ts`.

## EngagementModel
slug, title, bestFor, how (string[]), commercial, timeline.

## SiteConfig
name, url, description, email, phones { main, whatsapp } (display + tel href), address lines,
hours, socials { linkedin, x, github, facebook, instagram }, features { testimonials, clientLogos,
caseStudies, team, capabilityNumbers }, budgetRanges (string[]), logoColor.

## Enquiry (form submission; not stored)
| Field | Rule |
|---|---|
| name | required, 2-100 chars |
| email | required, valid email, max 254 |
| phone | optional, max 40, digits/space/+()- |
| company | optional, max 120 |
| service | required, one of service slugs or `other` |
| budget | optional, one of budgetRanges |
| message | required, 20-5000 chars |
| consent | must be `true` |
| website | honeypot, must be empty |

State transitions (client): idle -> submitting -> success | error; error -> submitting on retry.
