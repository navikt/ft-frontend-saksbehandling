import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as T}from"./index-Dxs5m6lS.js";import{a as f}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{a as P,S as e}from"./Step-CWsrnZrK.js";import{H as j}from"./VStack-Vgssv_xf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-DFtWylL1.js";import"./Checkmark-ARqG-vXH.js";import"./useId-B9cQ8Pho.js";import"./ExclamationmarkTriangleFill-DkXWnTRW.js";import"./XMarkOctagonFill-Ct54z8PV.js";import"./Tooltip-BPrKsRJc.js";import"./floating-ui.react-BIOaLlQ7.js";import"./create-context-B5rPGqtO.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./clsx-B-dksMZM.js";import"./Provider-B4A31v_2.js";import"./Theme-D6t0sq75.js";import"./Label-g0SsZd4P.js";import"./useId-BdcioVLy.js";import"./omit-B7stZg_p.js";import"./BasePrimitive-CCRtmZcj.js";const u=({steps:l,onClick:t,stepArrowContainerStyle:p})=>o.jsx(j,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:l.map((n,i)=>o.jsx(P,{index:i,onClick:t,...n,stepArrowContainerStyle:p},n.label))});u.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"plattform-komponenter/ProcessMenu",component:u,args:{onClick:f("onClick")},render:({steps:l,onClick:t})=>{const[p,n]=T.useState(0),i=a=>{n(a),t&&t(a)},S=()=>l.map((a,k)=>({...a,isActive:p===k}));return o.jsx(u,{steps:S(),onClick:i})}},r={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",type:e.warning},{label:"Tilkjent ytelse",type:e.danger},{label:"Simulering"},{label:"Vedtak"}]}},s={args:{steps:[{label:"Inngangsvilkår",type:e.success},{label:"Beregning",type:e.success},{label:"Uttak",usePartialStatus:!0,type:e.success},{label:"Tilkjent ytelse",usePartialStatus:!0,type:e.warning},{label:"Simulering",type:e.warning,usePartialStatus:!0},{label:"Vedtak",type:e.danger},{label:"Inngangsvilkår2",type:e.danger,usePartialStatus:!0},{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},{label:"Simulering2",type:e.danger},{label:"Vedtak2"}]}};var m,g,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var y,d,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const Q=["Default","MangeSteg"];export{r as Default,s as MangeSteg,Q as __namedExportsOrder,L as default};
