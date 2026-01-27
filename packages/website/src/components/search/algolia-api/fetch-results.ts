import { groupHits } from './group-hits.ts';

const appId = 'HWYTAR8XU5';
const appKey = '74627f8933dc6059f68f48ee8fbecaa9';
const index = 'gebruikersonderzoek';

export async function fetchResults(searchParams: URLSearchParams) {
  let result;

  if (searchParams.has('query')) {
    result = await fetch(`https://${appId}.algolia.net/1/indexes/${index}/query`, {
      body: JSON.stringify({
        highlightPostTag: '</mark>',
        highlightPreTag: '<mark>',
        query: searchParams.get('query'),
      }),
      headers: {
        'x-algolia-application-id': appId,
        accept: 'application/json',
        'Content-Type': 'application/json',
        'x-algolia-api-key': appKey,
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        const { hits } = result;
        return hits;
      })
      .then((hits) => groupHits(hits));
  }

  return result;
}
