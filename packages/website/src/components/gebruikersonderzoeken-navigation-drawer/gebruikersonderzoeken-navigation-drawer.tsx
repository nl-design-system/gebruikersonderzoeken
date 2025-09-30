import {
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerHeader,
} from '@nl-design-system-community/ma-components/navigation-drawer/navigation-drawer.tsx';
import { IconX } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react';

interface GebruikersonderzoekenNavigationDrawerProps {
  navigationBarItems?: {
    children: string;
    href: string;
    current: string | boolean | undefined;
  }[];
}

export function GebruikersonderzoekenNavigationDrawer(props: GebruikersonderzoekenNavigationDrawerProps) {
  return (
    <NavigationDrawer
      header={
        <NavigationDrawerHeader
          closeButton={
            <Button command="close" commandfor="ma-navigation-drawer" appearance="subtle-button">
              <IconX /> Sluiten
            </Button>
          }
        />
      }
    >
      {props.navigationBarItems?.map((item) => (
        <NavigationDrawerItem label={item.children} href={item.href} current={Boolean(item.current)} />
      ))}
    </NavigationDrawer>
  );
}
