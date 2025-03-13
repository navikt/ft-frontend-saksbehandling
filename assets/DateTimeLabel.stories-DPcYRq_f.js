import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as k,d as D,n as m,a as x}from"./index.es-BN1WhiVC.js";import{m as j}from"./nb_NO-7Llcbk-T.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DASCADcX.js";const q=m(j),u=({dateTimeString:a,separator:c="dash",year:p="numeric",month:f="2-digit",day:g="2-digit",hour:v="numeric",minute:h="numeric",second:y=void 0})=>{const T=()=>{switch(c){case"dash":return" - ";case"kl":return q.formatMessage({id:"DateTimeLabel.Kl"})}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{value:new Date(a),day:g,month:f,year:p}),T(),e.jsx(D,{value:new Date(a),hour:v,minute:h,second:y})]})};u.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"DateTimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'dash' | 'kl'",elements:[{name:"literal",value:"'dash'"},{name:"literal",value:"'kl'"}]},description:"",defaultValue:{value:"'dash'",computed:!1}},year:{defaultValue:{value:"'numeric'",computed:!1},required:!1},month:{defaultValue:{value:"'2-digit'",computed:!1},required:!1},day:{defaultValue:{value:"'2-digit'",computed:!1},required:!1},hour:{defaultValue:{value:"'numeric'",computed:!1},required:!1},minute:{defaultValue:{value:"'numeric'",computed:!1},required:!1},second:{defaultValue:{value:"undefined",computed:!0},required:!1}}};const V=m({}),E={component:u,decorators:a=>e.jsx(x,{value:V,children:e.jsx(a,{})}),argTypes:{year:{control:"radio",options:["numeric","2-digit",void 0]},month:{control:"radio",options:["numeric","2-digit","long","short","narrow",void 0]},day:{control:"radio",options:["numeric","2-digit",void 0]},hour:{control:"radio",options:["numeric","2-digit",void 0]},minute:{control:"radio",options:["numeric","2-digit",void 0]},second:{control:"radio",options:["numeric","2-digit",void 0]},dateTimeString:{control:"date"}},args:{dateTimeString:"2024-08-02T10:54:00"}},r={},t={args:{separator:"kl",day:"numeric",month:"long",second:"2-digit"}};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,d,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    separator: 'kl',
    day: 'numeric',
    month: 'long',
    second: '2-digit'
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const M=["Default","MedTilpassetUtrykk"];export{r as Default,t as MedTilpassetUtrykk,M as __namedExportsOrder,E as default};
