import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import './tag.css';

export function Tag(props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a {...props} className={`ma-tag ${props.className || ''}`.trim()}>
      {props.children}
    </a>
  );
}
