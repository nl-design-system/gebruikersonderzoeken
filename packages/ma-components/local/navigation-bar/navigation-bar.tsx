import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import './navigation-bar.css';

export interface MaNavigationBarProps {
  label: string;
}

export function MaNavigationBar(props: PropsWithChildren<MaNavigationBarProps>) {
  return (
    <nav className="ma-navigation-bar" aria-label={props.label}>
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
      <a
        className={`ma-navigation-bar__item ma-focus-indicator-inset ${className}`.trim()}
        aria-current={_current || null}
        {...elementAttrs}
      >
        {children}
      </a>
    </li>
  );
}
