import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('orderd-list', () => {
  it('converts to an utrecht-orderd-list', async () => {
    const input = `
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
    `;
    const output = await process(input);
    expect(output).toBe(`
    <ol class="utrecht-ordered-list" role="list">
      <li class="utrecht-ordered-list__item">item 1</li>
      <li class="utrecht-ordered-list__item">item 2</li>
    </ol>
    `);
  });

  it('handles nested lists', async () => {
    const input = `
    <ol>
      <li>item 1</li>
      <li>
        item 2
        <ol>
          <li>item 2.1</li>
          <li>
            item 2.2
            <ol>
              <li>item 2.1.1</li>
              <li>item 2.2.2</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    `;
    const output = await process(input);
    expect(output).toBe(`
    <ol class="utrecht-ordered-list" role="list">
      <li class="utrecht-ordered-list__item">item 1</li>
      <li class="utrecht-ordered-list__item">
        item 2
        <ol class="utrecht-ordered-list--nested utrecht-ordered-list" role="list">
          <li class="utrecht-ordered-list__item">item 2.1</li>
          <li class="utrecht-ordered-list__item">
            item 2.2
            <ol class="utrecht-ordered-list--nested utrecht-ordered-list" role="list">
              <li class="utrecht-ordered-list__item">item 2.1.1</li>
              <li class="utrecht-ordered-list__item">item 2.2.2</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    `);
  });
});
