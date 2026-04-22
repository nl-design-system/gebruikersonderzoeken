import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name.js';

function heading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return function withLevel(element: Element) {
    if (isElement(element, [`h${level}`]) === false) return;

    addClassName('nl-heading', element);

    if (element.tagName === `h${level}`) addClassName(`nl-heading--level-${level}`, element);
  };
}

export const headingLevel1 = heading(1);
export const headingLevel2 = heading(2);
export const headingLevel3 = heading(3);
export const headingLevel4 = heading(4);
export const headingLevel5 = heading(5);
export const headingLevel6 = heading(6);
