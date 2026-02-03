export type AlgoliaMatchLevel = 'none' | 'partial' | 'full';

export interface AlgoliaHighlightResult {
  value: string;
  matchLevel: AlgoliaMatchLevel;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

export interface AlgoliaSnippetResult {
  value: string;
  matchLevel: AlgoliaMatchLevel;
}

export interface AlgoliaRankingInfo {
  firstMatchedWord: number;
  geoDistance: number;
  nbExactWords: number;
  nbTypos: number;
  userScore: number;
  filters?: number;
  geoPrecision?: number;
  matchedGeoLocation?: {
    lat: number;
    lng: number;
    distance: number;
  };
  personalization?: {
    filtersScore: number;
    rankingScore: number;
    score: number;
  };
  promoted?: boolean;
  promotedByReRanking?: boolean;
  proximityDistance?: number;
  words: number;
}

export type AlgoliaHit<T = Record<string, unknown>> = {
  objectID: string;
  _highlightResult?: { [K in keyof T]?: AlgoliaHighlightResult };
  _snippetResult?: { [K in keyof T]?: AlgoliaSnippetResult };
  _rankingInfo?: AlgoliaRankingInfo;
  _distinctSeqID?: number;
} & T;

export interface AlgoliaFacetStats {
  min?: number;
  max?: number;
  avg?: number;
  sum?: number;
}

export interface AlgoliaSearchResult<T = Record<string, unknown>> {
  hits: AlgoliaHit<T>[];
  query: string;
  params: string;
  abTestID?: number;
  abTestVariantID?: number;
  aroundLatLng?: string;
  automaticRadius?: string;
  exhaustive?: {
    facetsCount?: boolean;
    facetValues?: boolean;
    nbHits?: boolean;
    rulesMatch?: boolean;
    typo?: boolean;
  };
  appliedRules?: object[];
  facets?: Record<string, { key: number }>;
  facet_status?: Record<string, AlgoliaFacetStats>;
  index?: string;
  indexUsed?: string;
  message?: string;
  nbSortedHits?: number;
  parsedQuery?: string;
  processingTimeMS?: string;
  queryAfterRemoval?: string;
  renderingContent?: object;
  serverTimeMS?: number;
  serverUsed?: string;
  userData?: object;
  queryID?: string;
  _automaticInsights?: boolean;
  page?: number;
  nbHits?: number;
  nbPages?: number;
  hitsPerPage?: number;
}
