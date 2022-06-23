module.exports = new class CustomShortcodes {
    add(eleventyConfig) {
        eleventyConfig.addShortcode("apiProperty", this.apiProperty);
        eleventyConfig.addShortcode("apiMethod", this.apiMethod);
    }

    apiProperty(property) {
        const lines = [
            `### ${property.name}`,
            property.description,
            ``,
            `**Type:** ${property.type}`,
            `___`
        ];
        return lines.join("\n");
    }

    apiMethod(method) {
        const deprecation = ` <span class="deprecated">Deprecated</span>`;
        const table = [
            `| Parameter |  Type  | Optional | Default |       Description      |`,
            `|:---------:|:------:|:--------:|:-------:|:----------------------:|`,
        ];
        if (method.parameters) {
            for (const parameter of method.parameters) {
                const paramString = [
                    parameter.name,
                    parameter.type,
                    parameter.options ? "&#x2705;" : "&#x274C;",
                    parameter.default || "*none*",
                    parameter.description
                ];
                table.push(paramString.join("|"));
            }
            table.push("");
        }
        const lines = [
            `### ${method.name}` + (method.deprecated ? deprecation : ""),
            method.description,
            method.parameters ? table.join("\n") : "",
            `**Returns:** ${method.type || "void"}`,
            `___`
        ];
        return lines.join("\n");
    }
};