import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('code', () => {
  it('converts to a NLCode component', async () => {
    const input = `<code>hello</code>`;
    const output = await process(input);
    expect(output).toBe(`<code class="nl-code" dir="ltr" translate="no">hello</code>`);
  });

  it('ignores code wrapped in a pre', async () => {
    const input = `<pre><code>hello</code></pre>`;
    const output = await process(input, { pre: () => {} });
    expect(output).toBe(`<pre><code>hello</code></pre>`);
  });
});
