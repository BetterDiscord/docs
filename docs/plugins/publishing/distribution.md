---
order: 2
---

# Distribution & Updates

## Distribution

### GitHub

Your addon file needs to be committed in your GitHub repository in its final form (e.g. a single `PluginName.plugin.js` or `ThemeName.theme.css`). This file is the only format that BetterDiscord or the website can understand and work with. It does not matter if this is on a separate branch from your main source code or not, just anywhere as part of the repository. But it must be consistent, moving the file later can break the updating later on. You can use GitHub Actions, normal commits, or even upload via the web UI in GitHub to add and update the file.

### Website

Once your addon is accepted on the website, it'll have a full page on the website that showcases all the information, README, and thumbnail for your addon. It also provides a quick download link using your addon's ID (provided by the website) that takes the form of `https://betterdiscord.app/Download?id=XXX` where `XXX` is the addon ID number. You can easily share this link with others for quick downloads. Your addon will also begin showing in the in-client store searchable by name or description. You can also share your addon in-app via the `betterdiscord://store/id` format which provides a nice embed in the client with an option to instantly install the addon.

## Updating

::: danger

Due to GitHub's limitations, the site is very sensitive to your changes. If you force-push and break history, or move the file location, the site will not be able to keep track of the addon. The same goes if you change your GitHub username.

:::

### Your Addon

Updating your addon on the website is pretty simple, just update your addon on GitHub. The webhook will automatically send the update to the website where it will once again go through the approval process. This is done to prevent malicious updates from making it through, whether by a compromised developer account, or by a disgruntled developer.

### Your README

Your README for your addon updates separately from your addon and can be updated at any time by updating it in your GitHub repository. Unlike addons, this has no review system so you don't have to wait for someone to approve of it to see it update on the website.
