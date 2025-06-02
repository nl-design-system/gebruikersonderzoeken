import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/', pattern: '**/*.md' }),
  schema: z.object({
    cover: z
      .object({
        alt: z.string(),
        url: z.string(),
      })
      .optional(),
    title: z.string(),
  }),
});

export const collections = { onderzoeken };
