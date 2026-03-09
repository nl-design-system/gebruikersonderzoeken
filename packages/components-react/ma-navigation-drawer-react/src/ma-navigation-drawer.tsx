import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { forwardRef } from 'react';

interface NavigationDrawerHeaderProps {
  closeButton: ReactNode;
}

interface NavigationDrawerItemProps {
  expandable?: boolean;
  current?: boolean;
  label: string;
  href: string;
}

export interface NavigationDrawerProps extends HTMLAttributes<HTMLDialogElement> {
  header?: ReactNode;
  children?: ReactNode;
}

export const NavigationDrawerHeader = forwardRef<HTMLElement, NavigationDrawerHeaderProps>(
  function NavigationDrawerHeader(props, forwardedRef) {
    const { closeButton, ...restProps } = props;
    return (
      <header ref={forwardedRef} className="ma-navigation-drawer__header" {...restProps}>
        {closeButton}
      </header>
    );
  },
);

export const NavigationDrawerItem = forwardRef<HTMLAnchorElement, NavigationDrawerItemProps>(
  function NavigationDrawerItem(props, forwardedRef) {
    const { current, href, label } = props;
    return (
      <li className="ma-navigation-drawer__item ma-focus-indicator-inset">
        <a ref={forwardedRef} href={href} aria-current={current ? 'page' : undefined}>
          {label}
        </a>
      </li>
    );
  },
);

NavigationDrawerItem.displayName = 'NavigationDrawerItem';

export const NavigationDrawer = forwardRef<HTMLDialogElement, NavigationDrawerProps>(
  function NavigationDrawer(props, forwardedRef) {
    const { children, className, header, ...restProps } = props;

    return (
      <dialog
        ref={forwardedRef}
        id="ma-navigation-drawer"
        className={clsx(
          'ma-navigation-drawer',
          'ma-focus-indicator-outline-only',
          'ma-focus-indicator-inset',
          className,
        )}
        {...restProps}
      >
        {header}
        <ul className="ma-navigation-drawer__list" role="list">
          {children}
        </ul>
      </dialog>
    );
  },
);

NavigationDrawer.displayName = 'NavigationDrawer';
