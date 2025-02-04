import{g as G,a as J,r as K}from"./formUtils-CxXcBrDP.js";import{j as T}from"./jsx-runtime-CLpGMVip.js";import{r as P}from"./index-B5OHeJSP.js";import{u as Q,a as U}from"./ReadOnlyIcon-3mCRcvzc.js";import{R as W}from"./ReadOnlyField-DjCeU_BM.js";import{T as X}from"./TextField-DEo8zdDE.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./VStack-BtUbcfLF.js";import"./clsx-B-dksMZM.js";import"./Theme-6IdwQf2V.js";import"./create-context-BlrHNsQj.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./Button-C4dKKha_.js";import"./Loader-CoAqN6Lw.js";import"./Provider-B_QIWjIe.js";import"./Label-ZYbyet41.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9OmVTHV.js";import"./index.es-B_RouKJz.js";import"./index.es-Dh3mAfPy.js";import"./index-D9DDUrbY.js";import"./message-BcVJpMje.js";import"./Modal-C6iE4cX-.js";import"./floating-ui.react-FIE1On8Y.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./useDateTranslationContext-DuYWebvA.js";import"./XMark-BWJopseo.js";import"./Alert-Pz1mMbfe.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Panel-BzsK_xG0.js";import"./Checkmark-uHeVskEM.js";import"./ChevronDown-Bw2TG6jd.js";import"./useFormField-BKpVC0Pg.js";const F=({name:u,label:l,validate:m=[],readOnly:E=!1,type:j,shouldValidateOnBlur:k=!1,onBlur:n,onChange:p,description:I,autoFocus:N,parse:d=a=>a,format:S=a=>a,normalizeOnBlur:c,isEdited:_,maxLength:z,autoComplete:M=!1,disabled:A,className:B,hideLabel:f,...g})=>{const{formState:{errors:a},trigger:H}=Q(),{field:r}=U({name:u,rules:{validate:P.useMemo(()=>G(m),[m])}});return E?T.jsx(W,{label:l,value:r.value,isEdited:_,hideLabel:f,size:g.size}):T.jsx(X,{size:"small",hideLabel:f,description:I,label:l,error:J(a,u),...r,value:r.value?S(r.value):"",autoFocus:N,autoComplete:M?void 0:"off",maxLength:z,disabled:A,type:j,className:B,onChange:e=>{const t=e.currentTarget.value?d(e.currentTarget.value):null;return p&&p(t),r.onChange(t)},onBlur:async e=>{var t,y,v,b;if(r.onBlur(),k){const L=await H();n&&L&&n((t=e==null?void 0:e.target)==null?void 0:t.value)}else n&&n((y=e==null?void 0:e.target)==null?void 0:y.value);c&&r.onChange((v=e==null?void 0:e.target)!=null&&v.value?c(d((b=e==null?void 0:e.target)==null?void 0:b.value)):null)},...g})};F.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"union",raw:"((value: string) => any)[] | ((value: number) => any)[]",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},{name:"Array",elements:[{name:"unknown"}],raw:"((value: number) => any)[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},shouldValidateOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"",defaultValue:{value:"value => value",computed:!1}},normalizeOnBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},autoComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"union",raw:"'email' | 'password' | 'tel' | 'text' | 'url'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'url'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const _e={title:"form-hooks/InputField",component:F,tags:["autodocs"],decorators:K({testinputpre:"Hei hei"})},s={args:{label:"Dette er et inputfelt",name:"testinput"}},i={args:{label:"Dette er et inputfelt der verdi er valgt",name:"testinputpre"}},o={args:{label:"Dette er et inputfelt som er readonly",name:"testinputpre",readOnly:!0}};var q,w,x;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt',
    name: 'testinput'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,O,h;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt der verdi er valgt',
    name: 'testinputpre'
  }
}`,...(h=(O=i.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var D,R,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt som er readonly',
    name: 'testinputpre',
    readOnly: true
  }
}`,...(C=(R=o.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const ze=["Default","MedVerdi","ReadOnly"];export{s as Default,i as MedVerdi,o as ReadOnly,ze as __namedExportsOrder,_e as default};
