module.exports = {
    name: "Patcher",
    description: "`Patcher` is a utility class for modifying existing functions. Instances are accessible through the [BdApi](./bdapi). This is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.",
    properties: [
    ],
    methods: [
        {
            name: "getPatchesByCaller",
            description: "Returns all patches by a particular caller. The patches all have an `unpatch()` method.",
            returns: "Array<function>",
            parameters: [
                {name: "caller", type: "string", description: "ID of the caller that originally patched"}
            ]
        },
        {
            name: "getPatchesByCaller",
            description: "Returns all patches by a particular caller. The patches all have an `unpatch()` method.",
            returns: "Array<function>",
            parameters: [
                {name: "caller", type: "string", description: "ID of the caller that originally patched"}
            ]
        },
        {
            name: "before",
            description: "This method patches onto another function, allowing your code to run beforehand. Using this, you are also able to modify the incoming arguments before the original method is run.",
            returns: null,
            parameters: [
                {name: "caller", type: "string", description: "Name of the caller of the patch function."},
                {name: "module", type: "object", description: "Object with the function to be patched. Can also patch an object's prototype."},
                {name: "method", type: "string", description: "Name of the method to be patchedd"},
                {name: "callback", type: "function", description: "Function to run before the original method. The function is given the `this` context and the `arguments` of the original function."}
            ]
        },
        {
            name: "instead",
            description: "This method patches onto another function, allowing your code to run instead. Using this, you are also able to modify the return value, using the return of your code instead.",
            returns: null,
            parameters: [
                {name: "caller", type: "string", description: "Name of the caller of the patch function."},
                {name: "module", type: "object", description: "Object with the function to be patched. Can also patch an object's prototype."},
                {name: "method", type: "string", description: "Name of the method to be patchedd"},
                {name: "callback", type: "function", description: "Function to run instead of the original method. The function is given the `this` context, the `arguments` of the original function, and also the original function."}
            ]
        },
        {
            name: "after",
            description: "This method patches onto another function, allowing your code to run after. Using this, you are also able to modify the return value, using the return of your code instead.",
            returns: null,
            parameters: [
                {name: "caller", type: "string", description: "Name of the caller of the patch function."},
                {name: "module", type: "object", description: "Object with the function to be patched. Can also patch an object's prototype."},
                {name: "method", type: "string", description: "Name of the method to be patchedd"},
                {name: "callback", type: "function", description: "Function to run after the original method. The function is given the `this` context, the `arguments` of the original function, and the `return` value of the original function."}
            ]
        },
    ]
};