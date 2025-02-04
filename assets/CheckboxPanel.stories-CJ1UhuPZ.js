import{j as a}from"./jsx-runtime-CLpGMVip.js";import{g as A,a as K,r as G}from"./formUtils-CxXcBrDP.js";import{r as f}from"./index-B5OHeJSP.js";import{u as L,a as B}from"./ReadOnlyIcon-3mCRcvzc.js";import{q as J}from"./index.es-B_RouKJz.js";import{a as Q,C as x}from"./Checkbox-CHErwGPi.js";import{H as U}from"./VStack-BtUbcfLF.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./Button-C4dKKha_.js";import"./clsx-B-dksMZM.js";import"./Loader-CoAqN6Lw.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./Provider-B_QIWjIe.js";import"./Label-ZYbyet41.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9OmVTHV.js";import"./index.es-Dh3mAfPy.js";import"./index-D9DDUrbY.js";import"./message-BcVJpMje.js";import"./Modal-C6iE4cX-.js";import"./floating-ui.react-FIE1On8Y.js";import"./create-context-BlrHNsQj.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./useDateTranslationContext-DuYWebvA.js";import"./XMark-BWJopseo.js";import"./Alert-Pz1mMbfe.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Panel-BzsK_xG0.js";import"./Checkmark-uHeVskEM.js";import"./ChevronDown-Bw2TG6jd.js";import"./useFormField-BKpVC0Pg.js";import"./Fieldset-Cs108nF-.js";import"./Theme-6IdwQf2V.js";const F=({label:P,name:m,description:z,validate:b=[],checkboxes:p,onChange:v,disabled:h=!1,isReadOnly:c=!1,isHorizontal:g=!1,parse:n=u=>u,hideLegend:_=!1,isEdited:I=!1})=>{const{formState:{errors:u}}=L(),{field:r}=B({name:m,rules:{validate:f.useMemo(()=>A(b),[b])}}),N=a.jsxs(a.Fragment,{children:[P,c&&I&&a.jsx(J,{})]});return a.jsxs(Q,{name:m,description:z,value:r.value!==void 0?r.value:[],onChange:e=>{v&&v(e),r.onChange(e)},size:"small",legend:N,error:K(u,m),hideLegend:_,children:[!g&&p.map(e=>a.jsxs(f.Fragment,{children:[a.jsx(x,{value:n(e.value),disabled:e.disabled||h||c,children:e.label}),(r.value??[]).includes(n(e.value))&&e.element]},e.value)),g&&a.jsxs(a.Fragment,{children:[a.jsx(U,{gap:"4",children:p.map(e=>a.jsx(x,{value:n(e.value),disabled:e.disabled||h||c,children:e.label},e.value))}),p.filter(e=>(r.value??[]).includes(n(e.value))).map(e=>a.jsx(f.Fragment,{children:e.element},e.value))]})]})};F.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const we={title:"form-hooks/CheckboxPanel",component:F,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,isHorizontal:!1},decorators:G({checkboxpanelpre:["verdi1","verdi3"]})},d=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],t={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:d,name:"checkboxpanel"}},s={args:{label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:d,name:"checkboxpanelpre"}},o={args:{isReadOnly:!0,isEdited:!0,checkboxes:d,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},l={args:{isHorizontal:!0,checkboxes:d,name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper"}},i={args:{checkboxes:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}],name:"radio",label:"Dette er checkboxpanel med innhold"}};var k,y,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel'
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var D,q,j;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre'
  }
}`,...(j=(q=s.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var V,T,S;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var M,E,R;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper'
  }
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var H,O,w;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    checkboxes: [{
      label: '§14-7, 3. ledd',
      value: '14-7.3',
      element: <div>Søker omfattes av §14-7, 3. ledd.</div>
    }, {
      label: '§14-5, 2. ledd',
      value: '14-5.2',
      element: <div>Søker omfattes av §14-5, 2. ledd.</div>
    }],
    name: 'radio',
    label: 'Dette er checkboxpanel med innhold'
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const Fe=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedInnhold"];export{t as Default,l as HorisontalKnapper,i as MedInnhold,s as MedVerdi,o as ReadOnlyMedOverstyrtMarkering,Fe as __namedExportsOrder,we as default};
