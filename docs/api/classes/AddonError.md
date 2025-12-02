# Class: AddonError\<T\>

Defined in: [src/betterdiscord/structs/addonerror.ts:1](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/structs/addonerror.ts#L1)

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* \{ `message?`: `string`; `stack?`: `string`; \} | \{ `message?`: `string`; `stack?`: `string`; \} |

## Constructors

### Constructor

```ts
new AddonError<T>(
   name: string, 
   filename: string, 
   message: string, 
   error: T, 
type: string): AddonError<T>;
```

Defined in: [src/betterdiscord/structs/addonerror.ts:5](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/structs/addonerror.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `filename` | `string` |
| `message` | `string` |
| `error` | `T` |
| `type` | `string` |

#### Returns

`AddonError`\<`T`\>

#### Overrides

```ts
Error.constructor
```

## Properties

### error

```ts
error: T;
```

Defined in: [src/betterdiscord/structs/addonerror.ts:3](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/structs/addonerror.ts#L3)

***

### file

```ts
file: string;
```

Defined in: [src/betterdiscord/structs/addonerror.ts:2](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/structs/addonerror.ts#L2)

***

### type

```ts
type: string;
```

Defined in: [src/betterdiscord/structs/addonerror.ts:4](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/structs/addonerror.ts#L4)
