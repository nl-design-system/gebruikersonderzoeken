import type { Hit } from './types.js';

export function groupHits(hits: Hit[]) {
  const map = new Map<Hit['url_without_anchor'], Hit['hierarchy']['lvl0']>();

  hits.forEach((hit) => {
    const snippets = {
      content: [],
      lvl0: '',
    };
    snippets.lvl0 = hit._highlightResult.hierarchy.lvl0.value;
    snippets.content = [...snippets.content, hit?._snippetResult?.content?.value].filter((x) => x);

    map.set(hit.url_without_anchor, snippets);
  });

  return map;
}
