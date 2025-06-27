import{m as z,n as M,r as A,j as e,z as I}from"./iframe-DlqD_I3e.js";import{g as $,a as B,r as G}from"./formUtils-TBXSRRal.js";import{R as H}from"./ReadOnlyField-mWBv_lbC.js";const V=({label:d,selectValues:o,validate:u=[],readOnly:D=!1,description:j,hideValueOnDisable:q=!1,onChange:p,className:F,hideLabel:c,isEdited:k,size:O,...E})=>{const{name:m,control:N,disabled:v}=E,{formState:{errors:C}}=z(),{field:t}=M({name:m,control:N,rules:{validate:A.useMemo(()=>$(u),[u])}});if(D){const a=o.map(i=>i.props).find(i=>i.value===t.value),_=a?a.children:void 0;return e.jsx(H,{value:_,label:d,hideLabel:c,isEdited:k,size:O})}const l=t.value||"",f=!o.map(a=>a.props.value).includes(l)&&l!=="";return f&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(I,{size:"small",className:F,error:B(C,m),label:d,description:j,value:q&&v||f?"":t.value,disabled:v,onChange:a=>{p&&p(a),t.onChange(a)},hideLabel:c,children:[e.jsx("option",{style:{display:"none"}}),",",o]})};V.__docgenInfo={description:"",methods:[],displayName:"RhfSelect",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const P={component:V,tags:["autodocs"],decorators:G({testSelectFieldpre:"value3"})},r={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},s={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},n={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};var y,g,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var R,h,x;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,w,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const Q=["Default","MedVerdi","ReadOnly"];export{r as Default,s as MedVerdi,n as ReadOnly,Q as __namedExportsOrder,P as default};
