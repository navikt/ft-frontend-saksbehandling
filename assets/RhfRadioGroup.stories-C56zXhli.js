import{i as E,k as F,r as c,j as a,R as H,v as k,H as h,o as C}from"./iframe-DY6AKeF1.js";import{g as N,a as G,r as I}from"./formUtils-B4XsTk3l.js";import"./preload-helper-D9Z9MdNV.js";const R=({label:T,description:x,validate:v=[],radios:u,onChange:g,isReadOnly:p=!1,isHorizontal:y=!1,parse:D=r=>r,isTrueOrFalseSelection:j=!1,hideLegend:S=!1,isEdited:q=!1,size:m="small",...V})=>{const{name:r,control:O,disabled:b}=V,{formState:{errors:w}}=E(),{field:s}=F({name:r,control:O,rules:{validate:c.useMemo(()=>N(v),[v])}}),l=j?e=>e==="true":D,M=a.jsxs(h,{justify:"center",gap:"space-8",children:[T,p&&q&&a.jsx(C,{})]});return a.jsxs(H,{name:r,value:s.value!==void 0?s.value:null,onChange:e=>{g&&g(e),s.onChange(e)},size:m,legend:M,description:x,error:G(w,r),hideLegend:S,children:[!y&&u.map(e=>a.jsxs(c.Fragment,{children:[a.jsx(k,{size:m,value:l(e.value),disabled:e.disabled||b||p,children:e.label}),s.value===l(e.value)&&e.element]},e.value)),y&&a.jsxs(a.Fragment,{children:[a.jsx(h,{gap:"space-16",children:u.map(e=>a.jsx(k,{size:m,value:l(e.value),disabled:e.disabled||b||p,children:e.label},e.value))}),u.filter(e=>s.value===l(e.value)).map(e=>a.jsx(c.Fragment,{children:e.element},e.value))]})]})};R.__docgenInfo={description:"@deprecated Bruk heller RhfRadioGroupNew",methods:[],displayName:"RhfRadioGroup",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const z={component:R,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1,control:void 0},decorators:I({radiopre:"no"})},f=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],n={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:f}},t={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:f}},o={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:f}},d={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},i={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    name: 'radio',
    label: 'Dette er en radioknapp med horisontale knapper',
    radios: defaultRadios
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en radioknapp som er readonly',
    isTrueOrFalseSelection: true,
    radios: [{
      label: 'Ja',
      value: 'true'
    }, {
      label: 'Nei',
      value: 'false'
    }]
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    label: 'Dette er radioknapper med innhold',
    radios: [{
      label: '§14-7, 3. ledd',
      value: '14-7.3',
      element: <div>Søker omfattes av §14-7, 3. ledd.</div>
    }, {
      label: '§14-5, 2. ledd',
      value: '14-5.2',
      element: <div>Søker omfattes av §14-5, 2. ledd.</div>
    }]
  }
}`,...i.parameters?.docs?.source}}};const A=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{n as Default,o as HorisontalKnapper,d as MedBoolskVerdier,i as MedInnhold,t as ReadOnlyMedOverstyrtMarkering,A as __namedExportsOrder,z as default};
