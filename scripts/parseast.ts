import ast from "./data/jsdoc-ast.json";
import {Method, Property} from "./types";

const modules = ["AddonAPI", "BdApi", "Patcher", "Webpack", "Filters", "Data", "DOM", "ReactUtils", "UI", "Utils", "ContextMenu"];

const formatLink = (s: string) => {
    s = s.replace(/\r/g, " ");
    for (const mod of modules) {
        s = s.replace(`{@link ${mod}}`, `[${mod}](./${mod.toLowerCase()})`);
    }
    return s;
};

interface Named {
    name: string;
}

const nameSort = <T extends Named>(a: T, b: T) => {
    const aName = a.name;
    const bName = b.name;
    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
};


function getProps(memberName: string): Property[] {
    const moduleProps = ast.filter(n => n.memberof === memberName && (n.kind === "member" || n.kind === "constant") && !n.undocumented);
    (moduleProps as Named[]).sort(nameSort);
    return moduleProps.map(n => ({
        name: n.name ?? "",
        description: formatLink(n.summary || n.description || ""),
        type: n?.type?.names[0] ?? n.name ?? "",
        deprecated: n.deprecated ?? false
    }));
}

function getMethods(memberName: string): Method[] {
    const moduleMethods = ast.filter(n => n.memberof === memberName && n.kind === "function" && !n.undocumented);
    (moduleMethods as Named[]).sort(nameSort);
    
    return moduleMethods.map(n => (
        {
            name: n.name!,
            description: formatLink(n.summary || n.description || ""),
            deprecated: n.deprecated ?? false,
            returns: (n?.returns && n?.returns[0]?.type) ? {type: n.returns[0].type.names[0], description: formatLink(n.returns[0].description || "")} : undefined,
            parameters: n.params && n.params.length && n.params[0].name ? n.params.map(p => ({name: p.name, description: formatLink(p.description || ""), type: p?.variable ? "..." + p.type?.names.join("|") : p.type?.names.join("|"), optional: p?.optional, value: p?.defaultvalue})) : undefined
        })
    );
}

export default function getModule(name: string, memberName?: string) {
    if (!memberName) memberName = name;
    const moduleNode = ast.find(n => n.name === name && n.longname === memberName && !n.undocumented);
    if (!moduleNode || !moduleNode.name) return console.log("Could not find info for ", name);
    return {
        name: moduleNode.name,
        description: formatLink(moduleNode.description || ""),
        properties: getProps(memberName),
        methods: getMethods(memberName)
    };
};