import { ButtonLink } from '@components/button-link/button-link.tsx';
import { Heading } from '@components/heading/heading.tsx';
import { Paragraph } from '@components/paragraph/paragraph.tsx';
import '@nl-design-system-community/ma-page-footer-css/dist/ma-page-footer.css';
import {
  PageFooter as MaPageFooter,
  PageFooterSection as MaPageFooterSection,
} from '@nl-design-system-community/ma-page-footer-react/dist/ma-page-footer.js';
import { IconArrowRight, IconChevronRight } from '@tabler/icons-react';

export function PageFooter() {
  return (
    <MaPageFooter
      sections={[
        <MaPageFooterSection
          key="1"
          action={
            <ButtonLink href="https://nldesignsystem.nl" appearance="primary-action-button">
              Ga naar NL Design System <IconArrowRight />
            </ButtonLink>
          }
        >
          <Heading level={2} appearance="level-4">
            Over Gebruikersonderzoeken
          </Heading>
          <Paragraph>
            Gebruikersonderzoeken.nl is een initiatief van het NL Design System. Je vindt hier inzichten uit
            gebruikersonderzoeken bij de overheid.
          </Paragraph>
        </MaPageFooterSection>,

        <MaPageFooterSection
          key="2"
          action={
            <ButtonLink href="/docs/onderzoek-delen/" appearance="primary-action-button">
              Gebruikersonderzoek delen <IconArrowRight />
            </ButtonLink>
          }
        >
          <Heading level={2} appearance="level-4">
            Onderzoek delen
          </Heading>
          <Paragraph>
            Heb je zelf onderzoek gedaan dat relevant is voor anderen? Deel je inzichten op een laagdrempelige manier.
          </Paragraph>
        </MaPageFooterSection>,

        <MaPageFooterSection key="3">
          <Heading level={2} appearance="level-4">
            Hulp nodig
          </Heading>
          <ul className="utrecht-link-list utrecht-link-list--html-ul">
            <li className="utrecht-link-list__item">
              <a className="utrecht-link-list__link" href="/docs/vragen/">
                <IconChevronRight />
                Veelgestelde vragen
              </a>
            </li>
          </ul>
        </MaPageFooterSection>,
      ]}
      metaLinks={[
        <a key="1" className="nl-link" href="/docs/privacyverklaring/">
          Privacyverklaring
        </a>,
        <a key="2" className="nl-link" href="/docs/toegankelijkheid/">
          Toegankelijkheid
        </a>,
        <a key="3" className="nl-link" href="/docs/colofon/">
          Colofon
        </a>,
      ]}
    />
  );
}
