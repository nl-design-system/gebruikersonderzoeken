import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('image', () => {
  it('converts to an UtrechtImage', async () => {
    const input = '<img src="">';
    const output = await process(input);
    expect(output).toBe('<img src="" class="utrecht-img utrecht-img--scale-down">');
  });
});
