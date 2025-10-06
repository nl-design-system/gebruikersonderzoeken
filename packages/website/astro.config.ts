import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { nldsComponentsPlugin as nldsComponentsRehypePlugin } from './markdown-plugins/rehype-nlds-components/index.ts';
import { addTrailingSlashPlugin } from './markdown-plugins/rehype-trailing-slash/index.ts';
import { coverPlugin } from './markdown-plugins/remark-cover/index.ts';
import { nldsComponentsPlugin as nldsComponentsRemarkPlugin } from './markdown-plugins/remark-nlds-components/index.ts';
import { removeH1FromMarkdown } from './markdown-plugins/remark-remove-h1/index.ts';

const siteUrl = 'https://gebruikersonderzoeken.nl';

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
    rehypePlugins: [nldsComponentsRehypePlugin, addTrailingSlashPlugin({ siteUrl, stripOrigin: true })],
    remarkPlugins: [nldsComponentsRemarkPlugin, coverPlugin, removeH1FromMarkdown({ filter: 'onderzoek-bekijken' })],
  },
  site: siteUrl,
});
