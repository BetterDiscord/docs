---
order: 1
description: Patch other functions with your function.
---

# Function Patching

This guide goes over the concept of function patching also sometimes referred to as monkey patching. If you're already familiar with this concept, consider checking out the [Examples](#examples) that show the utility provided by `BdApi.Patcher`.
## Background

### What is a function patch?

A function patch an advanced technique for plugins that allow you to modify existing functions including Discord's own functions. There are typically three different "kinds" of patches as well. There are ones where you run your own code `before` the original function usually with the goal to modify the arguments before they are passed to the original function. There are patches meant to run `instead` of the original function, taking full control over arguments, functionality, and return value. And there are ones meant to run `after` the original function with the goal of modifying the return value before it is passed elsewhere.

### Why would I use one?

It's a great way to modify or extend Discord's functionality with your own while keeping integration mostly seamless. It can also act as a way to modify the way Discord works currently. Take the plugin [HideDisabledEmojis](https://betterdiscord.app/plugin/HideDisabledEmojis) for example, it uses function patching to modify the way Discord's internal functions work to stop trying to render emojis the user cannot use. Your possibilities for the plugins you can make increase exponentially, and the quality usually ends up being higher due to the tight integration with Discord.

### How can I patch a function?

Unfortunately, you can't patch a function *directly*, you have to modify the *reference* to the function that other code uses. That means if your target function is just a locally or globally available function like this

```js
function yourTarget() {}
```

then you can't really affect it. However, if your target is part of an object in some way, like being contained in an imported module, you can overwrite that reference with your own function causing everyone to call your function instead.

```js:line-numbers
const someObject = {
    yourTarget: function() {
        console.log("red");
    }
};

function targetUser() {
    someObject.yourTarget();
}

targetUser(); // Logs "red"

// highlight-start
function myNewFunction() {
    console.log("green");
}

someObject.yourTarget = myNewFunction;
// highlight-end

targetUser(); // Now logs "green"
```

If you take a look at the highlighted section, we are creating a new function `myNewFunction` that logs `green` and assigning it to `someObject.yourTarget` effectively overwriting the target function. That means when `targetUser` is called again, your function gets run successfully because it references the `someObject` object. This here is known as an `instead` patch because it completely replaces the target. All patches start this way but can expanded to become a `before` or `after` patch by storing a reference and calling the original function. This also opens the door to subpatches and multiple users, but that can get complicated very fast.

#### BetterDiscord

Luckily, BetterDiscord already has a system in place to manage multiple patches per function and allows you to target different patch types. This means if you want to do a `before` or `after` patch, you no longer have to manually replace the function and retain references and call the original. All of this is done for you with `BdApi.Patcher`. Let's take a look at how our example above could be done with this module.

```js:line-numbers
const someObject = {
    yourTarget: function() {
        console.log("red");
    }
};

function targetUser() {
    someObject.yourTarget();
}

targetUser(); // Logs "red"

// highlight-start
BdApi.Patcher.instead("MyPlugin", someObject, "yourTarget", () => console.log("green"));
// highlight-end

targetUser(); // Now logs "green"
```

This code has the same effect as before, causing `targetUser` to instead log `green`. But let's take a closer look at the highlighted line. We have a call to `BdApi.Patcher.instead` which indicates we want to create an `instead` patch. We pass it `"MyPlugin"` which is an identifier used later to help removed all your patches with `BdApi.Patcher.unpatchAll`. Then we give it the target object `someObject` and the key of our target inside that object `yourTarget` and our new function to override the original. BetterDiscord takes care of the rest and even allows other plugins to patch on top of yours.


## Examples

For all of these examples, our setup is the following:

```js:line-numbers
function someGlobal() {
    console.log("global function");
    return 2;
}

const someModule = {
    value: "foobar",
    method(val = 0) {
        const globalValue = someGlobal();
        return globalValue + 1 + val;
    },
    otherMethod(someArg) {
        console.log(`My value ${someArg}`);
    }
};
```

In this setup, `someGlobal` is a function that cannot be patched because there is no reference to replace. However `someModule.method` and `someModule.otherMethod` can both be patched.

### Before

If there's a function you want to modify the arguments for, a `before` patch is the right one for you. Take a look at this patch below.

```js:line-numbers
BdApi.Patcher.before("MyPlugin", someModule, "otherMethod", (thisObject, args) => {
    console.log(args);
});

someModule.otherMethod("something");
// > ["something"]
// > My value something
```

In this example we didn't modify the arguments, we just wanted to log them out to see what kind of values we might get. This is a good technique to help modify arguments selectively. Suppose we don't mind that `something` is logged, but we don't like when `token` is logged. How might that look?

```js:line-numbers
BdApi.Patcher.before("MyPlugin", someModule, "otherMethod", (thisObject, args) => {
    const firstArgument = args[0];
    // highlight-start
    if (firstArgument === "token") {
        args[0] = "redacted";
    }
    // highlight-end
});

someModule.otherMethod("something"); // > My value something
someModule.otherMethod("token");     // > My value redacted
```

This highlighted section checks when someone passes `token` as the value to `otherMethod` and replaces it with `redacted`. Note the replacement that happens inside the `if` statement. This is another case of using a reference to overwrite, except this time it is in the `arguments` array. This is something to keep in mind as you do more `before` patches.

### Instead

You may have already seen a basic `instead` patch in the [section above](#how-can-i-patch-a-function) but let's take a look at a slightly more complex version.

```js:line-numbers
function myFunction(val) {
    console.log(`Intercepted ${val}`);
}

BdApi.Patcher.instead("MyPlugin", someModule, "method", (thisObject, args, originalFunction) => {
    const firstArgument = args[0];
    if (firstArgument === 5) return originalFunction(...args);
    if (firstArgument === 1) return myFunction(...args);
});

someModule.method(5); // > 8
someModule.method(1); // > Intercepted other
someModule.method(1); // > undefined
```

Take a look at the function we define in the `instead` patch. We have a new parameter `originalFunction` that BetterDiscord gives us to use as we see fit. In this example we use it for a specific value. If the value is `5` we let the original function run and return without modification. If the value is `1` we pass it to an external function and let that handle the arguments and the return. Otherwise, the function has no return value at all. This is a huge change to the function. It used to always return a value, and now it only returns values for two cases. This is a good demonstration how much power function patching can have.

### After

This type of patch is perhaps the most frequently used in plugins, but if you've stuck with us for the first two, this one will be easy to get the hang of.

```js:line-numbers
BdApi.Patcher.after("MyPlugin", someModule, "method", (thisObject, args, returnValue) => {
    return returnValue * 2;
});

someModule.method(5); // > 16
someModule.method();  // > 6
```

You'll notice that `originalFunction` from before has turned into `returnValue`. Here we simply multiply that by `2` every time and return the value to the caller. So that means for any number we pass, the original function applies and returns, then our patch picks up that value and multiplies by `2`, then the function caller finally gets their value. The BetterDiscord `Patcher` will use whatever `return` value you use. However if you *don't* return anything, then the original return value is used. This can have profound effects. Consider this case below:

```js
const myNewNumber = 5 / someModule.method(5);
```

Now let's switch up our return value for only `5`.

```js:line-numbers
BdApi.Patcher.after("MyPlugin", someModule, "method", (thisObject, args, returnValue) => {
    if (args[0] === 5) return {};
});
```

In our patch this time, we `return` a value only in the case of `5`, in all other cases the default `return` of the original function is used because we didn't return anything. If we wanted to stop that we could put a `return null;` on the next line. You may have also noticed that our return is no longer a value. So what happens to our case above?

```js:line-numbers
BdApi.Patcher.after("MyPlugin", someModule, "method", (thisObject, args, returnValue) => {
    if (args[0] === 5) return {};
});

const myNewNumber = 5 / someModule.method(5); // NaN
```

This lead `myNewNumber` to become `NaN` or *not a number*. Which is ironic considering the variable name. But it's a good example of how careful we need to be when it comes to modifying the returns of functions.