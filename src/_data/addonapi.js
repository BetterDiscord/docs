module.exports = {
    properties: [
        {name: "folder", description: "The path to the addon folder.", type: "string"},
    ],
    methods: [
        {
            name: "isEnabled",
            description: "Determines if a particular adon is enabled.",
            returns: "boolean",
            parameters: [
                {name: "idOrFile", type: "string", description: "Plugin id or filename."}
            ]
        },
        {
            name: "enable",
            description: "Enables the given addon.",
            returns: null,
            parameters: [
                {name: "idOrFile", type: "string", description: "Plugin id or filename."}
            ]
        },
        {
            name: "disable",
            description: "Disables the given addon.",
            returns: null,
            parameters: [
                {name: "idOrFile", type: "string", description: "Plugin id or filename."}
            ]
        },
        {
            name: "toggle",
            description: "Toggles the given addon.",
            returns: null,
            parameters: [
                {name: "idOrFile", type: "string", description: "Plugin id or filename."}
            ]
        },
        {
            name: "reload",
            description: "Reloads the given addon.",
            returns: null,
            parameters: [
                {name: "idOrFile", type: "string", description: "Plugin id or filename."}
            ]
        },
        {
            name: "get",
            description: "Gets the given addon if it exists and returns the addon object.",
            returns: "{object|undefined}",
            parameters: [
                {name: "idOrFile", type: "string", description: "Plugin id or filename."}
            ]
        },
        {
            name: "getAll",
            description: "Gets all addons of this type.",
            returns: "Array<object>"
        },
    ]
};