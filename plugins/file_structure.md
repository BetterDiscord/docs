# Plugin File Structure
Plugins are stored and written in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) files. 

## Requirements

The following requirements must be met for the client to register a file as a plugin:
- Plugins must be contained within a single file.
- Plugins must utilize a [META](todo) on the first line of the file, with the required data fields containing valid entries.
- Plugin files must be named in the following format: `*.plugin.js`. If the client detects a file copy identifier, it will be automatically removed. For example, `myplugin.plugin (1).js` would be truncated to `myplugin.plugin.js`.
> The `*` character may contain any name in it's place, however the `@name` field in your file's [metadata](todo) will determine the name displayed in the client.

## Example Plugin Template

```js
/**
 * @name Plugin Name
 * @version 1.0.0
 * @description A description of your plugin.
 * @author Plugin Author
 * @website https://betterdiscord.app/
*/

module.exports = class ExamplePlugin {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the document.
}
```

Click [here](https://github.com/BetterDiscord/Documentation/blob/main/examples/example.plugin.js) to view the file on this repository.
