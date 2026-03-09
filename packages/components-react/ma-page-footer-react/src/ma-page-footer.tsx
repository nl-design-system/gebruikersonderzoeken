import type { ReactNode, ReactElement, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface PageFooterProps extends HTMLAttributes<HTMLElement> {
  sections: ReactNode[];
  metaLinks: ReactNode[];
  className?: string;
}

export interface PageFooterSectionProps extends HTMLAttributes<HTMLElement> {
  action?: ReactElement;
  children?: ReactNode;
  className?: string;
}

export const PageFooter = forwardRef<HTMLElement, PageFooterProps>(function PageFooter(props, forwardedRef) {
  const { className, metaLinks, sections, ...restProps } = props;

  return (
    <footer className={clsx('ma-page-footer', className)} ref={forwardedRef} {...restProps}>
      <div className="ma-page-footer__content">{sections}</div>

      <h2 id="ma-page-footer__meta-label" className="ma-sr-only">
        Algemene links
      </h2>
      <nav className="ma-page-footer__meta" aria-labelledby="ma-page-footer__meta-label">
        <ul className="ma-page-footer__meta-content">
          {metaLinks.map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </nav>
    </footer>
  );
});

PageFooter.displayName = 'PageFooter';

export const PageFooterSection = forwardRef<HTMLElement, PageFooterSectionProps>(
  function PageFooterSection(props, forwardedRef) {
    const { action, children, className, ...restProps } = props;
    return (
      <section ref={forwardedRef} className={clsx('ma-page-footer__section', className)} {...restProps}>
        <div className="ma-page-footer__section-content">{children}</div>
        {action}
      </section>
    );
  },
);

PageFooterSection.displayName = 'PageFooterSection';
