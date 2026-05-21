# Interface: ColorSetting

## Extends

- [`ValueSettingItem`](ValueSettingItem.md)\<[`Color`](Color.md)\>

## Properties

### colors?

> `optional` **colors?**: [`Color`](Color.md)[]

***

### defaultValue?

> `optional` **defaultValue?**: [`Color`](Color.md)

A value to use if no value is provided

#### Overrides

[`ValueSettingItem`](ValueSettingItem.md).[`defaultValue`](ValueSettingItem.md#defaultvalue)

***

### disabled?

> `optional` **disabled?**: `boolean`

Whether this setting is disabled

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`disabled`](ValueSettingItem.md#disabled)

***

### disableWith?

> `optional` **disableWith?**: `string`

The id of another setting that disables this setting

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`disableWith`](ValueSettingItem.md#disablewith)

***

### enableWith?

> `optional` **enableWith?**: `string`

The id of another setting that is required to use this one

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`enableWith`](ValueSettingItem.md#enablewith)

***

### hidden?

> `optional` **hidden?**: `boolean`

Whether the setting should be hidden

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`hidden`](ValueSettingItem.md#hidden)

***

### id

> **id**: `string`

An identifier used for callbacks

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`id`](ValueSettingItem.md#id)

***

### inline?

> `optional` **inline?**: `boolean`

Whether the input should render inline with the name (this is false by default for radio type)

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`inline`](ValueSettingItem.md#inline)

***

### name?

> `optional` **name?**: `string`

The visual name to display

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`name`](ValueSettingItem.md#name)

***

### note?

> `optional` **note?**: `string`

The visual description to display

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`note`](ValueSettingItem.md#note)

***

### type

> **type**: `"color"`

#### Overrides

[`ValueSettingItem`](ValueSettingItem.md).[`type`](ValueSettingItem.md#type)

***

### value

> **value**: [`Color`](Color.md)

The current value of the setting

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`value`](ValueSettingItem.md#value)

## Methods

### onChange()?

> `optional` **onChange**(`value`): `void`

A callback run when the setting changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[`ValueSettingItem`](ValueSettingItem.md).[`onChange`](ValueSettingItem.md#onchange)
