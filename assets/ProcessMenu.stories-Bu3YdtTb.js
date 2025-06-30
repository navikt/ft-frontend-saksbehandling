import{j as g,H as x,e as _}from"./iframe-CGbGlz93.js";import{S as j,a as f,b as D,W as b,D as P,c as W,d as h,e as O}from"./Step.stories-DFsWtN2Q.js";import"./index-6uDO-oY0.js";import"./Checkmark-BKDd-g5X.js";const o=({steps:n,onClick:e,stepArrowContainerStyle:i})=>g.jsx(x,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:n.map((a,p)=>g.jsx(j,{index:p,onClick:e,...a,stepArrowContainerStyle:i},a.label))});o.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:T}=__STORYBOOK_MODULE_ACTIONS__,w={component:o,args:{onClick:T("onClick")},render:({steps:n,onClick:e})=>{const[i,a]=_.useState(0),p=t=>{a(t),e&&e(t)},k=()=>n.map((t,y)=>({...t,isActive:i===y}));return g.jsx(o,{steps:k(),onClick:p})}},s={args:{steps:[f.args,D.args,b.args,P.args,W.args,h.args]}},r={args:{steps:[f.args,D.args,b.args,P.args,W.args,h.args,{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},O.args,{label:"Vedtak2"}]}};var l,c,S;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    steps: [SuccessStep.args, SuccessStepWithPartialStatus.args, WarningStep.args, DangerStep.args, DefaultStep.args, DefaultStepWithPartialStatus.args]
  }
}`,...(S=(c=s.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const I=["Default","MangeSteg"];export{s as Default,r as MangeSteg,I as __namedExportsOrder,w as default};
