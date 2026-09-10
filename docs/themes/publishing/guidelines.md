---
order: 1
---

# Theme Guidelines

These are guidelines that all themes are expected to abide by. Any theme that violates these <u>will not</u> be added to the BetterDiscord website or marked as official or approved in any fashion. Existing themes that push updates that violate these guidelines will have their updates denied.

## General Guidelines

1. Addons must be in public GitHub repositories.
2. Addons must not negatively affect users.
   - e.g., ban risk, disabling security features, accessing private information
3. Addons must not discriminate whom can use it.
4. Addons must not collect user data without opt-in consent.
5. Addons must not include explicit sexual material or other adult content.
6. Addons must have English language support.

## Usability
1. Do not degrade the user experience by removing core functionality.
   - e.g. hiding potentially important actions, unreadable text contrast, use of harmful animations, and flashing text.
2. Do not target a specific user or group of users in a negative way (do not attempt to "ban" people).
3. Do not encourage users to further violate Discord's [Terms of Service](https://discord.com/terms), or promote content from outside of the official repository.
4. Try to maintain support for Discord's accessibility features.
5. Maintain performance on modern hardware.
   - This can be done by limiting the use of intensive animations, filters, and effects.

## Quality Control & Performance
1. Performance hits are not allowed.
   - Discord is slow as it is, and it's hard enough for users to use the client without themes making it worse.
2. Avoid expensive selectors.
   - e.g. long descendant chains (`div div div span`) make style recalculation slower and more intensive.
   - Use `:has()` sparingly, and only when no simpler selector achieves the same result. It can force re-evaluation of an element and its children.
3. No animated watermarks.
   - Animated theme watermarks are CPU and GPU-intensive and run continuously in the background for no functional benefit.

## Code
1. Your theme's codebase must be made and written primarily by you.
   - You may not submit an automatically-generated theme, a customized version of someone else's theme, or a codebase written by someone other than you.
2. Only import code from trusted services. (GitHub, GitLab, Google Fonts, etc...)
3. Do not abuse remote resources to gather user information, use untrusted content, or circumvent security permissions.
4. You may reverse-engineer or use other people's code, provided you have proper permission and your theme's core design does not rely on third-party code.
5. Minimize usage of language-specific selectors (e.g. `aria-label` attributes).
   - If used, provide sensible fallbacks for other languages.

## Design
1. Themes should provide a cohesive design that notably alters the look and feel of Discord.
   - A simple recoloring via CSS variables or adding a background image is not considered notable.
2. Themes should be designed to seamlessly integrate with any unthemed sections, ensuring a smooth and consistent experience across the entire interface
   - Try to leave as few unthemed sections as possible in order to improve the user experience.
