import{j as t}from"./jsx-runtime-CLpGMVip.js";import{a,P as m}from"./index-D9DDUrbY.js";import{n as d}from"./index.es-Dh3mAfPy.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=({dateTimeString:o})=>t.jsx(a,{value:new Date(o),hour:"numeric",minute:"numeric",second:"numeric"});r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const l=d({}),v={title:"ui-komponenter/TimeLabel",component:r},e=()=>t.jsx(m,{value:l,children:t.jsx(r,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["visTidslabel"];export{g as __namedExportsOrder,v as default,e as visTidslabel};
