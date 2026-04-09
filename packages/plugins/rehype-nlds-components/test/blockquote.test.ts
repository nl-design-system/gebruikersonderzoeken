import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('blockquote', () => {
  it('converts to a UtrechtBlockquote', async () => {
    const input = `
    <blockquote>
      <p>hello</p>
    </blockquote>`;

    const output = await process(input);
    expect(output).toBe(`
    <blockquote class="utrecht-blockquote utrecht-blockquote--html-blockquote">
      <p class="utrecht-paragraph">hello</p>
    </blockquote>`);
  });
});
