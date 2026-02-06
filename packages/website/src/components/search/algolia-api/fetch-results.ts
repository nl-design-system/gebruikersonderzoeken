import type { AlgoliaResponse } from '../types.js';

export type FetchSuccess = [null, AlgoliaResponse];
export type FetchFailed = [SearchError, null];
export type FetchResult = FetchSuccess | FetchFailed;

export class SearchError extends Error {}

const appId = 'HWYTAR8XU5';
const appKey = '74627f8933dc6059f68f48ee8fbecaa9';
const index = 'gebruikersonderzoek';

const headers: HeadersInit = {
  'x-algolia-application-id': appId,
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-algolia-api-key': appKey,
};

const highlightTags = {
  highlightPostTag: '</mark>',
  highlightPreTag: '<mark>',
};

export async function fetchResults(query: string): Promise<FetchResult> {
  if (!query) throw new SearchError('No query provided');

  const error = new SearchError('Could not load search results');
  let result = null;

  await fetch(`https://${appId}.algolia.net/1/indexes/${index}/query`, {
    body: JSON.stringify({
      ...highlightTags,
      query,
    }),
    headers,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((searchResult: AlgoliaResponse) => {
      result = searchResult;
    });

  return result ? [null, result] : [error, null];
}
