# Interface: BaseSettingItem

## Extended by

- [`CustomSetting`](CustomSetting.md)
- [`ButtonSetting`](ButtonSetting.md)
- [`ValueSettingItem`](ValueSettingItem.md)

## Properties

### defaultValue?

> `optional` **defaultValue?**: `unknown`

A value to use if no value is provided

***

### disabled?

> `optional` **disabled?**: `boolean`

Whether this setting is disabled

***

### disableWith?

> `optional` **disableWith?**: `string`

The id of another setting that disables this setting

***

### enableWith?

> `optional` **enableWith?**: `string`

The id of another setting that is required to use this one

***

### hidden?

> `optional` **hidden?**: `boolean`

Whether the setting should be hidden

***

### id

> **id**: `string`

An identifier used for callbacks

***

### inline?

> `optional` **inline?**: `boolean`

Whether the input should render inline with the name (this is false by default for radio type)

***

### name?

> `optional` **name?**: `string`

The visual name to display

***

### note?

> `optional` **note?**: `string`

The visual description to display

***

### type

> **type**: [`SettingType`](SettingType.md)
