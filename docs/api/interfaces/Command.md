# Interface: Command

Defined in: [src/betterdiscord/modules/commandmanager.tsx:103](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L103)

## Properties

### description?

```ts
optional description: string;
```

Defined in: [src/betterdiscord/modules/commandmanager.tsx:105](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L105)

***

### id

```ts
id: string;
```

Defined in: [src/betterdiscord/modules/commandmanager.tsx:106](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L106)

***

### name

```ts
name: string;
```

Defined in: [src/betterdiscord/modules/commandmanager.tsx:104](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L104)

***

### options?

```ts
optional options: Option[];
```

Defined in: [src/betterdiscord/modules/commandmanager.tsx:107](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L107)

## Methods

### execute()

```ts
execute(options: any[], __namedParameters: {
  channel: Channel;
  guild?: Guild;
}): void;
```

Defined in: [src/betterdiscord/modules/commandmanager.tsx:108](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `any`[] |
| `__namedParameters` | \{ `channel`: [`Channel`](Channel.md); `guild?`: [`Guild`](Guild.md); \} |
| `__namedParameters.channel` | [`Channel`](Channel.md) |
| `__namedParameters.guild?` | [`Guild`](Guild.md) |

#### Returns

`void`

***

### predicate()?

```ts
optional predicate(): boolean;
```

Defined in: [src/betterdiscord/modules/commandmanager.tsx:109](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/modules/commandmanager.tsx#L109)

#### Returns

`boolean`
