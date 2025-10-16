import type { ReactNode } from 'react';
import { useId } from 'react';
import '@utrecht/pagination-css/dist/index.min.css';

/** This function is a mock of the `clsx` utility. Included here because this
component is intended to be included in Utrecht, there they use this utility.
This naive implementation helps make include this in Utrecht smoother */
const clsx = (...args) => {
  let className = '';

  args.forEach((arg) => {
    if (typeof arg === 'string') {
      className += ` ${arg}`;
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (Boolean(value) === true) {
          className += ` ${key}`;
        }
      });
    }
  });

  return className.trim();
};

export interface RelativeLinkProps {
  href?: string;
  label: ReactNode;
  shortLabel: ReactNode;
  ref: 'next' | 'prev';
}
export function RelativeLink(props: RelativeLinkProps) {
  return props.href ? (
    <span className="utrecht-pagination__before">
      <a
        href={props.href}
        className={clsx('utrecht-pagination__relative-link', `utrecht-pagination__relative-link--${props.ref}`)}
        aria-label={props.label}
        rel={props.ref}
      >
        {props.shortLabel ?? props.label}
      </a>
    </span>
  ) : (
    <span
      className={clsx(
        'utrecht-pagination__relative-link',
        'utrecht-pagination__relative-link--disabled',
        `utrecht-pagination__relative-link--${props.ref}`,
      )}
      aria-label={props.label}
      rel={props.ref}
    >
      {props.shortLabel ?? props.label}
    </span>
  );
}

export interface PageLinkProps {
  current?: true;
  url: string;
  label: ReactNode;
  shortLabel?: ReactNode;
  isPrevious?: boolean;
  isNext?: boolean;
}
export function PageLink(props: PageLinkProps) {
  let rel: 'prev' | 'next' | undefined;
  if (props.isPrevious) rel = 'prev';
  if (props.isNext) rel = 'next';

  const labelId = useId();

  return (
    <a
      className={clsx('utrecht-pagination__page-link', { 'utrecht-pagination__page-link--current': props.current })}
      href={props.url}
      aria-current={props.current ? 'page' : undefined}
      aria-labelledby={props.shortLabel ? labelId : undefined}
      rel={rel}
    >
      {props.shortLabel ? (
        <>
          <span id={labelId} className="ma-sr-only">
            {props.label}
          </span>
          <span>{props.shortLabel}</span>
        </>
      ) : (
        props.label
      )}
    </a>
  );
}

export interface PaginationProps {
  prev?: string;
  next?: string;
  current: string;
  pages: {
    label: ReactNode;
    shortLabel?: ReactNode;
    url: string;
  }[];
  label: ReactNode;
  relativeLabels?: {
    previous?: {
      shortLabel?: ReactNode;
      label?: ReactNode;
    };
    next?: {
      shortLabel?: ReactNode;
      label?: ReactNode;
    };
  };
}
export function Pagination(props: PaginationProps) {
  const pageLinks: PageLinkProps[] = props.pages.map((link, index, links) => {
    const current = link.url === props.current ? true : undefined;
    const url = link.url;
    const label = link.label;
    const shortLabel = link.shortLabel;
    const isPrevious = links[index + 1]?.url === props.current;
    const isNext = links[index - 1]?.url === props.current;

    return { current, isNext, isPrevious, label, shortLabel, url };
  });

  const labelId = useId();

  const previousLabels = props?.relativeLabels?.previousLabels;
  const nextLabels = props?.relativeLabels?.nextLabels;

  return (
    <>
      <h2 id={labelId} className="ma-sr-only">
        {props.label}
      </h2>
      <nav aria-labelledby={labelId} className="utrecht-pagination utrecht-pagination--distanced">
        <RelativeLink
          href={props.prev}
          label={previousLabels?.label ?? 'Vorige pagina'}
          shortLabel={previousLabels?.shortLabel ?? 'Vorige'}
          ref="prev"
        />

        <span role="group" className="utrecht-pagination__pages">
          {pageLinks.map((pageLink) => (
            <PageLink {...pageLink} />
          ))}
        </span>

        <RelativeLink
          href={props.next}
          label={nextLabels?.label ?? 'Volgende pagina'}
          shortLabel={nextLabels?.shortLabel ?? 'Volgende'}
          ref="next"
        />
      </nav>
    </>
  );
}
