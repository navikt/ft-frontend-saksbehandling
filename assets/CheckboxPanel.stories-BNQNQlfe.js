import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as A,a as K,r as G}from"./formUtils-CViawxOi.js";import{r as f}from"./index-DNHX5htx.js";import{u as L,a as B}from"./index.esm-FZjZzVNN.js";import{o as J}from"./index.es-CGL24HZt.js";import{a as Q,C as x}from"./Checkbox-BaSR81FM.js";import{H as U}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Button-Cc809GDC.js";import"./Loader-42dkOmtz.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./Provider-BZs7ODlm.js";import"./Label-CYbek38p.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-Djg88Nde.js";import"./dayjs.min-Cke173X9.js";import"./Alert-Ja4tf6sE.js";import"./useId-SP_zdaIa.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./XMark-6H9iuGiv.js";import"./PersonPencilFill-DqunLdn1.js";import"./Box-C3b4VC_S.js";import"./BasePrimitive-gBgyIEwX.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Checkmark-DkINtRdf.js";import"./ChevronDown-6T9JsqER.js";import"./Modal-OqvqWSjt.js";import"./floating-ui.react-CQaPAoM5.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./Date.Input-D651xWgA.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";const F=({label:z,name:m,description:P,validate:v=[],checkboxes:p,onChange:b,disabled:h=!1,isReadOnly:c=!1,isHorizontal:g=!1,parse:t=u=>u,hideLegend:_=!1,isEdited:I=!1})=>{const{formState:{errors:u}}=L(),{field:r}=B({name:m,rules:{validate:f.useMemo(()=>A(v),[v])}}),N=a.jsxs(a.Fragment,{children:[z,c&&I&&a.jsx(J,{})]});return a.jsxs(Q,{name:m,description:P,value:r.value!==void 0?r.value:[],onChange:e=>{b&&b(e),r.onChange(e)},size:"small",legend:N,error:K(u,m),hideLegend:_,children:[!g&&p.map(e=>a.jsxs(f.Fragment,{children:[a.jsx(x,{value:t(e.value),disabled:e.disabled||h||c,children:e.label}),(r.value??[]).includes(t(e.value))&&e.element]},e.value)),g&&a.jsxs(a.Fragment,{children:[a.jsx(U,{gap:"4",children:p.map(e=>a.jsx(x,{value:t(e.value),disabled:e.disabled||h||c,children:e.label},e.value))}),p.filter(e=>(r.value??[]).includes(t(e.value))).map(e=>a.jsx(f.Fragment,{children:e.element},e.value))]})]})};F.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Oe={component:F,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,isHorizontal:!1},decorators:G({checkboxpanelpre:["verdi1","verdi3"]})},d=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],n={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:d,name:"checkboxpanel"}},s={args:{label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:d,name:"checkboxpanelpre"}},o={args:{isReadOnly:!0,isEdited:!0,checkboxes:d,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},l={args:{isHorizontal:!0,checkboxes:d,name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper"}},i={args:{checkboxes:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}],name:"radio",label:"Dette er checkboxpanel med innhold"}};var k,y,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel'
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var D,j,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre'
  }
}`,...(V=(j=s.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,T,S;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const we=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedInnhold"];export{n as Default,l as HorisontalKnapper,i as MedInnhold,s as MedVerdi,o as ReadOnlyMedOverstyrtMarkering,we as __namedExportsOrder,Oe as default};
