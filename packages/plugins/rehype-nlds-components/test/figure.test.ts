import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('figure', () => {
  it('converts to an UtrechtFigure', async () => {
    const input = `
    <figure>
      <img src="" />
      <figcaption>hello</figcaption>
    </figure>`;
    const output = await process(input);
    expect(output).toBe(`
    <figure class="utrecht-figure">
      <img src="" class="utrecht-img utrecht-img--scale-down">
      <figcaption class="utrecht-figure__caption">hello</figcaption>
    </figure>`);
  });
});
