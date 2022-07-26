module.exports = {
    name: "BdApi",
    description: "`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.",
    properties: [
        {name: "React", description: "The React module being used inside Discord.", type: "object"},
        {name: "ReactDOM", description: "The ReactDOM module being used inside Discord.", type: "object"},
        {name: "Patcher", description: "An instance of [Patcher](./patcher) used to affect existing functions.", type: "Patcher"},
        {name: "Plugins", description: "An instance of [AddonAPI](./addonapi) to access plugins.", type: "AddonAPI"},
        {name: "Themes", description: "An instance of [AddonAPI](./addonapi) to access themes.", type: "AddonAPI"},
        {name: "settings", description: "A reference object to get BD's settings.", type: "object"},
        {name: "emotes", description: "A reference object for BD's emotes.", type: "object"},
        {name: "screenWidth", description: "The total active width of the application.", type: "number"},
        {name: "screenHeight", description: "The total active height of the application.", type: "number"},
    ],
    methods: [
        {
            name: "alert",
            description: "Creates an shows an alert modal to the user.",
            parameters: [
                {name: "title", type: "string", description: "The title to show on the modal."},
                {name: "content", type: "string | ReactElement | Array<string | ReactElement>", description: "Content to show in the modal."}
            ]
        },
        {
            name: "clearCSS",
            description: "Removes a `<style>` from the document corresponding to the given ID.",
            returns: null,
            parameters: [
                {name: "id", type: "string", description: "Style ID to be cleared"}
            ]
        },
        {
            name: "deleteData",
            description: "Deletes some saved data for plugin `pluginName` with key `key`.",
            returns: null,
            parameters: [
                {name: "pluginName", type: "string", description: "Which plugin this is being used for."},
                {name: "key", type: "string", description: "Key for which data should be deleted."}
            ]
        },
        {
            name: "disableSetting",
            description: "Disables a BetterDiscord setting by ids.",
            deprecated: true,
            returns: null,
            parameters: [
                {name: "collection", type: "string", value: "settings", description: "Collection ID"},
                {name: "category", type: "string", description: "Category ID within the collection"},
                {name: "id", type: "string", description: "Setting ID within the category"},
            ]
        },
        {
            name: "enableSetting",
            description: "Enable a BetterDiscord setting by ids.",
            deprecated: true,
            returns: null,
            parameters: [
                {name: "collection", type: "string", value: "settings", description: "Collection ID"},
                {name: "category", type: "string", description: "Category ID within the collection"},
                {name: "id", type: "string", description: "Setting ID within the category"},
            ]
        },
        {
            name: "findModule",
            description: "Searches for an internal Discord webpack module based on a filter. Returns the found module or `null` if none.",
            returns: "{any | null}",
            parameters: [
                {name: "filter", type: "function", description: "A function to use to filter modules."},
            ]
        },
        {
            name: "findAllModules",
            description: "Searches for an internal Discord webpack module based on a filter. Returns the found modules or `null` if none. This is the same as `findModule` but finds all matches.",
            returns: "{Array<any> | null}",
            parameters: [
                {name: "filter", type: "function", description: "A function to use to filter modules."},
            ]
        },
        {
            name: "findModuleByProps",
            description: "Searches for an internal Discord webpack module that has every property passed. Returns the found module or `null` if none.",
            returns: "{any | null}",
            parameters: [
                {name: "props", type: "...string", description: "A series of properties to check for."},
            ]
        },
        {
            name: "findModuleByPrototypes",
            description: "Searches for an internal Discord webpack module based that has every prototype passed. Returns the found module or `null` if none.",
            returns: "{any | null}",
            parameters: [
                {name: "protos", type: "...string", description: "A series of prototypes to check for."},
            ]
        },
        {
            name: "findModuleByDisplayName",
            description: "Searches for an internal Discord webpack module that has a specific name. Returns the found module or `null` if none.",
            returns: "{any | null}",
            parameters: [
                {name: "name", type: "string", description: "The `displayName` to check for."},
            ]
        },
        {
            name: "getBDData",
            description: "Gets some data in BetterDiscord's misc data.",
            returns: "any",
            parameters: [
                {name: "key", type: "string", description: "The key of data to get."},
            ]
        },
        {
            name: "getData",
            description: "Alias for `loadData`",
        },
        {
            name: "getInternalInstance",
            description: "Gets the internal react instance for a DOM node if it exists.",
            returns: "object | undefined",
            parameters: [
                {name: "node", type: "HTMLElement", description: "DOM node containing desired react instance."},
            ]
        },
        {
            name: "injectCSS",
            description: "Adds a `<style>` to the document with the given ID.",
            returns: null,
            parameters: [
                {name: "id", type: "string", description: "ID to be used"},
                {name: "css", type: "string", description: "Series of style rules to add"}
            ]
        },
        {
            name: "isSettingEnabled",
            description: "Gets a specific setting's status from BD",
            deprecated: true,
            returns: "boolean",
            parameters: [
                {name: "collection", type: "string", value: "settings", description: "Collection ID"},
                {name: "category", type: "string", description: "Category ID within the collection"},
                {name: "id", type: "string", description: "Setting ID within the category"},
            ]
        },
        {
            name: "linkJS",
            description: "Adds a `<script>` to the document with the given ID and src.",
            deprecated: true,
            returns: null,
            parameters: [
                {name: "id", type: "string", description: "ID to be used"},
                {name: "url", type: "string", description: "URL of the javascript to link"}
            ]
        },
        {
            name: "loadData",
            description: "Gets some saved data for plugin `pluginName` with key `key`.",
            returns: "any",
            parameters: [
                {name: "pluginName", type: "string", description: "Which plugin this is being used for."},
                {name: "key", type: "string", description: "Key for which data should be retrieved."}
            ]
        },
        {
            name: "monkeyPatch",
            deprecated: true,
            description: `This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
 - Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
 - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property \`__monkeyPatched\` set to \`true\`, in case you want to check something programmatically.
 `,
            returns: `function<cancel>`,
            parameters: [
                {name: "module", type: "object", description: "object to be patched. You can can also pass class prototypes to patch all class instances."},
                {name: "methodName", type: "string", description: "Name of the function to be patched."},
                {name: "options", type: "object", description: "Options object to configure the patch."},
                {name: "options.after", type: "function", optional: true, value: "void", description: "Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`."},
                {name: "options.before", type: "function", optional: true, value: "void", description: "Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`."},
                {name: "options.instead", type: "function", optional: true, value: "void", description: "Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` or `after`."},
                {name: "options.once", type: "boolean", optional: true, value: false, description: "Set to `true` if you want to automatically unpatch method after first call."},
                {name: "options.silent", type: "boolean", optional: true, value: false, description: "Set to `true` if you want to suppress log messages about patching and unpatching."}
            ]
        },
        {
            name: "onRemoved",
            description: "Adds a listener for when the node is removed from the document body.",
            returns: null,
            parameters: [
                {name: "node", type: "HTMLElement", description: "Node to be observed"},
                {name: "callback", type: "function", description: "Function to run when the event fires"}
            ]
        },
        {
            name: "openDialog",
            description: "Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api. Returns a `Promise` that resolves to an `object` that has a boolean `cancelled` and a `filePath` string for saving and a `filePaths` string array for opening.",
            returns: `Promise<object>`,
            parameters: [
                {name: "options", type: "object", description: "Options object to configure the dialog."},
                {name: "options.mode", type: "string<open, save>", optional: true, value: "open", description: "Determines whether the dialog should open or save files."},
                {name: "options.defaultPath", type: "string", optional: true, value: "~", description: "Path the dialog should show on launch."},
                {name: "options.filters", type: "Array<object<string, string[]>>", optional: true, value: "[]", description: "An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter)."},

                {name: "options.title", type: "string", optional: true, value: null, description: "Title for the titlebar."},
                {name: "options.message", type: "", optional: true, value: null, description: "Message for the dialog."},

                {name: "options.showOverwriteConfirmation", type: "boolean", optional: true, value: false, description: "Whether the user should be prompted when overwriting a file."},
                {name: "options.showHiddenFiles", type: "boolean", optional: true, value: false, description: "Whether hidden files should be shown in the dialog."},
                {name: "options.promptToCreate", type: "boolean", optional: true, value: false, description: "Whether the user should be prompted to create non-existant folders."},
                {name: "options.openDirectory", type: "boolean", optional: true, value: false, description: "Whether the user should be able to select a directory as a target."},
                {name: "options.openFile", type: "boolean", optional: true, value: true, description: "Whether the user should be able to select a file as a target."},
                {name: "options.multiSelections", type: "boolean", optional: true, value: false, description: "Whether the user should be able to select multiple targets."},
                {name: "options.modal", type: "boolean", optional: true, value: false, description: "Whether the dialog should act as a modal to the main window."},
            ]
        },
        {
            name: "saveData",
            description: "Save some data for plugin `pluginName` under key `key`. Gets saved in the plugins folder under `pluginName.config.json`. Saved data can be accessed with `loadData`.",
            returns: null,
            parameters: [
                {name: "pluginName", type: "string", description: "Which plugin this is being used for."},
                {name: "key", type: "string", description: "Key for which data should be retrieved."},
                {name: "data", type: "any", description: "The data to store"}
            ]
        },
        {
            name: "setBDData",
            description: "Sets some data in BetterDiscord's misc data.",
            returns: null,
            parameters: [
                {name: "key", type: "string", description: "The key of data to get."},
                {name: "data", type: "any", description: "The data to store"}
            ]
        },
        {
            name: "setData",
            description: "Alias for `loadData`"
        },
        {
            name: "showConfirmationModal",
            description: "Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.",
            returns: null,
            parameters: [
                {name: "title", type: "string", description: "Title to show in the modal header."},
                {name: "content", type: "string | ReactElement | Array<string | ReactElement>", description: "Content to show in the modal body."},
                {name: "options", type: "object", value: "{}", description: "Options object to configure the modal."},
                {name: "options.danger", type: "boolean", value: false, description: "Whether the main button should be red or not."},
                {name: "options.confirmText", type: "string", value: "Okay", description: "Text for the confirmation/submit button."},
                {name: "options.cancelText", type: "string", value: "Cancel", description: "Text for the cancel button."},
                {name: "options.onConfirm", type: "function", value: "void", description: "Callback to occur when clicking the submit button."},
                {name: "options.onCancel", type: "function", value: "void", description: "Callback to occur when clicking the cancel button."},
            ]
        },
        {
            name: "showNotice",
            description: "Shows a notice banner at the top of Discord.",
            returns: null,
            parameters: [
                {name: "content", type: "string | Node", description: "Content to show in the banner."},
                {name: "options", type: "object", value: "{}", description: "Options object to configure the notice."},
                {name: "options.type", type: "string", value: "info", description: `Changes the type of the toast stylistically and semantically. Choices: "info", "success", "error", "warning".`},
                {name: "options.buttons", type: "Array<object<string, function>>", value: "[]", description: "An array of objects containing a `label` string and `onClick` handler for buttons."},
                {name: "options.timeout", type: "number", value: "10000", description: "Timeout until the notice is closed. Won't fire if it's set to 0;."},
            ]
        },
        {
            name: "showToast",
            description: "Shows a simple toast message similar to on Android.",
            returns: null,
            parameters: [
                {name: "content", type: "string", description: "Content to show inside the toast."},
                {name: "options", type: "object", value: "{}", description: "Options object to configure the toast."},
                {name: "options.type", type: "string", value: `""`, description: `Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn".`},
                {name: "options.icon", type: "boolean", value: true, description: "Determines whether the icon should show corresponding to the type."},
                {name: "options.timeout", type: "number", value: "3000", description: "Adjusts the time (in ms) the toast should be shown for before disappearing automatically."},
            ]
        },
        {
            name: "suppressErrors",
            description: "Wraps a given function in a `try..catch` block.",
            deprecated: true,
            returns: "function",
            parameters: [
                {name: "risky", type: "function", description: "Function to be wrapped"}
            ]
        },
        {
            name: "testJSON",
            description: "Tests a given object to determine if it is valid JSON.",
            deprecated: true,
            returns: "boolean",
            parameters: [
                {name: "data", type: "object", description: "Object to test"}
            ]
        },
        {
            name: "toggleSetting",
            description: "Toggle a BetterDiscord setting by ids.",
            deprecated: true,
            returns: null,
            parameters: [
                {name: "collection", type: "string", value: "settings", description: "Collection ID"},
                {name: "category", type: "string", description: "Category ID within the collection"},
                {name: "id", type: "string", description: "Setting ID within the category"},
            ]
        },
        {
            name: "unlinkJS",
            description: "Removes a `<script>` to the document with the given ID.",
            deprecated: true,
            returns: null,
            parameters: [
                {name: "id", type: "string", description: "ID to be used"}
            ]
        }
    ]
};