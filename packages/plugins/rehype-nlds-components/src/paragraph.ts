import type { Element, Root } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name.js';

export function paragraph(element: Element, _index?: number, parent?: Element | Root) {
  if (isElement(parent, 'blockquote')) return;
  if (isElement(element, 'p') === false) return;

  addClassName('nl-paragraph', element);
}
