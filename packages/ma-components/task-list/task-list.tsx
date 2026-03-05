import type { PropsWithChildren, ReactNode } from 'react';
import { Heading } from '@nl-design-system-candidate/heading-react';
import './task-list.css';

export type TaskListProps = object;
export const TaskList = ({ children }: PropsWithChildren<TaskListProps>) => (
  <ul className="ma-task-list">{children}</ul>
);

export interface TaskListItemProps {
  title: ReactNode;
  description: string;
  checked: boolean;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const TaskListItem = ({
  checked,
  children,
  description,
  headingLevel = 3,
  title,
}: PropsWithChildren<TaskListItemProps>) => {
  return (
    <li className="ma-task-list-item">
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
                stroke-width="2"
              ></path>
            </svg>
          )}
        </span>
      </div>
      <div>
        {title ? (
          <Heading appearance="level-3" level={headingLevel}>
            {title}
          </Heading>
        ) : null}
        {description}
        {children}
      </div>
    </li>
  );
};
