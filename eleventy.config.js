import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import { jsxToString } from 'jsx-async-runtime';

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(EleventyVitePlugin)

	eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
	})

	eleventyConfig.addTransform("tsx", async (content) => {
		const result = await jsxToString(content);
		return `<!doctype html>\n${result}`;
	});

	eleventyConfig.addTemplateFormats("11ty.jsx,11ty.tsx")
}
