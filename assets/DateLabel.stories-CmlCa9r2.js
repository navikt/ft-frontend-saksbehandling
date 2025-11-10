import{j as r,Y as d}from"./iframe-CXmb7qQq.js";import{g as m}from"./withIntl-DJg2eEF_.js";import"./preload-helper-PPVm8Dsz.js";const o=({dateString:a,year:n,month:s,day:i})=>r.jsx(r.Fragment,{children:d(a,{year:n,month:s,day:i})});o.__docgenInfo={description:`DateLabel

Presentasjonskomponent. Formaterer dato på formatet dd.mm.yyyy.

Eksempel:
\`\`\`html
<DateLabel dateString="2017-08-31" />
\`\`\``,methods:[],displayName:"DateLabel",props:{dateString:{required:!0,tsType:{name:"string"},description:""}}};const c=m({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),y={component:o,decorators:[c],argTypes:{year:{control:"radio",options:["numeric","2-digit",void 0]},month:{control:"radio",options:["numeric","2-digit","long","short","narrow",void 0]},day:{control:"radio",options:["numeric","2-digit",void 0]},dateString:{control:"date"}},args:{dateString:"2017-10-02"}},t={},e={args:{day:"numeric",month:"long",year:"2-digit"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    day: 'numeric',
    month: 'long',
    year: '2-digit'
  }
}`,...e.parameters?.docs?.source}}};const u=["Default","MedTilpassetUtrykk"];export{t as Default,e as MedTilpassetUtrykk,u as __namedExportsOrder,y as default};
