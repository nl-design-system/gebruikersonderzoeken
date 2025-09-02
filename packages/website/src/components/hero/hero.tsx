import { Heading } from '@nl-design-system-candidate/heading-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';
import { Banner } from '@nl-design-system-community/ma-components/local/banner/banner.tsx';

export function Hero() {
  return (
    <Banner
      version="hero"
      heading={<Heading level={1}>Gebruikersonderzoeken binnen de overheid</Heading>}
      content={
        <Paragraph>
          Het centrale platform waar Nederlandse overheidsinstanties hun gebruikersonderzoeken delen. Vind inspiratie,
          voorkom dubbel werk en maak betere beslissingen op basis van bewezen inzichten.
        </Paragraph>
      }
      footer={
        <div className="utrecht-action-group">
          <a
            className="utrecht-button-link utrecht-button-link--html-a utrecht-button-link--primary-action"
            href="/docs/onderzoek-bekijken/"
          >
            Bekijk onderzoeken
          </a>
          <a
            className="utrecht-button-link utrecht-button-link--html-a utrecht-button-link--secondary-action"
            href="/docs/onderzoek-delen/"
          >
            Deel je onderzoek
          </a>
        </div>
      }
    />
  );
}
