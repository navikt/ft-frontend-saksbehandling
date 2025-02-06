import{j as o}from"./jsx-runtime-CLpGMVip.js";import{R as T}from"./index-B5OHeJSP.js";import{a as f}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{S as P,a as e}from"./Step-y7E9SpzV.js";import{H as j}from"./VStack-BtUbcfLF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-DFtWylL1.js";import"./Checkmark-uHeVskEM.js";import"./useId-B9OmVTHV.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./Tooltip-Ds_gQ3P2.js";import"./floating-ui.react-FIE1On8Y.js";import"./create-context-BlrHNsQj.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./clsx-B-dksMZM.js";import"./Provider-B_QIWjIe.js";import"./Theme-6IdwQf2V.js";import"./Label-ZYbyet41.js";import"./useId-e75EoDiw.js";import"./omit-B7stZg_p.js";const u=({steps:l,onClick:t,stepArrowContainerStyle:p})=>o.jsx(j,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:l.map((n,i)=>o.jsx(P,{index:i,onClick:t,...n,stepArrowContainerStyle:p},n.label))});u.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"plattform-komponenter/ProcessMenu",component:u,args:{onClick:f("onClick")},render:({steps:l,onClick:t})=>{const[p,n]=T.useState(0),i=a=>{n(a),t&&t(a)},S=()=>l.map((a,k)=>({...a,isActive:p===k}));return o.jsx(u,{steps:S(),onClick:i})}},r={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",type:e.warning},{label:"Tilkjent ytelse",type:e.danger},{label:"Simulering"},{label:"Vedtak"}]}},s={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",usePartialStatus:!0,type:e.success},{label:"Tilkjent ytelse",usePartialStatus:!0,type:e.warning},{label:"Simulering",type:e.warning,usePartialStatus:!0},{label:"Vedtak",type:e.danger},{label:"Inngangsvilkår2",type:e.danger,usePartialStatus:!0},{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},{label:"Simulering2",type:e.danger},{label:"Vedtak2"}]}};var g,m,c;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var y,d,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const L=["Default","MangeSteg"];export{r as Default,s as MangeSteg,L as __namedExportsOrder,K as default};
