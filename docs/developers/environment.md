---
order: 3
description: The development environment.
---

# Environment

No not the one burning up, but the development environment for BetterDiscord plugins. There's mainly two broad categories to look at, the environment of Discord's desktop application itself, and the environment that BetterDiscord brings to it.

## Discord

### Desktop Application

Discord Desktop is an [Electron](https://www.electronjs.org/) application which means it is _essentially_ a Chromium web browser that only displays Discord. That is an oversimplification, but it's a good high level understanding to have. What makes Electron more than just a browser, is that it bundles Node.js with it, giving every Electron application the ability to interact beyond the capabilities of a web browser and make use of the user's computer.

To get a better sense of what this does, think of the limitations of making an application in a web browser. Actions like loading and saving local files, listening to keybinds globally, and controlling the user's clipboard are just not possible in the web browser. Most of these limitations are for security reasons, but with [Node.js](https://nodejs.org/), suddenly those are all very possible.

This also means that BetterDiscord, and the plugins via a [polyfill](../plugins/introduction/environment.md#nodejs), have access to both of these environments as well.

### Web Application

The web application itself is made using the [React](https://reactjs.org/) UI library. This is a popular library that allows for responsive and stateful interfaces. In many cases, developers take advantage of the powerful plugins and addons for React. But  Discord chose to use their own event system complete with a custom [Flux](https://facebook.github.io/flux/) implementation.

The actual full implementation of Discord's code is not known. It is possibly written in [TypeScript](https://www.typescriptlang.org/), very likely using modern [ES Modules](https://flaviocopes.com/es-modules/), and most definitely bundled with [Webpack](https://webpack.js.org/). The topic of Webpack will be covered later in these docs.

::: warning

If you're not familiar with any of the mentioned libraries, now is a good time to brush up before moving on.

:::

For the curious, here are the versions of the major components as of writing (April 17th 2023).

|Component|Version|
|:--------|------:|
|Chrome   |108.0.5359.215|
|Electron |22.3.2|
|Node     |16.17.1|