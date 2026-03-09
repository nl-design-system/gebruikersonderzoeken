import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import '@utrecht/button-css/dist/index.css';

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  startGroup?: ReactNode;
  centerGroup?: ReactNode;
  endGroup?: ReactNode;
  navigationBar?: ReactNode;
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(function PageHeader(props, forwardedRef) {
  const { centerGroup, className, endGroup, navigationBar, startGroup, ...restProps } = props;

  return (
    <header className={clsx('ma-page-header', className)} ref={forwardedRef} {...restProps}>
      <section className="ma-page-header__content">
        <div className="ma-page-header__group ma-page-header__group--start">{startGroup}</div>
        <div className="ma-page-header__group ma-page-header__group--center">{centerGroup}</div>
        <div className="ma-page-header__group ma-page-header__group--end">{endGroup}</div>
      </section>

      {navigationBar && <section className="ma-page-header__navigation">{navigationBar}</section>}
    </header>
  );
});

PageHeader.displayName = 'PageHeader';
