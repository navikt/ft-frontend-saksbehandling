import{g as G,a as J,r as K}from"./formUtils-D5hbJtvb.js";import{j as T}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-DASCADcX.js";import{u as Q,a as U}from"./index.esm-s_KxdRQ_.js";import{R as W}from"./ReadOnlyField-BVwH8hWT.js";import{T as X}from"./TextField-1A0BebA6.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./VStack-CfnCueE0.js";import"./Theme-Bqc_BD0M.js";import"./omit-B7stZg_p.js";import"./useId-BiFzyKmP.js";import"./BasePrimitive-eMFBMVLd.js";import"./Button-D87Irl5r.js";import"./Loader-C31s9nuZ.js";import"./Provider-ChnEfPss.js";import"./Label-CfBdhDeq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-C_yiAFBJ.js";import"./index.es-DxogalCq.js";import"./Alert-vBIWixRy.js";import"./useId-sDoo_C8F.js";import"./ExclamationmarkTriangleFill-BFbmXhrr.js";import"./XMarkOctagonFill-Cj0h8cZo.js";import"./XMark-KAXZPgUH.js";import"./PersonPencilFill-CoF6qBVB.js";import"./Box-t-YAJNpB.js";import"./KeyVerticalFill-m_CavoP-.js";import"./Checkmark-abnGd_Ay.js";import"./ChevronDown-DKSW_DmS.js";import"./Modal-BDpe_Rzz.js";import"./floating-ui.react-CCcN9eYl.js";import"./index-CL4jvrHg.js";import"./index-BxWMR1Ay.js";import"./Date.Input-DmVXlpzX.js";import"./ReadOnlyIcon-fpBUgZkh.js";import"./useFormField-BZtIeUXv.js";const F=({name:u,label:l,validate:m=[],readOnly:E=!1,type:j,shouldValidateOnBlur:N=!1,onBlur:n,onChange:p,description:S,autoFocus:_,parse:d=a=>a,format:k=a=>a,normalizeOnBlur:c,isEdited:z,maxLength:I,autoComplete:M=!1,disabled:A,className:B,hideLabel:f,...g})=>{const{formState:{errors:a},trigger:H}=Q(),{field:r}=U({name:u,rules:{validate:P.useMemo(()=>G(m),[m])}});return E?T.jsx(W,{label:l,value:r.value,isEdited:z,hideLabel:f,size:g.size}):T.jsx(X,{size:"small",hideLabel:f,description:S,label:l,error:J(a,u),...r,value:r.value?k(r.value):"",autoFocus:_,autoComplete:M?void 0:"off",maxLength:I,disabled:A,type:j,className:B,onChange:e=>{const t=e.currentTarget.value?d(e.currentTarget.value):null;return p&&p(t),r.onChange(t)},onBlur:async e=>{var t,y,v,b;if(r.onBlur(),N){const L=await H();n&&L&&n((t=e==null?void 0:e.target)==null?void 0:t.value)}else n&&n((y=e==null?void 0:e.target)==null?void 0:y.value);c&&r.onChange((v=e==null?void 0:e.target)!=null&&v.value?c(d((b=e==null?void 0:e.target)==null?void 0:b.value)):null)},...g})};F.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"union",raw:"((value: string) => any)[] | ((value: number) => any)[]",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},{name:"Array",elements:[{name:"unknown"}],raw:"((value: number) => any)[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},shouldValidateOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"",defaultValue:{value:"value => value",computed:!1}},normalizeOnBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},autoComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"union",raw:"'email' | 'password' | 'tel' | 'text' | 'url'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'url'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const _e={component:F,tags:["autodocs"],decorators:K({testinputpre:"Hei hei"})},s={args:{label:"Dette er et inputfelt",name:"testinput"}},i={args:{label:"Dette er et inputfelt der verdi er valgt",name:"testinputpre"}},o={args:{label:"Dette er et inputfelt som er readonly",name:"testinputpre",readOnly:!0}};var q,w,x;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt',
    name: 'testinput'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,O,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt der verdi er valgt',
    name: 'testinputpre'
  }
}`,...(D=(O=i.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var h,R,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt som er readonly',
    name: 'testinputpre',
    readOnly: true
  }
}`,...(C=(R=o.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const ke=["Default","MedVerdi","ReadOnly"];export{s as Default,i as MedVerdi,o as ReadOnly,ke as __namedExportsOrder,_e as default};
