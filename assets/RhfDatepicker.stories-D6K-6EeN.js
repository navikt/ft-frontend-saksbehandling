import{g as U,a as A,r as z}from"./formUtils-DQk4Hi2B.js";import{n as B,o as G,r as p,d as t,t as s,v as d,w as H,j as f,x as P}from"./iframe-CkmnIeg5.js";import{c as J}from"./customParseFormat-bUg-lSa0.js";import{R as K}from"./ReadOnlyField-C3OYJkuu.js";import"./preload-helper-D9Z9MdNV.js";t.extend(J);const R=({label:D,description:T,validate:v=[],hideLabel:g=!1,isReadOnly:q=!1,onChange:n,disabledDays:F,isEdited:h,defaultMonth:x,fromDate:y,toDate:o,size:k="small",...V})=>{const{name:b,control:M,disabled:C}=V,{formState:{errors:E}}=B(),{field:e}=G({name:b,control:M,rules:{validate:p.useMemo(()=>U(v),[v])}}),O=e.value?t(e.value,s,!0).format(d):"",[S,m]=p.useState(O),{datepickerProps:j,inputProps:N}=H({onDateChange:a=>{if(a!==void 0){const r=t(a).format(s);n&&n(r),e.onChange(r),m(t(r,s,!0).format(d))}},defaultSelected:e.value?t(e.value,s,!0).toDate():void 0,defaultMonth:x||(!e.value&&o?o:void 0),disabled:F}),I=p.useCallback(a=>{const r=t(a.target.value,d,!0).format(s),w=r!=="Invalid Date";m(a.target.value),n&&n(w?r:a.target.value),e.onChange(w?r:a.target.value)},[m,n,e]);if(q)return f.jsx(K,{label:D,value:e.value?t(e.value,s,!0).format(d):void 0,isEdited:h,hideLabel:g,size:k});const _={...j,fromDate:y,toDate:o,dropdownCaption:y&&o?!0:void 0};return f.jsx(P,{..._,children:f.jsx(P.Input,{...N,hideLabel:g,onChange:I,value:S,size:k,label:D,description:T,disabled:C,error:A(E,b)})})};R.__docgenInfo={description:"",methods:[],displayName:"RhfDatepicker",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabledDays:{required:!1,tsType:{name:"DatePickerProps['disabled']",raw:"DatePickerProps['disabled']"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const Z={component:R,tags:["autodocs"],decorators:z({datepickerFieldPre:"2022-10-11"}),args:{control:void 0}},i={args:{name:"datepickerField",label:"Dette er en datepicker",description:"Dette er en nærmere beskrivelse"}},l={args:{name:"datepickerField",label:"Dette er en datepicker med disabled datoer",fromDate:new Date("2024-10-12"),toDate:new Date("2025-02-24"),defaultMonth:new Date("2024-11-11")}},u={args:{label:"Dette er en datepicker der verdi er valgt",name:"datepickerFieldPre",fromDate:new Date("2022-10-02"),toDate:new Date("2022-10-24")}},c={args:{label:"Dette er en datepicker som er readonly",name:"datepickerFieldPre",isReadOnly:!0,isEdited:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker',
    description: 'Dette er en nærmere beskrivelse'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11')
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker der verdi er valgt',
    name: 'datepickerFieldPre',
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24')
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker som er readonly',
    name: 'datepickerFieldPre',
    isReadOnly: true,
    isEdited: true
  }
}`,...c.parameters?.docs?.source}}};const $=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{i as Default,l as MedDisabledDatoer,u as MedVerdi,c as ReadOnly,$ as __namedExportsOrder,Z as default};
