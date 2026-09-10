---
order: 1
description: Rules for all plugins.
---

# Plugin Guidelines

These are guidelines that all plugins are expected to abide by. Any plugin that violates these <u>will not</u> be added to the BetterDiscord website or marked as official or approved in any fashion. Existing plugins that push updates that violate these guidelines will have their updates denied.

If the reviewing staff collectively agree that a submission appears to be AI-generated or otherwise not primarily written by the submitter,
the plugin will be denied and the author may be asked to demonstrate competence or proof of knowledge (e.g. explaining the code, making a live modification, or a similar test) before resubmission will be considered.

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
1. Plugins and their corresponding libraries shall not operate outside their intended functionality.
   - This includes but is not limited to: 
     - Swapping out unrelated components
     - introducing unnecessary buttons or badges
1. Plugins must not modify the BetterDiscord UI.
   - This is to maintain a consistent UI/UX, prevent user confusion, and prevent errors.
1. Plugins must not touch or use BetterDiscord's files.

## Usability
1. If overriding a native client feature, it must achieve ONE OR MORE of the following:
   - Show clear visual effort and polish.
   - Be visually appealing while retaining ALL original features, plus/or improvements.
   - At minimum, be feature-complete (100% equality with what's being replaced).
1. Make sure all elements are visible and usable.

**Exceptions:** #1 and #2 does not apply to addons that intentionally remove or block functionality for privacy/security reasons including but not limited to:.
- Privacy/Security
- Accessibility
- Performance
- Content/moderation control
   - This only accounts for removing *specific* type of content including but not limited to: disabling embeds, nsfw previews.

These are not required to be feature-complete replacements, as the addons purpose is intentional removal.

## Testing
1. Test styles (if using internal vars) and confirm they actually work.
1. Incomplete implementations that break or hide features without a proper replacement or reason will not be accepted. If this happens, we will remove your plugin from the store or require a fix.
1. Preventing App Crashes
   - Wrap React elements in ErrorBoundaries to prevent plugin errors from crashing the entire Discord client.

## Maintenance
1. Plugins must include a license permitting community maintenance if abandoned.

## Code

1. Your plugin's codebase must be made and written primarily by you.
   - You may not submit an automatically-generated plugin (AI or otherwise), a customized version of someone else's plugin, or a codebase written by someone other than you.
1. Plugins must set `module.exports`
1. Plugins must not modify global variables, global objects, or existing `prototype`s.
1. Plugins must not access BetterDiscord globals outside the official API.
1. Plugins must not access webpack modules outside the official API.
   - This includes injecting into Discord's global webpack declare.
1. Plugins must not waste hardware resources.
    - e.g., repeated webpack searching without caching, storing unnecessary data in memory.
    - This includes but is not limited to:
       - Excessive event listeners (scroll, resize, keydown, message)
       - Re-running expensive computations
       - Polling for state changes instead of using Flux/event-based subscriptions
       - `MutationObserver`
       - `setInterval`


## Security & Privacy

1. Plugins must not remove security features.
1. Plugins must not access user tokens, emails, phone numbers, billing info or passwords.
1. Plugins must not risk a user's account.
    - This includes but is not limited to:
      - Self-botting
      - Spamming API requests
      - Spamming Protobuf (cloud sync)
      - Using non-user APIs
      - Bypassing nitro features
      - Animated status
      - Message logging
      - Automating Quest Completion.
1. Plugins must not provide access to potentially sensitive information from other users of the platform which is not otherwise accessible.
    - This includes but is not limited to: 
      - Hidden channels
      - Deleted messages
      - Invisible/Offline status distinction
1. Plugins must not use remote libraries.
   - Necessary dependencies should be either bundled or a separate plugin.
1. Plugins must not use closed source nor self-hosted binaries or libraries.
1. Plugins must not be obfuscated, minified, include source maps, or be otherwise deceitful.
1. Plugins must not bypass the addon approval system by implementing their own update system.

# Self-Botting & What is it?

Self-botting is the action of user automated actions. This excludes actions that are invoked by a user action but this does
include anything that spams Discord's API or Protobuf (cloud sync).

As taken from the Discord™️ guidelines
> Don’t use the services to do harm to Discord. Among other things, this includes trying to gain access to, intentionally overburdening or attacking our systems; scraping our services without our written consent, including by using any robot, spider, crawler, scraper or other automatic device, process or software; selling, licensing or otherwise commercialising content or data obtained from our services; transmitting viruses or other malicious code to our services; using any unauthorised software designed to modify the services; abusing or defrauding us or our payment systems; copying, dismantling or reverse-engineering any of our services or using our intellectual property without permission; and misusing our reporting or customer service mechanisms.

