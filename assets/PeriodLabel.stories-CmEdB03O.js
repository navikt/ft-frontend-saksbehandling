import{j as e,U as P,P as m,l as y}from"./iframe-DQj-1hI0.js";const a=({dateStringFom:p,dateStringTom:g,showTodayString:u=!1})=>e.jsx(e.Fragment,{children:P(p,g,{showTodayString:u})});a.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,methods:[],displayName:"PeriodLabel",props:{dateStringFom:{required:!0,tsType:{name:"string"},description:""},dateStringTom:{required:!1,tsType:{name:"string"},description:""},showTodayString:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const c=y({}),b={component:a},r=()=>e.jsx(m,{value:c,children:e.jsx(a,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),o=()=>e.jsx(m,{value:c,children:e.jsx(a,{dateStringFom:"2020-01-02",showTodayString:!0})});r.__docgenInfo={description:"",methods:[],displayName:"VisPeriodelabel"};o.__docgenInfo={description:"",methods:[],displayName:"VisPeriodelabelTilDagensDato"};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,d,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const f=["VisPeriodelabel","VisPeriodelabelTilDagensDato"];export{r as VisPeriodelabel,o as VisPeriodelabelTilDagensDato,f as __namedExportsOrder,b as default};
