import{r as u,R as p}from"./index-DRjF_FHU.js";const y=u.createContext(void 0),g=()=>u.useContext(y);var x=function(t,n){var c={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(c[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(c[e[r]]=t[e[r]]);return c};function b(t,n){return`${t} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function j(t={}){const{name:n,hookName:c="useContext",providerName:e="Provider",errorMessage:r,defaultValue:v}=t,i=u.createContext(v),O=u.forwardRef((l,o)=>{var{children:f}=l,a=x(l,["children"]);const s=p.useMemo(()=>a,Object.values(a));return p.createElement(i.Provider,{value:o?Object.assign(Object.assign({},s),{ref:o}):s},f)});function d(l=!0){var o;const f=u.useContext(i);if(!f&&l){const a=new Error(r??b(c,e));throw a.name="ContextError",(o=Error.captureStackTrace)===null||o===void 0||o.call(Error,a,d),a}return f}return i.displayName=n,[O,d]}export{j as c,g as u};
