"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[6274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3,description:"The development environment."},a="Environment",s={unversionedId:"plugins/introduction/environment",id:"plugins/introduction/environment",title:"Environment",description:"The development environment.",source:"@site/docs/plugins/introduction/environment.md",sourceDirName:"plugins/introduction",slug:"/plugins/introduction/environment",permalink:"/plugins/introduction/environment",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"The development environment."},sidebar:"pluginsSidebar",previous:{title:"Developer Tools",permalink:"/plugins/introduction/devtools"},next:{title:"Plugin Structure",permalink:"/plugins/introduction/structure"}},l={},p=[{value:"Discord",id:"discord",level:2},{value:"Desktop Application",id:"desktop-application",level:3},{value:"Web Application",id:"web-application",level:3},{value:"BetterDiscord",id:"betterdiscord",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Plugin API",id:"plugin-api",level:3},{value:"Discord&#39;s Internals",id:"discords-internals",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environment"},"Environment"),(0,r.kt)("p",null,"No not the one burning up, but the development environment for BetterDiscord plugins. There's mainly two broad categories to look at, the environment of Discord's desktop application itself, and the environment that BetterDiscord brings to it."),(0,r.kt)("h2",{id:"discord"},"Discord"),(0,r.kt)("h3",{id:"desktop-application"},"Desktop Application"),(0,r.kt)("p",null,"Discord Desktop is an ",(0,r.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron")," application which means it is ",(0,r.kt)("em",{parentName:"p"},"essentially")," a chromium web browser that only displays Discord. That is an oversimplification but it's a good high level understanding to have. What makes Electron more than just a browser, is that it bundles Node.js with it, giving every Electron application the ability to interact beyond the capabilities of a web browser and make use of the user's computer."),(0,r.kt)("p",null,"To get a better sense of what this does, think of the limitations of making an application in a web browser. Actions like loading and saving local files, listening to keybinds globally, and controlling the user's clipboard are just not possible in the web browser. Most of these limitations are for security reasons, but with ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),", suddenly those are all very possible."),(0,r.kt)("p",null,"This also means that BetterDiscord, and the plugins, have access to both of these environments as well."),(0,r.kt)("h3",{id:"web-application"},"Web Application"),(0,r.kt)("p",null,"The web application itself is made using the ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," UI library. This is a popular library that allows for responsive and stateful interfaces. In many cases, developers take advantage of the powerful plugins and addons for React. But  Discord chose to use their own event system complete with a custom ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/flux/"},"Flux")," implementation."),(0,r.kt)("p",null,"The actual full implementation of Discord's code is not known. It is possibly written in ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", very likely using modern ",(0,r.kt)("a",{parentName:"p",href:"https://flaviocopes.com/es-modules/"},"ES Modules"),", and most definitely bundled with ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),". The topic of Webpack will be covered later in these docs."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you're not familiar with any of the mentioned libraries, now is a good time to brush up before moving on.")),(0,r.kt)("p",null,"For the curious, here are the versions of the major components as of writing (June 21st 2022)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Component"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chrome"),(0,r.kt)("td",{parentName:"tr",align:"right"},"91.0.4472.164")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Electron"),(0,r.kt)("td",{parentName:"tr",align:"right"},"13.6.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Node"),(0,r.kt)("td",{parentName:"tr",align:"right"},"14.16.0")))),(0,r.kt)("h2",{id:"betterdiscord"},"BetterDiscord"),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"BetterDiscord gives plugins access to the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," bundled into the Discord desktop application. This means anything you can do with Node.js can be done inside of a plugin. There are some caveats, especially when it comes to using modules from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," ecosystem because Electron applications require many packages to be compiled specifically for use with Electron and for that specific platform/OS."),(0,r.kt)("p",null,"The standard library of Node.js is fully available inside of BetterDiscord. For instance, if you want to load a file in the current directory you can just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fs")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nconst myData = fs.readFileSync("myfile.txt", "utf8");\n')),(0,r.kt)("p",null,"Though this guide won't be giving a tutorial on the Node.js standard library--their official docs do that--you will see example usages throughout."),(0,r.kt)("h3",{id:"plugin-api"},"Plugin API"),(0,r.kt)("p",null,"BetterDiscord provides an API for plugins. The guides here show how it's used and the ",(0,r.kt)("a",{parentName:"p",href:"../api/"},"API reference")," section has an exhaustive list of what's available. The API exists as a global and provides several utility functions relevant to plugins. This includes data storage, UI rendering, notifications, and utilities to explore Discord's internals."),(0,r.kt)("h3",{id:"discords-internals"},"Discord's Internals"),(0,r.kt)("p",null,"Inside of this environment, BetterDiscord provides access to Discord's internals via searching their modules. Understanding and using these modules is a task left to the developer. But the ",(0,r.kt)("a",{parentName:"p",href:"../advanced/"},"advanced")," guide provides some insight on how to get started. Searching through and using Discord's own modules are some of the most important skills for building complex plugins."))}c.isMDXComponent=!0}}]);