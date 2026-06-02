import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageFooter, PageFooterSection } from './ma-page-footer';

const displayName = 'PageFooter';

afterEach(() => {
  cleanup();
});

describe('PageFooter', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(PageFooter.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLElement root node', () => {
    const ref = createRef<HTMLElement>();
    render(<PageFooter ref={ref} sections={[<PageFooterSection>page-footer</PageFooterSection>]} metaLinks={[]} />);
    const element = screen.getByText('page-footer').closest('footer');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLElement);
  });
});
