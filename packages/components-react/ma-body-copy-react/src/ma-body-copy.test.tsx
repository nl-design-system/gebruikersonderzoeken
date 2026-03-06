import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { BodyCopy } from './body-copy';

const displayName = 'BodyCopy';

afterEach(() => {
  cleanup();
});

describe('BodyCopy', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(BodyCopy.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<BodyCopy ref={ref}>body-copy</BodyCopy>);
    const element = screen.getByText('body-copy');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
