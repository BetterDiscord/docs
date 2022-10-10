# ReactUtils

`ReactUtils` is a utility class for interacting with React internals. Instance is accessible through the [BdApi](./bdapi). This is extremely useful for interacting with the internals of the UI.

## Properties



## Methods

### getInternalInstance
Gets the internal react data of a specified node

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|Node to get the react data from

**Returns:** `object` - Either the found data or `undefined`
___

### getOwnerInstance
Attempts to find the "owner" node to the current node. This is generally  a node with a stateNode--a class component.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
node|HTMLElement|&#x274C;|*none*|node to obtain react instance of
options|object|&#x274C;|*none*|options for the search
options.include|array|&#x2705;|*none*|list of items to include from the search
options.exclude|array|&#x2705;|["Popout", "Tooltip", "Scroller", "BackgroundFlash"]|list of items to exclude from the search
options.filter|callable|&#x2705;|_=>_|filter to check the current instance with (should return a boolean)

**Returns:** `*` - the owner instance or undefined if not found.
___

### wrapElement
Creates an unrendered react component that wraps dom elements.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
element|HTMLElement|element or array of elements to wrap into a react component

**Returns:** `object` - - unrendered react component
___
