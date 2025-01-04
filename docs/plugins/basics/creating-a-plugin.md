---
order: 1
description: A guide to the basics.
---

# Creating a Plugin

## The Idea

The first thing to do when making a plugin, is to know what exactly you're trying to make. This helps limit the scope of what you're looking through in Discord's DOM tree or internal code, and also helps you structure your plugins. For example, a fully-fledged plugin that handles end-to-end encryption may need a bit more scaffolding than a plugin that just adds a button or some text to the screen.

Knowing what you want the plugin to do also allows you to reach out to our community of developers and ask for help. It's much easier to help someone with a specific task or end-goal rather than someone that "just wants to make a plugin".

## The Style

Next, you'll need to decide which plugin style to use. As seen in the [plugin structure](../introduction/structure) docs, there a couple different ways to go about it. They are shown again below for clarity. Each one has pros and cons, but can each work well for simple to advanced plugins. In the end it ultimately comes down to the individual developer's style preference. A mix of the styles will be shown here in the docs.

::: code-group
```js:line-numbers [Class]
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class MyPlugin {
  constructor(meta) {
    // Do stuff in here before starting
  }

  start() {
    // Do stuff when enabled
  }

  stop() {
    // Cleanup when disabled
  }
};
```


```js:line-numbers [Arrow]
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

// Do stuff here before being called

module.exports = meta => ({
  start() {
    // Do stuff when enabled
  },
  stop() {
    // Cleanup when disabled
  }
});
```


```js:line-numbers [Return]
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = meta => {
  // Do stuff in here before returning

  return {
    start: () => {
      // Do stuff when enabled
    },
    stop: () => {
      // Cleanup when disabled
    }
  }
};
```
:::

It's worth noting when deciding that each plugin is loaded similarly to a node module. This means that defining variables outside the `module.exports` will not result in scope creep or variable bloat.

Once you've got that decided, go ahead and save your template in your [plugins folder](../introduction/quick-start#plugin-folder) as `ExamplePlugin.plugin.js` and change `ExamplePlugin` to the name of your choice.


## Things to Keep in Mind

There's a lot to keep in mind as you develop your plugin. One of the most important being how to cleanup when the plugin is disabled. This may seem straightforward, but if you don't have it in mind as you develop, it may slip through the cracks. Say you add some text to the DOM and no longer have a reference to it. When it's time to disable and cleanup, you have to search through the DOM again just to find this node. Instead, if you had remembered that this will need to be cleaned up, you could have kept a reference in order to easily remove it later.

If you're looking to submit this plugin, or share it with others, it's worth keeping in mind what parts of the plugin are opinionated. For example, the way something is formatted or styled may look good to some and not to others.

If you have these things in mind while you develop, you can add unique classes to elements for themes and users to take advantage of, or even add [plugin settings](./settings) which we'll get to a bit later.

## What's Next?

If you feel comfortable with everything so far, you're probably safe to move on to making your plugin by first [interacting with the dom](./dom). Otherwise, take the time and experiment with the plugin templates and see what feels right, maybe even brush up on your JavaScript skills.