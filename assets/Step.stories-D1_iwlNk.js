import{j as t,r as h}from"./iframe-DzXUO6GT.js";import{c as f}from"./index-50MxYUEY.js";import{S as j}from"./Checkmark-BDWqRyCz.js";import{S as P}from"./ExclamationmarkTriangleFill-DDAH-o0u.js";import{S as w}from"./XMarkOctagonFill-CoZ8IwgD.js";import{T as W}from"./Tooltip-B3LKtxru.js";import{B as D}from"./Label-BptAkRyu.js";var a=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(a||{});const N="_success_1rrn0_7",C="_warning_1rrn0_14",q="_danger_1rrn0_21",I="_step_1rrn0_28",O="_step__button_1rrn0_36",B="_active_1rrn0_54",E="_icon_1rrn0_79",U="_partial_1rrn0_91",V="_step__text_1rrn0_138",r={default:"_default_1rrn0_1",success:N,warning:C,danger:q,step:I,step__button:O,active:B,icon:E,partial:U,"step__arrow-container":"_step__arrow-container_1rrn0_129",step__text:V},b=({type:e,usePartialStatus:i})=>{const c=e===a.warning,s=e===a.danger,n=e===a.success,o=f(`${r.icon}`);return i&&(s||n)?t.jsx("div",{className:o}):n?t.jsx(j,{className:o}):c?t.jsx(P,{className:o}):s?t.jsx(w,{className:o}):t.jsx(t.Fragment,{})};b.__docgenInfo={description:"",methods:[],displayName:"StepIcon",props:{type:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!0,tsType:{name:"boolean"},description:""}}};const y=({label:e,index:i,type:c=a.default,isActive:s=!1,usePartialStatus:n=!1,onClick:o,stepArrowContainerStyle:x})=>{const T=k=>{k.preventDefault(),o&&o(i)},v=f(`${r.step__button} ${r[c]}`,{[r.active]:s,[r.partial]:n});return t.jsxs("li",{className:r.step,"aria-current":s?"step":void 0,children:[t.jsx(W,{content:e,placement:"bottom",children:t.jsxs("button",{className:v,type:"button",onClick:T,children:[t.jsx(b,{type:c,usePartialStatus:n}),t.jsx(D,{as:"span",size:"small",className:r.step__text,children:e})]})}),s&&t.jsx("div",{className:f(x,`${r["step__arrow-container"]}`)})]},e)};y.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"StepType"},description:"",defaultValue:{value:"StepType.default",computed:!0}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:A}=__STORYBOOK_MODULE_ACTIONS__,$={component:y,args:{onClick:A("onClick"),index:0,isActive:!1,type:a.success,usePartialStatus:!1},render:e=>{const[i,c]=h.useState(!1);return t.jsx("div",{style:{width:"200px"},children:t.jsx(y,{...e,isActive:i,onClick:s=>{c(n=>!n),e.onClick?.(s)}})})},tags:["autodocs"]},p={args:{label:"Inngangsvilkår",type:a.success}},l={args:{label:"Beregning",type:a.success,usePartialStatus:!0}},u={args:{label:"Uttak",type:a.warning}},d={args:{label:"Uttak",type:a.warning,usePartialStatus:!0}},m={args:{label:"Tilkjent ytelse",type:a.danger}},g={args:{label:"Beregning",type:a.danger,usePartialStatus:!0}},S={args:{label:"Simulering",type:a.default}},_={args:{label:"Vedtak",type:a.default,usePartialStatus:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Inngangsvilkår',
    type: StepType.success
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.success,
    usePartialStatus: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uttak',
    type: StepType.warning
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uttak',
    type: StepType.warning,
    usePartialStatus: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.danger,
    usePartialStatus: true
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Simulering',
    type: StepType.default
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Vedtak',
    type: StepType.default,
    usePartialStatus: true
  }
}`,..._.parameters?.docs?.source}}};const F=["SuccessStep","SuccessStepWithPartialStatus","WarningStep","WarningStepWithPartialStatus","DangerStep","DangerStepWithPartialStatus","DefaultStep","DefaultStepWithPartialStatus"],G=Object.freeze(Object.defineProperty({__proto__:null,DangerStep:m,DangerStepWithPartialStatus:g,DefaultStep:S,DefaultStepWithPartialStatus:_,SuccessStep:p,SuccessStepWithPartialStatus:l,WarningStep:u,WarningStepWithPartialStatus:d,__namedExportsOrder:F,default:$},Symbol.toStringTag,{value:"Module"}));export{m as D,y as S,u as W,p as a,l as b,S as c,_ as d,g as e,G as f};
