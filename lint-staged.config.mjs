export default {
  '*.{css,scss}': 'prettier --write',
  '*.{js,cjs,mjs,jsx,ts,tsx}': ['eslint --no-error-on-unmatched-pattern --fix', 'prettier --write'],
  '*.{yml,yaml}': 'prettier --write',
  '*.md': 'prettier --write',
};
