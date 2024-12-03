import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{R as i,r as m}from"./index-DRjF_FHU.js";import{F as W,i as q,c as E,u as X,o as S,B as D,a as Y,b as Z,g as ee,d as ae,H as re,r as ne}from"./decorators-DM-2uixQ.js";import{q as le}from"./index.es-yoQ-kWU6.js";import{F as te}from"./Fieldset-BZPozL0p.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";var se=function(e,a){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]]);return l};const K=i.createContext(null),de=m.forwardRef((e,a)=>{var l,r,{children:n,className:u,name:d,defaultValue:s,value:c,onChange:_=()=>{},required:x,readOnly:j}=e,b=se(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const p=m.useContext(W),v=q();return i.createElement(te,Object.assign({},b,{readOnly:j,ref:a,className:E(u,"navds-radio-group",`navds-radio-group--${(r=(l=b.size)!==null&&l!==void 0?l:p==null?void 0:p.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),i.createElement(K.Provider,{value:{name:d??`radioGroupName-${v}`,defaultValue:s,value:c,onChange:_,required:x}},i.createElement("div",{className:"navds-radio-buttons"},n)))});var oe=function(e,a){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]]);return l};const ie=e=>{const a=m.useContext(K),l=X(S(e,["description"]),"radio"),{inputProps:r,readOnly:n}=l,u=oe(l,["inputProps","readOnly"]);return a||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},u),{readOnly:n,inputProps:Object.assign(Object.assign({},r),{name:a==null?void 0:a.name,defaultChecked:(a==null?void 0:a.defaultValue)===void 0?void 0:(a==null?void 0:a.defaultValue)===e.value,checked:(a==null?void 0:a.value)===void 0?void 0:(a==null?void 0:a.value)===e.value,onChange:d=>{var s,c;n||((s=e.onChange)===null||s===void 0||s.call(e,d),(c=a==null?void 0:a.onChange)===null||c===void 0||c.call(a,e.value))},onClick:d=>{var s;if(n){d.preventDefault();return}(s=e==null?void 0:e.onClick)===null||s===void 0||s.call(e,d)},required:a==null?void 0:a.required,type:"radio"})})},N=m.forwardRef((e,a)=>{const{inputProps:l,size:r,hasError:n,readOnly:u}=ie(e),d=q(),s=q();return i.createElement("div",{className:E(e.className,"navds-radio",`navds-radio--${r}`,{"navds-radio--error":n,"navds-radio--disabled":l.disabled,"navds-radio--readonly":u})},i.createElement("input",Object.assign({},S(e,["children","size","description","readOnly"]),S(l,["aria-invalid"]),{"aria-labelledby":E(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[s]:e.description}),className:"navds-radio__input",ref:a})),i.createElement("label",{htmlFor:l.id,className:"navds-radio__label"},i.createElement("span",{className:"navds-radio__content"},i.createElement(D,{as:"span",id:d,size:r,"aria-hidden":!0},e.children),e.description&&i.createElement(D,{as:"span",id:s,size:r,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))}),ue="_hideRadioLabels_1u3xf_1",ce={hideRadioLabels:ue},Q=({label:e,description:a,name:l,validate:r=[],radios:n,onChange:u,disabled:d=!1,isReadOnly:s=!1,isHorizontal:c=!1,parse:_=v=>v,isTrueOrFalseSelection:x=!1,hideLegend:j=!1,hideRadioLabels:b=!1,isEdited:p=!1})=>{const{formState:{errors:v}}=Y(),{field:f}=Z({name:l,rules:{validate:m.useMemo(()=>ee(r),[r])}}),y=x?t=>t==="true":_,U=o.jsxs(o.Fragment,{children:[e,s&&p&&o.jsx(le,{})]});return o.jsxs(de,{name:l,value:f.value!==void 0?f.value:null,onChange:t=>{u&&u(t),f.onChange(t)},size:"small",legend:U,description:a,error:ae(v,l),className:b?ce.hideRadioLabels:"",hideLegend:j,children:[!c&&n.map(t=>o.jsxs(m.Fragment,{children:[o.jsx(N,{value:y(t.value),disabled:t.disabled||d||s,children:t.label}),f.value===y(t.value)&&t.element]},t.value)),c&&o.jsxs(o.Fragment,{children:[o.jsx(re,{gap:"4",children:n.map(t=>o.jsx(N,{value:y(t.value),disabled:t.disabled||d||s,children:t.label},t.value))}),n.filter(t=>f.value===y(t.value)).map(t=>o.jsx(m.Fragment,{children:t.element},t.value))]})]})};Q.__docgenInfo={description:"",methods:[],displayName:"RadioGroupPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const he={component:Q,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1},decorators:ne({radiopre:"no"})},C=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],g={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:C}},h={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:C}},O={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:C}},R={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},k={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:o.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:o.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};var T,V,w;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'radio',
    description: 'Dette er en beskrivelse',
    label: 'Dette er en radiogruppe',
    radios: defaultRadios
  }
}`,...(w=(V=g.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var F,P,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'radiopre',
    label: 'Dette er en readonly radioknapp med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    radios: defaultRadios
  }
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var I,M,G;O.parameters={...O.parameters,docs:{...(I=O.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    name: 'radio',
    label: 'Dette er en radioknapp med horisontale knapper',
    radios: defaultRadios
  }
}`,...(G=(M=O.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,L,B;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(L=R.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var $,A,J;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(A=k.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const Oe=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{g as Default,O as HorisontalKnapper,R as MedBoolskVerdier,k as MedInnhold,h as ReadOnlyMedOverstyrtMarkering,Oe as __namedExportsOrder,he as default};
