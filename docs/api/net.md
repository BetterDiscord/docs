# Net

:::info

This module is still in beta and is subject to change. This API is mostly finalized, but if fundamental flaws are found during beta, the API may be reworked. Any plan to do so will be announced in Discord.

:::

`Net` is a namespace for networking related utility functions. Instance is accessible through the [BdApi](./bdapi).

## Properties



## Methods

### fetch
Fetches network resources from the server side which avoids CORs. This works similar to [node-fetch](https://github.com/node-fetch/node-fetch).

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
url|string|&#x274C;|*none*|URL to be requested
options|object|&#x2705;|{}|Additional options to customize the request
options.method|"GET" \| "PUT" \| "POST" \| "DELETE"|&#x2705;|"GET"|HTTP method to use for the request.
options.headers|Record<string, string>|&#x2705;|*none*|Mapping of headers to be sent with the request.
options.redirect|"manual" \| "follow"|&#x2705;|"follow"|Mapping of headers to be sent with the request.
options.maxRedirects|number|&#x2705;|20|Maximum number of redirects to be automatically followed.
options.signal|AbortSignal|&#x2705;|*none*|Signal to abruptly cancel the request.
options.timeout|number|&#x2705;|3000|Maximum number of seconds to wait for the request before timing out.
options.body|Uint8Array \| string|&#x2705;|*none*|Serializable body data to be sent with the request.


**Returns:** [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) - A custom fetch response that extends the web `Response` with additional `url` and `redirected` properties.
___
