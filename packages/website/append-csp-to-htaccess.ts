import type { AstroIntegration } from 'astro';
import type { Root } from 'hast';
import { glob, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { remove } from 'unist-util-remove';
import { visit } from 'unist-util-visit';

/**
 * Astro integration to move the CSP values from the generated <meta> elements
 * into the .htaccess file.
 *
 * Astro places the CSP values into the generated document, however that
 * prevents services like Google Translate to inject translation scripts.
 * By extracting the values and placing them in the .htaccess file we can
 * choose to not include CSP rules when we need to
 */
export const appendCSPToHTAccess: () => AstroIntegration = () => {
  /** All CSP values that exists across all build html files. Should only be
  one that can be used for every request */
  const cspValues: Set<string> = new Set();

  const integration: AstroIntegration = {
    name: 'csp-to-htaccess',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        logger.info('Moving CSP rules from `<meta>` element to .htaccess file');

        for await (const entry of glob('**/*.html', { cwd: dir })) {
          const filepath = `${dir.pathname}${entry}`;
          const contents = await readFile(filepath, { encoding: 'utf-8' });
          const file = await unified().use(rehypeParse).use(extractCSP).use(rehypeStringify).process(contents);

          await writeFile(filepath, String(file));
        }

        // There is only one unique csp value found. Use that as csp value for
        // each request
        if (cspValues.size === 1) {
          await writeCSPToHTAccess(dir, cspValues.values().next().value);
        }

        // There are multiple csp values found across the build files. This is
        // not supported, so if this happens, we should find out which page
        // is different
        else {
          throw new Error('There are multiple different cspValues.');
        }
      },
    },
  };

  /** Remove the CSP rule from the html document and return the value via a callback */
  function extractCSP() {
    return function (tree: Root) {
      visit(tree, 'element', function (node) {
        if (node.tagName === 'meta' && node.properties['httpEquiv']) {
          const content = node.properties['content'];
          if (typeof content !== 'string') return;
          if (node.properties['httpEquiv'].toString() !== 'content-security-policy') return;

          if (content) {
            cspValues.add(content);
          }

          remove(tree, node);
        }
      });
    };
  }

  /** Update the .htaccess file in the ./dist folder */
  async function writeCSPToHTAccess(dir: URL, cspValues: string | undefined) {
    if (!cspValues) {
      throw new Error('No csp values found');
    }

    const baseDir = path.resolve('../../');
    const targetDir = path.resolve(baseDir, dir.pathname);

    if (!targetDir.startsWith(baseDir + path.sep)) {
      throw new Error('Access denied: path traversal detected');
    }

    const htaccessFilepath = `${targetDir}/.htaccess`;
    const htaccessContent = await readFile(htaccessFilepath, { encoding: 'utf-8' });

    const updatedHTAccessContent = htaccessContent.replace(
      '# {{CSP HEADERS}}',
      `<IfModule mod_headers.c>\n  Header always set Content-Security-Policy ${JSON.stringify(cspValues)}\n</IfModule>`,
    );

    await writeFile(htaccessFilepath, updatedHTAccessContent, { encoding: 'utf-8' });
  }

  return integration;
};
