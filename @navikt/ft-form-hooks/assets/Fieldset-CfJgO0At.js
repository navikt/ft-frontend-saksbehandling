import{u as R,F as m,c as l,o as v,L as j,R as x,e as w,B as N,E as z}from"./formUtils-BWIOZvHk.js";import{r as y,R as t}from"./index-CZMpeKRu.js";const L=e=>{const i=R(e,"fieldset"),{inputProps:n}=i;return Object.assign(Object.assign({},i),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var S=function(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)i.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const M=y.forwardRef((e,i)=>{var n,r,a;const{inputProps:b,errorId:c,showErrorMsg:u,hasError:O,size:s,readOnly:o,inputDescriptionId:g}=L(e),d=y.useContext(m),{children:p,className:E,errorPropagation:_=!0,legend:h,description:I,hideLegend:f,nativeReadOnly:P=!0}=e,F=S(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return t.createElement(m.Provider,{value:{error:_?(n=e.error)!==null&&n!==void 0?n:d==null?void 0:d.error:void 0,errorId:l({[c]:u,[(r=d==null?void 0:d.errorId)!==null&&r!==void 0?r:""]:!!(d!=null&&d.error)}),size:s,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:o}},t.createElement("fieldset",Object.assign({},v(F,["errorId","error","size","readOnly"]),v(b,["aria-describedby","aria-invalid"]),{ref:i,className:l(E,"navds-fieldset",`navds-fieldset--${s}`,{"navds-fieldset--error":O,"navds-fieldset--readonly":o})}),t.createElement(j,{size:s,as:"legend",className:l("navds-fieldset__legend",{"navds-sr-only":!!f})},o&&(P?t.createElement(x,null):t.createElement(w,null)),h),!!I&&t.createElement(N,{className:l("navds-fieldset__description",{"navds-sr-only":!!f}),id:g,size:s??"medium",as:"div"},e.description),p,t.createElement("div",{id:c,"aria-relevant":"additions removals","aria-live":"polite",className:"navds-fieldset__error"},u&&t.createElement(z,{size:s,showIcon:!0},e.error))))});export{M as F};
