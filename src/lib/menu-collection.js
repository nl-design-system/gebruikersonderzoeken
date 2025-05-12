import { readdir, readFile } from "node:fs/promises";
import { lstat } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "docs/onderzoek-bekijken");

const number = /\d+-/;

export async function getMenuCollection() {
	const files = await readdir(
		path.join(process.cwd(), "docs/onderzoek-bekijken"),
		{ recursive: true },
	);

	const listPromise = files
		.filter((file) => file.includes("_category_.json") === false)
		.map(async (file) => {
			const filePath = path.join(dir, file);
			const stat = await lstat(filePath);

			const pathSections = file.split("/").reverse();

			let parent;
			let label;
			const id = file
				.split("/")
				.map((part) => part.replace(number, "").replace(".md", ""))
				.join("/");

			if (pathSections.length > 1) {
				parent = pathSections[1].replace(number, "");
			}

			if (stat.isDirectory()) {
				const category = await readFile(
					path.join(filePath, "_category_.json"),
					{ encoding: "utf-8" },
				);
				const json = JSON.parse(category);
				label = json.label;
			}

			return { id, parent, label };
		});

	return await Promise.all(listPromise);
}
