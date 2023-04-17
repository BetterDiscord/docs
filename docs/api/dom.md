# DOM

`DOM` is a simple utility class for dom manipulation. An instance is available on [BdApi](./bdapi).

## Properties

### screenHeight
Current height of the user's screen.

**Type:** `number`
___

### screenWidth
Current width of the user's screen.

**Type:** `number`
___


## Methods

### addStyle
Adds a `<style>` to the document with the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID to use for style element
css|string|CSS to apply to the document

**Returns:** `void`
___

### animate
Utility to help smoothly animate using JavaScript.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
update|function|&#x274C;|*none*|Render function indicating the style should be updated
duration|number|&#x274C;|*none*|Duration in ms to animate for
options|object|&#x2705;|*none*|Options to customize the animation
options.timing|function|&#x2705;|*none*|Optional function calculating progress based on current time fraction. Linear by default.

**Returns:** `void`
___

### createElement
Utility function to make creating DOM elements easier. Acts similarly  to `React.createElement`

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
tag|string|&#x274C;|*none*|HTML tag name to create
options|object|&#x2705;|*none*|Options object to customize the element
options.className|string|&#x2705;|*none*|Class name to add to the element
options.id|string|&#x2705;|*none*|ID to set for the element
options.target|HTMLElement|&#x2705;|*none*|Target element to automatically append to
child|HTMLElement|&#x2705;|*none*|Child node to add

**Returns:** `HTMLElement` - The created HTML element
___

### onRemoved
Adds a listener for when the node is removed from the document body.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|Node to be observed
callback|function|Function to run when removed

**Returns:** `void`
___

### parseHTML
Parses a string of HTML and returns the results. If the second parameter is true, the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}. This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.  If the second parameter is false, then the return value will be the list of parsed nodes and there were multiple top level nodes, otherwise the single node is returned.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
html|string|&#x274C;|*none*|HTML to be parsed
fragment|boolean|&#x2705;|false|Whether or not the return should be the raw `DocumentFragment`

**Returns:** `DocumentFragment` - The result of HTML parsing
___

### removeStyle
Removes a `<style>` from the document corresponding to the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID used for the style element

**Returns:** `void`
___
