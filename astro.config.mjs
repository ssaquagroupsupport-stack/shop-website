// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Drives canonical URLs, hreflang, sitemap.xml and every absolute OG link.
// Set SITE_URL in the deploy environment once the real domain is live; until
// then this is the domain the site is actually served from.
const site = process.env.SITE_URL ?? "https://shop-website-ruddy.vercel.app";

export default defineConfig({
  site,
  trailingSlash: "never",
  integrations: [
    sitemap({
      // Static assets worth indexing that are not routes of their own.
      customPages: [new URL("/downloads/ss-aqua-brands-we-carry.pdf", site).href],
    }),
  ],
  prefetch: { prefetchAll: true },
  image: { domains: ["images.pexels.com"] },
  vite: {
    plugins: [tailwindcss()],
  },
});
