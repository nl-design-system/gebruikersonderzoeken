// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer');
const mainNav = require('./navConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gebruikersonderzoeken',
  tagline: 'Gedeelde gebruikersonderzoeken van alle gemeenten in Nederland voor onderzoekers, ontwerpers en managers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gebruikersonderzoeken.nl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'nl-design-system', // Usually your GitHub org/user name.
  projectName: 'gebruikersonderzoeken', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: mainNav,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'Yolijn van der Kolk - yolijn@frameless.io',
                href: 'mailto:yolijn@frameless.io',
              },
              {
                label: 'Jeroen du Chatinier - j.du.chatinier@utrecht.nl',
                href: 'mailto:j.du.chatinier@utrecht.nl',
              },
            ],
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'HWYTAR8XU5',
        // Public API key: it is safe to commit it
        apiKey: '68720c7d6f2fe2fb3e01710c41e9b596',
        indexName: 'gebruikersonderzoek',
        // Config
        contextualSearch: false,
        placeholder: 'Zoek documentatie',
        disableUserPersonalization: true,
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/gebruikersonderzoek/', // or as RegExp: /\/docs\//
          to: '/',
        },
      },
    },
};

module.exports = config;
