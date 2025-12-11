import{j as t,a8 as r,P as n,i as a}from"./iframe-AHoChqZU.js";import"./preload-helper-PPVm8Dsz.js";const s=({dateTimeString:i})=>t.jsx(r,{value:new Date(i),hour:"numeric",minute:"numeric",second:"numeric"});s.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const o=a({}),l={component:s},e=()=>t.jsx(n,{value:o,children:t.jsx(s,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"VisTidslabel"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...e.parameters?.docs?.source}}};const c=["VisTidslabel"];export{e as VisTidslabel,c as __namedExportsOrder,l as default};
