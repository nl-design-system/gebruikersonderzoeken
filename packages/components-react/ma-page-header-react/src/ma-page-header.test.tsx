import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageHeader } from './page-header';

const displayName = 'PageHeader';

afterEach(() => {
  cleanup();
});

describe('PageHeader', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(PageHeader.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<PageHeader ref={ref}>page-header</PageHeader>);
    const element = screen.getByText('page-header');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
