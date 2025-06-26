import{j as o,N as p,P as u,l as g}from"./iframe-C7Bd7qJ1.js";const c=({dateTimeString:t,...l})=>o.jsx(o.Fragment,{children:p(t,l)});c.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"DateTimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'dash' | 'kl'",elements:[{name:"literal",value:"'dash'"},{name:"literal",value:"'kl'"}]},description:""}}};const y=g({}),h={component:c,decorators:t=>o.jsx(u,{value:y,children:o.jsx(t,{})}),argTypes:{year:{control:"radio",options:["numeric","2-digit",void 0]},month:{control:"radio",options:["numeric","2-digit","long","short","narrow",void 0]},day:{control:"radio",options:["numeric","2-digit",void 0]},hour:{control:"radio",options:["numeric","2-digit",void 0]},minute:{control:"radio",options:["numeric","2-digit",void 0]},second:{control:"radio",options:["numeric","2-digit",void 0]},dateTimeString:{control:"date"}},args:{dateTimeString:"2024-05-02T09:54:21"}},e={},r={args:{separator:"kl",day:"numeric",month:"long",year:"2-digit",second:"2-digit"}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    separator: 'kl',
    day: 'numeric',
    month: 'long',
    year: '2-digit',
    second: '2-digit'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Default","MedTilpassetUtrykk"];export{e as Default,r as MedTilpassetUtrykk,k as __namedExportsOrder,h as default};
