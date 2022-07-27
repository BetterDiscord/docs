"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[6066],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),s=a(7392),i=a(7094),u=a(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:p,values:b,groupId:h,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===p?p:null!=(t=null!=p?p:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:x}=(0,i.U)(),[w,N]=(0,r.useState)(g),Z=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=T[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=Z.indexOf(t),n=f[a].value;n!==w&&(E(t),N(n),null!=h&&x(h,String(n)))},_=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=Z.indexOf(e.currentTarget)+1;a=null!=(n=Z[t])?n:Z[0];break}case"ArrowLeft":{var r;const t=Z.indexOf(e.currentTarget)-1;a=null!=(r=Z[t])?r:Z[Z.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>Z.push(e),onKeyDown:_,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162),s=a(814);const i={sidebar_position:1},u="Quick Start",c={unversionedId:"themes/introduction/quick-start",id:"themes/introduction/quick-start",title:"Quick Start",description:"Quick Start",source:"@site/docs/themes/introduction/quick-start.mdx",sourceDirName:"themes/introduction",slug:"/themes/introduction/quick-start",permalink:"/themes/introduction/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"themesSidebar",previous:{title:"Introduction",permalink:"/category/introduction"},next:{title:"Developer Tools",permalink:"/themes/introduction/devtools"}},d={},m=[{value:"Quick Start",id:"quick-start-1",level:2},{value:"Theme Folder",id:"theme-folder",level:2}],p={toc:m};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"quick-start-1"},"Quick Start"),(0,r.kt)("p",null,"If you already know the basics, or just prefer to learn by trying it yourself and poking around, try this basic plugin template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"multi=true",multi:"true"},"\x3c!-- js --\x3e\n/**\n * @name ExampleTheme\n * @author YourName\n * @description Describe the aesthetic. Maybe a support server link.\n * @version 0.0.1\n */\n\n\x3c!-- css --\x3e\n:root {\n  --my-size: 13px;\n  --my-color: #000000;\n}\n")),(0,r.kt)("p",null,"Save this as ",(0,r.kt)("inlineCode",{parentName:"p"},"YourTheme.theme.css")," in your themes folder (found below) and enable it!"),(0,r.kt)("h2",{id:"theme-folder"},"Theme Folder"),(0,r.kt)(l.Z,{defaultValue:"windows",className:"code-tabs",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"%appdata%\\BetterDiscord\\themes")),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"/Users/[User]/Library/Application Support/BetterDiscord/themes")),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"~/.config/BetterDiscord/themes/"))))}b.isMDXComponent=!0}}]);