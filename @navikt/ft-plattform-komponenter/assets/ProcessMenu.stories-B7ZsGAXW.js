import{j as u}from"./jsx-runtime-DR9Q75dM.js";import{R as T}from"./index-DRjF_FHU.js";import{S as f,a as j,b as e}from"./chunk-D5ZWXAHU-DAxuGx76.js";import{H as P}from"./VStack-C_UD3Zlh.js";import"./index-lhGYx47h.js";import"./Tooltip-L0Jdx9jO.js";import"./useId-Buhlm-42.js";import"./index-rX-Bn4lm.js";import"./Label-m6Rf9sZI.js";import"./Slot-C3qIERTX.js";import"./useId-Du_GGNw8.js";import"./v4-CQkTLCs1.js";import"./omit-B7stZg_p.js";const o=({steps:l,onClick:n,stepArrowContainerStyle:p})=>u.jsx(P,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:l.map((t,i)=>u.jsx(f,{index:i,onClick:n,...t,stepArrowContainerStyle:p},t.label))});o.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const R={component:o,args:{onClick:j("onClick")},render:({steps:l,onClick:n})=>{const[p,t]=T.useState(0),i=a=>{t(a),n&&n(a)},S=()=>l.map((a,k)=>({...a,isActive:p===k}));return u.jsx(o,{steps:S(),onClick:i})}},s={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",type:e.warning},{label:"Tilkjent ytelse",type:e.danger},{label:"Simulering"},{label:"Vedtak"}]}},r={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",usePartialStatus:!0,type:e.success},{label:"Tilkjent ytelse",usePartialStatus:!0,type:e.warning},{label:"Simulering",type:e.warning,usePartialStatus:!0},{label:"Vedtak",type:e.danger},{label:"Inngangsvilkår2",type:e.danger,usePartialStatus:!0},{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},{label:"Simulering2",type:e.danger},{label:"Vedtak2"}]}};var g,c,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Inngangsvilkår',
      type: StepType.success
    }, {
      label: 'Beregning',
      type: StepType.success
    }, {
      label: 'Uttak',
      type: StepType.warning
    }, {
      label: 'Tilkjent ytelse',
      type: StepType.danger
    }, {
      label: 'Simulering'
    }, {
      label: 'Vedtak'
    }]
  }
}`,...(y=(c=s.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var m,d,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Inngangsvilkår',
      type: StepType.success
    }, {
      label: 'Beregning',
      type: StepType.success
    }, {
      label: 'Uttak',
      usePartialStatus: true,
      type: StepType.success
    }, {
      label: 'Tilkjent ytelse',
      usePartialStatus: true,
      type: StepType.warning
    }, {
      label: 'Simulering',
      type: StepType.warning,
      usePartialStatus: true
    }, {
      label: 'Vedtak',
      type: StepType.danger
    }, {
      label: 'Inngangsvilkår2',
      type: StepType.danger,
      usePartialStatus: true
    }, {
      label: 'Beregning2'
    }, {
      label: 'Uttak2'
    }, {
      label: 'Tilkjent ytelse2'
    }, {
      label: 'Simulering2',
      type: StepType.danger
    }, {
      label: 'Vedtak2'
    }]
  }
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const D=["Default","MangeSteg"];export{s as Default,r as MangeSteg,D as __namedExportsOrder,R as default};
