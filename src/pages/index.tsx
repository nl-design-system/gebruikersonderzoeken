import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Gebruikersonderzoeken</h1>
        <p>
          Hier verzamelen en delen we zoveel mogelijk gebruikersonderzoeken van alle overheidsinstanties in Nederland
          voor onderzoekers, ontwerpers en managers. Zodat we zoveel mogelijk van elkaar kunnen leren, geinspireerd
          raken door elkaar's onderzoek en sneller de juiste beslissingen kunnen nemen.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/onderzoek-bekijken">
            Bekijk de onderzoeken
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="gebruikersonderzoeken" description="Gedeelde gebruikersonderzoeken voor de overheid">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
