"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[9071],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(i),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return i?n.createElement(g,l(l({ref:t},c),{},{components:i})):n.createElement(g,l({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,l=new Array(s);l[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<s;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6017:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=i(7462),r=(i(7294),i(3905));const s={sidebar_position:5,description:"Rules for all plugins."},l="Guidelines",a={unversionedId:"plugins/introduction/guidelines",id:"plugins/introduction/guidelines",title:"Guidelines",description:"Rules for all plugins.",source:"@site/docs/plugins/introduction/guidelines.md",sourceDirName:"plugins/introduction",slug:"/plugins/introduction/guidelines",permalink:"/plugins/introduction/guidelines",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Rules for all plugins."},sidebar:"pluginsSidebar",previous:{title:"Plugin Structure",permalink:"/plugins/introduction/structure"},next:{title:"Basics",permalink:"/plugins/basics"}},o={},u=[{value:"General Guidelines",id:"general-guidelines",level:2},{value:"Scope",id:"scope",level:2},{value:"Code",id:"code",level:2},{value:"Security &amp; Privacy",id:"security--privacy",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guidelines"},"Guidelines"),(0,r.kt)("p",null,"These are guidelines that all plugins are expected to abide by. Any plugin that violates these ",(0,r.kt)("u",null,"will not")," be added to the BetterDiscord website or marked as official or approved in any fashion. Existing plugins that push updates that violate these guidelines will have their updates denied."),(0,r.kt)("h2",{id:"general-guidelines"},"General Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addons must be in public GitHub repositories."),(0,r.kt)("li",{parentName:"ul"},"Addons must not negatively affect users.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g., ban risk, disabling security features, accessing private information"))),(0,r.kt)("li",{parentName:"ul"},"Addons must not discriminate whom can use it."),(0,r.kt)("li",{parentName:"ul"},"Addons must not collect user data without opt-in consent."),(0,r.kt)("li",{parentName:"ul"},"Addons must not include explicit sexual material or other adult content.")),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plugins must clean up all changes/modification made by the plugin when it is disabled.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes UI changes, patches, intervals, timeouts, subscriptions, and listeners."))),(0,r.kt)("li",{parentName:"ol"},"Plugins and their corresponding libraries shall not operate outside of their intended functionality.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes but is not limited to: swapping out unrelated components, introducing unnecessary buttons or badges."))),(0,r.kt)("li",{parentName:"ol"},"Plugins must not modify the BetterDiscord UI.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is to maintain a consistent UI/UX, prevent user confusion, and prevent errors."))),(0,r.kt)("li",{parentName:"ol"},"Plugins must not touch or use BetterDiscord's files.")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plugins must set ",(0,r.kt)("inlineCode",{parentName:"li"},"module.exports")),(0,r.kt)("li",{parentName:"ol"},"Plugins must not make use of the ",(0,r.kt)("inlineCode",{parentName:"li"},"child_process")," node module.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Existing plugins are exempt, but no new plugins shall use this. This is due in part to the security risk, and in part due to an impending Discord update that will break this module."))),(0,r.kt)("li",{parentName:"ol"},"Plugins must not modify global variables, global objects, or existing ",(0,r.kt)("inlineCode",{parentName:"li"},"prototype"),"s."),(0,r.kt)("li",{parentName:"ol"},"Plugins must not access BetterDiscord globals ouside of the official API."),(0,r.kt)("li",{parentName:"ol"},"Plugins must not access webpack modules outside of the official API."),(0,r.kt)("li",{parentName:"ol"},"Plugins must not waste hardware resources.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g., repeated webpack searching without caching, storing unnecessary data in memory.")))),(0,r.kt)("h2",{id:"security--privacy"},"Security & Privacy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plugins must not remove security features."),(0,r.kt)("li",{parentName:"ol"},"Plugins must not access user tokens, emails, or passwords."),(0,r.kt)("li",{parentName:"ol"},"Plugins must not risk a user's account.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes but is not limited to: selfbotting, spamming API requests, using non-user APIs, bypassing nitro features, animated status, message logging."))),(0,r.kt)("li",{parentName:"ol"},"Plugins must not provide access to potentially sensitive information from other users of the platform which is not otherwise accessible.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes but is not limited to: hidden channels, deleted messages, invisible/offline status distinction."))),(0,r.kt)("li",{parentName:"ol"},"Plugins must not use remote libraries.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Necessary dependencies should be either bundled or a separate plugin."))),(0,r.kt)("li",{parentName:"ol"},"Plugins must not use closed source nor self-hosted binaries or libaries."),(0,r.kt)("li",{parentName:"ol"},"Plugins must not be obfuscated, minified, include sourcemaps, or be otherwise deceitful.")))}p.isMDXComponent=!0}}]);