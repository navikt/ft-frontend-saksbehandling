import{c as y}from"./clsx-B-dksMZM.js";import{r as O,R as l}from"./index-Dxs5m6lS.js";import{L as h}from"./Loader-BHKWc60O.js";import{L as g}from"./Label-g0SsZd4P.js";import{o as P}from"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";function _(e,o,{checkForDefaultPrevented:a=!0}={}){return function(n){if(e==null||e(n),a===!1||!n.defaultPrevented)return o==null?void 0:o(n)}}var j=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const L=O.forwardRef((e,o)=>{var{as:a="button",variant:t="primary",className:n,children:c,size:d="medium",loading:s=!1,disabled:r,icon:i,iconPosition:m="left",onKeyUp:p}=e,u=j(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const b=r||s?P(u,["href"]):u,v=f=>{f.key===" "&&!r&&!s&&f.currentTarget.click()};return l.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},b,{ref:o,onKeyUp:_(p,v),className:y(n,"navds-button",`navds-button--${t}`,`navds-button--${d}`,{"navds-button--loading":s,"navds-button--icon-only":!!i&&!c,"navds-button--disabled":r??s}),disabled:r??s?!0:void 0}),i&&m==="left"&&l.createElement("span",{className:"navds-button__icon"},i),s&&l.createElement(h,{size:d}),c&&l.createElement(g,{as:"span",size:d==="medium"?"medium":"small"},c),i&&m==="right"&&l.createElement("span",{className:"navds-button__icon"},i))});export{L as B,_ as c};
