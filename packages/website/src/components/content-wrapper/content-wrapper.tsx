import type { PropsWithChildren } from 'react';
import './content-wrapper.css';

export function ContentWrapper(props: PropsWithChildren) {
  return <section className="ma-content-wrapper">{props.children}</section>;
}
