import{j as i}from"./jsx-runtime-z8MfsBtr.js";import{R as o,r as m}from"./index-BEn-qc9j.js";import{F as U,i as q,c as E,u as W,o as S,B as D,a as Y,b as Z,g as ee,d as ae,H as ne,r as re}from"./decorators-CHN2KFHS.js";import{X as le}from"./index.es--p95kl9I.js";import{F as de}from"./Fieldset-5rmN1KDl.js";import"./index-C9rmetsa.js";import"./v4-CtRu48qb.js";import"./index-xLWtfh6B.js";import"./index-D-OUEn-9.js";var te=function(e,a){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};const K=o.createContext(null),se=m.forwardRef((e,a)=>{var l,n,{children:r,className:u,name:s,defaultValue:t,value:c,onChange:_=()=>{},required:x,readOnly:j}=e,b=te(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const f=m.useContext(U),p=q();return o.createElement(de,Object.assign({},b,{readOnly:j,ref:a,className:E(u,"navds-radio-group",`navds-radio-group--${(n=(l=b.size)!==null&&l!==void 0?l:f==null?void 0:f.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),o.createElement(K.Provider,{value:{name:s??`radioGroupName-${p}`,defaultValue:t,value:c,onChange:_,required:x}},o.createElement("div",{className:"navds-radio-buttons"},r)))});var ie=function(e,a){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};const oe=e=>{const a=m.useContext(K),l=W(S(e,["description"]),"radio"),{inputProps:n,readOnly:r}=l,u=ie(l,["inputProps","readOnly"]);return a||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},u),{readOnly:r,inputProps:Object.assign(Object.assign({},n),{name:a==null?void 0:a.name,defaultChecked:(a==null?void 0:a.defaultValue)===void 0?void 0:(a==null?void 0:a.defaultValue)===e.value,checked:(a==null?void 0:a.value)===void 0?void 0:(a==null?void 0:a.value)===e.value,onChange:s=>{var t,c;r||((t=e.onChange)===null||t===void 0||t.call(e,s),(c=a==null?void 0:a.onChange)===null||c===void 0||c.call(a,e.value))},onClick:s=>{var t;if(r){s.preventDefault();return}(t=e==null?void 0:e.onClick)===null||t===void 0||t.call(e,s)},required:a==null?void 0:a.required,type:"radio"})})},N=m.forwardRef((e,a)=>{const{inputProps:l,size:n,hasError:r,readOnly:u}=oe(e),s=q(),t=q();return o.createElement("div",{className:E(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":r,"navds-radio--disabled":l.disabled,"navds-radio--readonly":u})},o.createElement("input",Object.assign({},S(e,["children","size","description","readOnly"]),S(l,["aria-invalid"]),{"aria-labelledby":E(s,!!e["aria-labelledby"]&&e["aria-labelledby"],{[t]:e.description}),className:"navds-radio__input",ref:a})),o.createElement("label",{htmlFor:l.id,className:"navds-radio__label"},o.createElement("span",{className:"navds-radio__content"},o.createElement(D,{as:"span",id:s,size:n,"aria-hidden":!0},e.children),e.description&&o.createElement(D,{as:"span",id:t,size:n,className:"navds-form-field__subdescription navds-radio__description","aria-hidden":!0},e.description))))}),ue="_hideRadioLabels_1u3xf_1",ce={hideRadioLabels:ue},X=({label:e,description:a,name:l,validate:n=[],radios:r,onChange:u,disabled:s=!1,isReadOnly:t=!1,isHorizontal:c=!1,parse:_=p=>p,isTrueOrFalseSelection:x=!1,hideLegend:j=!1,hideRadioLabels:b=!1,isEdited:f=!1})=>{const{formState:{errors:p}}=Y(),{field:v}=Z({name:l,rules:{validate:m.useMemo(()=>ee(n),[n])}}),y=x?d=>d==="true":_,Q=i.jsxs(i.Fragment,{children:[e,t&&f&&i.jsx(le,{})]});return i.jsxs(se,{name:l,value:v.value!==void 0?v.value:null,onChange:d=>{u&&u(d),v.onChange(d)},size:"small",legend:Q,description:a,error:ae(p,l),className:b?ce.hideRadioLabels:"",hideLegend:j,children:[!c&&r.map(d=>i.jsxs(m.Fragment,{children:[i.jsx(N,{value:y(d.value),disabled:d.disabled||s||t,children:d.label}),v.value===y(d.value)&&d.element]},d.value)),c&&i.jsxs(i.Fragment,{children:[i.jsx(ne,{gap:"4",children:r.map(d=>i.jsx(N,{value:y(d.value),disabled:d.disabled||s||t,children:d.label},d.value))}),r.filter(d=>v.value===y(d.value)).map(d=>i.jsx(m.Fragment,{children:d.element},d.value))]})]})};X.__docgenInfo={description:"",methods:[],displayName:"RadioGroupPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},radios:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},isTrueOrFalseSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideRadioLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Re={component:X,tags:["autodocs"],args:{isHorizontal:!1,isReadOnly:!1,isEdited:!1},decorators:re({radiopre:"no"})},C=[{label:"Oppfylt",value:"yes"},{label:"Ikke oppfylt",value:"no"},{label:"Delvis oppfylt",value:"partial"}],g={args:{name:"radio",description:"Dette er en beskrivelse",label:"Dette er en radiogruppe",radios:C}},h={args:{name:"radiopre",label:"Dette er en readonly radioknapp med overstyrt markering",isReadOnly:!0,isEdited:!0,radios:C}},O={args:{isHorizontal:!0,name:"radio",label:"Dette er en radioknapp med horisontale knapper",radios:C}},R={args:{name:"radiopre",label:"Dette er en radioknapp som er readonly",isTrueOrFalseSelection:!0,radios:[{label:"Ja",value:"true"},{label:"Nei",value:"false"}]}},k={args:{name:"radio",label:"Dette er radioknapper med innhold",radios:[{label:"§14-7, 3. ledd",value:"14-7.3",element:i.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:i.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}]}};var T,V,w;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(J=(A=k.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const ke=["Default","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedBoolskVerdier","MedInnhold"];export{g as Default,O as HorisontalKnapper,R as MedBoolskVerdier,k as MedInnhold,h as ReadOnlyMedOverstyrtMarkering,ke as __namedExportsOrder,Re as default};
