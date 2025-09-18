import{r as D,j as e}from"./iframe-DzXUO6GT.js";import{g as j,a as F,r as k}from"./formUtils-BabEHBhI.js";import{u as O,a as E}from"./index.esm-nh5QY85X.js";import{R as C}from"./ReadOnlyField-r78r3bkP.js";import{S as N}from"./Select-BNwbPbPq.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-vldtWtPo.js";import"./omit-B7stZg_p.js";import"./useId-BTmGetX7.js";import"./BasePrimitive-DGW3gu2x.js";import"./Button-af7718Cc.js";import"./Loader-IncALmTQ.js";import"./Provider-CLScYENo.js";import"./Label-BptAkRyu.js";import"./composeEventHandlers-krbYd5LM.js";import"./index.es-CkQmGgSL.js";import"./index.es-yTIDcLWJ.js";import"./dayjs.min-BFUBMDMt.js";import"./index-DfaBx6Pe.js";import"./PersonPencilFill-DyJneeHY.js";import"./useId-DZKQXQUP.js";import"./Alert-DFJmKH85.js";import"./ExclamationmarkTriangleFill-DDAH-o0u.js";import"./XMarkOctagonFill-CoZ8IwgD.js";import"./XMark-CpZNF069.js";import"./Tooltip-B3LKtxru.js";import"./floating-ui.react-ChwVIx_A.js";import"./index-C9-rAhI6.js";import"./index-Byb5gg4O.js";import"./useControllableState-DmC_MG6f.js";import"./Box-DL9bOJYF.js";import"./KeyVerticalFill-DFYvwClO.js";import"./ReadOnlyIcon-BmYdC75R.js";import"./useFormField-a1sx1jM8.js";import"./ReadMore-BBeWwL2Z.js";import"./ChevronDown-DkSCMhYg.js";const g=({label:p,selectValues:n,validate:d=[],readOnly:T=!1,description:R,hideValueOnDisable:h=!1,onChange:m,className:w,hideLabel:u,isEdited:x,size:c="small",...S})=>{const{name:v,control:b,disabled:f}=S,{formState:{errors:V}}=O(),{field:t}=E({name:v,control:b,rules:{validate:D.useMemo(()=>j(d),[d])}});if(T){const r=n.map(i=>i.props).find(i=>i.value===t.value),q=r?r.children:void 0;return e.jsx(C,{value:q,label:p,hideLabel:u,isEdited:x,size:c})}const l=t.value||"",y=!n.map(r=>r.props.value).includes(l)&&l!=="";return y&&console.warn(`No corresponding option found for value '${l}'`),e.jsxs(N,{size:c,className:w,error:F(V,v),label:p,description:R,value:h&&f||y?"":t.value,disabled:f,onChange:r=>{m&&m(r),t.onChange(r)},hideLabel:u,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};g.__docgenInfo={description:"",methods:[],displayName:"RhfSelect",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => ValidationReturnType)[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""}}};const ge={component:g,tags:["autodocs"],decorators:k({testSelectFieldpre:"value3"}),args:{control:void 0}},o={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},a={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Te=["Default","MedVerdi","ReadOnly"];export{o as Default,a as MedVerdi,s as ReadOnly,Te as __namedExportsOrder,ge as default};
