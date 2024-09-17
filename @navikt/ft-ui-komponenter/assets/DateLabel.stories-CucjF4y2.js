import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{F as d,P as m}from"./index-Cy5oc4iT.js";import{t as l}from"./index.es-CCdEyCKw.js";import"./index-CTjT7uj6.js";const n=({dateString:i})=>t.jsx(d,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(i)}),s=n;n.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,methods:[],displayName:"DateLabel",props:{dateString:{required:!0,tsType:{name:"string"},description:""}}};const p=l({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),v={title:"DateLabel",component:s},c=()=>t.jsx(m,{value:p,children:t.jsx(s,{dateString:"2017-10-02"})}),e=c.bind({});var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,v as default};
