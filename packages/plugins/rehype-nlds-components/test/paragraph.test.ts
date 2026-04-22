import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('paragraph', () => {
  it('converts to NLParagraph', async () => {
    const input = '<div><p>hello</p></div>';
    const output = await process(input);
    expect(output).toBe('<div><p class="nl-paragraph">hello</p></div>');
  });
});
