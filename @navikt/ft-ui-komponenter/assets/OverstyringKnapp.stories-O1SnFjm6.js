import{j as p}from"./jsx-runtime-z8MfsBtr.js";import{r as s}from"./index-C7aUCl1g.js";import{n as b}from"./index.es-V9tmYcpk.js";import{m as h}from"./nb_NO-7Llcbk-T.js";import{u as O}from"./useId-Bb26kjbG.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DPoVIYO1.js";var w=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n};const _=s.forwardRef((t,a)=>{var{title:n,titleId:e}=t,r=w(t,["title","titleId"]);let o=O();return o=n?e||"title-"+o:void 0,s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":o},r),n?s.createElement("title",{id:o},n):null,s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var x=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n};const j=s.forwardRef((t,a)=>{var{title:n,titleId:e}=t,r=x(t,["title","titleId"]);let o=O();return o=n?e||"title-"+o:void 0,s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":o},r),n?s.createElement("title",{id:o},n):null,s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))}),I="_button_1rql2_1",E={button:I},c=b(h),d=({onClick:t=()=>{},erOverstyrt:a=!1})=>{const[n,e]=s.useState(a),r=()=>{n||(e(!0),t(!0))};return s.useEffect(()=>{e(a)},[a]),p.jsx("button",{className:E.button,"data-testid":"overstyringsknapp",type:"button",onClick:r,"aria-disabled":a,children:n?p.jsx(j,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:c.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):p.jsx(_,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:c.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};d.__docgenInfo={description:"",methods:[],displayName:"OverstyringKnapp",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(overstyrt: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"overstyrt"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => undefined",computed:!1}},erOverstyrt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const V={title:"OverstyringKnapp",component:d},l=()=>p.jsx(d,{}),i=()=>p.jsx(d,{erOverstyrt:!0});l.__docgenInfo={description:"",methods:[],displayName:"visDefaultOverstyringsknapp"};i.__docgenInfo={description:"",methods:[],displayName:"visOverstyringsknappNårOverstyrt"};var u,f,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"() => <OverstyringKnapp />",...(m=(f=l.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var v,y,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"() => <OverstyringKnapp erOverstyrt />",...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const q=["visDefaultOverstyringsknapp","visOverstyringsknappNårOverstyrt"];export{q as __namedExportsOrder,V as default,l as visDefaultOverstyringsknapp,i as visOverstyringsknappNårOverstyrt};
