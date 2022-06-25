---
eleventyNavigation:
  key: React
  order: 1
---

# React

{% codetabs "react", ["JS", "JSX", "CSS"] %}

{% codetab %}
```js
module.exports = props => {
  return React.createElement("div", {className: props.danger ?? "danger-block"},
    React.createElement("p", null, "this is text")
  );
};
```
{% endcodetab %}


{% codetab %}
```jsx
module.exports = props => {
  return <div className={props.danger ?? "danger-block"}>
    <p>this is text</p>
  </div>;
};
```
{% endcodetab %}

{% codetab %}
```css
div {
  display: flex;
  padding: 5px 10px;
  border: 1px solid #904324;
  background-color: white;
}

div.danger-block {
  background-color: #ff0000;
}

p {
  text-align: center;
  color: black;
}
```
{% endcodetab %}
{% endcodetabs %}

The following is just testing for the highlighter.

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