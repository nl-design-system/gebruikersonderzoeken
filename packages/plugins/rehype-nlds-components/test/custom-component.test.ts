import { isElement } from 'hast-util-is-element';
import { describe, it, expect } from 'vitest';
import { addClassName } from '../src/_add-class-name';
import { process } from './helpers';

function myStrong(element: Element) {
  if (isElement(element, 'strong') === false) return;

  addClassName('my-strong', element);
}

function myParagraph(element: Element) {
  if (isElement(element, 'p') === false) return;

  addClassName('my-paragraph', element);
}

describe('custom component', () => {
  it('is possible to provide a custom transformer', async () => {
    const input = '<strong>hello</strong>';
    const output = await process(input, { strong: myStrong });
    expect(output).toBe('<strong class="my-strong">hello</strong>');
  });

  it('is possible to override a transformer', async () => {
    const input = '<p>hello</p>';
    const output = await process(input, { p: myParagraph });
    expect(output).toBe('<p class="my-paragraph">hello</p>');
  });
});
