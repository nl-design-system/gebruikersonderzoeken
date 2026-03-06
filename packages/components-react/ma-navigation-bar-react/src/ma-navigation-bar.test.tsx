import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavigationBar } from './navigation-bar';

const displayName = 'NavigationBar';

afterEach(() => {
  cleanup();
});

describe('NavigationBar', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(NavigationBar.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<NavigationBar ref={ref}>navigation-bar</NavigationBar>);
    const element = screen.getByText('navigation-bar');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
