import { PageSection } from '@components/page-section/page-section.tsx';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { BodyCopy } from '@nl-design-system-community/ma-components/body-copy/body-copy.tsx';
import { useEffect, useState } from 'react';
import { fetchResults } from '../algolia-api/fetch-results.ts';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Array<object>>([]);

  useEffect(() => {
    const url = new URL(document.URL);
    const query = url.searchParams.get('query');
    setSearchQuery(query);
    if (query) {
      setLoading(true);
      fetchResults(query)
        .then((map) => setResults(map))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <PageSection>
        <BodyCopy small>
          <Heading level={1}>{searchQuery ? `Zoeken naar: "${searchQuery}"` : 'Zoeken'}</Heading>
        </BodyCopy>
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
