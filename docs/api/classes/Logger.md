# Class: Logger\<Bounded\>

Defined in: [src/betterdiscord/api/logger.ts:34](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L34)

`Logger` is a helper class to log data in a nice and consistent way. An instance is available on [BdApi](BdApi.md).

## Type Parameters

| Type Parameter |
| ------ |
| `Bounded` *extends* `boolean` |

## Methods

### debug()

```ts
debug(...args: [...(Bounded extends false ? [name: string] : [])[], ...message: any[]]): void;
```

Defined in: [src/betterdiscord/api/logger.ts:99](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L99)

Logs used for debugging purposes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [name: string] : [])[]`, `...message: any[]`\] |

#### Returns

`void`

***

### error()

```ts
error(...messages: [...(Bounded extends false ? [name: string] : [])[], ...message: any[]]): void;
```

Defined in: [src/betterdiscord/api/logger.ts:75](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L75)

Logs an error message.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`messages` | \[`...(Bounded extends false ? [name: string] : [])[]`, `...message: any[]`\] |

#### Returns

`void`

***

### info()

```ts
info(...messages: [...(Bounded extends false ? [name: string] : [])[], ...message: any[]]): void;
```

Defined in: [src/betterdiscord/api/logger.ts:91](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L91)

Logs an informational message.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`messages` | \[`...(Bounded extends false ? [name: string] : [])[]`, `...message: any[]`\] |

#### Returns

`void`

***

### log()

```ts
log(...messages: [...(Bounded extends false ? [name: string] : [])[], ...message: any[]]): void;
```

Defined in: [src/betterdiscord/api/logger.ts:107](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L107)

Logs used for basic loggin.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`messages` | \[`...(Bounded extends false ? [name: string] : [])[]`, `...message: any[]`\] |

#### Returns

`void`

***

### stacktrace()

```ts
stacktrace(
   pluginName: string, 
   message: any, 
   error: Error): void;
```

Defined in: [src/betterdiscord/api/logger.ts:60](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L60)

Logs an error using a collapsed error group with stacktrace.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module. |
| `message` | `any` | Message or error to have logged. |
| `error` | [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) | Error object to log with the message. |

#### Returns

`void`

***

### warn()

```ts
warn(...messages: [...(Bounded extends false ? [name: string] : [])[], ...message: any[]]): void;
```

Defined in: [src/betterdiscord/api/logger.ts:83](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/logger.ts#L83)

Logs a warning message.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`messages` | \[`...(Bounded extends false ? [name: string] : [])[]`, `...message: any[]`\] |

#### Returns

`void`
