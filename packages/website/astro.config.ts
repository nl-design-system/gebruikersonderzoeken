import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { nldsComponentsPlugin } from './markdown-plugins/rehype-nlds-components/index.ts';
import { coverPlugin } from './markdown-plugins/remark-cover/index.ts';
import { removeH1FromMarkdown } from './markdown-plugins/remark-remove-h1/index.ts';

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
    rehypePlugins: [nldsComponentsPlugin],
    remarkPlugins: [coverPlugin, removeH1FromMarkdown({ filter: 'onderzoek-bekijken' })],
  },
  site: 'https://gebruikersonderzoeken.nl',
});
