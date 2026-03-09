import { Button } from '@components/button/button.tsx';
import '@nl-design-system-community/ma-navigation-drawer-css/ma-navigation-drawer.css';
import {
  NavigationDrawer as MaNavigationDrawer,
  NavigationDrawerItem as MaNavigationDrawerItem,
  NavigationDrawerHeader as MaNavigationDrawerHeader,
} from '@nl-design-system-community/ma-navigation-drawer-react';
import { IconX } from '@tabler/icons-react';

interface GebruikersonderzoekenNavigationDrawerProps {
  navigationBarItems?: {
    children: string;
    href: string;
    current: string | boolean | undefined;
  }[];
}

export function NavigationDrawer(props: GebruikersonderzoekenNavigationDrawerProps) {
  return (
    <MaNavigationDrawer
      header={
        <MaNavigationDrawerHeader
          closeButton={
            <Button command="close" commandfor="ma-navigation-drawer" appearance="subtle-button">
              <IconX /> Sluiten
            </Button>
          }
        />
      }
    >
      {props.navigationBarItems?.map((item) => (
        <MaNavigationDrawerItem label={item.children} href={item.href} current={Boolean(item.current)} />
      ))}
    </MaNavigationDrawer>
  );
}
