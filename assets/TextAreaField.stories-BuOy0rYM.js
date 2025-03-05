import{g as S,a as C,r as E}from"./formUtils-DN_Z7qxa.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-DASCADcX.js";import{u as z,a as I}from"./ReadOnlyIcon-DezK7_1v.js";import{R as G}from"./ReadOnlyField-C8lniKRn.js";import{T as H}from"./Tag-CCjwuauJ.js";import{T as J}from"./Textarea-BJ2JSFef.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./VStack-CjRg3Zfs.js";import"./clsx-B-dksMZM.js";import"./Theme-s5aaJqOF.js";import"./create-context-Bo0OP0Ib.js";import"./omit-B7stZg_p.js";import"./useId-BiFzyKmP.js";import"./BasePrimitive-CQFd8qnq.js";import"./Button-CiEWTRO4.js";import"./Loader-DokcRViZ.js";import"./Provider-DeC0qy30.js";import"./Label-C-_BY61p.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-sDoo_C8F.js";import"./index.es-sk3JG121.js";import"./index.es-DxogalCq.js";import"./Alert-CsAGiB4k.js";import"./ExclamationmarkTriangleFill-BFbmXhrr.js";import"./XMarkOctagonFill-Cj0h8cZo.js";import"./XMark-KAXZPgUH.js";import"./PersonPencilFill-CoF6qBVB.js";import"./Box-BRUAy9sN.js";import"./KeyVerticalFill-m_CavoP-.js";import"./Checkmark-abnGd_Ay.js";import"./ChevronDown-DKSW_DmS.js";import"./Modal-BsdIhMBu.js";import"./floating-ui.react-C49gkrzP.js";import"./index-CL4jvrHg.js";import"./index-BxWMR1Ay.js";import"./useDateTranslationContext-CJAj3RHb.js";import"./useClientLayoutEffect-Dt_TuINI.js";import"./useFormField-BJl8SNDY.js";const K="_textAreaFieldWithBadges_bdz0b_1",Q="_etikettWrapper_bdz0b_4",f={textAreaFieldWithBadges:K,etikettWrapper:Q},R=({name:d,label:p,readOnly:W,maxLength:j,badges:m,validate:u=[],parse:L=l=>l,className:O,description:N,isEdited:P,...c})=>{const{formState:{errors:l}}=z(),{field:e}=I({name:d,rules:{validate:V.useMemo(()=>S(u),[u])}});return W?t.jsx(G,{label:p,value:e.value,type:"textarea",isEdited:P,hideLabel:c.hideLabel}):t.jsxs("div",{className:m?f.textAreaFieldWithBadges:null,children:[m&&t.jsx("div",{className:f.etikettWrapper,children:m.map(({type:r,titleText:g})=>t.jsx(H,{variant:r,size:"small",children:g},g))}),t.jsx(J,{size:"small",label:p,description:N,className:O,autoComplete:"off",...e,onChange:r=>e.onChange(r.currentTarget.value!==""?L(r.currentTarget.value):null),value:e.value?e.value:"",error:C(l,d),maxLength:j,...c})]})};R.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaProps"]};const Oe={component:R,tags:["autodocs"],decorators:E({testTextAreaFieldPre:"Dette er en begrunnelse"})},a={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},o={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},i={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};var x,T,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
