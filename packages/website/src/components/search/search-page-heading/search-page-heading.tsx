import { Heading } from '@nl-design-system-candidate/heading-react';
import { useEffect, useState } from 'react';

export const SearchPageHeading = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(document.URL);
    setSearchQuery(url.searchParams.get('query'));
  }, []);

  return <Heading level={1}>{searchQuery ? `Zoeken naar: "${searchQuery}"` : 'Zoeken'}</Heading>;
};
