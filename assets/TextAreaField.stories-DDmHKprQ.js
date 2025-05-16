import{g as E,a as P,r as C}from"./formUtils-D-F-RWtg.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-DNHX5htx.js";import{u as z,a as I}from"./index.esm-CkkEN1rj.js";import{R as G}from"./ReadOnlyField-DXBAP7nq.js";import{T as H}from"./Tag-ntoonGP8.js";import{T as J}from"./Textarea-BjE6whUD.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./BasePrimitive-gBgyIEwX.js";import"./Button-Cc809GDC.js";import"./Loader-42dkOmtz.js";import"./Provider-BZs7ODlm.js";import"./Label-CYbek38p.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-aqSZ_kXa.js";import"./index.es-CfR2N-CV.js";import"./dayjs.min-Cke173X9.js";import"./Alert-Ja4tf6sE.js";import"./useId-SP_zdaIa.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./XMark-6H9iuGiv.js";import"./PersonPencilFill-DqunLdn1.js";import"./Box-C3b4VC_S.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Modal-DdoS0OAm.js";import"./floating-ui.react-D9M9yXN8.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./Date.Input-D651xWgA.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./useFormField-Bu2NUIkp.js";import"./useClientLayoutEffect-pkze6c0k.js";const K="_textAreaFieldWithBadges_bdz0b_1",Q="_etikettWrapper_bdz0b_4",f={textAreaFieldWithBadges:K,etikettWrapper:Q},B=({name:d,label:p,readOnly:R,maxLength:S,badges:m,validate:u=[],parse:W=l=>l,className:L,description:N,isEdited:O,...c})=>{const{formState:{errors:l}}=z(),{field:e}=I({name:d,rules:{validate:V.useMemo(()=>E(u),[u])}});return R?t.jsx(G,{label:p,value:e.value,type:"textarea",isEdited:O,hideLabel:c.hideLabel}):t.jsxs("div",{className:m?f.textAreaFieldWithBadges:null,children:[m&&t.jsx("div",{className:f.etikettWrapper,children:m.map(({type:r,titleText:g})=>t.jsx(H,{variant:r,size:"small",children:g},g))}),t.jsx(J,{size:"small",label:p,description:N,className:L,autoComplete:"off",...e,onChange:r=>e.onChange(r.currentTarget.value!==""?W(r.currentTarget.value):null),value:e.value?e.value:"",error:P(l,d),maxLength:S,...c})]})};B.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaProps"]};const Se={component:B,tags:["autodocs"],decorators:C({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`})},a={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},i={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},o={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};var x,T,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var y,k,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt der verdi er valgt',
    name: 'testTextAreaFieldPre'
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var A,F,h;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt som er readonly',
    name: 'testTextAreaFieldPre',
    readOnly: true
  }
}`,...(h=(F=n.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var D,j,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50
  }
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var q,_,w;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const We=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{a as Default,o as MedMBadge,i as MedMaxLength,s as MedVerdi,n as ReadOnly,We as __namedExportsOrder,Se as default};
