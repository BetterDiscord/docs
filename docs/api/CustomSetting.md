# Interface: CustomSetting

## Extends

- [`BaseSettingItem`](BaseSettingItem.md)

## Properties

### children

> **children**: `ReactNode`

***

### defaultValue?

> `optional` **defaultValue?**: `unknown`

A value to use if no value is provided

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`defaultValue`](BaseSettingItem.md#defaultvalue)

***

### disabled?

> `optional` **disabled?**: `boolean`

Whether this setting is disabled

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`disabled`](BaseSettingItem.md#disabled)

***

### disableWith?

> `optional` **disableWith?**: `string`

The id of another setting that disables this setting

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`disableWith`](BaseSettingItem.md#disablewith)

***

### enableWith?

> `optional` **enableWith?**: `string`

The id of another setting that is required to use this one

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`enableWith`](BaseSettingItem.md#enablewith)

***

### hidden?

> `optional` **hidden?**: `boolean`

Whether the setting should be hidden

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`hidden`](BaseSettingItem.md#hidden)

***

### id

> **id**: `string`

An identifier used for callbacks

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`id`](BaseSettingItem.md#id)

***

### inline?

> `optional` **inline?**: `boolean`

Whether the input should render inline with the name (this is false by default for radio type)

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`inline`](BaseSettingItem.md#inline)

***

### name?

> `optional` **name?**: `string`

The visual name to display

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`name`](BaseSettingItem.md#name)

***

### note?

> `optional` **note?**: `string`

The visual description to display

#### Inherited from

[`BaseSettingItem`](BaseSettingItem.md).[`note`](BaseSettingItem.md#note)

***

### type

> **type**: `"custom"`

#### Overrides

[`BaseSettingItem`](BaseSettingItem.md).[`type`](BaseSettingItem.md#type)
