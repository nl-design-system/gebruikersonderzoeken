import '@utrecht/pagination-css/dist/index.min.css';

export interface RelativeLinkProps {
  url?: string;
  label: string;
  version: 'next' | 'prev';
}
export function RelativeLink(props: RelativeLinkProps) {
  return props.url ? (
    <span className="utrecht-pagination__before">
      <a
        href={props.url}
        className={`
          utrecht-pagination__relative-link
          utrecht-pagination__relative-link--${props.version}
        `.trim()}
        rel={props.version}
      >
        {props.label}
      </a>
    </span>
  ) : (
    <span
      className={`
        utrecht-pagination__relative-link
        utrecht-pagination__relative-link--disabled
        utrecht-pagination__relative-link--${props.version}
      `.trim()}
      rel={props.version}
    >
      {props.label}
    </span>
  );
}

export interface PageLinkProps {
  current?: true;
  url: string;
  label: string;
  isPrevious?: boolean;
  isNext?: boolean;
}
export function PageLink(props: PageLinkProps) {
  let rel: 'prev' | 'next' | undefined;
  if (props.isPrevious) rel = 'prev';
  if (props.isNext) rel = 'next';

  return (
    <a
      className={`
        utrecht-pagination__page-link
        ${props.current ? 'utrecht-pagination__page-link--current' : ''}
      `.trim()}
      href={props.url}
      aria-current={props.current}
      rel={rel}
    >
      {props.label}
    </a>
  );
}

export interface PaginationProps {
  prev?: string;
  next?: string;
  current: string;
  pages: { label: string; url: string }[];
}
export function Pagination(props: PaginationProps) {
  const pageLinks: PageLinkProps[] = props.pages.map((link, index, links) => {
    const current = link.url === props.current ? true : undefined;
    const url = link.url;
    const label = link.label;
    const isPrevious = links[index + 1]?.url === props.current;
    const isNext = links[index - 1]?.url === props.current;

    return { current, isNext, isPrevious, label, url };
  });

  return (
    <nav className="utrecht-pagination utrecht-pagination--distanced">
      <RelativeLink url={props.prev} label="Vorige" version="prev" />

      <span role="group" className="utrecht-pagination__pages">
        {pageLinks.map((pageLink) => (
          <PageLink {...pageLink} />
        ))}
      </span>

      <RelativeLink url={props.next} label="Volgende" version="next" />
    </nav>
  );
}
