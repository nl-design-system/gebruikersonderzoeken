import type { PropsWithChildren } from 'react';
import { CardAsLink } from '@components/card-as-link/card-as-link.tsx';
import { Heading } from '@components/heading/heading.tsx';
import { CardList } from '@nl-design-system-community/ma-card-list-react/dist/ma-card-list.js';
import { toCleanRoute } from '@utils/to-clean-route.ts';
import { type CollectionEntry } from 'astro:content';
import '@nl-design-system-community/ma-card-list-css/dist/ma-card-list.css';

export interface CardListThemeProps {
  headingLevels?: 2 | 3 | 4 | 5 | 6;
  onderzoeken: CollectionEntry<'onderzoeken'>[];
}

export function CardListOnderzoek(props: PropsWithChildren<CardListThemeProps>) {
  const headingLevels = props.headingLevels || 2;
  return (
    <CardList>
      {props.onderzoeken.map((onderzoek) => {
        const metadata = onderzoek.data.conducted_by ? [{ label: onderzoek.data.conducted_by.join(', ') }] : undefined;

        return (
          <CardAsLink
            heading={
              <Heading level={headingLevels} appearance="level-3">
                {onderzoek.data.title}
              </Heading>
            }
            href={`/docs/onderzoek-bekijken/${toCleanRoute(onderzoek.id)}/`}
            description={onderzoek.data.description}
            metadata={metadata}
          />
        );
      })}
    </CardList>
  );
}
