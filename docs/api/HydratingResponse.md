# Class: HydratingResponse

## Extends

- `Response`

## Constructors

### Constructor

> **new HydratingResponse**(`dried`): `HydratingResponse`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dried` | [`DriedResponse`](DriedResponse.md) |

#### Returns

`HydratingResponse`

#### Overrides

`Response.constructor`

## Accessors

### redirected

#### Get Signature

> **get** **redirected**(): `boolean`

The **`redirected`** read-only property of the Response interface indicates whether or not the response is the result of a request you made which was redirected.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)

##### Returns

`boolean`

#### Overrides

`Response.redirected`

***

### url

#### Get Signature

> **get** **url**(): `string`

The **`url`** read-only property of the Response interface contains the URL of the response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)

##### Returns

`string`

#### Overrides

`Response.url`
