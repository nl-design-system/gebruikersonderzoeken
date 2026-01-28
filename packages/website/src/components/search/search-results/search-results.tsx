import type { SearchResult } from '../types.js';

export interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults(props: SearchResultsProps) {
  return (
    <ul role="list">
      {props.results.map((result) => (
        <li key={result.url}>
          <a href={result.url} dangerouslySetInnerHTML={{ __html: result.title }} />
          <br />
          {result.snippets?.map((snippet) => (
            <span key={snippet} dangerouslySetInnerHTML={{ __html: snippet }} />
          ))}
        </li>
      ))}
    </ul>
  );
}
