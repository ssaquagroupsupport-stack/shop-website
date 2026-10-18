# S.S Aqua Feeds & Needs, Bhimavaram

Static Astro site for the shop on JP Road. English at `/`, Telugu mirror at
`/te/...`. Every route comes from one registry; nothing is invented.

## Stack

- Astro 7 static, no React. Tailwind v4 (`@tailwindcss/vite`), fonts via
  fontsource variable packages, Phosphor icons, one GSAP + Lenis reveal
  island (skipped for `prefers-reduced-motion` and coarse pointers).
- Registry-driven routing: `src/pages/[...slug].astro` iterates
  `src/lib/pages.ts` (page meta) + `CATEGORIES`. Add a page to the registry
  and it exists in both languages, in the sitemap and in the nav.

## Where facts live

`src/lib/shop.ts` holds every claim the site makes: address, hours,
payments, phone, WhatsApp, GPS. Anything unconfirmed is `null` and renders
as a visible `[FILL IN]` marker instead of a guess. Fill a value there and
the marker disappears everywhere at once. The footer lists what is still
missing.

`astro.config.mjs` has a placeholder domain ("...example") and
`public/robots.txt` repeats it in the Sitemap line. Replace both with the
real domain before launch.

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Dev server (use `npx astro dev --background`, then `astro dev stop/status/logs`) |
| `npm run build` | Build to `./dist/` (20 pages, both languages) |
| `npm run preview` | Preview the build, e.g. `npx astro preview --port 4321` |
| `npx astro check` | Type + content check |

## Search engines, AI bots

- `public/robots.txt` allows all crawlers and names GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, PerplexityBot and Google-Extended explicitly.
- `public/llms.txt` and `public/llms-full.txt` give answer engines the shop's
  confirmed facts as plain text.
- LocalBusiness JSON-LD ships in `src/layouts/Base.astro`. FAQPage JSON-LD
  ships on `/faq` and `/te/faq`.
- hreflang (en-IN / te-IN / x-default), canonical, OG and Twitter cards are
  generated per page by `src/components/Seo.astro`.
- Lower-resolution AVIF/WebP variants of every photo are generated at build
  time by `src/components/SmartImage.astro`.
- `docs/seo-checklist.md` is the launch checklist: Search Console and Bing
  submission, Business Profile, and the fill-in values still pending.

## Feedback form

The home page ends with a feedback form (name, optional phone, message) that
appends a row to a Google Sheet through an Apps Script web app. No server, no
API keys, no packages. Setup: `docs/feedback-sheet.md`; the endpoint goes in
`.env` as `PUBLIC_FEEDBACK_URL` (see `.env.example`) and, because `PUBLIC_`
values are inlined at build time, it needs a rebuild to take effect. Until it
is set, the form renders a visible `[FEEDBACK SHEET URL]` marker and the
footer lists it as a pending fact.

## Building to write

Editable copy lives in `src/content/aqua-copy.ts` (landing page) and
`src/content/pages-copy.ts` (story, visit, FAQ, products, categories; both
languages side by side). Business facts live in `src/lib/shop.ts`. Page
titles/descriptions for SEO live in `src/lib/pages.ts`.
