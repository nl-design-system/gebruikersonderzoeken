import type { PropsWithChildren } from 'react';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { Link } from '@nl-design-system-candidate/link-react';
import './respond-to-onderzoek.css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';

export interface RespondToOnderzoekProps {
  filePath?: string;
}

export function RespondToOnderzoek(props: PropsWithChildren<RespondToOnderzoekProps>) {
  const githubRepo = 'https://github.com/nl-design-system/gebruikersonderzoeken';
  const issuePath = `${githubRepo}/issues`;
  const markdownSource = `${githubRepo}/blob/main/${props.filePath?.replace('../../', '') ?? ''}`;

  return (
    <aside className="ma-respond-to-onderzoek">
      <Heading level={2}>Reageren op dit onderzoek</Heading>

      <Heading level={3}>GitHub</Heading>
      <Paragraph>
        Wil je reageren op dit onderzoek? Je kunt <Link href={issuePath}>op GitHub een issue aan maken</Link>.{' '}
        {props.filePath && (
          <span>
            Hier vind je <Link href={markdownSource}>het markdown bron bestand</Link>.
          </span>
        )}
      </Paragraph>

      <Heading level={3}>Vragen</Heading>
      <Paragraph>
        Heb je een vraag? Twijfel niet en{' '}
        <Link href="mailto:kernteam@nldesignsystem.nl">neem contact op met het kernteam</Link>.
      </Paragraph>
    </aside>
  );
}
