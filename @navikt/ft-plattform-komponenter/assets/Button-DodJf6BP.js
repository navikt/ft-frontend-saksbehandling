import{c as j,L as N}from"./Label--N9K7HfV.js";import{r as c,R as o}from"./index-DVXBtNgz.js";function x(e,n){const a=Object.entries(e).filter(([t])=>!n.includes(t));return Object.fromEntries(a)}const P=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};let E=0;function $(e){const[n,a]=c.useState(e),t=e||n;return c.useEffect(()=>{n==null&&(E+=1,a(`aksel-id-${E}`))},[n]),t}const _=o.useId;function k(e){var n;if(_!==void 0){const a=_();return e??a.replace(/(:)/g,"")}return(n=$(e))!==null&&n!==void 0?n:""}function z(e,n,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return n==null?void 0:n(r)}}function S(e){return n=>{e.forEach(a=>{typeof a=="function"?a(n):a!=null&&(a.current=n)})}}function B(...e){return o.useCallback(S(e),e)}var L=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const C=c.forwardRef((e,n)=>{var{className:a,size:t="medium",title:r="venter...",transparent:d=!1,variant:u="neutral",id:s}=e,l=L(e,["className","size","title","transparent","variant","id"]);const m=k();return o.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${m}`,ref:n,className:j("navds-loader",a,`navds-loader--${t}`,`navds-loader--${u}`,{"navds-loader--transparent":d}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},x(l,["children"])),o.createElement("title",{id:s??`loader-${m}`},r),o.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),o.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var T=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const U=c.forwardRef((e,n)=>{var{as:a="button",variant:t="primary",className:r,children:d,size:u="medium",loading:s=!1,disabled:l,style:m,icon:f,iconPosition:g="left"}=e,O=T(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const b=c.useRef(null),[i,h]=c.useState(),I=B(b,n);P(()=>{if(s){const v=window.requestAnimationFrame(()=>{var p,y;h((y=(p=b==null?void 0:b.current)===null||p===void 0?void 0:p.getBoundingClientRect())===null||y===void 0?void 0:y.width)});return()=>{h(void 0),cancelAnimationFrame(v)}}},[s,d]);const w=l??i?x(O,["href"]):O,R=v=>{v.key===" "&&!l&&!i&&v.currentTarget.click()};return o.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},w,{ref:I,onKeyUp:z(w.onKeyUp,R),className:j(r,"navds-button",`navds-button--${t}`,`navds-button--${u}`,{"navds-button--loading":i,"navds-button--icon-only":!!f&&!d,"navds-button--disabled":l??i}),style:Object.assign(Object.assign({},m),{width:i}),disabled:l??i?!0:void 0}),i?o.createElement(C,{size:u}):o.createElement(o.Fragment,null,f&&g==="left"&&o.createElement("span",{className:"navds-button__icon"},f),d&&o.createElement(N,{as:"span",size:u==="medium"?"medium":"small"},d),f&&g==="right"&&o.createElement("span",{className:"navds-button__icon"},f)))}),F=U;export{F as B,B as a,z as c,x as o,k as u};
