import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{F as i,P as d}from"./index-DPoVIYO1.js";import{n as m}from"./index.es-V9tmYcpk.js";import"./index-C9rmetsa.js";import"./index-C7aUCl1g.js";import"./_commonjsHelpers-CqkleIqs.js";const r=({dateString:s})=>t.jsx(i,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(s)});r.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,methods:[],displayName:"DateLabel",props:{dateString:{required:!0,tsType:{name:"string"},description:""}}};const l=m({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),g={title:"DateLabel",component:r},p=()=>t.jsx(d,{value:l,children:t.jsx(r,{dateString:"2017-10-02"})}),e=p.bind({});var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,g as default};
