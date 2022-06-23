---
eleventyNavigation:
  key: React
  order: 1
---

# React

{% codetabs "react", ["JS", "JSX", "CSS"] %}

{% codetab %}
```js
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class ExamplessssssssssssssPlugins {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("Hello World!", "This is my first plugin!");
    }

    stop() {
      // Called when the plugin is deactivated
    }
}
```
{% endcodetab %}


{% codetab %}
```jsx
/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class ExamplessPlugins {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert(<h1>Hello World!</h1>, <p>This is my first plugin!</p>);
    } 
    stop() {
      // Called when the plugin is deactivated
    }
}
```
{% endcodetab %}

{% codetab %}
```css multi=true filename=test.csss
<!-- js -->
/**
 * @name ExampledPlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */
 
<!-- css -->
:root {
    --myvar: black;
}

* {
  background: red;
  color: #fff;
  border: 1px solid var(--myvar);
}

.test-class {}

#idtest {
    filter: drop-shadow();
}
```
{% endcodetab %}
{% endcodetabs %}