import{j as t}from"./jsx-runtime-69eee039.js";import{F as o,P as l}from"./index-eeeacead.js";import{t as d}from"./index.es-97bf219c.js";import"./index-7c191284.js";import"./tslib.es6-e3c5402b.js";const r=({dateTimeString:i})=>t.jsx(o,{value:new Date(i),hour:"numeric",minute:"numeric",second:"numeric"}),m=r;try{r.displayName="TimeLabel",r.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,displayName:"TimeLabel",props:{dateTimeString:{defaultValue:null,description:"",name:"dateTimeString",required:!0,type:{name:"string"}}}}}catch{}const c=d({}),g={title:"TimeLabel",component:m},e=()=>t.jsx(l,{value:c,children:t.jsx(m,{dateTimeString:"2020-08-02T00:54:25.455"})});var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const L=["visTidslabel"];export{L as __namedExportsOrder,g as default,e as visTidslabel};
//# sourceMappingURL=TimeLabel.stories-a5a7ada9.js.map
