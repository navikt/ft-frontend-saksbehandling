import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as B,a as J,r as K}from"./formUtils-BUrXP4-I.js";import{r as c}from"./index-Dxs5m6lS.js";import{u as Q,a as U}from"./ReadOnlyIcon-DuqD_nIQ.js";import{n as W}from"./index.es-Cx4R7XRv.js";import{R as X,a as h}from"./Radio-njMJCp86.js";import{H as Y}from"./VStack-Vgssv_xf.js";import"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./v4-CtRu48qb.js";import"./Button-D0flVHf8.js";import"./clsx-B-dksMZM.js";import"./Loader-BHKWc60O.js";import"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import"./Provider-B4A31v_2.js";import"./Label-g0SsZd4P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9cQ8Pho.js";import"./index.es-DIQk1_2L.js";import"./Alert-BC6DEIhx.js";import"./ExclamationmarkTriangleFill-DkXWnTRW.js";import"./XMarkOctagonFill-Ct54z8PV.js";import"./XMark-HQCrC0kG.js";import"./PersonPencilFill-DeEWAwj3.js";import"./Box-B-JCHjPf.js";import"./Theme-D6t0sq75.js";import"./create-context-B5rPGqtO.js";import"./BasePrimitive-CCRtmZcj.js";import"./KeyVerticalFill-DGPAogWB.js";import"./Checkmark-ARqG-vXH.js";import"./ChevronDown-TCQpyZRB.js";import"./Modal-B1D1msXx.js";import"./floating-ui.react-BIOaLlQ7.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./useDateTranslationContext-BEjj1I9s.js";import"./useFormField-CUgZtuoq.js";import"./Fieldset-Cu2HjZAs.js";const Z="_hideRadioLabels_1u3xf_1",$={hideRadioLabels:Z},w=({label:L,description:N,name:d,validate:v=[],radios:p,onChange:g,disabled:b=!1,isReadOnly:m=!1,isHorizontal:y=!1,parse:P=u=>u,isTrueOrFalseSelection:z=!1,hideLegend:C=!1,hideRadioLabels:G=!1,isEdited:I=!1})=>{const{formState:{errors:u}}=Q(),{field:r}=U({name:d,rules:{validate:c.useMemo(()=>B(v),[v])}}),s=z?e=>e==="true":P,A=a.jsxs(a.Fragment,{children:[L,m&&I&&a.jsx(W,{})]});return a.jsxs(X,{name:d,value:r.value!==void 0?r.value:null,onChange:e=>{g&&g(e),r.onChange(e)},size:"small",legend:A,description:N,error:J(u,d),className:G?$.hideRadioLabels:"",hideLegend:C,children:[!y&&p.map(e=>a.jsxs(c.Fragment,{children:[a.jsx(h,{value:s(e.value),disabled:e.disabled||b||m,children:e.label}),r.value===s(e.value)&&e.element]},e.value)),y&&a.jsxs(a.Fragment,{children:[a.jsx(Y,{gap:"4",children:p.map(e=>a.jsx(h,{value:s(e.value),disabled:e.disabled||b||m,children:e.label},e.value))}),p.filter(e=>r.value===s(e.value)).map(e=>a.jsx(c.Fragment,{children:e.element},e.value))]})]})};w.__docgenInfo={description:"",methods:[],displayName:"RadioGroupPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Pe={title:"form-hooks/RadioGroupPanel",component:w,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1},decorators:K({radiopre:"no"})},f=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],t={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:f}},o={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:f}},n={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:f}},l={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},i={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};var k,R,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios
  }
}`,...(x=(R=t.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var T,D,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios
  }
}`,...(q=(D=o.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var S,j,V;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    name: 'radio',
    label: 'Dette er en radioknapp med horisontale knapper',
    radios: defaultRadios
  }
}`,...(V=(j=n.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var O,M,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(M=l.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var F,H,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const ze=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{t as Default,n as HorisontalKnapper,l as MedBoolskVerdier,i as MedInnhold,o as ReadOnlyMedOverstyrtMarkering,ze as __namedExportsOrder,Pe as default};
