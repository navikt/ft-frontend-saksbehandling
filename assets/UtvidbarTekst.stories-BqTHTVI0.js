import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DASCADcX.js";import{n as f}from"./index.es-BN1WhiVC.js";import{m as T}from"./nb_NO-rIi74fSB.js";import{a as n}from"./Label-CfBdhDeq.js";import{H as g}from"./VStack-CfnCueE0.js";import"./Theme-Bqc_BD0M.js";import{B as U}from"./Button-D87Irl5r.js";import{S as h}from"./ChevronUp-Cac7yk_Y.js";import{S as j}from"./ChevronDown-DKSW_DmS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./omit-B7stZg_p.js";import"./useId-BiFzyKmP.js";import"./BasePrimitive-eMFBMVLd.js";import"./Loader-C31s9nuZ.js";import"./Provider-ChnEfPss.js";import"./useId-sDoo_C8F.js";const x="_button_1j2d0_1",_={button:x},p=f(T),o=({tekst:r,maksLengde:i=100})=>{const[a,v]=b.useState(!1);return r.length<=i?e.jsx(n,{size:"small",children:r}):e.jsxs(g,{justify:"space-between",align:"start",wrap:!1,children:[e.jsx(n,{size:"small",children:a?r:`${r.substring(0,i)}...`}),e.jsx(U,{className:_.button,variant:"tertiary",size:"xsmall",type:"button",icon:a?e.jsx(h,{"aria-hidden":!0}):e.jsx(j,{"aria-hidden":!0}),onClick:()=>v(!a),children:a?p.formatMessage({id:"UtvidbarTekst.VisMindre"}):p.formatMessage({id:"UtvidbarTekst.VisMer"})})]})};o.__docgenInfo={description:"",methods:[],displayName:"UtvidbarTekst",props:{tekst:{required:!0,tsType:{name:"string"},description:""},maksLengde:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}}}};const A={component:o},t=()=>e.jsx(o,{tekst:"Dette er en lang tekst som har en lengde på mer enn 100 tegn som viser funksjonaliteten av UtvidbarTekst-komponenten."}),s=()=>e.jsx(o,{tekst:"Dette er en kort tekst som ikke skal ha UtvidbarTekst-knapp"});t.__docgenInfo={description:"",methods:[],displayName:"UtvidbarTekstKnappVises"};s.__docgenInfo={description:"",methods:[],displayName:"UtvidbarTekstKnappVisesIkke"};var m,d,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'() => <UtvidbarTekst tekst="Dette er en lang tekst som har en lengde på mer enn 100 tegn som viser funksjonaliteten av UtvidbarTekst-komponenten." />',...(k=(d=t.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'() => <UtvidbarTekst tekst="Dette er en kort tekst som ikke skal ha UtvidbarTekst-knapp" />',...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const F=["UtvidbarTekstKnappVises","UtvidbarTekstKnappVisesIkke"];export{t as UtvidbarTekstKnappVises,s as UtvidbarTekstKnappVisesIkke,F as __namedExportsOrder,A as default};
