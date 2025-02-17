import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as C,a as _,r as M}from"./formUtils-BUrXP4-I.js";import{r as z}from"./index-Dxs5m6lS.js";import{u as A,a as I}from"./ReadOnlyIcon-DuqD_nIQ.js";import{R as $}from"./ReadOnlyField-CI5YmUGP.js";import{S as B}from"./Select-gs1Ydqxl.js";import"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./v4-CtRu48qb.js";import"./VStack-Vgssv_xf.js";import"./clsx-B-dksMZM.js";import"./Theme-D6t0sq75.js";import"./create-context-B5rPGqtO.js";import"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import"./BasePrimitive-CCRtmZcj.js";import"./Button-D0flVHf8.js";import"./Loader-BHKWc60O.js";import"./Provider-B4A31v_2.js";import"./Label-g0SsZd4P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9cQ8Pho.js";import"./index.es-CJ4OkDRS.js";import"./index.es-80VfceJd.js";import"./index-CF594pY9.js";import"./Alert-BC6DEIhx.js";import"./ExclamationmarkTriangleFill-DkXWnTRW.js";import"./XMarkOctagonFill-Ct54z8PV.js";import"./XMark-HQCrC0kG.js";import"./PersonPencilFill-DeEWAwj3.js";import"./Box-B-JCHjPf.js";import"./KeyVerticalFill-DGPAogWB.js";import"./Checkmark-ARqG-vXH.js";import"./ChevronDown-TCQpyZRB.js";import"./message-Bp2Fc9cS.js";import"./Modal-B1D1msXx.js";import"./floating-ui.react-BIOaLlQ7.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./useDateTranslationContext-BEjj1I9s.js";import"./useFormField-CUgZtuoq.js";const q=({name:p,label:m,selectValues:n,validate:d=[],readOnly:F=!1,description:D,hideValueOnDisable:V=!1,onChange:u,disabled:c,className:j,hideLabel:v,isEdited:k,size:O})=>{const{formState:{errors:E}}=A(),{field:r}=I({name:p,rules:{validate:z.useMemo(()=>C(d),[d])}});if(F){const t=n.map(l=>l.props).find(l=>l.value===r.value),N=t?t.children:void 0;return e.jsx($,{value:N,label:m,hideLabel:v,isEdited:k,size:O})}const i=r.value||"",f=!n.map(t=>t.props.value).includes(i)&&i!=="";return f&&console.warn(`No corresponding option found for value '${i}'`),e.jsxs(B,{size:"small",className:j,error:_(E,p),label:m,description:D,value:V&&c||f?"":r.value,disabled:c,onChange:t=>{u&&u(t),r.onChange(t)},hideLabel:v,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};q.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const Ve={title:"form-hooks/SelectField",component:q,tags:["autodocs"],decorators:M({testSelectFieldpre:"value3"})},o={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},a={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};var y,g,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var S,x,R;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [<option value="value3" key="1">
        Test 3
      </option>, <option value="value4" key="2">
        Test 4
      </option>]
  }
}`,...(R=(x=a.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var b,h,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const je=["Default","MedVerdi","ReadOnly"];export{o as Default,a as MedVerdi,s as ReadOnly,je as __namedExportsOrder,Ve as default};
