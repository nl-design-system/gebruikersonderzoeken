import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('emphasis', () => {
  it('converts to an UtrechtEmphasis', async () => {
    const input = '<em>hello</em>';
    const output = await process(input);
    expect(output).toBe('<em class="utrecht-emphasis utrecht-emphasis--stressed">hello</em>');
  });
});
