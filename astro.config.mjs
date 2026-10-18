// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// FILL IN: real production domain before launch. Drives canonical URLs,
// hreflang, sitemap.xml and every absolute OG link.
export default defineConfig({
  site: "https://www.ssaquafeedsandneeds.example",
  trailingSlash: "never",
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  image: { domains: ["images.pexels.com"] },
  vite: {
    plugins: [tailwindcss()],
  },
});
