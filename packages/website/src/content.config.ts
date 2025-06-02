import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API
import { PageSchema } from './schemas/page.ts';

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/', pattern: '**/*.md' }),
  schema: PageSchema,
});

export const collections = { onderzoeken };
