import{g as C,a as P,r as z}from"./formUtils-DT9TWQTU.js";import{m as I,n as G,r as H,j as t,a7 as J,a8 as K}from"./iframe-DeOT1OL9.js";import{R as Q}from"./ReadOnlyField-DzpBT4fP.js";const U="_textAreaFieldWithBadges_bdz0b_1",X="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:U,etikettWrapper:X},B=({name:m,control:S,label:u,readOnly:W,maxLength:L,badges:d,validate:c=[],parse:N=o=>o,className:O,description:V,isEdited:E,size:p="small",...g})=>{const{formState:{errors:o}}=I(),{field:e}=G({name:m,control:S,rules:{validate:H.useMemo(()=>C(c),[c])}});return W?t.jsx(Q,{size:p,label:u,value:e.value,type:"textarea",isEdited:E,hideLabel:g.hideLabel}):t.jsxs("div",{className:d?x.textAreaFieldWithBadges:null,children:[d&&t.jsx("div",{className:x.etikettWrapper,children:d.map(({type:a,titleText:f})=>t.jsx(J,{variant:a,size:"small",children:f},f))}),t.jsx(K,{size:p,label:u,description:V,className:O,autoComplete:"off",...e,onChange:a=>e.onChange(a.currentTarget.value!==""?N(a.currentTarget.value):null),value:e.value?e.value:"",error:P(o,m),maxLength:L,...g})]})};B.__docgenInfo={description:"",methods:[],displayName:"RhfTextarea",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const ee={component:B,tags:["autodocs"],decorators:z({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`})},r={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},l={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},i={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};var T,b,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,k,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt der verdi er valgt',
    name: 'testTextAreaFieldPre'
  }
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var A,F,D;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt som er readonly',
    name: 'testTextAreaFieldPre',
    readOnly: true
  }
}`,...(D=(F=n.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var j,M,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50
  }
}`,...(R=(M=l.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var q,w,_;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...(_=(w=i.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const te=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{r as Default,i as MedMBadge,l as MedMaxLength,s as MedVerdi,n as ReadOnly,te as __namedExportsOrder,ee as default};
