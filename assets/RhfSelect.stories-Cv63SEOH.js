import{u as D,a as j,r as F,j as e,z as k}from"./iframe-OC4Yj-4Z.js";import{g as O,a as E,r as C}from"./formUtils-7VBtG0Kd.js";import{R as N}from"./ReadOnlyField-DgHUBCzl.js";import"./preload-helper-PPVm8Dsz.js";const g=({label:d,selectValues:n,validate:u=[],readOnly:T=!1,description:R,hideValueOnDisable:h=!1,onChange:p,className:w,hideLabel:c,isEdited:x,size:m="small",...b})=>{const{name:v,control:S,disabled:f}=b,{formState:{errors:V}}=D(),{field:t}=j({name:v,control:S,rules:{validate:F.useMemo(()=>O(u),[u])}});if(T){const a=n.map(i=>i.props).find(i=>i.value===t.value),q=a?a.children:void 0;return e.jsx(N,{value:q,label:d,hideLabel:c,isEdited:x,size:m})}const l=t.value||"",y=!n.map(a=>a.props.value).includes(l)&&l!=="";return y&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(k,{size:m,className:w,error:E(V,v),label:d,description:R,value:h&&f||y?"":t.value,disabled:f,onChange:a=>{p&&p(a),t.onChange(a)},hideLabel:c,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};g.__docgenInfo={description:"",methods:[],displayName:"RhfSelect",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const U={component:g,tags:["autodocs"],decorators:C({testSelectFieldpre:"value3"}),args:{control:void 0}},r={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},o={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["Default","MedVerdi","ReadOnly"];export{r as Default,o as MedVerdi,s as ReadOnly,z as __namedExportsOrder,U as default};
