import type { Root } from 'hast';
import { visit } from 'unist-util-visit';
import { blockquote } from './blockquote.js';
import { code } from './code.js';
import { emphasis } from './emphasis.js';
import { figure } from './figure.js';
import { headingLevel1, headingLevel2, headingLevel3, headingLevel4, headingLevel5, headingLevel6 } from './heading.js';
import { hr } from './hr.js';
import { image } from './image.js';
import { link } from './link.js';
import { orderedList } from './ordered-list.js';
import { paragraph } from './paragraph.js';
import { pre } from './pre.js';
import { unorderedList } from './unordered-list.js';

const defaultComponents = {
  a: link,
  blockquote,
  code,
  em: emphasis,
  figure,
  h1: headingLevel1,
  h2: headingLevel2,
  h3: headingLevel3,
  h4: headingLevel4,
  h5: headingLevel5,
  h6: headingLevel6,
  hr,
  img: image,
  ol: orderedList,
  p: paragraph,
  pre,
  ul: unorderedList,
};

/**
 * A rehype plugin to transform HTML generated from Markdown so that it uses
 * NL Design System components
 *
 * Rehype does not parse HTML markup in markdown files. For HTML elements in
 * Markdown that need transformation (like `<figure>`), trigger this plugin
 * in `packages/website/markdown-plugins/remark-nlds-components/index.ts` also
 */
export default function nldsComponentsPlugin({ components } = { components: {} }) {
  return function transform(tree: Root): void {
    visit(tree, 'element', function (node, index, parent) {
      const transformers = { ...defaultComponents, ...components };
      Object.values(transformers).forEach((transformer) => {
        transformer(node, index, parent);
      });
    });
  };
}
