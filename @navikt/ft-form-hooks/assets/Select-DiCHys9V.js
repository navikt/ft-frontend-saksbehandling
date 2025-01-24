import{f as _,u as g,c as f,L as I,e as j,B as S,o as x,E as N}from"./formUtils-BWIOZvHk.js";import{r as c,R as a}from"./index-CZMpeKRu.js";var z=function(r,n){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l};const R=c.forwardRef((r,n)=>{var{title:l,titleId:e}=r,t=z(r,["title","titleId"]);let s=_();return s=l?e||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},t),l?c.createElement("title",{id:s},l):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var D=function(r,n){var l={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(l[e[t]]=r[e[t]]);return l};const A=c.forwardRef((r,n)=>{const{inputProps:l,errorId:e,showErrorMsg:t,hasError:s,size:o,inputDescriptionId:u,readOnly:d}=g(r,"select"),{children:y,label:p,className:b,description:m,htmlSize:h,hideLabel:v=!1,style:w}=r,O=D(r,["children","label","className","description","htmlSize","hideLabel","style"]),E={onMouseDown:i=>{d&&(i.preventDefault(),i.target.focus())},onKeyDown:i=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(i.key)&&i.preventDefault()}};return a.createElement("div",{className:f(b,"navds-form-field",`navds-form-field--${o}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":d,"navds-select--error":s,"navds-select--readonly":d})},a.createElement(I,{htmlFor:l.id,size:o,className:f("navds-form-field__label",{"navds-sr-only":v})},d&&a.createElement(j,null),p),!!m&&a.createElement(S,{className:f("navds-form-field__description",{"navds-sr-only":v}),id:u,size:o,as:"div"},m),a.createElement("div",{className:"navds-select__container",style:w},a.createElement("select",Object.assign({},x(O,["error","errorId","size","readOnly"]),l,E,{ref:n,className:f("navds-select__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:h}),y),a.createElement(R,{className:"navds-select__chevron","aria-hidden":!0})),a.createElement("div",{className:"navds-form-field__error",id:e,"aria-relevant":"additions removals","aria-live":"polite"},t&&a.createElement(N,{size:o,showIcon:!0},r.error)))});export{A as S};
