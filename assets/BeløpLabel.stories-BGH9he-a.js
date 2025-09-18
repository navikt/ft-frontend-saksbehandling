import{j as t}from"./iframe-DzXUO6GT.js";import{w as i}from"./index.es-yTIDcLWJ.js";import{K as u}from"./KopierbarTekst-BN5oJuq-.js";import"./preload-helper-PPVm8Dsz.js";import"./dayjs.min-BFUBMDMt.js";import"./index-DfaBx6Pe.js";import"./nb_NO-D4PbtzLx.js";import"./Tooltip-B3LKtxru.js";import"./floating-ui.react-ChwVIx_A.js";import"./index-C9-rAhI6.js";import"./index-Byb5gg4O.js";import"./Provider-CLScYENo.js";import"./Label-BptAkRyu.js";import"./useControllableState-DmC_MG6f.js";import"./useId-BTmGetX7.js";const n={default:"_default_af3od_1",rød:"_rød_af3od_5"},p=({beløp:d,kr:l=!1,rød:m=!1})=>{const e=d?.toString().replace(/\s/g,"");return t.jsx(u,{tekst:e,children:t.jsxs("span",{className:m?n.rød:n.default,children:[e?i(e):"-",e&&l&&" kr"]})})};p.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined | null",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"null"}]},description:""},kr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={component:p,args:{beløp:12345678}},r={args:{}},a={args:{kr:!0}},s={args:{beløp:void 0,kr:!0}},o={args:{beløp:0,kr:!1,rød:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kr: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    beløp: undefined,
    kr: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    beløp: 0,
    kr: false,
    rød: true
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","MedKroner","NoBeløp","RødFargeBeløp"];export{r as Default,a as MedKroner,s as NoBeløp,o as RødFargeBeløp,v as __namedExportsOrder,q as default};
