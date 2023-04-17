# ReactUtils

`ReactUtils` is a utility class for interacting with React internals. Instance is accessible through the [BdApi](./bdapi). This is extremely useful for interacting with the internals of the UI.

## Properties



## Methods

### getInternalInstance
Gets the internal React data of a specified node.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|Node to get the internal React data from

**Returns:** `object` - Either the found data or `undefined`
___

### getOwnerInstance
Attempts to find the "owner" node to the current node. This is generally  a node with a `stateNode` - a class component.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
node|HTMLElement|&#x274C;|*none*|Node to obtain React instance of
options|object|&#x274C;|*none*|Options for the search
options.include|array|&#x2705;|*none*|List of items to include in the search
options.exclude|array|&#x2705;|["Popout", "Tooltip", "Scroller", "BackgroundFlash"]|List of items to exclude from the search.
options.filter|callable|&#x2705;|_=>_|Filter to check the current instance with (should return a boolean)

**Returns:** `object` - The owner instance or `undefined` if not found
___

### wrapElement
Creates an unrendered React component that wraps HTML elements.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
element|HTMLElement|Element or array of elements to wrap

**Returns:** `object` - Unrendered React component
___
