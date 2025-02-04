import{j as a}from"./jsx-runtime-CLpGMVip.js";import{g as B,a as J,r as K}from"./formUtils-CxXcBrDP.js";import{r as c}from"./index-B5OHeJSP.js";import{u as Q,a as U}from"./ReadOnlyIcon-3mCRcvzc.js";import{q as W}from"./index.es-B_RouKJz.js";import{R as X,a as h}from"./Radio-BIYAymoT.js";import{H as Y}from"./VStack-BtUbcfLF.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./Button-C4dKKha_.js";import"./clsx-B-dksMZM.js";import"./Loader-CoAqN6Lw.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./Provider-B_QIWjIe.js";import"./Label-ZYbyet41.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9OmVTHV.js";import"./index.es-Dh3mAfPy.js";import"./index-D9DDUrbY.js";import"./message-BcVJpMje.js";import"./Modal-C6iE4cX-.js";import"./floating-ui.react-FIE1On8Y.js";import"./create-context-BlrHNsQj.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./useDateTranslationContext-DuYWebvA.js";import"./XMark-BWJopseo.js";import"./Alert-Pz1mMbfe.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Panel-BzsK_xG0.js";import"./Checkmark-uHeVskEM.js";import"./ChevronDown-Bw2TG6jd.js";import"./useFormField-BKpVC0Pg.js";import"./Fieldset-Cs108nF-.js";import"./Theme-6IdwQf2V.js";const Z="_hideRadioLabels_1u3xf_1",$={hideRadioLabels:Z},w=({label:L,description:N,name:d,validate:v=[],radios:p,onChange:g,disabled:b=!1,isReadOnly:m=!1,isHorizontal:y=!1,parse:P=u=>u,isTrueOrFalseSelection:z=!1,hideLegend:C=!1,hideRadioLabels:G=!1,isEdited:I=!1})=>{const{formState:{errors:u}}=Q(),{field:r}=U({name:d,rules:{validate:c.useMemo(()=>B(v),[v])}}),s=z?e=>e==="true":P,A=a.jsxs(a.Fragment,{children:[L,m&&I&&a.jsx(W,{})]});return a.jsxs(X,{name:d,value:r.value!==void 0?r.value:null,onChange:e=>{g&&g(e),r.onChange(e)},size:"small",legend:A,description:N,error:J(u,d),className:G?$.hideRadioLabels:"",hideLegend:C,children:[!y&&p.map(e=>a.jsxs(c.Fragment,{children:[a.jsx(h,{value:s(e.value),disabled:e.disabled||b||m,children:e.label}),r.value===s(e.value)&&e.element]},e.value)),y&&a.jsxs(a.Fragment,{children:[a.jsx(Y,{gap:"4",children:p.map(e=>a.jsx(h,{value:s(e.value),disabled:e.disabled||b||m,children:e.label},e.value))}),p.filter(e=>r.value===s(e.value)).map(e=>a.jsx(c.Fragment,{children:e.element},e.value))]})]})};w.__docgenInfo={description:"",methods:[],displayName:"RadioGroupPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ze={title:"form-hooks/RadioGroupPanel",component:w,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1},decorators:K({radiopre:"no"})},f=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],t={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:f}},o={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:f}},n={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:f}},l={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},i={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};var k,R,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios
  }
}`,...(x=(R=t.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var T,q,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios
  }
}`,...(D=(q=o.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var S,j,V;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const Ce=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{t as Default,n as HorisontalKnapper,l as MedBoolskVerdier,i as MedInnhold,o as ReadOnlyMedOverstyrtMarkering,Ce as __namedExportsOrder,ze as default};
