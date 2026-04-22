import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('heading', () => {
  it('converts an h1 to NLHeading level 1', async () => {
    const input = '<h1>hello</h1>';
    const output = await process(input);
    expect(output).toBe('<h1 class="nl-heading nl-heading--level-1">hello</h1>');
  });

  it('converts an h2 to NLHeading level 2', async () => {
    const input = '<h2>hello</h2>';
    const output = await process(input);
    expect(output).toBe('<h2 class="nl-heading nl-heading--level-2">hello</h2>');
  });

  it('converts an h3 to NLHeading level 3', async () => {
    const input = '<h3>hello</h3>';
    const output = await process(input);
    expect(output).toBe('<h3 class="nl-heading nl-heading--level-3">hello</h3>');
  });

  it('converts an h4 to NLHeading level 4', async () => {
    const input = '<h4>hello</h4>';
    const output = await process(input);
    expect(output).toBe('<h4 class="nl-heading nl-heading--level-4">hello</h4>');
  });

  it('converts an h5 to NLHeading level 5', async () => {
    const input = '<h5>hello</h5>';
    const output = await process(input);
    expect(output).toBe('<h5 class="nl-heading nl-heading--level-5">hello</h5>');
  });

  it('converts an h6 to NLHeading level 6', async () => {
    const input = '<h6>hello</h6>';
    const output = await process(input);
    expect(output).toBe('<h6 class="nl-heading nl-heading--level-6">hello</h6>');
  });
});
