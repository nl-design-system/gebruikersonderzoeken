import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('link', () => {
  it('converts to a NLLink', async () => {
    const input = '<a href="">hello</a>';
    const output = await process(input);
    expect(output).toBe('<a href="" class="nl-link">hello</a>');
  });
});
