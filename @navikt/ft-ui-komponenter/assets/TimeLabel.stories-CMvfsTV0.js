import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{a as o,P as m}from"./index-Br-af3yC.js";import{t as d}from"./index.es-Sn2FXRYn.js";import"./index-DRjF_FHU.js";const r=({dateTimeString:a})=>t.jsx(o,{value:new Date(a),hour:"numeric",minute:"numeric",second:"numeric"});r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const l=d({}),b={title:"TimeLabel",component:r},e=()=>t.jsx(m,{value:l,children:t.jsx(r,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const v=["visTidslabel"];export{v as __namedExportsOrder,b as default,e as visTidslabel};
