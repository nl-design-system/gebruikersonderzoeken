import { CoverSchema } from '@schemas/cover.ts';
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/onderzoek-bekijken/', pattern: '**/!(_)(*).md' }),
  schema: z.object({
    cover: CoverSchema.optional(),
    description: z.string(),
    themes: z.array(reference('themes')).default(['overig']),
    title: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: '../../docs/', pattern: '!(onderzoek-bekijken)/**/!(_)(*).md' }),
  schema: z.object({
    cover: CoverSchema.optional(),
    description: z.string(),
    title: z.string(),
  }),
});

const themes = defineCollection({
  loader: glob({ base: '../../_themes/', pattern: '**/!(_)(*).md' }),
  schema: z.object({
    order: z.number().default(0),
    title: z.string(),
  }),
});

export const collections = { onderzoeken, pages, themes };
