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
