import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('pre', () => {
  it('converts to a NLCodeBlock', async () => {
    const input = `<pre><code>hello</code></pre>`;
    const output = await process(input);
    expect(output).toBe(
      `<pre class="nl-code-block" dir="ltr" translate="no"><code class="nl-code-block__code">hello</code></pre>`,
    );
  });
});
