# Interface: SettingsPanelProps

## Properties

### getDrawerState?

> `optional` **getDrawerState?**: (`categoryId`, `defaultShown`) => `boolean`

Optionally used to recall drawer states

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `categoryId` | `string` |
| `defaultShown` | `boolean` |

#### Returns

`boolean`

***

### onChange?

> `optional` **onChange?**: (`categoryId`, `settingId`, `value`) => `void`

A function to call on every change

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `categoryId` | `string` \| `null` |
| `settingId` | `string` |
| `value` | `any` |

#### Returns

`void`

***

### onDrawerToggle?

> `optional` **onDrawerToggle?**: (`categoryId`, `shown`) => `void`

Optionally used to save drawer states

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `categoryId` | `string` |
| `shown` | `boolean` |

#### Returns

`void`

***

### settings

> **settings**: ([`SettingsCategory`](SettingsCategory.md) \| [`Setting`](Setting.md))[]

An array of settings to show
