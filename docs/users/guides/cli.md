---
order: 3
description: Control BetterDiscord from the command line.
---


# BetterDiscord CLI

A cross-platform command-line interface for installing, updating, and managing [BetterDiscord](https://betterdiscord.app/).

## Features

- 🚀 Easy installation and uninstallation of BetterDiscord
- 🔄 Support for multiple Discord channels (Stable, PTB, Canary)
- 🖥️ Cross-platform support (Windows, macOS, Linux)
- 📦 Available via npm for easy distribution
- ⚡ Fast and lightweight Go binary

## Installation

### Via npm

```bash
npm install -g @betterdiscord/cli
```

### Via Homebrew/Linuxbrew

```bash
brew install betterdiscord/tap/bdcli
```

### Via winget (Windows)

```bash
winget install betterdiscord.cli
```

### Via Go

```bash
go install github.com/betterdiscord/cli@latest
```

### Download Binary

Download the latest release for your platform from the [releases page](https://github.com/BetterDiscord/cli/releases).

## Commands

### Install

Install BetterDiscord to your Discord installation.

#### By Channel

Auto-detect Discord installation based on the release channel:

```bash
bdcli install --channel stable   # Install to Discord Stable (default)
bdcli install --channel ptb      # Install to Discord PTB
bdcli install --channel canary   # Install to Discord Canary
```

#### By Custom Path

Specify a custom path to any Discord installation:

```bash
bdcli install --path /path/to/Discord
# Or using short flag:
bdcli install -p /path/to/Discord
```

#### Notes

- If neither `--path` nor `--channel` is specified, it defaults to the Stable channel
- The `--path` and `--channel` flags are mutually exclusive

### Uninstall

Remove BetterDiscord from your Discord installation.

#### By Channel

```bash
bdcli uninstall --channel stable   # Uninstall from Discord Stable (default)
bdcli uninstall --channel ptb      # Uninstall from Discord PTB
bdcli uninstall --channel canary   # Uninstall from Discord Canary
```

#### By Custom Path

Specify a custom path to any Discord installation:

```bash
bdcli uninstall --path /path/to/Discord
# Or using short flag:
bdcli uninstall -p /path/to/Discord
```

#### Notes

- If neither `--path` nor `--channel` is specified, it defaults to the Stable channel
- The `--path` and `--channel` flags are mutually exclusive

### Version

Display version information about the CLI:

```bash
bdcli version
```

Output example:
```
BetterDiscord CLI v1.0.0
Commit: abc123def456
Built:  2025-02-15T10:30:00Z
```

### Completion

Generate shell completion scripts for bash, zsh, or fish:

```bash
bdcli completion bash  # Generate bash completion
bdcli completion zsh   # Generate zsh completion
bdcli completion fish  # Generate fish completion
```

To enable completions, source the output in your shell configuration file.

## Help

Get help information about the CLI or any command:

```bash
bdcli --help              # Show general help
bdcli [command] --help    # Show help for a specific command
```

### Available Commands

```
A cross-platform CLI for installing, updating, and managing BetterDiscord.

Usage:
   bdcli [flags]
   bdcli [command]

Available Commands:
   completion  Generate shell completions
   help        Help about any command
   install     Installs BetterDiscord to your Discord
   uninstall   Uninstalls BetterDiscord from your Discord
   version     Print the version number

Flags:
   -h, --help   help for bdcli

Use "bdcli [command] --help" for more information about a command.
```

## Supported Platforms

The CLI is available for multiple platforms and architectures:

- **Windows** (x64, ARM64, x86)
- **macOS** (x64, ARM64/M1/M2)
- **Linux** (x64, ARM64, ARM)

## Common Use Cases

### First Time Installation

1. **Install from stable channel (recommended):**
   ```bash
   bdcli install
   ```

2. **Or install to a specific channel:**
   ```bash
   bdcli install --channel ptb
   ```

### Using Multiple Discord Installations

You can manage multiple Discord installations by specifying custom paths:

```bash
# Install to your custom Discord location
bdcli install --path /opt/discord-custom

# Later, uninstall from the same location
bdcli uninstall --path /opt/discord-custom
```

### Verify Installation

After installing, you can verify the version of the CLI:

```bash
bdcli version
```

## Troubleshooting

### Discord Installation Not Found

If you get an error like "could not find a valid Discord installation":

1. **Check if Discord is installed** at the default location for your platform
2. **Use custom path** if Discord is installed elsewhere:
   ```bash
   bdcli install --path /your/custom/discord/path
   ```

### Mutually Exclusive Flags

You cannot use both `--path` and `--channel` in the same command. Choose one:

```bash
# ✅ Correct
bdcli install --channel stable

# ✅ Correct
bdcli install --path /custom/path

# ❌ Not allowed
bdcli install --channel stable --path /custom/path
```

## Additional Resources

- [GitHub Repository](https://github.com/BetterDiscord/cli)
- [Releases Page](https://github.com/BetterDiscord/cli/releases)
