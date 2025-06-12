import { Logo } from '../logo/logo';
import { Search } from '../search/search';
import './site-header.css';
import '@utrecht/link-css/dist/index.css';
import '@utrecht/textbox-css/dist/index.css';
import '@utrecht/button-css/dist/index.css';

export function SiteHeader() {
  return (
    <header className="ma-site-header">
      <section>
        <div className="ma-site-header__content">
          <button data-menu-trigger className="utrecht-button">
            Menu
          </button>

          <Logo version="text" />
          <Logo version="visual" />

          <Search />
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
