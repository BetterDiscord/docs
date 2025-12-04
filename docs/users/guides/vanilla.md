---
order: 2
description: How to not BetterDiscord.
---


# Dual Boot

::: warning

This feature requires some basic computer literacy.

:::

BetterDiscord allows you to return to vanilla Discord functionality without having to remove BetterDiscord. This is useful for those that like to switch back and forth. This is done using the `--vanilla` command line flag. There are two ways this can be used. You can either do this as a one-off or set up a shortcut for yourself to easily boot between normal Discord and BetterDiscord.


## One-off

Running vanilla Discord as a one-off means next time you launch Discord, BetterDiscord will be enabled.

::: code-group
```md [Windows]

1. Ensure Discord is fully closed
2. Right-click your existing Discord shortcut and select `Properties`
3. Copy the `Target` field
4. Open command prompt by pressing `⊞ win`+`r`
5. Paste the value of the `Target` field and add a space and `--vanilla` at the end
6. Click `OK` or press `Enter`

```

```md [Mac]

1. Ensure Discord is fully closed
2. Open iTerm app (`⌘ Command`+`Spacebar`)
3. Paste and run `open /Applications/Discord.app --args --vanilla`

```

```md [Linux]

1. Ensure Discord is fully closed
2. Open preferred terminal
3. Run `discord --vanilla`

```

:::

## Shortcut

Creating a separate shortcut makes it easy to launch with either vanilla Discord or with BetterDiscord.

::: code-group
```md [Windows]

1. Ensure Discord is fully closed
2. Right-click your existing Discord shortcut and select `Create Shortcut`
3. Right-click the new shortcut `Discord (2)` and select `Properties`
4. In the target field add a space followed by `--vanilla` at the end of the field
5. Click `OK`
6. Rename your new shortcut to something like `Discord Vanilla`

```

```md [Mac]

1. Ensure Discord is fully closed
2. Open the Automator app (`⌘ Command`+`Spacebar`)
3. Select `New Document` then `Application`
4. From the menu on the left drag `Run Shell Script` to the right-hand side.
5. On the right, in the textbox that appears, paste in `open -a '/Applications/Discord.app' --args --vanilla`
6. At the top, name your application something like `Discord Vanilla` and set `Where` to be the `Applications` folder
7. Go to `File > Save` to finalize

```

```md [Linux]

1. Ensure Discord is fully closed
2. Create a new bash script (`vanilla.sh`) using a terminal editor such as `nano`
3. The first line of the script should be the bash shebang such as `#!/bin/bash`
4. On the next line put `discord --vanilla`
5. Save the script and run `chmod +x vanilla.sh`
6. Put the file on your distro's desktop for easy use

```

:::
