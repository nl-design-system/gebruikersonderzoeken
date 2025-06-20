import type { Plugin } from 'postcss';
// @ts-expect-error - ma-design-tokens does not export type information in package.json
import * as maJsDesignTokens from '@nl-design-system-community/ma-design-tokens/dist/variables.mjs';

/**
 * CSS Indent Token: https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
 * `<ident-token>` for CSS Custom Properties: `--` then `a-z A-Z 0-9 _ - or non-ASCII` ()
 * Explanation:
 *  - Start with two dashes: `--`
 *  - Then one or more of:
 *    - `a-z`           - Lowercase latin letter
 *    - `A-Z`           - Uppercase latin letter
 *    - `0-9`           - Number
 *    - `_-`            - The `-` and `_` characters
 *    - `\u0080-\uFFFF` - Any non ASCII character
 */
const identToken = /(--[a-zA-Z0-9_-\u0080-\uFFFF]+)/g;

const upperCaseFirstLetter = (string: string): string => string.replace(/^./, (char) => char.toUpperCase());

/**
 * Convert a css variable to a javascript camelcased variable:
 * `--my-my-design-token` -> `myDesignToken`
 */
const cssVarToJsVar = (string: string): string =>
  string
    .replace('--', '') // Remove leading dashes
    .split('-') // split at dash to get array of parts
    .map(upperCaseFirstLetter) // uppercase first letter of each part
    .join('') // join back into a string
    .replace(/^./, (char) => char.toLowerCase()); // lowercase the first letter of the result

/**
 * Check if `key` is available as key of a design token in `maJsDesignTokens`
 */
const isExistingDesignToken = (key: unknown): key is keyof typeof maJsDesignTokens => {
  const _key = key as keyof typeof maJsDesignTokens;
  return Boolean(maJsDesignTokens[_key]);
};

export default function maDesignTokens(): Plugin {
  return {
    postcssPlugin: 'ma-design-tokens',

    prepare() {
      const variables: Record<string, object> = {};

      return {
        /**
         * Find a Custom Property in a value and check if that is a Design Token.
         * If it is, store it to be included later
         */
        Declaration(decl) {
          if (decl.value.includes('--')) {
            (decl.value.match(identToken) ?? []).forEach((cssVariable) => {
              const jsDesignToken = cssVarToJsVar(cssVariable);

              if (isExistingDesignToken(jsDesignToken)) {
                const designTokenValue = maJsDesignTokens[jsDesignToken];
                variables[cssVariable] = designTokenValue;
              }
            });
          }
        },

        /**
         * Once all tokens are found include them with their values in a :root
         * selector
         */
        OnceExit(root) {
          let toInject = `:root {\n`;

          toInject += Object.entries(variables)
            .map(([key, value]) => `  ${key}: ${value};`)
            .join('\n');

          toInject += '}';

          root.prepend(toInject);
        },
      };
    },
  };
}
