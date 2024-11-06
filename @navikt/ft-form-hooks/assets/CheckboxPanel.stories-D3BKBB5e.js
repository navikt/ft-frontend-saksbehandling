import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{r as _}from"./index-DRjF_FHU.js";import{a as z,b as N,g as A,d as F,H as K,r as G}from"./decorators-CsUnBlMd.js";import{q as I}from"./index.es-6Aam7IZi.js";import{a as L,C as h}from"./Checkbox-Cr83NPE3.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";import"./Fieldset-RWdTFsQu.js";const R=({label:w,name:l,description:H,validate:p=[],checkboxes:u,onChange:m,disabled:b=!1,isReadOnly:i=!1,isHorizontal:f=!1,parse:v=d=>d,hideLegend:O=!1,isEdited:S=!1})=>{const{formState:{errors:d}}=z(),{field:c}=N({name:l,rules:{validate:_.useMemo(()=>A(p),[p])}}),P=a.jsxs(a.Fragment,{children:[w,i&&S&&a.jsx(I,{})]});return a.jsxs(L,{name:l,description:H,value:c.value!==void 0?c.value:[],onChange:e=>{m&&m(e),c.onChange(e)},size:"small",legend:P,error:F(d,l),hideLegend:O,children:[!f&&u.map(e=>a.jsx(h,{value:v(e.value),disabled:e.disabled||b||i,children:e.label},e.value)),f&&a.jsx(K,{gap:"4",children:u.map(e=>a.jsx(h,{value:v(e.value),disabled:e.disabled||b||i,children:e.label},e.value))})]})};R.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const $={component:R,tags:["autodocs"],decorators:G({checkboxpanelpre:["verdi1","verdi3"]})},o=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],r={args:{name:"checkboxpanel",label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:o}},s={args:{name:"checkboxpanelpre",label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:o}},n={args:{name:"checkboxpanelpre",label:"Dette er en readonly checkboxpanel med overstyrt markering",isReadOnly:!0,isEdited:!0,checkboxes:o}},t={args:{name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper",checkboxes:o,isHorizontal:!0}};var x,g,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'checkboxpanel',
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes
  }
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var y,C,q;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes
  }
}`,...(q=(C=s.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var D,V,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'checkboxpanelpre',
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes
  }
}`,...(T=(V=n.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var j,E,M;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper',
    checkboxes: defaultCheckboxes,
    isHorizontal: true
  }
}`,...(M=(E=t.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const ee=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper"];export{r as Default,t as HorisontalKnapper,s as MedVerdi,n as ReadOnlyMedOverstyrtMarkering,ee as __namedExportsOrder,$ as default};
