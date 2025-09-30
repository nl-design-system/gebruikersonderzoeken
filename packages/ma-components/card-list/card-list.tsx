import { PropsWithChildren } from 'react';
import './card-list.css';

export interface CardListProps {
  className?: string;
}

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export function CardList(props: PropsWithChildren<CardListProps>) {
  const children = Array.isArray(props.children) ? props.children : [props.children];

  return (
    <ul className={cn(`ma-card-list`, props.className)} role="list">
      {children.map((child, index) => (
        <li key={`${index}`}>{child}</li>
      ))}
    </ul>
  );
}
