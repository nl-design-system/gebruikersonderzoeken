import { ReactElement } from 'react';
import './page-header.css';
import '@utrecht/link-css/dist/index.css';
import '@utrecht/textbox-css/dist/index.css';
import '@utrecht/button-css/dist/index.css';

export interface PageHeaderProps {
  leftGroup?: ReactElement;
  centerGroup?: ReactElement;
  rightGroup?: ReactElement;
  navigationBar?: ReactElement;
}

export function MaPageHeader(props: PageHeaderProps) {
  return (
    <header className="ma-page-header">
      <section className="ma-page-header__content">
        <div className="ma-page-header__group ma-page-header__group--left">{props.leftGroup}</div>
        <div className="ma-page-header__group ma-page-header__group--center">{props.centerGroup}</div>
        <div className="ma-page-header__group ma-page-header__group--right">{props.rightGroup}</div>
      </section>

      {props.navigationBar && <section className="ma-page-header__navigation">{props.navigationBar}</section>}
    </header>
  );
}
