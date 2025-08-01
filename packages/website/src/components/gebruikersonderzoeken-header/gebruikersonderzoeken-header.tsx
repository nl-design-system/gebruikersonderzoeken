import { Logo } from '@components/logo/logo.tsx';
import { Search } from '@components/search/search.tsx';
import {
  MaNavigationBar,
  MaNavigationBarItem,
  type MaNavigationBarItemProps,
} from '@nl-design-system-community/ma-components/local/navigation-bar/navigation-bar';
import { MaPageHeader } from '@nl-design-system-community/ma-components/local/page-header/page-header.tsx';
import { IconMenu2 as IconMenu } from '@tabler/icons-react';

export interface PageHeaderProps {
  navigationBarItems?: MaNavigationBarItemProps[];
}

export function GebruikersonderzoekenHeader(props: PageHeaderProps) {
  return (
    <MaPageHeader
      leftGroup={
        <button className="utrecht-button utrecht-button--subtle">
          <IconMenu /> Menu
        </button>
      }
      centerGroup={<Logo />}
      rightGroup={<Search />}
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
