import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{a as i}from"./chunk-454WOBUV-DWuJqIWT.js";import{t as k}from"./index.es-DEOVdAI7.js";import{m as v}from"./nb_NO-RinjUwPG.js";import{M as r}from"./Modal-DG-zKmW5.js";import{H as g}from"./Label-B_886cWq.js";import{B as a}from"./Button-Bc3IqpUI.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-Cy5oc4iT.js";import"./index-CYM-y3Gt.js";import"./clsx-B-dksMZM.js";import"./composeEventHandlers-DeH74NdU.js";import"./Loader-DHfbJM2T.js";import"./useId-_r1gyR_8.js";const n=k(v),c=({text:o,okButtonText:u,showModal:y,cancel:s,submit:b})=>t.jsxs(r,{width:"small",open:y,"aria-label":o,onClose:s,children:[t.jsx(r.Body,{children:t.jsx(g,{size:"small",children:o})}),t.jsxs(r.Footer,{children:[t.jsx(a,{variant:"primary",size:"small",onClick:b,autoFocus:!0,type:"button",children:u||n.formatMessage({id:"OkAvbrytModal.Ok"})}),t.jsx(a,{variant:"secondary",size:"small",onClick:s,type:"button",children:n.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),p=c;c.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const F={title:"OkAvbrytModal",component:p},f=()=>t.jsx(p,{text:"Dette er ein test",showModal:!0,submit:i("button-click"),cancel:i("button-click")}),e=f.bind({});var m,l,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => <OkAvbrytModal text="Dette er ein test" showModal submit={action('button-click')} cancel={action('button-click')} />`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,F as default};