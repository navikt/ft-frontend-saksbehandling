import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CYQpqK1Q.js";import{c as x}from"./bind-_aVJ_0_U.js";import{n as _}from"./index.es-BpqXpD3L.js";import{F as j}from"./FloatRight-bavPnO-e.js";import{a as m,b as d,T as p}from"./Table-CAWe4H8X.js";import{m as R}from"./nb_NO-7Llcbk-T.js";import{u as y}from"./useId-qXXRNB6N.js";import{S as T}from"./ChevronDown-hDpeiqxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CH5l-kYE.js";import"./message-DPiuJITo.js";var w=function(e,l){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)l.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const N=i.forwardRef((e,l)=>{var{title:r,titleId:a}=e,o=w(e,["title","titleId"]);let s=y();return s=r?a||"title-"+s:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},o),r?i.createElement("title",{id:s},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))}),E="_hidden_1pb4f_1",I="_active_1pb4f_8",k="_activeRow_1pb4f_15 _active_1pb4f_8",O="_toggleIcon_1pb4f_19",S="_colTopPadding_1pb4f_22",n={hidden:E,active:I,activeRow:k,toggleIcon:O,colTopPadding:S},A=x.bind(n),u=_(R),v=({showContent:e,content:l,toggleContent:r,children:a,isApLeftBorder:o=!1,alignWithColumn:s=0})=>t.jsxs(t.Fragment,{children:[t.jsxs(m,{onMouseDown:r,onKeyDown:r,hasNoBottomBorder:e,isApLeftBorder:o,noHover:e,isSelected:e,children:[a,t.jsx(d,{className:A("toggleIcon",e?"colTopPadding":void 0),children:t.jsxs(j,{children:[e&&t.jsx(N,{title:u.formatMessage({id:"ExpandableTableRow.Lukke"}),fontSize:"1.5rem"}),!e&&t.jsx(T,{title:u.formatMessage({id:"ExpandableTableRow.Apne"}),fontSize:"1.5rem"})]})})]}),t.jsxs(m,{noHover:!0,isApLeftBorder:o,className:e?n.activeRow:n.hidden,isSelected:e,children:[[...Array(s)].map((M,h)=>t.jsx(d,{className:e?n.active:n.hidden},h)),t.jsx(d,{colspanAll:!0,className:e?n.active:n.hidden,children:t.jsx("div",{className:e?n.active:n.hidden,children:l})})]})]});v.__docgenInfo={description:"@deprecated Bruk heller tabellkomponent fra https://aksel.nav.no/komponenter/core/table",methods:[],displayName:"ExpandableTableRow",props:{showContent:{required:!0,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},toggleContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},isApLeftBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alignWithColumn:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const K={title:"TableMedEkspanderbarRad",component:p,args:{children:t.jsx(t.Fragment,{})},render:()=>{const[e,l]=i.useState(!1),r=i.useCallback(()=>l(!e),[e]);return t.jsx(p,{headerColumnContent:[t.jsx("div",{children:"Navn"},"1"),t.jsx("div",{children:"Alder"},"2")],noHover:!0,children:t.jsxs(v,{isApLeftBorder:!0,showContent:e,toggleContent:r,content:t.jsx("div",{children:"Innhold i rad"}),alignWithColumn:0,children:[t.jsx(d,{children:"Auto Joakim"}),t.jsx(d,{children:"35"})]})})}},c={};var f,g,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(g=c.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const U=["TabellMedEkspanderbarRad"];export{c as TabellMedEkspanderbarRad,U as __namedExportsOrder,K as default};
