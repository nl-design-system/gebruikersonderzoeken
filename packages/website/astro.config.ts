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
  security: {
    csp: false,
  },
};

const cspProdConfig: AstroUserConfig = {
  security: {
    csp: {
      directives: [
        "base-uri 'self' https://gebruikersonderzoeken.nl",
        "connect-src 'self' https://gebruikersonderzoeken.nl https://*.algolia.net https://*.algolianet.com https://*.algolia.io blob: data:",
        "default-src 'self' https://gebruikersonderzoeken.nl",
        "font-src 'self' https://gebruikersonderzoeken.nl",
        "form-action 'self' https://gebruikersonderzoeken.nl",
        // "frame-ancestors 'none'", // in astro, csp is handled via <meta> element. where this directive is not allowed
        "img-src 'self' https://gebruikersonderzoeken.nl https://raw.githubusercontent.com blob: data:",
        "object-src 'none'",
        'worker-src blob:',
      ],
      scriptDirective: {
        resources: ["'self'", 'https://gebruikersonderzoeken.nl'],
      },
      styleDirective: {
        resources: ["'self'", 'https://gebruikersonderzoeken.nl'],
      },
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
  security: {
    csp: cspConfig.security?.csp,
  },
  site: siteUrl,
  vite: {
    build: {
      // prevent vite from inlining assets as data:* attributes because it violates csp rules
      assetsInlineLimit: 0,
    },
  },
});
