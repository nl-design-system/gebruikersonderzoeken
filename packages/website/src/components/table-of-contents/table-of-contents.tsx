import type { AnchorHTMLAttributes } from 'react';
import '@utrecht/spotlight-section-css/dist/index.min.css';
import { Heading } from '@nl-design-system-candidate/heading-react';

export interface TableOfContentsItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
}

export interface TabelOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents(props: TabelOfContentsProps) {
  return (
    <section className="utrecht-spotlight-section">
      <Heading level={2} appearance="level-3">
        Op deze pagina
      </Heading>

      <ul role="list" className="utrecht-unordered-list">
        {props.items.map(({ children, className, label, ...attributes }) => (
          <li className="utrecht-unordered-list__item">
            <a className={`nl-link ${className || ''}`.trim()} {...attributes}>
              {label || children}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
