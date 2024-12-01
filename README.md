<div align="center">

[build-badge]: https://img.shields.io/github/actions/workflow/status/BetterDiscord/docs/build-and-deploy.yml?branch=main&logo=Github&logoColor=3a71c1&labelColor=0c0d10&color=3a71c1&style=for-the-badge
[build-link]: https://github.com/BetterDiscord/docs/actions/workflows/build-and-deploy.yml

[downloads-badge]: https://img.shields.io/github/downloads/BetterDiscord/Installer/total?labelColor=0c0d10&color=3a71c1&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjI1IDM4LjVIMzUuNzVDMzYuNzE2NSAzOC41IDM3LjUgMzkuMjgzNSAzNy41IDQwLjI1QzM3LjUgNDEuMTY4MiAzNi43OTI5IDQxLjkyMTIgMzUuODkzNSA0MS45OTQyTDM1Ljc1IDQySDEyLjI1QzExLjI4MzUgNDIgMTAuNSA0MS4yMTY1IDEwLjUgNDAuMjVDMTAuNSAzOS4zMzE4IDExLjIwNzEgMzguNTc4OCAxMi4xMDY1IDM4LjUwNThMMTIuMjUgMzguNUgzNS43NUgxMi4yNVpNMjMuNjA2NSA2LjI1NThMMjMuNzUgNi4yNUMyNC42NjgyIDYuMjUgMjUuNDIxMiA2Ljk1NzExIDI1LjQ5NDIgNy44NTY0N0wyNS41IDhWMjkuMzMzTDMwLjI5MzEgMjQuNTQwN0MzMC45NzY1IDIzLjg1NzMgMzIuMDg0NiAyMy44NTczIDMyLjc2OCAyNC41NDA3QzMzLjQ1MTQgMjUuMjI0MiAzMy40NTE0IDI2LjMzMjIgMzIuNzY4IDI3LjAxNTZMMjQuOTg5OCAzNC43OTM4QzI0LjMwNjQgMzUuNDc3MiAyMy4xOTg0IDM1LjQ3NzIgMjIuNTE1IDM0Ljc5MzhMMTQuNzM2OCAyNy4wMTU2QzE0LjA1MzQgMjYuMzMyMiAxNC4wNTM0IDI1LjIyNDIgMTQuNzM2OCAyNC41NDA3QzE1LjQyMDIgMjMuODU3MyAxNi41MjgyIDIzLjg1NzMgMTcuMjExNyAyNC41NDA3TDIyIDI5LjMyOVY4QzIyIDcuMDgxODMgMjIuNzA3MSA2LjMyODgxIDIzLjYwNjUgNi4yNTU4TDIzLjc1IDYuMjVMMjMuNjA2NSA2LjI1NThaIiBmaWxsPSIjM2E3MWMxIi8+Cjwvc3ZnPgo=
[downloads-link]: #auto-installers

[discord-badge]: https://img.shields.io/badge/discord-green?labelColor=0c0d10&color=7289da&style=for-the-badge&logo=discord&logoColor=7289da
[discord-link]: https://discord.gg/bnSUxedypU

[website-badge]: https://img.shields.io/badge/website-green?labelColor=0c0d10&color=3a71c1&style=for-the-badge&logo=firefoxbrowser&logoColor=3a71c1
[website-link]: https://betterdiscord.app

[docs-badge]: https://img.shields.io/badge/docs-green?labelColor=0c0d10&color=3a71c1&style=for-the-badge&logo=readthedocs&logoColor=3a71c1
[docs-link]: https://docs.betterdiscord.app


# BetterDiscord Docs

[![CI Status][build-badge]][build-link] [![GitHub Releases][downloads-badge]][downloads-link] [![Discord][discord-badge]][discord-link] [![Website][website-badge]][website-link] [![Docs][docs-badge]][docs-link]

[![Theme Split](https://betterdiscord.app/resources/branding/serverbanner.png)](https://docs.betterdiscord.app/)

</div>


# About

The docs website is built using [VitePress](https://vitepress.dev/), a modern static website generator purpose built for documentation. The documentation itself is stored in markdown format using as little Vue components as possible in order to maximize the plaintext readability both for local viewing in an IDE as well as those that want to read the docs through GitHub rather than the website.

# Docs Structure

This is the current documentation structure for the markdown files. It covers a wide range of topics and each entry below has several subpages with detailed information.

```
.
├──User Guides             // Basic walkthroughs for the average end-user
├──Developer Guides        // General set of guides useful for all developers
|   ├──Plugins             // Walkthroughs and information for plugin developers
|   └──Themes              // Informational guide to create themes for BetterDiscord
└──API Reference           // Non-walkthrough API reference
    ├──BetterDiscord API   // Detailed reference of everything available on BdApi
    └──Discord             // Advanced info on Discord's internals (subject to change)
```

The markdown pages under BetterDiscord API (aside from the overview/index) are automatically generated via a pair of scripts to extract the JSDoc from BetterDiscord and process it into markdown.


# Project Structure

```
.
├──.vitepress     // VitePress folder for config and customization
|  └──theme       // Extension of the default theme
├──docs           // All the markdown documentation
|   ├──public     // Static assets available at url root
|   └──<others>   // See the structure above
└──scripts        // Helper scripts to generate the api reference

```

# Contributors

For information on contributing to this project, please see [CONTRIBUTING.md](/CONTRIBUTING.md).

[![Contributors][contributors-image]][contributors-link]

[contributors-image]: https://contrib.rocks/image?repo=betterdiscord/docs
[contributors-link]: https://github.com/betterdiscord/docs/graphs/contributors