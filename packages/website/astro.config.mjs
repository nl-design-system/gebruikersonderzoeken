import react from '@astrojs/react';
// @ts-check
import { defineConfig } from 'astro/config';
import { coverPlugin } from './remark-cover-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [coverPlugin],
  },
  site: 'https://gebruikersonderzoeken.nl',
});
