import type { Element, Root } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name.js';

export function code(element: Element, _index?: number, parent?: Element | Root) {
  if (isElement(element, 'code') === false) return;
  if (isElement(parent, 'pre')) return;

  addClassName('nl-code', element);

  element.properties['dir'] = 'ltr';
  element.properties['translate'] = 'no';
}
