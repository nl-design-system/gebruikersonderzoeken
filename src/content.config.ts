import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const onderzoekBekijken = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content/onderzoek-bekijken" }),
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = { onderzoekBekijken };
