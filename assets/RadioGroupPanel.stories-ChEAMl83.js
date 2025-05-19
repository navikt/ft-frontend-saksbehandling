import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as K,a as Q,r as U}from"./formUtils-D-F-RWtg.js";import{r as f}from"./index-DNHX5htx.js";import{u as W,a as X}from"./index.esm-CkkEN1rj.js";import{i as Y}from"./index.es-BiGVFuAv.js";import{R as Z,a as k}from"./Radio-Pmn7OwXu.js";import{H as R}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Button-Cc809GDC.js";import"./Loader-42dkOmtz.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./Provider-BZs7ODlm.js";import"./Label-CYbek38p.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-Bs6SSTCM.js";import"./dayjs.min-Cke173X9.js";import"./Alert-Ja4tf6sE.js";import"./useId-SP_zdaIa.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./XMark-6H9iuGiv.js";import"./PersonPencilFill-DqunLdn1.js";import"./Box-C3b4VC_S.js";import"./BasePrimitive-gBgyIEwX.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Modal-DdoS0OAm.js";import"./floating-ui.react-D9M9yXN8.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./Date.Input-D651xWgA.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";const $="_hideRadioLabels_1u3xf_1",ee={hideRadioLabels:$},N=({label:C,description:I,name:d,validate:g=[],radios:p,onChange:y,disabled:b=!1,isReadOnly:m=!1,isHorizontal:h=!1,parse:P=c=>c,isTrueOrFalseSelection:G=!1,hideLegend:z=!1,hideRadioLabels:A=!1,isEdited:B=!1,size:u="small"})=>{const{formState:{errors:c}}=W(),{field:r}=X({name:d,rules:{validate:f.useMemo(()=>K(g),[g])}}),s=G?e=>e==="true":P,J=a.jsxs(R,{justify:"center",gap:"2",children:[C,m&&B&&a.jsx(Y,{})]});return a.jsxs(Z,{name:d,value:r.value!==void 0?r.value:null,onChange:e=>{y&&y(e),r.onChange(e)},size:u,legend:J,description:I,error:Q(c,d),className:A?ee.hideRadioLabels:"",hideLegend:z,children:[!h&&p.map(e=>a.jsxs(f.Fragment,{children:[a.jsx(k,{size:u,value:s(e.value),disabled:e.disabled||b||m,children:e.label}),r.value===s(e.value)&&e.element]},e.value)),h&&a.jsxs(a.Fragment,{children:[a.jsx(R,{gap:"4",children:p.map(e=>a.jsx(k,{size:u,value:s(e.value),disabled:e.disabled||b||m,children:e.label},e.value))}),p.filter(e=>r.value===s(e.value)).map(e=>a.jsx(f.Fragment,{children:e.element},e.value))]})]})};N.__docgenInfo={description:"",methods:[],displayName:"RadioGroupPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const Ne={component:N,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1},decorators:U({radiopre:"no"})},v=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],l={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:v}},t={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:v}},n={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:v}},o={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},i={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};var x,T,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios
  }
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var q,j,S;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios
  }
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var V,O,M;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    name: 'radio',
    label: 'Dette er en radioknapp med horisontale knapper',
    radios: defaultRadios
  }
}`,...(M=(O=n.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var E,w,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var H,_,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const Ce=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{l as Default,n as HorisontalKnapper,o as MedBoolskVerdier,i as MedInnhold,t as ReadOnlyMedOverstyrtMarkering,Ce as __namedExportsOrder,Ne as default};
