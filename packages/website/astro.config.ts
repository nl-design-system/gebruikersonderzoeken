import react from '@astrojs/react';
// @ts-check
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
  integrations: [react()],
  markdown: {
    remarkPlugins: [coverPlugin],
  },
  site: 'https://gebruikersonderzoeken.nl',
});
