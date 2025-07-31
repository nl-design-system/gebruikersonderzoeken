import { PropsWithChildren, type ReactElement } from 'react';
import './page-footer.css';

export interface PageFooterProps {
  sections: ReactElement[];
  metaLinks: ReactElement[];
}

export function PageFooter(props: PropsWithChildren<PageFooterProps>) {
  return (
    <footer className="ma-page-footer">
      <div className="ma-page-footer__content">{props.sections}</div>

      <nav className="ma-page-footer__meta">
        <ul className="ma-page-footer__meta-content">
          {props.metaLinks.map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export interface PageFooterSectionProps {
  linkUrl?: string;
  linkLabel?: ReactElement | string;
  linkIcon?: ReactElement;
}

export function PageFooterSection(props: PropsWithChildren<PageFooterSectionProps>) {
  return (
    <section className="ma-page-footer__section">
      <div className="ma-page-footer__section-content">{props.children}</div>
      {props.linkUrl && props.linkLabel && (
        <a className="utrecht-button utrecht-button--primary-action" href={props.linkUrl}>
          {props.linkLabel}
          {props.linkIcon}
        </a>
      )}
    </section>
  );
}
