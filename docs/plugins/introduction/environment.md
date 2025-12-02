---
order: 3
description: The development environment.
---

# Environment

No not the one burning up, but the development environment for BetterDiscord plugins. There's mainly two broad categories to look at, the environment of Discord's desktop application itself, and the environment that BetterDiscord brings to it.

## Discord

### Desktop Application

Discord Desktop is an [Electron](https://www.electronjs.org/) application which means it is _essentially_ a chromium web browser that only displays Discord. That is an oversimplification but it's a good high level understanding to have. What makes Electron more than just a browser, is that it bundles Node.js with it, giving every Electron application the ability to interact beyond the capabilities of a web browser and make use of the user's computer.

To get a better sense of what this does, think of the limitations of making an application in a web browser. Actions like loading and saving local files, listening to keybinds globally, and controlling the user's clipboard are just not possible in the web browser. Most of these limitations are for security reasons, but with [Node.js](https://nodejs.org/), suddenly those are all very possible.

This also means that BetterDiscord, and the plugins via a [polyfill](#nodejs), have access to both of these environments as well.

### Web Application

The web application itself is made using the [React](https://reactjs.org/) UI library. This is a popular library that allows for responsive and stateful interfaces. In many cases, developers take advantage of the powerful plugins and addons for React. But  Discord chose to use their own event system complete with a custom [Flux](https://facebook.github.io/flux/) implementation.

The actual full implementation of Discord's code is not known. It is possibly written in [TypeScript](https://www.typescriptlang.org/), very likely using modern [ES Modules](https://flaviocopes.com/es-modules/), and most definitely bundled with [Webpack](https://webpack.js.org/). The topic of Webpack will be covered later in these docs.

::: warning

If you're not familiar with any of the mentioned libraries, now is a good time to brush up before moving on.

:::

For the curious, here are the versions of the major components as of writing (December 2nd 2025).

|Component|Version|
|:--------|------:|
|Chrome   |138.0.7204.251|
|Electron |37.6.0|
|Node     |22.19.0|


## Node.js

BetterDiscord used to give direct access to the [Node.js](https://nodejs.org/) api directly in the renderer process. However, Discord made a change to their fork of Electron that made this impossible, practically speaking. That said, due to how important these APIs are, how ubiquitous their usage in plugins, and in the interest of backwards-compatibility, BetterDiscord has polyfilled certain APIs to make them available to plugins in the same way as before (`require`).

Currently, the list of polyfilled Node modules are:

- Buffer
- Crypto
- Filesystem
- HTTPS
- Module
- Request
- VM

These polyfills are not 100% exact replicas of these APIs but they are close enough that 99% of plugins had no issues when switching to this. In the future, BetterDiscord will introduce custom APIs with equivalent functionality, and deprecate the usage of these polyfills.

However, for now feel free to use them. For instance, if you want to load a file in the current directory you can just use the `fs` module.

```js
const fs = require("fs");
const myData = fs.readFileSync("myfile.txt", "utf8");
```

Though this guide won't be giving a tutorial on the Node.js standard library--their official docs do that--you will see example usages throughout.

## Plugin API

BetterDiscord provides an API for plugins. The guides here show how it's used and the [API reference](/api/) section has an exhaustive list of what's available. The API exists as a global and provides several utility functions relevant to plugins. This includes data storage, UI rendering, notifications, and utilities to explore Discord's internals.

## Discord's Internals

Inside of this environment, BetterDiscord provides access to Discord's internals via searching their modules. Understanding and using these modules is a task left to the developer. But the [advanced](../advanced/patching.md) guide provides some insight on how to get started. Searching through and using Discord's own modules are some of the most important skills for building complex plugins.