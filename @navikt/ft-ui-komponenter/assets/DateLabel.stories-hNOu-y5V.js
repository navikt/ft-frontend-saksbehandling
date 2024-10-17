import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{F as i,P as d}from"./index-BOvcIg3r.js";import{t as m}from"./index.es-PP1hc44y.js";import"./index-CTjT7uj6.js";const a=({dateString:s})=>t.jsx(i,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(s)});a.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,methods:[],displayName:"DateLabel",props:{dateString:{required:!0,tsType:{name:"string"},description:""}}};const l=m({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),D={title:"DateLabel",component:a},p=()=>t.jsx(d,{value:l,children:t.jsx(a,{dateString:"2017-10-02"})}),e=p.bind({});var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,D as default};
