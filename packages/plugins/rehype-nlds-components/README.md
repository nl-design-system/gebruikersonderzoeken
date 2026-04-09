# rehype-nlds-components

A [rehype](https://github.com/rehypejs/rehype) plugin to convert plain html to [NL Design System](https://nldesignsystem.nl) Components.

## What is this?

This plugin converts plain html into components from the NL Design System. This
is done by adding the classes of the CSS components to the markup.

- `<a>` becomes [NLLink](https://www.npmjs.com/package/@nl-design-system-candidate/link-css)
- `<code>` becomes [NLCode](https://www.npmjs.com/package/@nl-design-system-candidate/code-css)
- `<h1>...<h6>` becomes [NLHeading](https://www.npmjs.com/package/@nl-design-system-candidate/heading-css)
- `<p>` becomes [NLParagraph](https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css)
- `<pre> > <code>` becomes [NLCodeBlock](https://www.npmjs.com/package/@nl-design-system-candidate/code-block-css)
- `<blockquote>` becomes [UtrechtBlockquote](https://www.npmjs.com/package/@utrecht/blockquote-css)
- `<em>` becomes [UtrechtEmphasis](https://www.npmjs.com/package/@utrecht/emphasis-css)
- `<figure>` becomes [UtrechtFigure](https://www.npmjs.com/package/@utrecht/figure-css)
- `<hr>` becomes [UtrechtSeparator](https://www.npmjs.com/package/@utrecht/separator-css)
- `<img>` becomes [UtrechtImage](https://www.npmjs.com/package/@utrecht/img-css)
- `<ol> <li>` becomes [UtrechtOrderedList](https://www.npmjs.com/package/@utrecht/ordered-list-css)
- `<ul> <li>` becomes [UtrechtUnorderedList](https://www.npmjs.com/package/@utrecht/unordered-list-css)

## When should I use this?

This plugin is intended to be used on markdown transformed into HTML. The
plugin adds classes and properties without checking existing values. Great for
static site generators like Astro. You should provide the css for each of these
components yourself. To get started with the NL Design System, read the
[Introduction for developers](https://nldesignsystem.nl/handboek/developer/introductie/)
section (Dutch).

## Installation

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 18+), install with your package manager:

```bash
npm install @nl-design-system-unstable/rehype-nlds-components
```

```bash
pnpm add @nl-design-system-unstable/rehype-nlds-components
```

```bash
yarn add @nl-design-system-unstable/rehype-nlds-components
```

### Instation of the component css

```bash
npm install @nl-design-system-candidate/link-css@2 \
            @nl-design-system-candidate/code-css@2 \
            @nl-design-system-candidate/heading-css@1 \
            @nl-design-system-candidate/paragraph-css@2 \
            @nl-design-system-candidate/code-block-css@1 \
            @utrecht/blockquote-css@3 \
            @utrecht/emphasis-css@3 \
            @utrecht/figure-css@3 \
            @utrecht/separator-css@3 \
            @utrecht/img-css@3 \
            @utrecht/ordered-list-css@4 \
            @utrecht/unordered-list-css@3;
```

```bash
pnpm add @nl-design-system-candidate/link-css@2 \
         @nl-design-system-candidate/code-css@2 \
         @nl-design-system-candidate/heading-css@1 \
         @nl-design-system-candidate/paragraph-css@2 \
         @nl-design-system-candidate/code-block-css@1 \
         @utrecht/blockquote-css@3 \
         @utrecht/emphasis-css@3 \
         @utrecht/figure-css@3 \
         @utrecht/separator-css@3 \
         @utrecht/img-css@3 \
         @utrecht/ordered-list-css@4 \
         @utrecht/unordered-list-css@3;
```

```bash
yarn add @nl-design-system-candidate/link-css@2 \
         @nl-design-system-candidate/code-css@2 \
         @nl-design-system-candidate/heading-css@1 \
         @nl-design-system-candidate/paragraph-css@2 \
         @nl-design-system-candidate/code-block-css@1 \
         @utrecht/blockquote-css@3 \
         @utrecht/emphasis-css@3 \
         @utrecht/figure-css@3 \
         @utrecht/separator-css@3 \
         @utrecht/img-css@3 \
         @utrecht/ordered-list-css@4 \
         @utrecht/unordered-list-css@3;
```

## Usage

> [!INFO]
> This packages does _not_ contain the styles of the components. You should
> include the css from the components yourself.

Say `example.md` contains:

```markdown
## This is a heading

This is a paragraph

- and a list
- with items
```

For vanilla JS:

```js
// example.js
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeNLDSComponents from 'rehype-nlds-components';
import rehypeStringify from 'rehype-stringify';
import { readSync } from 'to-vfile';

const file = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeNLDSComponents)
  .use(rehypeStringify)
  .processSync(readSync('example.md'));

console.log(String(file));
```

For Astro projects:

```js
// astro.config.ts
import { defineConfig } from 'astro/config';
import rehypeCallouts from 'rehype-nlds-components';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeNLDSComponents],
  },
});
```

Run `node example.js` (`pnpm dev`) to get:

```html
<h2 class="nl-heading nl-heading--level-2">This is a heading</h2>
<p class="nl-paragraph">This is a paragraph</p>
<ul class="utrecht-unordered-list" role="list">
  <li class="utrecht-unordered-list__item">and a list</li>
  <li class="utrecht-unordered-list__item">with items</li>
</ul>
```

## API

This package exports no identifiers, The default export is `rehypeNLDSComponents`.

### `unified().use(rehypeNLDSComponents[, options])`

Used to transform markup.

###### Parameters

- `options` ([`UserOptions`](#useroptions), optional) — configuration

###### Returns

Transform ([`Transformer`](https://github.com/unifiedjs/unified#transformer)).

### `UserOptions`

Configuration (optional).

###### Fields

- `components` — An object with custom or overriding component transformers.

## Examples

### Add a custom component transformer

```diff
 import rehypeNLDSComponents from 'rehype-nlds-components'
 ...

+function myStrong(element) {
+  if (element.tagName === 'strong'){
+    element.properties['className'] = 'my-strong';
+  };
+}

 const file = unified()
   .use(remarkParse)
   .use(remarkRehype)
-  .use(rehypeNLDSComponents)
+  .use(rehypeNLDSComponents, { components: { strong: myStrong } })
   .use(rehypeStringify)
   .processSync(readSync('example.md'))

 console.log(String(file))
```
