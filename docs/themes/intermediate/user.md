---
order: 4
---

# User Configuration

Letting users configure your theme to their personal preference is one of the most important pieces to add to your theme to give it a nice polish. You'll find that many users love to be able to play around with and tweak these values to their preference.

## Using Variables

### Why do I need them?

If you weren't already aware, CSS variables (sometimes known as custom properties), are a way to reuse the same values over and over while making them easily changeable later. MDN, of course, has [a great article](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) on this. The best way to use these is to find values that you reuse over and over in your theme and turn them into a custom property you can change later. One of the most common use-cases in a theme is for the theme's main accent color. They're also frequently used for background colors and sizing of different elements. Every theme is a bit different in that regard, but they all follow the same general rule of thumb: If it's something you're doing repeatedly and consistently, making it a variable makes it easy to change later for both the end-users as well as for you.

### How can I use them?

Using CSS variables in BetterDiscord is exactly like in regular CSS. Simply declare it somewhere high in the document tree and reuse it in your theme. At a glace it might look something like this:

```css [YourTheme.theme.css]
:root {
  --my-variable: red;
}

h1 {
  color: var(--my-variable);
}
```

In this case shown above, we've made a new variable `--my-variable` with the value of `red` on the `:root` selector. You'll find that 99% of themes use `:root` to set their variables since it's the highest in the DOM tree. In the next selector, we use the variable in the `color` property for `h1`. So all top level headings will not just be `red` but they will be `--my-variable`!

This can also be done to set a single part of a property such as just the color of a border or box-shadow.

```css [YourTheme.theme.css]
:root {
  --my-variable: red;
}

h1 {
  border: 1px solid var(--my-variable);
}
```

It is very important to note that these cannot be used as properties or part of media queries. That is to say, both of these below are invalid.

```css
:root {
  --my-prop: color;
  --my-query: 900px;
}

h1 {
  var(--my-variable): green;
}

@media screen and (min-width: var(--myquery)) {
  h1 {
    background-color: lightgreen;
  }
}
```

### Special Cases

#### Fallback

The usage of CSS variables can also have fallback for when a variable is not set. This can be useful for one-offs where you want the user to add something. It looks like this

```css
h1 {
  color: var(--a-var, green);
}
```

This means the `h1` will take a color of `--a-var` if it exists, otherwise it takes `green`.

#### Invalid

Another special case is when a variable has an invalid value. Consider the case below.

```css
:root {
  --my-variable: red;
}

h1 {
  border: var(--my-variable) solid green;
}
```

Since `red` is not a valid border size, the whole `border` property value is considered invalid. This can lead to miss styled or broken looking elements. An easy way around this is to double define your style.

```css
:root {
  --my-variable: red;
}

h1 {
  border: 5px solid green;
  border: var(--my-variable) solid green;
}
```

With a guard like this, when the second `border` is considered invalid, the previous `border` gets taken as the style.

## Documenting

There are really only two main ways to document your variables. Either in a table on your GitHub README that explains the variables and talks about values, or using comments directly in the theme file.

### README

This is a good option for more complex themes that have many variables with many possible options. One technique is to use a table that lists the variables, their default values, and a description. Optionally it can list some potential other values. Take a look at the example below.

| Variable | Description | Value | Options |
|:--------:|:-----------:|:-----:|:-------:|
|`--size`|Determines the size of buttons|`10px`|Any `px` size|
|`--accent-color`|Accent color used throughout the theme|`blue`|Any color type|
|`--flex`|How flex items should be aligned|`flex-start`|`flex-start`, `center`, `flex-end`|

Of course you can always add or remove information as you feel fits your theme and customization level.

### Theme File

You can use comments directly next to the variables in the theme files to help guide users to customizing your theme. In the [last chapter](./remote.md) we talked about the Horizontal Server List mini-theme. Take a look at their theme file.

```css [HorizontalServerList.theme.css]
/**
 * @name Horizontal Server List
 * @author Gibbu#1211
 * @version 2.1.0
 * @description Moves the server list from the left to the top of Discord.
 * @source https://github.com/DiscordStyles/HorizontalServerList
 * @invite ZHthyCw
 * @website https://gibbu.me
*/

@import url('https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css');

/* Bottom HorizontalServerList. Simply remove the comments surrounding the @import to enable it. */
/* @import url("https://discordstyles.github.io/HorizontalServerList/bottomhsl.css"); */
:root {
  --HSL-server-icon-size: 40px; /* Size of the server icons | DEFAULT: 40px */
  --HSL-server-spacing: 10px; /* Spacing between each server icon | DEFAULT: 10px */
  --HSL-server-direction: column; /* Direction of the server list. | OPTIONS: column, column-reverse | DEFAULT: column */
  --HSL-server-alignment: flex-start; /* Alignment of the server list. | OPTIONS: flex-start, center, flex-end | DEFAULT: flex-start */
}
```

You can see in this theme that each variable has a comment with it adding a description, a default value, and some options for the user. This is often enough to get them going in the right direction. 

You might also note, directly above the variable there is another comment describing an additional addon directly in the theme. Having your variable descriptions directly in the theme like this can also lead users to more profound options like that.

## Applying

Currently, there are really only two ways that users configure the variables of themes. You can guide your users towards one or the other, but ultimately it will be their choice.

### Theme File

Without any additional instruction, many users go directly to the theme file to try and customize the variables at the top. If you have all your variable descriptions directly in the code like we showed above, this might be the best option for you and your users. Just guide the users to those variables in some way by mentioning it in the theme description or README.

The main drawbacks to this are that it is less accessible to the user as they need to directly edit the file. The other is that if you have to update the theme file for some reason (assuming you are using an import) the user's changes would be overwritten by the update.

### Custom CSS

Since BetterDiscord has a Custom CSS feature, you can also direct users to apply variables there. This option usually works better with themes that have their documentation in their README because you can direct the user to copy and paste a section of code to get them started like this.

```css [Custom CSS]
/* My custom variables for YourTheme */
:root {
  --icon-size: 40px;
  --main-padding: 10px;
  --flex-direction: column;
  --shadow-distance: 14px;
}
```

Coupling this with the documentation in your README can be a very robust way to support user configured variables. It also avoids the potential for their variables being overwritten upon a theme file update since Custom CSS is completely separate.