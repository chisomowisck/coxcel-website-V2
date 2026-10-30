# Feature Specification: Coxcel Company Website

**Feature Branch**: `001-company-website`

**Created**: 2026-10-30

**Status**: Clarified

**Input**: User description: "Build the marketing website for Coxcel, a technology company offering
software development, data, AI and digital services, with a strict brand system, services catalogue,
case studies, insights, careers, legal pages and a contact form that emails the team." (Full brief
retained in `brief.md` in this directory.)

## Clarifications

### Session 2026-10-30

Answered from the brief and moodboard (the client asked that only unsettled points be raised):

- Q: Which proof sections are visible at launch? → A: Testimonials and client logos are built but
  hidden; case studies, team and capability numbers are shown with visible "Sample" labels.
- Q: What is the hero statement? → A: Follows the moodboard billboard: "We transform your vision
  into reality" with the closing phrase highlighted in Brand Blue.
- Q: What rate limit applies to the contact form? → A: 5 submissions per 10 minutes per address,
  in memory per server instance.
- Q: Does v1 ship a dark theme? → A: No. Light theme only; dark Ink sections are used for colour
  blocking. A theme toggle is deferred.
- Q: Which currency and bands does the budget field use? → A: US dollars, six bands (Under 10k,
  10k-25k, 25k-50k, 50k-100k, 100k+, Not sure yet), editable in configuration.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand what Coxcel does and get in touch (Priority: P1)

A decision-maker at a company (founder, CTO, operations or marketing lead) lands on the home page,
understands within seconds that Coxcel builds software, data, AI, cloud and growth solutions, scans
the service groups and how Coxcel works, and sends an enquiry through the contact form.

**Why this priority**: Enquiries are the site's commercial purpose. Home plus contact is a viable
site on its own.

**Independent Test**: Open the home page, follow "Start a project", complete and submit the form;
the team inbox receives the enquiry with reply-to set to the visitor, and the visitor receives a
confirmation email.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on the home page, **When** the page loads, **Then** they see a
   clear headline, a short supporting line, a primary "Start a project" action and a secondary
   action to view services, above the fold at 360px and 1280px widths.
2. **Given** a visitor on the contact page, **When** they submit valid details with consent ticked,
   **Then** they see an inline success message and two emails are sent (team notification and
   visitor confirmation).
3. **Given** a visitor submits with a missing required field, **When** they press submit, **Then**
   each invalid field shows an inline, programmatically associated error and focus moves to the
   first error.
4. **Given** email sending is not configured, **When** a visitor submits a valid form, **Then** they
   see a clear message that the form could not be sent and are shown the direct email address.

---

### User Story 2 - Evaluate a specific service (Priority: P1)

A visitor with a specific need (for example a BI dashboard or a mobile app) finds the service via
the header mega-menu or the services overview, reads its detail page, and starts an enquiry with
that service preselected.

**Why this priority**: Most qualified leads arrive with a specific need; service pages carry the
search traffic.

**Independent Test**: From any page, open the services menu with keyboard only, choose "Data
Visualization & BI Dashboards", read the page, press its contact action; the form opens with that
service selected.

**Acceptance Scenarios**:

1. **Given** any page, **When** the visitor opens the services menu, **Then** all 30 services are
   shown in their six groups and each links to its own detail page.
2. **Given** a service detail page, **When** it loads, **Then** it shows a value proposition,
   problems solved, deliverables, delivery process, typical technologies as text labels, FAQs and a
   contact action.
3. **Given** a visitor presses the service page contact action, **When** the contact page opens,
   **Then** the service field is preselected with that service.

---

### User Story 3 - Build trust in Coxcel as a firm (Priority: P2)

A visitor checks credibility: who Coxcel is (About, logo meaning, values, team), how it engages
(Process, engagement models), which industries it serves, examples of work, and thinking (Insights).

**Why this priority**: Trust converts interest into enquiries, but the site still works without it.

**Independent Test**: Navigate to About, Process, Industries, Work and Insights from the header and
footer; each page renders complete content and every sample item is visibly labelled as sample.

