---
order: 4
description: The requirements and format of a plugin.
---

# Plugin Structure

::: tip

This page only goes over the body of a plugin. Make sure you have read up on the [addon system](../../developers/addons.md) first.

:::

## Requirements

 - BetterDiscord plugins are limited to a single file.
 - BetterDiscord plugins (files) must be named in the form `*.plugin.js`.
 - BetterDiscord plugins require a special header known as the meta.
 - BetterDiscord plugins must implement both a `start()` and `stop()` function.
 - BetterDiscord plugins must either be a class or a function that returns the required object.
 - BetterDiscord plugins must be exported via `module.exports`.

## Details

BetterDiscord plugins must be in vanilla JavaScript and be contained in a single file in order to be loaded. That means if you want to use something like JSX, or TypeScript it must be transpiled. Similarly if you want to break out your code into multiple files it must be bundled. Both of these topics are covered later in the documentation. In order to cut back on redundancy, your [addon meta](../../developers/addons.md) is provided as a plain object to your main function or constructor. You will see examples of this throughout the documentation.

Plugin files must be named in the format `*.plugin.js` where `*` is representative of any string. Usually this matches the name of the plugin without any spaces or special characters, however that is not a requirement.

Plugin files are split into two main pieces, the meta and the plugin code. If either of these are missing the plugin will not load.

### JavaScript

The basics of the plugin code are simple. The plugin must have both a `start()` and `stop()` function which are called on enable and disable respectively. The plugin must also get those functions back to BetterDiscord using `module.exports`.

The simplest and most direct way is to do it is to return an object literal:
```js
module.exports = () => ({
   start() {

   },
   stop() {

   }
});
```

But that of course is not the only way to do it. Many people like the syntactic sugar and extensibility of classes

```js
module.exports = class {
   start() {

   }
   stop() {

   }
};
```

while others prefer a more modular functional style.

```js
const start = () => {};
const stop = () => {};

module.exports = function() {};
module.exports.start = start;
module.exports.stop = stop;
```

Of course there's those that prefer to wrap themselves up for safekeeping.

```js
module.exports = () => {
   return {
      start: () => {},
      stop: () => {}
   }
};
```

But whatever your preference, just pass those functions on up!

All of those examples are valid ways of getting those functions back to BetterDiscord. The main idea is that when BetterDiscord calls `require("./yourplugin.plugin.js")`, the `exports` needs to <u>either</u>:
1. have both a `start()` and `stop()` prototype function.
2. _be_ a function that returns an object containing both functions.

It may seem roundabout to do it this way, but this is what allows for developers to make use of uninstantiated classes like the example above.

If you feel you have a solid grasp of how this works, take a look at the [Guidelines](./guidelines) before moving on to the [Basics](../basics/creating-a-plugin.md) guide.

#### Optional Functions

These are functions that plugins _can_ make use of but are not required at all. These are all supplied to BetterDiscord in the same place you provide `start` and `stop`

##### getSettingsPanel

This function allows your plugins to have a settings panel displayed through BetterDiscord. The expected return type is either an `HTMLElement` or a React element. Returning a `string` representing the HTML is deprecated.

##### observer

This function is called on every mutation of the `document`. If you're unfamiliar with that terminology, take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe).

##### onSwitch

This function is called every time the view is "switched". A better way to look at this is every time the user navigates such as changing the channel or server.