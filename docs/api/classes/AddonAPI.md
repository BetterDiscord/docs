# Class: AddonAPI

Defined in: [src/betterdiscord/api/addonapi.ts:7](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L7)

`AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the [BdApi](BdApi.md).

## Accessors

### folder

#### Get Signature

```ts
get folder(): string;
```

Defined in: [src/betterdiscord/api/addonapi.ts:16](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L16)

The path to the addon folder.

##### Returns

`string`

## Methods

### disable()

```ts
disable(idOrAddon: string): 
  | void
  | AddonError<{
  message?: string;
  stack?: string;
}>;
```

Defined in: [src/betterdiscord/api/addonapi.ts:35](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L35)

Disables the given addon.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` |

#### Returns

  \| `void`
  \| [`AddonError`](AddonError.md)\<\{
  `message?`: `string`;
  `stack?`: `string`;
\}\>

***

### enable()

```ts
enable(idOrAddon: string): 
  | void
  | AddonError<{
  message?: string;
  stack?: string;
}>;
```

Defined in: [src/betterdiscord/api/addonapi.ts:29](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L29)

Enables the given addon.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` |

#### Returns

  \| `void`
  \| [`AddonError`](AddonError.md)\<\{
  `message?`: `string`;
  `stack?`: `string`;
\}\>

***

### get()

```ts
get(idOrFile: string): Addon | undefined;
```

Defined in: [src/betterdiscord/api/addonapi.ts:54](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L54)

Gets a particular addon.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`Addon` \| `undefined`

Addon instance

***

### getAll()

```ts
getAll(): (Addon | undefined)[];
```

Defined in: [src/betterdiscord/api/addonapi.ts:60](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L60)

Gets all addons of this type.

#### Returns

(`Addon` \| `undefined`)[]

Array of all addon instances

***

### isEnabled()

```ts
isEnabled(idOrFile: string): boolean;
```

Defined in: [src/betterdiscord/api/addonapi.ts:23](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L23)

Determines if a particular addon is enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`boolean`

***

### reload()

```ts
reload(idOrFileOrAddon: string): 
  | false
  | void
  | AddonError<{
  message?: string;
  stack?: string;
}>;
```

Defined in: [src/betterdiscord/api/addonapi.ts:47](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L47)

Reloads if a particular addon is enabled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFileOrAddon` | `string` |

#### Returns

  \| `false`
  \| `void`
  \| [`AddonError`](AddonError.md)\<\{
  `message?`: `string`;
  `stack?`: `string`;
\}\>

***

### toggle()

```ts
toggle(idOrAddon: string): void;
```

Defined in: [src/betterdiscord/api/addonapi.ts:41](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/addonapi.ts#L41)

Toggles if a particular addon is enabled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` |

#### Returns

`void`
