---
order: 3
description: The development environment.
---

# Environment

This section expands upon the general environment info

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

These polyfills are not 100% exact replicas of these APIs, but they are close enough that 99% of plugins had no issues when switching to this. In the future, BetterDiscord will introduce custom APIs with equivalent functionality, and deprecate the usage of these polyfills.

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