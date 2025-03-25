import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as C,a as _,r as M}from"./formUtils-D5hbJtvb.js";import{r as z}from"./index-DASCADcX.js";import{u as A,a as I}from"./index.esm-s_KxdRQ_.js";import{R as $}from"./ReadOnlyField-DfbTtQCy.js";import{S as B}from"./Select-BQ6tobI2.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./VStack-CfnCueE0.js";import"./Theme-Bqc_BD0M.js";import"./omit-B7stZg_p.js";import"./useId-BiFzyKmP.js";import"./BasePrimitive-eMFBMVLd.js";import"./Button-D87Irl5r.js";import"./Loader-C31s9nuZ.js";import"./Provider-ChnEfPss.js";import"./Label-CfBdhDeq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-C0pWCfPx.js";import"./index.es-CsyRfoMR.js";import"./dayjs.min-Cke173X9.js";import"./Alert-vBIWixRy.js";import"./useId-sDoo_C8F.js";import"./ExclamationmarkTriangleFill-BFbmXhrr.js";import"./XMarkOctagonFill-Cj0h8cZo.js";import"./XMark-KAXZPgUH.js";import"./PersonPencilFill-CoF6qBVB.js";import"./Box-t-YAJNpB.js";import"./KeyVerticalFill-m_CavoP-.js";import"./Checkmark-abnGd_Ay.js";import"./ChevronDown-DKSW_DmS.js";import"./Modal-Cf6h8GUk.js";import"./floating-ui.react-CkbDYyWV.js";import"./index-CRSK7kgn.js";import"./index-BxWMR1Ay.js";import"./Date.Input-DmVXlpzX.js";import"./ReadOnlyIcon-fpBUgZkh.js";import"./useFormField-BZtIeUXv.js";const q=({name:p,label:d,selectValues:n,validate:m=[],readOnly:D=!1,description:F,hideValueOnDisable:V=!1,onChange:u,disabled:c,className:j,hideLabel:v,isEdited:k,size:O})=>{const{formState:{errors:E}}=A(),{field:t}=I({name:p,rules:{validate:z.useMemo(()=>C(m),[m])}});if(D){const r=n.map(l=>l.props).find(l=>l.value===t.value),N=r?r.children:void 0;return e.jsx($,{value:N,label:d,hideLabel:v,isEdited:k,size:O})}const i=t.value||"",f=!n.map(r=>r.props.value).includes(i)&&i!=="";return f&&console.warn(`No corresponding option found for value '${i}'`),e.jsxs(B,{size:"small",className:j,error:_(E,p),label:d,description:F,value:V&&c||f?"":t.value,disabled:c,onChange:r=>{u&&u(r),t.onChange(r)},hideLabel:v,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};q.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const De={component:q,tags:["autodocs"],decorators:M({testSelectFieldpre:"value3"})},a={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},o={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};var y,g,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var x,R,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var b,w,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const Fe=["Default","MedVerdi","ReadOnly"];export{a as Default,o as MedVerdi,s as ReadOnly,Fe as __namedExportsOrder,De as default};
