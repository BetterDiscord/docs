# Class: ReactWrapper

## Properties

### element

> **element**: `Element` \| `Element`[]

***

### ref

> **ref**: `RefObject`\<`HTMLDivElement` \| `null`\>

***

### state

> **state**: `object`

#### hasError

> **hasError**: `boolean`

## Methods

### componentDidCatch()

> **componentDidCatch**(): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Returns

`void`

***

### componentDidMount()

> **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

***

### render()

> **render**(): `DetailedReactHTMLElement`\<\{ `className`: `string`; `ref`: `RefObject`\<`HTMLDivElement` \| `null`\>; \}, `HTMLDivElement`\> \| `null`

#### Returns

`DetailedReactHTMLElement`\<\{ `className`: `string`; `ref`: `RefObject`\<`HTMLDivElement` \| `null`\>; \}, `HTMLDivElement`\> \| `null`
