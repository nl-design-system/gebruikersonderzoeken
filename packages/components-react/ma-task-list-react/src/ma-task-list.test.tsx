import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { TaskList } from './ma-task-list';

const displayName = 'TaskList';

afterEach(() => {
  cleanup();
});

describe('TaskList', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(TaskList.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLUListElement>();
    render(
      <TaskList ref={ref}>
        <p>task-list</p>
        <p>task-list</p>
      </TaskList>,
    );
    const element = screen.getByText('task-list');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
