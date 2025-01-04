---
order: 6
description: Work with other addons.
---

# Addon Interaction

Within BetterDiscord you can interact with different addons in two main ways. Either through direct interaction--like where one plugin puts something in the global scope, and another plugin uses it--or through the `BdApi`. That second one is what we'll be taking a look at today.

## AddonAPI

The addon api is available as part of `BdApi`. There's two instances, one for plugins and one for themes at `BdApi.Plugins` and `BdApi.Themes` respectively. This api has a few helpful utilities for interacting with other plugins, and even has the current addon folder as a property. For a more exhaustive list of available methods and properties, take a look at the [api reference](/api/bdapi).

## Getting Addons

You can get a specific addon if you know the addon ID using `get(id)`. For example to get the instance of ZeresPluginLibrary you can do

```js
BdApi.Plugins.get("ZeresPluginLibrary");
```

This will give you an object that includes the addon's meta information, as well as some other BetterDiscord internal information. Most notably there is also an `instance` property that is the current instance of the plugin. This is probably the most important property as it gives you access to directly interact.

::: warning

Modifying the values of this addon instance is unsupported. The `instance` property is also subject to change until a new standard is introduced.

:::

Alternatively you can get _all_ the available addons in a giant array.

```js
BdApi.Plugins.getAll();
```

This is useful if you need to interact with many addons, or if your checking for existence of others.

## Toggling Addons

If you have the ID of the addon you'd like to toggle, this is pretty straightforward.

```js
BdApi.Themes.toggle("Nox");
```

Of course, you can have more granular control and specifically enable or disable when you need to. You can even combine all three.

```js
BdApi.Themes.enable("Nox");  // Nox is now enabled
BdApi.Themes.toggle("Nox");  // Nox is now disabled
BdApi.Themes.enable("Nox");  // Nox is now enabled
BdApi.Themes.toggle("Nox");  // Nox is now disabled
BdApi.Themes.disable("Nox"); // Nox is now disabled
BdApi.Themes.toggle("Nox");  // Nox is now enabled
BdApi.Themes.enable("Nox");  // Nox is now enabled
BdApi.Themes.disable("Nox"); // Nox is now disabled
```

You can even check if it's already enabled to save yourself some trouble.

```js
BdApi.Themes.isEnabled("Nox");
```

## Interacting with Plugins

Depending on what you are trying to do, it may be useful to quickly check if the plugin is enabled before trying to interact with it.

```js
BdApi.Plugins.isEnabled("Zalgo");
```

Keep in mind there are many functions in plugins that <u>do not</u> require them to be enabled for them to be used. This is how most plugin libraries operate.

From there, you can even directly call functions from your plugin. One common use-case for this is when you want to add an optional feature to your plugin that makes use of another plugin.

```js:line-numbers
class MyPlugin {
    start() {
        let myGreeting = "Hello User!";
        if (BdApi.Plugins.isEnabled("Zalgo")) {
            const zalgoPlugin = BdApi.Plugins.get("Zalgo").instance;
            // highlight-next-line
            if (zalgoPlugin?.format) {
                myGreeting = zalgoPlugin.format(myGreeting);
            }
        }
        BdApi.UI.showToast(myGreeting);
    }

    stop() {

    }
}
```

In this example, a user with this plugin will get a normal "Hello User!" greeting. But if they have a Zalgo plugin installed and enabled, they'll get a Zalgo-style greeting instead.

On line 6 (the highlighted line), we check for the `format()` function before we use it. This is one of the most important techniques to use when interacting with other plugins through this interface. Neither BetterDiscord nor the other plugin will always guarantee a specific stable internal API to the plugin. Therefore, it's best to check that the plugin's architecture has not been changed before using it like we do here. That said, you are absolutely free and encouraged to developer an interchange API between plugins if both developers agree. Agreements like that reduce errors and issues for end users.