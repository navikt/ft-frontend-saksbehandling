import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{a as s}from"./chunk-WFFRPTHA-B5TewAtn.js";import{t as k}from"./index.es-bt3Tzvg6.js";import{m as f}from"./nb_NO-RinjUwPG.js";import{M as r}from"./Modal-Enm85lFH.js";import{H as M}from"./Label-Byx6OIQx.js";import{B as l}from"./Button-B1SRIiFi.js";import"./index-Dl6G-zuu.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";import"./index-Bqcuc3cK.js";import"./index-D1_ZHIBm.js";import"./clsx-B-dksMZM.js";import"./composeEventHandlers-DeH74NdU.js";import"./Loader-BruvhSQF.js";import"./useId-BnKOV0D5.js";const n=k(f),a=({text:o,okButtonText:u,showModal:y,cancel:i,submit:b})=>t.jsxs(r,{width:"small",open:y,"aria-label":o,onClose:i,children:[t.jsx(r.Body,{children:t.jsx(M,{size:"small",children:o})}),t.jsxs(r.Footer,{children:[t.jsx(l,{variant:"primary",size:"small",onClick:b,autoFocus:!0,type:"button",children:u||n.formatMessage({id:"OkAvbrytModal.Ok"})}),t.jsx(l,{variant:"secondary",size:"small",onClick:i,type:"button",children:n.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),p=a;try{a.displayName="OkAvbrytModal",a.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,displayName:"OkAvbrytModal",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},okButtonText:{defaultValue:null,description:"",name:"okButtonText",required:!1,type:{name:"string"}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"() => void"}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"() => void"}}}}}catch{}const F={title:"OkAvbrytModal",component:p},v=()=>t.jsx(p,{text:"Dette er ein test",showModal:!0,submit:s("button-click"),cancel:s("button-click")}),e=v.bind({});var d,m,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => <OkAvbrytModal text="Dette er ein test" showModal submit={action('button-click')} cancel={action('button-click')} />`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,F as default};
