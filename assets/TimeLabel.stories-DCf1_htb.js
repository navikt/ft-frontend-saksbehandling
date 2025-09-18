import{j as r}from"./iframe-DzXUO6GT.js";import{F as s,P as n}from"./index-DfaBx6Pe.js";import{r as o}from"./index.es-yTIDcLWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dayjs.min-BFUBMDMt.js";const t=({dateTimeString:i})=>r.jsx(s,{value:new Date(i),hour:"numeric",minute:"numeric",second:"numeric"});t.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const a=o({}),T={component:t},e=()=>r.jsx(n,{value:a,children:r.jsx(t,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"VisTidslabel"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...e.parameters?.docs?.source}}};const u=["VisTidslabel"];export{e as VisTidslabel,u as __namedExportsOrder,T as default};
