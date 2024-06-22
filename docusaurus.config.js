// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vellias Documentation',
  tagline: 'Need help with your server? This is the place to be',
  favicon: 'img/favicon.ico',

  url: 'https://docs.velliashosting.online',
  baseUrl: '/',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Poseidon281/Vellias-Docs/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Poseidon281/Vellias-Docs/tree/main/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'Vellias Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.velliashosting.online',
            label: 'Discord',
            position: 'right',
            className: "discord-link",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Shop',
                href: 'https://shop.velliashosting.online',
              },
              {
                label: 'Discord',
                href: 'https://discord.velliashosting.online',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 - ${new Date().getFullYear()} Vellias Hosting`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;