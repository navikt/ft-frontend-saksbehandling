import{m as F,n as H,r as c,j as a,X as _,Y as h,H as k,p as C}from"./iframe-BTwUvvB3.js";import{g as L,a as N,r as I}from"./formUtils-C6BsPrs1.js";const P="_hideRadioLabels_1u3xf_1",G={hideRadioLabels:P},R=({label:T,description:x,validate:v=[],radios:u,onChange:g,isReadOnly:p=!1,isHorizontal:y=!1,parse:D=r=>r,isTrueOrFalseSelection:j=!1,hideLegend:q=!1,hideRadioLabels:S=!1,isEdited:V=!1,size:m="small",...O})=>{const{name:r,control:M,disabled:b}=O,{formState:{errors:w}}=F(),{field:s}=H({name:r,control:M,rules:{validate:c.useMemo(()=>L(v),[v])}}),l=j?e=>e==="true":D,E=a.jsxs(k,{justify:"center",gap:"2",children:[T,p&&V&&a.jsx(C,{})]});return a.jsxs(_,{name:r,value:s.value!==void 0?s.value:null,onChange:e=>{g&&g(e),s.onChange(e)},size:m,legend:E,description:x,error:N(w,r),className:S?G.hideRadioLabels:"",hideLegend:q,children:[!y&&u.map(e=>a.jsxs(c.Fragment,{children:[a.jsx(h,{size:m,value:l(e.value),disabled:e.disabled||b||p,children:e.label}),s.value===l(e.value)&&e.element]},e.value)),y&&a.jsxs(a.Fragment,{children:[a.jsx(k,{gap:"4",children:u.map(e=>a.jsx(h,{size:m,value:l(e.value),disabled:e.disabled||b||p,children:e.label},e.value))}),u.filter(e=>s.value===l(e.value)).map(e=>a.jsx(c.Fragment,{children:e.element},e.value))]})]})};R.__docgenInfo={description:"",methods:[],displayName:"RhfRadioGroup",props:{description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const B={component:R,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1,control:void 0},decorators:I({radiopre:"no"})},f=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],n={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:f}},t={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:f}},o={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:f}},d={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},i={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const J=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{n as Default,o as HorisontalKnapper,d as MedBoolskVerdier,i as MedInnhold,t as ReadOnlyMedOverstyrtMarkering,J as __namedExportsOrder,B as default};
