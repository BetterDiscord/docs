---
order: 2
description: Learning to bundle a plugin.
---

# Bundling

## Background

### What is it?

In the JavaScript ecosystem, bundling is the technique of taking many files, and packing them into one large file while maintaining imports and exports as if all the files were separate. It is also a form of transpilation.

### Why do I want it?

They allow you to structure your plugin like you would any other JavaScript project, but still deliver it as a single file as needed by BetterDiscord. Bundling also opens the door to other types of transpilation such as transpiling [TypeScript](https://www.typescriptlang.org/) or JSX.

### Which one do I want?

No clue. They all have their pros and cons, and Snipcart breaks it down really well in their [In-Depth Guide](https://snipcart.com/blog/javascript-module-bundler). Take a look through there, and try a few different bundlers out and see which one is right for you and your project. One notable bundler missing from the Snipcart list is [esbuild](https://esbuild.github.io/) which touts the fastest build speeds.


## Usage

::: tip

This section will be going over how to setup Webpack for use with BetterDiscord. Check the documentation for your own bundler to find configuration options similar to what's shown here.

:::

Make sure you set up your `package.json` before continuing.

### Installation

To get started with Webpack for BetterDiscord, install Webpack!

```bash
npm install --save-dev webpack webpack-cli
```

### Plugin Structure

The basic plugin structure consists of a source folder, `src`, an entry point `src/index.js`, a plugin config `src/config.json`, the webpack config `webpack.config.js` and of course the `package.json`. For a more detailed visual, see below.

```js
.
├──dist                    // Contains all the outputs from webpack, don't commit this to git.
│   └──MyPlugin.plugin.js  // BetterDiscord-compatible output.
├──src                     // Your source code.
│   ├──config.json         // Plugin configuration file, replaces meta comment.
│   ├──component.js        // Any other file you may need to include.
│   └──index.js            // The webpack entrypoint and main logic of plugin.
├──package.json            // Your module's package info.
└──webpack.config.js       // Webpack build configuration file.
```

### Making The Plugin

To keep things simple, let's take the plugin from the [previous section](./react.md) and try to separate it out and build it with Webpack. If we identify the parts of that plugin, we end up with the meta comment, the react component, and the main plugin class. So that corresponds to three different files shown below.


::: code-group
```json:line-numbers [src/config.json]
{
  "name": "My Component Demo",
  "description": "Showing off a settings panel with a custom react component.",
  "author": "BetterDiscord"
}
```


```jsx:line-numbers [src/component.js]
export default function MyComponent({disabled = false}) {
  const [isDisabled, setDisabled] = BdApi.React.useState(disabled);
  return BdApi.React.createElement("button", {className: "my-component", disabled: isDisabled}, "Hello World!");
}
```


```jsx:line-numbers [src/index.js]
import MyComponent from "./component";
  
export default class test { 
  start() {}
  stop() {}

  getSettingsPanel() {
    return MyComponent;
  }
}
```
:::


Note that the `src/config.json` __does not include__ a version number. This is because there is already a version number in `package.json`, so no need to do double maintenance. We'll show you how to make use of it later on.


### Configuring Webpack

Before we even configure Webpack proper, let's just quickly adjust our `package.json` to add our build script.

```json [package.json]
{
  "scripts": {
    "build": "webpack --progress --color"  // [!code ++]
  }
}
```

Now with that out of the way, let's take a look at a general commonjs output Webpack configuration.

```js:line-numbers [webpack.config.js]
const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "MyPlugin.plugin.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs2",
    libraryExport: "default",
    compareBeforeEmit: false
  },
  resolve: {
    extensions: [".js"],
  },
};
```

And if you were to build the plugin (`npm run build`) with this, it would look pretty good, you would even see that the default export of `src/index.js` is assigned to `module.exports`. But it wouldn't load in BetterDiscord. That's because the meta comment at the top wouldn't be generated.

#### Building The meta

So how do we add the meta to the output? We make use of a webpack banner plugin! First, let's build the meta comment as a string.

```js:line-numbers
const pkg = require("./package.json");
const pluginConfig = require("./src/config.json");
pluginConfig.version = pkg.version;

const meta = (() => {
  const lines = ["/**"];
  for (const key in pluginConfig) {
    lines.push(` * @${key} ${pluginConfig[key]}`);
  }
  lines.push(" */");
  return lines.join("\n");
})();
```

If you notice, this gets the version from `package.json` which answers our question from earlier. Now `meta` contains the comment string, all we have to do is add it to the beginning of the file at the end of the build.

```js:line-numbers [webpack.config.js]
const webpack = require("webpack");

const meta = "..."; // the meta we built before

module.exports = {
  ..., // Rest of your config
  plugins: [
    new webpack.BannerPlugin({raw: true, banner: meta}),
  ]
}
```

So if we put it all together we end up with a full config like this:

```js:line-numbers [webpack.config.js]
const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const pluginConfig = require("./src/config.json");
pluginConfig.version = pkg.version;

const meta = (() => {
  const lines = ["/**"];
  for (const key in pluginConfig) {
    lines.push(` * @${key} ${pluginConfig[key]}`);
  }
  lines.push(" */");
  return lines.join("\n");
})();

module.exports = {
  mode: "development",
  target: "node",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "test.plugin.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs2",
    libraryExport: "default",
    compareBeforeEmit: false
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new webpack.BannerPlugin({raw: true, banner: meta}),
  ]
};
```

Now if you build it (`npm run build`) and copy it over to your `plugins` folder, you should see a little toast letting you know that it loaded successfully. 

If you saw the toast, then congratulations! You successfully configured Webpack to build your plugin! But... Can we do better?


## Going Further

So you've got your plugin able to build using Webpack, that's great! But what if we wanted more? What if we wanted Webpack to copy the built plugin to the `plugin` folder so we don't have to? Or what if we wanted to use TypeScript? Or even JSX for React? Is including CSS possible?

If you asked any of those questions, keep reading.

### Copy Plugin

This is one of the most common needs when working with Webpack and BetterDiscord. It's also incredibly easy to do! Open up your Webpack config file and add two new imports at the top.

```js
const fs = require("fs"); // [!code ++]
const path = require("path");  // [!code ++]
```

We'll be using those in our new plugin that we will write ourselves. Making a plugin for Webpack is very easy, the simplest structure (the one we'll be using) for running after the plugin is built looks like this:

```js
{
  apply: (compiler) => {
    compiler.hooks.assetEmitted.tap("YourPluginName", (filename, info) => {
      // Your code here!
    });
  }
}
```

But you can call `YourPluginName` anything, it's just used to differentiate between taps. Now we have to write some code that can actually copy the file. The way we'll be showing here is platform agnostic but verbose, so feel free to change it up to work only for your own system.

```js:line-numbers
const userConfig = (() => {
  if (process.platform === "win32") return process.env.APPDATA;
  if (process.platform === "darwin") return path.join(process.env.HOME, "Library", "Application Support");
  if (process.env.XDG_CONFIG_HOME) return process.env.XDG_CONFIG_HOME;
  return path.join(process.env.HOME, "Library", ".config");
})();
const bdFolder = path.join(userConfig, "BetterDiscord");
fs.copyFileSync(info.targetPath, path.join(bdFolder, "plugins", filename));
console.log(`\n\n✅ Copied to BD folder\n`);
```

Place this code inside the `assetEmitted` tap from before, and then paste that whole section of code into the `plugins` part of the Webpack config. Next time you build, your plugin will be automatically copied over to your `plugin` folder!


### CSS

The way CSS normally works with Webpack is using the `style-loader` which would build a companion CSS bundle that is automatically loaded with your JS bundle. This isn't really an option for BetterDiscord plugins since we have to remain single file and only activate CSS when enabled.

What we tend to use is the `raw-loader`. So that's what we'll be showing below. This loader loads any external files it's configured to as strings which are included in your main bundle. This affords plugins the freedom to add and remove different styles at will using `BdApi`.

#### Installation

```bash
npm install --save-dev raw-loader
```

#### Configuration

Add a little `rules` section to your Webpack config and also allow `.css` files to be resolved.

```js [webpack.config.js]
module.exports = {
  ...,
  resolve: {
    extensions: [".js"], // [!code --]
    extensions: [".js", ".css"], // [!code ++]
  },
  ...,
  module: { // [!code ++]
    rules: [{test: /\.css$/, use: "raw-loader"}] // [!code ++]
  }, // [!code ++]
  ...
}
```

This configures `raw-loader` to affect CSS files by using the regex `/\.css$/` which checks for any filenames being included that end with `.css`. Perfect for our use-case here. 

#### Usage

Now how do we use it? Create your CSS somewhere in your source directory. Then simply `require`/`import` it and treat it like a string!

```js:line-numbers [src/index.js]
import styles from "./styles.css";

export default class MyPlugin {
  constructor(meta) {
    this.meta = meta;
  }

  start() {
    BdApi.DOM.addStyle(this.meta.name, styles);
  }

  stop() {
    BdApi.DOM.removeStyle(this.meta.name);
  }
}
```

Go ahead and give it a try, you'll find it's really that easy!


### JSX

There are multiple transpilers that can help with using JSX in Webpack. In this brief guide we'll be showing transpilation using [Babel](https://babeljs.io/).

#### Installation

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

#### Configuration

Create a new `.babelrc` file that includes the two presets we just installed.

```json:line-numbers [.babelrc]
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "node": "16.17.1",
          "chrome": "108"
        }
      }
    ],
    "@babel/preset-react"
  ]
}
```

Now adjust your Webpack config to resolve `.jsx` files and use `babel-loader` for `.jsx` files

```js:line-numbers [webpack.config.js]
module.exports = {
  // ...,
  resolve: {
    extensions: [".js"], // [!code --]
    extensions: [".js", ".jsx"], // [!code ++]
  },
  ...,
  module: { // [!code ++]
    rules: [{test: /\.jsx$/, exclude: /node_modules/, use: "babel-loader"}] // [!code ++]
  }, // [!code ++]
  // ...
}
```

You can optionally use `babel-loader` on all `.js` files as well if you have other transpilation needs, but here we're just using it as a JSX converter.

#### Usage

If you remember our original Webpack setup from before, let's change our `src/component.js` to `src/component.jsx`.

```jsx:line-numbers [src/component.jsx]
export default function MyComponent({disabled = false}) {
    const [isDisabled, setDisabled] = BdApi.React.useState(disabled);
    return <button className="my-component" disabled={isDisabled}>
            "Hello World!"
          </button>;
}
```

Now if you were to build this and open your settings panel, you would get an error saying `React is not defined`. That's because `babel-loader` using `React.createElement` and not `BdApi.React.createElement`. There's two ways to get around this, the easiest is to just put `const React = BdApi.React;` at the top of your component file. That's fine for a single file, but as your plugin expands it becomes very tedious. You can solve this with one small adjustment to the `.babelrc`.

```json:line-numbers [.babelrc]
{
  "presets": [
    // ...,
    "@babel/preset-react" // [!code --]
    [ // [!code ++]
      "@babel/preset-react", // [!code ++]
      { // [!code ++]
        "pragma": "BdApi.React.createElement" // [!code ++]
      } // [!code ++]
    ] // [!code ++]
  ]
}
```

Now try building and opening your settings panel again, you'll see it loads just fine!

### TypeScript

This has no special requirements for BetterDiscord! Take a look at [Webpack's official guide](https://webpack.js.org/guides/typescript/) on using TypeScript with Webpack.
