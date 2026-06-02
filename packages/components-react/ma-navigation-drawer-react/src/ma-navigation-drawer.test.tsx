import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavigationDrawer } from './ma-navigation-drawer';

const displayName = 'NavigationDrawer';

afterEach(() => {
  cleanup();
});

describe('NavigationDrawer', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(NavigationDrawer.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLDialogElement root node', () => {
    const ref = createRef<HTMLDialogElement>();
    render(<NavigationDrawer ref={ref}>navigation-drawer</NavigationDrawer>);
    const element = screen.getByText('navigation-drawer').closest('dialog');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDialogElement);
  });
});
