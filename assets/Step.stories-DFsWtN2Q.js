import{j as t,A as Y,am as G,T as H,B as J,r as Q}from"./iframe-CGbGlz93.js";import{c as f}from"./index-6uDO-oY0.js";import{S as Z}from"./Checkmark-BKDd-g5X.js";var a=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(a||{});const ee="_success_gpbqw_7",te="_warning_gpbqw_14",ae="_danger_gpbqw_21",se="_step_gpbqw_28",re="_step__button_gpbqw_36",ne="_active_gpbqw_54",ce="_icon_gpbqw_79",oe="_partial_gpbqw_91",ie="_step__text_gpbqw_138",c={default:"_default_gpbqw_1",success:ee,warning:te,danger:ae,step:se,step__button:re,active:ne,icon:ce,partial:oe,"step__arrow-container":"_step__arrow-container_gpbqw_129",step__text:ie},z=({type:e,usePartialStatus:i})=>{const o=e===a.warning,r=e===a.danger,n=e===a.success,s=f(`${c.icon}`);return i&&(r||n)?t.jsx("div",{className:s}):n?t.jsx(Z,{className:s}):o?t.jsx(Y,{className:s}):r?t.jsx(G,{className:s}):t.jsx(t.Fragment,{})};z.__docgenInfo={description:"",methods:[],displayName:"StepIcon",props:{type:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!0,tsType:{name:"boolean"},description:""}}};const y=({label:e,index:i,type:o=a.default,isActive:r=!1,usePartialStatus:n=!1,onClick:s,stepArrowContainerStyle:R})=>{const K=X=>{X.preventDefault(),s&&s(i)},L=f(`${c.step__button} ${c[o]}`,{[c.active]:r,[c.partial]:n});return t.jsxs("li",{className:c.step,"aria-current":r?"step":void 0,children:[t.jsx(H,{content:e,placement:"bottom",children:t.jsxs("button",{className:L,type:"button",onClick:K,children:[t.jsx(z,{type:o,usePartialStatus:n}),t.jsx(J,{as:"span",size:"small",className:c.step__text,children:e})]})}),r&&t.jsx("div",{className:f(R,`${c["step__arrow-container"]}`)})]},e)};y.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},usePartialStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"StepType"},description:"",defaultValue:{value:"StepType.default",computed:!0}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},stepArrowContainerStyle:{required:!1,tsType:{name:"string"},description:""}}};const{action:pe}=__STORYBOOK_MODULE_ACTIONS__,le={component:y,args:{onClick:pe("onClick"),index:0,isActive:!1,type:a.success,usePartialStatus:!1},render:e=>{const[i,o]=Q.useState(!1);return t.jsx("div",{style:{width:"200px"},children:t.jsx(y,{...e,isActive:i,onClick:r=>{var n;o(s=>!s),(n=e.onClick)==null||n.call(e,r)}})})},tags:["autodocs"]},p={args:{label:"Inngangsvilkår",type:a.success}},l={args:{label:"Beregning",type:a.success,usePartialStatus:!0}},u={args:{label:"Uttak",type:a.warning}},d={args:{label:"Uttak",type:a.warning,usePartialStatus:!0}},g={args:{label:"Tilkjent ytelse",type:a.danger}},m={args:{label:"Beregning",type:a.danger,usePartialStatus:!0}},S={args:{label:"Simulering",type:a.default}},_={args:{label:"Vedtak",type:a.default,usePartialStatus:!0}};var b,x,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Inngangsvilkår',
    type: StepType.success
  }
}`,...(w=(x=p.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var T,v,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.success,
    usePartialStatus: true
  }
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var q,h,j;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Uttak',
    type: StepType.warning
  }
}`,...(j=(h=u.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var P,W,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Uttak',
    type: StepType.warning,
    usePartialStatus: true
  }
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var N,C,I;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger
  }
}`,...(I=(C=g.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var O,B,A;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Beregning',
    type: StepType.danger,
    usePartialStatus: true
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var E,U,V;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Simulering',
    type: StepType.default
  }
}`,...(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var $,F,M;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Vedtak',
    type: StepType.default,
    usePartialStatus: true
  }
}`,...(M=(F=_.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const ue=["SuccessStep","SuccessStepWithPartialStatus","WarningStep","WarningStepWithPartialStatus","DangerStep","DangerStepWithPartialStatus","DefaultStep","DefaultStepWithPartialStatus"],Se=Object.freeze(Object.defineProperty({__proto__:null,DangerStep:g,DangerStepWithPartialStatus:m,DefaultStep:S,DefaultStepWithPartialStatus:_,SuccessStep:p,SuccessStepWithPartialStatus:l,WarningStep:u,WarningStepWithPartialStatus:d,__namedExportsOrder:ue,default:le},Symbol.toStringTag,{value:"Module"}));export{g as D,y as S,u as W,p as a,l as b,S as c,_ as d,m as e,Se as f};
