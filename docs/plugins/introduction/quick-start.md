---
order: 1
description: Get started fast.
---

# Quick Start

## Hello World

If you already know the basics, or just prefer to learn by trying it yourself and poking around, try this basic plugin template.

```js:line-numbers [YourPlugin.plugin.js]
/**
 * @name YourPlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class YourPlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.UI.alert("Hello World!", "This is my first plugin!");
    }

    stop() {
      // Called when the plugin is deactivated
    }
}
```

Save this as `YourPlugin.plugin.js` in your plugins folder (found below) and enable it!

## Plugin Folder

::: code-group

```console [Windows]
%appdata%\BetterDiscord\plugins
```

```console [Mac]
~/Library/Application Support/BetterDiscord/plugins
```

```console [Linux]
~/.config/BetterDiscord/plugins
```

:::