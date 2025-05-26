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

const isNotIgnoredPath = (path: string) => path.split('/').reverse()?.[0].startsWith('_') === false;

const getLabelFromPath = (path: string) =>
  path
    .split('/')
    .reverse()?.[0]
    ?.replace(/^./, (char) => char.toUpperCase())
    ?.replace('-', ' ');

const getParentId = (path: string) => path.split('/').reverse().splice(1).reverse().join('/') || undefined;

const getItemsWithParent = (collection: Item[], parent?: string): Item[] =>
  collection.filter((item) => item.parentId === parent);

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

async function buildPage(path: string) {
  const contents = await readFile(`${DOCS_DIR}${path}`, { encoding: 'utf-8' });

  const { frontmatter } = parseFrontmatter(contents);

  const id = path.replace('.md', '').replace('/README', '');
  const label = frontmatter?.['pagination_label'] ?? frontmatter?.['title'] ?? getLabelFromPath(path);
  const slug = frontmatter['slug'] ? `/docs${frontmatter?.['slug']}` : `/docs/${id}`;

  const page: Page = {
    id,
    collapsible: false,
    label,
    parentId: getParentId(path),
    slug,
  };

  return page;
}

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
      const menu = getItemsWithParent(collection, undefined);

      function collectChildrenInItems(children: Item[]) {
        children.forEach((item) => {
          if (item.collapsible === true) {
            item.children = getItemsWithParent(collection, item.id);
            collectChildrenInItems(item.children);
          }
        });
      }

      collectChildrenInItems(menu);

      return menu;
    });
