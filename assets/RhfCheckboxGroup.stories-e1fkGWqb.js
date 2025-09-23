import{u as R,a as C,r as T,j as e,q as V,H as q,t as D,C as l}from"./iframe-BrlM0Gyz.js";import{g as E,a as j,r as O}from"./formUtils-DFJDfSXM.js";import"./preload-helper-PPVm8Dsz.js";const i=({label:s,description:u,validate:d=[],onChange:c,isReadOnly:m=!1,hideLegend:f=!1,isEdited:v=!1,size:b="small",children:g,...h})=>{const{name:t,control:x}=h,{formState:{errors:y}}=R(),{field:o}=C({name:t,control:x,rules:{validate:T.useMemo(()=>E(d),[d])}}),k=e.jsxs(q,{justify:"center",gap:"space-8",children:[s,m&&v&&e.jsx(D,{})]});return e.jsx(V,{name:t,description:u,value:o.value!==void 0?o.value:[],onChange:p=>{c&&c(p),o.onChange(p)},size:b,legend:k,error:j(y,t),hideLegend:f,children:g})};i.__docgenInfo={description:"",methods:[],displayName:"RhfCheckboxGroup",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const _={component:i,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,control:void 0},render:s=>e.jsxs(i,{...s,children:[e.jsx(l,{value:"verdi1",children:"Verdi 1"}),e.jsx(l,{value:"verdi2",children:"Verdi 2"}),e.jsx(l,{value:"verdi3",children:"Verdi 3"})]}),decorators:O({checkboxpanelpre:["verdi1","verdi3"]})},r={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",name:"checkboxpanel"}},a={args:{label:"Dette er en checkboxpanel der verdi er valgt",name:"checkboxpanelpre"}},n={args:{isReadOnly:!0,isEdited:!0,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    name: 'checkboxpanel'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    name: 'checkboxpanelpre'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...n.parameters?.docs?.source}}};const G=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering"];export{r as Default,a as MedVerdi,n as ReadOnlyMedOverstyrtMarkering,G as __namedExportsOrder,_ as default};
