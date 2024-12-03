import{j as f}from"./jsx-runtime-DR9Q75dM.js";import{r as g}from"./index-DRjF_FHU.js";import{a as I,b as k,g as B,d as G,r as L}from"./decorators-DM-2uixQ.js";import{R as P}from"./ReadOnlyField-B2znv4wF.js";import{T as X}from"./TextField-DLVh5Eue.js";import"./v4-CQkTLCs1.js";import"./index.es-yoQ-kWU6.js";import"./index-rX-Bn4lm.js";const $=/^(\d+[,]?(\d{1,2})?)$/,z=/^(\d{1,20}[,.]?(\d{1,10})?)$/,R=({name:u,label:i,hideLabel:m,validate:d=[],readOnly:w=!1,description:N,autoFocus:V,isEdited:C,forceTwoDecimalDigits:o=!1,disabled:O,className:S,onChange:c})=>{const[_,p]=g.useState(!1),{formState:{errors:h}}=I(),{field:e}=k({name:u,rules:{validate:g.useMemo(()=>B(d),[d])}});if(w)return f.jsx(P,{label:i,value:e.value,isEdited:C,hideLabel:m});const M=o?$:z,r=e.value!==void 0&&e.value!==null?e.value.toString():"",j=!_&&o&&r!==""&&!Number.isNaN(r)?parseFloat(r).toFixed(2):r;return f.jsx(X,{size:"small",description:N,label:i,error:G(h,u),...e,value:j.replace(".",","),autoFocus:V,autoComplete:"off",disabled:O,type:"text",hideLabel:m,inputMode:"decimal",className:S,onChange:A=>{p(!0);const l=A.currentTarget.value;let a;return l===""?a=null:M.test(l)?a=l.replace(",","."):a=e.value,c&&c(a),e.onChange(a)},onBlur:()=>{p(!1),e.onBlur(),o&&r.slice(-1)==="."&&e.onChange(r+0)}})};R.__docgenInfo={description:"",methods:[],displayName:"NumberField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},validate:{required:!1,tsType:{name:"union",raw:"((value: string) => any)[] | ((value: number) => any)[]",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},{name:"Array",elements:[{name:"unknown"}],raw:"((value: number) => any)[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},forceTwoDecimalDigits:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""}}};const ee={component:R,tags:["autodocs"],decorators:L({testnumberpre:45.1})},t={args:{label:"Dette er et numberfelt",name:"testnumber",forceTwoDecimalDigits:!0}},n={args:{label:"Dette er et numberfelt der verdi er valgt",name:"testnumberpre"}},s={args:{label:"Dette er et numberfelt som er readonly",name:"testnumberpre",readOnly:!0}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et numberfelt',
    name: 'testnumber',
    forceTwoDecimalDigits: true
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var T,D,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et numberfelt der verdi er valgt',
    name: 'testnumberpre'
  }
}`,...(q=(D=n.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var x,E,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et numberfelt som er readonly',
    name: 'testnumberpre',
    readOnly: true
  }
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const re=["Default","MedVerdi","ReadOnly"];export{t as Default,n as MedVerdi,s as ReadOnly,re as __namedExportsOrder,ee as default};