---
eleventyNavigation:
  key: UI Components
  order: 4
---

# UI Components

## Terminology

All of the following terms are important to know, they'll be used often both by Discord's internals and by fellow developers as you start engage with the community. The first three are generally used terms for web development. After that, they are either Discord-specific or BetterDiscord-specific.

### Modal

Modals are elements that overlay the main screen in the center, usually darkening the rest of the page behind them. These are often used to get user input or display important information. See an example below.

### Popout

Popouts are similar to modals in that they overlay the main screen, however they almost never darken the page behind them, nor are they front-and-center. These usually stick near the user's mouse location and appear after a user input. They are great for displaying additional information to the user about something specific. See an example below.

### Tooltip

Tooltips are yet another overlay element. These are very similar to popouts but much much smaller and usually point to a specific element to indicate that it is giving additional information about it. This is used to make clean buttons or clarify text. See an example below.

### Notice

Notices are a Discord-specific term for a banner-like element that appears at the top of the screen. In Discord this is most often used to either give persistent information or passively wait for user interaction. See an example below.

### Toast

Toasts are a BetterDiscord-specific term for a small tooltip-like popup that appears at the bottom of the screen. This is borrowed from the Android ecosystem and was modeled after it. Toasts are used to indicate information to the user about either interaction or background tasks. See an example below.

## BdApi Helpers

There are some utility functions from `BdApi` that help you build and display certain UI elements. Using them instead of building your own saves you code and helps ensure a consistent UI/UX for the end user across plugins. While they may work for a large range of cases, for advanced UIs (and ones not handled in `BdApi`) you will need to build your own.

### alert

### showConfirmationModal

### showToast

### showNotice

