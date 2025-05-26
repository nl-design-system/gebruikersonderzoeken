/**
 * This script builds a JSON structure of the markdown files within the /docs
 * folder. This structure is used to render the menu.
 *
 * The label of the menu item is taken from the front-matter (markdown files) or
 * from the _category_.json files (folders) when available. If the data is not
 * present, the file name is used.
 *
 * The slug id also fetched form the front-matter when available
 */

import type { MenuItemFolder, MenuItemPage } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import { readdir, lstat, readFile } from 'node:fs/promises';
import path from 'node:path';

interface Category {
  label: string;
  collapsible: true;
  collapsed: boolean;
}

interface Folder extends MenuItemFolder {
  parentId?: string;
}

interface Page extends MenuItemPage {
  collapsible?: false;
  parentId?: string;
}

type Item = Folder | Page;

const DOCS_DIR = path.join(process.cwd(), '../../docs/');

/**
 * Ignore files starting with an underscore
 */
const isNotIgnoredPath = (path: string) => path.split('/').reverse()?.[0]?.startsWith('_') === false;

/**
 * Create a label from the file name. Used as a fallback for when there is no
 * actual label available
 * 1. The first letter is capitalised
 * 2. dashes are converted to spaced
 */
const getLabelFromPath = (path: string) =>
  path
    .split('/')
    .reverse()?.[0]
    ?.replace(/^./, (char) => char.toUpperCase())
    ?.replace('-', ' ');

/**
 * A pathId, is the path to a file. The parent is the folder that which contains
 * the file. The parentId is, thus, the path tot the parent folder
 */
const getParentId = (path: string) => path.split('/').reverse().splice(1).reverse().join('/') || undefined;

/**
 * Get all children that have a specific parentId. When no parent is specified
 * the children with a missing parentId (root level items) are returned
 */
const getChildrenOfParent = (collection: Item[], parent?: string): Item[] =>
  collection.filter((item) => item.parentId === parent);

/**
 * Build a Folder object for a given path.
 */
async function buildFolder(path: string) {
  const category = (await readFile(`${DOCS_DIR}${path}/_category_.json`, { encoding: 'utf-8' })
    .then((content) => JSON.parse(content))
    .catch(() => ({
      collapsed: false,
      collapsible: true,
      label: getLabelFromPath(path),
    }))) as Category;

  const folder: Folder = {
    id: path,
    children: [],
    parentId: getParentId(path),
    ...category,
  };

  return folder;
}

/**
 * Build a Page object for a given path
 */
async function buildPage(path: string): Promise<Page> {
  const contents = await readFile(`${DOCS_DIR}${path}`, { encoding: 'utf-8' });
  const { frontmatter } = parseFrontmatter(contents);

  const id = path.replace('.md', '').replace('/README', '');
  const label = frontmatter?.['pagination_label'] ?? frontmatter?.['title'] ?? getLabelFromPath(path);
  const slug = frontmatter['slug'] ? `/docs${frontmatter?.['slug']}` : `/docs/${id}`;

  return {
    id,
    collapsible: false,
    label,
    parentId: getParentId(path),
    slug,
  };
}

/**
 * Get a menu structure based on the markdown files in the `docs/` directory.
 * The structure is nested like the file structure.
 *
 * **`label` field**
 * The `label` fields are filled with values from the frontmatter (markdown
 * files) or the content of the `_category_.json` files (folders).
 * When these values are missing, a fallback value is generated from the file path
 *
 * **`slug` field**
 * The slug is taken from the frontmatter of the markdown file, when not present
 * the file path (without the exention) is being used. Note that `/README.ext`
 * is treated as a index route, and thus becomes `/`. Also there is a folder with
 * a space. This is dealt with as much as possible to keep urls working
 */
export const getMenuStructure = () =>
  readdir(DOCS_DIR, { recursive: true })
    .then((list) => list.filter(isNotIgnoredPath))
    .then((list) =>
      Promise.all(
        list.map(async (path) => {
          const stat = await lstat(`${DOCS_DIR}${path}`);

          if (stat.isDirectory()) {
            return buildFolder(path);
          }

          if (stat.isFile()) {
            return buildPage(path);
          }

          throw new Error(`Path ${path} is not a file nor a folder`);
        }),
      ),
    )
    .then((collection: Item[]) => {
      const menu = getChildrenOfParent(collection, undefined);

      function collectChildrenInItems(children: Item[]) {
        children.forEach((item) => {
          if (item.collapsible === true) {
            item.children = getChildrenOfParent(collection, item.id);
            collectChildrenInItems(item.children);
          }
        });
      }

      collectChildrenInItems(menu);

      return menu;
    });
