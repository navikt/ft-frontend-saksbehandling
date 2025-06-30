import{j as e,M as r,O as y,F as o,l as b}from"./iframe-CGbGlz93.js";import{m as k}from"./nb_NO-D4PbtzLx.js";const a=b(k),u=({text:s,okButtonText:m,showModal:p,cancel:n,submit:g})=>e.jsxs(r,{width:"small",open:p,"aria-label":s,onClose:n,children:[e.jsx(r.Body,{children:e.jsx(y,{size:"small",children:s})}),e.jsxs(r.Footer,{children:[e.jsx(o,{variant:"primary",size:"small",onClick:g,autoFocus:!0,type:"button",children:m||a.formatMessage({id:"OkAvbrytModal.Ok"})}),e.jsx(o,{variant:"secondary",size:"small",onClick:n,type:"button",children:a.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});u.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:i}=__STORYBOOK_MODULE_ACTIONS__,O={component:u},t={args:{text:"Dette er ein test",showModal:!0,submit:i("button-click"),cancel:i("button-click")}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('button-click'),
    cancel: action('button-click')
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,O as default};
