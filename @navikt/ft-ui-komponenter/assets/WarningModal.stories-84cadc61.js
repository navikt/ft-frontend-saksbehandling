import{j as e}from"./jsx-runtime-69eee039.js";import{a as u}from"./chunk-AY7I2SME-c7b6cf8a.js";import{F as _,a as r}from"./FlexColumn-280f1109.js";import{M as o,B as x}from"./Provider-be2f4c5d.js";import{E as g}from"./ExclamationmarkTriangleFill-d0c7282e.js";import{H as f}from"./Heading-a8bb21fc.js";import{B as h}from"./BodyShort-f8afc3ae.js";import"./index-7c191284.js";import"./bind-55992fd8.js";import"./clsx.m-1229b3e0.js";import"./index-ecbee218.js";import"./index-b3a39e30.js";import"./useId-a6b0b736.js";import"./Loader-7a63090f.js";import"./Label-798a9410.js";const y="_divider_uc1tl_1",b="_image_uc1tl_11",M="_modal_uc1tl_15",j="_text_uc1tl_18",k="_knapp_uc1tl_22",v="_submitButton_uc1tl_26",t={divider:y,image:b,modal:M,text:j,knapp:k,submitButton:v},s=({bodyText:l,headerText:n,showModal:p,submit:i})=>e.jsx(o,{className:t.modal,open:p,closeButton:!1,onClose:i,shouldCloseOnOverlayClick:!1,children:e.jsx(o.Content,{children:e.jsxs(_,{children:[e.jsx(r,{children:e.jsx(g,{height:25,width:25,className:t.image,color:"var(--a-orange-600)"})}),e.jsxs(r,{className:t.text,children:[n&&e.jsx(f,{size:"small",children:n}),e.jsx(h,{size:"small",children:l})]}),e.jsx(r,{className:t.knapp,children:e.jsx(x,{size:"small",variant:"primary",className:t.submitButton,onClick:i,autoFocus:!0,type:"button",children:"OK"})})]})})});try{s.displayName="WarningModal",s.__docgenInfo={description:`WarningModal

Modal med advarselikon og som viser en valgfri tekst i tillegg til knappen OK.`,displayName:"WarningModal",props:{headerText:{defaultValue:null,description:"",name:"headerText",required:!1,type:{name:"string"}},bodyText:{defaultValue:null,description:"",name:"bodyText",required:!0,type:{name:"string"}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"() => void"}}}}}catch{}o.setAppElement&&o.setAppElement("body");const I={title:"WarningModal"},a=()=>e.jsx(s,{bodyText:"Dette er en advarsel",showModal:!0,submit:u("button-click")});var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <WarningModal bodyText="Dette er en advarsel" showModal submit={action('button-click')} />`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,I as default};
//# sourceMappingURL=WarningModal.stories-84cadc61.js.map
