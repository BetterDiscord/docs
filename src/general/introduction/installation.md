---
eleventyNavigation:
  key: Installation
  order: 2
---

# Installation

{% banner "warning" %}If you experience any issues following these steps, try the [troubleshooting](../../troubleshooting/installation-issues) guide.{% endbanner %}

## Automatic Installation

1. Go to the [BetterDiscord Website](https://betterdiscord.app) and click the big download button. Save this somewhere on your computer.
2. Open the installer you downloaded in the previous step.
3. Accept the license agreement, and click next to proceed.

![BetterDiscord Installer]({{"/assets/docs/installer.png" | url}})

4. Select `Install` then click the next button to proceed with installation.
5. Select the version of Discord you want to use. If you're not sure what this means, just select `Stable`. Click the install button when ready.
6. Let the installer process the installation. It should tell you when the installation has completed.
7. Verify that BetterDiscord is installed.
  - Open (or switch to) Discord, and open Discord's settings.
  - Check the tabs on the left for a new section called `BetterDiscord` (see below)

![BetterDiscord Settings Tabs]({{"/assets/docs/bd_settings_tabs.png" | url}})

8. Enjoy BetterDiscord!



## Manual Installation

### Prerequisites

- Git - https://git-scm.com/downloads
- Node.js - https://nodejs.org/en/download/
- npm

### Steps

1. Open a terminal of choice.
1. Clone the BetterDiscord repository with `git clone https://github.com/BetterDiscord/BetterDiscord.git`.
1. Enter the directory `cd BetterDiscord`.
1. Install dependencies and build the project with `npm ci && npm run build`.
1. Inject this local instalation into your Discord with `npm run inject`.
 - If using Canary or PTB, simply add that at the end like `npm run inject canary`.