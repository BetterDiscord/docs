---
eleventyNavigation:
  key: Quick Start
  order: 1
---

# Quick Start

## Hello World

If you already know the basics, or just prefer to learn by trying it yourself and poking around, try this basic plugin template.

```js
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class ExamplePlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("Hello World!", "This is my first plugin!");
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}
```

Save this as `YourPlugin.plugin.js` in your plugins folder (found below) and enable it!

## Plugin Folder

### Windows
`%appdata%\BetterDiscord\plugins`

### macOS
`/Users/[User]/Library/Preferences/BetterDiscord/plugins`

### Linux
`~/.config/BetterDiscord/plugins/`