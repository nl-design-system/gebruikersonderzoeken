import { CoverSchema } from '@schemas/cover.ts';
import iconList from '@tabler/icons-react/dist/esm/icons-list.mjs';
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const onderzoeken = defineCollection({
  loader: glob({ base: '../../docs/onderzoek-bekijken/', pattern: '**/!(_)(*).md' }),
  schema: z.object({
    conducted_by: z.array(z.string()).optional(),
    cover: CoverSchema.optional(),
    date_conducted: z.date().optional(),
    description: z.string(),
    summary: z
      .string()
      .optional()
      // Remove 'Samengevat:' from the string since it is being added in the template
      // But authors might include it because looks like it is part of the string
      // Having it excluded from the frontmatter, makes frontmatter much easier to work with
      .transform((string) => (string ? string.replace(/^[Ss]amengevat:(\s)?/, '') : string)),
    target_group: z.union([z.array(z.string()), z.string()]).optional(),
    themes: z.array(reference('themes')).default(['overig']),
    title: z.string(),
    type: z.union([z.array(z.string()), z.string()]).optional(),
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
    description: z.string().optional(),
    icon: z.enum(iconList).optional(),
    order: z.number().default(0),
    title: z.string(),
  }),
});

export const collections = { onderzoeken, pages, themes };
