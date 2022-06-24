const fullParamHeader = [
    `| Parameter |  Type  | Optional | Default |       Description      |`,
    `|:----------|:------:|:--------:|:-------:|:----------------------:|`,
];

const compactParamHeader = [
    `| Parameter |  Type  |       Description      |`,
    `|:----------|:------:|:----------------------:|`,
];

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
            `___`,
            ""
        ];
        return lines.join("\n");
    }

    apiMethod(method) {
        const deprecation = ` <span class="deprecated">Deprecated</span>`;
        const hasOptionalParams = method.parameters?.some(p => p.optional || p.value);
        const table = (hasOptionalParams ? fullParamHeader : compactParamHeader).slice(0);
        if (method.parameters) {
            for (const parameter of method.parameters) {
                const paramString = [];
                paramString.push(parameter.name);
                paramString.push(parameter.type.replace(/\|/g, "\\|").replace(/</g, "\\<").replace(/>/g, "\\>"));
                if (hasOptionalParams) paramString.push(parameter.optional || parameter.value ? "&#x2705;" : "&#x274C;");
                if (hasOptionalParams) paramString.push(parameter.value ?? "*none*");
                paramString.push(parameter.description);
                table.push(paramString.join("|"));
            }
            table.push("");
        }

        const lines = [
            `### ${method.name}` + (method.deprecated ? deprecation : ""),
            method.description,
            method.parameters ? table.join("\n") : "",
            `**Returns:** ${method.returns?.replace(/</g, "\\<").replace(/>/g, "\\>") ?? "void"}`,
            `___`,
            ""
        ];
        return lines.join("\n");
    }
};