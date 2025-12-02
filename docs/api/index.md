---
title: Overview
---

# BetterDiscordAPI

The plugin API for BetterDiscord is a globally (`window.BdApi`) accessible
object for use by plugins and developers to make their lives easier.

The global instance can be accessed without binding to a specific plugin, but
in that case, some methods will require the plugin name to be passed in.

Alternatively, a plugin can create a bound instance by calling `new BdApi("PluginName")`.
In that case, the plugin name is automatically used for methods that require it.

To start exploring the API, check out the [BdApi](classes/BdApi.md) class and its members.

## Enumerations

- [Colors](enums/Colors.md)
- [Looks](enums/Looks.md)
- [OptionType](enums/OptionType.md)
- [Sizes](enums/Sizes.md)
- [SpinnerType](enums/SpinnerType.md)

## Classes

- [AddonAPI](classes/AddonAPI.md)
- [AddonError](classes/AddonError.md)
- [BdApi](classes/BdApi.md)
- [CommandAPI](classes/CommandAPI.md)
- [Components](classes/Components.md)
- [ContextMenu](classes/ContextMenu.md)
- [Data](classes/Data.md)
- [DOM](classes/DOM.md)
- [ErrorBoundary](classes/ErrorBoundary.md)
- [FetchResponse](classes/FetchResponse.md)
- [Hooks](classes/Hooks.md)
- [Logger](classes/Logger.md)
- [Net](classes/Net.md)
- [Patcher](classes/Patcher.md)
- [ReactUtils](classes/ReactUtils.md)
- [ReactWrapper](classes/ReactWrapper.md)
- [Store](classes/Store.md)
- [Tooltip](classes/Tooltip.md)
- [UI](classes/UI.md)
- [Utils](classes/Utils.md)
- [Webpack](classes/Webpack.md)

## Interfaces

- [ButtonActions](interfaces/ButtonActions.md)
- [ChangelogEntry](interfaces/ChangelogEntry.md)
- [ChangelogProps](interfaces/ChangelogProps.md)
- [Channel](interfaces/Channel.md)
- [Choice](interfaces/Choice.md)
- [ColorpickerProps](interfaces/ColorpickerProps.md)
- [ColorSetting](interfaces/ColorSetting.md)
- [Command](interfaces/Command.md)
- [DropdownSetting](interfaces/DropdownSetting.md)
- [FetchOptions](interfaces/FetchOptions.md)
- [FetchResponseData](interfaces/FetchResponseData.md)
- [FileSetting](interfaces/FileSetting.md)
- [FluxStore](interfaces/FluxStore.md)
- [GetOwnerInstanceOptions](interfaces/GetOwnerInstanceOptions.md)
- [Guild](interfaces/Guild.md)
- [KeybindProps](interfaces/KeybindProps.md)
- [KeybindSetting](interfaces/KeybindSetting.md)
- [Module](interfaces/Module.md)
- [NoticeButton](interfaces/NoticeButton.md)
- [NoticeOptions](interfaces/NoticeOptions.md)
- [Notification](interfaces/Notification.md)
- [NumberInputProps](interfaces/NumberInputProps.md)
- [NumberSetting](interfaces/NumberSetting.md)
- [Option](interfaces/Option.md)
- [PatchedReactHooks](interfaces/PatchedReactHooks.md)
- [PermissionOverwrite](interfaces/PermissionOverwrite.md)
- [PositionSetting](interfaces/PositionSetting.md)
- [RadioOption](interfaces/RadioOption.md)
- [RadioProps](interfaces/RadioProps.md)
- [RadioSetting](interfaces/RadioSetting.md)
- [Require](interfaces/Require.md)
- [SearchProps](interfaces/SearchProps.md)
- [SelectOption](interfaces/SelectOption.md)
- [SelectProps](interfaces/SelectProps.md)
- [SettingItem](interfaces/SettingItem.md)
- [SliderMarker](interfaces/SliderMarker.md)
- [SliderProps](interfaces/SliderProps.md)
- [SliderSetting](interfaces/SliderSetting.md)
- [SpinnerProps](interfaces/SpinnerProps.md)
- [SwitchProps](interfaces/SwitchProps.md)
- [SwitchSetting](interfaces/SwitchSetting.md)
- [TextboxProps](interfaces/TextboxProps.md)
- [TextSetting](interfaces/TextSetting.md)
- [ToastOptions](interfaces/ToastOptions.md)
- [TooltipOptions](interfaces/TooltipOptions.md)
- [User](interfaces/User.md)
- [WebpackOptions](interfaces/WebpackOptions.md)

## Type Aliases

- [AddStyleArgs](types/AddStyleArgs.md)
- [BulkQueries](types/BulkQueries.md)
- [ButtonProps](types/ButtonProps.md)
- [ChangelogEntryType](types/ChangelogEntryType.md)
- [Color](types/Color.md)
- [CommonlyUsedStores](types/CommonlyUsedStores.md)
- [ElementType](types/ElementType.md)
- [ErrorBoundaryProps](types/ErrorBoundaryProps.md)
- [ExportedOnlyFilter](types/ExportedOnlyFilter.md)
- [Falsey](types/Falsey.md)
- [Filter](types/Filter.md)
- [GroupProps](types/GroupProps.md)
- [HexString](types/HexString.md)
- [IsTruthy](types/IsTruthy.md)
- [LazyOptions](types/LazyOptions.md)
- [NoticeType](types/NoticeType.md)
- [NotificationType](types/NotificationType.md)
- [Options](types/Options.md)
- [RawModule](types/RawModule.md)
- [ReactDOMType](types/ReactDOMType.md)
- [RemoveStyleArgs](types/RemoveStyleArgs.md)
- [Setting](types/Setting.md)
- [SettingItemProp](types/SettingItemProp.md)
- [SettingType](types/SettingType.md)
- [SpinnerTypes](types/SpinnerTypes.md)
- [StoreNameType](types/StoreNameType.md)
- [StoreType](types/StoreType.md)
- [ToastType](types/ToastType.md)
- [TreeFilter](types/TreeFilter.md)
- [WithKeyOptions](types/WithKeyOptions.md)
- [WithOptions](types/WithOptions.md)

## Functions

- [Button](functions/Button.md)
- [Flex](functions/Flex.md)
- [Text](functions/Text.md)
