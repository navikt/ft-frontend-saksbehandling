import{w as f,j as t,U as h,aB as j,m as P,B as w,r as W}from"./iframe-B2NvIhob.js";import{S as D}from"./Checkmark-CyqxZQoY.js";var a=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(a||{});const N="_success_1rrn0_7",C="_warning_1rrn0_14",q="_danger_1rrn0_21",B="_step_1rrn0_28",I="_step__button_1rrn0_36",O="_active_1rrn0_54",U="_icon_1rrn0_79",E="_partial_1rrn0_91",V="_step__text_1rrn0_138",r={default:"_default_1rrn0_1",success:N,warning:C,danger:q,step:B,step__button:I,active:O,icon:U,partial:E,"step__arrow-container":"_step__arrow-container_1rrn0_129",step__text:V},b=({type:e,usePartialStatus:i})=>{const o=e===a.warning,s=e===a.danger,n=e===a.success,c=f(`${r.icon}`);return i&&(s||n)?t.jsx("div",{className:c}):n?t.jsx(D,{className:c}):o?t.jsx(h,{className:c}):s?t.jsx(j,{className:c}):t.jsx(t.Fragment,{})};b.__docgenInfo={description:"",methods:[],displayName:"StepIcon",props:{type:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!0,tsType:{name:"boolean"},description:""}}};const y=({label:e,index:i,type:o=a.default,isActive:s=!1,usePartialStatus:n=!1,onClick:c,stepArrowContainerStyle:x})=>{const v=k=>{k.preventDefault(),c&&c(i)},T=f(`${r.step__button} ${r[o]}`,{[r.active]:s,[r.partial]:n});return t.jsxs("li",{className:r.step,"aria-current":s?"step":void 0,children:[t.jsx(P,{content:e,placement:"bottom",children:t.jsxs("button",{className:T,type:"button",onClick:v,children:[t.jsx(b,{type:o,usePartialStatus:n}),t.jsx(w,{as:"span",size:"small",className:r.step__text,children:e})]})}),s&&t.jsx("div",{className:f(x,`${r["step__arrow-container"]}`)})]},e)};y.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"StepType"},description:"",defaultValue:{value:"StepType.default",computed:!0}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:A}=__STORYBOOK_MODULE_ACTIONS__,$={component:y,args:{onClick:A("onClick"),index:0,isActive:!1,type:a.success,usePartialStatus:!1},render:e=>{const[i,o]=W.useState(!1);return t.jsx("div",{style:{width:"200px"},children:t.jsx(y,{...e,isActive:i,onClick:s=>{o(n=>!n),e.onClick?.(s)}})})},tags:["autodocs"]},l={args:{label:"Inngangsvilkår",type:a.success}},p={args:{label:"Beregning",type:a.success,usePartialStatus:!0}},u={args:{label:"Uttak",type:a.warning}},d={args:{label:"Uttak",type:a.warning,usePartialStatus:!0}},g={args:{label:"Tilkjent ytelse",type:a.danger}},m={args:{label:"Beregning",type:a.danger,usePartialStatus:!0}},S={args:{label:"Simulering",type:a.default}},_={args:{label:"Vedtak",type:a.default,usePartialStatus:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Inngangsvilkår',
    type: StepType.success
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.success,
    usePartialStatus: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.danger,
    usePartialStatus: true
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const F=["SuccessStep","SuccessStepWithPartialStatus","WarningStep","WarningStepWithPartialStatus","DangerStep","DangerStepWithPartialStatus","DefaultStep","DefaultStepWithPartialStatus"],R=Object.freeze(Object.defineProperty({__proto__:null,DangerStep:g,DangerStepWithPartialStatus:m,DefaultStep:S,DefaultStepWithPartialStatus:_,SuccessStep:l,SuccessStepWithPartialStatus:p,WarningStep:u,WarningStepWithPartialStatus:d,__namedExportsOrder:F,default:$},Symbol.toStringTag,{value:"Module"}));export{g as D,y as S,u as W,l as a,p as b,S as c,_ as d,m as e,R as f};
