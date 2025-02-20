import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as k,e as D,n as m,a as x}from"./index.es-DIQk1_2L.js";import{m as j}from"./nb_NO-7Llcbk-T.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxs5m6lS.js";const q=m(j),u=({dateTimeString:a,separator:c="dash",year:p="numeric",month:f="2-digit",day:g="2-digit",hour:v="numeric",minute:h="numeric",second:T=void 0})=>{const y=()=>{switch(c){case"dash":return" - ";case"kl":return q.formatMessage({id:"DateTimeLabel.Kl"})}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{value:new Date(a),day:g,month:f,year:p}),y(),e.jsx(D,{value:new Date(a),hour:v,minute:h,second:T})]})};u.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"DateTimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'dash' | 'kl'",elements:[{name:"literal",value:"'dash'"},{name:"literal",value:"'kl'"}]},description:"",defaultValue:{value:"'dash'",computed:!1}},year:{defaultValue:{value:"'numeric'",computed:!1},required:!1},month:{defaultValue:{value:"'2-digit'",computed:!1},required:!1},day:{defaultValue:{value:"'2-digit'",computed:!1},required:!1},hour:{defaultValue:{value:"'numeric'",computed:!1},required:!1},minute:{defaultValue:{value:"'numeric'",computed:!1},required:!1},second:{defaultValue:{value:"undefined",computed:!0},required:!1}}};const V=m({}),_={title:"ui-komponenter/DateTimeLabel",component:u,decorators:a=>e.jsx(x,{value:V,children:e.jsx(a,{})}),argTypes:{year:{control:"radio",options:["numeric","2-digit",void 0]},month:{control:"radio",options:["numeric","2-digit","long","short","narrow",void 0]},day:{control:"radio",options:["numeric","2-digit",void 0]},hour:{control:"radio",options:["numeric","2-digit",void 0]},minute:{control:"radio",options:["numeric","2-digit",void 0]},second:{control:"radio",options:["numeric","2-digit",void 0]},dateTimeString:{control:"date"}},args:{dateTimeString:"2024-08-02T10:54:00"}},t={},r={args:{separator:"kl",day:"numeric",month:"long",second:"2-digit"}};var o,i,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    separator: 'kl',
    day: 'numeric',
    month: 'long',
    second: '2-digit'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const E=["Default","MedTilpassetUtrykk"];export{t as Default,r as MedTilpassetUtrykk,E as __namedExportsOrder,_ as default};
