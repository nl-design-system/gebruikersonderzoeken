import { PageSection } from '@components/page-section/page-section.tsx';
import { SearchForm } from '@components/search/search-form/search-form.tsx';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { BodyCopy } from '@nl-design-system-community/ma-components/body-copy/body-copy.tsx';
import { useEffect, useState } from 'react';
import { fetchResults } from '../algolia-api/fetch-results.ts';

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

  window.history.pushState({}, '', url.toString());
}

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Array<object>>([]);

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
        .then((map) => setResults(map))
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
              {results.map((result) => (
                <li key={result.urlWithoutAnchor}>
                  <a href={result.urlWithoutAnchor} dangerouslySetInnerHTML={{ __html: result.value }} />
                  <br />
                  {result.snippet && <span dangerouslySetInnerHTML={{ __html: result.snippet }} />}
                </li>
              ))}
            </ul>
          )}
        </BodyCopy>
      </PageSection>
    </>
  );
};
