import { Heading } from '@nl-design-system-candidate/heading-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';
import { PageFooter, PageFooterSection } from '@nl-design-system-community/ma-components/page-footer/page-footer.tsx';
import { IconArrowRight, IconChevronRight } from '@tabler/icons-react';
import { ButtonLink } from '@utrecht/component-library-react';

export function GebruikersonderzoekenFooter() {
  return (
    <PageFooter
      sections={[
        <PageFooterSection
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
        </PageFooterSection>,

        <PageFooterSection
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
        </PageFooterSection>,

        <PageFooterSection key="3">
          <Heading level={2} appearance="level-4">
            Hulp nodig
          </Heading>
          <ul className="utrecht-link-list utrecht-link-list--html-ul">
            <li className="utrecht-link-list__item">
              <a className="utrecht-link-list__link" href="/docs/vragen/">
                <IconChevronRight />
                Veel gestelde vragen
              </a>
            </li>
          </ul>
        </PageFooterSection>,
      ]}
      metaLinks={[
        <a key="1" className="nl-link" href="/docs/privacyverklaring/">
          Privacyverklaring
        </a>,
        <a key="2" className="nl-link" href="/docs/toegankelijkheidsverklaring/">
          Toegankelijkheid
        </a>,
      ]}
    />
  );
}
