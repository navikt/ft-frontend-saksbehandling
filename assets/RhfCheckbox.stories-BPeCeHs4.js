import{g as E,a as m,r as O}from"./formUtils-C4BTjLaz.js";import{m as j,n as M,r as N,j as e,C as S,E as _}from"./iframe-DQj-1hI0.js";const C=({label:R,validate:o=[],readOnly:D=!1,onChange:c,onClick:i,className:T,...V})=>{const{name:t,control:q,disabled:w}=V,{formState:{errors:l}}=j(),{field:s}=M({name:t,control:q,rules:{validate:N.useMemo(()=>E(o),[o])}}),d=m(l,t);return e.jsxs(e.Fragment,{children:[e.jsx(S,{size:"small",disabled:w||D,checked:s.value===!0,className:T,error:!!d,...s,onChange:u=>{s.onChange(u),c&&c(u.currentTarget.checked)},onClick:()=>{i&&i()},children:R}),d&&e.jsx(_,{children:m(l,t)})]})};C.__docgenInfo={description:"",methods:[],displayName:"RhfCheckbox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"function",raw:"(value: string) => ValidationReturnType",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}}],raw:"Array<(value: string) => ValidationReturnType>"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const z={component:C,tags:["autodocs"],decorators:O({testcheckboxpre:!0})},r={args:{label:"Dette er en checkbox",name:"testcheckbox"}},a={args:{label:"Dette er en checkbox der verdi er valgt",name:"testcheckboxpre"}},n={args:{label:"Dette er en checkbox som er readonly",name:"testcheckboxpre",readOnly:!0}};var p,g,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox',
    name: 'testcheckbox'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox der verdi er valgt',
    name: 'testcheckboxpre'
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,k,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkbox som er readonly',
    name: 'testcheckboxpre',
    readOnly: true
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const I=["Default","MedVerdi","ReadOnly"];export{r as Default,a as MedVerdi,n as ReadOnly,I as __namedExportsOrder,z as default};
