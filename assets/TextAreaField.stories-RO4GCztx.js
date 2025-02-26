import{g as S,a as C,r as E}from"./formUtils-BjUJbqEf.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-Dxs5m6lS.js";import{u as z,a as I}from"./ReadOnlyIcon-DuqD_nIQ.js";import{R as G}from"./ReadOnlyField-Bpuw-EuI.js";import{T as H}from"./Tag-DZhJsFcp.js";import{T as J}from"./Textarea-DaN6YZZY.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./VStack-Vgssv_xf.js";import"./clsx-B-dksMZM.js";import"./Theme-D6t0sq75.js";import"./create-context-B5rPGqtO.js";import"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import"./BasePrimitive-CCRtmZcj.js";import"./Button-D0flVHf8.js";import"./Loader-BHKWc60O.js";import"./Provider-B4A31v_2.js";import"./Label-g0SsZd4P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9cQ8Pho.js";import"./index.es-Cx4R7XRv.js";import"./index.es-DIQk1_2L.js";import"./Alert-BC6DEIhx.js";import"./ExclamationmarkTriangleFill-DkXWnTRW.js";import"./XMarkOctagonFill-Ct54z8PV.js";import"./XMark-HQCrC0kG.js";import"./PersonPencilFill-DeEWAwj3.js";import"./Box-B-JCHjPf.js";import"./KeyVerticalFill-DGPAogWB.js";import"./Checkmark-ARqG-vXH.js";import"./ChevronDown-TCQpyZRB.js";import"./Modal-B1D1msXx.js";import"./floating-ui.react-BIOaLlQ7.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./useDateTranslationContext-BEjj1I9s.js";import"./useClientLayoutEffect-BVjwYvME.js";import"./useFormField-CUgZtuoq.js";const K="_textAreaFieldWithBadges_bdz0b_1",Q="_etikettWrapper_bdz0b_4",f={textAreaFieldWithBadges:K,etikettWrapper:Q},R=({name:d,label:p,readOnly:W,maxLength:j,badges:m,validate:u=[],parse:L=l=>l,className:O,description:N,isEdited:P,...c})=>{const{formState:{errors:l}}=z(),{field:e}=I({name:d,rules:{validate:V.useMemo(()=>S(u),[u])}});return W?t.jsx(G,{label:p,value:e.value,type:"textarea",isEdited:P,hideLabel:c.hideLabel}):t.jsxs("div",{className:m?f.textAreaFieldWithBadges:null,children:[m&&t.jsx("div",{className:f.etikettWrapper,children:m.map(({type:r,titleText:g})=>t.jsx(H,{variant:r,size:"small",children:g},g))}),t.jsx(J,{size:"small",label:p,description:N,className:O,autoComplete:"off",...e,onChange:r=>e.onChange(r.currentTarget.value!==""?L(r.currentTarget.value):null),value:e.value?e.value:"",error:C(l,d),maxLength:j,...c})]})};R.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaProps"]};const Oe={title:"form-hooks/TextAreaField",component:R,tags:["autodocs"],decorators:E({testTextAreaFieldPre:"Dette er en begrunnelse"})},a={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},o={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},i={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};var x,T,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var y,v,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt der verdi er valgt',
    name: 'testTextAreaFieldPre'
  }
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var F,h,k;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt som er readonly',
    name: 'testTextAreaFieldPre',
    readOnly: true
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var D,M,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50
  }
}`,...(q=(M=o.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var _,w,B;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const Ne=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{a as Default,i as MedMBadge,o as MedMaxLength,s as MedVerdi,n as ReadOnly,Ne as __namedExportsOrder,Oe as default};
