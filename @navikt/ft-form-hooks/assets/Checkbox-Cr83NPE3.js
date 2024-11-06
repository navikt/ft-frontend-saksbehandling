import{F as E,c as b,u as j,o as m,i as k,B as y,e as p}from"./decorators-CsUnBlMd.js";import{r as u,R as c}from"./index-DRjF_FHU.js";import{F as N}from"./Fieldset-RWdTFsQu.js";var P=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l};const C=u.createContext(null),G=u.forwardRef((e,t)=>{var l,n,{value:a,defaultValue:r,onChange:i=()=>{},children:o,className:v}=e,d=P(e,["value","defaultValue","onChange","children","className"]);const s=u.useContext(E),[O,g]=u.useState(r??[]),_=h=>{const f=a??O,x=f.includes(h)?f.filter(w=>w!==h):[...f,h];a===void 0&&g(x),i(x)};return c.createElement(N,Object.assign({},d,{ref:t,className:b(v,"navds-checkbox-group",`navds-checkbox-group--${(n=(l=d.size)!==null&&l!==void 0?l:s==null?void 0:s.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),c.createElement(C.Provider,{value:{value:a,defaultValue:r,toggleValue:_}},c.createElement("div",{className:"navds-checkboxes"},o)))});var S=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l};const V=e=>{const t=u.useContext(C),l=j(m(e,["description","children"]),"checkbox"),{inputProps:n,readOnly:a}=l,r=S(l,["inputProps","readOnly"]);return t&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},r),{readOnly:a,nested:!!t,inputProps:Object.assign(Object.assign({},n),{checked:t!=null&&t.value?t.value.includes(e.value):e.checked,defaultChecked:t!=null&&t.defaultValue?t.defaultValue.includes(e.value):e.defaultChecked,onChange:i=>{var o;a||((o=e.onChange)===null||o===void 0||o.call(e,i),t==null||t.toggleValue(e.value))},onClick:i=>{var o;if(a){i.preventDefault();return}(o=e==null?void 0:e.onClick)===null||o===void 0||o.call(e,i)}})})},L=u.forwardRef((e,t)=>{const{inputProps:l,hasError:n,size:a,readOnly:r,nested:i}=V(e),o=k(),v=k();return c.createElement("div",{className:b(e.className,"navds-checkbox",`navds-checkbox--${a}`,{"navds-checkbox--error":n,"navds-checkbox--disabled":l.disabled,"navds-checkbox--readonly":r})},c.createElement("input",Object.assign({},m(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),m(l,["aria-invalid"]),{type:"checkbox",className:"navds-checkbox__input",ref:d=>{var s;d&&(d.indeterminate=(s=e.indeterminate)!==null&&s!==void 0?s:!1),typeof t=="function"?t(d):t!=null&&(t.current=d)},"aria-labelledby":b(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[v]:e.description})})),c.createElement("label",{htmlFor:l.id,className:"navds-checkbox__label"},c.createElement("span",{className:"navds-checkbox__icon"},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},c.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),c.createElement("span",{className:b("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},c.createElement(y,{as:"span",id:o,size:a,className:"navds-checkbox__label-text","aria-hidden":!0},!i&&r&&c.createElement(p,null),e.children),e.description&&c.createElement(y,{as:"span",id:v,size:a,className:"navds-form-field__subdescription navds-checkbox__description","aria-hidden":!0},e.description))))});export{L as C,G as a};
