import{r as s,R as i}from"./index-Dl6G-zuu.js";import{u as j}from"./useId-BnKOV0D5.js";import{c as L}from"./clsx.m-CH7BE6MN.js";import{c as R}from"./composeEventHandlers-DeH74NdU.js";import{o as x,L as I}from"./Loader-gn7SkvvK.js";import{L as P}from"./Label-9MCByIrQ.js";const S=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};var k=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const B=s.forwardRef((e,r)=>{var{title:n,titleId:t}=e,o=k(e,["title","titleId"]);let a=j();return a=n?t||"title-"+a:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:r,"aria-labelledby":a},o),n?s.createElement("title",{id:a},n):null,s.createElement("path",{d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),q=B;function C(e){return r=>{e.forEach(n=>{typeof n=="function"?n(r):n!=null&&(n.current=r)})}}function N(...e){return i.useCallback(C(e),e)}var z=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const M=s.forwardRef((e,r)=>{var{as:n="button",variant:t="primary",className:o,children:a,size:m="medium",loading:v=!1,disabled:l,style:w,icon:d,iconPosition:y="left"}=e,g=z(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const u=s.useRef(null),[c,O]=s.useState(),E=N(u,r);S(()=>{if(v){const f=window.requestAnimationFrame(()=>{var b,p;O((p=(b=u==null?void 0:u.current)===null||b===void 0?void 0:b.getBoundingClientRect())===null||p===void 0?void 0:p.width)});return()=>{O(void 0),cancelAnimationFrame(f)}}},[v,a]);const h=l??c?x(g,["href"]):g,_=f=>{f.key===" "&&!l&&!c&&f.currentTarget.click()};return i.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},h,{ref:E,onKeyUp:R(h.onKeyUp,_),className:L(o,"navds-button",`navds-button--${t}`,`navds-button--${m}`,{"navds-button--loading":c,"navds-button--icon-only":!!d&&!a,"navds-button--disabled":l??c}),style:Object.assign(Object.assign({},w),{width:c}),disabled:l??c?!0:void 0}),c?i.createElement(I,{size:m}):i.createElement(i.Fragment,null,d&&y==="left"&&i.createElement("span",{className:"navds-button__icon"},d),a&&i.createElement(P,{as:"span",size:m==="medium"?"medium":"small"},a),d&&y==="right"&&i.createElement("span",{className:"navds-button__icon"},d)))}),A=M;export{A as B,q as X,N as u};
