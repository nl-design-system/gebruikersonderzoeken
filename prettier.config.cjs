/**
 * @type {import('prettier').Config}
 */
module.exports = {
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        singleQuote: false,
      },
    },
  ],
  printWidth: 120,
  singleQuote: true,
};
