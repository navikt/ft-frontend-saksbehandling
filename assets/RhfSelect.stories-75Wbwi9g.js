import{m as j,n as q,r as F,j as e,z as k}from"./iframe-DlPxsZDl.js";import{g as O,a as E,r as N}from"./formUtils-YDKccthn.js";import{R as C}from"./ReadOnlyField-DuuqyWV7.js";const y=({label:d,selectValues:o,validate:u=[],readOnly:g=!1,description:T,hideValueOnDisable:R=!1,onChange:p,className:h,hideLabel:c,isEdited:x,size:b,...w})=>{const{name:m,control:S,disabled:v}=w,{formState:{errors:V}}=j(),{field:t}=q({name:m,control:S,rules:{validate:F.useMemo(()=>O(u),[u])}});if(g){const a=o.map(i=>i.props).find(i=>i.value===t.value),D=a?a.children:void 0;return e.jsx(C,{value:D,label:d,hideLabel:c,isEdited:x,size:b})}const l=t.value||"",f=!o.map(a=>a.props.value).includes(l)&&l!=="";return f&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(k,{size:"small",className:h,error:E(V,m),label:d,description:T,value:R&&v||f?"":t.value,disabled:v,onChange:a=>{p&&p(a),t.onChange(a)},hideLabel:c,children:[e.jsx("option",{style:{display:"none"}}),",",o]})};y.__docgenInfo={description:"",methods:[],displayName:"RhfSelect",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const A={component:y,tags:["autodocs"],decorators:N({testSelectFieldpre:"value3"})},r={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},s={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},n={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const I=["Default","MedVerdi","ReadOnly"];export{r as Default,s as MedVerdi,n as ReadOnly,I as __namedExportsOrder,A as default};
