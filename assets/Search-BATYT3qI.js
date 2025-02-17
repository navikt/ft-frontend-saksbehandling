import{c as m}from"./clsx-B-dksMZM.js";import{r as i,R as n}from"./index-Dxs5m6lS.js";import{B as R,c as X}from"./Button-D0flVHf8.js";import{u as q}from"./Theme-D6t0sq75.js";import{L as J,a as Q,E as U}from"./Label-g0SsZd4P.js";import{o as W}from"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import{u as Y}from"./create-context-B5rPGqtO.js";import{a as M}from"./Loader-BHKWc60O.js";import{u as Z}from"./useFormField-CUgZtuoq.js";import{u as ee}from"./useId-B9cQ8Pho.js";import{S as P}from"./XMark-HQCrC0kG.js";var re=function(r,l){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&l.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)l.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a};const L=i.forwardRef((r,l)=>{var{title:a,titleId:e}=r,t=re(r,["title","titleId"]);let c=ee();return c=a?e||"title-"+c:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":c},t),a?i.createElement("title",{id:c},a):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))}),$=i.createContext(null);var te=function(r,l){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&l.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)l.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a};const D=i.forwardRef((r,l)=>{var a,{className:e,children:t,disabled:c,onClick:p}=r,b=te(r,["className","children","disabled","onClick"]);const f=M("Search"),d=i.useContext($);if(d===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:y,variant:v,handleClick:s}=d;return n.createElement(R,Object.assign({type:"submit"},b,{ref:l,size:y,variant:v==="secondary"?"secondary":"primary",className:m("navds-search__button-search",e),disabled:(a=d==null?void 0:d.disabled)!==null&&a!==void 0?a:c,onClick:X(p,s),icon:n.createElement(L,Object.assign({},t?{"aria-hidden":!0}:{title:f("search")}))}),t)});var ae=function(r,l){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&l.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)l.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a};const ne=i.forwardRef((r,l)=>{const{inputProps:a,size:e="medium",inputDescriptionId:t,errorId:c,showErrorMsg:p,hasError:b}=Z(r,"searchfield"),{className:f,hideLabel:d=!0,label:y,description:v,value:s,clearButtonLabel:j,onClear:_,clearButton:F=!0,children:I,variant:h="primary",defaultValue:g,onChange:E,onSearchClick:O,htmlSize:w}=r,V=ae(r,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),A=q(!1),C=i.useRef(null),G=Y(C,l),k=M("Search"),[S,H]=i.useState(g??""),B=o=>{s===void 0&&H(o),E==null||E(o)},x=o=>{var u,N;_==null||_(o),B(""),(N=(u=C.current)===null||u===void 0?void 0:u.focus)===null||N===void 0||N.call(u)},K=()=>{O==null||O(`${s??S}`)},z=F&&!a.disabled&&(s??S),T=()=>A?n.createElement(R,{className:"navds-search__button-clear",variant:"tertiary-neutral",size:e==="medium"?"small":"xsmall",icon:n.createElement(P,{"aria-hidden":!0}),title:j||k("clear"),hidden:!z,onClick:o=>x({trigger:"Click",event:o})}):n.createElement("button",{type:"button",onClick:o=>x({trigger:"Click",event:o}),className:"navds-search__button-clear",hidden:!z},n.createElement("span",{className:"navds-sr-only"},j||k("clear")),n.createElement(P,{"aria-hidden":!0}));return n.createElement("div",{onKeyDown:o=>{var u;o.key==="Escape"&&(!((u=C.current)===null||u===void 0)&&u.value&&o.preventDefault(),x({trigger:"Escape",event:o}))},className:m(f,"navds-form-field",`navds-form-field--${e}`,"navds-search",{"navds-search--error":b,"navds-search--disabled":a.disabled,"navds-search--with-size":w})},n.createElement(J,{htmlFor:a.id,size:e,className:m("navds-form-field__label",{"navds-sr-only":d})},y),!!v&&n.createElement(Q,{className:m("navds-form-field__description",{"navds-sr-only":d}),id:t,size:e,as:"div"},v),n.createElement("div",{className:"navds-search__wrapper"},n.createElement("div",{className:"navds-search__wrapper-inner"},h==="simple"&&n.createElement(L,{"aria-hidden":!0,className:"navds-search__search-icon"}),n.createElement("input",Object.assign({ref:G},W(V,["error","errorId","size","readOnly"]),a,{value:s??S,onChange:o=>B(o.target.value),type:"search",className:m(f,"navds-search__input",`navds-search__input--${h}`,"navds-text-field__input","navds-body-short",`navds-body-short--${e}`)},w?{size:Number(w)}:{})),n.createElement(T,null)),n.createElement($.Provider,{value:{size:e,disabled:a.disabled,variant:h,handleClick:K}},I||h!=="simple"&&n.createElement(D,null))),n.createElement("div",{className:"navds-form-field__error",id:c,"aria-relevant":"additions removals","aria-live":"polite"},p&&n.createElement(U,{size:e,showIcon:!0},r.error)))});ne.Button=D;export{ne as S};
