# Interface: FetchResponseData

Defined in: [src/betterdiscord/api/net.ts:63](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L63)

## Extends

- [`FetchOptions`](FetchOptions.md)

## Properties

### body

```ts
body: 
  | string
| Uint8Array<ArrayBufferLike>;
```

Defined in: [src/betterdiscord/api/net.ts:59](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L59)

Defines a request body. Data must be serializable.

#### Inherited from

[`FetchOptions`](FetchOptions.md).[`body`](FetchOptions.md#body)

***

### content

```ts
content: Buffer<ArrayBufferLike> | Buffer<ArrayBufferLike>[];
```

Defined in: [src/betterdiscord/api/net.ts:64](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L64)

***

### headers

```ts
headers: Record<string, any>;
```

Defined in: [src/betterdiscord/api/net.ts:65](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L65)

Request headers.

#### Overrides

[`FetchOptions`](FetchOptions.md).[`headers`](FetchOptions.md#headers)

***

### maxRedirects

```ts
maxRedirects: number;
```

Defined in: [src/betterdiscord/api/net.ts:57](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L57)

Maximum amount of redirects to be followed.

#### Inherited from

[`FetchOptions`](FetchOptions.md).[`maxRedirects`](FetchOptions.md#maxredirects)

***

### method

```ts
method: 
  | "GET"
  | "PUT"
  | "POST"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD"
  | "CONNECT"
  | "TRACE";
```

Defined in: [src/betterdiscord/api/net.ts:54](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L54)

Request method.

#### Inherited from

[`FetchOptions`](FetchOptions.md).[`method`](FetchOptions.md#method)

***

### redirect

```ts
redirect: "manual" | "follow";
```

Defined in: [src/betterdiscord/api/net.ts:56](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L56)

Whether to follow redirects.

#### Inherited from

[`FetchOptions`](FetchOptions.md).[`redirect`](FetchOptions.md#redirect)

***

### redirected

```ts
redirected: boolean;
```

Defined in: [src/betterdiscord/api/net.ts:69](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L69)

***

### signal

```ts
signal: AbortSignal;
```

Defined in: [src/betterdiscord/api/net.ts:70](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L70)

Signal to abruptly cancel the request

#### Overrides

[`FetchOptions`](FetchOptions.md).[`signal`](FetchOptions.md#signal)

***

### statusCode

```ts
statusCode: number;
```

Defined in: [src/betterdiscord/api/net.ts:66](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L66)

***

### statusText

```ts
statusText: string;
```

Defined in: [src/betterdiscord/api/net.ts:68](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L68)

***

### timeout

```ts
timeout: number;
```

Defined in: [src/betterdiscord/api/net.ts:60](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L60)

Request timeout time.

#### Inherited from

[`FetchOptions`](FetchOptions.md).[`timeout`](FetchOptions.md#timeout)

***

### url

```ts
url: string;
```

Defined in: [src/betterdiscord/api/net.ts:67](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L67)
