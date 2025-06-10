import{l as K,m as U,r as f,j as a,R as Q,U as k,H as R,o as W}from"./iframe-_IQ2ouGS.js";import{g as X,a as Y,r as Z}from"./formUtils-Huf3oYHu.js";const $="_hideRadioLabels_1u3xf_1",ee={hideRadioLabels:$},N=({label:C,description:I,name:i,validate:g=[],radios:u,onChange:y,disabled:b=!1,isReadOnly:p=!1,isHorizontal:h=!1,parse:P=c=>c,isTrueOrFalseSelection:G=!1,hideLegend:z=!1,hideRadioLabels:A=!1,isEdited:B=!1,size:m="small"})=>{const{formState:{errors:c}}=K(),{field:r}=U({name:i,rules:{validate:f.useMemo(()=>X(g),[g])}}),s=G?e=>e==="true":P,J=a.jsxs(R,{justify:"center",gap:"2",children:[C,p&&B&&a.jsx(W,{})]});return a.jsxs(Q,{name:i,value:r.value!==void 0?r.value:null,onChange:e=>{y&&y(e),r.onChange(e)},size:m,legend:J,description:I,error:Y(c,i),className:A?ee.hideRadioLabels:"",hideLegend:z,children:[!h&&u.map(e=>a.jsxs(f.Fragment,{children:[a.jsx(k,{size:m,value:s(e.value),disabled:e.disabled||b||p,children:e.label}),r.value===s(e.value)&&e.element]},e.value)),h&&a.jsxs(a.Fragment,{children:[a.jsx(R,{gap:"4",children:u.map(e=>a.jsx(k,{size:m,value:s(e.value),disabled:e.disabled||b||p,children:e.label},e.value))}),u.filter(e=>r.value===s(e.value)).map(e=>a.jsx(f.Fragment,{children:e.element},e.value))]})]})};N.__docgenInfo={description:"",methods:[],displayName:"RadioGroupPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const se={component:N,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1},decorators:Z({radiopre:"no"})},v=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],l={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:v}},n={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:v}},t={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:v}},o={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},d={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};var x,T,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios
  }
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var q,j,S;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios
  }
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var V,O,M;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    name: 'radio',
    label: 'Dette er en radioknapp med horisontale knapper',
    radios: defaultRadios
  }
}`,...(M=(O=t.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var E,w,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var H,_,L;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(_=d.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const le=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{l as Default,t as HorisontalKnapper,o as MedBoolskVerdier,d as MedInnhold,n as ReadOnlyMedOverstyrtMarkering,le as __namedExportsOrder,se as default};
