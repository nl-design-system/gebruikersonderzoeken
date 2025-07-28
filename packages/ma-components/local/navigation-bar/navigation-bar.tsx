import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import './navigation-bar.css';

export function MaNavigationBar(props: PropsWithChildren) {
  return (
    <nav className="ma-navigation-bar">
      <div className="ma-navigation-bar__content">
        <ul className="ma-navigation-bar__list">{props.children}</ul>
      </div>
    </nav>
  );
}

export interface MaNavigationBarItemProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  current?: 'page' | 'true';
}

export function MaNavigationBarItem(props: MaNavigationBarItemProps) {
  const { 'aria-current': ariaCurrent, children, className, current, ...elementAttrs } = props;
  const _current = current ?? ariaCurrent;

  return (
    <li>
      <a className={`ma-navigation-bar__item ${className}`.trim()} aria-current={_current || null} {...elementAttrs}>
        {children}
      </a>
    </li>
  );
}
