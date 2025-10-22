import{u as b,a as V,r as D,j as r,p as E,H as C,q as R,C as d}from"./iframe-DOY3JjYl.js";import{g as j,a as q,r as M}from"./formUtils-BlYJJKSx.js";import"./preload-helper-PPVm8Dsz.js";const u=({legend:e,validate:i=[],onChange:c,readOnly:p=!1,hideLegend:g=!1,isEdited:v=!1,size:k="small",children:f,name:l,control:h,...x})=>{const{formState:{errors:y}}=b(),{field:o}=V({name:l,control:h,rules:{validate:D.useMemo(()=>j(i),[i])}});return r.jsx(E,{name:l,value:o.value!==void 0?o.value:[],onChange:m=>{c&&c(m),o.onChange(m)},size:k,legend:r.jsxs(C,{justify:"center",gap:"space-8",children:[e,p&&v&&r.jsx(R,{})]}),error:q(y,l),hideLegend:g,...x,children:f})};u.__docgenInfo={description:"",methods:[],displayName:"RhfCheckboxGroup",props:{validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((values: (string | number)[]) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const S={component:u,tags:["autodocs"],args:{readOnly:!1,isEdited:!1,control:void 0,children:[r.jsx(d,{value:"verdi1",children:"Verdi 1"},"verdi1"),r.jsx(d,{value:"verdi2",children:"Verdi 2"},"verdi2"),r.jsx(d,{value:"verdi3",children:"Verdi 3"},"verdi3")]},decorators:M({checkboxpanelpre:["verdi1","verdi3"]})},a={args:{legend:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",name:"checkboxpanel"}},n={args:{legend:"Dette er en checkboxpanel der verdi er valgt",name:"checkboxpanelpre"}},s={args:{readOnly:!0,isEdited:!0,legend:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},t={args:{validate:[e=>e.length<1?"Du må velge minst ett element":void 0,e=>e.includes("verdi1")&&e.includes("verdi2")?"Verdi 1 og 2 kan ikke velges samtidig":void 0],legend:"Dette er en checkboks med validering",name:"checkboxpanelpre"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","MedValidering"];export{a as Default,t as MedValidering,n as MedVerdi,s as ReadOnlyMedOverstyrtMarkering,_ as __namedExportsOrder,S as default};
