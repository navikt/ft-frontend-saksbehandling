import{g as P,a as V,r as C}from"./formUtils-D-F-RWtg.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./index-DNHX5htx.js";import{u as I,a as G}from"./index.esm-CkkEN1rj.js";import{R as H}from"./ReadOnlyField-B2PAq3I_.js";import{T as J}from"./Tag-ntoonGP8.js";import{T as K}from"./Textarea-BjE6whUD.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./BasePrimitive-gBgyIEwX.js";import"./Button-Cc809GDC.js";import"./Loader-42dkOmtz.js";import"./Provider-BZs7ODlm.js";import"./Label-CYbek38p.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-lC3nHLK-.js";import"./index.es-Bs6SSTCM.js";import"./dayjs.min-Cke173X9.js";import"./Alert-Ja4tf6sE.js";import"./useId-SP_zdaIa.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./XMark-6H9iuGiv.js";import"./PersonPencilFill-DqunLdn1.js";import"./Tooltip-BnLM-CWP.js";import"./floating-ui.react-D9M9yXN8.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./Box-C3b4VC_S.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Modal-DdoS0OAm.js";import"./Date.Input-D651xWgA.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./useFormField-Bu2NUIkp.js";import"./useClientLayoutEffect-pkze6c0k.js";const Q="_textAreaFieldWithBadges_bdz0b_1",U="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:Q,etikettWrapper:U},R=({name:d,label:p,readOnly:S,maxLength:W,badges:l,validate:u=[],parse:L=m=>m,className:N,description:O,isEdited:E,size:c="small",...g})=>{const{formState:{errors:m}}=I(),{field:e}=G({name:d,rules:{validate:z.useMemo(()=>P(u),[u])}});return S?t.jsx(H,{size:c,label:p,value:e.value,type:"textarea",isEdited:E,hideLabel:g.hideLabel}):t.jsxs("div",{className:l?x.textAreaFieldWithBadges:null,children:[l&&t.jsx("div",{className:x.etikettWrapper,children:l.map(({type:r,titleText:f})=>t.jsx(J,{variant:r,size:"small",children:f},f))}),t.jsx(K,{size:c,label:p,description:O,className:N,autoComplete:"off",...e,onChange:r=>e.onChange(r.currentTarget.value!==""?L(r.currentTarget.value):null),value:e.value?e.value:"",error:V(m,d),maxLength:W,...g})]})};R.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}},composes:["TextareaProps"]};const Le={component:R,tags:["autodocs"],decorators:C({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`})},a={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},i={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},o={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};var T,y,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,k,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt der verdi er valgt',
    name: 'testTextAreaFieldPre'
  }
}`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,h,D;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt som er readonly',
    name: 'testTextAreaFieldPre',
    readOnly: true
  }
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var j,q,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50
  }
}`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var w,_,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...(B=(_=o.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const Ne=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{a as Default,o as MedMBadge,i as MedMaxLength,s as MedVerdi,n as ReadOnly,Ne as __namedExportsOrder,Le as default};
