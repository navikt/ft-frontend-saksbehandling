import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as J}from"./index-DNHX5htx.js";import{a as K}from"./index-B-lxVbXh.js";import{c as f}from"./index-DFtWylL1.js";import{S as L}from"./Checkmark-99lchT6Y.js";import{S as Q}from"./ExclamationmarkTriangleFill-DrBUO71d.js";import{S as Y}from"./XMarkOctagonFill-Dr7RQDrl.js";import{T as Z}from"./Tooltip-BnLM-CWP.js";import{a as ee}from"./Label-CYbek38p.js";var s=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(s||{});const te="_success_gpbqw_7",se="_warning_gpbqw_14",ae="_danger_gpbqw_21",re="_step_gpbqw_28",ne="_step__button_gpbqw_36",oe="_step__button_gpbqw_36",ie="_active_gpbqw_54",ce="_icon_gpbqw_79",pe="_partial_gpbqw_91",le="_step__arrow-container_gpbqw_129",ue="_step__text_gpbqw_138",de="_step__text_gpbqw_138",o={default:"_default_gpbqw_1",success:te,warning:se,danger:ae,step:re,step__button:ne,stepButton:oe,active:ie,icon:ce,partial:pe,"step__arrow-container":"_step__arrow-container_gpbqw_129",stepArrowContainer:le,step__text:ue,stepText:de},M=({type:e,usePartialStatus:c})=>{const i=e===s.warning,r=e===s.danger,n=e===s.success,a=f(`${o.icon}`);return c&&(r||n)?t.jsx("div",{className:a}):n?t.jsx(L,{className:a}):i?t.jsx(Q,{className:a}):r?t.jsx(Y,{className:a}):t.jsx(t.Fragment,{})};M.__docgenInfo={description:"",methods:[],displayName:"StepIcon",props:{type:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!0,tsType:{name:"boolean"},description:""}}};const b=({label:e,index:c,type:i=s.default,isActive:r=!1,usePartialStatus:n=!1,onClick:a,stepArrowContainerStyle:R})=>{const X=H=>{H.preventDefault(),a&&a(c)},G=f(`${o.step__button} ${o[i]}`,{[o.active]:r,[o.partial]:n});return t.jsxs("li",{className:o.step,"aria-current":r?"step":void 0,children:[t.jsx(Z,{content:e,placement:"bottom",children:t.jsxs("button",{className:G,type:"button",onClick:X,children:[t.jsx(M,{type:i,usePartialStatus:n}),t.jsx(ee,{as:"span",size:"small",className:o.step__text,children:e})]})}),r&&t.jsx("div",{className:f(R,`${o["step__arrow-container"]}`)})]},e)};b.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"StepType"},description:"",defaultValue:{value:"StepType.default",computed:!0}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const me={component:b,args:{onClick:K("onClick"),index:0,isActive:!1,type:s.success,usePartialStatus:!1},render:e=>{const[c,i]=J.useState(!1);return t.jsx("div",{style:{width:"200px"},children:t.jsx(b,{...e,isActive:c,onClick:r=>{var n;i(a=>!a),(n=e.onClick)==null||n.call(e,r)}})})},tags:["autodocs"]},p={args:{label:"Inngangsvilkår",type:s.success}},l={args:{label:"Beregning",type:s.success,usePartialStatus:!0}},u={args:{label:"Uttak",type:s.warning}},d={args:{label:"Uttak",type:s.warning,usePartialStatus:!0}},m={args:{label:"Tilkjent ytelse",type:s.danger}},g={args:{label:"Beregning",type:s.danger,usePartialStatus:!0}},_={args:{label:"Simulering",type:s.default}},S={args:{label:"Vedtak",type:s.default,usePartialStatus:!0}};var y,w,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Inngangsvilkår',
    type: StepType.success
  }
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,q,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.success,
    usePartialStatus: true
  }
}`,...(v=(q=l.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var k,h,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Uttak',
    type: StepType.warning
  }
}`,...(j=(h=u.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var P,W,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Uttak',
    type: StepType.warning,
    usePartialStatus: true
  }
}`,...(C=(W=d.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,N,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger
  }
}`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var I,A,V;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.danger,
    usePartialStatus: true
  }
}`,...(V=(A=g.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var E,O,U;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Simulering',
    type: StepType.default
  }
}`,...(U=(O=_.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,F,z;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Vedtak',
    type: StepType.default,
    usePartialStatus: true
  }
}`,...(z=(F=S.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const ge=["SuccessStep","SuccessStepWithPartialStatus","WarningStep","WarningStepWithPartialStatus","DangerStep","DangerStepWithPartialStatus","DefaultStep","DefaultStepWithPartialStatus"],ve=Object.freeze(Object.defineProperty({__proto__:null,DangerStep:m,DangerStepWithPartialStatus:g,DefaultStep:_,DefaultStepWithPartialStatus:S,SuccessStep:p,SuccessStepWithPartialStatus:l,WarningStep:u,WarningStepWithPartialStatus:d,__namedExportsOrder:ge,default:me},Symbol.toStringTag,{value:"Module"}));export{m as D,b as S,u as W,p as a,l as b,_ as c,S as d,g as e,ve as f};
