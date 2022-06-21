module.exports = {
    properties: [
        {name: "React", description: "The React module being used inside Discord.", type: "Object"},
        {name: "ReactDOM", description: "The ReactDOM module being used inside Discord.", type: "Object"},
        {name: "Plugins", description: "An instance of [AddonAPI](../addonapi) to access plugins.", type: "AddonAPI"},
        {name: "Themes", description: "An instance of [AddonAPI](../addonapi) to access themes.", type: "AddonAPI"},
        {name: "settings", description: "A reference object to get BD's settings.", type: "Object"},
        {name: "emotes", description: "A reference object for BD's emotes.", type: "Object"},
        {name: "screenWidth", description: "The total active width of the application.", type: "number"},
        {name: "screenHeight", description: "The total active height of the application.", type: "number"},
    ],
    methods: [
        {
            name: "alert",
            description: "Creates an shows an alert modal to the user.",
            parameters: [
                {name: "title", type: "string", description: "The title to show on the modal."},
                {name: "content", type: "string|HTMLString", description: "Content to show in the modal."}
            ]
        },
        {
            name: "clearCSS",
            description: "Removes a `<style>` from the document corresponding to the given ID.",
            returns: null,
            parameters: [
                {name: "id", type: "string", optional: false, value: null, description: "Style ID to be cleared"}
            ]
        },
        {
            name: "deleteData",
            description: "Removes a `<style>` from the document corresponding to the given ID.",
            returns: null,
            parameters: [
                {name: "id", type: "string", optional: false, value: null, description: "Style ID to be cleared"}
            ]
        },
        {
            name: "disableSetting",
            description: "Removes a `<style>` from the document corresponding to the given ID.",
            returns: null,
            parameters: [
                {name: "id", type: "string", optional: false, value: null, description: "Style ID to be cleared"}
            ]
        },
        {
            name: "monkeyPatch",
            deprecated: true,
            description: "Removes a `<style>` from the document corresponding to the given ID.",
            returns: null,
            parameters: [
                {name: "id", type: "string", optional: false, value: null, description: "Style ID to be cleared"}
            ]
        },
    ]
};