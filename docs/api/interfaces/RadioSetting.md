# Interface: RadioSetting\<T\>

Defined in: [src/betterdiscord/data/settings.ts:202](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L202)

## Extends

- [`SettingItem`](SettingItem.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

### defaultValue?

```ts
optional defaultValue: unknown;
```

Defined in: [src/betterdiscord/data/settings.ts:168](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L168)

#### Inherited from

[`SettingItem`](SettingItem.md).[`defaultValue`](SettingItem.md#defaultvalue)

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [src/betterdiscord/data/settings.ts:165](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L165)

#### Inherited from

[`SettingItem`](SettingItem.md).[`disabled`](SettingItem.md#disabled)

***

### disableWith?

```ts
optional disableWith: string;
```

Defined in: [src/betterdiscord/data/settings.ts:167](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L167)

#### Inherited from

[`SettingItem`](SettingItem.md).[`disableWith`](SettingItem.md#disablewith)

***

### enableWith?

```ts
optional enableWith: string;
```

Defined in: [src/betterdiscord/data/settings.ts:166](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L166)

#### Inherited from

[`SettingItem`](SettingItem.md).[`enableWith`](SettingItem.md#enablewith)

***

### hidden?

```ts
optional hidden: boolean;
```

Defined in: [src/betterdiscord/data/settings.ts:170](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L170)

#### Inherited from

[`SettingItem`](SettingItem.md).[`hidden`](SettingItem.md#hidden)

***

### id

```ts
id: string;
```

Defined in: [src/betterdiscord/data/settings.ts:161](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L161)

#### Inherited from

[`SettingItem`](SettingItem.md).[`id`](SettingItem.md#id)

***

### inline?

```ts
optional inline: boolean;
```

Defined in: [src/betterdiscord/data/settings.ts:169](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L169)

#### Inherited from

[`SettingItem`](SettingItem.md).[`inline`](SettingItem.md#inline)

***

### name?

```ts
optional name: string;
```

Defined in: [src/betterdiscord/data/settings.ts:163](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L163)

#### Inherited from

[`SettingItem`](SettingItem.md).[`name`](SettingItem.md#name)

***

### note?

```ts
optional note: string;
```

Defined in: [src/betterdiscord/data/settings.ts:164](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L164)

#### Inherited from

[`SettingItem`](SettingItem.md).[`note`](SettingItem.md#note)

***

### options

```ts
options: {
  description: string;
  name: string;
  value: T;
}[];
```

Defined in: [src/betterdiscord/data/settings.ts:205](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L205)

#### description

```ts
description: string;
```

#### name

```ts
name: string;
```

#### value

```ts
value: T;
```

***

### type

```ts
type: "radio";
```

Defined in: [src/betterdiscord/data/settings.ts:203](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L203)

#### Overrides

[`SettingItem`](SettingItem.md).[`type`](SettingItem.md#type)

***

### value

```ts
value: T;
```

Defined in: [src/betterdiscord/data/settings.ts:204](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L204)

#### Overrides

[`SettingItem`](SettingItem.md).[`value`](SettingItem.md#value)
