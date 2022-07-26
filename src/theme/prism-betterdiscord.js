(function (Prism) {
    Prism.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
            {
                pattern: /\b(?:BdApi)\b/,
                alias: "class-name"
            }
        ]
    });
})(globalThis.Prism);
