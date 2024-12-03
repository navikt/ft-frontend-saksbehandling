import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{F as i,P as c}from"./index-dwQCWksL.js";import{t as u}from"./index.es-BudctrqR.js";import{m as f}from"./nb_NO-7Llcbk-T.js";import{B as b}from"./Label-DOinVv3C.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";const h=u(f),o=({dateStringFom:y,dateStringTom:t,showTodayString:P=!1,size:v})=>e.jsxs(b,{as:"span",size:v,children:[e.jsx(i,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(y)})," - ",t&&e.jsx(i,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(t)}),P&&!t&&e.jsx("span",{children:h.formatMessage({id:"PeriodLabel.DateToday"})})]});o.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,methods:[],displayName:"PeriodLabel",props:{dateStringFom:{required:!0,tsType:{name:"string"},description:""},dateStringTom:{required:!1,tsType:{name:"string"},description:""},showTodayString:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const g=u({}),L={title:"PeriodLabel",component:o},a=()=>e.jsx(c,{value:g,children:e.jsx(o,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),r=()=>e.jsx(c,{value:g,children:e.jsx(o,{dateStringFom:"2020-01-02",showTodayString:!0})});a.__docgenInfo={description:"",methods:[],displayName:"visPeriodelabel"};r.__docgenInfo={description:"",methods:[],displayName:"visPeriodelabelTilDagensDato"};var s,n,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["visPeriodelabel","visPeriodelabelTilDagensDato"];export{_ as __namedExportsOrder,L as default,a as visPeriodelabel,r as visPeriodelabelTilDagensDato};