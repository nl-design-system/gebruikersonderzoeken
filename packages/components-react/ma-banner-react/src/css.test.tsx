import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Banner } from './css';

const text = 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.';

afterEach(() => {
  cleanup();
});

describe('Banner (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Banner>{text}</Banner>);
    const style = globalThis.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
