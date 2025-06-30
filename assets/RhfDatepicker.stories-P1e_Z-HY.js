import{g as Y,a as Z,r as $}from"./formUtils-BmfakpLr.js";import{m as ee,n as ae,r as p,q as t,t as s,v as o,w as re,j as f,x as R}from"./iframe-CGbGlz93.js";import{c as te}from"./customParseFormat-B38CvdAq.js";import{R as se}from"./ReadOnlyField-DcRl3SzG.js";t.extend(te);const C=({label:D,description:N,validate:v=[],hideLabel:g=!1,isReadOnly:I=!1,onChange:n,disabledDays:_,isEdited:A,defaultMonth:z,fromDate:y,toDate:d,size:k="small",...B})=>{const{name:b,control:G,disabled:H}=B,{formState:{errors:J}}=ee(),{field:e}=ae({name:b,control:G,rules:{validate:p.useMemo(()=>Y(v),[v])}}),K=e.value?t(e.value,s,!0).format(o):"",[L,m]=p.useState(K),{datepickerProps:Q,inputProps:U}=re({onDateChange:a=>{if(a!==void 0){const r=t(a).format(s);n&&n(r),e.onChange(r),m(t(r,s,!0).format(o))}},defaultSelected:e.value?t(e.value,s,!0).toDate():void 0,defaultMonth:z||(!e.value&&d?d:void 0),disabled:_}),W=p.useCallback(a=>{const r=t(a.target.value,o,!0).format(s),w=r!=="Invalid Date";m(a.target.value),n&&n(w?r:a.target.value),e.onChange(w?r:a.target.value)},[m,n,e]);if(I)return f.jsx(se,{label:D,value:e.value?t(e.value,s,!0).format(o):void 0,isEdited:A,hideLabel:g,size:k});const X={...Q,fromDate:y,toDate:d,dropdownCaption:y&&d?!0:void 0};return f.jsx(R,{...X,children:f.jsx(R.Input,{...U,hideLabel:g,onChange:W,value:L,size:k,label:D,description:N,disabled:H,error:Z(J,b)})})};C.__docgenInfo={description:"",methods:[],displayName:"RhfDatepicker",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabledDays:{required:!1,tsType:{name:"DatePickerProps['disabled']",raw:"DatePickerProps['disabled']"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""}}};const le={component:C,tags:["autodocs"],decorators:$({datepickerFieldPre:"2022-10-11"})},i={args:{name:"datepickerField",label:"Dette er en datepicker",description:"Dette er en nærmere beskrivelse"}},l={args:{name:"datepickerField",label:"Dette er en datepicker med disabled datoer",fromDate:new Date("2024-10-12"),toDate:new Date("2025-02-24"),defaultMonth:new Date("2024-11-11")}},u={args:{label:"Dette er en datepicker der verdi er valgt",name:"datepickerFieldPre",fromDate:new Date("2022-10-02"),toDate:new Date("2022-10-24")}},c={args:{label:"Dette er en datepicker som er readonly",name:"datepickerFieldPre",isReadOnly:!0,isEdited:!0}};var P,q,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker',
    description: 'Dette er en nærmere beskrivelse'
  }
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var T,h,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11')
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,M,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const ue=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{i as Default,l as MedDisabledDatoer,u as MedVerdi,c as ReadOnly,ue as __namedExportsOrder,le as default};
