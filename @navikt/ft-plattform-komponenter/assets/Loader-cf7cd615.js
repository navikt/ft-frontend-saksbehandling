import{R as l,r as i}from"./index-1b03fe98.js";import{c as j}from"./clsx.m-1229b3e0.js";import{L as R}from"./Label-845e62a7.js";let E=0;function N(e){const[a,n]=i.useState(e),t=e||a;return i.useEffect(()=>{a==null&&(E+=1,n(`aksel-id-${E}`))},[a]),t}const _=l["useId"];function P(e){var a;if(_!==void 0){const n=_();return e??n.replace(/(:)/g,"")}return(a=N(e))!==null&&a!==void 0?a:""}function $(e){return a=>{e.forEach(n=>{typeof n=="function"?n(a):n!=null&&(n.current=a)})}}const z=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L=z()?i.useLayoutEffect:()=>{},x=(e,a)=>Object.entries(e).filter(([n])=>!a.includes(n)).reduce((n,[t,o])=>Object.assign(Object.assign({},n),{[t]:o}),{});var S=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const k=i.forwardRef((e,a)=>{var{as:n="button",variant:t="primary",className:o,children:u,size:m="medium",loading:s=!1,disabled:r,style:v,icon:b,iconPosition:w="left"}=e,O=S(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const p=i.useRef(null),[c,h]=i.useState(),I=i.useMemo(()=>$([p,a]),[a]);L(()=>{if(s){const f=window.requestAnimationFrame(()=>{var d,g;h((g=(d=p==null?void 0:p.current)===null||d===void 0?void 0:d.getBoundingClientRect())===null||g===void 0?void 0:g.width)});return()=>{h(void 0),cancelAnimationFrame(f)}}},[s,u]);const y=r??c?x(O,["href"]):O;return l.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},y,{ref:I,onKeyUp:f=>{var d;(d=y.onKeyUp)===null||d===void 0||d.call(y,f),f.key===" "&&!r&&!c&&!f.isDefaultPrevented()&&f.currentTarget.click()},className:j(o,"navds-button",`navds-button--${t}`,`navds-button--${m}`,{"navds-button--loading":c,"navds-button--icon-only":!!b&&!u,"navds-button--disabled":r??c}),style:Object.assign(Object.assign({},v),{width:c}),disabled:r??c?!0:void 0}),c?l.createElement(T,{size:m}):l.createElement(l.Fragment,null,b&&w==="left"&&l.createElement("span",{className:"navds-button__icon"},b),u&&l.createElement(R,{as:"span",size:m==="medium"?"medium":"small"},u),b&&w==="right"&&l.createElement("span",{className:"navds-button__icon"},b)))}),C=k;var B=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const D=i.forwardRef((e,a)=>{var{className:n,size:t="medium",title:o="venter...",transparent:u=!1,variant:m="neutral",id:s}=e,r=B(e,["className","size","title","transparent","variant","id"]);const v=P();return l.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${v}`,ref:a,className:j("navds-loader",n,`navds-loader--${t}`,`navds-loader--${m}`,{"navds-loader--transparent":u}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},x(r,["children"])),l.createElement("title",{id:s??`loader-${v}`},o),l.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),l.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))}),T=D;export{C as B,$ as m,x as o,P as u};
//# sourceMappingURL=Loader-cf7cd615.js.map