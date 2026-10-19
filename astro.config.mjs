// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Drives canonical URLs, hreflang, sitemap.xml and every absolute OG link.
// SITE_URL in the deploy environment wins; this is the domain the site is
// served from, so a build without env vars is still correct.
const site = process.env.SITE_URL ?? "https://www.ssaquagroup.com";

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
