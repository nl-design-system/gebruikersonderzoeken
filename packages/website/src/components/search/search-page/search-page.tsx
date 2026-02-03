import { PageSection } from '@components/page-section/page-section.tsx';
import { SearchForm } from '@components/search/search-form/search-form.tsx';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { BodyCopy } from '@nl-design-system-community/ma-components/body-copy/body-copy.tsx';
import { updateDocumentTitle } from '@utils/document-title.ts';
import { useEffect, useState } from 'react';
import type { SearchResult } from '../types.js';
import { fetchResults } from '../algolia-api/fetch-results.ts';
import { groupHitsToPages } from '../algolia-api/group-hits-to-pages.ts';

function pageTitle(query?: string | null) {
  return query ? `Zoeken naar: "${query}"` : 'Zoeken';
}

function updateUrlParameter(name: string, value?: string | null) {
  const url = new URL(window.location.href);
  if (value) {
    url.searchParams.set(name, value);
  } else {
    url.searchParams.delete(name);
  }

  const newPageTitle = pageTitle(value);
  updateDocumentTitle(newPageTitle);
  window.history.pushState({}, '', url.toString());
}

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>();

  useEffect(() => {
    const url = new URL(document.URL);
    const query = url.searchParams.get('query');
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    updateUrlParameter('query', searchQuery);

    if (searchQuery) {
      setLoading(true);
      fetchResults(searchQuery)
        .then(groupHitsToPages)
        .then(([, searchResults]) => {
          if (searchResults) {
            setResults(searchResults);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  return (
    <>
      <PageSection>
        <BodyCopy small>
          <Heading level={1}>{pageTitle(searchQuery)}</Heading>
        </BodyCopy>
      </PageSection>

      <PageSection>
        <SearchForm value={searchQuery} onChange={(value) => setSearchQuery(value)} />
      </PageSection>

      <PageSection>
        <BodyCopy small>
          {loading ? (
            <p>Aan het zoeken</p>
          ) : (
            <ul id="result-list">
              {results?.map((result) => (
                <li key={result.url}>
                  <a href={result.url} dangerouslySetInnerHTML={{ __html: result.title }} />
                  <br />
                  {result.snippets?.map((snippet) => (
                    <span key={snippet} dangerouslySetInnerHTML={{ __html: snippet }} />
                  ))}
                </li>
              ))}
            </ul>
          )}
        </BodyCopy>
      </PageSection>
    </>
  );
};
