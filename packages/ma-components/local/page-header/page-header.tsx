import { Logo } from '../logo/logo';
import { MaNavigationBar, MaNavigationBarItem, type MaNavigationBarItemProps } from '../navigation-bar/navigation-bar';
import './page-header.css';
import '@utrecht/link-css/dist/index.css';
import '@utrecht/textbox-css/dist/index.css';
import '@utrecht/button-css/dist/index.css';
import { Search } from '../search/search';

export interface PageHeaderProps {
  navigationBarItems?: MaNavigationBarItemProps[];
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className="ma-page-header">
      <section>
        <div className="ma-page-header__content">
          <button data-menu-trigger className="utrecht-button">
            Menu
          </button>

          <Logo version="text" />
          <Logo version="visual" />

          <Search />
        </div>
      </section>

      <section className="ma-page-header__navigation">
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
