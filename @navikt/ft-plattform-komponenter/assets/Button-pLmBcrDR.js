import{c as E}from"./util-BH6J7QdW.js";import{r as c,R as r}from"./index-BBkUAzwr.js";import{L as N}from"./Label-Djdsp2ql.js";const x=(e,a)=>Object.entries(e).filter(([n])=>!a.includes(n)).reduce((n,[t,o])=>Object.assign(Object.assign({},n),{[t]:o}),{}),P=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};let _=0;function $(e){const[a,n]=c.useState(e),t=e||a;return c.useEffect(()=>{a==null&&(_+=1,n(`aksel-id-${_}`))},[a]),t}const j=r.useId;function k(e){var a;if(j!==void 0){const n=j();return e??n.replace(/(:)/g,"")}return(a=$(e))!==null&&a!==void 0?a:""}function z(e,a,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return a==null?void 0:a(o)}}function L(e){return a=>{e.forEach(n=>{typeof n=="function"?n(a):n!=null&&(n.current=a)})}}function S(...e){return r.useCallback(L(e),e)}var B=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const C=c.forwardRef((e,a)=>{var{className:n,size:t="medium",title:o="venter...",transparent:d=!1,variant:u="neutral",id:s}=e,l=B(e,["className","size","title","transparent","variant","id"]);const m=k();return r.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${m}`,ref:a,className:E("navds-loader",n,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":d}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},x(l,["children"])),r.createElement("title",{id:s??`loader-${m}`},o),r.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),r.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))}),T=C;var U=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const A=c.forwardRef((e,a)=>{var{as:n="button",variant:t="primary",className:o,children:d,size:u="medium",loading:s=!1,disabled:l,style:m,icon:f,iconPosition:g="left"}=e,O=U(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const b=c.useRef(null),[i,h]=c.useState(),I=S(b,a);P(()=>{if(s){const v=window.requestAnimationFrame(()=>{var p,y;h((y=(p=b==null?void 0:b.current)===null||p===void 0?void 0:p.getBoundingClientRect())===null||y===void 0?void 0:y.width)});return()=>{h(void 0),cancelAnimationFrame(v)}}},[s,d]);const w=l??i?x(O,["href"]):O,R=v=>{v.key===" "&&!l&&!i&&v.currentTarget.click()};return r.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},w,{ref:I,onKeyUp:z(w.onKeyUp,R),className:E(o,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":i,"navds-button--icon-only":!!f&&!d,"navds-button--disabled":l??i}),style:Object.assign(Object.assign({},m),{width:i}),disabled:l??i?!0:void 0}),i?r.createElement(T,{size:u}):r.createElement(r.Fragment,null,f&&g==="left"&&r.createElement("span",{className:"navds-button__icon"},f),d&&r.createElement(N,{as:"span",size:u==="medium"?"medium":"small"},d),f&&g==="right"&&r.createElement("span",{className:"navds-button__icon"},f)))}),M=A;export{M as B,S as a,z as c,x as o,k as u};
