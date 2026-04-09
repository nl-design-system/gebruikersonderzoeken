import { describe, it, expect } from 'vitest';
import { process } from './helpers';

describe('unorderd-list', () => {
  it('converts to an utrecht-unorderd-list', async () => {
    const input = `
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>
    `;
    const output = await process(input);
    expect(output).toBe(`
    <ul class="utrecht-unordered-list" role="list">
      <li class="utrecht-unordered-list__item">item 1</li>
      <li class="utrecht-unordered-list__item">item 2</li>
    </ul>
    `);
  });

  it('handles nested lists', async () => {
    const input = `
    <ul>
      <li>item 1</li>
      <li>
        item 2
        <ul>
          <li>item 2.1</li>
          <li>
            item 2.2
            <ul>
              <li>item 2.1.1</li>
              <li>item 2.2.2</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    `;
    const output = await process(input);
    expect(output).toBe(`
    <ul class="utrecht-unordered-list" role="list">
      <li class="utrecht-unordered-list__item">item 1</li>
      <li class="utrecht-unordered-list__item">
        item 2
        <ul class="utrecht-unordered-list--nested utrecht-unordered-list" role="list">
          <li class="utrecht-unordered-list__item">item 2.1</li>
          <li class="utrecht-unordered-list__item">
            item 2.2
            <ul class="utrecht-unordered-list--nested utrecht-unordered-list" role="list">
              <li class="utrecht-unordered-list__item">item 2.1.1</li>
              <li class="utrecht-unordered-list__item">item 2.2.2</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    `);
  });
});
