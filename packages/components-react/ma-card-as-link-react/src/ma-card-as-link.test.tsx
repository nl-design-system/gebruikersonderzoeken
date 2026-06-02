import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { CardAsLink } from './ma-card-as-link';

const displayName = 'CardAsLink';

afterEach(() => {
  cleanup();
});

describe('CardAsLink', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(CardAsLink.displayName).toBe(displayName);
  });

  it('forwards React refs to the container HTMLDivElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <CardAsLink heading={<h1>heading</h1>} ref={ref}>
        card-as-link
      </CardAsLink>,
    );
    const element = screen.getByText('heading').closest('.ma-card-as-link__container');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
