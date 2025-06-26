import{j as r,K as y}from"./iframe-C7Bd7qJ1.js";import{g as u}from"./withIntl-WC3pU9cX.js";const m=({dateString:c,year:p,month:l,day:g})=>r.jsx(r.Fragment,{children:y(c,{year:p,month:l,day:g})});m.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,methods:[],displayName:"DateLabel",props:{dateString:{required:!0,tsType:{name:"string"},description:""}}};const k=u({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),D={component:m,decorators:[k],argTypes:{year:{control:"radio",options:["numeric","2-digit",void 0]},month:{control:"radio",options:["numeric","2-digit","long","short","narrow",void 0]},day:{control:"radio",options:["numeric","2-digit",void 0]},dateString:{control:"date"}},args:{dateString:"2017-10-02"}},t={},e={args:{day:"numeric",month:"long",year:"2-digit"}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    day: 'numeric',
    month: 'long',
    year: '2-digit'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const f=["Default","MedTilpassetUtrykk"];export{t as Default,e as MedTilpassetUtrykk,f as __namedExportsOrder,D as default};
