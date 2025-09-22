import type { PropsWithChildren } from 'react';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { CardAsLink } from '@nl-design-system-community/ma-components/local/card-as-link/card-as-link.tsx';
import { CardList } from '@nl-design-system-community/ma-components/local/card-list/card-list.tsx';
import { toCleanRoute } from '@utils/menu';
import { type CollectionEntry } from 'astro:content';

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
