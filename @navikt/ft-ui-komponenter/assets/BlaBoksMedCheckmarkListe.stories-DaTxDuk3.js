import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{P as I}from"./index-BN80osRB.js";import{t as w}from"./index.es-BTmDC9-H.js";import{r as s,R as f}from"./index-CTjT7uj6.js";import{u as M}from"./useId-BFxX0aRd.js";import{a as R,B}from"./Label-nOS_MSd0.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as N}from"./composeEventHandlers-DeH74NdU.js";import{S as E}from"./ChevronDown-Cwt6cPhU.js";import{M as x}from"./message-ChasfQRN.js";function y(t,n=[]){const a=s.useRef(t);return s.useEffect(()=>{a.current=t}),s.useCallback((...e)=>{var r;return(r=a.current)===null||r===void 0?void 0:r.call(a,...e)},n)}function S({value:t,defaultValue:n,onChange:a}){const e=y(a),[r,d]=s.useState(n),c=t!==void 0,i=c?t:r,m=y(u=>{const l=typeof u=="function"?u(i):u;c||d(l),e(l)},[c,e,i]);return[i,m]}var P=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(a[e[r]]=t[e[r]]);return a};const z=s.forwardRef((t,n)=>{var{title:a,titleId:e}=t,r=P(t,["title","titleId"]);let d=M();return d=a?e||"title-"+d:void 0,s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":d},r),a?s.createElement("title",{id:d},a):null,s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var L=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(a[e[r]]=t[e[r]]);return a};const D=s.forwardRef((t,n)=>{var{className:a,header:e,children:r,open:d,defaultOpen:c=!1,onClick:i,size:m="medium",onOpenChange:u}=t,_=L(t,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const[l,O]=S({defaultValue:c,value:d,onChange:u});return f.createElement("div",{className:v("navds-read-more",`navds-read-more--${m}`,a,{"navds-read-more--open":l})},f.createElement("button",Object.assign({},_,{ref:n,type:"button",className:v("navds-read-more__button","navds-body-short",{"navds-body-short--small":m==="small"}),onClick:N(i,()=>O(j=>!j)),"aria-expanded":l}),f.createElement(E,{className:"navds-read-more__expand-icon","aria-hidden":!0}),f.createElement("span",null,e)),f.createElement(R,{as:"div","aria-hidden":!l,className:v("navds-read-more__content",{"navds-read-more__content--closed":!l}),size:m},r))}),q="_checkBlaIkon_e3roh_1",A="_container_e3roh_5",V="_rad_e3roh_11",h={checkBlaIkon:q,container:A,rad:V},k=({saksopplysninger:t})=>o.jsx("div",{className:h.container,children:t.map(n=>o.jsxs("div",{className:h.rad,children:[!n.readMoreContent&&o.jsx(z,{className:h.checkBlaIkon,height:35,width:35}),o.jsxs(B,{size:"small",children:[n.readMoreContent&&o.jsx(D,{size:"small",header:o.jsx(x,{id:n.textId}),children:n.readMoreContent}),!n.readMoreContent&&o.jsx(x,{id:n.textId})]})]},n.textId))});k.__docgenInfo={description:"",methods:[],displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
}`,signature:{properties:[{key:"textId",value:{name:"string",required:!0}},{key:"readMoreContent",value:{name:"union",raw:"ReactNode | ReactNode[] | string",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"string"}],required:!0}}]}}],raw:"Saksopplysning[]"},description:""}}};const $=w({}),Y={title:"BlaBoksMedCheckmarkListe",component:k},p=()=>o.jsx(I,{value:$,children:o.jsx(k,{saksopplysninger:[{textId:"1",readMoreContent:o.jsx("div",{children:"test"})},{textId:"2",readMoreContent:o.jsx("div",{children:"test2"})}]})});p.__docgenInfo={description:"",methods:[],displayName:"Default"};var g,b,C;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <BlaBoksMedCheckmarkListe saksopplysninger={[{
    textId: '1',
    readMoreContent: <div>test</div>
  }, {
    textId: '2',
    readMoreContent: <div>test2</div>
  }]} />
  </RawIntlProvider>`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Z=["Default"];export{p as Default,Z as __namedExportsOrder,Y as default};