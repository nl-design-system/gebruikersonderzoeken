import type { Options, ThemeConfig } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
import navbar from './navbar';

const config: Config = {
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'nl-design-system', // Usually your GitHub org/user name.
  presets: [
    [
      'classic',
      {
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nl-design-system/gebruikersonderzoeken/tree/main/packages/create-docusaurus/templates/shared/',
          showReadingTime: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/nl-design-system/gebruikersonderzoeken/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],

  projectName: 'gebruikersonderzoeken', // Usually your repo name.
  tagline: 'Gedeelde gebruikersonderzoeken van alle gemeenten in Nederland voor onderzoekers, ontwerpers en managers',
  themeConfig: {
    algolia: {
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/gebruikersonderzoek/', // or as RegExp: /\/docs\//
        to: '/',
      },
      // Public API key: it is safe to commit it
      apiKey: '68720c7d6f2fe2fb3e01710c41e9b596',
      // The application ID provided by Algolia
      appId: 'HWYTAR8XU5',
      // Config
      contextualSearch: false,
      indexName: 'gebruikersonderzoek',
    },
    colorMode: {
      disableSwitch: true,
    },
    footer: {
      links: [
        {
          items: [
            {
              href: 'mailto:info@nldesignsystem.nl',
              label: 'NL Design System kernteam - info@nldesignsystem.nl',
            },
            {
              href: 'mailto:j.du.chatinier@utrecht.nl',
              label: 'Jeroen du Chatinier - j.du.chatinier@utrecht.nl',
            },
          ],
          title: 'Contact',
        },
      ],
    },
    future: {
      experimental_faster: true,
    },
    navbar,
    prism: {
      darkTheme: themes.dracula,
      theme: themes.github,
    },
    tableOfContents: {
      maxHeadingLevel: 2,
      minHeadingLevel: 2,
    },
  } satisfies ThemeConfig,

  title: 'Gebruikersonderzoeken',

  // Set the production url of your site here
  url: 'https://gebruikersonderzoeken.nl',
};

export default config;
