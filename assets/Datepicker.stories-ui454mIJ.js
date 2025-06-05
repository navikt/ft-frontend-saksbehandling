import{g as W,a as X,r as Y}from"./formUtils-BaLweQSz.js";import{l as Z,m as $,r as p,p as t,q as s,t as i,v as ee,j as f,w as q}from"./iframe-D0Hh2isZ.js";import{c as ae}from"./customParseFormat-Cp0JJaey.js";import{R as re}from"./ReadOnlyField-CEnXBrWf.js";t.extend(ae);const C=({name:D,label:v,description:N,validate:g=[],hideLabel:y=!1,disabled:I=!1,isReadOnly:_=!1,onChange:n,disabledDays:A,isEdited:z,defaultMonth:B,fromDate:k,toDate:d,size:b="small"})=>{const{formState:{errors:G}}=Z(),{field:e}=$({name:D,rules:{validate:p.useMemo(()=>W(g),[g])}}),H=e.value?t(e.value,s,!0).format(i):"",[J,m]=p.useState(H),{datepickerProps:K,inputProps:L}=ee({onDateChange:a=>{if(a!==void 0){const r=t(a).format(s);n&&n(r),e.onChange(r),m(t(r,s,!0).format(i))}},defaultSelected:e.value?t(e.value,s,!0).toDate():void 0,defaultMonth:B||(!e.value&&d?d:void 0),disabled:A}),Q=p.useCallback(a=>{const r=t(a.target.value,i,!0).format(s),w=r!=="Invalid Date";m(a.target.value),n&&n(w?r:a.target.value),e.onChange(w?r:a.target.value)},[m,n,e]);if(_)return f.jsx(re,{label:v,value:e.value?t(e.value,s,!0).format(i):void 0,isEdited:z,hideLabel:y,size:b});const U={...K,fromDate:k,toDate:d,dropdownCaption:k&&d?!0:void 0};return f.jsx(q,{...U,children:f.jsx(q.Input,{...L,hideLabel:y,onChange:Q,value:J,size:b,label:v,description:N,disabled:I,error:X(G,D)})})};C.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabledDays:{required:!1,tsType:{name:"DatePickerProps['disabled']",raw:"DatePickerProps['disabled']"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""}}};const ie={component:C,tags:["autodocs"],decorators:Y({datepickerFieldPre:"2022-10-11"})},o={args:{name:"datepickerField",label:"Dette er en datepicker",description:"Dette er en nærmere beskrivelse"}},l={args:{name:"datepickerField",label:"Dette er en datepicker med disabled datoer",fromDate:new Date("2024-10-12"),toDate:new Date("2025-02-24"),defaultMonth:new Date("2024-11-11")}},u={args:{label:"Dette er en datepicker der verdi er valgt",name:"datepickerFieldPre",fromDate:new Date("2022-10-02"),toDate:new Date("2022-10-24")}},c={args:{label:"Dette er en datepicker som er readonly",name:"datepickerFieldPre",isReadOnly:!0,isEdited:!0}};var P,T,F;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker',
    description: 'Dette er en nærmere beskrivelse'
  }
}`,...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var R,x,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11')
  }
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var h,M,E;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker der verdi er valgt',
    name: 'datepickerFieldPre',
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24')
  }
}`,...(E=(M=u.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var O,S,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker som er readonly',
    name: 'datepickerFieldPre',
    isReadOnly: true,
    isEdited: true
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const oe=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{o as Default,l as MedDisabledDatoer,u as MedVerdi,c as ReadOnly,oe as __namedExportsOrder,ie as default};
