import{g as P,a as V,r as C}from"./formUtils-DcE8sCZ2.js";import{l as z,m as I,r as G,j as t,a4 as H,a5 as J}from"./iframe-DWs0UOT4.js";import{R as K}from"./ReadOnlyField-BLYJTLtH.js";const Q="_textAreaFieldWithBadges_bdz0b_1",U="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:Q,etikettWrapper:U},R=({name:m,label:u,readOnly:S,maxLength:W,badges:d,validate:c=[],parse:L=o=>o,className:N,description:O,isEdited:E,size:p="small",...g})=>{const{formState:{errors:o}}=z(),{field:e}=I({name:m,rules:{validate:G.useMemo(()=>P(c),[c])}});return S?t.jsx(K,{size:p,label:u,value:e.value,type:"textarea",isEdited:E,hideLabel:g.hideLabel}):t.jsxs("div",{className:d?x.textAreaFieldWithBadges:null,children:[d&&t.jsx("div",{className:x.etikettWrapper,children:d.map(({type:a,titleText:f})=>t.jsx(H,{variant:a,size:"small",children:f},f))}),t.jsx(J,{size:p,label:u,description:O,className:N,autoComplete:"off",...e,onChange:a=>e.onChange(a.currentTarget.value!==""?L(a.currentTarget.value):null),value:e.value?e.value:"",error:V(o,m),maxLength:W,...g})]})};R.__docgenInfo={description:"",methods:[],displayName:"TextAreaField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}},composes:["TextareaProps"]};const $={component:R,tags:["autodocs"],decorators:C({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`})},r={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},l={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},i={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};var T,y,b;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,k,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var j,q,M;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50
  }
}`,...(M=(q=l.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var w,_,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...(B=(_=i.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const ee=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{r as Default,i as MedMBadge,l as MedMaxLength,s as MedVerdi,n as ReadOnly,ee as __namedExportsOrder,$ as default};
