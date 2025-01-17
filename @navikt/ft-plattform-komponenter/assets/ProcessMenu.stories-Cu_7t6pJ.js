import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{R as T}from"./index-C7aUCl1g.js";import{S as f,a as j,b as e}from"./chunk-D5ZWXAHU-DdOF5dbI.js";import{H as P}from"./VStack-ClbebznP.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1UYGcO_B.js";import"./Tooltip-0Dw_znCv.js";import"./useId-Bb26kjbG.js";import"./index-CrThRG5l.js";import"./index-D-OUEn-9.js";import"./Label-1o6TJYyt.js";import"./Theme-BzPY33qb.js";import"./Provider-CdKr9SXF.js";import"./useId-1HI_XACr.js";import"./v4-CtRu48qb.js";import"./omit-B7stZg_p.js";const u=({steps:l,onClick:t,stepArrowContainerStyle:p})=>o.jsx(P,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:l.map((n,i)=>o.jsx(f,{index:i,onClick:t,...n,stepArrowContainerStyle:p},n.label))});u.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const O={component:u,args:{onClick:j("onClick")},render:({steps:l,onClick:t})=>{const[p,n]=T.useState(0),i=a=>{n(a),t&&t(a)},S=()=>l.map((a,k)=>({...a,isActive:p===k}));return o.jsx(u,{steps:S(),onClick:i})}},s={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",type:e.warning},{label:"Tilkjent ytelse",type:e.danger},{label:"Simulering"},{label:"Vedtak"}]}},r={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",usePartialStatus:!0,type:e.success},{label:"Tilkjent ytelse",usePartialStatus:!0,type:e.warning},{label:"Simulering",type:e.warning,usePartialStatus:!0},{label:"Vedtak",type:e.danger},{label:"Inngangsvilkår2",type:e.danger,usePartialStatus:!0},{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},{label:"Simulering2",type:e.danger},{label:"Vedtak2"}]}};var g,c,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,d,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const N=["Default","MangeSteg"];export{s as Default,r as MangeSteg,N as __namedExportsOrder,O as default};
