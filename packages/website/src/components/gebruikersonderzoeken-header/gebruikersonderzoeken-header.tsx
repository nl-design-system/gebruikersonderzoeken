import { Logo } from '@components/logo/logo.tsx';
import {
  MaNavigationBar,
  MaNavigationBarItem,
  type MaNavigationBarItemProps,
} from '@nl-design-system-community/ma-components/local/navigation-bar/navigation-bar';
import { MaPageHeader } from '@nl-design-system-community/ma-components/local/page-header/page-header.tsx';
import { IconMenu2 as IconMenu } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react';
import './gebruikersonderzoeken-header.css';

export interface PageHeaderProps {
  navigationBarItems?: MaNavigationBarItemProps[];
}

export function GebruikersonderzoekenHeader(props: PageHeaderProps) {
  return (
    <MaPageHeader
      className="ma-gebruikersonderzoeken-header"
      startGroup={
        <Button command="show-modal" commandfor="ma-navigation-drawer" appearance="subtle-button">
          <IconMenu /> Menu
        </Button>
      }
      centerGroup={
        <a className="ma-gebruikersonderzoeken-header__logo-wrapper" href="/">
          <span className="ma-sr-only">Gebruikersonderzoeken logo, naar de Homepagina</span>
          <Logo />
        </a>
      }
      navigationBar={
        <MaNavigationBar>
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
