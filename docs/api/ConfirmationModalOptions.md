# Interface: ConfirmationModalOptions

## Properties

### cancelText?

> `optional` **cancelText?**: `string` \| `null`

Text for the cancel button

***

### children?

> `optional` **children?**: `ReactNode`

The contents of the modal

***

### className?

> `optional` **className?**: `string`

Classes to apply to the modal

***

### confirmText?

> `optional` **confirmText?**: `string`

Text for the confirmation/submit button

***

### danger?

> `optional` **danger?**: `boolean`

Whether the main button should be red or not

***

### header?

> `optional` **header?**: `string`

Text to show at the top of the modal

***

### key?

> `optional` **key?**: `string` \| `number`

A unique key for the modal

***

### size?

> `optional` **size?**: `""` \| `"bd-modal-small"` \| `"bd-modal-medium"` \| `"bd-modal-large"`

The size of the modal

***

### transitionState?

> `optional` **transitionState?**: `number`

## Methods

### onCancel()?

> `optional` **onCancel**(): `void`

A callback to run when clicking the cancel button

#### Returns

`void`

***

### onClose()?

> `optional` **onClose**(): `void`

A callback to run when exiting the modal

#### Returns

`void`

***

### onCloseCallback()?

> `optional` **onCloseCallback**(): `void`

Called immediately on render

#### Returns

`void`

***

### onConfirm()?

> `optional` **onConfirm**(): `void`

A callback to run when clicking the submit button

#### Returns

`void`
