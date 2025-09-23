import{g as D,a as j,r as q}from"./formUtils-DFJDfSXM.js";import{u as w,a as M,r as R,j as t,ab as _,ac as B}from"./iframe-BrlM0Gyz.js";import{R as S}from"./ReadOnlyField-CUXxa1Ye.js";import"./preload-helper-PPVm8Dsz.js";const W="_textAreaFieldWithBadges_bdz0b_1",C="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:W,etikettWrapper:C},T=({name:m,control:b,label:u,readOnly:y,maxLength:v,badges:o,validate:c=[],parse:k=d=>d,className:h,description:A,isEdited:F,size:p="small",...g})=>{const{formState:{errors:d}}=w(),{field:e}=M({name:m,control:b,rules:{validate:R.useMemo(()=>D(c),[c])}});return y?t.jsx(S,{size:p,label:u,value:e.value,type:"textarea",isEdited:F,hideLabel:g.hideLabel}):t.jsxs("div",{className:o?x.textAreaFieldWithBadges:null,children:[o&&t.jsx("div",{className:x.etikettWrapper,children:o.map(({type:r,titleText:f})=>t.jsx(_,{variant:r,size:"small",children:f},f))}),t.jsx(B,{size:p,label:u,description:A,className:h,autoComplete:"off",...e,onChange:r=>e.onChange(r.currentTarget.value!==""?k(r.currentTarget.value):null),value:e.value?e.value:"",error:j(d,m),maxLength:v,...g})]})};T.__docgenInfo={description:"",methods:[],displayName:"RhfTextarea",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const V={component:T,tags:["autodocs"],decorators:q({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`}),args:{control:void 0}},a={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},l={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},i={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt',
    name: 'testTextAreaField'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const E=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{a as Default,i as MedMBadge,l as MedMaxLength,s as MedVerdi,n as ReadOnly,E as __namedExportsOrder,V as default};
