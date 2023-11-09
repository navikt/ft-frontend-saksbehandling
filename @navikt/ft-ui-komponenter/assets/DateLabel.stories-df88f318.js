import{j as t}from"./jsx-runtime-d079401a.js";import{l as i}from"./index-c112ab54.js";import{t as d}from"./index.es-b667d25f.js";import"./index-f1f2c4b1.js";const a=({dateString:r})=>t.jsx(i.FormattedDate,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(r)}),l=a;try{a.displayName="DateLabel",a.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,displayName:"DateLabel",props:{dateString:{defaultValue:null,description:"",name:"dateString",required:!0,type:{name:"string"}}}}}catch{}const m=d({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),D={title:"DateLabel",component:l},p=()=>t.jsx(i.RawIntlProvider,{value:m,children:t.jsx(l,{dateString:"2017-10-02"})}),e=p.bind({});var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateLabel dateString="2017-10-02" />
  </RawIntlProvider>`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,D as default};
//# sourceMappingURL=DateLabel.stories-df88f318.js.map
