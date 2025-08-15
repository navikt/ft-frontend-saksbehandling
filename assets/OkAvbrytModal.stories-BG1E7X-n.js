import{j as e,M as r,O as m,G as o,m as p}from"./iframe-CQpo_2Xl.js";import{m as g}from"./nb_NO-D4PbtzLx.js";import"./preload-helper-D9Z9MdNV.js";const a=p(g),l=({text:s,okButtonText:c,showModal:d,cancel:n,submit:u})=>e.jsxs(r,{width:"small",open:d,"aria-label":s,onClose:n,children:[e.jsx(r.Body,{children:e.jsx(m,{size:"small",level:"2",children:s})}),e.jsxs(r.Footer,{children:[e.jsx(o,{variant:"primary",size:"small",onClick:u,autoFocus:!0,type:"button",children:c||a.formatMessage({id:"OkAvbrytModal.Ok"})}),e.jsx(o,{variant:"secondary",size:"small",onClick:n,type:"button",children:a.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});l.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:i}=__STORYBOOK_MODULE_ACTIONS__,k={component:l},t={args:{text:"Dette er ein test",showModal:!0,submit:i("button-click"),cancel:i("button-click")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('button-click'),
    cancel: action('button-click')
  }
}`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,k as default};