**Acceptance Scenarios**:

1. **Given** the About page, **When** it loads, **Then** it shows the story, the logo meaning, the
   mission, the four values (Excellence, Progress, Craft, Partnership), the approach and a team
   section.
2. **Given** any section containing proof (case studies, team, testimonials, client logos,
   numeric claims), **When** sample content is present, **Then** it is visibly labelled as sample
   and the section can be hidden by a single configuration switch.
3. **Given** the Insights index, **When** it loads, **Then** at least two full articles are listed
   and each opens in a readable article layout.

---

### User Story 4 - Navigate comfortably on any device and with any ability (Priority: P2)

Visitors use phones (from 360px), tablets and desktops, keyboards and screen readers, and some
prefer reduced motion.

**Why this priority**: A technology firm's site is judged on its craft; accessibility is a baseline.

**Independent Test**: Tab through the header, mega-menu and mobile menu; check focus visibility,
skip link, contrast and reduced motion behaviour at 360px, 768px and 1280px.

**Acceptance Scenarios**:

1. **Given** a keyboard user, **When** they press Tab on page load, **Then** a "Skip to content"
   link appears first and every interactive element shows a visible Brand Blue focus indicator.
2. **Given** the mega-menu is open, **When** the user presses Escape, **Then** it closes and focus
   returns to its trigger.
3. **Given** reduced motion is requested, **When** pages load or scroll, **Then** no animation
   runs beyond instant state changes.
4. **Given** a 360px viewport, **When** any page loads, **Then** there is no horizontal scrolling
   and the mobile menu opens, traps focus, and closes with Escape.

---

### User Story 5 - Find the site and share it (Priority: P3)

Search engines and social platforms index and preview pages correctly.

**Why this priority**: Supports discovery after launch.

**Independent Test**: Fetch the sitemap, robots file, a page's metadata and its social image.

**Acceptance Scenarios**:

1. **Given** any page, **When** its metadata is read, **Then** it has a unique title in the form
   "Page | Coxcel", a description, a canonical URL, and social preview data with a branded image.
2. **Given** the sitemap, **When** it is fetched, **Then** it lists every public page including every
   service, case study and article.
3. **Given** a browser tab or a home-screen install, **When** the site is opened, **Then** the
   Coxcel favicon and app icons appear and the app name is "Coxcel".

### Edge Cases

- Unknown service, case study or article address: branded "page not found" page with links home,
  to services and to contact.
- Repeated submissions from one address beyond the limit within the window: friendly "too many
  requests, try again shortly" message; no email sent.
- Honeypot field filled (bot): the request appears successful to the sender but no email is sent.
- Team notification sent but visitor confirmation fails: visitor still sees success (enquiry
  received); failure is logged server-side.
- Visitor arrives with an unknown service in the preselect parameter: the field falls back to empty.
- Very long names or messages: limits enforced with clear messages (message maximum 5,000
  characters).
- JavaScript disabled: all content pages are readable and navigable; the form still submits and
  returns a result.
- All proof sections hidden by configuration: pages render cleanly without empty gaps.

## Requirements *(mandatory)*

### Functional Requirements

**Brand and design**

- **FR-001**: The site MUST use only the Poppins typeface (weights 400, 500, 600, 700), with large,
  tightly tracked headings and body text of 16-18px at about 1.6 line height.
