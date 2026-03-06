import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { CardList } from './card-list';

const displayName = 'CardList';

afterEach(() => {
  cleanup();
});

describe('CardList', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(CardList.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardList ref={ref}>card-list</CardList>);
    const element = screen.getByText('card-list');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
