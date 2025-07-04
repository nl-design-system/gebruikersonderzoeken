import type { Root } from 'hast';
import { visit } from 'unist-util-visit';
import { blockquote } from './blockquote.ts';
import { code } from './code.ts';
import { emphasis } from './emphasis.ts';

/**
 * A rehype plugin to transform HTML generated from Markdown so that it uses
 * NL Design System components
 */
export function nldsComponentsPlugin() {
  return function transform(tree: Root): void {
    visit(tree, 'element', function (node, _index, parent) {
      blockquote(node);
      code(node, parent);
      emphasis(node);
    });
  };
}
