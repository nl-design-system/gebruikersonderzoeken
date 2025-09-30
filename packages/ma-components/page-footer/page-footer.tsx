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

      <h2 id="ma-page-footer__meta-label" className="ma-sr-only">
        Algemene links
      </h2>
      <nav className="ma-page-footer__meta" aria-labelledby="ma-page-footer__meta-label">
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
  action?: ReactElement;
}

export function PageFooterSection(props: PropsWithChildren<PageFooterSectionProps>) {
  return (
    <section className="ma-page-footer__section">
      <div className="ma-page-footer__section-content">{props.children}</div>
      {props.action}
    </section>
  );
}
