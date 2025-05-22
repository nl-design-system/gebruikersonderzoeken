/**
 * @type {import('prettier').Config}
 */
module.exports = {
  // Overrides for the deviations from the defaults above
  overrides: [
    {
      // for YAML files:
      files: ['*.yml', '*.yaml'],
      options: {
        // Use double quotes (")
        singleQuote: false,
      },
    },
    {
      // for CSS and SCSS files:
      files: ['*.css', '*.scss'],
      options: {
        // Use double quotes (")
        singleQuote: false,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  // Use a printWith of 120 characters which is different from the default 80
  printWidth: 120,
  // Use the astro plugin to format .astro files
  plugins: ['prettier-plugin-astro'],
  // Use single quotes (') instead of the default double quotes ("), but see below.
  singleQuote: true,
};
