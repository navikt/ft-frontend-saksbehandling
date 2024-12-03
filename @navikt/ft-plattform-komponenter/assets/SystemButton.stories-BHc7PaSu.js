import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{h as f}from"./index.es-tSBV-_m3.js";import{B as v}from"./Button-zZhmt40z.js";import{r as l}from"./index-DRjF_FHU.js";import{u as _}from"./useId-Buhlm-42.js";import"./Label-m6Rf9sZI.js";var h=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const g=l.forwardRef((t,n)=>{var{title:a,titleId:e}=t,s=h(t,["title","titleId"]);let m=_();return m=a?e||"title-"+m:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":m},s),a?l.createElement("title",{id:m},a):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.25 5A.75.75 0 0 1 5 4.25h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zm0 6.25A.75.75 0 0 1 5 10.5h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zm.75 5.5a.75.75 0 0 0-.75.75V19c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75zM10.5 5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm.75 5.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75zm-.75 7a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm7-13.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H19a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75zm-.75 7a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm.75 5.5a.75.75 0 0 0-.75.75V19c0 .414.336.75.75.75H19a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75z",clipRule:"evenodd"}))}),b="_systems_fcafa_1",x="_systems__button_fcafa_7",B="_systems__button_fcafa_7",c={systems:b,systems__button:x,systemsButton:B},d=f("systems"),i=({onClick:t,isToggled:n})=>o.jsx("div",{className:c[d.block],children:o.jsx(v,{variant:"tertiary",icon:o.jsx(g,{"aria-hidden":!0}),onClick:t,className:c[d.element("button")],"aria-haspopup":"dialog","aria-expanded":n,children:o.jsx("span",{className:"navds-sr-only",children:"Systemer"})})});i.__docgenInfo={description:"",methods:[],displayName:"SystemButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},isToggled:{required:!1,tsType:{name:"boolean"},description:""}}};const H={title:"System button",component:i},E=()=>o.jsx(i,{onClick:()=>null,isToggled:!0}),r=E.bind({});r.args={};var u,p,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"() => <SystemButtonComponent onClick={() => null} isToggled />",...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const I=["SystemButton"];export{r as SystemButton,I as __namedExportsOrder,H as default};