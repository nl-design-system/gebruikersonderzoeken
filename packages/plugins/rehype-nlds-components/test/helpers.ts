import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import nldsComponentsPlugin from '../src/index';

export async function process(html: string, components = {}) {
  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(nldsComponentsPlugin, { components })
    .use(rehypeStringify)
    .process(html);

  return String(file);
}
