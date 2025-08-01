import { ReactNode } from 'react';
import './page-header.css';
import '@utrecht/link-css/dist/index.css';
import '@utrecht/textbox-css/dist/index.css';
import '@utrecht/button-css/dist/index.css';

export interface PageHeaderProps {
  className?: string;
  startGroup?: ReactNode;
  centerGroup?: ReactNode;
  endGroup?: ReactNode;
  navigationBar?: ReactNode;
}

export function MaPageHeader(props: PageHeaderProps) {
  return (
    <header className={`ma-page-header ${props.className ?? ''}`.trim()}>
      <section className="ma-page-header__content">
        <div className="ma-page-header__group ma-page-header__group--start">{props.startGroup}</div>
        <div className="ma-page-header__group ma-page-header__group--center">{props.centerGroup}</div>
        <div className="ma-page-header__group ma-page-header__group--end">{props.endGroup}</div>
      </section>

      {props.navigationBar && <section className="ma-page-header__navigation">{props.navigationBar}</section>}
    </header>
  );
}
