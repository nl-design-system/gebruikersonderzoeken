import {
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerHeader,
} from '@nl-design-system-community/ma-components/local/navigation-drawer/navigation-drawer.tsx';
import { ToolbarButton } from '@nl-design-system-community/ma-components/local/toolbar-button/toolbar-button.tsx';
import { IconX } from '@tabler/icons-react';

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
            <ToolbarButton command="close" commandfor="ma-navigation-drawer" icon={<IconX />}>
              Sluiten
            </ToolbarButton>
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
