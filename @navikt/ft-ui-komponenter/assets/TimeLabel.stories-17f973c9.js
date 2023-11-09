import{j as t}from"./jsx-runtime-d079401a.js";import{l as m}from"./index-c112ab54.js";import{t as l}from"./index.es-b667d25f.js";import"./index-f1f2c4b1.js";const r=({dateTimeString:i})=>t.jsx(m.FormattedTime,{value:new Date(i),hour:"numeric",minute:"numeric",second:"numeric"}),o=r;try{r.displayName="TimeLabel",r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,displayName:"TimeLabel",props:{dateTimeString:{defaultValue:null,description:"",name:"dateTimeString",required:!0,type:{name:"string"}}}}}catch{}const d=l({}),b={title:"TimeLabel",component:o},e=()=>t.jsx(m.RawIntlProvider,{value:d,children:t.jsx(o,{dateTimeString:"2020-08-02T00:54:25.455"})});var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const _=["visTidslabel"];export{_ as __namedExportsOrder,b as default,e as visTidslabel};
//# sourceMappingURL=TimeLabel.stories-17f973c9.js.map
