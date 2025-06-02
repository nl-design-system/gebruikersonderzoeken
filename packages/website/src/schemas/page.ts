// Import Zod from astro
import { z } from 'astro:content';
import { CoverSchema } from './cover.ts';

export const PageSchema = z.object({
  cover: CoverSchema.optional(),
  description: z.string().optional(),
  title: z.string(),
});

export type Page = z.infer<typeof PageSchema>;
