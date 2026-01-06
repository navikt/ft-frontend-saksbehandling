import{u as b,a as D,r as E,j as r,F as C,A as V,H as R,G as j,C as l}from"./iframe-DGClZT-o.js";import{g as M,a as T,r as O}from"./formUtils-BFc0L0lC.js";import{s as q}from"./readOnlyIcon.module-BwIab0k4.js";import"./preload-helper-PPVm8Dsz.js";const u=({legend:e,validate:i=[],onChange:c,readOnly:m,isEdited:g,size:v="small",children:k,name:o,control:h,className:x,...f})=>{const{formState:{errors:y}}=b(),{field:d}=D({name:o,control:h,rules:{validate:E.useMemo(()=>M(i),[i])}});return r.jsx(C,{name:o,value:d.value!==void 0?d.value:[],onChange:p=>{c&&c(p),d.onChange(p)},size:v,legend:r.jsxs(R,{justify:"center",gap:"space-8",children:[e,m&&g&&r.jsx(j,{})]}),readOnly:m,error:T(y,o),className:V(x,q.noReadOnlyIcon),...f,children:k})};u.__docgenInfo={description:"",methods:[],displayName:"RhfCheckboxGroup",props:{validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((values: (string | number)[]) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},hideLegend:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const A={component:u,tags:["autodocs"],args:{readOnly:!1,isEdited:!1,control:void 0,children:[r.jsx(l,{value:"verdi1",children:"Verdi 1"},"verdi1"),r.jsx(l,{value:"verdi2",children:"Verdi 2"},"verdi2"),r.jsx(l,{value:"verdi3",children:"Verdi 3"},"verdi3")]},decorators:O({checkboxpanelpre:["verdi1","verdi3"]})},a={args:{legend:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",name:"checkboxpanel"}},n={args:{legend:"Dette er en checkboxpanel der verdi er valgt",name:"checkboxpanelpre"}},s={args:{readOnly:!0,isEdited:!0,legend:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},t={args:{validate:[e=>e.length<1?"Du må velge minst ett element":void 0,e=>e.includes("verdi1")&&e.includes("verdi2")?"Verdi 1 og 2 kan ikke velges samtidig":void 0],legend:"Dette er en checkboks med validering",name:"checkboxpanelpre"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    name: 'checkboxpanel'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Dette er en checkboxpanel der verdi er valgt',
    name: 'checkboxpanelpre'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    isEdited: true,
    legend: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    validate: [checkedElements => checkedElements.length < 1 ? 'Du må velge minst ett element' : undefined, checkedElements => checkedElements.includes('verdi1') && checkedElements.includes('verdi2') ? 'Verdi 1 og 2 kan ikke velges samtidig' : undefined],
    legend: 'Dette er en checkboks med validering',
    name: 'checkboxpanelpre'
  }
}`,...t.parameters?.docs?.source}}};const F=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","MedValidering"];export{a as Default,t as MedValidering,n as MedVerdi,s as ReadOnlyMedOverstyrtMarkering,F as __namedExportsOrder,A as default};
