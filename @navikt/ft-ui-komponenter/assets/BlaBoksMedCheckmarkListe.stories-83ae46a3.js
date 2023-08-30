import{j as s}from"./jsx-runtime-d079401a.js";import{P as B}from"./index-ed27dc2c.js";import{t as w}from"./index.es-638e181c.js";import{r as l,R as d}from"./index-f1f2c4b1.js";import{u as M}from"./useId-22918ea7.js";import{c as m}from"./clsx.m-1229b3e0.js";import{C as E}from"./ChevronDown-7f4beaff.js";import{F as y}from"./message-1526ff95.js";import{B as N}from"./BodyShort-433a8173.js";var P=globalThis&&globalThis.__rest||function(t,a){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const R=l.forwardRef((t,a)=>{var{className:o,size:e="medium",spacing:r,as:n="p"}=t,p=P(t,["className","size","spacing","as"]);return d.createElement(n,Object.assign({},p,{ref:a,className:m(o,"navds-body-long",{"navds-body-long--small":e==="small","navds-typo--spacing":!!r})}))}),S=R;var L=globalThis&&globalThis.__rest||function(t,a){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const z=l.forwardRef((t,a)=>{var{title:o,titleId:e}=t,r=L(t,["title","titleId"]);let n=M();return n=o?e||"title-"+n:void 0,l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:a,"aria-labelledby":n},r),o?l.createElement("title",{id:n},o):null,l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939Z",fill:"currentColor"}))}),T=z;var $=globalThis&&globalThis.__rest||function(t,a){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const D=l.forwardRef((t,a)=>{var{className:o,header:e,children:r,open:n,defaultOpen:p=!1,onClick:f,size:h="medium"}=t,g=$(t,["className","header","children","open","defaultOpen","onClick","size"]);const[x,j]=l.useState(p),c=n??x;return d.createElement("div",{className:m("navds-read-more",`navds-read-more--${h}`,o,{"navds-read-more--open":c})},d.createElement("button",Object.assign({},g,{ref:a,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":h==="small"}),onClick:I=>{n===void 0&&j(C=>!C),f==null||f(I)},"aria-expanded":c}),d.createElement(E,{className:"navds-read-more__expand-icon","aria-hidden":!0}),d.createElement("span",null,e)),d.createElement(S,{as:"div","aria-hidden":!c,className:m("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:h},r))}),F=D,q="_checkBlaIkon_e3roh_1",A="_container_e3roh_5",V="_rad_e3roh_11",u={checkBlaIkon:q,container:A,rad:V},v=({saksopplysninger:t})=>s.jsx("div",{className:u.container,children:t.map(a=>s.jsxs("div",{className:u.rad,children:[!a.readMoreContent&&s.jsx(T,{className:u.checkBlaIkon,height:35,width:35}),s.jsxs(N,{size:"small",children:[a.readMoreContent&&s.jsx(F,{size:"small",header:s.jsx(y,{id:a.textId}),children:a.readMoreContent}),!a.readMoreContent&&s.jsx(y,{id:a.textId})]})]},a.textId))}),O=v;try{v.displayName="BlaBoksMedCheckmarkListe",v.__docgenInfo={description:"",displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{defaultValue:null,description:"",name:"saksopplysninger",required:!0,type:{name:"Saksopplysning[]"}}}}}catch{}const Z=w({}),ee={title:"BlaBoksMedCheckmarkListe",component:O},i=()=>s.jsx(B,{value:Z,children:s.jsx(O,{saksopplysninger:[{textId:"1",readMoreContent:s.jsx("div",{children:"test"})},{textId:"2",readMoreContent:s.jsx("div",{children:"test2"})}]})});var k,b,_;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <BlaBoksMedCheckmarkListe saksopplysninger={[{
    textId: '1',
    readMoreContent: <div>test</div>
  }, {
    textId: '2',
    readMoreContent: <div>test2</div>
  }]} />
  </RawIntlProvider>`,...(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const te=["Default"];export{i as Default,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=BlaBoksMedCheckmarkListe.stories-83ae46a3.js.map
