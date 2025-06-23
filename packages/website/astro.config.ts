import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { coverPlugin } from './remark-cover-plugin.ts';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.5,
    }),
  ],
  markdown: {
    remarkPlugins: [coverPlugin],
  },
  site: 'https://gebruikersonderzoeken.nl',
});
