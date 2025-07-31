import { Heading } from '@nl-design-system-candidate/heading-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';
import {
  PageFooter,
  PageFooterSection,
} from '@nl-design-system-community/ma-components/local/page-footer/page-footer.tsx';
import { IconArrowRight, IconChevronRight } from '@tabler/icons-react';

export function GebruikersOnderzoekenFooter() {
  return (
    <PageFooter
      sections={[
        <PageFooterSection key="1" linkUrl="#" linkLabel="Ga naar NL Design System" linkIcon={<IconArrowRight />}>
          <Heading level={4}>Over Gebruikersonderzoeken</Heading>
          <Paragraph>
            Gebruikersonderzoeken.nl is een initiatief van het NL Design System. Je vindt hier inzichten uit
            gebruikersonderzoeken bij de overheid.
          </Paragraph>
        </PageFooterSection>,

        <PageFooterSection key="2" linkUrl="#" linkLabel="Gebruikersonderzoek delen" linkIcon={<IconArrowRight />}>
          <Heading level={4}>Onderzoek delen</Heading>
          <Paragraph>
            Heb je zelf onderzoek gedaan dat relevant is voor anderen? Deel je inzichten op een laagdrempelige manier.
          </Paragraph>
        </PageFooterSection>,

        <PageFooterSection key="3">
          <Heading level={4}>Hulp nodig</Heading>
          <ul className="utrecht-link-list utrecht-link-list--html-ul">
            <li className="utrecht-link-list__item">
              <a className="utrecht-link-list__link" href="/#">
                <IconChevronRight />
                Veel gestelde vragen
              </a>
            </li>
            <li className="utrecht-link-list__item">
              <a className="utrecht-link-list__link" href="/#">
                <IconChevronRight />
                Contact
              </a>
            </li>
          </ul>
        </PageFooterSection>,
      ]}
      metaLinks={[
        <a key="1" className="nl-link" href="/#">
          Toegankelijkheid
        </a>,
        <a key="2" className="nl-link" href="/#">
          Privacyverklaring
        </a>,
        <a key="3" className="nl-link" href="/#">
          Colofon
        </a>,
      ]}
    />
  );
}
