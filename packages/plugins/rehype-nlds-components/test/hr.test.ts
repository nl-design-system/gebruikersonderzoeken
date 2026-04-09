import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('hr', () => {
  it('converts to a UtrechtSeparator', async () => {
    const input = '<hr />';
    const output = await process(input);
    expect(output).toBe('<hr class="utrecht-separator">');
  });
});
