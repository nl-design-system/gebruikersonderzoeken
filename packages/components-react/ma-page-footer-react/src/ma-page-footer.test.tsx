import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageFooter } from './ma-page-footer';

const displayName = 'PageFooter';

afterEach(() => {
  cleanup();
});

describe('PageFooter', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(PageFooter.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <PageFooter sections={[]} metaLinks={[]} ref={ref}>
        page-footer
      </PageFooter>,
    );
    const element = screen.getByText('page-footer');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
