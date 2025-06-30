import{g as D,a as j,r as M}from"./formUtils-YDKccthn.js";import{m as R,n as q,r as w,j as t,a7 as _,a8 as B}from"./iframe-DlPxsZDl.js";import{R as S}from"./ReadOnlyField-DuuqyWV7.js";const W="_textAreaFieldWithBadges_bdz0b_1",L="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:W,etikettWrapper:L},T=({name:m,control:b,label:u,readOnly:y,maxLength:v,badges:d,validate:c=[],parse:k=o=>o,className:h,description:A,isEdited:F,size:p="small",...g})=>{const{formState:{errors:o}}=R(),{field:e}=q({name:m,control:b,rules:{validate:w.useMemo(()=>D(c),[c])}});return y?t.jsx(S,{size:p,label:u,value:e.value,type:"textarea",isEdited:F,hideLabel:g.hideLabel}):t.jsxs("div",{className:d?x.textAreaFieldWithBadges:null,children:[d&&t.jsx("div",{className:x.etikettWrapper,children:d.map(({type:a,titleText:f})=>t.jsx(_,{variant:a,size:"small",children:f},f))}),t.jsx(B,{size:p,label:u,description:A,className:h,autoComplete:"off",...e,onChange:a=>e.onChange(a.currentTarget.value!==""?k(a.currentTarget.value):null),value:e.value?e.value:"",error:j(o,m),maxLength:v,...g})]})};T.__docgenInfo={description:"",methods:[],displayName:"RhfTextarea",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const E={component:T,tags:["autodocs"],decorators:M({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`})},r={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},l={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},i={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt der verdi er valgt',
    name: 'testTextAreaFieldPre'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt som er readonly',
    name: 'testTextAreaFieldPre',
    readOnly: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med maks lengde',
    name: 'testTextAreaField',
    maxLength: 50
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...i.parameters?.docs?.source}}};const C=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{r as Default,i as MedMBadge,l as MedMaxLength,s as MedVerdi,n as ReadOnly,C as __namedExportsOrder,E as default};
