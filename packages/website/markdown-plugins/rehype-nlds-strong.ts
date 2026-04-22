import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';

export function strong(element: Element) {
  if (isElement(element, 'strong') === false) return;

  element.properties['class'] = `${element.properties['class'] || ''} ma-strong`.trim();
}
