import{g as y,a as m,r as k}from"./formUtils-fxggq91C.js";import{u as v,a as C,r as R,j as e,C as T,A as D,E as w}from"./iframe-B0hEvG41.js";import{s as V}from"./readOnlyIcon.module-BwIab0k4.js";import"./preload-helper-PPVm8Dsz.js";const p=({label:g,validate:o=[],onChange:c,onClick:l,size:h="small",name:n,control:f,className:b,...x})=>{const{formState:{errors:i}}=v(),{field:s}=C({name:n,control:f,rules:{validate:R.useMemo(()=>y(o),[o])}}),d=m(i,n);return e.jsxs(e.Fragment,{children:[e.jsx(T,{size:h,checked:s.value===!0,error:!!d,...s,onChange:u=>{s.onChange(u),c&&c(u.currentTarget.checked)},onClick:()=>{l&&l()},className:D(b,V.noReadOnlyIcon),...x,children:g}),d&&e.jsx(w,{children:m(i,n)})]})};p.__docgenInfo={description:"",methods:[],displayName:"RhfCheckbox",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"function",raw:"(value: string) => ValidationReturnType",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}}],raw:"Array<(value: string) => ValidationReturnType>"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const M={component:p,tags:["autodocs"],decorators:k({testcheckboxpre:!0}),args:{control:void 0}},r={args:{label:"Dette er en checkbox",name:"testcheckbox"}},a={args:{label:"Dette er en checkbox der verdi er valgt",name:"testcheckboxpre"}},t={args:{label:"Dette er en checkbox som er readonly",name:"testcheckboxpre",readOnly:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox',
    name: 'testcheckbox'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox der verdi er valgt',
    name: 'testcheckboxpre'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox som er readonly',
    name: 'testcheckboxpre',
    readOnly: true
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","MedVerdi","ReadOnly"];export{r as Default,a as MedVerdi,t as ReadOnly,S as __namedExportsOrder,M as default};
