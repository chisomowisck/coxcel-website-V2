# Quickstart and validation

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY to test real sending
npm run dev                  # http://localhost:3000
npm run build                # runs check:brand, type-check, lint
npm run check:brand          # gradient + emoji guard
```

## Validation scenarios
1. Home at 360/768/1280px: hero visible, no horizontal scroll, "Start a project" goes to /contact.
2. Keyboard: Tab shows skip link first; open Services menu with Enter, arrow/Tab through, Escape
   closes and returns focus.
3. `/services/data-visualization-bi-dashboards` -> "Discuss this service" -> /contact?service=...
   preselected.
4. Submit the form empty: inline errors, focus on first error.
5. Submit valid form with no `RESEND_API_KEY`: inline error naming info@coxcel.com.
6. Submit valid form with key: success message; two emails delivered.
7. `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/site.webmanifest`, `/favicon.ico` all load.
8. `/does-not-exist` renders branded 404.
9. `npm run check:brand` prints no matches.
