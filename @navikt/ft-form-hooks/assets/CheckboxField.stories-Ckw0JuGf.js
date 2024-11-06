import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as O}from"./index-DRjF_FHU.js";import{a as R,b as j,g as w,d as u,E as F,r as V}from"./decorators-CsUnBlMd.js";import{C as _}from"./Checkbox-Cr83NPE3.js";import"./v4-CQkTLCs1.js";import"./Fieldset-RWdTFsQu.js";const C=({name:t,label:D,validate:n=[],readOnly:T=!1,onChange:c,onClick:i,className:q,disabled:E})=>{const{formState:{errors:d}}=R(),{field:o}=j({name:t,rules:{validate:O.useMemo(()=>w(n),[n])}}),l=u(d,t);return e.jsxs(e.Fragment,{children:[e.jsx(_,{size:"small",disabled:E||T,checked:o.value===!0,className:q,error:!!l,...o,onChange:m=>{o.onChange(m),c&&c(m.currentTarget.checked)},onClick:()=>{i&&i()},children:D}),l&&e.jsx(F,{children:u(d,t)})]})};C.__docgenInfo={description:"",methods:[],displayName:"CheckboxField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const B={component:C,tags:["autodocs"],decorators:V({testcheckboxpre:!0})},r={args:{label:"Dette er en checkbox",name:"testcheckbox"}},a={args:{label:"Dette er en checkbox der verdi er valgt",name:"testcheckboxpre"}},s={args:{label:"Dette er en checkbox som er readonly",name:"testcheckboxpre",readOnly:!0}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox',
    name: 'testcheckbox'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox der verdi er valgt',
    name: 'testcheckboxpre'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,y,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox som er readonly',
    name: 'testcheckboxpre',
    readOnly: true
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const G=["Default","MedVerdi","ReadOnly"];export{r as Default,a as MedVerdi,s as ReadOnly,G as __namedExportsOrder,B as default};
