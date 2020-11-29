/**
 * @name Plugin Name
 * @version 1.0.0
 * @description A description of your plugin.
 * @author Plugin Author
 * @website https://betterdiscord.net/
*/

module.exports = class ExamplePlugin {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the document.
}
