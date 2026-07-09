import type { PropsWithChildren } from 'react';
import { CardAsLink } from '@components/card-as-link/card-as-link.tsx';
import { Heading } from '@components/heading/heading.tsx';
import { CardList } from '@nl-design-system-community/ma-card-list-react/dist/ma-card-list.mjs';
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
        const client = onderzoek.data?.client?.reduce((string, part, index, list) => {
          if (index === 0) return part
          if (index === list.length - 1) `${string} en ${part}`
          return `${string}, ${part}`
        }, '')
        const conducted_by = onderzoek.data.conducted_by && onderzoek.data.conducted_by.join(', ');

        const metadata =
          client && conducted_by
            ? [{ label: `Uitgevoerd door ${conducted_by} in opdracht van ${client}` }]
            : client
              ? [{ label: `In opdracht van ${client}` }]
              : conducted_by
                ? [{ label: `Uitgevoerd door ${conducted_by}` }]
                : undefined;

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
