# Patcher

`Patcher` is a utility class for modifying existing functions. Instances are accessible through the [BdApi](./bdapi). This is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.

## Properties



## Methods

### getPatchesByCaller
Returns all patches by a particular caller. The patches all have an `unpatch()` method.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
caller|string|ID of the caller that originally patched

**Returns:** `Array<function>`
___

### getPatchesByCaller
Returns all patches by a particular caller. The patches all have an `unpatch()` method.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
caller|string|ID of the caller that originally patched

**Returns:** `Array<function>`
___

### before
This method patches onto another function, allowing your code to run beforehand. Using this, you are also able to modify the incoming arguments before the original method is run.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
caller|string|Name of the caller of the patch function.
module|object|Object with the function to be patched. Can also patch an object's prototype.
method|string|Name of the method to be patchedd
callback|function|Function to run before the original method. The function is given the `this` context and the `arguments` of the original function.

**Returns:** `void`
___

### instead
This method patches onto another function, allowing your code to run instead. Using this, you are also able to modify the return value, using the return of your code instead.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
caller|string|Name of the caller of the patch function.
module|object|Object with the function to be patched. Can also patch an object's prototype.
method|string|Name of the method to be patchedd
callback|function|Function to run instead of the original method. The function is given the `this` context, the `arguments` of the original function, and also the original function.

**Returns:** `void`
___

### after
This method patches onto another function, allowing your code to run after. Using this, you are also able to modify the return value, using the return of your code instead.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
caller|string|Name of the caller of the patch function.
module|object|Object with the function to be patched. Can also patch an object's prototype.
method|string|Name of the method to be patchedd
callback|function|Function to run after the original method. The function is given the `this` context, the `arguments` of the original function, and the `return` value of the original function.

**Returns:** `void`
___
