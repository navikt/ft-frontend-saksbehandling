import{j as n,ad as c}from"./iframe-BYGivzjd.js";import{K as m}from"./KopierbarTekst-DNX3er9A.js";import"./nb_NO-D4PbtzLx.js";const o={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},l=({beløp:d,kr:p=!1,rød:u=!1})=>{const e=d?.toString().replace(/\s/g,"");return n.jsx(m,{tekst:e,children:n.jsxs("span",{className:u?o.rød:o.default,children:[e?c(e):"-",e&&p&&" kr"]})})};l.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined | null",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"null"}]},description:""},kr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={component:l,args:{beløp:12345678}},r={args:{}},s={args:{kr:!0}},a={args:{beløp:void 0,kr:!0}},t={args:{beløp:0,kr:!1,rød:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kr: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    beløp: undefined,
    kr: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    beløp: 0,
    kr: false,
    rød: true
  }
}`,...t.parameters?.docs?.source}}};const k=["Default","MedKroner","NoBeløp","RødFargeBeløp"];export{r as Default,s as MedKroner,a as NoBeløp,t as RødFargeBeløp,k as __namedExportsOrder,b as default};
