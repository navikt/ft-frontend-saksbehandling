import{j as e}from"./jsx-runtime-d079401a.js";import{a as s,P as g}from"./index-ed27dc2c.js";import{t as y}from"./index.es-638e181c.js";import{m as f}from"./nb_NO-0812cb9e.js";import"./index-f1f2c4b1.js";const v=y(f),o=({dateStringFom:n,dateStringTom:t,showTodayString:b=!1})=>e.jsxs("span",{children:[e.jsx(s,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(n)})," - ",t&&e.jsx(s,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(t)}),b&&!t&&e.jsx("span",{children:v.formatMessage({id:"PeriodLabel.DateToday"})})]}),i=o;try{o.displayName="PeriodLabel",o.__docgenInfo={description:`PeriodLabel

Presentasjonskomponent. Formaterer til og fra dato til en periode på formatet dd.mm.yyyy - dd.mm.yyyy.

Eksempel:
\`\`\`html
<PeriodLabel dateStringFom="2017-08-25" dateStringTom="2017-08-31" />
\`\`\``,displayName:"PeriodLabel",props:{dateStringFom:{defaultValue:null,description:"",name:"dateStringFom",required:!0,type:{name:"string"}},dateStringTom:{defaultValue:null,description:"",name:"dateStringTom",required:!1,type:{name:"string"}},showTodayString:{defaultValue:{value:"false"},description:"",name:"showTodayString",required:!1,type:{name:"boolean"}}}}}catch{}const P=y({}),_={title:"PeriodLabel",component:i},r=()=>e.jsx(g,{value:P,children:e.jsx(i,{dateStringFom:"2020-01-02",dateStringTom:"2020-01-04"})}),a=()=>e.jsx(g,{value:P,children:e.jsx(i,{dateStringFom:"2020-01-02",showTodayString:!0})});var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["visPeriodelabel","visPeriodelabelTilDagensDato"];export{w as __namedExportsOrder,_ as default,r as visPeriodelabel,a as visPeriodelabelTilDagensDato};
//# sourceMappingURL=PeriodLabel.stories-b4945775.js.map
