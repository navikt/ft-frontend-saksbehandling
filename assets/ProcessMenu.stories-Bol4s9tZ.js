import{j as g,H as b,e as P}from"./iframe-_utZp_mc.js";import{S as W,a as l,b as c,W as S,D as u,c as d,d as m,e as h}from"./Step.stories-CA65ISdq.js";import"./index-BQxrMEsL.js";import"./Checkmark-d4RBGAq_.js";const o=({steps:n,onClick:e,stepArrowContainerStyle:i})=>g.jsx(b,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:n.map((a,p)=>g.jsx(W,{index:p,onClick:e,...a,stepArrowContainerStyle:i},a.label))});o.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,O={component:o,args:{onClick:k("onClick")},render:({steps:n,onClick:e})=>{const[i,a]=P.useState(0),p=t=>{a(t),e&&e(t)},f=()=>n.map((t,D)=>({...t,isActive:i===D}));return g.jsx(o,{steps:f(),onClick:p})}},s={args:{steps:[l.args,c.args,S.args,u.args,d.args,m.args]}},r={args:{steps:[l.args,c.args,S.args,u.args,d.args,m.args,{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},h.args,{label:"Vedtak2"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","MangeSteg"];export{s as Default,r as MangeSteg,T as __namedExportsOrder,O as default};
