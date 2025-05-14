import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as a,P as m,r as d}from"./index.es-Dq6sdjeM.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DNHX5htx.js";const t=({dateTimeString:o})=>r.jsx(a,{value:new Date(o),hour:"numeric",minute:"numeric",second:"numeric"});t.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const l=d({}),v={component:t},e=()=>r.jsx(m,{value:l,children:r.jsx(t,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["visTidslabel"];export{g as __namedExportsOrder,v as default,e as visTidslabel};
