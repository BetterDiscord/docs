# Interface: ButtonSetting

## Extends

- [`ButtonProps`](ButtonProps.md).[`BaseSettingItem`](BaseSettingItem.md)

## Properties

### buttonRef?

> `optional` **buttonRef?**: `RefObject`\<`HTMLButtonElement` \| `null`\>

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`buttonRef`](ButtonProps.md#buttonref)

***

### children?

> `optional` **children?**: `ReactNode`

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`children`](ButtonProps.md#children)

***

### className?

> `optional` **className?**: `string`

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`className`](ButtonProps.md#classname)

***

### color?

> `optional` **color?**: `""` \| `"bd-button-color-brand"` \| `"bd-button-color-blurple"` \| `"bd-button-color-red"` \| `"bd-button-color-green"` \| `"bd-button-color-yellow"` \| `"bd-button-color-primary"` \| `"bd-button-color-link"` \| `"bd-button-color-white"` \| `"bd-button-color-transparent"`

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`color`](ButtonProps.md#color)

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

[`ButtonProps`](ButtonProps.md).[`disabled`](ButtonProps.md#disabled)

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

### grow?

> `optional` **grow?**: `boolean`

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`grow`](ButtonProps.md#grow)

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

### look?

> `optional` **look?**: `"bd-button-filled"` \| `"bd-button-outlined"` \| `"bd-button-link"` \| `"bd-button-blank"`

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`look`](ButtonProps.md#look)

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

### onClick?

> `optional` **onClick?**: `MouseEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`onClick`](ButtonProps.md#onclick)

***

### onKeyDown?

> `optional` **onKeyDown?**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`onKeyDown`](ButtonProps.md#onkeydown)

***

### size?

> `optional` **size?**: `""` \| `"bd-button-tiny"` \| `"bd-button-small"` \| `"bd-button-medium"` \| `"bd-button-large"` \| `"bd-button-icon"`

#### Inherited from

[`ButtonProps`](ButtonProps.md).[`size`](ButtonProps.md#size)

***

### type

> **type**: `"button"`

#### Overrides

[`ButtonProps`](ButtonProps.md).[`type`](ButtonProps.md#type)
