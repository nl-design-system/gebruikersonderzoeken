import type { Root } from 'hast';
import { visit } from 'unist-util-visit'

/**
 * A rehype plugin to transform HTML generated from Markdown so that it uses
 * NL Design System components
 */
export function nldsComponentsPlugin() {
  return function transform(tree: Root): void {
    visit(tree, 'element', function(node, _index, parent) {
    })
  };
}

