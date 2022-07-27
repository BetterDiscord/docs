"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[7089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2,description:"How to use DOM manipulation."},i="Using the DOM",s={unversionedId:"plugins/basics/dom",id:"plugins/basics/dom",title:"Using the DOM",description:"How to use DOM manipulation.",source:"@site/docs/plugins/basics/dom.md",sourceDirName:"plugins/basics",slug:"/plugins/basics/dom",permalink:"/plugins/basics/dom",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to use DOM manipulation."},sidebar:"pluginsSidebar",previous:{title:"Creating a Plugin",permalink:"/plugins/basics/creating-a-plugin"},next:{title:"Plugin Settings",permalink:"/plugins/basics/settings"}},l={},u=[],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-dom"},"Using the DOM"),(0,r.kt)("p",null,"If you're unfamiliar with the DOM it might be worth taking a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"MDN documentation")," about it."),(0,r.kt)("p",null,"Since we already know from ",(0,r.kt)("a",{parentName:"p",href:"../introduction/environment"},"previous pages")," that Discord is essentially a Chromium browser, we can access the DOM using typical methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Create a reference to the document\nconst myDocument = document;\n\n// Create an element\nconst myElement = document.createElement("div");\n\n// Get an existing element by selector\nconst existingElement = document.querySelector(".button");\n\n// Add an event listener\nexistingElement.addEventListener("click", () => {console.log("clicked!");});\n')),(0,r.kt)("p",null,"You should hopefully be familiar with everything shown above, if not it might be a good idea to check out the MDN link at the beginning of this page."),(0,r.kt)("p",null,"Now as to how we can apply this to plugins in Discord, let's try an example of adding a button that shows an alert when clicked. It might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myButton = document.createElement("button");\nmyButton.textContent = "Click me!";\nmyButton.addEventListener("click", () => {window.alert("Hello World!");});\nconst root = document.getElementById("app-mount");\nroot.append(myButton);\n')),(0,r.kt)("p",null,"You can try this right in the console of your Discord client, and you should see a button appear at the bottom of your screen. Clicking it should give you a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," popup."),(0,r.kt)("p",null,"One thing to note from this code is the root container ",(0,r.kt)("inlineCode",{parentName:"p"},'document.getElementById("app-mount")'),'. Since Discord uses React as their front-end rendering system, their app needs to be "mounted" into the normal DOM hierarchy. Typically, this is in a root container with ID ',(0,r.kt)("inlineCode",{parentName:"p"},"app-mount"),"."),(0,r.kt)("p",null,"And while that works, it's not very practical or useful. And the location of the button is terrible. So what if we wanted to add it to the end of the guild/server list? Let's give it a try!"),(0,r.kt)("p",null,"First, we need to find the DOM subtree for the guild list, the easiest way to do that is to use inspect element from ",(0,r.kt)("a",{parentName:"p",href:"../introduction/devtools"},"devtools")," and select the guild list on the left."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Server List",src:n(344).Z,width:"618",height:"316"})),(0,r.kt)("p",null,"If yours looks like the one above, you've got the right element. Now we need to come up with a selector for the element. You can try to use the built in method by right clicking the element, then going to ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy > Copy Selector"),". But that usually yields unwieldly selectors like ",(0,r.kt)("inlineCode",{parentName:"p"},"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt > div:nth-child(3)")," in this case."),(0,r.kt)("p",null,"So lets do it manually. Since this element has no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," but it does have an ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute, it seems obvious to use an attribute selector like ",(0,r.kt)("inlineCode",{parentName:"p"},'[aria-label="Servers"]'),". This does have a big problem however. This value changes based on the language the user has Discord set to. So while this may work for you in English, it won't work for many many others. If you're unfamiliar with ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," or accessible web browsing in general, once again ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"MDN has great documentation")," on this topic."),(0,r.kt)("p",null,"Since that didn't work out, let's take another look. We can see there are a couple unique classes in the ancestor hierarchy like ",(0,r.kt)("inlineCode",{parentName:"p"},"tree-3agP2X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"guilds-2JjMmN"),". We can combine these with the fact the ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," only exists on the element we are targeting to create a selector like ",(0,r.kt)("inlineCode",{parentName:"p"},".tree-3agP2X > div > div[aria-label]"),". Since this doesn't depend on the ",(0,r.kt)("em",{parentName:"p"},"value")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute, it will still work regardless of language. Note: there are other selectors that work as well, this is just an example."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Many of Discord's classes end in weird strings like ",(0,r.kt)("inlineCode",{parentName:"p"},"-3agP2X")," because they use a system that prevents class collisions automatically. This means these strings are subject to change. A better way to get the desired class name will be covered in later sections.")),(0,r.kt)("p",null,"If we use our selector with our previous code, we can add our button to the guild list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myButton = document.createElement("button");\nmyButton.textContent = "Click me!";\nmyButton.addEventListener("click", () => {window.alert("Hello World!");});\nconst serverList = document.querySelector(".tree-3agP2X > div > div[aria-label]");\nserverList.append(myButton);\n')),(0,r.kt)("p",null,"If you try this out on console, you should see your button at the bottom of the guild list (you may have to scroll down). Clicking it should still cause your alert to appear."),(0,r.kt)("p",null,"One problem that is common when working with Discord (and react) is sometimes your elements disappear. This could be from React refreshing the view and purging your element, or the user changes views (changing channel or server). This may even happen to your button in the guild list when that refreshes."),(0,r.kt)("p",null,"How can we prevent this? Well we can't with normal DOM manipulation. But we ",(0,r.kt)("em",{parentName:"p"},"can")," work around it. We can detect when our button is removed and re-add it. Enter ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"},"mutation observers"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// This part adds our button\nconst myButton = document.createElement("button");\nmyButton.textContent = "Click me!";\nmyButton.addEventListener("click", () => {window.alert("Hello World!");});\nconst serverList = document.querySelector(".tree-3agP2X > div > div[aria-label]");\nserverList.append(myButton);\n\n\n// This part waits for it to be removed\nconst myCallback = mutations => {\n    // We only care about our button being removed\n    if (mutations.removedNodes.length === 0) return;\n\n    // Convert to array to allow array functions\n    const removedNodes = Array.from(mutations.removedNodes);\n\n    // We only care about our button\n    if (!removedNodes.includes(myButton)) return;\n\n    // Getting here means our button was removed, lets add it back\n    serverList.append(myButton);\n};\nconst myObserver = new MutationObserver(myCallback);\nconst observerOptions = {\n    childList: true,\n    subtree: false // We don\'t need subtree, only direct children\n};\nmyObserver.observe(serverList, observerOptions);\n')),(0,r.kt)("p",null,"This will now re-append the button anytime it is removed from the server list. The code is a little inconvenient to write, and it's very specific to that button. But thankfully, ",(0,r.kt)("a",{parentName:"p",href:"../api/bdapi"},"BdApi")," has a utility function that can help called ",(0,r.kt)("inlineCode",{parentName:"p"},"onRemoved"),". This code rewritten would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// This part adds our button\nconst myButton = document.createElement("button");\nmyButton.textContent = "Click me!";\nmyButton.addEventListener("click", () => {window.alert("Hello World!");});\nconst serverList = document.querySelector(".tree-3agP2X > div > div[aria-label]");\nserverList.append(myButton);\n\n// This part re-adds it when removed\nBdApi.onRemoved(myButton, () => {\n    serverList.append(myButton);\n});\n')),(0,r.kt)("p",null,"This is much cleaner and more descriptive of the action being taken. This is just one of the many helper functions that exist in ",(0,r.kt)("inlineCode",{parentName:"p"},"BdApi"),". You'll learn more as you go through the docs. In fact, there are two more functions ",(0,r.kt)("inlineCode",{parentName:"p"},"injectCSS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clearCSS")," that can be helpful for our button example."),(0,r.kt)("p",null,"These are pretty simple and straightforward. Say we added a class ",(0,r.kt)("inlineCode",{parentName:"p"},"my-button")," to our button from before. We could then style it with css externally using this snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".my-button {\n    padding: 4px;\n    border-radius: 5px;\n    background: black;\n    color: white;\n}\n")),(0,r.kt)("p",null,"which is great and works, but we need to have it in our plugin. You can either create and add your own stylesheet to the document using the techniques at the beginning of this page, or you just use ",(0,r.kt)("inlineCode",{parentName:"p"},"BdApi.injectCSS"),". Given an ID and your css, it'll take care of the rest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BdApi.injectCSS("myPluginName", `.my-button {\n    padding: 4px;\n    border-radius: 5px;\n    background: black;\n    color: white;\n}`);\n')),(0,r.kt)("p",null,"which can later be removed using the same ID from before"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BdApi.clearCSS("myPluginName");\n')),(0,r.kt)("p",null,"Try playing around with this and all the techniques discussed above. When you feel comfortable, go ahead and move on to the next section."))}d.isMDXComponent=!0},344:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/servers-38f84dbc8f6fefe3eb5d54099f9913b0.png"}}]);