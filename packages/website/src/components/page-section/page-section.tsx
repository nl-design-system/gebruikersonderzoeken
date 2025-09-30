import type { PropsWithChildren } from 'react';
import './page-section.css';

export interface PageSectionProps {
  withSpace?: boolean;
}

export function PageSection(props: PropsWithChildren<PageSectionProps>) {
  return (
    <section
      className={`
        ma-page-section
        ${props.withSpace ? 'ma-page-section--with-space' : ''}
      `.trim()}
    >
      {props.children}
    </section>
  );
}
