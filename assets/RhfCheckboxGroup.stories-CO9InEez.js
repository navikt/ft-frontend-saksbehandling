import{m as H,n as O,r as x,j as a,o as G,C as m,H as j,p as I}from"./iframe-_utZp_mc.js";import{g as F,a as _,r as A}from"./formUtils-2mCs71Cl.js";const k=({label:b,description:R,validate:g=[],checkboxes:r,onChange:y,isReadOnly:h=!1,isHorizontal:C=!1,parse:l=n=>n,hideLegend:S=!1,isEdited:V=!1,size:v="small",children:T,...q})=>{const{name:n,control:E,disabled:D}=q,{formState:{errors:M}}=H(),{field:s}=O({name:n,control:E,rules:{validate:x.useMemo(()=>F(g),[g])}}),w=a.jsxs(j,{justify:"center",gap:"2",children:[b,h&&V&&a.jsx(I,{})]});return a.jsxs(G,{name:n,description:R,value:s.value!==void 0?s.value:[],onChange:e=>{y&&y(e),s.onChange(e)},size:v,legend:w,error:_(M,n),hideLegend:S,children:[T,r&&!C&&r.map(e=>a.jsxs(x.Fragment,{children:[a.jsx(m,{size:v,value:l(e.value),disabled:e.disabled||D||h,children:e.label}),(s.value??[]).some(f=>f===l(e.value))&&e.element]},e.value)),r&&C&&a.jsxs(a.Fragment,{children:[a.jsx(j,{gap:"4",children:r.map(e=>a.jsx(m,{size:v,value:l(e.value),disabled:e.disabled||D||h,children:e.label},e.value))}),r.filter(e=>(s.value??[]).some(f=>f===l(e.value))).map(e=>a.jsx(x.Fragment,{children:e.element},e.value))]})]})};k.__docgenInfo={description:"",methods:[],displayName:"RhfCheckboxGroup",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},checkboxes:{required:!1,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""}}};const K={component:k,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,isHorizontal:!1},decorators:A({checkboxpanelpre:["verdi1","verdi3"]})},p=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],t={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:p,name:"checkboxpanel"}},o={args:{label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:p,name:"checkboxpanelpre"}},d={args:{isReadOnly:!0,isEdited:!0,checkboxes:p,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},c={args:{isHorizontal:!0,checkboxes:p,name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper"}},i={args:{checkboxes:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}],name:"radio",label:"Dette er checkboxpanel med innhold"}},u={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",name:"checkboxpanel"},render:b=>a.jsxs(k,{...b,children:[a.jsx(m,{value:"1",children:"test 1"}),a.jsx(m,{value:"2",children:"test 2"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    checkboxes: [{
      label: '§14-7, 3. ledd',
      value: '14-7.3',
      element: <div>Søker omfattes av §14-7, 3. ledd.</div>
    }, {
      label: '§14-5, 2. ledd',
      value: '14-5.2',
      element: <div>Søker omfattes av §14-5, 2. ledd.</div>
    }],
    name: 'radio',
    label: 'Dette er checkboxpanel med innhold'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    name: 'checkboxpanel'
  },
  render: args => <RhfCheckboxGroup {...args}>
      <Checkbox value="1">test 1</Checkbox>
      <Checkbox value="2">test 2</Checkbox>
    </RhfCheckboxGroup>
}`,...u.parameters?.docs?.source}}};const P=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedInnhold","MedCheckboxSomInput"];export{t as Default,c as HorisontalKnapper,u as MedCheckboxSomInput,i as MedInnhold,o as MedVerdi,d as ReadOnlyMedOverstyrtMarkering,P as __namedExportsOrder,K as default};
