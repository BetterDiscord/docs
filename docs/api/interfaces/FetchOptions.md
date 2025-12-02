# Interface: FetchOptions

Defined in: [src/betterdiscord/api/net.ts:53](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L53)

## Extended by

- [`FetchResponseData`](FetchResponseData.md)

## Properties

### body

```ts
body: 
  | string
| Uint8Array<ArrayBufferLike>;
```

Defined in: [src/betterdiscord/api/net.ts:59](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L59)

Defines a request body. Data must be serializable.

***

### headers

```ts
headers: Record<string, string>;
```

Defined in: [src/betterdiscord/api/net.ts:55](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L55)

Request headers.

***

### maxRedirects

```ts
maxRedirects: number;
```

Defined in: [src/betterdiscord/api/net.ts:57](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L57)

Maximum amount of redirects to be followed.

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

***

### redirect

```ts
redirect: "manual" | "follow";
```

Defined in: [src/betterdiscord/api/net.ts:56](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L56)

Whether to follow redirects.

***

### signal

```ts
signal: AbortSignal;
```

Defined in: [src/betterdiscord/api/net.ts:58](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L58)

Signal to abruptly cancel the request

***

### timeout

```ts
timeout: number;
```

Defined in: [src/betterdiscord/api/net.ts:60](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/net.ts#L60)

Request timeout time.
