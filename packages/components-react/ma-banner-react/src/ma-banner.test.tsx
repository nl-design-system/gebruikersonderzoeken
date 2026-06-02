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

  it('forwards React refs to the HTMLElement root node', () => {
    const ref = createRef<HTMLElement>();
    render(<Banner ref={ref} copy="banner" />);
    const element = screen.getByText('banner').closest('.ma-banner');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLElement);
  });
});
