import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{a as o,P as l}from"./index-H45Goo_b.js";import{t as d}from"./index.es-hc4DRULG.js";import"./index-OjgoNOWw.js";const r=({dateTimeString:a})=>t.jsx(o,{value:new Date(a),hour:"numeric",minute:"numeric",second:"numeric"}),m=r;try{r.displayName="TimeLabel",r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,displayName:"TimeLabel",props:{dateTimeString:{defaultValue:null,description:"",name:"dateTimeString",required:!0,type:{name:"string"}}}}}catch{}const c=d({}),_={title:"TimeLabel",component:m},e=()=>t.jsx(l,{value:c,children:t.jsx(m,{dateTimeString:"2020-08-02T00:54:25.455"})});var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["visTidslabel"];export{g as __namedExportsOrder,_ as default,e as visTidslabel};
