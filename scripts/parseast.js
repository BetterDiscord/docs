const ast = require("./data/jsdoc-ast.json");

const modules = ["AddonAPI", "BdApi", "Patcher", "Webpack", "Filters", "Data", "DOM", "ReactUtils", "UI", "Utils", "ContextMenu"];

const formatLink = s => {
    s = s.replace(/\r/g, " ");
    for (const mod of modules) {
        s = s.replace(`{@link ${mod}}`, `[${mod}](./${mod.toLowerCase()})`);
    }
    return s;
};

const nameSort = (a, b) => {
    const aName = a.name;
    const bName = b.name;
    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
};


function getProps(memberName) {
    const moduleProps = ast.filter(n => n.memberof === memberName && n.kind === "member" && !n.undocumented);
    moduleProps.sort(nameSort);
    return moduleProps.map(n => ({name: n.name, description: formatLink(n.summary || n.description), type: n?.type?.names[0] ?? n.name, deprecated: n.deprecated}));
}

function getMethods(memberName) {
    const moduleMethods = ast.filter(n => n.memberof === memberName && n.kind === "function" && !n.undocumented);
    moduleMethods.sort(nameSort);
    
    return moduleMethods.map(n => (
        {
            name: n.name,
            description: formatLink(n.summary || n.description),
            deprecated: n.deprecated,
            returns: (n?.returns && n?.returns[0]?.type) ? {type: n.returns[0].type.names[0], description: formatLink(n.returns[0].description || "")} : null,
            parameters: n.params && n.params.length && n.params[0].name ? n.params.map(p => ({name: p.name, description: formatLink(p.description || ""), type: p.variable ? "..." + p.type?.names.join("|") : p.type?.names.join("|"), optional: p.optional, value: p.defaultvalue})) : null
        })
    );
}

module.exports = function getModule(name, memberName) {
    if (!memberName) memberName = name;
    const moduleNode = ast.find(n => n.name === name && n.longname === memberName && !n.undocumented);
    if (!moduleNode) return console.log("Could not find info for ", name); // eslint-disable-line no-console
    return {name: moduleNode.name, description: formatLink(moduleNode.description || moduleNode.classdesc), properties: getProps(memberName), methods: getMethods(memberName)};
};