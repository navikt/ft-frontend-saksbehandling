import{u as D,a as j,r as F,j as e,Q as b}from"./iframe-DhpJkxJ1.js";import{g as k,a as O,r as q}from"./formUtils-DtsKZyRv.js";import{R as E}from"./ReadOnlyField-DF7Ffvpx.js";import"./preload-helper-PPVm8Dsz.js";const y=({label:d,selectValues:l,validate:u=[],readOnly:g=!1,hideValueOnDisable:T=!1,onChange:p,hideLabel:c,isEdited:x,size:m="small",name:v,control:R,disabled:h,...S})=>{const{formState:{errors:V}}=D(),{field:r}=j({name:v,control:R,rules:{validate:F.useMemo(()=>k(u),[u])}});if(g){const a=l.map(i=>i.props).find(i=>i.value===r.value),w=a?a.children:void 0;return e.jsx(E,{value:w,label:d,hideLabel:c,isEdited:x,size:m})}const n=r.value||"",f=!l.map(a=>a.props.value).includes(n)&&n!=="";return f&&console.warn(`No corresponding option found for value '${n}'`),e.jsxs(b,{size:m,error:O(V,v),label:d,value:T&&h||f?"":r.value,onChange:a=>{p&&p(a),r.onChange(a)},hideLabel:c,...S,children:[e.jsx("option",{style:{display:"none"}}),l]})};y.__docgenInfo={description:"",methods:[],displayName:"RhfSelect",props:{isEdited:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'small'",computed:!1},required:!1}}};const N={component:y,tags:["autodocs"],decorators:q({testSelectFieldpre:"value3"}),args:{control:void 0}},t={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},o={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const P=["Default","MedVerdi","ReadOnly"];export{t as Default,o as MedVerdi,s as ReadOnly,P as __namedExportsOrder,N as default};
