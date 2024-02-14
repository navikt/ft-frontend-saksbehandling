import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{F as g,a as o,P as T}from"./index-Bqcuc3cK.js";import{t as y}from"./index.es-bt3Tzvg6.js";import{m as v}from"./nb_NO-RinjUwPG.js";import"./index-Dl6G-zuu.js";const b=y(v),s=({dateTimeString:t,useNewFormat:i=!1})=>e.jsxs(e.Fragment,{children:[e.jsx(g,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(t)}),!i&&e.jsxs(e.Fragment,{children:["-",e.jsx(o,{value:new Date(t)})]}),i&&e.jsxs(e.Fragment,{children:[b.formatMessage({id:"DateTimeLabel.Kl"}),e.jsx(o,{value:new Date(t),hour:"numeric",minute:"numeric",second:"numeric"})]})]}),n=s;try{s.displayName="DateTimeLabel",s.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,displayName:"DateTimeLabel",props:{dateTimeString:{defaultValue:null,description:"",name:"dateTimeString",required:!0,type:{name:"string"}},useNewFormat:{defaultValue:{value:"false"},description:"",name:"useNewFormat",required:!1,type:{name:"boolean"}}}}}catch{}const D=y({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),L={title:"DateTimeLabel",component:n},a=()=>e.jsx(T,{value:D,children:e.jsx(n,{dateTimeString:"2017-08-02T00:54:25.455"})}),r=()=>e.jsx(T,{value:D,children:e.jsx(n,{dateTimeString:"2017-08-02T00:54:25.455",useNewFormat:!0})});var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" useNewFormat />
  </RawIntlProvider>`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const _=["Default","NyttFormat"];export{a as Default,r as NyttFormat,_ as __namedExportsOrder,L as default};
