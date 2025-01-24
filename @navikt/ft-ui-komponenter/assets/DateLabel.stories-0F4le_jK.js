import{j as t}from"./jsx-runtime-CLpGMVip.js";import{F as i,P as d}from"./index-CH5l-kYE.js";import{n as m}from"./index.es-BGVUeLPN.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";const r=({dateString:s})=>t.jsx(i,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(s)});r.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,methods:[],displayName:"DateLabel",props:{dateString:{required:!0,tsType:{name:"string"},description:""}}};const l=m({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),v={title:"DateLabel",component:r},p=()=>t.jsx(d,{value:l,children:t.jsx(r,{dateString:"2017-10-02"})}),e=p.bind({});var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,v as default};
