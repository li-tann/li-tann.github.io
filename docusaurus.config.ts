import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown:{
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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
  themeConfig: {
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
          position: 'right',
          label: '💬Document',
        },
        {
          type: 'docSidebar',
          position: 'right',
          sidebarId: 'code',
          label: '🧙Code',
        },
        {to: '/blog', label: '🏷️Blog', position: 'right'},
        {
          href: 'https://github.com/li-tann/li-tann.github.io',
          label: '🚀GitHub',
          position: 'right',
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
          label:'Home',
          to:'/',
        },
        {
          label:'Document',
          to:'/docs/intro',
        },
        {
          label: "Code",
          to:"/docs/code/intro",
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
