// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://drabkirn.cdadityang.xyz",
  prefetch: true,
  build: {
    inlineStylesheets: "never"
  },
  integrations: [sitemap(), purgecss()]
});