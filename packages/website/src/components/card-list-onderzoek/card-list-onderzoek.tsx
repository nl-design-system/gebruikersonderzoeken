import type { PropsWithChildren } from "react";
import { Heading } from "@nl-design-system-candidate/heading-react";
import { CardAsLink } from "@nl-design-system-community/ma-components/local/card-as-link/card-as-link.tsx";
import { CardList } from "@nl-design-system-community/ma-components/local/card-list/card-list.tsx";
import { toCleanRoute } from '@utils/menu';
import { type CollectionEntry } from "astro:content";

export interface CardListThemeProps {
  onderzoeken: CollectionEntry<'onderzoeken'>[]
}

export function CardListOnderzoek(props: PropsWithChildren<CardListThemeProps>) {
  return (
    <CardList>
      {props.onderzoeken.map((onderzoek) => (
        <CardAsLink
          heading={<Heading level={2} appearance="level-3">{onderzoek.data.title}</Heading>}
          href={`/docs/onderzoek-bekijken/${toCleanRoute(onderzoek.id)}`}
          description="description description description description description description description"
          metadata={[
            { label: "foo" },
            { label: "bar" }
          ]}
        />
      ))}
    </CardList>
  );
}

