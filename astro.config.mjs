import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import markdownConfig from "./markdown.config.js";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  markdown: markdownConfig,
  integrations: [
    tailwind(),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx({
      ...markdownConfig,
      extendPlugins: false,
    }),
    react(),
    sitemap(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
