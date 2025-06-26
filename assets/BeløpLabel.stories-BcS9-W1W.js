import{j as o,ad as j}from"./iframe-C7Bd7qJ1.js";import{K}from"./KopierbarTekst-CUoXBcUT.js";import"./nb_NO-D4PbtzLx.js";const d={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},x=({beløp:n,kr:y=!1,rød:S=!1})=>{const e=n==null?void 0:n.toString().replace(/\s/g,"");return o.jsx(K,{tekst:e,children:o.jsxs("span",{className:S?d.rød:d.default,children:[e?j(e):"-",e&&y&&" kr"]})})};x.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined | null",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"null"}]},description:""},kr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={component:x,args:{beløp:12345678}},r={args:{}},s={args:{kr:!0}},a={args:{beløp:void 0,kr:!0}},t={args:{beløp:0,kr:!1,rød:!0}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    kr: true
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var f,g,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(_=t.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const v=["Default","MedKroner","NoBeløp","RødFargeBeløp"];export{r as Default,s as MedKroner,a as NoBeløp,t as RødFargeBeløp,v as __namedExportsOrder,q as default};
