import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{K as P,P as m,r as y}from"./index.es-Dq6sdjeM.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DNHX5htx.js";const a=({dateStringFom:c,dateStringTom:g,showTodayString:u=!1})=>e.jsx(e.Fragment,{children:P(c,g,{showTodayString:u})});a.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,methods:[],displayName:"PeriodLabel",props:{dateStringFom:{required:!0,tsType:{name:"string"},description:""},dateStringTom:{required:!1,tsType:{name:"string"},description:""},showTodayString:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const p=y({}),h={component:a},r=()=>e.jsx(m,{value:p,children:e.jsx(a,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),o=()=>e.jsx(m,{value:p,children:e.jsx(a,{dateStringFom:"2020-01-02",showTodayString:!0})});r.__docgenInfo={description:"",methods:[],displayName:"visPeriodelabel"};o.__docgenInfo={description:"",methods:[],displayName:"visPeriodelabelTilDagensDato"};var t,i,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,d,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const x=["visPeriodelabel","visPeriodelabelTilDagensDato"];export{x as __namedExportsOrder,h as default,r as visPeriodelabel,o as visPeriodelabelTilDagensDato};
