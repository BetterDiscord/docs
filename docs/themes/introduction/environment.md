---
order: 3
description: The theming environment.
---

# Environment

The theming environment is a pretty open one when it comes to BetterDiscord themes. As you've already learned in previous sections, themes have full reign over their CSS which means they have complete control over the styling of the client. So what is there to know?

## CSS Variables

### Discord's Variables

Discord uses a large number of CSS variables that determine the styling of the client. Themes are free to (and often do) override these variables for their own purposes. The names of the variables don't follow a specific naming convention nor do they have a prefix. You can view the live, up-to-date list at any time in DevTools by scrolling up to the `:root` selector. In most cases, that is enough to see all the variables and their values for the current theme (light/dark). There are some small cases where a variable is set with a more specific selector, they have to be handled or overridden on a case-by-case basis.

### Your Variables

If you use any variables in your theme&mdash;and you should for the user's sake&mdash;then you should know that there is no automatic scoping by BetterDiscord for a theme's variables. That means if you use overly generic variables like `--link-color` it might conflict with the variable of another theme or even Discord's variables. Now you might think that themes are generally mutually exclusive so we shouldn't worry about variable collision. But users also often use CSS snippets or little pieces of other themes that include variables that can collide. It's generally recommended to prefix your CSS variables with something unique to your theme. For example the [Nox](https://betterdiscord.app/theme/Nox) theme prefixes their variables with `nox-` so they have variables like `--nox-accent`. It's a good rule of thumb to follow.

## Class Name Conventions

Discord's class names are generated partially automatically. You'll notice a common pattern of a classname starting with a human-readable name, then a dash, then some randomly generated stuff to prevent conflicts with similar names. These do not generate on every release of the client, they regenerate whenever new classnames that would normally conflict are added or when significant changes to that part of the UI occur. Anecdotally speaking, the current classnames have been fairly stable without a large change for quite some time.

## Light/Dark Theme

Yes, there are users that use the light theme. That doesn't necessarily mean your theme has to support it though. If you have a vision for a design, and it's a dark theme, go for it! But it doesn't hurt to make the consideration for whether it would also work as a light theme. Supporting both is fairly easy because Discord adds `theme-light` and `theme-dark` to indicate which theme the user has enabled. You can then use that as part of your selector to override variables to control colors.

## Accessibility

Discord has several accessibility options which many users take advantage of for one reason or another. It's good practice to try and abide by these where possible.

### Reduced Motion

You can detect if a user has this enabled using a media query. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) for details. To explain this briefly, users with this enabled want to have less animations and transitions. This could be due to a medical issue, or simply because they have a lower powered PC. Either way, this is an important one to try and abide by.

## Operating System

This is another important thing to keep in mind when developing a theme. The client does not have the exact same design and layout on the three major platforms. The most obvious difference between them is the titlebar and control buttons. A lesser known but also important difference is the settings panel. Windows has an extra settings tab compares to macOS or Linux so the number of tabs varies across operating systems. This can affect themes attempting to add icons to the settings tabs.
