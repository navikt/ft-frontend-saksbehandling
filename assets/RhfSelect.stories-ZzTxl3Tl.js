import{n as D,o as j,r as F,j as e,z as k}from"./iframe-_4umShaB.js";import{g as O,a as E,r as C}from"./formUtils-Bgm2rVVo.js";import{R as N}from"./ReadOnlyField-gT0ekhtz.js";const f=({label:d,selectValues:n,validate:u=[],readOnly:g=!1,description:T,hideValueOnDisable:R=!1,onChange:p,className:h,hideLabel:c,isEdited:w,size:x,...b})=>{const{name:m,control:S,disabled:v}=b,{formState:{errors:V}}=D(),{field:r}=j({name:m,control:S,rules:{validate:F.useMemo(()=>O(u),[u])}});if(g){const a=n.map(i=>i.props).find(i=>i.value===r.value),q=a?a.children:void 0;return e.jsx(N,{value:q,label:d,hideLabel:c,isEdited:w,size:x})}const l=r.value||"",y=!n.map(a=>a.props.value).includes(l)&&l!=="";return y&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(k,{size:"small",className:h,error:E(V,m),label:d,description:T,value:R&&v||y?"":r.value,disabled:v,onChange:a=>{p&&p(a),r.onChange(a)},hideLabel:c,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};f.__docgenInfo={description:"",methods:[],displayName:"RhfSelect",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const A={component:f,tags:["autodocs"],decorators:C({testSelectFieldpre:"value3"}),args:{control:void 0}},t={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},o={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const P=["Default","MedVerdi","ReadOnly"];export{t as Default,o as MedVerdi,s as ReadOnly,P as __namedExportsOrder,A as default};
