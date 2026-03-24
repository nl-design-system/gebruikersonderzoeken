import type { ReactNode, ReactElement, HTMLAttributes } from 'react';
import { Heading, HeadingLevel } from '@nl-design-system-candidate/heading-react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface TaskListItemProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: ReactNode;
  heading?: ReactNode;
  description: string;
  checked: boolean;
  headingLevel?: HeadingLevel;
  headingLevelAppearance?: HeadingLevel;
}

export interface TaskListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactElement[]; // Needed in template file, feel free to remove
}

export const TaskList = forwardRef<HTMLUListElement, TaskListProps>(function TaskList(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <ul className={clsx('ma-task-list', className)} ref={forwardedRef} {...restProps}>
      {children}
    </ul>
  );
});

TaskList.displayName = 'TaskList';

export const TaskListItem = forwardRef<HTMLLIElement, TaskListItemProps>(function TaskListItem(props, forwardedRef) {
  const {
    checked,
    children,
    className,
    description,
    heading,
    headingLevel = 3,
    headingLevelAppearance,
    ...restProps
  } = props;
  return (
    <li ref={forwardedRef} className={clsx('ma-task-list-item', className)} {...restProps}>
      <div
        className={`ma-task-list-item__marker ${checked ? 'ma-task-list-item__marker--checked' : 'ma-task-list-item__marker--unchecked'}`}
      >
        <span className="ma-task-list-item__marker-label">{checked ? 'Afgevinkt. ' : 'Niet afgevinkt. '}</span>

        <span className="utrecht-icon">
          {checked ? (
            <svg viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em">
              <path d="M5 10c-.26 0-.51-.1-.71-.29l-4-4A.996.996 0 1 1 1.7 4.3l3.29 3.29 7.3-7.3A.996.996 0 1 1 13.7 1.7L5.71 9.71c-.2.2-.45.29-.71.29"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" height="1em" width="1em">
              <path
                d="M 0 2 H 14 M 1 2 V 14 M 0 13 H 14 M 3 15 H 14 M 13 2 V 14 M 15 4 V 16"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </svg>
          )}
        </span>
      </div>
      <div>
        {heading ? (
          <Heading appearance={`level-${headingLevelAppearance || headingLevel}`} level={headingLevel}>
            {heading}
          </Heading>
        ) : null}
        {description}
        {children}
      </div>
    </li>
  );
});
