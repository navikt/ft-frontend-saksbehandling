import{c as O}from"./clsx.m-CH7BE6MN.js";import{r as j,R as o}from"./index-Dl6G-zuu.js";function u(t,s,e){return e?typeof e=="string"?{[`--__ac-${t}-${s}-xs`]:e}:Object.fromEntries(Object.entries(e).map(([a,r])=>[`--__ac-${t}-${s}-${a}`,r])):{}}const w=t=>{switch(t){case"px":return"1px"}return t},g=(t,s,e,a,r)=>s.split(" ").map((n,l,i)=>{if(t==="margin-inline"&&n==="full")return`calc((100vw - ${100/i.length}%)/-2)`;if(t==="padding-inline"&&n==="full")return`calc((100vw - ${100/i.length}%)/2)`;let c=`var(--a-${e}-${n})`;return a.includes(n)&&(c=w(n)),r?n==="0"?"0":`calc(-1 * ${c})`:c}).join(" ");function b(t,s,e,a,r=!1,n=[]){if(!a)return{};if(typeof a=="string")return{[`--__ac-${t}-${s}-xs`]:g(s,a,e,n,r)};const l={};return Object.entries(a).forEach(([i,c])=>{l[`--__ac-${t}-${s}-${i}`]=g(s,c,e,n,r)}),l}var _=function(t,s){var e={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&s.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)s.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(e[a[r]]=t[a[r]]);return e};const p=j.forwardRef((t,s)=>{var{as:e="div",className:a,align:r,justify:n,wrap:l=!0,gap:i,style:c,direction:f="row"}=t,d=_(t,["as","className","align","justify","wrap","gap","style","direction"]);const y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c),{"--__ac-stack-wrap":l?"wrap":"nowrap"}),b("stack","gap","spacing",i)),u("stack","direction",f)),u("stack","align",r)),u("stack","justify",n));return o.createElement(e,Object.assign({},d,{ref:s,style:y,className:O("navds-stack",a,{"navds-vstack":f==="column","navds-hstack":f==="row"})}))});export{p as S};
