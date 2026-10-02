import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { TaskList, TaskListItem } from './ma-task-list';

const displayName = 'TaskList';

afterEach(() => {
  cleanup();
});

describe('TaskList', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(TaskList.displayName).toBe(displayName);
  });

  it('renders the title when the title prop is provided', () => {
    render(
      <TaskList>
        <TaskListItem description="task-list" checked={false} title="My title" />
        <TaskListItem description="task-list" checked={false} title="My other title" />
      </TaskList>,
    );

    const title = screen.getByText('My title');
    expect(title).toBeInstanceOf(HTMLSpanElement);
    expect(title).toHaveClass('ma-task-list-item__title');
  });

  it('does not render a title when the title prop is not provided', () => {
    render(
      <TaskList>
        <TaskListItem description="task-list" checked={false} />
        <TaskListItem description="task-list" checked={false} />
      </TaskList>,
    );

    expect(screen.queryByText('My title')).toBeNull();
  });

  it('forwards React refs to the HTMLUListElement root node', () => {
    const ref = createRef<HTMLUListElement>();
    render(
      <TaskList ref={ref}>
        <TaskListItem description="task-list" checked={false} />
        <TaskListItem description="checked" checked={true} />
      </TaskList>,
    );
    const element = screen.getByText('task-list').closest('ul');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLUListElement);
  });
});
