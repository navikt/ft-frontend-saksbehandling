import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as c}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{M as o}from"./Modal-DCYGPGIE.js";import{H as u,S as g}from"./VStack-BV_sHKUr.js";import"./index-CYQpqK1Q.js";import{H as x,B as h}from"./Label-DiqJXlxg.js";import{B as _}from"./Button-CrwUjO4x.js";import"./v4-CtRu48qb.js";import"./index-4Uuc9FQs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";import"./clsx-B-dksMZM.js";import"./Loader-ByyM_uPu.js";import"./useId-qXXRNB6N.js";const f="_image_18vea_1",v="_text_18vea_5",y="_knapp_18vea_9",r={image:f,text:v,knapp:y},d=({bodyText:m,headerText:t,showModal:p,submit:s})=>e.jsxs(o,{open:p,onClose:s,width:"small","aria-label":t||"Advarsel",children:[e.jsx(o.Body,{children:e.jsxs(u,{gap:"4",children:[e.jsx(g,{height:25,width:25,className:r.image,color:"var(--a-orange-600)"}),e.jsxs("div",{className:r.text,children:[t&&e.jsx(x,{size:"small",children:t}),e.jsx(h,{size:"small",children:m})]})]})}),e.jsx(o.Footer,{children:e.jsx(_,{size:"small",variant:"primary",className:r.knapp,onClick:s,autoFocus:!0,type:"button",children:"OK"})})]});d.__docgenInfo={description:`WarningModal

Modal med advarselikon og som viser en valgfri tekst i tillegg til knappen OK.`,methods:[],displayName:"WarningModal",props:{headerText:{required:!1,tsType:{name:"string"},description:""},bodyText:{required:!0,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"WarningModal"},a=()=>e.jsx(d,{bodyText:"Dette er en advarsel",showModal:!0,submit:c("button-click")});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <WarningModal bodyText="Dette er en advarsel" showModal submit={action('button-click')} />`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,E as default};
