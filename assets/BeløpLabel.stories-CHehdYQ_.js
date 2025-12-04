import{j as t,ao as c}from"./iframe-BlU1-CaG.js";import{K as m}from"./KopierbarTekst-B4rjL0Hi.js";import"./preload-helper-PPVm8Dsz.js";import"./nb_NO-D4PbtzLx.js";const n={default:"_default_af3od_1",rød:"_rød_af3od_5"},d=({beløp:l,kr:p=!1,rød:u=!1})=>{const e=l?.toString().replace(/\s/g,"");return t.jsx(m,{tekst:e,children:t.jsxs("span",{className:u?n.rød:n.default,children:[e?c(e):"-",e&&p&&" kr"]})})};d.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined | null",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"null"}]},description:""},kr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const k={component:d,args:{beløp:12345678}},r={args:{}},a={args:{kr:!0}},s={args:{beløp:void 0,kr:!0}},o={args:{beløp:0,kr:!1,rød:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const _=["Default","MedKroner","NoBeløp","RødFargeBeløp"];export{r as Default,a as MedKroner,s as NoBeløp,o as RødFargeBeløp,_ as __namedExportsOrder,k as default};
