import type { ReactNode, HTMLAttributes, PropsWithChildren, AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import { forwardRef } from 'react';

export interface NavigationBarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode; // Needed in template file, feel free to remove
  label: string;
}

export const NavigationBar = forwardRef<HTMLElement, NavigationBarProps>(function NavigationBar(props, forwardedRef) {
  const { children, className, label, ...restProps } = props;

  return (
    <nav ref={forwardedRef} className={clsx('ma-navigation-bar', className)} aria-label={label} {...restProps}>
      <div className="ma-navigation-bar__content">
        <ul className="ma-navigation-bar__list">{children}</ul>
      </div>
    </nav>
  );
});

NavigationBar.displayName = 'NavigationBar';

export interface MaNavigationBarItemProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  current?: 'page' | 'true';
  className?: string;
}

export const NavigationBarItem = forwardRef<HTMLAnchorElement, MaNavigationBarItemProps>(
  function (props, forwardedRef) {
    const { 'aria-current': ariaCurrent, children, className, current, ...elementAttrs } = props;
    const _current = current ?? ariaCurrent;

    return (
      <li>
        <a
          ref={forwardedRef}
          className={clsx(`ma-navigation-bar__item`, `ma-focus-indicator-inset`, className)}
          aria-current={_current || undefined}
          {...elementAttrs}
        >
          {children}
        </a>
      </li>
    );
  },
);

NavigationBarItem.displayName = 'NavigationBarItem';
