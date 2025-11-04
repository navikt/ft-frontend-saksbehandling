import{j as o,Z as n,P as s,n as d}from"./iframe-D7mg31af.js";import"./preload-helper-PPVm8Dsz.js";const a=({dateTimeString:t,...i})=>o.jsx(o.Fragment,{children:n(t,i)});a.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"DateTimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'dash' | 'kl'",elements:[{name:"literal",value:"'dash'"},{name:"literal",value:"'kl'"}]},description:""}}};const m=d({}),p={component:a,decorators:t=>o.jsx(s,{value:m,children:o.jsx(t,{})}),argTypes:{year:{control:"radio",options:["numeric","2-digit",void 0]},month:{control:"radio",options:["numeric","2-digit","long","short","narrow",void 0]},day:{control:"radio",options:["numeric","2-digit",void 0]},hour:{control:"radio",options:["numeric","2-digit",void 0]},minute:{control:"radio",options:["numeric","2-digit",void 0]},second:{control:"radio",options:["numeric","2-digit",void 0]},dateTimeString:{control:"date"}},args:{dateTimeString:"2024-05-02T09:54:21"}},e={},r={args:{separator:"kl",day:"numeric",month:"long",year:"2-digit",second:"2-digit"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'kl',
    day: 'numeric',
    month: 'long',
    year: '2-digit',
    second: '2-digit'
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","MedTilpassetUtrykk"];export{e as Default,r as MedTilpassetUtrykk,u as __namedExportsOrder,p as default};
