---
eleventyNavigation:
  key: Patcher
  order: 2
---

# Patcher


```js
module.exports = () => {
  const max = Math.max(45, window.MyValue);
  const action = "Test Them";
  const who = action.split(" ")[1];
  const what = action.indexOf(0, who);

  // Show this to console
  console.log(`Who: ${who} | What: ${what}`);

  var object = {};
  object["do"] = action;
  object[Symbol("self")] = Symbol("self");

  console.log(typeof(object));

  console.log(who + what);
  console.log(10 - 5);
  console.log(2 * 6);
  console.log(9 / 3);
  console.log(5 % 2);

  return class GetTested {

  };
};
```