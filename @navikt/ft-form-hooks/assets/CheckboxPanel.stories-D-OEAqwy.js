import{j as a}from"./jsx-runtime-CLpGMVip.js";import{a as N,b as A,g as G,d as L,H as B,r as J}from"./formUtils-BWeRpG_s.js";import{r as b}from"./index-CZMpeKRu.js";import{K as Q}from"./index.es-CFZQi2ss.js";import{a as U,C as x}from"./Checkbox-zEb2TmNI.js";import"./v4-CtRu48qb.js";import"./index-Dy_t9DXc.js";import"./index-D-TIQtLp.js";import"./Fieldset-VYP8Y3aN.js";const F=({label:z,name:c,description:K,validate:f=[],checkboxes:u,onChange:v,disabled:h=!1,isReadOnly:p=!1,isHorizontal:g=!1,parse:n=m=>m,hideLegend:P=!1,isEdited:_=!1})=>{const{formState:{errors:m}}=N(),{field:r}=A({name:c,rules:{validate:b.useMemo(()=>G(f),[f])}}),I=a.jsxs(a.Fragment,{children:[z,p&&_&&a.jsx(Q,{})]});return a.jsxs(U,{name:c,description:K,value:r.value!==void 0?r.value:[],onChange:e=>{v&&v(e),r.onChange(e)},size:"small",legend:I,error:L(m,c),hideLegend:P,children:[!g&&u.map(e=>a.jsxs(b.Fragment,{children:[a.jsx(x,{value:n(e.value),disabled:e.disabled||h||p,children:e.label}),(r.value??[]).includes(n(e.value))&&e.element]},e.value)),g&&a.jsxs(a.Fragment,{children:[a.jsx(B,{gap:"4",children:u.map(e=>a.jsx(x,{value:n(e.value),disabled:e.disabled||h||p,children:e.label},e.value))}),u.filter(e=>(r.value??[]).includes(n(e.value))).map(e=>a.jsx(b.Fragment,{children:e.element},e.value))]})]})};F.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const se={component:F,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,isHorizontal:!1},decorators:J({checkboxpanelpre:["verdi1","verdi3"]})},i=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],s={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:i,name:"checkboxpanel"}},l={args:{label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:i,name:"checkboxpanelpre"}},t={args:{isReadOnly:!0,isEdited:!0,checkboxes:i,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},o={args:{isHorizontal:!0,checkboxes:i,name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper"}},d={args:{checkboxes:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}],name:"radio",label:"Dette er checkboxpanel med innhold"}};var k,y,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel'
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var D,j,V;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre'
  }
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,T,S;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...(S=(T=t.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var M,E,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper'
  }
}`,...(R=(E=o.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var H,O,w;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const le=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedInnhold"];export{s as Default,o as HorisontalKnapper,d as MedInnhold,l as MedVerdi,t as ReadOnlyMedOverstyrtMarkering,le as __namedExportsOrder,se as default};
