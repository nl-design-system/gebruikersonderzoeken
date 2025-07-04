import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name.ts';

export function pre(element: Element) {
  if (isElement(element, 'pre') === false) return;

  addClassName('nl-code-block', element);

  element.properties['dir'] = 'ltr';
  element.properties['translate'] = 'no';

  selectAll('code', element).forEach(addClassName('nl-code-block__code'));
}
