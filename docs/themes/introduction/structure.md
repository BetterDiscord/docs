---
sidebar_position: 4
---

# Theme Structure

:::info

This page only goes over the body of a theme. Make sure you have read up on the [addon system](../../developers/addons.md) first.

:::

## Details

BetterDiscord themes must be in vanilla CSS and be contained in a single file in order to be loaded. That means if you want to use something like Sass, or Stylus it must be transpiled. Similarly if you want to break out your code into multiple files it must be bundled. Both of these topics are covered later in the documentation.

Theme files must be named in the format `*.theme.css` where `*` is representative of any string. Usually this matches the name of the theme without any spaces or special characters, however that is not a requirement.

Theme files are split into two main pieces, the meta and the css. If either of these are missing the theme will not load.

### CSS

Unlike [plugins](../../plugins), themes are left open-ended and unstructured. This allows for full developer control of the theme.