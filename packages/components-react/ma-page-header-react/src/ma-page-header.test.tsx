import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageHeader } from './ma-page-header';

const displayName = 'PageHeader';

afterEach(() => {
  cleanup();
});

describe('PageHeader', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(PageHeader.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLElement root node', () => {
    const ref = createRef<HTMLElement>();
    render(<PageHeader ref={ref} startGroup={<p>page-header</p>} />);
    const element = screen.getByText('page-header').closest('header');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLElement);
  });
});
