// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// FILL IN: real production domain before launch. Drives canonical URLs,
// hreflang, sitemap.xml and every absolute OG link.
const site = "https://www.ssaquafeedsandneeds.example";

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
