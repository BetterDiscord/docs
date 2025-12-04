---
order: 7
description: Modifying existing parts of Discord.
---

# Changing Discord

Using DOM manipulation we learned earlier and some new techniques, you can not only add features to Discord–like the button we added in an earlier section–but you can alter existing functionality of the app.

## Intercepting Events

This is a pretty common technique for modifying Discord's main functions. It's most commonly used for intercepting DOM events. Let's try an example together.

Say we want to change what happens when we click the home button to do something else.


```js
const homeButton = document.querySelector(".listItemWrapper-3d87LP");
const myNewAction = event => {
    // highlight-start
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    // highlight-end

    console.log("Clicked the home button!");
};

homeButton.addEventListener("click", myNewAction);
```

The important lines here are highlighted. The first line prevents browser default action. The second stops the event from propagating up the DOM tree. The third stops the event from propagating to other listeners on the same element. You can get some more [detailed explanations on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation).

You'll note that we kept the `myNewAction` as a separate function so it can later be removed from the element when your plugin stops. But for now, you can go ahead and test this in your DevTools console. When you click the home button, you'll no longer be taken to Discord home, and instead you'll see your message in the console.