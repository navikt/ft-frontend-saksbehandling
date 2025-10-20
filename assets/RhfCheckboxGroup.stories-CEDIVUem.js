import{u as R,a as V,r as D,j as r,p as E,H as C,q as T,C as i}from"./iframe-JrFJSfSA.js";import{g as q,a as j,r as M}from"./formUtils-Cxo1oQIQ.js";import"./preload-helper-PPVm8Dsz.js";const u=({label:e,description:p,validate:d=[],onChange:c,isReadOnly:v=!1,hideLegend:g=!1,isEdited:f=!1,size:k="small",children:h,name:l,control:b})=>{const{formState:{errors:x}}=R(),{field:o}=V({name:l,control:b,rules:{validate:D.useMemo(()=>q(d),[d])}}),y=r.jsxs(C,{justify:"center",gap:"space-8",children:[e,v&&f&&r.jsx(T,{})]});return r.jsx(E,{name:l,description:p,value:o.value!==void 0?o.value:[],onChange:m=>{c&&c(m),o.onChange(m)},size:k,legend:y,error:j(x,l),hideLegend:g,children:h})};u.__docgenInfo={description:"",methods:[],displayName:"RhfCheckboxGroup",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((values: (string | number)[]) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const _={component:u,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,control:void 0,children:[r.jsx(i,{value:"verdi1",children:"Verdi 1"},"verdi1"),r.jsx(i,{value:"verdi2",children:"Verdi 2"},"verdi2"),r.jsx(i,{value:"verdi3",children:"Verdi 3"},"verdi3")]},decorators:M({checkboxpanelpre:["verdi1","verdi3"]})},a={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",name:"checkboxpanel"}},n={args:{label:"Dette er en checkboxpanel der verdi er valgt",name:"checkboxpanelpre"}},s={args:{isReadOnly:!0,isEdited:!0,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},t={args:{validate:[e=>e.length<1?"Du må velge minst ett element":void 0,e=>e.includes("verdi1")&&e.includes("verdi2")?"Verdi 1 og 2 kan ikke velges samtidig":void 0],label:"Dette er en checkboks med validering",name:"checkboxpanelpre"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    name: 'checkboxpanel'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    name: 'checkboxpanelpre'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    validate: [checkedElements => checkedElements.length < 1 ? 'Du må velge minst ett element' : undefined, checkedElements => checkedElements.includes('verdi1') && checkedElements.includes('verdi2') ? 'Verdi 1 og 2 kan ikke velges samtidig' : undefined],
    label: 'Dette er en checkboks med validering',
    name: 'checkboxpanelpre'
  }
}`,...t.parameters?.docs?.source}}};const G=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","MedValidering"];export{a as Default,t as MedValidering,n as MedVerdi,s as ReadOnlyMedOverstyrtMarkering,G as __namedExportsOrder,_ as default};
