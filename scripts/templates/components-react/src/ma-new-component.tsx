import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface NewComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(function NewComponent(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <div className={clsx('ma-new-component', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

NewComponent.displayName = 'NewComponent';
