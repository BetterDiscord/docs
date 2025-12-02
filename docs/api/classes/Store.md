# Abstract Class: Store

Defined in: [src/betterdiscord/stores/base.ts:1](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/stores/base.ts#L1)

## Constructors

### Constructor

```ts
new Store(): Store;
```

#### Returns

`Store`

## Methods

### addChangeListener()

```ts
addChangeListener(callback: () => void): () => void;
```

Defined in: [src/betterdiscord/stores/base.ts:5](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/stores/base.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

```ts
(): void;
```

##### Returns

`void`

***

### emitChange()

```ts
emitChange(): void;
```

Defined in: [src/betterdiscord/stores/base.ts:14](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/stores/base.ts#L14)

#### Returns

`void`

***

### initialize()

```ts
initialize(): void;
```

Defined in: [src/betterdiscord/stores/base.ts:2](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/stores/base.ts#L2)

#### Returns

`void`

***

### removeChangeListener()

```ts
removeChangeListener(callback: () => void): void;
```

Defined in: [src/betterdiscord/stores/base.ts:10](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/stores/base.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`
