// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BetterDiscord",
  tagline: "Documentation, guidelines and tutorials.",
  url: "https://bd.zerebos.com",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon/favicon-96x96.png",
  staticDirectories: ["assets"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "betterdiscord", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./src/sidebars.js"),
          sidebarCollapsed: false,
          routeBasePath: "/", // Serve the docs at the site's root
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      navbar: {
        title: "",
        logo: {
          alt: "BetterDiscord",
          src: "branding/logo_large.svg",
        },
        items: [
          {
            type: "doc",
            docId: "plugins/index",
            position: "left",
            label: "Plugins",
          },
          {
            type: "doc",
            docId: "themes/index",
            position: "left",
            label: "Themes",
          },
          {
            href: "https://github.com/BetterDiscord/BetterDiscord",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Plugins",
                to: "/plugins/index",
              },
              {
                label: "Themes",
                to: "/themes/index",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/betterdiscord",
              },
              {
                label: "Discord",
                href: "https://betterdiscord.app/invite",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/_BetterDiscord_",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/BetterDiscord",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BetterDiscord. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["javadoclike", "jsdoc"]
      },
    }),
};

module.exports = config;