- **FR-002**: The site MUST use only the brand palette (Brand Blue #457AF4, Ink #25262C, Mist
  #E2E2E2, White) and derived tints/shades, defined once as named design tokens.
- **FR-003**: Brand Blue MUST be used only as an accent (actions, highlights, active states, focus,
  key lines), never as a large background fill.
- **FR-004**: The site MUST contain no gradients, no emoji characters, no glassmorphism, no neon or
  glow effects, and no stock "AI brain" or handshake imagery.
- **FR-005**: The logo mark MUST be drawn as a sharp vector in a light variant and a reversed
  variant; its colour MUST be controlled by a single setting. The original logo images MUST remain
  available as fallbacks (used in emails and the web manifest).
- **FR-006**: A recurring geometric system derived from the logo (hexagons, 30/60 degree isometric
  angles, the arrow's split cut) MUST appear in section dividers, card corners, list markers,
  background line art and an isometric grid behind the hero.
- **FR-007**: The hero MUST present a large typographic statement with a subtle animated vector
  built from the logo geometry.
- **FR-008**: Layouts MUST use generous whitespace, a 12-column grid, asymmetric compositions,
  oversized section numbers, flat colour blocks (Ink, White, Mist) and thin rules.
- **FR-009**: Motion MUST be limited to restrained scroll reveal, shape shift/rotate on hover and
  link underline animation, and MUST be disabled when reduced motion is requested.
- **FR-009a**: The hero animation MUST play once on load in under 2 seconds and then rest (a
  slow arrow "rise" loop of 6s or longer is allowed); scroll reveal MUST move content no more than
  24px over at most 600ms, once per element. Hover shifts MUST be under 8px or 6 degrees.
- **FR-010**: Illustrations and product imagery MUST be custom vector illustrations or mock
  interfaces built from live markup, not screenshots or stock photos.

**Content and pages**

- **FR-011**: The site MUST include: Home; Services overview; 30 service detail pages; Work index
  and case study pages; About; Process; Industries; Insights index and article pages; Careers;
  Contact; Privacy Policy; Terms of Service; Cookie notice; and a branded not-found page.
- **FR-012**: Home MUST include hero, capability strip, service groups, "How we work" (Discover,
  Design, Build, Launch, Grow), industries, selected work, why Coxcel, FAQ and final call to action.
- **FR-013**: Services MUST be organised in six groups (Build: Software & Product; Data: Analytics &
  Intelligence; AI: Intelligent Automation; Cloud & Operations; Advisory; Growth: Digital
  Marketing) containing the 30 services listed in the brief.
- **FR-014**: Each service page MUST include value proposition, problems solved, deliverables,
  delivery process, typical technologies (text labels only), FAQs and a contact action that
  preselects the service.
- **FR-015**: All service content MUST come from one structured content source that also drives
  navigation, the sitemap, structured data and the contact form's service options.
- **FR-016**: Case studies, team members, industries, FAQs and articles MUST each come from one
  structured content source.
- **FR-017**: About MUST explain the logo meaning: an upward arrow integrated into the letter C,
  standing for excellence, growth and forward momentum.
- **FR-018**: Process MUST describe three engagement models: fixed scope, dedicated team, retainer.
- **FR-019**: Industries MUST cover finance, retail and e-commerce, healthcare, logistics,
  education, public sector and startups.
- **FR-020**: Insights MUST launch with at least two complete, well-written articles on real topics.
- **FR-021**: Careers MUST provide an open application call to action.
- **FR-022**: The header MUST show the logo, a services mega-menu, links to other main pages and a
  primary "Start a project" action; the footer MUST show logo, short description, service links,
  company links, contact details, social links and copyright.

**Contact details**

- **FR-023**: All contact details (email info@coxcel.com, main phone, WhatsApp/mobile phone,
  address, business hours, social profile links) MUST be editable in one configuration location;
  unknown values MUST be clearly marked placeholders.
- **FR-024**: Email and phone numbers MUST be actionable links (mail and call).

**Contact form**

- **FR-025**: The form MUST collect name, email, phone (optional), company (optional), service of
  interest (all services plus "Other"), budget range (optional), message and a consent checkbox
  linking to the Privacy Policy.
- **FR-026**: Every field MUST be validated in the browser and again on the server.
- **FR-027**: The form MUST include a hidden honeypot field and per-address rate limiting
  (5 submissions per 10 minutes).
- **FR-028**: A valid submission MUST send a branded notification to the team inbox with reply-to
  set to the visitor, and a branded confirmation to the visitor.
- **FR-029**: The form MUST show idle, submitting, success and error states as accessible inline
  messages, with no pop-up alerts.
- **FR-029a**: After a failed submit, focus MUST move to the first invalid field; success and
  error messages MUST be announced to screen readers.
- **FR-029b**: Enquiry data MUST NOT be stored by the site beyond sending the two emails; the
  Privacy Policy MUST describe this processing and name the email provider.
- **FR-030**: If email delivery is not configured or fails, the visitor MUST see a clear message and
  the direct email address.

**Credibility**

- **FR-031**: The site MUST NOT present invented client names, logos, testimonials, awards,
  certifications or statistics as real.
- **FR-032**: Proof sections (testimonials, client logos, case studies, team, numeric claims) MUST
  be fully built, filled with labelled sample content, and individually switchable off in
  configuration.

**Discovery and quality**

- **FR-033**: Every page MUST have a unique title ("Page | Coxcel"), description, canonical URL,
  social preview metadata and a generated branded social image.
- **FR-034**: The site MUST publish a sitemap, robots rules, organisation structured data and
  service structured data on service pages.
- **FR-035**: The site MUST provide favicons, app icons and a web manifest named "Coxcel" with brand
  theme and background colours.
- **FR-036**: All text MUST meet WCAG 2.1 AA contrast; small blue text MUST use a darker accessible
  blue.
- **FR-037**: The site MUST provide a skip link, semantic landmarks, visible focus states, labelled
  fields, alt text and fully keyboard-operable menus.
- **FR-038**: The site MUST be responsive from 360px to wide desktop with a polished mobile menu.
- **FR-039**: The site ships a light theme only in v1; Ink sections provide dark colour blocking.
  A dark theme toggle is out of scope for v1.

### Key Entities

- **Service**: slug, title, group, short summary, value proposition, problems, deliverables,
  process steps, technologies, FAQs.
- **Service Group**: id, title, short description, ordered services.
- **Case Study**: slug, title, sector, services used, challenge, approach, outcome, sample flag.
- **Team Member**: name, role, short bio, sample flag.
- **Industry**: slug, name, challenges, how Coxcel helps, relevant services.
- **Article**: slug, title, summary, date, author, reading time, body.
- **FAQ**: question, answer.
- **Enquiry**: name, email, phone, company, service, budget, message, consent, timestamp.
- **Site Configuration**: contact details, social links, hours, address, proof-section switches.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify what Coxcel offers and find the primary call to
  action within 5 seconds of the home page loading.
- **SC-002**: A visitor can reach any of the 30 service pages from any page in 2 interactions or
  fewer.
- **SC-003**: A visitor can complete and submit the contact form in under 2 minutes.
- **SC-004**: Automated audits score 95 or higher for performance, accessibility, best practices and
  SEO on mobile and desktop for the home, a service and the contact page.
- **SC-005**: 100% of text meets WCAG 2.1 AA contrast; every page is fully usable by keyboard.
- **SC-006**: A search of the source finds zero gradient uses and zero emoji characters.
- **SC-007**: Every page renders without horizontal scrolling or layout breakage at 360px, 768px
  and 1280px.
- **SC-008**: Changing a contact detail or service requires editing exactly one file.
- **SC-009**: With email delivery unconfigured, 100% of valid submissions return a clear,
  non-crashing error message.

## Assumptions

- Copy is written in British English to match the brief ("Optimisation").
- Domain is coxcel.com; the canonical base URL is configurable.
- Rate limiting is per server instance and in memory, adequate for launch traffic; a shared store
  can replace it later.
- Budget ranges are generic bands (Under 10k, 10k-25k, 25k-50k, 50k-100k, 100k+, Not sure yet) in
  US dollars; editable in configuration.
- Team, case studies, testimonials and client logos ship as labelled samples; testimonials and
  client logos are hidden by default; case studies and team are shown with "Sample" labels.
- The Careers page has no job listings at launch; applications go to the main email.
- The map on Contact is a styled placeholder, not a live map service.
- Legal pages are sensible templates and need review by the business before launch.
- Moodboard images with neon lighting or VR headsets are treated as mood references only; the
  "no neon" rule takes precedence.
