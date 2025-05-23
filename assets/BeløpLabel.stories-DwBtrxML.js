import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{a as j}from"./index.es-Bs6SSTCM.js";import{K}from"./KopierbarTekst-DBEJrtPC.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DNHX5htx.js";import"./nb_NO-D4PbtzLx.js";import"./Tooltip-BnLM-CWP.js";import"./floating-ui.react-D9M9yXN8.js";import"./Theme-C_brBVJK.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./Provider-BZs7ODlm.js";import"./Label-CYbek38p.js";import"./useId-CsAOvYkp.js";const p={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},x=({beløp:o,kr:y=!1,rød:S=!1})=>{const e=o==null?void 0:o.toString().replace(/\s/g,"");return n.jsx(K,{tekst:e,children:n.jsxs("span",{className:S?p.rød:p.default,children:[e?j(e):"-",e&&y&&" kr"]})})};x.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined | null",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"null"}]},description:""},kr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const P={component:x,args:{beløp:12345678}},r={args:{}},s={args:{kr:!0}},a={args:{beløp:void 0,kr:!0}},t={args:{beløp:0,kr:!1,rød:!0}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,u,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    kr: true
  }
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var f,g,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    beløp: undefined,
    kr: true
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,_,B;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    beløp: 0,
    kr: false,
    rød: true
  }
}`,...(B=(_=t.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const z=["Default","MedKroner","NoBeløp","RødFargeBeløp"];export{r as Default,s as MedKroner,a as NoBeløp,t as RødFargeBeløp,z as __namedExportsOrder,P as default};
