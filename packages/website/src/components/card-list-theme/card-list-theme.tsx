import type { CollectionEntry } from 'astro:content';
import type { PropsWithChildren } from 'react';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { CardAsLinkTheme } from '@nl-design-system-community/ma-components/card-as-link/card-as-link.tsx';
import { CardList } from '@nl-design-system-community/ma-components/card-list/card-list.tsx';
import { dynamicImports } from '@tabler/icons-react';
import './card-list-theme.css';

interface ThemeEntryWithItems extends CollectionEntry<'themes'> {
  items?: object[];
}

export interface CardListThemeProps {
  headingLevels?: 2 | 3 | 4 | 5 | 6;
  themes: ThemeEntryWithItems[];
  columns?: 1 | 2;
}

interface IconProps {
  name: string;
}

async function Icon(props: IconProps) {
  const dynamicImport = dynamicImports.default[props.name];
  if (!dynamicImport) return null;

  const { default: DynamicIcon } = await dynamicImport();

  return <DynamicIcon />;
}

export async function CardListTheme(props: PropsWithChildren<CardListThemeProps>) {
  const headingLevels = props.headingLevels || 2;
  return (
    <CardList
      className={`
        ma-card-list-theme
        ${props.columns === 1 ? 'ma-card-list-theme--columns-1' : ''}
        ${props.columns === 2 ? 'ma-card-list-theme--columns-2' : ''}
      `.trim()}
    >
      {props.themes.map((theme) => (
        <CardAsLinkTheme
          icon={<Icon name={theme.data.icon} />}
          heading={
            <Heading level={headingLevels} appearance="level-3">
              {theme.data.title}
            </Heading>
          }
          href={`/docs/thema/${theme.id}/1/`}
          description={theme.data.description}
          metadata={
            theme?.items && [
              {
                label: `${theme.items.length} onderzoeken`,
              },
            ]
          }
        />
      ))}
    </CardList>
  );
}
