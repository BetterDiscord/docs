"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[6932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},a="Guidelines",l={unversionedId:"themes/introduction/guidelines",id:"themes/introduction/guidelines",title:"Guidelines",description:"These are guidelines that all themes are expected to abide by. Any themes that violates these will not be added to the BetterDiscord website or marked as official or approved in any fashion. Existing themes that push updates that violate these guidelines will have their updates denied.",source:"@site/docs/themes/introduction/guidelines.md",sourceDirName:"themes/introduction",slug:"/themes/introduction/guidelines",permalink:"/themes/introduction/guidelines",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"themesSidebar",previous:{title:"Theme Structure",permalink:"/themes/introduction/structure"}},s={},u=[{value:"General Guidelines",id:"general-guidelines",level:2},{value:"Usability",id:"usability",level:2},{value:"Code",id:"code",level:2},{value:"Design",id:"design",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guidelines"},"Guidelines"),(0,i.kt)("p",null,"These are guidelines that all themes are expected to abide by. Any themes that violates these ",(0,i.kt)("u",null,"will not")," be added to the BetterDiscord website or marked as official or approved in any fashion. Existing themes that push updates that violate these guidelines will have their updates denied."),(0,i.kt)("h2",{id:"general-guidelines"},"General Guidelines"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Addons must be in public GitHub repositories."),(0,i.kt)("li",{parentName:"ol"},"Addons must not negatively affect users.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g., ban risk, disabling security features, accessing private information"))),(0,i.kt)("li",{parentName:"ol"},"Addons must not discriminate whom can use it."),(0,i.kt)("li",{parentName:"ol"},"Addons must not collect user data without opt-in consent."),(0,i.kt)("li",{parentName:"ol"},"Addons must not include explicit sexual material or other adult content.")),(0,i.kt)("h2",{id:"usability"},"Usability"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Do not degrade the user experience by removing core functionality.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. hiding potentially important actions, unreadable text contrast, use of harmful animations, and flashing text."))),(0,i.kt)("li",{parentName:"ol"},'Do not target a specific user or group of users in a negative way (do not attempt to "ban" people).'),(0,i.kt)("li",{parentName:"ol"},"Do not encourage users to further violate Discord's ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/terms"},"Terms of Service"),", or promote content from outside of the official repository."),(0,i.kt)("li",{parentName:"ol"},"Try to maintain support for Discord's accessability features."),(0,i.kt)("li",{parentName:"ol"},"Maintain performance on modern hardware.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This can be done by limiting the use of intensive animations, filters and effects.")))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your theme's codebase must be made and written primarily by you.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You may not submit an automatically-generated theme, a customized version of someone else's theme, or a codebase written by someone other than you."))),(0,i.kt)("li",{parentName:"ol"},"Only import code from trusted services. (Github, Gitlab, Google Fonts, etc...)"),(0,i.kt)("li",{parentName:"ol"},"Do not abuse remote resources to gather user information, use untrusted content, or circumvent security permissions."),(0,i.kt)("li",{parentName:"ol"},"You may reverse-engineer or use other people's code, provided you have proper permission and your theme's core design does not rely on third-party code."),(0,i.kt)("li",{parentName:"ol"},"Minimize usage of language-specific selectors (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," attributes).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If used, provide sensible fallbacks for other languages.")))),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Themes should not be a basic recolor or background change. Themes should significantly alter the look and feel of Discord."),(0,i.kt)("li",{parentName:"ol"},"Themes should have full coverage of most common pages, popouts, modals and controls. Keep in mind that changing discord's variables does not provide full coverage of the app.")))}c.isMDXComponent=!0}}]);