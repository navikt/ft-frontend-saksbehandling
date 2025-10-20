import{j as g,H as b,f as P}from"./iframe-DvV4wlhN.js";import{S as W,a as c,b as l,W as S,D as u,c as d,d as m,e as h}from"./Step.stories-CwDg09ho.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkmark-HMf--L8O.js";const o=({steps:n,onClick:e,stepArrowContainerStyle:i})=>g.jsx(b,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"space-16",children:n.map((a,p)=>g.jsx(W,{index:p,onClick:e,...a,stepArrowContainerStyle:i},a.label))});o.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,O={component:o,args:{onClick:k("onClick")},render:({steps:n,onClick:e})=>{const[i,a]=P.useState(0),p=s=>{a(s),e&&e(s)},f=()=>n.map((s,D)=>({...s,isActive:i===D}));return g.jsx(o,{steps:f(),onClick:p})}},t={args:{steps:[c.args,l.args,S.args,u.args,d.args,m.args]}},r={args:{steps:[c.args,l.args,S.args,u.args,d.args,m.args,{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},h.args,{label:"Vedtak2"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [SuccessStep.args, SuccessStepWithPartialStatus.args, WarningStep.args, DangerStep.args, DefaultStep.args, DefaultStepWithPartialStatus.args]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","MangeSteg"];export{t as Default,r as MangeSteg,T as __namedExportsOrder,O as default};
