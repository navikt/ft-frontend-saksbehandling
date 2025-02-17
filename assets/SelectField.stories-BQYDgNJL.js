import{j as e}from"./jsx-runtime-CLpGMVip.js";import{g as C,a as _,r as M}from"./formUtils-ZifNUAy7.js";import{r as z}from"./index-B5OHeJSP.js";import{u as A,a as I}from"./ReadOnlyIcon-3mCRcvzc.js";import{R as $}from"./ReadOnlyField-8gUhE9Qi.js";import{S as B}from"./Select-wYL7g-5T.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./VStack-DrfGxCua.js";import"./clsx-B-dksMZM.js";import"./Theme-6IdwQf2V.js";import"./create-context-BlrHNsQj.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./BasePrimitive-B7qNT1W_.js";import"./Button-C4dKKha_.js";import"./Loader-CoAqN6Lw.js";import"./Provider-B_QIWjIe.js";import"./Label-ZYbyet41.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9OmVTHV.js";import"./index.es-BdLW2Tvk.js";import"./index.es-Dh3mAfPy.js";import"./index-D9DDUrbY.js";import"./message-BcVJpMje.js";import"./Modal-C6iE4cX-.js";import"./floating-ui.react-FIE1On8Y.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./useDateTranslationContext-DuYWebvA.js";import"./XMark-BWJopseo.js";import"./Alert-Pz1mMbfe.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Box-B_1ucAEI.js";import"./Checkmark-uHeVskEM.js";import"./ChevronDown-Bw2TG6jd.js";import"./useFormField-BKpVC0Pg.js";const q=({name:p,label:m,selectValues:n,validate:d=[],readOnly:F=!1,description:D,hideValueOnDisable:V=!1,onChange:u,disabled:c,className:j,hideLabel:v,isEdited:k,size:O})=>{const{formState:{errors:E}}=A(),{field:r}=I({name:p,rules:{validate:z.useMemo(()=>C(d),[d])}});if(F){const t=n.map(l=>l.props).find(l=>l.value===r.value),N=t?t.children:void 0;return e.jsx($,{value:N,label:m,hideLabel:v,isEdited:k,size:O})}const i=r.value||"",f=!n.map(t=>t.props.value).includes(i)&&i!=="";return f&&console.warn(`No corresponding option found for value '${i}'`),e.jsxs(B,{size:"small",className:j,error:_(E,p),label:m,description:D,value:V&&c||f?"":r.value,disabled:c,onChange:t=>{u&&u(t),r.onChange(t)},hideLabel:v,children:[e.jsx("option",{style:{display:"none"}}),",",n]})};q.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<any>",elements:[{name:"any"}]}],raw:"React.ReactElement<any>[]"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},hideValueOnDisable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""}}};const Ve={title:"form-hooks/SelectField",component:q,tags:["autodocs"],decorators:M({testSelectFieldpre:"value3"})},o={args:{label:"Dette er en dropdown",name:"testSelectField",description:"Dette er en nærmere beskrivelse",selectValues:[e.jsx("option",{value:"value1",children:"Test 1"},"1"),e.jsx("option",{value:"value2",children:"Test 2"},"2")]}},a={args:{label:"Dette er en dropdown der verdi er valgt",name:"testSelectFieldpre",selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}},s={args:{label:"Dette er en dropdown som er readonly",name:"testSelectFieldpre",readOnly:!0,selectValues:[e.jsx("option",{value:"value3",children:"Test 3"},"1"),e.jsx("option",{value:"value4",children:"Test 4"},"2")]}};var y,g,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
