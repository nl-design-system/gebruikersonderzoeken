import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

export const CoverSchema = z.object({
  alt: z.string(),
  url: z.string(),
});

export const PageSchema = z.object({
  cover: CoverSchema.optional(),
  description: z.string().optional(),
  title: z.string(),
});

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/', pattern: '**/*.md' }),
  schema: PageSchema,
});

export const collections = { onderzoeken };
