import{j as o}from"./jsx-runtime-CLpGMVip.js";import{g as B}from"./withIntl-Der6ZGvz.js";import"./index-CH5l-kYE.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as d,R as p}from"./index-CYQpqK1Q.js";import{a as S,B as E}from"./Label-DiqJXlxg.js";import{c as z}from"./Button-CrwUjO4x.js";import{S as P}from"./ChevronDown-hDpeiqxD.js";import{M as y}from"./message-DPiuJITo.js";import{u as L}from"./useId-qXXRNB6N.js";import"./index.es-BpqXpD3L.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Modal-DCYGPGIE.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./Loader-ByyM_uPu.js";import"./VStack-vyX7roGP.js";function x(t,a=[]){const r=d.useRef(t);return d.useEffect(()=>{r.current=t}),d.useCallback((...e)=>{var n;return(n=r.current)===null||n===void 0?void 0:n.call(r,...e)},a)}function D({value:t,defaultValue:a,onChange:r}){const e=x(r),[n,l]=d.useState(a),i=t!==void 0,c=i?t:n,m=x(u=>{const s=typeof u=="function"?u(c):u;i||l(s),e(s)},[i,e,c]);return[c,m]}var $=function(t,a){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const q=d.forwardRef((t,a)=>{var{title:r,titleId:e}=t,n=$(t,["title","titleId"]);let l=L();return l=r?e||"title-"+l:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},n),r?d.createElement("title",{id:l},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var A=function(t,a){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const T=d.forwardRef((t,a)=>{var{className:r,header:e,children:n,open:l,defaultOpen:i=!1,onClick:c,size:m="medium",onOpenChange:u}=t,k=A(t,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const[s,M]=D({defaultValue:i,value:l,onChange:u}),R=m==="small"?"small":"medium";return p.createElement("div",{className:v("navds-read-more",`navds-read-more--${m}`,r,{"navds-read-more--open":s}),"data-volume":"low"},p.createElement("button",Object.assign({},k,{ref:a,type:"button",className:v("navds-read-more__button","navds-body-short",{"navds-body-short--small":m==="small"}),onClick:z(c,()=>M(N=>!N)),"aria-expanded":s,"data-state":s?"open":"closed"}),p.createElement(P,{className:"navds-read-more__expand-icon","aria-hidden":!0}),p.createElement("span",null,e)),p.createElement(S,{as:"div","aria-hidden":!s,className:v("navds-read-more__content",{"navds-read-more__content--closed":!s}),size:R,"data-state":s?"open":"closed"},n))}),U="_checkBlaIkon_e3roh_1",V="_container_e3roh_5",F="_rad_e3roh_11",g={checkBlaIkon:U,container:V,rad:F},w=({saksopplysninger:t})=>o.jsx("div",{className:g.container,children:t.map((a,r)=>o.jsxs("div",{className:g.rad,children:[a.readMoreContent&&o.jsx(T,{size:"small",header:o.jsx(y,{id:a.textId}),children:a.readMoreContent}),!a.readMoreContent&&o.jsxs(o.Fragment,{children:[o.jsx(q,{className:g.checkBlaIkon,height:35,width:35}),o.jsx(E,{size:"small",children:o.jsx(y,{id:a.textId})})]})]},`BlaBoksMedCheckmarkListe-${a.textId}-${r}`))});w.__docgenInfo={description:"",methods:[],displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
}`,signature:{properties:[{key:"textId",value:{name:"string",required:!0}},{key:"readMoreContent",value:{name:"union",raw:"ReactNode | ReactNode[] | string",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"string"}],required:!0}}]}}],raw:"Saksopplysning[]"},description:""}}};const H=B({"tittel.1":"Tittel 1","tittel.2":"Tittel 2"}),ie={title:"BlaBoksMedCheckmarkListe",component:w,decorators:[H]},f={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:o.jsx("div",{children:"test test test test"})},{textId:"tittel.2",readMoreContent:o.jsx("div",{children:"innhold innhold innhold innhold"})}]}},h={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:void 0}]}};var _,C,b;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: <div>test test test test</div>
    }, {
      textId: 'tittel.2',
      readMoreContent: <div>innhold innhold innhold innhold</div>
    }]
  }
}`,...(b=(C=f.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var O,I,j;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: undefined
    }]
  }
}`,...(j=(I=h.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const ce=["Default","UtenContent"];export{f as Default,h as UtenContent,ce as __namedExportsOrder,ie as default};
