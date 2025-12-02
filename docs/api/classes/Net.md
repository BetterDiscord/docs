# Class: Net

Defined in: [src/betterdiscord/api/net.ts:78](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L78)

`Net` is a utility class for making network requests. An instance is available on [BdApi](BdApi.md).

## Methods

### fetch()

```ts
static fetch(url: string, options: Partial<FetchOptions>): Promise<FetchResponse>;
```

Defined in: [src/betterdiscord/api/net.ts:84](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L84)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` |  |
| `options` | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FetchOptions`](../interfaces/FetchOptions.md)\> |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FetchResponse`](FetchResponse.md)\>
