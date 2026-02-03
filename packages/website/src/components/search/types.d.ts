import type { AlgoliaHighlightResult, AlgoliaHit } from './algolia-api/types.js';

export type GebruikersonderzoekenHierarchyLevel = 'lvl0' | 'lvl1' | 'lvl2' | 'lvl3' | 'lvl4' | 'lvl5';

export type GebruikersonderzoekenRecord = {
  url: string;
  url_without_anchor: string;
  anchor: string;
  content: string;
  type: GebruikersonderzoekenHierarchyLevel;
  hierarchy: Record<GebruikersonderzoekenHierarchyLevel, string>;
};

export interface SearchResult {
  title: string;
  url: string;
  snippets?: string[];
}

export type SearchHit = AlgoliaHit<GebruikersonderzoekenRecord> & {
  _highlightResult?: { hierarchy: Record<GebruikersonderzoekenHierarchyLevel, AlgoliaHighlightResult | null> };
};
