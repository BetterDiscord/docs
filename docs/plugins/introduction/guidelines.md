---
order: 5
description: Rules for all plugins.
---

# Guidelines

These are guidelines that all plugins are expected to abide by. Any plugin that violates these <u>will not</u> be added to the BetterDiscord website or marked as official or approved in any fashion. Existing plugins that push updates that violate these guidelines will have their updates denied.

## General Guidelines

1. Addons must be in public GitHub repositories.
1. Addons must not negatively affect users.
   - e.g., ban risk, disabling security features, accessing private information
1. Addons must not discriminate whom can use it.
1. Addons must not collect user data without opt-in consent.
1. Addons must not include explicit sexual material or other adult content.
1. Addons must have English language support.


## Scope
1. Plugins must clean up all changes/modification made by the plugin when it is disabled.
   - This includes UI changes, patches, intervals, timeouts, subscriptions, and listeners.
1. Plugins and their corresponding libraries shall not operate outside of their intended functionality.
   - This includes but is not limited to: swapping out unrelated components, introducing unnecessary buttons or badges.
1. Plugins must not modify the BetterDiscord UI.
   - This is to maintain a consistent UI/UX, prevent user confusion, and prevent errors.
1. Plugins must not touch or use BetterDiscord's files.


## Code

1. Plugins must set `module.exports`
1. Plugins must not make use of the `child_process` node module.
   - Existing plugins are exempt, but no new plugins shall use this. This is due in part to the security risk, and in part due to an impending Discord update that will break this module.
1. Plugins must not modify global variables, global objects, or existing `prototype`s.
1. Plugins must not access BetterDiscord globals outside of the official API.
1. Plugins must not access webpack modules outside of the official API.
1. Plugins must not waste hardware resources.
    - e.g., repeated webpack searching without caching, storing unnecessary data in memory.


## Security & Privacy

1. Plugins must not remove security features.
1. Plugins must not access user tokens, emails, or passwords.
1. Plugins must not risk a user's account.
    - This includes but is not limited to: selfbotting, spamming API requests, using non-user APIs, bypassing nitro features, animated status, message logging.
1. Plugins must not provide access to potentially sensitive information from other users of the platform which is not otherwise accessible.
    - This includes but is not limited to: hidden channels, deleted messages, invisible/offline status distinction.
1. Plugins must not use remote libraries.
   - Necessary dependencies should be either bundled or a separate plugin.
1. Plugins must not use closed source nor self-hosted binaries or libraries.
1. Plugins must not be obfuscated, minified, include sourcemaps, or be otherwise deceitful.
1. Plugins must not bypass the addon approval system by implementing their own update system.