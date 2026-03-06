import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NewComponent } from './new-component';

const displayName = 'NewComponent';

afterEach(() => {
  cleanup();
});

describe('NewComponent', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(NewComponent.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<NewComponent ref={ref}>new-component</NewComponent>);
    const element = screen.getByText('new-component');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
