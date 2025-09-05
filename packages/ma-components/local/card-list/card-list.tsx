import { PropsWithChildren } from 'react';
import './card-list.css';

export interface CardListProps {
  className?: string;
}

export function CardList(props: PropsWithChildren<CardListProps>) {
  const children = Array.isArray(props.children) ? props.children : [props.children];

  return (
    <ul className={`ma-card-list ${props.className}`.trim()} role="list">
      {children.map((child, index) => (
        <li key={`${index}`}>{child}</li>
      ))}
    </ul>
  );
}
