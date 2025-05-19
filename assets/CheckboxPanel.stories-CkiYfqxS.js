import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as G,a as L,r as B}from"./formUtils-D-F-RWtg.js";import{r as v}from"./index-DNHX5htx.js";import{u as J,a as Q}from"./index.esm-CkkEN1rj.js";import{i as U}from"./index.es-BiGVFuAv.js";import{a as W,C as k}from"./Checkbox-BaSR81FM.js";import{H as y}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Button-Cc809GDC.js";import"./Loader-42dkOmtz.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./Provider-BZs7ODlm.js";import"./Label-CYbek38p.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-Bs6SSTCM.js";import"./dayjs.min-Cke173X9.js";import"./Alert-Ja4tf6sE.js";import"./useId-SP_zdaIa.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./XMark-6H9iuGiv.js";import"./PersonPencilFill-DqunLdn1.js";import"./Box-C3b4VC_S.js";import"./BasePrimitive-gBgyIEwX.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Modal-DdoS0OAm.js";import"./floating-ui.react-D9M9yXN8.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./Date.Input-D651xWgA.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";const _=({label:I,name:m,description:N,validate:b=[],checkboxes:p,onChange:h,disabled:g=!1,isReadOnly:c=!1,isHorizontal:x=!1,parse:n=f=>f,hideLegend:z=!1,isEdited:A=!1,size:u="small"})=>{const{formState:{errors:f}}=J(),{field:r}=Q({name:m,rules:{validate:v.useMemo(()=>G(b),[b])}}),K=a.jsxs(y,{justify:"center",gap:"2",children:[I,c&&A&&a.jsx(U,{})]});return a.jsxs(W,{name:m,description:N,value:r.value!==void 0?r.value:[],onChange:e=>{h&&h(e),r.onChange(e)},size:u,legend:K,error:L(f,m),hideLegend:z,children:[!x&&p.map(e=>a.jsxs(v.Fragment,{children:[a.jsx(k,{size:u,value:n(e.value),disabled:e.disabled||g||c,children:e.label}),(r.value??[]).includes(n(e.value))&&e.element]},e.value)),x&&a.jsxs(a.Fragment,{children:[a.jsx(y,{gap:"4",children:p.map(e=>a.jsx(k,{size:u,value:n(e.value),disabled:e.disabled||g||c,children:e.label},e.value))}),p.filter(e=>(r.value??[]).includes(n(e.value))).map(e=>a.jsx(v.Fragment,{children:e.element},e.value))]})]})};_.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const we={component:_,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,isHorizontal:!1},decorators:B({checkboxpanelpre:["verdi1","verdi3"]})},d=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],t={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:d,name:"checkboxpanel"}},l={args:{label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:d,name:"checkboxpanelpre"}},s={args:{isReadOnly:!0,isEdited:!0,checkboxes:d,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},o={args:{isHorizontal:!0,checkboxes:d,name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper"}},i={args:{checkboxes:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}],name:"radio",label:"Dette er checkboxpanel med innhold"}};var C,D,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel'
  }
}`,...(j=(D=t.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var V,q,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre'
  }
}`,...(T=(q=l.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var S,M,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...(E=(M=s.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var R,w,H;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper'
  }
}`,...(H=(w=o.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var O,F,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const He=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedInnhold"];export{t as Default,o as HorisontalKnapper,i as MedInnhold,l as MedVerdi,s as ReadOnlyMedOverstyrtMarkering,He as __namedExportsOrder,we as default};
