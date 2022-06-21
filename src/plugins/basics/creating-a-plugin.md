---
eleventyNavigation:
  key: Creating a Plugin
  order: 1
---

# Creating a Plugin

## Quick Start

If you already know the basics, or just prefer to learn by trying it yourself and poking around, try this basic plugin template.

```js
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class ExamplePlugin {
    load() {} // Optional function. Called when the plugin is loaded in to memory
    
    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
```

However, if you want to learn more before diving in, keep reading!

## Background

