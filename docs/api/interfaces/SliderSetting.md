# Interface: SliderSetting

Defined in: [src/betterdiscord/data/settings.ts:185](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L185)

## Extends

- [`SettingItem`](SettingItem.md)

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

### markers

```ts
markers: (
  | number
  | {
  label: string;
  value: number;
})[];
```

Defined in: [src/betterdiscord/data/settings.ts:192](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L192)

***

### max

```ts
max: number;
```

Defined in: [src/betterdiscord/data/settings.ts:189](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L189)

***

### min

```ts
min: number;
```

Defined in: [src/betterdiscord/data/settings.ts:188](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L188)

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

### step?

```ts
optional step: number;
```

Defined in: [src/betterdiscord/data/settings.ts:190](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L190)

***

### type

```ts
type: "slider";
```

Defined in: [src/betterdiscord/data/settings.ts:186](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L186)

#### Overrides

[`SettingItem`](SettingItem.md).[`type`](SettingItem.md#type)

***

### units

```ts
units: string;
```

Defined in: [src/betterdiscord/data/settings.ts:191](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L191)

***

### value

```ts
value: number;
```

Defined in: [src/betterdiscord/data/settings.ts:187](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/data/settings.ts#L187)

#### Overrides

[`SettingItem`](SettingItem.md).[`value`](SettingItem.md#value)
