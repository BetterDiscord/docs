// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BetterDiscord",
  tagline: "Documentation, guidelines and tutorials.",
  url: "https://docs.zerebos.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon/favicon-96x96.png",
  organizationName: "betterdiscord",
  projectName: "docs",

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
            docId: "users/index",
            position: "left",
            label: "User Guides",
          },
          {
            type: "dropdown",
            label: "Developer Guides",
            position: "left",
            items: [
              {
                type: "doc",
                docId: "developers/index",
                label: "General",
              },
              {
                type: "doc",
                docId: "plugins/index",
                label: "Plugins",
              },
              {
                type: "doc",
                docId: "themes/index",
                label: "Themes",
              },
            ]
          },
          {
            type: "dropdown",
            label: "Reference",
            position: "left",
            items: [
                {
                  type: "doc",
                  docId: "api/index",
                  label: "Plugin API",
                },
                {
                  type: "doc",
                  docId: "discord/index",
                  label: "Discord Internals",
                },
            ]
          },
          {
            label: "Website",
            href: "https://betterdiscord.app/",
            position: "right"
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
                label: "User Guides",
                to: "/users/"
              },
              {
                label: "Developer Guides",
                to: "/developers/"
              },
              {
                label: "Plugin Development",
                to: "/plugins/"
              },
              {
                label: "Theme Development",
                to: "/themes/"
              },
              {
                label: "Plugin API",
                to: "/api/"
              },
              {
                label: "Discord Internals",
                to: "/discord/"
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
                label: "Website",
                href: "https://betterdiscord.app/",
              },
              {
                label: "GitHub",
                href: "https://github.com/BetterDiscord/BetterDiscord",
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
      metadata: [
        {property: "og:site_name", content: "BetterDiscord Docs"},
        {property: "og:title", content: "BetterDiscord Documentation & Guides"},
        {property: "og:description", content: "User and developer documentation for using and creating addons for BetterDiscord."},
        {property: "og:image", content: "/branding/logo_solid.png"},
        {property: "og:image:alt", content: "BetterDiscord Logo"},

        {property: "twitter:card", content: "summary"},
        {property: "twitter:site", content: "BetterDiscord Logo"},
        {property: "twitter:title", content: "BetterDiscord Documentation & Guides"},
        {property: "twitter:description", content: "User and developer documentation for using and creating addons for BetterDiscord."},
        {property: "twitter:image", content: "/branding/logo_solid.png"},
        {property: "twitter:image:alt", content: "BetterDiscord Logo"},

        {name: "theme-color", content: "#3a71c1"},
        {name: "description", content: "User and developer documentation for using and creating addons for BetterDiscord."},
        {name: "keywords", content: "Discord, BetterDiscord, Better Discord, Discord Mod, Discord Themes, Discord Plugins, Discord Extensions, Discord Client Mod, Discord Hacks, Documentation, Docs, Guide, Tutorial"},
        {name: "author", content: "BetterDiscord"},
      ]
    }),
};

module.exports = config;
