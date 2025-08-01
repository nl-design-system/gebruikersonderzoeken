import { Logo } from '@components/logo/logo.tsx';
import { Search } from '@components/search/search.tsx';
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
        <Button appearance="subtle-button">
          <IconMenu /> Menu
        </Button>
      }
      centerGroup={<Logo />}
      endGroup={<Search />}
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
