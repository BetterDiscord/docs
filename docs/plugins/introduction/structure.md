---
order: 2
description: The requirements and format of a plugin.
---

# Plugin Structure

 - There are currently only two types of addons: plugins and themes.
 - Distributed addons are limited to a single file.
 - The distributed file must be named in the form `<name>.<type>.<ext>` where name is the addon name, type is the addon type, and ext is the standard file extension.
 - Addon files are split into two major sections: the meta and the body.
 - Meta sections (described more below) contain important information about the addon for BetterDiscord, the body section is the main portion of developer content.
 - Addons are dynamically added, removed, and updated to match the files on the users' system.

## Meta

The meta of an addon contains metadata about the addon as the name would suggest. The format of this meta is a JSDoc style comment at the *very beginning* of the file. Not having this at the beginning can cause BetterDiscord to not load the addon. A minimal meta header would look something like this:

```js
/**
 * @name ExampleAddon
 * @author YourName
 * @description Describe the basic information. Maybe a support server link.
 * @version 0.0.1
 */
```

And a fully filled out meta using all the fields would look something like this:
```js
/**
 * @name ExampleAddon
 * @author YourName
 * @description Describe the basic information. Maybe a support server link.
 * @version 0.0.1
 * @invite inviteCode
 * @authorId 51512151151651
 * @authorLink https://twitter.com/Whoever
 * @donate https://paypal.me/
 * @patreon https://patreon.com/
 * @website https://github.com/BetterDiscord/BetterDiscord
 * @source https://gist.github.com/zerebos/e5f4d02fc3085a53872b0236cd6f8225
 */
 ```

### Fields


|Field|Required|Description|
|-----|:------:|-----------|
|name|&#x2705;|The name of the addon. It typically does not contain spaces, but it is allowed.|
|author|&#x2705;|The name of you the developer.|
|description|&#x2705;|A basic description of what the addon does.|
|version|&#x2705;|Version representing the current update level. [Semantic versioning](https://semver.org/) recommended.|
|invite|&#x274C;|A Discord invite code, useful for directing users to a support server.|
|authorId|&#x274C;|Discord snowflake ID of the developer. This allows users to get in touch.|
|authorLink|&#x274C;|Link to use for the author's name on the addon pages.|
|donate|&#x274C;|Link to donate to the developer.|
|patreon|&#x274C;|Link to the Patreon of the developer.|
|website|&#x274C;|Developer's (or addon's) website link.|
|source|&#x274C;|Link to the source on GitHub of the addon.|

## Body

 - BetterDiscord plugins are limited to a single file.
 - BetterDiscord plugins (files) must be named in the form `*.plugin.js`.
 - BetterDiscord plugins require a special header known as the meta.
 - BetterDiscord plugins must implement both a `start()` and `stop()` function.
 - BetterDiscord plugins must either be a class or a function that returns the required object.
 - BetterDiscord plugins must be exported via `module.exports`.

### Overview

BetterDiscord plugins must be in vanilla JavaScript and be contained in a single file in order to be loaded. That means if you want to use something like JSX, or TypeScript it must be transpiled. Similarly, if you want to break out your code into multiple files it must be bundled. Both of these topics are covered later in the documentation. In order to cut back on redundancy, your [addon meta](#meta) is provided as a plain object to your main function or constructor. You will see examples of this throughout the documentation.

Plugin files must be named in the format `*.plugin.js` where `*` is representative of any string. Usually this matches the name of the plugin without any spaces or special characters, however that is not a requirement.

Plugin files are split into two main pieces: the meta and the plugin code. If either of these are missing the plugin will not load.

### Details

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

But that, of course, is not the only way to do it. Many people like the syntactic sugar and extensibility of classes. For example:

```js
module.exports = class {
   start() {

   }
   stop() {

   }
};
```

Others prefer a more modular functional style:

```js
const start = () => {};
const stop = () => {};

module.exports = function() {};
module.exports.start = start;
module.exports.stop = stop;
```

Of course, there's those that prefer to wrap themselves up for safekeeping:

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

If you feel you have a solid grasp of how this works, take a look at the [Guidelines](./guidelines) before moving on to the [Basics](../tutorials/creating-a-plugin.md) guide.

#### Optional Functions

These are functions that plugins _can_ make use of but are not required at all. These are all supplied to BetterDiscord in the same place you provide `start` and `stop`

##### getSettingsPanel

This function allows your plugins to have a settings panel displayed through BetterDiscord. The expected return type is either a `HTMLElement` or a React element. Returning a `string` representing the HTML is deprecated.

##### observer

This function is called on every mutation of the `document`. If you're unfamiliar with that terminology, take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe).

##### onSwitch

This function is called every time the view is "switched". A better way to look at this is every time the user navigates such as changing the channel or server.