---
sidebar_position: 1
---

# Installation Issues

:::caution

If you need help beyond what these docs provide, please contact us in `#support` on our [discord server](https://betterdiscord.app/invite)

:::

## General Issues

<details>
<summary>Cannot select stable, or BetterDiscord not installed after installing</summary>

This is usualy an issue with Discord moving around its installation location on Windows. Sometimes the installer is unable to differentiate what to do. To fix it, select `Browse` in the installer, then enter `%localappdata%/discord/app-1.0.9005/resources` in the address bar at the top. If this has the same issue repeat this but using `%programdata%/%username%/Discord/app-1.0.9005/resources`

![ProgramData](/docs/programdata.gif)
</details>

<details>
<summary>Installer won't open</summary>

If you are on Linux try rnning with the `--no-sandbox`

If the installer does not seem to open, follow these steps:
1. Download and install [7-Zip](https://www.7-zip.org/)
1. Right click and extract the BetterDiscord installer into a folder.
1. Run the exe found in the folder.

OR

Follow the [manual installation](../introduction/installation/#manual-installation) instruction.
</details>

<details>
<summary>Installer is all black</summary>

Try one of the following:
 - Right click the installer and select run as Administrator.
 - Open the command prompt by pressing `win`+`r` type `cmd` and press enter. Then type `ipconfig /flushdns` and press enter in the window that appears.
 - Disable your anti-virus temporarily.

OR

Follow the [manual installation](../introduction/installation/#manual-installation) instruction.
</details>


<details>
<summary>Cannot click the agreement checkbox</summary>

Click the text next to the checkbox instead, they are connected.

![Checkbox Workaround](/docs/agreement_text.png)
</details>

## Specific Errors

<details>
<summary>❌ Cannot read property "assets" of undefined" OR installer freezing at "downloading asar file..."</summary>

Your installer is out of date, please go to the [BetterDiscord website](https://betterdiscord.app) and download a new one.
</details>

<details>
<summary>❌ EACCES: permission denied, mkdir", or any error where at "shims" there is a "mkdir" error</summary>

The Discord installation has been corrupted. Try to reinstall Discord. If Discord fails to reinstall or you still run into this error then your best bet is [cleanly uninstalling Discord](https://discordtips.com/how-to-fully-uninstall-discord/) then installing it again.
</details>

<details>
<summary>❌ Cannot read property "hasOwnProperty" of undefined" error</summary>

Fully close Discord. Fully deactivate any VPNs or firewalls. Make sure your installer is up to date. Then try again. If that still doesn't work, see the previous entry about cleanly removing and resinstalling Discord.
</details>

<details>
<summary>❌ getaddrinfo ENOTFOUND api.github.com"</summary>

Disable your antivirus or swap your DNS servers. There is a good guide to do the latter found here: https://www.ionos.com/digitalguide/server/configuration/how-to-change-dns-server/
</details>