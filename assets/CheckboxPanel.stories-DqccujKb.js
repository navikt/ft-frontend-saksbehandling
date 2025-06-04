import{l as G,m as L,r as f,j as a,n as B,C as k,H as y,o as J}from"./iframe-oRODIwkE.js";import{g as Q,a as U,r as W}from"./formUtils-meI2mzir.js";const _=({label:I,name:c,description:N,validate:b=[],checkboxes:u,onChange:h,disabled:g=!1,isReadOnly:m=!1,isHorizontal:x=!1,parse:n=v=>v,hideLegend:z=!1,isEdited:A=!1,size:p="small"})=>{const{formState:{errors:v}}=G(),{field:r}=L({name:c,rules:{validate:f.useMemo(()=>Q(b),[b])}}),K=a.jsxs(y,{justify:"center",gap:"2",children:[I,m&&A&&a.jsx(J,{})]});return a.jsxs(B,{name:c,description:N,value:r.value!==void 0?r.value:[],onChange:e=>{h&&h(e),r.onChange(e)},size:p,legend:K,error:U(v,c),hideLegend:z,children:[!x&&u.map(e=>a.jsxs(f.Fragment,{children:[a.jsx(k,{size:p,value:n(e.value),disabled:e.disabled||g||m,children:e.label}),(r.value??[]).includes(n(e.value))&&e.element]},e.value)),x&&a.jsxs(a.Fragment,{children:[a.jsx(y,{gap:"4",children:u.map(e=>a.jsx(k,{size:p,value:n(e.value),disabled:e.disabled||g||m,children:e.label},e.value))}),u.filter(e=>(r.value??[]).includes(n(e.value))).map(e=>a.jsx(f.Fragment,{children:e.element},e.value))]})]})};_.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxProps"}],raw:"CheckboxProps[]"},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string | number) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},parse:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => any",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"any"}}},description:"",defaultValue:{value:"value => value",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isEdited:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const Z={component:_,tags:["autodocs"],args:{isReadOnly:!1,isEdited:!1,isHorizontal:!1},decorators:W({checkboxpanelpre:["verdi1","verdi3"]})},i=[{label:"Verdi 1",value:"verdi1"},{label:"Verdi 2",value:"verdi2"},{label:"Verdi 3",value:"verdi3"}],l={args:{label:"Dette er en checkboxpanel",description:"Dette er en beskrivelse",checkboxes:i,name:"checkboxpanel"}},s={args:{label:"Dette er en checkboxpanel der verdi er valgt",checkboxes:i,name:"checkboxpanelpre"}},t={args:{isReadOnly:!0,isEdited:!0,checkboxes:i,label:"Dette er en readonly checkboxpanel med overstyrt markering",name:"checkboxpanelpre"}},o={args:{isHorizontal:!0,checkboxes:i,name:"checkboxpanelpre",label:"Dette er en checkboxpanel med horisontale knapper"}},d={args:{checkboxes:[{label:"§14-7, 3. ledd",value:"14-7.3",element:a.jsx("div",{children:"Søker omfattes av §14-7, 3. ledd."})},{label:"§14-5, 2. ledd",value:"14-5.2",element:a.jsx("div",{children:"Søker omfattes av §14-5, 2. ledd."})}],name:"radio",label:"Dette er checkboxpanel med innhold"}};var C,D,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel',
    description: 'Dette er en beskrivelse',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanel'
  }
}`,...(j=(D=l.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var V,q,T;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en checkboxpanel der verdi er valgt',
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre'
  }
}`,...(T=(q=s.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var S,M,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    isEdited: true,
    checkboxes: defaultCheckboxes,
    label: 'Dette er en readonly checkboxpanel med overstyrt markering',
    name: 'checkboxpanelpre'
  }
}`,...(E=(M=t.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var R,w,H;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isHorizontal: true,
    checkboxes: defaultCheckboxes,
    name: 'checkboxpanelpre',
    label: 'Dette er en checkboxpanel med horisontale knapper'
  }
}`,...(H=(w=o.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var O,F,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const $=["Default","MedVerdi","ReadOnlyMedOverstyrtMarkering","HorisontalKnapper","MedInnhold"];export{l as Default,o as HorisontalKnapper,d as MedInnhold,s as MedVerdi,t as ReadOnlyMedOverstyrtMarkering,$ as __namedExportsOrder,Z as default};
