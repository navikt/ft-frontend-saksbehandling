import{j as t,U as i,P as n,l as a}from"./iframe-CjXhahqQ.js";const s=({dateTimeString:r})=>t.jsx(i,{value:new Date(r),hour:"numeric",minute:"numeric",second:"numeric"});s.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const o=a({}),d={component:s},e=()=>t.jsx(n,{value:o,children:t.jsx(s,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"VisTidslabel"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...e.parameters?.docs?.source}}};const l=["VisTidslabel"];export{e as VisTidslabel,l as __namedExportsOrder,d as default};
