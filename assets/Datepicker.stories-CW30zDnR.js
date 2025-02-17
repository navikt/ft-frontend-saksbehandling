import{g as U,a as W,r as X}from"./formUtils-ZifNUAy7.js";import{j as c}from"./jsx-runtime-CLpGMVip.js";import{r as f}from"./index-B5OHeJSP.js";import{u as Y,a as Z}from"./ReadOnlyIcon-3mCRcvzc.js";import{d as t,A as i,P as n}from"./index.es-Dh3mAfPy.js";import{c as $}from"./customParseFormat-BKfttFiC.js";import{R as ee}from"./ReadOnlyField-8gUhE9Qi.js";import{u as re}from"./useDatepicker-oJRfFMcH.js";import"./useDateTranslationContext-DuYWebvA.js";import"./Provider-B_QIWjIe.js";import{D as w}from"./DatePicker-DoJN_gWH.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./VStack-DrfGxCua.js";import"./clsx-B-dksMZM.js";import"./Theme-6IdwQf2V.js";import"./create-context-BlrHNsQj.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./BasePrimitive-B7qNT1W_.js";import"./Button-C4dKKha_.js";import"./Loader-CoAqN6Lw.js";import"./Label-ZYbyet41.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9OmVTHV.js";import"./index-D9DDUrbY.js";import"./index.es-BdLW2Tvk.js";import"./message-BcVJpMje.js";import"./Modal-C6iE4cX-.js";import"./floating-ui.react-FIE1On8Y.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./XMark-BWJopseo.js";import"./Alert-Pz1mMbfe.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Box-B_1ucAEI.js";import"./Checkmark-uHeVskEM.js";import"./ChevronDown-Bw2TG6jd.js";import"./useFormField-BKpVC0Pg.js";import"./Popover-CgZ7HliT.js";import"./useClientLayoutEffect-DnVV5Q77.js";import"./Select-wYL7g-5T.js";t.extend($);const j=({name:D,label:g,description:C,validate:v=[],disabled:N=!1,isReadOnly:I=!1,onChange:o,disabledDays:_,isEdited:A,defaultMonth:z,fromDate:k,toDate:s,size:y="small"})=>{const{formState:{errors:B}}=Y(),{field:e}=Z({name:D,rules:{validate:f.useMemo(()=>U(v),[v])}}),G=e.value?t(e.value,i,!0).format(n):"",[H,u]=f.useState(G),{datepickerProps:J,inputProps:K}=re({onDateChange:r=>{if(r!==void 0){const a=t(r).format(i);o&&o(a),e.onChange(a),u(t(a,i,!0).format(n))}},defaultSelected:e.value?t(e.value,i,!0).toDate():void 0,defaultMonth:z||(!e.value&&s?s:void 0),disabled:_}),L=f.useCallback(r=>{const a=t(r.target.value,n,!0).format(i),b=a!=="Invalid Date";u(r.target.value),o&&o(b?a:r.target.value),e.onChange(b?a:r.target.value)},[u,o,e]);if(I)return c.jsx(ee,{label:g,value:e.value?t(e.value,i,!0).format(n):void 0,isEdited:A,size:y});const Q={...J,fromDate:k,toDate:s,dropdownCaption:k&&s?!0:void 0};return c.jsx(w,{...Q,children:c.jsx(w.Input,{...K,onChange:L,value:H,size:y,label:g,description:C,disabled:N,error:W(B,D)})})};j.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabledDays:{required:!1,tsType:{name:"DatePickerProps['disabled']",raw:"DatePickerProps['disabled']"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""}}};const Qe={title:"form-hooks/Datepicker",component:j,tags:["autodocs"],decorators:X({datepickerFieldPre:"2022-10-11"})},d={args:{name:"datepickerField",label:"Dette er en datepicker",description:"Dette er en nærmere beskrivelse"}},l={args:{name:"datepickerField",label:"Dette er en datepicker med disabled datoer",fromDate:new Date("2024-10-12"),toDate:new Date("2025-02-24"),defaultMonth:new Date("2024-11-11")}},m={args:{label:"Dette er en datepicker der verdi er valgt",name:"datepickerFieldPre",fromDate:new Date("2022-10-02"),toDate:new Date("2022-10-24")}},p={args:{label:"Dette er en datepicker som er readonly",name:"datepickerFieldPre",isReadOnly:!0,isEdited:!0}};var P,q,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker',
    description: 'Dette er en nærmere beskrivelse'
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,T,h;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11')
  }
}`,...(h=(T=l.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,M,V;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker der verdi er valgt',
    name: 'datepickerFieldPre',
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24')
  }
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var E,O,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker som er readonly',
    name: 'datepickerFieldPre',
    isReadOnly: true,
    isEdited: true
  }
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const Ue=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{d as Default,l as MedDisabledDatoer,m as MedVerdi,p as ReadOnly,Ue as __namedExportsOrder,Qe as default};
