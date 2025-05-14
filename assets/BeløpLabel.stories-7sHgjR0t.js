import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{I as K}from"./index.es-Dq6sdjeM.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DNHX5htx.js";const N="_noWrap_1a1ul_2",w={noWrap:N},g=({children:e})=>f.jsx("span",{className:w.noWrap,children:e});g.__docgenInfo={description:"",methods:[],displayName:"NoWrap"};const _=({beløp:e,withKr:h=!1})=>{const o=e==null?void 0:e.toString().replace(/\s/g,"");return f.jsxs(g,{children:[o?K(o):"-",o&&h&&" kr"]})};_.__docgenInfo={description:"",methods:[],displayName:"BeløpLabel",props:{beløp:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:""},withKr:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const j={component:_,args:{beløp:12345678}},r={args:{}},s={args:{withKr:!0}},a={args:{beløp:void 0,withKr:!0}};var t,n,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    withKr: true
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    beløp: undefined,
    withKr: true
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const I=["Default","MedKroner","NoBeløp"];export{r as Default,s as MedKroner,a as NoBeløp,I as __namedExportsOrder,j as default};
