---
sidebar_position: 3
description: The development environment.
---

# Environment

This section expands upon the general environment info

## Node.js

BetterDiscord gives plugins access to the [Node.js](https://nodejs.org/) bundled into the Discord desktop application. This means anything you can do with Node.js can be done inside of a plugin. There are some caveats, especially when it comes to using modules from the [npm](https://www.npmjs.com/) ecosystem because Electron applications require many packages to be compiled specifically for use with Electron and for that specific platform/OS.

The standard library of Node.js is fully available inside of BetterDiscord. For instance, if you want to load a file in the current directory you can just use the `fs` module.
```js
const fs = require("fs");
const myData = fs.readFileSync("myfile.txt", "utf8");
```

Though this guide won't be giving a tutorial on the Node.js standard library--their official docs do that--you will see example usages throughout.

## Plugin API

BetterDiscord provides an API for plugins. The guides here show how it's used and the [API reference](/api/) section has an exhaustive list of what's available. The API exists as a global and provides several utility functions relevant to plugins. This includes data storage, UI rendering, notifications, and utilities to explore Discord's internals.

## Discord's Internals

Inside of this environment, BetterDiscord provides access to Discord's internals via searching their modules. Understanding and using these modules is a task left to the developer. But the [advanced](../advanced/) guide provides some insight on how to get started. Searching through and using Discord's own modules are some of the most important skills for building complex plugins.