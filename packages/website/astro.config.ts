import type { AstroUserConfig } from 'astro';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { nldsComponentsPlugin as nldsComponentsRehypePlugin } from './markdown-plugins/rehype-nlds-components/index.ts';
import { addTrailingSlashPlugin } from './markdown-plugins/rehype-trailing-slash/index.ts';
import { coverPlugin } from './markdown-plugins/remark-cover/index.ts';
import { nldsComponentsPlugin as nldsComponentsRemarkPlugin } from './markdown-plugins/remark-nlds-components/index.ts';
import { removeH1FromMarkdown } from './markdown-plugins/remark-remove-h1/index.ts';

const siteUrl = 'https://gebruikersonderzoeken.nl';

const cspDevConfig: AstroUserConfig = {
  experimental: {
    csp: false,
  },
};

const cspProdConfig: AstroUserConfig = {
  experimental: {
    csp: {
      directives: [
        "base-uri 'self'",
        "connect-src 'self' https://*.algolia.net https://*.algolianet.com https://*.algolia.io blob: data:",
        "default-src 'self'",
        "font-src 'self'",
        "form-action 'self'",
        // "frame-ancestors 'none'", // in astro, csp is handled via <meta> element. where this directive is not allowed
        "img-src 'self' https://raw.githubusercontent.com blob: data:",
        "object-src 'none'",
        'worker-src blob:',
      ],
    },
  },
};

const cspConfig = process.env['NODE_ENV'] === 'development' ? cspDevConfig : cspProdConfig;

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
  },
  experimental: {
    csp: cspConfig.experimental?.csp,
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      // Temporary remove /zoeken from the sitemap
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
      // prevent vite from inlining assets as data:* attributes because it violates csp rules
      assetsInlineLimit: 0,
    },
  },
});
