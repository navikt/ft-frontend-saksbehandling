import{c as f}from"./clsx-B-dksMZM.js";import{r as v,R as s}from"./index-Dxs5m6lS.js";import{a as p}from"./Label-g0SsZd4P.js";var u=function(a,n){var r={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&n.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,t=Object.getOwnPropertySymbols(a);e<t.length;e++)n.indexOf(t[e])<0&&Object.prototype.propertyIsEnumerable.call(a,t[e])&&(r[t[e]]=a[t[e]]);return r};const b=v.forwardRef((a,n)=>{var{children:r,className:t,variant:e,size:o="medium",icon:l}=a,i=u(a,["children","className","variant","size","icon"]);const d=(e==null?void 0:e.endsWith("-filled"))&&"strong",c=(e==null?void 0:e.endsWith("-moderate"))&&"moderate",m=e==null?void 0:e.replace("-filled","").replace("-moderate","");return s.createElement(p,Object.assign({},i,{ref:n,as:"span",size:o==="medium"?"medium":"small",className:f("navds-tag",t,`navds-tag--${e}`,`navds-tag--${o}`,`navds-tag--${d||c||"outline"}`,`navds-tag--${m}`)}),l&&s.createElement("span",{className:"navds-tag__icon--left"},l),r)});export{b as T};
