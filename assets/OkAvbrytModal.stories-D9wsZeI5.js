import{j as e,Q as r,X as m,A as a,n as p}from"./iframe-B2NvIhob.js";import{m as g}from"./nb_NO-D4PbtzLx.js";import"./preload-helper-PPVm8Dsz.js";const o=p(g),l=({text:s,okButtonText:d,showModal:c,cancel:n,submit:u})=>e.jsxs(r,{width:"small",open:c,"aria-label":s,onClose:n,children:[e.jsx(r.Body,{children:e.jsx(m,{size:"small",level:"2",children:s})}),e.jsxs(r.Footer,{children:[e.jsx(a,{variant:"primary",size:"small",onClick:u,autoFocus:!0,type:"button",children:d||o.formatMessage({id:"OkAvbrytModal.Ok"})}),e.jsx(a,{variant:"secondary",size:"small",onClick:n,type:"button",children:o.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});l.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:i}=__STORYBOOK_MODULE_ACTIONS__,x={component:l},t={args:{text:"Dette er ein test",showModal:!0,submit:i("submit"),cancel:i("cancel")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('submit'),
    cancel: action('cancel')
  }
}`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,x as default};
