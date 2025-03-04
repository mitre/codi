// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CODI',
  tagline: 'Welcome to',
  favicon: 'img/codi-browser-icon.png',

  // Set the production url of your site here
  url: 'https://mitre.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/codi/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mitre', // Usually your GitHub org/user name.
  projectName: 'codi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/codi-logo.png',
      navbar: {
        logo: {
          alt: 'CODI logo',
          src: 'img/codi-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Get Started',
          },
          {
            href: 'https://github.com/mitre/codi',
            label: 'CODI GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        disableSwitch: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Get Started',
                to: 'docs/get-started',
              },
              {
                label: 'CODI Resources',
                to: 'docs/codi-resources-by-phase',
              },
              {
                label: 'Communities Using CODI',
                to: 'docs/communities-using-codi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CODI GitHub',
                href: 'https://github.com/mitre/codi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The MITRE Corporation. All Rights Reserved. Approved for Public Release: 25-0288. Distribution Unlimited.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
