import{g as k,a as m,r as v}from"./formUtils-YDKccthn.js";import{m as C,n as R,r as D,j as e,C as T,E as V}from"./iframe-DlPxsZDl.js";const p=({label:g,validate:o=[],readOnly:f=!1,onChange:c,onClick:i,className:h,...b})=>{const{name:t,control:x,disabled:y}=b,{formState:{errors:l}}=C(),{field:s}=R({name:t,control:x,rules:{validate:D.useMemo(()=>k(o),[o])}}),d=m(l,t);return e.jsxs(e.Fragment,{children:[e.jsx(T,{size:"small",disabled:y||f,checked:s.value===!0,className:h,error:!!d,...s,onChange:u=>{s.onChange(u),c&&c(u.currentTarget.checked)},onClick:()=>{i&&i()},children:g}),d&&e.jsx(V,{children:m(l,t)})]})};p.__docgenInfo={description:"",methods:[],displayName:"RhfCheckbox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"function",raw:"(value: string) => ValidationReturnType",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}}],raw:"Array<(value: string) => ValidationReturnType>"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={component:p,tags:["autodocs"],decorators:v({testcheckboxpre:!0})},r={args:{label:"Dette er en checkbox",name:"testcheckbox"}},a={args:{label:"Dette er en checkbox der verdi er valgt",name:"testcheckboxpre"}},n={args:{label:"Dette er en checkbox som er readonly",name:"testcheckboxpre",readOnly:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox',
    name: 'testcheckbox'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox der verdi er valgt',
    name: 'testcheckboxpre'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox som er readonly',
    name: 'testcheckboxpre',
    readOnly: true
  }
}`,...n.parameters?.docs?.source}}};const O=["Default","MedVerdi","ReadOnly"];export{r as Default,a as MedVerdi,n as ReadOnly,O as __namedExportsOrder,E as default};
