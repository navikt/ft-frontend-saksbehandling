import{j as i}from"./jsx-runtime-DEdD30eg.js";import{q as u}from"./index.es-Bzvrl8hr.js";import{r as l}from"./index-RYns6xqu.js";import{u as y}from"./useId-BokJARe0.js";var b=function(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,s=Object.getOwnPropertySymbols(e);t<s.length;t++)r.indexOf(s[t])<0&&Object.prototype.propertyIsEnumerable.call(e,s[t])&&(n[s[t]]=e[s[t]]);return n};const g=l.forwardRef((e,r)=>{var{title:n,titleId:s}=e,t=b(e,["title","titleId"]);let a=y();return a=n?s||"title-"+a:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":a},t),n?l.createElement("title",{id:a},n):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))}),v=g,_="_assessed-by_3btl4_1",h={"assessed-by":"_assessed-by_3btl4_1",assessedBy:_},p=({name:e,date:r})=>e?i.jsxs("div",{className:h["assessed-by"],children:[i.jsx(v,{height:"1.5em",width:"1.5em"}),i.jsx("span",{children:`Vurdering av ${e}${r?`, ${u(r)}`:""}`})]}):null,f=p;p.__docgenInfo={description:"",methods:[],displayName:"AssessedBy",props:{name:{required:!1,tsType:{name:"string"},description:""},date:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"AssessedBy",component:f},x=()=>i.jsx(f,{name:"navn",date:"2023-01-01"}),o=x.bind({});var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:'() => <AssessedBy name="navn" date="2023-01-01" />',...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,A as default};