import type { Hit } from './types.js';

interface Group {
  hierarchy: 'lvl0' | 'lvl1' | 'lvl2' | 'lvl3' | 'lvl4' | 'lvl5' | 'lvl6';
  title: string;
  value: string;
  urlWithoutAnchor: string;
  snippet?: string;
}

type Groups = Map<Group['title'], Group>;

export function groupHits(_hits: Hit[]) {
  const groups: Groups = new Map();
  console.log(_hits);

  _hits.forEach((hit) => {
    const title = hit.hierarchy.lvl0;
    if (groups.has(title) === false) {
      const group: Group = {
        hierarchy: 'lvl0',
        title,
        urlWithoutAnchor: hit.url_without_anchor,
        value: hit?._highlightResult?.hierarchy?.lvl0?.value || hit.hierarchy.lvl0,
      };
      groups.set(title, group);
    }

    if (hit?._snippetResult?.content?.value) {
      const group = groups.get(title);
      if (group) {
        group.snippet = hit._snippetResult.content.value;
      }
    }
  });

  return [...groups.values()];
}
