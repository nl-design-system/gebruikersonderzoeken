import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type BodyCopyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode; // Needed in template file, feel free to remove
  small?: boolean;
  large?: boolean;
};

export const BodyCopy = forwardRef<HTMLDivElement, BodyCopyProps>(function BodyCopy(props, forwardedRef) {
  const { children, className, large, small, ...restProps } = props;

  return (
    <div
      className={clsx('ma-body-copy', small && 'ma-body-copy__small', large && 'ma-body-copy__large', className)}
      ref={forwardedRef}
      {...restProps}
    >
      {children}
    </div>
  );
});

BodyCopy.displayName = 'BodyCopy';
