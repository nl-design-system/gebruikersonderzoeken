import { Logo } from '../logo/logo';
import './site-header.css';
import '@utrecht/link-css/dist/index.css';
import '@utrecht/textbox-css/dist/index.css';
import '@utrecht/button-css/dist/index.css';

export function SiteHeader() {
  return (
    <header className="ma-site-header">
      <section>
        <div className="ma-site-header__content">
          <Logo />

          <nav>
            {/* @FIXME: Point to a existing page */}
            <a href="#" className="utrecht-link">
              Contact
            </a>

            {/* @FIXME: Point to a existing page */}
            <a href="#" className="utrecht-link">
              Mijn omgeving
            </a>

            {/* @FIXME: This is only the markup. There is nog functionality behind it yet */}
            <search>
              <input type="text" className="utrecht-textbox" placeholder="Bijvoorbeeld zwembad of grofvuil" />
              <button className="utrecht-button">Zoeken</button>
            </search>
          </nav>
        </div>
      </section>

      <section>
        <div className="ma-site-header__navigation">
          <span>NAVIGATION PLACEHOLDER</span>
        </div>
      </section>
    </header>
  );
}
