import { Logo } from '../logo/logo';
import { MaNavigationBar, MaNavigationBarItem, type MaNavigationBarItemProps } from '../navigation-bar/navigation-bar';
import './site-header.css';
import '@utrecht/link-css/dist/index.css';
import '@utrecht/textbox-css/dist/index.css';
import '@utrecht/button-css/dist/index.css';
import { Search } from '../search/search';

export interface SiteHeaderProps {
  navigationBarItems?: MaNavigationBarItemProps[];
}

export function SiteHeader(props: SiteHeaderProps) {
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

      <section className="ma-site-header__navigation">
        <MaNavigationBar>
          {(props.navigationBarItems || []).map((item) => (
            <MaNavigationBarItem key={item.href} href={item.href} aria-current={item.current || null}>
              {item.children}
            </MaNavigationBarItem>
          ))}
        </MaNavigationBar>
      </section>
    </header>
  );
}
