# Interface: Notification

## Indexable

> \[`key`: `symbol`\]: `boolean`

## Properties

### actions?

> `optional` **actions?**: [`ButtonActions`](ButtonActions.md)[]

An array of button actions to add to the notification

***

### content?

> `optional` **content?**: `ReactNode`

The content of the notification

***

### duration?

> `optional` **duration?**: `number`

How long the notification should be shown in milliseconds

***

### icon?

> `optional` **icon?**: `ComponentType`\<`any`\>

A React component to use as a custom icon for the notification

***

### id

> **id**: `string`

A unique id for the notification, will not be shown if another notification with the same id is already being shown

***

### title?

> `optional` **title?**: `string`

The title of the notification

***

### type?

> `optional` **type?**: [`NotificationType`](NotificationType.md)

The type of the notification which changes the color and icon

## Methods

### onClose()?

> `optional` **onClose**(): `void`

A callback which is run when the notification is closed manually or automatically

#### Returns

`void`
