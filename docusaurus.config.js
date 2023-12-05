// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'li-tann',
  tagline: 'li-tann\'s notebook',
  favicon: 'img/SAR-LOGO2.png',

  // Set the production url of your site here
  url: 'https://li-tann.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'li-tann', // Usually your GitHub org/user name.
  projectName: 'li-tann.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown:{
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins:[],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars_2.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Blogs',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

   stylesheets: [
    {
      // href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      // type: 'text/css',
      // integrity:
      //   'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      // crossorigin: 'anonymous',
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'li-tann\'s Notebook',
        logo: {
          alt: 'Logo',
          src: 'img/SAR-LOGO2.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',//链接第一个界面的名称, 对应resume.md
            position: 'left',
            label: '💬Document',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'code',
            label: '🧙Code',
          },
          {to: '/blog', label: '🏷️Blog', position: 'left'},
          {
            href: 'https://github.com/li-tann/li-tann.github.io',
            label: '🚀GitHub',
            position: 'left',
            // className: 'header-github-link', ///doesn't work
            // 'aria-label': 'GitHub repository',///doesn't work
          },
          {
            type: 'search',///doesn't work
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label:'Docs',
            to:'/docs/intro',
          },
          {
            label:'C++',
            to:'/docs/category/cpp',
          },
          {
            label: "CMake",
            to:"/docs/category/cmake",
          },
          {
            label: "Python",
            to:"/docs/category/python",
          },
          {
            label:'Blog',
            to:'/blog',
          },
          {
            label:'GitHub',
            href: 'https://github.com/li-tann/li-tann.github.io',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} li-tann's notebook, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
