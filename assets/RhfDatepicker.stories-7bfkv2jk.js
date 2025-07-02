import{g as A,a as z,r as B}from"./formUtils-2mCs71Cl.js";import{m as G,n as H,r as p,q as t,t as s,v as o,w as J,j as f,x as R}from"./iframe-_utZp_mc.js";import{c as K}from"./customParseFormat-fft76yHT.js";import{R as L}from"./ReadOnlyField-Dn-RqHNc.js";t.extend(K);const P=({label:D,description:q,validate:v=[],hideLabel:g=!1,isReadOnly:F=!1,onChange:n,disabledDays:T,isEdited:h,defaultMonth:x,fromDate:y,toDate:d,size:k="small",...V})=>{const{name:b,control:M,disabled:E}=V,{formState:{errors:O}}=G(),{field:e}=H({name:b,control:M,rules:{validate:p.useMemo(()=>A(v),[v])}}),S=e.value?t(e.value,s,!0).format(o):"",[j,m]=p.useState(S),{datepickerProps:C,inputProps:N}=J({onDateChange:a=>{if(a!==void 0){const r=t(a).format(s);n&&n(r),e.onChange(r),m(t(r,s,!0).format(o))}},defaultSelected:e.value?t(e.value,s,!0).toDate():void 0,defaultMonth:x||(!e.value&&d?d:void 0),disabled:T}),I=p.useCallback(a=>{const r=t(a.target.value,o,!0).format(s),w=r!=="Invalid Date";m(a.target.value),n&&n(w?r:a.target.value),e.onChange(w?r:a.target.value)},[m,n,e]);if(F)return f.jsx(L,{label:D,value:e.value?t(e.value,s,!0).format(o):void 0,isEdited:h,hideLabel:g,size:k});const _={...C,fromDate:y,toDate:d,dropdownCaption:y&&d?!0:void 0};return f.jsx(R,{..._,children:f.jsx(R.Input,{...N,hideLabel:g,onChange:I,value:j,size:k,label:D,description:q,disabled:E,error:z(O,b)})})};P.__docgenInfo={description:"",methods:[],displayName:"RhfDatepicker",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabledDays:{required:!1,tsType:{name:"DatePickerProps['disabled']",raw:"DatePickerProps['disabled']"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""}}};const Y={component:P,tags:["autodocs"],decorators:B({datepickerFieldPre:"2022-10-11"})},i={args:{name:"datepickerField",label:"Dette er en datepicker",description:"Dette er en nærmere beskrivelse"}},l={args:{name:"datepickerField",label:"Dette er en datepicker med disabled datoer",fromDate:new Date("2024-10-12"),toDate:new Date("2025-02-24"),defaultMonth:new Date("2024-11-11")}},u={args:{label:"Dette er en datepicker der verdi er valgt",name:"datepickerFieldPre",fromDate:new Date("2022-10-02"),toDate:new Date("2022-10-24")}},c={args:{label:"Dette er en datepicker som er readonly",name:"datepickerFieldPre",isReadOnly:!0,isEdited:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Z=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{i as Default,l as MedDisabledDatoer,u as MedVerdi,c as ReadOnly,Z as __namedExportsOrder,Y as default};
