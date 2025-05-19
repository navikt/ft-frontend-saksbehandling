import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{a as N}from"./index.es-Bs6SSTCM.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DNHX5htx.js";const n={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},B=({beløp:t,kr:x=!1,rød:y=!1})=>{const o=t==null?void 0:t.toString().replace(/\s/g,"");return S.jsxs("span",{className:y?n.rød:n.default,children:[o?N(o):"-",o&&x&&" kr"]})};B.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined | null",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"null"}]},description:""},kr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rød:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const h={component:B,args:{beløp:12345678}},e={args:{}},r={args:{kr:!0}},a={args:{beløp:void 0,kr:!0}},s={args:{beløp:0,kr:!1,rød:!0}};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    kr: true
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,f,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    beløp: undefined,
    kr: true
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,_,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    beløp: 0,
    kr: false,
    rød: true
  }
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const D=["Default","MedKroner","NoBeløp","RødFargeBeløp"];export{e as Default,r as MedKroner,a as NoBeløp,s as RødFargeBeløp,D as __namedExportsOrder,h as default};
