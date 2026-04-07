import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Tag } from './ma-tag';

const displayName = 'Tag';

afterEach(() => {
  cleanup();
});

describe('Tag', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Tag.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<Tag ref={ref}>tag</Tag>);
    const element = screen.getByText('tag');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
