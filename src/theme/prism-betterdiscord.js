(function (Prism) {

    // Add JSDoc highlighting to CSS
    Prism.languages.javadoclike.addSupport(["css"], {
        parameter: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
            lookbehind: true
        },
        keyword: {
            // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
            // @word, {@word}
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: true
        },
        punctuation: /[{}]/
    });

    Prism.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
            {
                pattern: /\b(?:BdApi)\b/,
                alias: "class-name"
            }
        ]
    });

    Prism.languages.insertBefore("jsx", "constant", {
        "known-class-name": [
            {
                pattern: /\b(?:BdApi)\b/,
                alias: "class-name"
            }
        ]
    });

})(globalThis.Prism);
