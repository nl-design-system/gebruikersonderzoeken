import { Logo } from '@components/logo/logo.tsx';
import { Search } from '@components/search/search.tsx';
import '@nl-design-system-community/ma-page-header-css/ma-page-header.css';
import {
  NavigationBar as MaNavigationBar,
  NavigationBarItem as MaNavigationBarItem,
  type NavigationBarItemProps as MaNavigationBarItemProps,
} from '@nl-design-system-community/ma-navigation-bar-react';
import { PageHeader as MaPageHeader } from '@nl-design-system-community/ma-page-header-react';
import { IconMenu2 as IconMenu } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react';
import '@nl-design-system-community/ma-navigation-bar-css/dist/ma-navigation-bar.css';
import './page-header.css';

export interface PageHeaderProps {
  navigationBarItems?: MaNavigationBarItemProps[];
}

const navLabel = 'Hoofdmenu';

export function PageHeader(props: PageHeaderProps) {
  return (
    <MaPageHeader
      className="ma-page-header--gebruikersonderzoeken"
      startGroup={
        <nav aria-label={navLabel}>
          <Button
            command="show-modal"
            commandfor="ma-navigation-drawer"
            aria-haspopup="dialog"
            appearance="subtle-button"
          >
            <IconMenu /> Menu
          </Button>
        </nav>
      }
      centerGroup={
        <a className="ma-page-header--gebruikersonderzoeken__logo-wrapper" href="/">
          <span className="ma-sr-only">Gebruikersonderzoeken logo, naar de Homepagina</span>
          <Logo />
        </a>
      }
      endGroup={<Search />}
      navigationBar={
        <MaNavigationBar label={navLabel}>
          {(props.navigationBarItems || []).map((item) => (
            <MaNavigationBarItem key={item.href} href={item.href} aria-current={item.current || null}>
              {item.children}
            </MaNavigationBarItem>
          ))}
        </MaNavigationBar>
      }
    />
  );
}
