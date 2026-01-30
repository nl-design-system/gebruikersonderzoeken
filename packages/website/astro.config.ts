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
  experimental: {
    csp: {
      directives: [
        "base-uri 'self'",
        "connect-src 'self' https://*.algolia.net https://*.algolianet.com https://*.algolia.io blob: data:",
        "default-src 'self'",
        "font-src 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "img-src 'self' https://raw.githubusercontent.com blob: data:",
        "object-src 'none'",
        'worker-src blob:',
      ],
    },
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      filter: (page) => page !== 'https://gebruikersonderzoeken.nl/zoeken/',
      priority: 0.5,
    }),
  ],
  markdown: {
    rehypePlugins: [nldsComponentsRehypePlugin, addTrailingSlashPlugin({ siteUrl, stripOrigin: true })],
    remarkPlugins: [nldsComponentsRemarkPlugin, coverPlugin, removeH1FromMarkdown({ filter: 'onderzoek-bekijken' })],
  },
  site: siteUrl,
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
