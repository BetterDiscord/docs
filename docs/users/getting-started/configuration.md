---
sidebar_position: 2
description: Customize BetterDiscord to your liking.
---

# Configuration

BetterDiscord has a number of settings and options for you to adjust your experience to your preference. This page tries to explain in more detail what each option does.

## General

These are settings that control whole modules of BetterDiscord.

### Voice Disconnect

This option causes you to disconnect from a voice call when you close Discord. By default, Discord will try to auto-reconnect you which can be annoying to some.

### Show Toasts

This option allows BetterDiscord to show you little notifications about what is happening in the client.

### Disable Media Keys

This option will prevent Discord's embedded players from hijacking your keyboard media keys which prevents them from being used in other applications.



## Addon Manager

Settings related to how BetterDiscord handles addons.

### Show Addon Errors

This option lets BetterDiscord show you errors found on startup. If you are expecting errors for whatever reason, it may be useful to disable this.

### Edit Action

This option determines what should happen when you click the edit button on an addon.



## Custom CSS

### Custom CSS

This option allows you to completely disable the custom CSS system. If you don't use it, turning this off saves you a bit of RAM and CPU power.

### Live Update

This option lets the CSS editor update as you type rather than waiting for you to click the button.

### Editor Location

This option determines which editor should open when editing custom CSS.


## Editor Preferences

Settings that affect all editors used inside BetterDiscord.

### Line Numbers

This option simply determines whether or not line numbers should be shown.

### Minimap

This option determines if the minimap that represents the code on the right-hand side should be hidden or shown.

### Reference Tooltips

This option shows tooltips when hovering over parts of your code. For CSS, this would be selector information. For JavaScript, this would be variable information.

### Quick Suggestions

This option enables the editor to show suggestions and autocomplete as you type.

### Font Size

This option determines the default font size to use in the editor.

### Show Whitespace

This option determines when whitespace characters such as space and newlines should have a visible indicator.



## Window Preferences

Settings related to the main window of Discord.

### Enable Transparency

This option enables Electron's transparency mode. By itself, this option doesn't do much, but if you have a theme that changes the opacity of the root element, you can actually see through the Discord client to your desktop. On Windows, having this enabled breaks aero snapping and other common window features. This is a limitation of Electron itself and not something BetterDiscord can fix.

### Remove Minimum Size

This option gets rid of Discord's forced minimum window size. For many users, this limit is too large to be able to customize their viewscreen.



## Developer

Settings that are mostly for developers. Some power users may find them of interest.

### Debug Logs

This option causes BetterDiscord to output everything from the chromium console into a `debug.log` file in the BetterDiscord folder. Best to not have this on all the time and only when debugging crashing issues.

### DevTools

This option allows you to open the chromium devtools with the usual `ctrl`+`shift`+`i` combination. If you're not a developer, best to leave this off.

### Debugger Hotkey

This option adds a keybind to `F8` that allows you to activate the `debugger` only when DevTools is open.

### React Developer Tools

This option allows you to add RDT to Discord. Currently, it is required that you have a local Chrome installation with the RDT extension installed to that. BetterDiscord will then point to that local installation of RDT. This may change in the future.

### Inspect Element Hotkey

This option adds a new keybind `ctrl`+`shift`+`c` that opens DevTools and starts selecting elements. If DevTools are open it immediately activates the select element action.

### Stop DevTools Warning

This option stops Discord from printing out those large warnings you see in the console.
