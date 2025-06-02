import { CoverSchema } from '@schemas/cover.ts';
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/', pattern: '**/*.md' }),
  schema: z.object({
    cover: CoverSchema.optional(),
    title: z.string(),
  }),
});

export const collections = { onderzoeken };
