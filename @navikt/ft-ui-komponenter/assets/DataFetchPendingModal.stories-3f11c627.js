var M=Object.defineProperty;var x=(a,t,s)=>t in a?M(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var i=(a,t,s)=>(x(a,typeof t!="symbol"?t+"":t,s),s);import{j as e}from"./jsx-runtime-d079401a.js";import{P as _}from"./index-ed27dc2c.js";import{t as g}from"./index.es-638e181c.js";import{r as v}from"./index-f1f2c4b1.js";import{F as f,a as b,b as r}from"./FlexContainer-a327ed41.js";import{m as y}from"./nb_NO-0812cb9e.js";import{M as d}from"./Provider-ecff8de2.js";import{L as j}from"./Loader-fdc9af38.js";import{L as D}from"./Label-bc5049e0.js";import"./bind-00d0877e.js";import"./index-c74c9f7f.js";import"./clsx.m-1229b3e0.js";import"./useId-22918ea7.js";import"./Detail-6b8648da.js";const F="_divider_1yo3l_1",P="_modal_1yo3l_10",L="_messageRow_1yo3l_13",w="_modalText_1yo3l_16",l={divider:F,modal:P,messageRow:L,modalText:w},E=g(y),R=()=>{},T=2e3;class o extends v.Component{constructor(s){super(s);i(this,"timer");this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,T)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:s}=this.state;if(!s)return null;const{pendingMessage:u}=this.props;return e.jsx(d,{width:"small",open:!0,"aria-label":u,onClose:R,children:e.jsx(d.Body,{children:e.jsx(f,{children:e.jsxs(b,{children:[e.jsxs(r,{children:[e.jsx(j,{size:"large"}),e.jsx("div",{className:l.divider})]}),e.jsx(r,{className:l.modalText,children:e.jsx(D,{size:"small",children:E.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})})}}const h=o;try{o.displayName="DataFetchPendingModal",o.__docgenInfo={description:`DataFetchPendingModal

Denne modalen vises når det går mer enn to sekund å polle etter serverdata.`,displayName:"DataFetchPendingModal",props:{pendingMessage:{defaultValue:null,description:"",name:"pendingMessage",required:!0,type:{name:"string"}}}}}catch{}const I=g({"DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen..."}),Y={title:"DataFetchPendingModal",component:h},N=()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(_,{value:I,children:e.jsx(h,{pendingMessage:"Henting av data pågår"})})}),n=N.bind({});var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  width: '200px'
}}>
    <RawIntlProvider value={intl}>
      <DataFetchPendingModal pendingMessage="Henting av data pågår" />
    </RawIntlProvider>
  </div>`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const K=["Default"];export{n as Default,K as __namedExportsOrder,Y as default};
//# sourceMappingURL=DataFetchPendingModal.stories-3f11c627.js.map
