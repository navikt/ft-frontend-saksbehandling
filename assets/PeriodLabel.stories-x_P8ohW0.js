import{j as e}from"./iframe-DzXUO6GT.js";import{P as t}from"./index-DfaBx6Pe.js";import{Q as l,r as m}from"./index.es-yTIDcLWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dayjs.min-BFUBMDMt.js";const a=({dateStringFom:s,dateStringTom:n,showTodayString:d=!1})=>e.jsx(e.Fragment,{children:l(s,n,{showTodayString:d})});a.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,methods:[],displayName:"PeriodLabel",props:{dateStringFom:{required:!0,tsType:{name:"string"},description:""},dateStringTom:{required:!1,tsType:{name:"string"},description:""},showTodayString:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const i=m({}),y={component:a},r=()=>e.jsx(t,{value:i,children:e.jsx(a,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),o=()=>e.jsx(t,{value:i,children:e.jsx(a,{dateStringFom:"2020-01-02",showTodayString:!0})});r.__docgenInfo={description:"",methods:[],displayName:"VisPeriodelabel"};o.__docgenInfo={description:"",methods:[],displayName:"VisPeriodelabelTilDagensDato"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...o.parameters?.docs?.source}}};const f=["VisPeriodelabel","VisPeriodelabelTilDagensDato"];export{r as VisPeriodelabel,o as VisPeriodelabelTilDagensDato,f as __namedExportsOrder,y as default};
