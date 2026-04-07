import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Banner } from './ma-banner';

const displayName = 'Banner';

afterEach(() => {
  cleanup();
});

describe('Banner', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Banner.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Banner ref={ref}>banner</Banner>);
    const element = screen.getByText('banner');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
