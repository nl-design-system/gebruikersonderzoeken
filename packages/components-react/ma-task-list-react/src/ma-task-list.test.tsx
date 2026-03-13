import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { TaskList } from './task-list';

const displayName = 'TaskList';

afterEach(() => {
  cleanup();
});

describe('TaskList', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(TaskList.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<TaskList ref={ref}>task-list</TaskList>);
    const element = screen.getByText('task-list');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
