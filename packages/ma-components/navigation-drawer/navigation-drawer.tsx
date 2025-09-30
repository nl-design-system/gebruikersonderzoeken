import { ReactNode } from 'react';
import './navigation-drawer.css';

interface NavigationDrawerHeaderProps {
  closeButton: ReactNode;
}

interface NavigationDrawerItemProps {
  expandable?: boolean;
  current?: boolean;
  label: string;
  href: string;
}

interface NavigationDrawerProps {
  header?: ReactNode;
  children?: ReactNode;
}

export function NavigationDrawerHeader(props: NavigationDrawerHeaderProps) {
  return <header className="ma-navigation-drawer__header">{props.closeButton}</header>;
}

export function NavigationDrawerItem(props: NavigationDrawerItemProps) {
  return (
    <li className="ma-navigation-drawer__item ma-focus-indicator-inset">
      <a href={props.href} aria-current={props.current ? 'page' : null}>
        {props.label}
      </a>
    </li>
  );
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  return (
    <dialog
      id="ma-navigation-drawer"
      className="ma-navigation-drawer ma-focus-indicator-outline-only ma-focus-indicator-inset"
    >
      {props.header}
      <ul className="ma-navigation-drawer__list" role="list">
        {props.children}
      </ul>
    </dialog>
  );
}
