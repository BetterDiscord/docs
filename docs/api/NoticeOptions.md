# Interface: NoticeOptions

## Properties

### buttons?

> `optional` **buttons?**: [`NoticeButton`](NoticeButton.md)[]

Buttons that should be added next to the notice text

***

### timeout?

> `optional` **timeout?**: `number`

How long, in milliseconds, the notice will stay open. Will not automatically close when set to `0`.

***

### type?

> `optional` **type?**: [`NoticeType`](NoticeType.md)

The type of the notice. Will affect the color.

## Methods

### onClose()?

> `optional` **onClose**(): `void`

A callback to fire when the notice is closed

#### Returns

`void`
