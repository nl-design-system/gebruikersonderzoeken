import { CoverSchema } from '@schemas/cover.ts';
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/', pattern: '**/!(_)(*).md' }),
  schema: z.object({
    cover: CoverSchema.optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = { onderzoeken };
