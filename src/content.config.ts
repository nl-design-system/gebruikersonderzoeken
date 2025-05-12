import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const number = /\d+-/;

const onderzoekBekijken = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./docs/onderzoek-bekijken",
		generateId: ({ entry, data }) => {
			const id = typeof data.slug === "string"
				? data.slug.replace("/onderzoek-bekijken/", "")
				: entry
					.split("/")
					.map((part) => part.replace(number, ""))
					.join("/");

			return `onderzoek-bekijken/${id}`.replace(".md", "");
		},
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		slug: z.optional(z.string()),
	}),
});

const infoPages = defineCollection({
	loader: glob({
		pattern: "**/README.md",
		base: "./docs",
		generateId: ({ entry }) => entry.replace("/README.md", ""),
	}),
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = { onderzoekBekijken, infoPages };
