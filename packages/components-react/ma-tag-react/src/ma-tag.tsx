import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface TagProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const Tag = forwardRef<HTMLAnchorElement, TagProps>(function Tag(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <a className={clsx('ma-tag', className)} ref={forwardedRef} {...restProps}>
      {children}
    </a>
  );
});

Tag.displayName = 'Tag';
