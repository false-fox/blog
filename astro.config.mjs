import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind"

// https://astro.build/config
export default defineConfig({
  site: 'https://www.falsefox.dev',
  integrations: [sitemap(), pagefind()]
});