// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const mainNav = require('./navConfig')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gebruikersonderzoeken.nl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/gebruikersonderzoek/',
  baseUrl: '/',

  organizationName: 'nl-design-system', // Usually your GitHub org/user name.
  projectName: 'gebruikersonderzoek', // Usually your repo name.

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
      ({
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: mainNav,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
                label: 'Yolijn van der Kolk - yolijn.vanderkolk@ictu.nl',
                href: 'mailto:yolijn.vanderkolk@ictu.nl',
              },
              {
                label: 'Jeroen du Chatinier - j.du.chatinier@utrecht.nl',
                href: 'mailto:j.du.chatinier@utrecht.nl',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
