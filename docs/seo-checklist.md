# Launch checklist for ssaquafeedsandneeds

Before going live, in order.

## 1. Facts still marked [FILL IN] (owner's answers)

All in `src/lib/shop.ts` unless noted. A footer block on every page lists
these same items in public view, on purpose.

1. Which name leads: "S.S Aqua Feeds & Needs" or "Siva Sai Aqua"?
   (`NAME_NEEDS_CONFIRMING = false` once settled.)
2. Phone display + dial format, and WhatsApp digits.
3. Closing time and the weekly off day (`HOURS.closes`, `HOURS.weeklyOff`).
4. GPS coordinates (`GEO.lat/lng`).
5. Google Maps place ID, Facebook and Justdial pages (`SAME_AS`,
   `PLACE_ID`).
6. Exact product lines and brands per shelf (also update
   `src/content/pages-copy.ts` categories).
7. Delivery and service area.
8. Real photographs of the shop, counter and shelves to replace the stock
   stand-ins in `src/lib/photos.ts`.
9. Real domain: set `SITE_URL` for the deploy (`astro.config.mjs` falls back
   to the live Vercel URL) and update the Sitemap line in
   `public/robots.txt` to match.

## 2. Build + deploy

1. `npx astro check` passes, `npm run build` yields 20 pages.
2. Deploy `dist/` to Vercel (`vercel.json` already sets trailingSlash
   false, immutable caching for `/_astro/*` and security headers).
3. Visit `/`, `/te`, `/products`, `/products/feed`, `/faq`, `/visit`,
   `/story` on the live domain; check phone/WhatsApp buttons dial once the
   numbers are filled.

## 3. Search Console + Bing

1. Add the domain property in Google Search Console, verify via DNS.
2. Submit the sitemap: `https://<domain>/sitemap-index.xml` (built by
   @astrojs/sitemap). Request indexing of `/` and `/visit` first.
3. Same in Bing Webmaster Tools (can import from Search Console).
4. After a week, check "Pages" report for the 20 URLs and hreflang errors.

## 4. Local visibility

1. Claim/verify the Google Business Profile for the shop using the same
   NAP as the site; add `hasMap`, sameAs links once the profile exists.
2. Bing Places: mirror the profile.
3. Keep name, address and phone identical everywhere the shop appears.

## 5. AI answer engines

1. Confirm `https://<domain>/robots.txt` allows GPTBot, OAI-SearchBot,
   ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended.
2. Confirm `/llms.txt` and `/llms-full.txt` resolve (they ship in `public/`,
   cached via vercel.json).
3. Re-read `llms-full.txt` whenever a FILL IN fact lands; keep it in step
   with `src/lib/shop.ts`.

## 6. Ongoing

1. Prices deliberately appear nowhere; keep it that way unless the owner
   wants a seasonal note.
2. FAQ items live in `src/content/pages-copy.ts`; FAQPage JSON-LD on the
   faq views reads the same array: questions can be added in one place.
3. Photos: when real ones arrive, replace entries in `src/lib/photos.ts`
   (alt text + credit live there), remove "Stock photo" captions on pages.
