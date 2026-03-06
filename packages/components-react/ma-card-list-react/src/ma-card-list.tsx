import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface CardListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode; // Needed in template file, feel free to remove
  className?: string;
}

export const CardList = forwardRef<HTMLUListElement, CardListProps>(function CardList(props, forwardedRef) {
  const { children, className, ...restProps } = props;
  const _children = Array.isArray(children) ? children : [children];

  return (
    <ul ref={forwardedRef} className={clsx(`ma-card-list`, className)} role="list" {...restProps}>
      {_children.map((child, index) => (
        <li key={`${index}`}>{child}</li>
      ))}
    </ul>
  );
});

CardList.displayName = 'CardList';
