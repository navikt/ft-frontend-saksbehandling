var c=Object.defineProperty;var g=(e,t,o)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>g(e,typeof t!="symbol"?t+"":t,o);import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index.es-l9PArlO5.js";import{g as h}from"./withIntl-Dvo5g3Ub.js";import{r as M}from"./index-Dxs5m6lS.js";import{n as u}from"./index.es-80VfceJd.js";import{m as x}from"./nb_NO-7Llcbk-T.js";import{M as n}from"./Modal-B1D1msXx.js";import{H as f}from"./VStack-Vgssv_xf.js";import{L as b}from"./Loader-BHKWc60O.js";import{L as j}from"./Label-g0SsZd4P.js";import"./ReadOnlyIcon-DuqD_nIQ.js";import"./useId-B9cQ8Pho.js";import"./index.es-CJ4OkDRS.js";import"./index-CF594pY9.js";import"./Alert-BC6DEIhx.js";import"./clsx-B-dksMZM.js";import"./Button-D0flVHf8.js";import"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import"./ExclamationmarkTriangleFill-DkXWnTRW.js";import"./XMarkOctagonFill-Ct54z8PV.js";import"./XMark-HQCrC0kG.js";import"./PersonPencilFill-DeEWAwj3.js";import"./Box-B-JCHjPf.js";import"./Theme-D6t0sq75.js";import"./create-context-B5rPGqtO.js";import"./BasePrimitive-CCRtmZcj.js";import"./KeyVerticalFill-DGPAogWB.js";import"./Checkmark-ARqG-vXH.js";import"./ChevronDown-TCQpyZRB.js";import"./message-Bp2Fc9cS.js";import"./Checkbox-DhCgdUgZ.js";import"./useFormField-CUgZtuoq.js";import"./Fieldset-Cu2HjZAs.js";import"./Tag-DZhJsFcp.js";import"./Textarea-DaN6YZZY.js";import"./index-DMeSseuw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./useClientLayoutEffect-BVjwYvME.js";import"./Select-gs1Ydqxl.js";import"./Radio-njMJCp86.js";import"./useDatepicker-DzPz8RKu.js";import"./useDateTranslationContext-BEjj1I9s.js";import"./Provider-B4A31v_2.js";import"./DatePicker-7k2LUc-P.js";import"./floating-ui.react-BIOaLlQ7.js";import"./Popover-D50D0eUh.js";import"./TextField-CtgQS0x5.js";const D="_modalText_lvzd7_1",L={modalText:D},v=u(x),y=()=>{},_=2e3;class d extends M.Component{constructor(o){super(o);i(this,"timer");this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,_)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:o}=this.state;if(!o)return null;const{pendingMessage:l}=this.props;return r.jsx(n,{width:"small",open:!0,"aria-label":l,onClose:y,children:r.jsx(n.Body,{children:r.jsxs(f,{children:[r.jsx(b,{size:"large"}),r.jsx("div",{className:L.modalText,children:r.jsx(j,{size:"small",children:v.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}d.__docgenInfo={description:`DataFetchPendingModal

Denne modalen vises når det går mer enn to sekund å polle etter serverdata.`,methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"DataFetchPendingModal",props:{pendingMessage:{required:!0,tsType:{name:"string"},description:""}}};const T=h({"DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen..."}),E=e=>r.jsx("div",{style:{width:"200px"},children:r.jsx(e,{})}),ye={title:"ui-komponenter/DataFetchPendingModal",component:d,decorators:[E,T]},s={args:{pendingMessage:"Henting av data pågår"}};var a,m,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    pendingMessage: 'Henting av data pågår'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _e=["Default"];export{s as Default,_e as __namedExportsOrder,ye as default};
