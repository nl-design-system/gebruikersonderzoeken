import { PageSection } from '@components/page-section/page-section.tsx';
import { SearchForm } from '@components/search/search-form/search-form.tsx';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';
import { BodyCopy } from '@nl-design-system-community/ma-components/body-copy/body-copy.tsx';
import { updateDocumentTitle } from '@utils/document-title.ts';
import { useEffect, useState } from 'react';
import type { SearchResult } from '../types.js';
import { fetchResults, SearchError as SearchErrorClass } from '../algolia-api/fetch-results.ts';
import { groupHitsToPages, type GroupError } from '../algolia-api/group-hits-to-pages.ts';
import { SearchError } from '../search-error/search-error.tsx';
import { SearchResults } from '../search-results/search-results.tsx';

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
  const [error, setError] = useState<SearchErrorClass | GroupError | undefined>();

  useEffect(() => {
    const url = new URL(document.URL);
    const query = url.searchParams.get('query');
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    updateUrlParameter('query', searchQuery);
    setError(undefined);
    setResults(undefined);

    if (searchQuery) {
      setLoading(true);
      fetchResults(searchQuery)
        .then(groupHitsToPages)
        .then(([searchError, searchResults]) => {
          if (searchError) setError(searchError);
          if (searchResults) setResults(searchResults);
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
          {!searchQuery && <Paragraph>Gebruik het zoekveld om te zoeken in de gebruikersonderzoeken</Paragraph>}
          {loading && <Paragraph>Aan het zoeken</Paragraph>}
          {results && <SearchResults results={results} />}
          {error && <SearchError error={error} />}
        </BodyCopy>
      </PageSection>
    </>
  );
};
