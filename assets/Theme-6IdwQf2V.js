import{c as p}from"./clsx-B-dksMZM.js";import{r as l,R as d}from"./index-B5OHeJSP.js";import{m as h,c as g}from"./create-context-BlrHNsQj.js";function b(t,s){const r=Object.assign({},s);for(const e in s){const n=t[e],o=s[e];/^on[A-Z]/.test(e)?n&&o?r[e]=(...a)=>{o(...a),n(...a)}:n&&(r[e]=n):e==="style"?r[e]=Object.assign(Object.assign({},n),o):e==="className"&&(r[e]=[n,o].filter(Boolean).join(" "))}return Object.assign(Object.assign({},t),r)}var O=function(t,s){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)s.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const f=l.forwardRef((t,s)=>{var r;const{children:e}=t,n=O(t,["children"]);if(l.isValidElement(e)){const o=Object.prototype.propertyIsEnumerable.call(e.props,"ref")?e.props.ref:e.ref;return l.cloneElement(e,Object.assign(Object.assign({},b(n,e.props)),{ref:s?h([s,o]):o}))}if(l.Children.count(e)>1){const o=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw o.name="SlotError",(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,o,f),o}return null}),[v,j]=g({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"}),R=l.forwardRef((t,s)=>{var r;const e=j(!1),{children:n,className:o,asChild:i=!1,theme:a=(r=e==null?void 0:e.theme)!==null&&r!==void 0?r:"light",hasBackground:c=!0}=t,m=c??(e===void 0&&t.theme!==void 0),u=i?f:"div";return d.createElement(v,{theme:a},d.createElement(u,{ref:s,className:p("navds-theme",o,a),"data-background":m},n))});export{f as S,R as T,j as u};
