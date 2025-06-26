import{j as t,A as Y,am as G,T as H,B as J,r as Q}from"./iframe-C7Bd7qJ1.js";import{c as b}from"./index-B_e-_gnj.js";import{S as Z}from"./Checkmark-4I10GAdU.js";var s=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(s||{});const ee="_success_gpbqw_7",te="_warning_gpbqw_14",se="_danger_gpbqw_21",ae="_step_gpbqw_28",re="_step__button_gpbqw_36",ne="_step__button_gpbqw_36",oe="_active_gpbqw_54",ce="_icon_gpbqw_79",ie="_partial_gpbqw_91",pe="_step__arrow-container_gpbqw_129",le="_step__text_gpbqw_138",ue="_step__text_gpbqw_138",o={default:"_default_gpbqw_1",success:ee,warning:te,danger:se,step:ae,step__button:re,stepButton:ne,active:oe,icon:ce,partial:ie,"step__arrow-container":"_step__arrow-container_gpbqw_129",stepArrowContainer:pe,step__text:le,stepText:ue},z=({type:e,usePartialStatus:i})=>{const c=e===s.warning,r=e===s.danger,n=e===s.success,a=b(`${o.icon}`);return i&&(r||n)?t.jsx("div",{className:a}):n?t.jsx(Z,{className:a}):c?t.jsx(Y,{className:a}):r?t.jsx(G,{className:a}):t.jsx(t.Fragment,{})};z.__docgenInfo={description:"",methods:[],displayName:"StepIcon",props:{type:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!0,tsType:{name:"boolean"},description:""}}};const f=({label:e,index:i,type:c=s.default,isActive:r=!1,usePartialStatus:n=!1,onClick:a,stepArrowContainerStyle:R})=>{const K=X=>{X.preventDefault(),a&&a(i)},L=b(`${o.step__button} ${o[c]}`,{[o.active]:r,[o.partial]:n});return t.jsxs("li",{className:o.step,"aria-current":r?"step":void 0,children:[t.jsx(H,{content:e,placement:"bottom",children:t.jsxs("button",{className:L,type:"button",onClick:K,children:[t.jsx(z,{type:c,usePartialStatus:n}),t.jsx(J,{as:"span",size:"small",className:o.step__text,children:e})]})}),r&&t.jsx("div",{className:b(R,`${o["step__arrow-container"]}`)})]},e)};f.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"StepType"},description:"",defaultValue:{value:"StepType.default",computed:!0}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:de}=__STORYBOOK_MODULE_ACTIONS__,ge={component:f,args:{onClick:de("onClick"),index:0,isActive:!1,type:s.success,usePartialStatus:!1},render:e=>{const[i,c]=Q.useState(!1);return t.jsx("div",{style:{width:"200px"},children:t.jsx(f,{...e,isActive:i,onClick:r=>{var n;c(a=>!a),(n=e.onClick)==null||n.call(e,r)}})})},tags:["autodocs"]},p={args:{label:"Inngangsvilkår",type:s.success}},l={args:{label:"Beregning",type:s.success,usePartialStatus:!0}},u={args:{label:"Uttak",type:s.warning}},d={args:{label:"Uttak",type:s.warning,usePartialStatus:!0}},g={args:{label:"Tilkjent ytelse",type:s.danger}},_={args:{label:"Beregning",type:s.danger,usePartialStatus:!0}},m={args:{label:"Simulering",type:s.default}},S={args:{label:"Vedtak",type:s.default,usePartialStatus:!0}};var y,w,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(W=d.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,N,B;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger
  }
}`,...(B=(N=g.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var I,O,A;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.danger,
    usePartialStatus: true
  }
}`,...(A=(O=_.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var E,U,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Simulering',
    type: StepType.default
  }
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var $,F,M;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Vedtak',
    type: StepType.default,
    usePartialStatus: true
  }
}`,...(M=(F=S.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const _e=["SuccessStep","SuccessStepWithPartialStatus","WarningStep","WarningStepWithPartialStatus","DangerStep","DangerStepWithPartialStatus","DefaultStep","DefaultStepWithPartialStatus"],fe=Object.freeze(Object.defineProperty({__proto__:null,DangerStep:g,DangerStepWithPartialStatus:_,DefaultStep:m,DefaultStepWithPartialStatus:S,SuccessStep:p,SuccessStepWithPartialStatus:l,WarningStep:u,WarningStepWithPartialStatus:d,__namedExportsOrder:_e,default:ge},Symbol.toStringTag,{value:"Module"}));export{g as D,f as S,u as W,p as a,l as b,m as c,S as d,_ as e,fe as f};
