import{g as h,a as A,r as F}from"./formUtils-BlYJJKSx.js";import{u as D,a as j,r as M,j as t,ab as _,ac as w}from"./iframe-DOY3JjYl.js";import{R}from"./ReadOnlyField-B_ycYORc.js";import"./preload-helper-PPVm8Dsz.js";const B="_textAreaFieldWithBadges_bdz0b_1",S="_etikettWrapper_bdz0b_4",x={textAreaFieldWithBadges:B,etikettWrapper:S},b=({name:m,control:T,label:u,readOnly:v,badges:d,validate:c=[],parse:y=i=>i,isEdited:k,size:p="small",...g})=>{const{formState:{errors:i}}=D(),{field:e}=j({name:m,control:T,rules:{validate:M.useMemo(()=>h(c),[c])}});return v?t.jsx(R,{size:p,label:u,value:e.value,type:"textarea",isEdited:k,hideLabel:g.hideLabel}):t.jsxs("div",{className:d?x.textAreaFieldWithBadges:null,children:[d&&t.jsx("div",{className:x.etikettWrapper,children:d.map(({type:r,titleText:f})=>t.jsx(_,{variant:r,size:"small",children:f},f))}),t.jsx(w,{size:p,label:u,autoComplete:"off",...e,onChange:r=>e.onChange(r.currentTarget.value!==""?y(r.currentTarget.value):null),value:e.value?e.value:"",error:A(i,m),...g})]})};b.__docgenInfo={description:"",methods:[],displayName:"RhfTextarea",props:{badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badges"}],raw:"Badges[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => string | number",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"value => value",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},size:{defaultValue:{value:"'small'",computed:!1},required:!1}}};const q={component:b,tags:["autodocs"],decorators:F({testTextAreaFieldPre:`Ein tekst med linjeskift.
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
}`,...o.parameters?.docs?.source}}};const E=["Default","MedVerdi","ReadOnly","MedMaxLength","MedMBadge"];export{a as Default,o as MedMBadge,l as MedMaxLength,s as MedVerdi,n as ReadOnly,E as __namedExportsOrder,q as default};
