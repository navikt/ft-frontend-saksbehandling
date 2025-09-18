import{j as o,e as b}from"./iframe-DzXUO6GT.js";import{S as P,a as c,b as l,W as m,D as S,c as u,d,e as W}from"./Step.stories-D1_iwlNk.js";import{H as h}from"./VStack-vldtWtPo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-50MxYUEY.js";import"./Checkmark-BDWqRyCz.js";import"./useId-DZKQXQUP.js";import"./ExclamationmarkTriangleFill-DDAH-o0u.js";import"./XMarkOctagonFill-CoZ8IwgD.js";import"./Tooltip-B3LKtxru.js";import"./floating-ui.react-ChwVIx_A.js";import"./index-C9-rAhI6.js";import"./index-Byb5gg4O.js";import"./Provider-CLScYENo.js";import"./Label-BptAkRyu.js";import"./useControllableState-DmC_MG6f.js";import"./useId-BTmGetX7.js";import"./omit-B7stZg_p.js";import"./BasePrimitive-DGW3gu2x.js";const g=({steps:n,onClick:e,stepArrowContainerStyle:i})=>o.jsx(h,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"space-16",children:n.map((t,p)=>o.jsx(P,{index:p,onClick:e,...t,stepArrowContainerStyle:i},t.label))});g.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,V={component:g,args:{onClick:k("onClick")},render:({steps:n,onClick:e})=>{const[i,t]=b.useState(0),p=a=>{t(a),e&&e(a)},f=()=>n.map((a,D)=>({...a,isActive:i===D}));return o.jsx(g,{steps:f(),onClick:p})}},s={args:{steps:[c.args,l.args,m.args,S.args,u.args,d.args]}},r={args:{steps:[c.args,l.args,m.args,S.args,u.args,d.args,{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},W.args,{label:"Vedtak2"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [SuccessStep.args, SuccessStepWithPartialStatus.args, WarningStep.args, DangerStep.args, DefaultStep.args, DefaultStepWithPartialStatus.args]
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [SuccessStep.args, SuccessStepWithPartialStatus.args, WarningStep.args, DangerStep.args, DefaultStep.args, DefaultStepWithPartialStatus.args, {
      label: 'Beregning2'
    }, {
      label: 'Uttak2'
    }, {
      label: 'Tilkjent ytelse2'
    }, DangerStepWithPartialStatus.args, {
      label: 'Vedtak2'
    }]
  }
}`,...r.parameters?.docs?.source}}};const K=["Default","MangeSteg"];export{s as Default,r as MangeSteg,K as __namedExportsOrder,V as default};
