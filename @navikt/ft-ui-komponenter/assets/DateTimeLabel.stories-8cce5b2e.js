import{j as e}from"./jsx-runtime-d079401a.js";import{l as t}from"./index-c112ab54.js";import{t as T}from"./index.es-b667d25f.js";import{m as y}from"./nb_NO-0812cb9e.js";import"./index-f1f2c4b1.js";const D=T(y),s=({dateTimeString:a,useNewFormat:o=!1})=>e.jsxs(e.Fragment,{children:[e.jsx(t.FormattedDate,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(a)}),!o&&e.jsxs(e.Fragment,{children:["-",e.jsx(t.FormattedTime,{value:new Date(a)})]}),o&&e.jsxs(e.Fragment,{children:[D.formatMessage({id:"DateTimeLabel.Kl"}),e.jsx(t.FormattedTime,{value:new Date(a),hour:"numeric",minute:"numeric",second:"numeric"})]})]}),i=s;try{s.displayName="DateTimeLabel",s.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,displayName:"DateTimeLabel",props:{dateTimeString:{defaultValue:null,description:"",name:"dateTimeString",required:!0,type:{name:"string"}},useNewFormat:{defaultValue:{value:"false"},description:"",name:"useNewFormat",required:!1,type:{name:"boolean"}}}}}catch{}const v=T({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),w={title:"DateTimeLabel",component:i},r=()=>e.jsx(t.RawIntlProvider,{value:v,children:e.jsx(i,{dateTimeString:"2017-08-02T00:54:25.455"})}),n=()=>e.jsx(t.RawIntlProvider,{value:v,children:e.jsx(i,{dateTimeString:"2017-08-02T00:54:25.455",useNewFormat:!0})});var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" useNewFormat />
  </RawIntlProvider>`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const F=["Default","NyttFormat"];export{r as Default,n as NyttFormat,F as __namedExportsOrder,w as default};
//# sourceMappingURL=DateTimeLabel.stories-8cce5b2e.js.map
