import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{n as y,P as m,r as v}from"./index.es-DlflYTfv.js";import{a as f}from"./Label-CYbek38p.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DNHX5htx.js";import"./Theme-C_brBVJK.js";const a=({dateStringFom:c,dateStringTom:u,showTodayString:g=!1,size:P})=>o.jsx(f,{as:"span",size:P,children:y(c,u,{showTodayString:g})});a.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,methods:[],displayName:"PeriodLabel",props:{dateStringFom:{required:!0,tsType:{name:"string"},description:""},dateStringTom:{required:!1,tsType:{name:"string"},description:""},showTodayString:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const p=v({}),w={component:a},e=()=>o.jsx(m,{value:p,children:o.jsx(a,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),r=()=>o.jsx(m,{value:p,children:o.jsx(a,{dateStringFom:"2020-01-02",showTodayString:!0})});e.__docgenInfo={description:"",methods:[],displayName:"visPeriodelabel"};r.__docgenInfo={description:"",methods:[],displayName:"visPeriodelabelTilDagensDato"};var t,i,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const F=["visPeriodelabel","visPeriodelabelTilDagensDato"];export{F as __namedExportsOrder,w as default,e as visPeriodelabel,r as visPeriodelabelTilDagensDato};
