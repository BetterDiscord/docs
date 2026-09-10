# Interface: ChangelogProps

## Properties

### banner?

> `optional` **banner?**: `string`

URL to an image to display as the banner of the modal

***

### blurb?

> `optional` **blurb?**: `string`

Text to show in the body of the modal before the list of changes

***

### changes?

> `optional` **changes?**: [`ChangelogEntry`](ChangelogEntry.md)[]

List of changes to show (see description for details)

***

### footer?

> `optional` **footer?**: `ReactNode`

What to show in the modal footer

***

### poster?

> `optional` **poster?**: `string`

URL to use for the video freeze-frame poster

***

### subtitle?

> `optional` **subtitle?**: `ReactNode`

Title to show below the main header

***

### title?

> `optional` **title?**: `ReactNode`

Title to show in the modal header

***

### transitionState?

> `optional` **transitionState?**: `number`

***

### video?

> `optional` **video?**: `string`

Youtube link or url of a video file to use as the banner

## Methods

### onClose()?

> `optional` **onClose**(): `void`

A callback to fire when the changelog modal is closed

#### Returns

`void`
