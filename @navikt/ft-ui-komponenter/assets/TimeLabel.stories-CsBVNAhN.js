import{j as t}from"./jsx-runtime-CLpGMVip.js";import{a as o,P as m}from"./index-CH5l-kYE.js";import{n as d}from"./index.es-BGVUeLPN.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";const r=({dateTimeString:a})=>t.jsx(o,{value:new Date(a),hour:"numeric",minute:"numeric",second:"numeric"});r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const l=d({}),v={title:"TimeLabel",component:r},e=()=>t.jsx(m,{value:l,children:t.jsx(r,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["visTidslabel"];export{g as __namedExportsOrder,v as default,e as visTidslabel};
