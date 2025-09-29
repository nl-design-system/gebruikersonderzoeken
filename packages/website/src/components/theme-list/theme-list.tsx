import type { CollectionEntry } from 'astro:content';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { Tag } from '@nl-design-system-community/ma-components/local/tag/tag.tsx';
import { type PropsWithChildren } from 'react';
import './theme-list.css';

type ThemeEntry = CollectionEntry<'themes'>;

export interface ThemeListProps {
  themes: ThemeEntry[];
}

export function ThemeList(props: PropsWithChildren<ThemeListProps>) {
  return (
    <section className="ma-theme-list">
      <Heading level={2}>Thema's</Heading>
      <ul className="ma-theme-list__list">
        {props.themes.map((theme) => (
          <li key={theme.id}>
            <Tag href={`/docs/thema/${theme.id}/`}>{theme.data.title}</Tag>
          </li>
        ))}
      </ul>
    </section>
  );
}
