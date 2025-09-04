import type { PropsWithChildren } from 'react';
import './page-section.css';

export function PageSection(props: PropsWithChildren) {
  return <section className="ma-page-section">{props.children}</section>;
}
