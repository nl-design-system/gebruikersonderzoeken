import type { CollectionEntry } from 'astro:content';
import { Fragment, type PropsWithChildren } from 'react';

type ThemeEntry = CollectionEntry<'themes'>;

export interface ThemeListProps {
  themes: ThemeEntry[];
}

export function ThemeList(props: PropsWithChildren<ThemeListProps>) {
  return (
    <Fragment>
      <h2>Thema's van dit onderzoek</h2>
      <ul>
        {props.themes.map((theme) => (
          <li>
            <a class="nl-link" href={`/docs/thema/${theme.id}`}>
              {theme.data.title}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
