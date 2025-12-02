# Interface: FluxStore

Defined in: [src/betterdiscord/types/discord/modules.d.ts:42](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L42)

## Indexable

```ts
[key: string | number | symbol]: any
```

## Properties

### \_dispatchToken

```ts
_dispatchToken: string;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:43](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L43)

***

### \_isInitialized

```ts
_isInitialized: boolean;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:44](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L44)

## Methods

### addChangeListener()

```ts
addChangeListener(listener: () => void): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:53](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L53)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### addReactChangeListener()

```ts
addReactChangeListener(listener: () => void): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:55](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L55)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### emitChange()

```ts
emitChange(): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:51](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L51)

#### Returns

`void`

***

### getDispatchToken()

```ts
getDispatchToken(): string;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:46](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L46)

#### Returns

`string`

***

### getName()

```ts
getName(): string;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:45](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L45)

#### Returns

`string`

***

### hasChangeCallbacks()

```ts
hasChangeCallbacks(): boolean;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:52](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L52)

#### Returns

`boolean`

***

### initialize()

```ts
initialize(): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:48](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L48)

#### Returns

`void`

***

### initializeIfNeeded()

```ts
initializeIfNeeded(): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:49](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L49)

#### Returns

`void`

***

### removeChangeListener()

```ts
removeChangeListener(listener: () => void): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:54](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L54)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### removeReactChangeListener()

```ts
removeReactChangeListener(listener: () => void): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:56](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L56)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### syncWith()

```ts
syncWith(
   stores: FluxStore[], 
   emitChange: boolean, 
   delay?: number): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:58](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L58)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stores` | `FluxStore`[] |
| `emitChange` | `boolean` |
| `delay?` | `number` |

#### Returns

`void`

***

### waitFor()

```ts
waitFor(...stores: FluxStore[]): void;
```

Defined in: [src/betterdiscord/types/discord/modules.d.ts:59](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/modules.d.ts#L59)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`stores` | `FluxStore`[] |

#### Returns

`void`
