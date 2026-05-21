# Interface: ToastOptions

## Properties

### forceShow?

> `optional` **forceShow?**: `boolean`

Whether to force showing the toast and ignore the BD setting

***

### icon?

> `optional` **icon?**: `boolean`

Determines whether the icon should show corresponding to the type. A toast without type will always have no icon.

***

### timeout?

> `optional` **timeout?**: `number`

Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Defaults to 3000.

***

### type?

> `optional` **type?**: [`ToastType`](ToastType.md)

Changes the type of the toast stylistically and semantically
