import{j as e}from"./jsx-runtime-d079401a.js";import{l as t}from"./index-c112ab54.js";import{t as g}from"./index.es-b667d25f.js";import{m as f}from"./nb_NO-0812cb9e.js";import{B as b}from"./BodyShort-1549f7fa.js";import"./index-f1f2c4b1.js";import"./clsx.m-1229b3e0.js";import"./util-5af9592f.js";const S=g(f),i=({dateStringFom:s,dateStringTom:o,showTodayString:P=!1,size:v})=>e.jsxs(b,{as:"span",size:v,children:[e.jsx(t.FormattedDate,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(s)})," - ",o&&e.jsx(t.FormattedDate,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(o)}),P&&!o&&e.jsx("span",{children:S.formatMessage({id:"PeriodLabel.DateToday"})})]}),n=i;try{i.displayName="PeriodLabel",i.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,displayName:"PeriodLabel",props:{dateStringFom:{defaultValue:null,description:"",name:"dateStringFom",required:!0,type:{name:"string"}},dateStringTom:{defaultValue:null,description:"",name:"dateStringTom",required:!1,type:{name:"string"}},showTodayString:{defaultValue:{value:"false"},description:"",name:"showTodayString",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}}}}}catch{}const y=g({}),D={title:"PeriodLabel",component:n},a=()=>e.jsx(t.RawIntlProvider,{value:y,children:e.jsx(n,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),r=()=>e.jsx(t.RawIntlProvider,{value:y,children:e.jsx(n,{dateStringFom:"2020-01-02",showTodayString:!0})});var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const I=["visPeriodelabel","visPeriodelabelTilDagensDato"];export{I as __namedExportsOrder,D as default,a as visPeriodelabel,r as visPeriodelabelTilDagensDato};
//# sourceMappingURL=PeriodLabel.stories-22572b86.js.map
