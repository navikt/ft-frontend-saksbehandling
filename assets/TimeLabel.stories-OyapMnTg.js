import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{b as a,P as m,f as d}from"./index.es-BQ0OpxNI.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DASCADcX.js";const r=({dateTimeString:o})=>t.jsx(a,{value:new Date(o),hour:"numeric",minute:"numeric",second:"numeric"});r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const l=d({}),v={component:r},e=()=>t.jsx(m,{value:l,children:t.jsx(r,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const f=["visTidslabel"];export{f as __namedExportsOrder,v as default,e as visTidslabel};
