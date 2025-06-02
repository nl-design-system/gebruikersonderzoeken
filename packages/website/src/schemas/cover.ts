// Import Zod from astro
import { z } from 'astro:content';

export const CoverSchema = z.object({
  alt: z.string(),
  url: z.string(),
});

export type Cover = z.infer<typeof CoverSchema>;
