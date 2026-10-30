# Launch checklist: placeholders to replace

## Contact details (`src/config/site.ts`)

- [ ] `legalName`: registered company name
- [ ] `foundedYear`: used as the copyright year before the browser updates it
- [ ] `phones.main`: real main line (display text and `tel:` link)
- [ ] `phones.whatsapp`: real WhatsApp / mobile number (display text and `wa.me` link)
- [ ] `address.lines`: real office address
- [ ] `hours` and `timeZoneNote`: confirm business hours and name the time zone
- [ ] `socials`: real LinkedIn, X, GitHub, Facebook and Instagram URLs (remove any you do not use)

## Sample content (marked `// SAMPLE: replace before launch`)

- [ ] `src/content/case-studies.ts`: four representative case studies. Replace with real, approved
      client work, or set `features.caseStudies` to `false`
- [ ] `src/content/team.ts`: six placeholder team members. Add real names, roles and bios, or set
      `features.team` to `false`
- [ ] `src/content/testimonials.ts`: testimonials and client logos are hidden. Only enable with real
      quotes and logos used with written permission
- [ ] `capabilityNumbers` in `src/content/testimonials.ts`: currently describe the offer (30 services,
      5 phases, 3 models, AA target). Keep, edit or set `features.capabilityNumbers` to `false`

## Legal

- [ ] Have Privacy Policy, Terms of Service and Cookie notice reviewed by a qualified adviser
- [ ] Add registered company number and address to the Privacy Policy
- [ ] Name the hosting and email providers and confirm international transfer safeguards
- [ ] State governing law and jurisdiction in the Terms

## Email

- [ ] Verify `coxcel.com` in Resend and set `RESEND_API_KEY` in Vercel
- [ ] Confirm `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`
- [ ] Send a test enquiry and check both emails arrive (including spam folders)

## Other

- [ ] Contact page map placeholder: replace with an embedded or static map if wanted
- [ ] Decide on the logo colour: `#457AF4` (guidelines, current) or `#007BFF` (supplied files)
- [ ] Set `NEXT_PUBLIC_SITE_URL` if the site launches on a different domain
- [ ] Review the three Insights articles and the author line ("Coxcel")
