# Class: AddonAPI

`AddonAPI` is a utility class for working with plugins and themes. Instances are available on [BdApi](BdApi.md).

## Accessors

### folder

#### Get Signature

> **get** **folder**(): `string`

The path to the addon folder.

##### Returns

`string`

## Methods

### disable()

> **disable**(`idOrFile`): `boolean` \| `undefined`

Disables the given addon.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`boolean` \| `undefined`

***

### enable()

> **enable**(`idOrFile`): `boolean` \| `undefined`

Enables the given addon.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`boolean` \| `undefined`

***

### get()

> **get**(`idOrFile`): [`Addon`](Addon.md) \| `undefined`

Gets a particular addon.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

[`Addon`](Addon.md) \| `undefined`

Addon instance

***

### getAll()

> **getAll**(): ([`Addon`](Addon.md) \| `undefined`)[]

Gets all addons of this type.

#### Returns

([`Addon`](Addon.md) \| `undefined`)[]

Array of all addon instances

***

### isEnabled()

> **isEnabled**(`idOrFile`): `boolean`

Determines if a particular addon is enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`boolean`

***

### reload()

> **reload**(`idOrFile`): `boolean`

Reloads a particular addon if it is enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`boolean`

***

### toggle()

> **toggle**(`idOrFile`): `void`

Toggles if a particular addon is enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `idOrFile` | `string` | Addon ID or filename |

#### Returns

`void`
