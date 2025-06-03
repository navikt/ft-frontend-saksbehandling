import{l as C,m as _,r as M,j as e,y as z}from"./iframe-C91bWaTK.js";import{g as A,a as I,r as $}from"./formUtils-DddCEbB2.js";import{R as B}from"./ReadOnlyField-mZJ3MMAL.js";const q=({name:d,label:u,selectValues:o,validate:p=[],readOnly:D=!1,description:F,hideValueOnDisable:V=!1,onChange:c,disabled:m,className:j,hideLabel:v,isEdited:k,size:O})=>{const{formState:{errors:E}}=C(),{field:t}=_({name:d,rules:{validate:M.useMemo(()=>A(p),[p])}});if(D){const a=o.map(i=>i.props).find(i=>i.value===t.value),N=a?a.children:void 0;return e.jsx(B,{value:N,label:u,hideLabel:v,isEdited:k,size:O})}const l=t.value||"",y=!o.map(a=>a.props.value).includes(l)&&l!=="";return y&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(z,{size:"small",className:j,error:I(E,d),label:u,description:F,value:V&&m||y?"":t.value,disabled:m,onChange:a=>{c&&c(a),t.onChange(a)},hideLabel:v,children:[e.jsx("option",{style:{display:"none"}}),",",o]})};q.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const K={component:q,tags:["autodocs"],decorators:$({testSelectFieldpre:"value3"})},r={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},s={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},n={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};var f,g,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var x,R,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...(b=(R=s.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var w,S,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const L=["Default","MedVerdi","ReadOnly"];export{r as Default,s as MedVerdi,n as ReadOnly,L as __namedExportsOrder,K as default};
