import{g as h,a as D,r as j}from"./formUtils-BBwFp1KK.js";import{u as M,a as _,r as w,j as t,ak as R,al as B}from"./iframe-DEn3vHL7.js";import{R as S}from"./ReadOnlyField-DDiMayDS.js";import"./preload-helper-PPVm8Dsz.js";const V="_textAreaFieldWithBadges_bdz0b_1",W="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:V,etikettWrapper:W},T=({name:m,control:v,label:u,hideLabel:c,readOnly:b,badges:d,validate:p=[],parse:k=i=>i,isEdited:y,autoComplete:A="off",size:g="small",...F})=>{const{formState:{errors:i}}=M(),{field:e}=_({name:m,control:v,rules:{validate:w.useMemo(()=>h(p),[p])}});return b?t.jsx(S,{size:g,label:u,value:e.value,type:"textarea",isEdited:y,hideLabel:c}):t.jsxs("div",{className:d?x.textAreaFieldWithBadges:null,children:[d&&t.jsx("div",{className:x.etikettWrapper,children:d.map(({type:r,titleText:f})=>t.jsx(R,{variant:r,size:"small",children:f},f))}),t.jsx(B,{size:g,label:u,hideLabel:c,autoComplete:A,...e,onChange:r=>e.onChange(r.currentTarget.value!==""?k(r.currentTarget.value):null),value:e.value?e.value:"",error:D(i,m),...F})]})};T.__docgenInfo={description:"",methods:[],displayName:"RhfTextarea",props:{badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},autoComplete:{defaultValue:{value:"'off'",computed:!1},required:!1},size:{defaultValue:{value:"'small'",computed:!1},required:!1}}};const O={component:T,tags:["autodocs"],decorators:j({testTextAreaFieldPre:`Ein tekst med linjeskift.
Neste linje, så to linjeskift.

Så tre linjeskift.


Siste linje`}),args:{control:void 0}},a={args:{label:"Dette er et tekstfelt",name:"testTextAreaField"}},s={args:{label:"Dette er et tekstfelt der verdi er valgt",name:"testTextAreaFieldPre"}},n={args:{label:"Dette er et tekstfelt som er readonly",name:"testTextAreaFieldPre",readOnly:!0}},l={args:{label:"Dette er et tekstfelt med maks lengde",name:"testTextAreaField",maxLength:50}},o={args:{label:"Dette er et tekstfelt med badge",name:"testTextAreaField",badges:[{type:"warning",titleText:"Dette er en test"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et tekstfelt med badge',
    name: 'testTextAreaField',
    badges: [{
      type: 'warning',
      titleText: 'Dette er en test'
    }]
  }
}`,...o.parameters?.docs?.source}}};const N=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{a as Default,o as MedMBadge,l as MedMaxLength,s as MedVerdi,n as ReadOnly,N as __namedExportsOrder,O as default};
