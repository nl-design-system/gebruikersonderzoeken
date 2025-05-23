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

import { parseFrontmatter } from '@astrojs/markdown-remark';
import { readdir, lstat, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

/**
 *
 * @typedef  {object} FrontmatterResult
 * @property {object} frontmatter
 * @property {string} [frontmatter.title]
 * @property {string} [frontmatter.pagination_label]
 * @property {string} [frontmatter.slug]
 */

/**
 * @typedef  {object}  Category
 * @property {string}  label
 * @property {true}    collapsible
 * @property {boolean} collapsed
 */

/**
 * @typedef  {object}  Folder
 * @property {string}  id
 * @property {string}  label
 * @property {true}    collapsible
 * @property {boolean} collapsed
 * @property {Item[]}  children
 * @property {string}  [parentId]
 */

/**
 * @typedef  {object} Page
 * @property {string} id
 * @property {string} label
 * @property {false}  collapsible
 * @property {string} slug
 * @property {string} [parentId]
 */

/** @typedef {Folder | Page} Item */

const DOCS_DIR = path.join(import.meta.dirname + '../../../../docs/');
const CONFIG_DIR = path.join(import.meta.dirname, '../.config');

/** @param {string} path */
const isNotIgnoredPath = (path) => path.split('/').reverse()?.[0].startsWith('_') === false;

/** @param {string} path */
const getLabelFromPath = (path) =>
  path
    .split('/')
    .reverse()?.[0]
    ?.replace(/^./, (char) => char.toUpperCase())
    ?.replace('-', ' ');

/** @param {string} path */
const getParentId = (path) => path.split('/').reverse().splice(1).reverse().join('/') || undefined;

/**
 * @param {Item[]} collection
 * @param {string} [parent]
 * @returns {Item[]}
 */
const getItemsWithParent = (collection, parent) => collection.filter((item) => item.parentId === parent);

/**
 * @param {string} path
 * @returns {Promise<Folder>}
 */
async function buildFolder(path) {
  const category = /** @type {Category} */ (
    await readFile(`${DOCS_DIR}${path}/_category_.json`, { encoding: 'utf-8' })
      .then((content) => JSON.parse(content))
      .catch(() => ({
        collapsed: false,
        collapsible: true,
        label: getLabelFromPath(path),
      }))
  );

  /** @type {Folder} */
  const folder = {
    id: path,
    children: [],
    parentId: getParentId(path),
    ...category,
  };

  return folder;
}

/**
 * @param {string} path
 * @returns {Promise<Page>}
 */
async function buildPage(path) {
  /** @type {string} */
  const contents = await readFile(`${DOCS_DIR}${path}`, { encoding: 'utf-8' });

  /** @type {FrontmatterResult} */
  const result = parseFrontmatter(contents);

  const id = path.replace('.md', '').replace('/README', '');

  return {
    id,
    collapsible: false,
    label: result?.frontmatter?.pagination_label || result?.frontmatter?.title || getLabelFromPath(path),
    parentId: getParentId(path),
    slug: `/docs${result?.frontmatter?.slug || `/${id}`}`,
  };
}

const files = await readdir(DOCS_DIR, { recursive: true })
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
  .then((collection) => {
    const menu = getItemsWithParent(collection);

    /** @param {Item[]} children */
    function collectChildrenInItems(children) {
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

await mkdir(CONFIG_DIR, { recursive: true });
await writeFile(path.join(CONFIG_DIR, 'menu.json'), JSON.stringify(files, null, 2), { encoding: 'utf-8' });
