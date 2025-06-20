// @ts-expect-error - ma-design-tokens does not export type information in package.json
import * as maVariables from '@nl-design-system-community/ma-design-tokens/dist/variables.mjs';

/* @TODO: Check if this regex matches the identToken from the css spec */
const identToken = /(--[a-zA-Z0-9_-]+)/g;

/** @param {string} string */
const toCamelCase = (string) =>
  string
    .replace('--', '')
    .split('-')
    .map((part) => part.replace(/^./, (char) => char.toUpperCase()))
    .join('')
    .replace(/^./, (char) => char.toLowerCase());

/**
 * @param {unknown} key
 * @returns {key is keyof typeof maVariables}
 */
const isToken = (key) => {
  const _key = /** @type {keyof typeof maVariables} */ (key);
  return Boolean(maVariables[_key]);
};

/** @returns {import('postcss').Plugin} */
export default function maDesignTokens() {
  return {
    postcssPlugin: 'ma-design-tokens',

    prepare() {
      /** @type {Record<string, any>} */
      const variables = {};

      return {
        /**
         * Find a Custom Property in a value and check if that is a Design Token.
         * If it is, mark it to be included later
         */
        Declaration(decl) {
          if (decl.value.includes('--')) {
            (decl.value.match(identToken) || []).forEach((match) => {
              const camelCased = toCamelCase(match);
              if (isToken(camelCased)) {
                variables[match] = maVariables[camelCased];
              }
            });
          }
        },

        /**
         * Once all tokens are found include them with their values in a :root
         * selector
         */
        OnceExit(root) {
          let toInject = `:root {`;

          Object.entries(variables).forEach(([key, value]) => {
            toInject += `${key}: ${value};`;
          });

          toInject += '}';

          root.prepend(toInject);
        },
      };
    },
  };
}
