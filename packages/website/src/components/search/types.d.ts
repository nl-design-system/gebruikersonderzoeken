import type { SearchResponse, Hit, HighlightResultOption, SnippetResultOption } from 'algoliasearch';

export type GebruikersonderzoekenHierarchyLevel = 'lvl0' | 'lvl1' | 'lvl2' | 'lvl3' | 'lvl4' | 'lvl5';

export type GebruikersonderzoekenRecord = {
  url: string;
  url_without_anchor: string;
  anchor: string;
  content: string;
  type: GebruikersonderzoekenHierarchyLevel;
  hierarchy: Record<GebruikersonderzoekenHierarchyLevel, string>;
};

export type AlgoliaHit = Hit<GebruikersonderzoekenRecord> & {
  _snippetResult?: Record<'content', SnippetResultOption>;
  _highlightResult?: { hierarchy?: Record<GebruikersonderzoekenHierarchyLevel, HighlightResultOption> };
};

export type AlgoliaResponse = SearchResponse<GebruikersonderzoekenRecord> & { hits: AlgoliaHit[] };

export type SearchResult = {
  title: string;
  url: string;
  snippets?: string[];
};
