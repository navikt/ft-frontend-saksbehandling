import{j as e,M as r,U as m,t as n,o as p}from"./iframe-DvV4wlhN.js";import{m as g}from"./nb_NO-D4PbtzLx.js";import"./preload-helper-PPVm8Dsz.js";const o=p(g),l=({text:s,okButtonText:d,showModal:c,cancel:a,submit:u})=>e.jsxs(r,{width:"small",open:c,"aria-label":s,onClose:a,children:[e.jsx(r.Body,{children:e.jsx(m,{size:"small",level:"2",children:s})}),e.jsxs(r.Footer,{children:[e.jsx(n,{variant:"primary",size:"small",onClick:u,autoFocus:!0,type:"button",children:d||o.formatMessage({id:"OkAvbrytModal.Ok"})}),e.jsx(n,{variant:"secondary",size:"small",onClick:a,type:"button",children:o.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});l.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:i}=__STORYBOOK_MODULE_ACTIONS__,M={component:l},t={args:{text:"Dette er ein test",showModal:!0,submit:i("submit"),cancel:i("cancel")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('submit'),
    cancel: action('cancel')
  }
}`,...t.parameters?.docs?.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,M as default};
