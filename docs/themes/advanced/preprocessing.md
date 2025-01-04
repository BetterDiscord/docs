---
order: 1
---

# Preprocessing & Minification

This section of the guide will walk you through the concepts of preprocessing and minification with CSS and then do a small walkthrough.

## Background

### What is a CSS preprocessor?

Preprocessors for CSS are usually little scripting languages that give you more power in your CSS. They allow you to use variables, nested selectors, conditional branches, functions, mixins, and even math. They can also help ensure the correctness of your CSS and maintain backward compatibility with older browsers. They can also help reduce the amount of CSS overall by checking for bloated selectors.

Minification is just transpiling your css to use as few characters as possible. This includes little tricks like not having a semicolon `;` on the last property of a selector style, and of course getting rid of all newlines. Most preprocessors have an option to perform minification as part of the task.

### Why would I want one?

These systems can enable you to make more complex themes that are easily maintainable. They can help cut down on repetition and reused code. They can also allow you to break your css out into multiple files and compile them together into one at the end. Whereas minification allows CSS loaded remotely to load faster because there is less data for a user to download.

## Preprocessor Options

There are many options these days when it comes to CSS preprocessors. The most popular options are Sass/scss, Less, Stylus, and PostCSS*. You can read a brief introduction to each of them [here](https://www.bitdegree.org/tutorials/css-preprocessor/). Or for even more options take a look at [this article](https://www.sitepoint.com/6-current-options-css-preprocessors/).

*PostCSS is a bit of an exception because it is more of a postprocessor, it can do all sorts of things with your CSS including handling the preprocessing through the other 3 mentioned preprocessors. Also unlike the others, PostCSS does not have all of the features out of the gate, it is a modular system so you only include what features you need.

### Which is right for me?

We don't know. Only you can make that decision for you and your project. The big preprocessors all generally have the same features and capabilities so it often comes down to personal preference of syntax. By far the most popular is SCSS which is a syntax for Sass. The most free and open-ended is Stylus since it allows you to include or omit as much syntax as you want. Then there's PostCSS, which by default just uses regular CSS syntax but can be expanded to do just about anything. Raygun gives a really good breakdown on all this different syntaxes with multiple examples in [their article](https://raygun.com/blog/css-preprocessors-examples/). We recommend giving it a look to help you decide.

## Walkthrough

This walkthrough is going to focus on the main reason we hear that developers want to use a processor&mdash;being able to break out into multiple files. Since we're focused on one specific task the processor that makes the most sense here is PostCSS. This allows us to still use normal CSS syntax while gaining the individual features we want.

Take a look below at the structure we'll be using.

```js
.
├──dist                    // Contains all the outputs from postcss.
│   └──import.css          // Import-ready css.
├──src                     // Your source code.
│   ├──guilds.css          // Any other file you may need to include.
│   └──index.css           // The postcss entrypoint.
├──package.json            // Your module's package info.
└──postcss.config.js       // Webpack build configuration file.
```

### Setup

Make sure you have [Node.js and npm](https://nodejs.org/en) installed. Then in your directory initialize your package.

```bash
npm init
```

With that out of the way we'll have to install some dependencies.

```bash
npm install --save-dev postcss postcss-cli postcss-csso postcss-easy-import
```

The first two dependencies are for building and running with PostCSS. `postcss-csso` is for adding minification later, and `postcss-easy-import` allows us to import local files and compile them into one.

Now, open your `package.json` and set up the build script that we'll be using later.

```json
{
    "scripts": {
        "build": "postcss src/index.css -o dist/import.css",
        "build-prod": "postcss --env production src/index.css -o dist/import.css"
    }
}
```

You'll notice we actually added two scripts, `build` and `build-prod`. The first one we can use for development since it outputs normal CSS. The second one we can use for our import because it outputs minified CSS by indicating to build in production mode. This is actually set up in our `postcss.config.js`, so let's set that up now.

```js [postcss.config.js]
module.exports = ctx => {
    return {
        map: false,
        plugins: {
            "postcss-easy-import": {},
            "postcss-csso": ctx.env === "production" ? {restructure: false} : false
        }
    };
};
```

As a quick explanation of what's going on here: `map: false` means we are not making sourcemaps, and that's a whole separate topic. It also means we are using two plugins, the ones we installed before. We load `postcss-easy-import` with no configured options. And `postcss-csso` is configured to run only in `production` mode and turn off otherwise.

### Code

With the set-up out of the way, we're actually almost done. Let's just make our CSS files.

::: code-group

```css [src/index.css]
@import "./guilds.css";

:root {
    --background-tertiary: #333333;
}
```


```css:line-numbers [src/guilds.css]
.wrapper-2PSQCG,
.svg-2ifYOU {
  width: 33px;
  height: 33px;
}

.expandedFolderBackground-1kSAf6 {
  left: 8px;
  width: 33px;
}
```
:::

Seems almost too easy, right? Well let's run `npm run build` anyway and see what happens.

It seems to build just fine, and there's a new `dist` folder with an `import.css` inside.

```css [dist/import.css]
.wrapper-2PSQCG,
.svg-2ifYOU {
  width: 33px;
  height: 33px;
}

.expandedFolderBackground-1kSAf6 {
  left: 8px;
  width: 33px;
}

:root {
    --background-tertiary: #333333;
}
```

If you got this same result then you're all set! PostCSS is working perfectly and now you can have unlimited files for your CSS.

By the way. using `postcss-easy-import` over some other options allows you to use [glob](https://en.wikipedia.org/wiki/Glob_(programming)) imports, which means you can include entire *folders* at once if you wanted.

If you're interested in what other things you can do with PostCSS take a look at [their README](https://github.com/postcss/postcss). For information on using the other preprocessors, they all have great tutorials on their official websites you can follow. No special setup for BetterDiscord needed!