import{a as n}from"./index-B-lxVbXh.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{n as g}from"./index.es-DIQk1_2L.js";import{m as b}from"./nb_NO-7Llcbk-T.js";import{M as r}from"./Modal-B1D1msXx.js";import{H as f}from"./Label-g0SsZd4P.js";import{B as s}from"./Button-D0flVHf8.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxs5m6lS.js";import"./floating-ui.react-BIOaLlQ7.js";import"./create-context-B5rPGqtO.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./clsx-B-dksMZM.js";import"./useDateTranslationContext-BEjj1I9s.js";import"./Provider-B4A31v_2.js";import"./useId-BdcioVLy.js";import"./Loader-BHKWc60O.js";import"./omit-B7stZg_p.js";import"./XMark-HQCrC0kG.js";import"./useId-B9cQ8Pho.js";const a=g(b),d=({text:o,okButtonText:c,showModal:u,cancel:i,submit:y})=>t.jsxs(r,{width:"small",open:u,"aria-label":o,onClose:i,children:[t.jsx(r.Body,{children:t.jsx(f,{size:"small",children:o})}),t.jsxs(r.Footer,{children:[t.jsx(s,{variant:"primary",size:"small",onClick:y,autoFocus:!0,type:"button",children:c||a.formatMessage({id:"OkAvbrytModal.Ok"})}),t.jsx(s,{variant:"secondary",size:"small",onClick:i,type:"button",children:a.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});d.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={title:"ui-komponenter/OkAvbrytModal",component:d},e={args:{text:"Dette er ein test",showModal:!0,submit:n("button-click"),cancel:n("button-click")}};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('button-click'),
    cancel: action('button-click')
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,R as default};
