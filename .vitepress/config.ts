import {DefaultTheme, defineConfig, UserConfig} from "vitepress";
import {VitePressSidebarOptions, withSidebar} from "vitepress-sidebar";
import {bundledLanguages, LanguageRegistration} from "shiki";


const VITEPRESS_CONFIG: UserConfig<DefaultTheme.Config> = {
    srcDir: "./docs",
    title: "BetterDiscord",
    description: "The Discord customization experience.",
    head: [
        ["meta", {"og:site_name": "BetterDiscord Docs"}],
        ["meta", {"og:title": "BetterDiscord Documentation & Guides"}],
        ["meta", {"og:description": "User and developer documentation for using and creating addons for BetterDiscord."}],
        ["meta", {"og:image": "/branding/logo_solid.png"}],
        ["meta", {"og:image:alt": "BetterDiscord Logo"}],

        ["meta", {"twitter:card": "summary"}],
        ["meta", {"twitter:site": "BetterDiscord Logo"}],
        ["meta", {"twitter:title": "BetterDiscord Documentation & Guides"}],
        ["meta", {"twitter:description": "User and developer documentation for using and creating addons for BetterDiscord."}],
        ["meta", {"twitter:image": "/branding/logo_solid.png"}],
        ["meta", {"twitter:image:alt": "BetterDiscord Logo"}],

        ["meta", {"theme-color": "#3a71c1"}],
        ["meta", {description: "User and developer documentation for using and creating addons for BetterDiscord."}],
        ["meta", {keywords: "Discord, BetterDiscord, Better Discord, Discord Mod, Discord Themes, Discord Plugins, Discord Extensions, Discord Client Mod, Discord Hacks, Documentation, Docs, Guide, Tutorial"}],
        ["meta", {author: "BetterDiscord"}],

        ["link", {rel: "icon", href: "/favicon/favicon-96x96.png"}],
    ],
    // cleanUrls: true,
    themeConfig: {
        siteTitle: false,
        logo: "/branding/logo_large.svg",
        nav: [
            {text: "Home", link: "/"},
            {text: "User Guides", link: "/users/"},
            {
                text: "Developer Guides",
                items: [
                    {text: "General", link: "/developers/"},
                    {text: "Plugins", link: "/plugins/"},
                    {text: "Themes", link: "/themes/"},
                ]
            },
            {
                text: "Reference",
                items: [
                    {text: "API", link: "/api/"},
                    {text: "Discord", link: "/discord/"},
                ]
            },
        ],

        socialLinks: [
            {
                icon: {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
                },
                link: "https://betterdiscord.app"
            },
            {icon: "discord", link: "https://betterdiscord.app/invite"},
            {icon: "twitter", link: "https://x.com/_BetterDiscord_"},
            {icon: "github", link: "https://github.com/BetterDiscord/BetterDiscord"}
        ],

        editLink: {
            pattern: "https://github.com/BetterDiscord/docs/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },

        lastUpdated: {
            text: "Updated at",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium"
            }
        },

        search: {
            provider: "local"
        },
        
        outline: "deep",
    },

    markdown: {
        codeTransformers: [
            {
                name: "highlight-bdapi",
                preprocess(code, options) {
                    function findAllSubstringIndexes(str: string, substr: string): number[] {
                        const indexes: number[] = [];
                        let i = -1;
                        while ((i = str.indexOf(substr, i + 1)) !== -1) indexes.push(i);
                        return indexes;
                    }
                
                    const words = ["BdApi"];
                    options.decorations ||= [];
                    for (const word of words) {
                    const indexes = findAllSubstringIndexes(code, word);
                    for (const index of indexes) {
                        options.decorations.push({
                            start: index,
                            end: index + word.length,
                            properties: {
                                "class": "global-bdapi",
                            },
                        });
                    }
                    }
                },
            }
        ],
        shikiSetup: async (shiki) => {
            const css = await bundledLanguages.css();
            const js = await bundledLanguages.js();

            const bdcss: LanguageRegistration = {
                ...css.default[0],
                patterns: [
                    {include: "#docblock"},
                    {include: "#jsdoctype"},
                    {include: "#inline-tags"},
                    {include: "#comment"},
                    ...css.default[0].patterns,
                ],
                repository: Object.assign({}, {
                    "brackets": js.default[0].repository.brackets,
                    "docblock": js.default[0].repository.docblock,
                    "comment": js.default[0].repository.comment,
                    "jsdoctype": js.default[0].repository.jsdoctype,
                    "inline-tags": js.default[0].repository["inline-tags"]
                }, css.default[0].repository),
            };

            await shiki.loadLanguage(bdcss);
        },
        theme: "dark-plus"
    }
};


const SIDEBARS: VitePressSidebarOptions[] = [
    {
        documentRootPath: "docs",
        scanStartPath: "api",
        basePath: "/api/",
        resolvePath: "/api/",
        useTitleFromFileHeading: true,
        includeRootIndexFile: true, 
        sortFolderTo: "bottom",
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 1,
    },
    {
        documentRootPath: "docs",
        scanStartPath: "discord",
        basePath: "/discord/",
        resolvePath: "/discord/",
        useTitleFromFileHeading: true,
        includeRootIndexFile: true, 
        sortFolderTo: "bottom",
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 1,
    },
    {
        documentRootPath: "docs",
        scanStartPath: "users",
        basePath: "/users/",
        resolvePath: "/users/",
        useTitleFromFileHeading: true,
        includeRootIndexFile: true, 
        capitalizeEachWords: true,
        collapsed: false,
        sortFolderTo: "bottom",
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 1,
        manualSortFileNameByPriority: ["getting-started", "guides"],
    },
    {
        documentRootPath: "docs",
        scanStartPath: "developers",
        basePath: "/developers/",
        resolvePath: "/developers/",
        useTitleFromFileHeading: true,
        includeRootIndexFile: true, 
        sortFolderTo: "bottom",
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 1,
    },
    {
        documentRootPath: "docs",
        scanStartPath: "plugins",
        basePath: "/plugins/",
        resolvePath: "/plugins/",
        useTitleFromFileHeading: true,
        includeRootIndexFile: true, 
        capitalizeEachWords: true,
        collapsed: false,
        sortFolderTo: "bottom",
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 1,
        manualSortFileNameByPriority: ["introduction", "basics", "intermediate", "advanced"],
    },
    {
        documentRootPath: "docs",
        scanStartPath: "themes",
        basePath: "/themes/",
        resolvePath: "/themes/",
        useTitleFromFileHeading: true,
        includeRootIndexFile: true, 
        capitalizeEachWords: true,
        collapsed: false,
        sortFolderTo: "bottom",
        sortMenusByFrontmatterOrder: true,
        frontmatterOrderDefaultValue: 1,
        manualSortFileNameByPriority: ["introduction", "basics", "intermediate", "advanced"],
    }
];

export default defineConfig(withSidebar(VITEPRESS_CONFIG, SIDEBARS));