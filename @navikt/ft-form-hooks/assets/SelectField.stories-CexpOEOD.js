import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as C}from"./index-DRjF_FHU.js";import{a as _,b as M,g as z,d as A,r as I}from"./decorators-CsUnBlMd.js";import{R as $}from"./ReadOnlyField-D8hLTj43.js";import{S as B}from"./Select-DwrWk4ly.js";import"./v4-CQkTLCs1.js";import"./index.es-6Aam7IZi.js";import"./index-rX-Bn4lm.js";const q=({name:d,label:u,selectValues:n,validate:p=[],readOnly:F=!1,description:D,hideValueOnDisable:V=!1,onChange:c,disabled:m,className:j,hideLabel:v,isEdited:k,size:O})=>{const{formState:{errors:E}}=_(),{field:t}=M({name:d,rules:{validate:C.useMemo(()=>z(p),[p])}});if(F){const r=n.map(i=>i.props).find(i=>i.value===t.value),N=r?r.children:void 0;return e.jsx($,{value:N,label:u,hideLabel:v,isEdited:k,size:O})}const l=t.value||"",f=!n.map(r=>r.props.value).includes(l)&&l!=="";return f&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(B,{size:"small",className:j,error:A(E,d),label:u,description:D,value:V&&m||f?"":t.value,disabled:m,onChange:r=>{c&&c(r),t.onChange(r)},hideLabel:v,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};q.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement"}],raw:"React.ReactElement[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const W={component:q,tags:["autodocs"],decorators:I({testSelectFieldpre:"value3"})},a={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},s={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},o={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};var y,g,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown',
    name: 'testSelectField',
    description: 'Dette er en nærmere beskrivelse',
    selectValues: [<option value="value1" key="1">
        Test 1
      </option>, <option value="value2" key="2">
        Test 2
      </option>]
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var S,b,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var R,w,h;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown som er readonly',
    name: 'testSelectFieldpre',
    readOnly: true,
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const X=["Default","MedVerdi","ReadOnly"];export{a as Default,s as MedVerdi,o as ReadOnly,X as __namedExportsOrder,W as default};
