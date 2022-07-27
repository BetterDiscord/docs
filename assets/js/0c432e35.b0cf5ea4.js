"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[8393],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:b,groupId:g,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,i.U)(),[T,y]=(0,l.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==T&&f.some((t=>t.value===e))&&y(e)}const _=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==T&&(Z(t),y(a),null!=g&&x(g,String(a)))},L=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;n=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:L,onFocus:_,onClick:_},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},79:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);n(814);const s={sidebar_position:1,description:"Learning to use React in a plugin."},i="React",u={unversionedId:"plugins/intermediate/react",id:"plugins/intermediate/react",title:"React",description:"Learning to use React in a plugin.",source:"@site/docs/plugins/intermediate/react.mdx",sourceDirName:"plugins/intermediate",slug:"/plugins/intermediate/react",permalink:"/plugins/intermediate/react",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Learning to use React in a plugin."},sidebar:"pluginsSidebar",previous:{title:"Intermediate",permalink:"/plugins/intermediate"},next:{title:"Webpack",permalink:"/plugins/intermediate/webpack"}},c={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react"},"React"),(0,l.kt)(r.Z,{className:"code-tabs",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"JS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'module.exports = props => {\n  return React.createElement("div", {className: props.danger ?? "danger-block"},\n    React.createElement("p", null, "this is text")\n  );\n};\n'))),(0,l.kt)(o.Z,{value:"JSX",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},'module.exports = props => {\n  return <div className={props.danger ?? "danger-block"}>\n    <p>this is text</p>\n  </div>;\n};\n'))),(0,l.kt)(o.Z,{value:"CSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:"showLineNumbers",showLineNumbers:!0},"div {\n  display: flex;\n  padding: 5px 10px;\n  border: 1px solid #904324;\n  background-color: white;\n}\n \ndiv.danger-block {\n  background-color: #ff0000;\n}\n \np {\n  text-align: center;\n  color: black;\n}\n")))),(0,l.kt)("p",null,"The following is just testing for the highlighter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = () => {\n  const max = Math.max(45, window.MyValue);\n  const action = "Test Them";\n  const who = action.split(" ")[1];\n  const what = action.indexOf(0, who);\n\n  // Show this to console\n  console.log(`Who: ${who} | What: ${what}`);\n\n  var object = {};\n  object["do"] = action;\n  object[Symbol("self")] = Symbol("self");\n\n  console.log(typeof(object));\n\n  console.log(who + what);\n  console.log(10 - 5);\n  console.log(2 * 6);\n  console.log(9 / 3);\n  console.log(5 % 2);\n\n  return class GetTested {\n\n  };\n};\n')))}m.isMDXComponent=!0}}]);