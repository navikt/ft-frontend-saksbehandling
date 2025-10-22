import{g as k,a as m,r as v}from"./formUtils-BlYJJKSx.js";import{u as C,a as T,r as D,j as e,C as R,E as V}from"./iframe-DOY3JjYl.js";import"./preload-helper-PPVm8Dsz.js";const p=({label:g,validate:o=[],readOnly:f=!1,onChange:l,onClick:c,size:h="small",name:n,control:b,disabled:x,...y})=>{const{formState:{errors:i}}=C(),{field:s}=T({name:n,control:b,rules:{validate:D.useMemo(()=>k(o),[o])}}),d=m(i,n);return e.jsxs(e.Fragment,{children:[e.jsx(R,{size:h,disabled:x||f,checked:s.value===!0,error:!!d,...s,onChange:u=>{s.onChange(u),l&&l(u.currentTarget.checked)},onClick:()=>{c&&c()},...y,children:g}),d&&e.jsx(V,{children:m(i,n)})]})};p.__docgenInfo={description:"",methods:[],displayName:"RhfCheckbox",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"function",raw:"(value: string) => ValidationReturnType",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}}],raw:"Array<(value: string) => ValidationReturnType>"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const O={component:p,tags:["autodocs"],decorators:v({testcheckboxpre:!0}),args:{control:void 0}},r={args:{label:"Dette er en checkbox",name:"testcheckbox"}},a={args:{label:"Dette er en checkbox der verdi er valgt",name:"testcheckboxpre"}},t={args:{label:"Dette er en checkbox som er readonly",name:"testcheckboxpre",readOnly:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["Default","MedVerdi","ReadOnly"];export{r as Default,a as MedVerdi,t as ReadOnly,j as __namedExportsOrder,O as default};
