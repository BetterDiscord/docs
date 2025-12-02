# Class: FetchResponse

Defined in: [src/betterdiscord/api/net.ts:8](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L8)

## Extends

- [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

## Constructors

### Constructor

```ts
new FetchResponse(options: Partial<FetchResponseData & {
  status?: number;
}>): FetchResponse;
```

Defined in: [src/betterdiscord/api/net.ts:12](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FetchResponseData`](../interfaces/FetchResponseData.md) & \{ `status?`: `number`; \}\> |

#### Returns

`FetchResponse`

#### Overrides

```ts
Response.constructor
```

## Accessors

### redirected

#### Get Signature

```ts
get redirected(): boolean;
```

Defined in: [src/betterdiscord/api/net.ts:24](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L24)

The **`redirected`** read-only property of the Response interface indicates whether or not the response is the result of a request you made which was redirected.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)

##### Returns

`boolean`

#### Overrides

```ts
Response.redirected
```

***

### url

#### Get Signature

```ts
get url(): string;
```

Defined in: [src/betterdiscord/api/net.ts:23](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L23)

The **`url`** read-only property of the Response interface contains the URL of the response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)

##### Returns

`string`

#### Overrides

```ts
Response.url
```
