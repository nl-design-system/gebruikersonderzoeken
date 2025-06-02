// Import Zod from astro
import { z } from 'astro:content';

export const CoverSchema = z.object({
  alt: z.string(),
  url: z.string(),
});

export type Cover = z.infer<typeof CoverSchema>;

// Validates object ensuring it conforms to the Cover schema.
export const isCover = (maybeCover: unknown): maybeCover is Cover => {
  const result = CoverSchema.safeParse(maybeCover);
  return result.success;
};
