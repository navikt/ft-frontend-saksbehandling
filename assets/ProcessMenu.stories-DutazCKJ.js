import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{e as x}from"./index-DASCADcX.js";import{a as j}from"./index-B-lxVbXh.js";import{S as v,a as f,b,W as D,D as P,c as W,d as h,e as C}from"./Step.stories-DyVaoBOU.js";import{H as T}from"./VStack-CjRg3Zfs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-DFtWylL1.js";import"./Checkmark-abnGd_Ay.js";import"./useId-sDoo_C8F.js";import"./ExclamationmarkTriangleFill-BFbmXhrr.js";import"./XMarkOctagonFill-Cj0h8cZo.js";import"./Tooltip-DbSqJk8O.js";import"./floating-ui.react-C49gkrzP.js";import"./create-context-Bo0OP0Ib.js";import"./index-CL4jvrHg.js";import"./index-BxWMR1Ay.js";import"./clsx-B-dksMZM.js";import"./Provider-DeC0qy30.js";import"./Theme-s5aaJqOF.js";import"./Label-C-_BY61p.js";import"./useId-BiFzyKmP.js";import"./omit-B7stZg_p.js";import"./BasePrimitive-CQFd8qnq.js";const g=({steps:n,onClick:e,stepArrowContainerStyle:i})=>o.jsx(T,{as:"ol",justify:"space-between",padding:"0",align:"end",gap:"4",children:n.map((t,p)=>o.jsx(v,{index:p,onClick:e,...t,stepArrowContainerStyle:i},t.label))});g.__docgenInfo={description:"",methods:[],displayName:"ProcessMenu",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepProps"}],raw:"StepProps[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const $={component:g,args:{onClick:j("onClick")},render:({steps:n,onClick:e})=>{const[i,t]=x.useState(0),p=a=>{t(a),e&&e(a)},k=()=>n.map((a,y)=>({...a,isActive:i===y}));return o.jsx(g,{steps:k(),onClick:p})}},r={args:{steps:[f.args,b.args,D.args,P.args,W.args,h.args]}},s={args:{steps:[f.args,b.args,D.args,P.args,W.args,h.args,{label:"Beregning2"},{label:"Uttak2"},{label:"Tilkjent ytelse2"},C.args,{label:"Vedtak2"}]}};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: [SuccessStep.args, SuccessStepWithPartialStatus.args, WarningStep.args, DangerStep.args, DefaultStep.args, DefaultStepWithPartialStatus.args]
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,S,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(S=s.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};const ee=["Default","MangeSteg"];export{r as Default,s as MangeSteg,ee as __namedExportsOrder,$ as default};
