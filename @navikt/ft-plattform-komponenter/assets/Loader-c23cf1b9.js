import{R as l,r as s}from"./index-7c191284.js";import{c as h}from"./clsx.m-1229b3e0.js";import{L as I}from"./Label-798a9410.js";let O=0;function R(e){const[o,n]=s.useState(e),t=e||o;return s.useEffect(()=>{o==null&&(O+=1,n(`aksel-id-${O}`))},[o]),t}const E=l["useId"];function N(e){var o;if(E!==void 0){const n=E();return e??n.replace(/(:)/g,"")}return(o=R(e))!==null&&o!==void 0?o:""}function $(e){return o=>{e.forEach(n=>{typeof n=="function"?n(o):n!=null&&(n.current=o)})}}const L=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P=L()?s.useLayoutEffect:()=>{},z=(e,o)=>Object.entries(e).filter(([n])=>!o.includes(n)).reduce((n,[t,a])=>Object.assign(Object.assign({},n),{[t]:a}),{}),F=(e,o,n=typeof window<"u"?window:null)=>{s.useEffect(()=>{if(n)return n==null||n.addEventListener(e,o),()=>{n==null||n.removeEventListener(e,o)}},[e,o,n])};var S=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const B=s.forwardRef((e,o)=>{var{as:n="button",variant:t="primary",className:a,children:d,size:u="medium",loading:f=!1,disabled:r,style:v,icon:i,iconPosition:y="left"}=e,w=S(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const m=s.useRef(null),[c,g]=s.useState(),_=s.useMemo(()=>$([m,o]),[o]);P(()=>{if(f){const x=window.requestAnimationFrame(()=>{var b,p;g((p=(b=m==null?void 0:m.current)===null||b===void 0?void 0:b.getBoundingClientRect())===null||p===void 0?void 0:p.width)});return()=>{g(void 0),cancelAnimationFrame(x)}}},[f,d]);const j=r??c?z(w,["href"]):w;return l.createElement(n,Object.assign({},j,{ref:_,className:h(a,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":c,"navds-button--icon-only":!!i&&!d,"navds-button--disabled":r??c}),style:Object.assign(Object.assign({},v),{width:c}),disabled:r??c?!0:void 0}),c?l.createElement(T,{size:u}):l.createElement(l.Fragment,null,i&&y==="left"&&l.createElement("span",{className:"navds-button__icon"},i),d&&l.createElement(I,{as:"span",size:u==="medium"?"medium":"small","aria-live":"polite"},d),i&&y==="right"&&l.createElement("span",{className:"navds-button__icon"},i)))}),q=B;var D=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const M=s.forwardRef((e,o)=>{var{children:n,className:t,size:a="medium",title:d="venter...",transparent:u=!1,variant:f="neutral",id:r}=e,v=D(e,["children","className","size","title","transparent","variant","id"]);const i=N();return l.createElement("svg",Object.assign({"aria-labelledby":r??`loader-${i}`,ref:o,className:h("navds-loader",t,`navds-loader--${a}`,`navds-loader--${f}`,{"navds-loader--transparent":u}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},v),l.createElement("title",{id:r??`loader-${i}`},d),l.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),l.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))}),T=M;export{q as B,N as a,$ as m,z as o,F as u};
//# sourceMappingURL=Loader-c23cf1b9.js.map
