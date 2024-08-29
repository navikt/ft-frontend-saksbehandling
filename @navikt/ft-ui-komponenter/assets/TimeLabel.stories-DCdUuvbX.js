import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{a as m,P as d}from"./index-Cy5oc4iT.js";import{t as l}from"./index.es-Dmn3SaoZ.js";import"./index-CTjT7uj6.js";const n=({dateTimeString:o})=>t.jsx(m,{value:new Date(o),hour:"numeric",minute:"numeric",second:"numeric"}),a=n;n.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const c=l({}),v={title:"TimeLabel",component:a},e=()=>t.jsx(d,{value:c,children:t.jsx(a,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const g=["visTidslabel"];export{g as __namedExportsOrder,v as default,e as visTidslabel};
