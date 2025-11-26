import{j as e,H as h,V as y,N as g,B as r}from"./iframe-DH7Rhn68.js";import"./preload-helper-PPVm8Dsz.js";const i=({label:c,value:l,horizontal:s=!1,size:d="small",fieldType:m="text"})=>{const p=s?h:y,u=s?"space-8":"0";return e.jsxs(p,{gap:u,align:"baseline",children:[e.jsx(g,{size:d,children:c}),m==="text"?e.jsx(r,{size:d,children:l}):e.jsx("div",{children:l})]})};i.__docgenInfo={description:"",methods:[],displayName:"LabeledValue",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"union",raw:"ReactElement | string | number",elements:[{name:"ReactElement"},{name:"string"},{name:"number"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fieldType:{required:!1,tsType:{name:"union",raw:"'text' | 'component'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'component'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const x={title:"LabeledValue",component:i,args:{size:"medium"}},t={args:{label:"Dette er en label",value:"Dette er en tekstverdi",fieldType:"text",horizontal:!1}},n={args:{label:"Dette er et dikt",value:e.jsxs("div",{children:[e.jsx(r,{children:"Liten?"}),e.jsx(r,{children:"Jeg?"}),e.jsx(r,{children:"Langtifra."}),e.jsx(r,{children:"Jeg er akkurat stor nok."}),e.jsx(r,{children:"Fyller meg selv helt"}),e.jsx(r,{children:"på langs og på tvers"}),e.jsx(r,{children:"fra øverst til nederst."}),e.jsx(r,{children:"Er du større enn deg selv"}),e.jsx(r,{children:"kanskje?"})]}),fieldType:"component",horizontal:!1}},a={args:{label:"Dette er en label:",value:"Dette er en tekstverdi",fieldType:"text",horizontal:!0}},o={args:{label:"Opptjeningsperiode:",value:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"01.01.1996 - 19.05.1996"}),e.jsx(r,{children:"4 måneder og 18 dager"})]}),fieldType:"component",horizontal:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en label',
    value: 'Dette er en tekstverdi',
    fieldType: 'text',
    horizontal: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et dikt',
    value: <div>
        <BodyShort>Liten?</BodyShort>
        <BodyShort>Jeg?</BodyShort>
        <BodyShort>Langtifra.</BodyShort>
        <BodyShort>Jeg er akkurat stor nok.</BodyShort>
        <BodyShort>Fyller meg selv helt</BodyShort>
        <BodyShort>på langs og på tvers</BodyShort>
        <BodyShort>fra øverst til nederst.</BodyShort>
        <BodyShort>Er du større enn deg selv</BodyShort>
        <BodyShort>kanskje?</BodyShort>
      </div>,
    fieldType: 'component',
    horizontal: false
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en label:',
    value: 'Dette er en tekstverdi',
    fieldType: 'text',
    horizontal: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opptjeningsperiode:',
    value: <>
        <BodyShort>01.01.1996 - 19.05.1996</BodyShort>
        <BodyShort>4 måneder og 18 dager</BodyShort>
      </>,
    fieldType: 'component',
    horizontal: true
  }
}`,...o.parameters?.docs?.source}}};const S=["VertikalMedTekstverdi","VertikalMedKomponent","HorisontalMedTekstverdi","HorisontalMedKomponent"];export{o as HorisontalMedKomponent,a as HorisontalMedTekstverdi,n as VertikalMedKomponent,t as VertikalMedTekstverdi,S as __namedExportsOrder,x as default};
