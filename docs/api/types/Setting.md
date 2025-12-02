# Type Alias: Setting\<T\>

```ts
type Setting<T> = 
  | FileSetting
  | NumberSetting
  | PositionSetting
  | ColorSetting
  | KeybindSetting
  | RadioSetting<T>
  | TextSetting
  | SliderSetting
  | DropdownSetting<T>
  | SwitchSetting;
```

Defined in: [src/betterdiscord/data/settings.ts:245](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L245)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |
