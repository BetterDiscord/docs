# Overview

The BetterDiscord API is available to plugins via the global [BdApi](BdApi.md) variable. It contains numerous utilities for things like creating user interfaces and working with Discord's internals. It is split up into several namespaces which are listed in the sidebar. If you are just starting out, it is recommended to read the [Plugin Developer Guide](/plugins) before diving into these docs.

Some methods (for example [Data.save](Data.md#save)) expect to be passed the name of the plugin calling them so they can be cleaned up later. This can be done creating a bound instance of BdApi, by instantiating it and passing it the name of your plugin, like so:

```js
const Api = new BdApi("MyPlugin");

// Unbound API
BdApi.Data.save("MyPlugin", "value", 10);

// Bound API
Api.Data.save("value", 10);
```

Because of this convenience it is generally recommended that plugins use a bound API.