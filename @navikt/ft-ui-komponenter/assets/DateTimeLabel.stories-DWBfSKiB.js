import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{F as D,a as n,P as p}from"./index-Bqcuc3cK.js";import{t as T}from"./index.es-DUnowL1J.js";import{m as g}from"./nb_NO-RinjUwPG.js";import"./index-Dl6G-zuu.js";const v=T(g),f=({dateTimeString:r,useNewFormat:o=!1})=>e.jsxs(e.Fragment,{children:[e.jsx(D,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(r)}),!o&&e.jsxs(e.Fragment,{children:["-",e.jsx(n,{value:new Date(r)})]}),o&&e.jsxs(e.Fragment,{children:[v.formatMessage({id:"DateTimeLabel.Kl"}),e.jsx(n,{value:new Date(r),hour:"numeric",minute:"numeric",second:"numeric"})]})]}),s=f;f.__docgenInfo={description:`DateTimeLabel

Presentasjonskomponent. Formaterer dato til formatet dd.mm.yyyy - hh:mm.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"DateTimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""},useNewFormat:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const y=T({"OkAvbrytModal.Ok":"Ok","OkAvbrytModal.Avbryt":"Avbryt","Test.Test":"Dette er ein test"}),L={title:"DateTimeLabel",component:s},t=()=>e.jsx(p,{value:y,children:e.jsx(s,{dateTimeString:"2017-08-02T00:54:25.455"})}),a=()=>e.jsx(p,{value:y,children:e.jsx(s,{dateTimeString:"2017-08-02T00:54:25.455",useNewFormat:!0})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"NyttFormat"};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" useNewFormat />
  </RawIntlProvider>`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const w=["Default","NyttFormat"];export{t as Default,a as NyttFormat,w as __namedExportsOrder,L as default};
