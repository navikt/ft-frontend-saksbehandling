import{j as t}from"./jsx-runtime-d079401a.js";import{a as d,P as l}from"./index-8c1fe030.js";import{t as m}from"./index.es-9394bb33.js";import"./index-f1f2c4b1.js";const a=({dateString:r})=>t.jsx(d,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(r)}),i=a;try{a.displayName="DateLabel",a.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,displayName:"DateLabel",props:{dateString:{defaultValue:null,description:"",name:"dateString",required:!0,type:{name:"string"}}}}}catch{}const p=m({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),g={title:"DateLabel",component:i},c=()=>t.jsx(l,{value:p,children:t.jsx(i,{dateString:"2017-10-02"})}),e=c.bind({});var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,g as default};
//# sourceMappingURL=DateLabel.stories-efefb115.js.map
