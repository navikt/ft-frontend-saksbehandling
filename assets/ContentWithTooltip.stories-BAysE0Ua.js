import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./index-DFtWylL1.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m="_contentWithTooltip_1fvf6_1",W="_contentWithTooltip__tooltipText_1fvf6_11",o={contentWithTooltip:m,contentWithTooltip__tooltipText:W,"contentWithTooltip__tooltipText--right":"_contentWithTooltip__tooltipText--right_1fvf6_27","contentWithTooltip--inline":"_contentWithTooltip--inline_1fvf6_34"},i=({tooltipText:r,tooltipDirectionRight:c,tooltipClassName:a,children:T,inline:d})=>{const h=n(o.contentWithTooltip__tooltipText,{[o["contentWithTooltip__tooltipText--right"]]:c}),_=n(o.contentWithTooltip,"contentWithTooltip",{[o["contentWithTooltip--inline"]]:d});return e.jsxs("div",{className:_,children:[T,e.jsx("div",{className:a||h,children:r})]})};i.__docgenInfo={description:"@deprecated Bruk heller Tooltip frå Aksel: https://aksel.nav.no/komponenter/core/tooltip",methods:[],displayName:"ContentWithTooltip",props:{tooltipText:{required:!0,tsType:{name:"string"},description:""},tooltipDirectionRight:{required:!1,tsType:{name:"boolean"},description:""},tooltipClassName:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""}}};const y={component:i},t=()=>e.jsx(i,{tooltipText:"Tooltip Tooltipsen",children:e.jsx("button",{type:"button",children:"Knapp med tooltip"})});t.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};var p,l,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => <ContentWithTooltip tooltipText="Tooltip Tooltipsen">
    <button type="button">Knapp med tooltip</button>
  </ContentWithTooltip>`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const g=["Tooltip"];export{t as Tooltip,g as __namedExportsOrder,y as default};
