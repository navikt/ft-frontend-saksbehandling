import{c as w}from"./clsx-B-dksMZM.js";import{r as u,R as m}from"./index-B5OHeJSP.js";import{c as x,m as j,u as P}from"./create-context-BlrHNsQj.js";import{c as S}from"./Popover-CgZ7HliT.js";import{a as I}from"./Label-ZYbyet41.js";import{c as _}from"./Button-C4dKKha_.js";import{u as E}from"./useId-B9OmVTHV.js";import{d as C}from"./Textarea-DQ7w4yc6.js";import{u as k}from"./useId-e75EoDiw.js";import{u as F}from"./Checkmark-uHeVskEM.js";var N=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const L=u.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=N(e,["title","titleId"]);let s=E();return s=r?n||"title-"+s:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?u.createElement("title",{id:s},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"}))});var z=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const $=u.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=z(e,["title","titleId"]);let s=E();return s=r?n||"title-"+s:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?u.createElement("title",{id:s},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))}),[D,V,K,R]=S(),[M,h]=x({name:"TabsContext",hookName:"useTabsContext",providerName:"TabsProvider",errorMessage:"Tabs.List, Tabs.Tag and Tabs.Panel needs to be wrapped within <Tabs>"});function B({value:e,disabled:a=!1,onFocus:r,onClick:n},t){const{id:s,setSelectedValue:o,selectionFollowsFocus:c,focusedValue:d,setFocusedValue:i,selectedValue:y,makeTabId:O,makeTabPanelId:p}=h(),{register:v}=R({disabled:a,value:e}),b=e===y,l=()=>{i(e),c&&o(e)};return{ref:j([v,t]),isSelected:b,isFocused:d===e,id:O(s,e),controlsId:p(s,e),onClick:_(n,()=>o(e)),onFocus:a?void 0:_(r,l)}}var A=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const H=u.forwardRef((e,a)=>{var r,n,{className:t,as:s="button",label:o,icon:c,value:d,onClick:i,onFocus:y,disabled:O,id:p}=e,v=A(e,["className","as","label","icon","value","onClick","onFocus","disabled","id"]);const b=B({value:d,onClick:i,onFocus:y,disabled:O},a),l=h();return!o&&!c?(console.error("<Tabs.Tab/> needs label and/or icon"),null):m.createElement(s,Object.assign({ref:b.ref},v,{className:w("navds-tabs__tab",`navds-tabs__tab--${(r=l==null?void 0:l.size)!==null&&r!==void 0?r:"medium"}`,`navds-tabs__tab-icon--${l==null?void 0:l.iconPosition}`,t,{"navds-tabs__tab--icon-only":c&&!o,"navds-tabs__tab--fill":l.fill}),role:"tab",type:"button","aria-selected":b.isSelected,"data-state":b.isSelected?"active":"inactive",tabIndex:b.isFocused?0:-1,"aria-controls":(n=v["aria-controls"])!==null&&n!==void 0?n:b.controlsId,id:p??b.id,onFocus:b.onFocus,onClick:b.onClick}),m.createElement(I,{as:"span",className:"navds-tabs__tab-inner",size:l==null?void 0:l.size},m.createElement("span",{"aria-hidden":!!o},c),m.createElement("span",null,o)))});function T({hidden:e,onClick:a,dir:r}){return m.createElement("div",{className:w("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":e}),onClick:a,"aria-hidden":!0},r==="left"?m.createElement(L,null):m.createElement($,null))}function W(e){const[a,r]=u.useState({start:!1,end:!1}),n=u.useMemo(()=>C(()=>{if(!(e!=null&&e.current))return;const{scrollWidth:t,clientWidth:s}=e.current,o=e.current.scrollLeft,c=o>1,d=o<t-s-1;r(i=>c===i.start&&d===i.end?i:{start:c,end:d})}),[e]);return u.useEffect(()=>{var t,s,o;const c=()=>n(),d=(o=(s=(t=e.current)===null||t===void 0?void 0:t.ownerDocument)!==null&&s!==void 0?s:document)!==null&&o!==void 0?o:window;d.addEventListener("resize",c);let i;return typeof ResizeObserver<"u"&&e.current&&(i=new ResizeObserver(c),i.observe(e.current)),()=>{d.removeEventListener("resize",c),i==null||i.disconnect(),n.clear()}},[e,n]),u.useEffect(()=>{n()}),{update:n,start:a.start,end:a.end,show:a.end||a.start,scrollLeft:()=>{e.current&&(e.current.scrollLeft-=100)},scrollRight:()=>{e.current&&(e.current.scrollLeft+=100)}}}function q(){const{focusedValue:e,loop:a,selectedValue:r,setFocusedValue:n}=h(),t=V();return{onKeyDown:u.useCallback(o=>{const c=t.values().findIndex(l=>l.value===e),p={ArrowLeft:()=>{var l;const f=t.prevEnabled(c,a);(l=f==null?void 0:f.node)===null||l===void 0||l.focus()},ArrowRight:()=>{var l;const f=t.nextEnabled(c,a);(l=f==null?void 0:f.node)===null||l===void 0||l.focus()},Home:()=>{var l;const f=t.firstEnabled();(l=f==null?void 0:f.node)===null||l===void 0||l.focus()},End:()=>{var l;const f=t.lastEnabled();(l=f==null?void 0:f.node)===null||l===void 0||l.focus()}},v=o.shiftKey||o.ctrlKey||o.altKey||o.metaKey,b=p[o.key];b&&!v?(o.preventDefault(),b(o)):o.key==="Tab"&&r&&setTimeout(()=>n(r))},[t,e,a,r,n])}}var G=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const J=u.forwardRef((e,a)=>{var{className:r,onKeyDown:n}=e,t=G(e,["className","onKeyDown"]);const{onKeyDown:s}=q(),o=u.useRef(null),c=P(o,a),d=W(o);return m.createElement("div",{className:"navds-tabs__tablist-wrapper"},d.show&&m.createElement(T,{dir:"left",hidden:!d.start,onClick:d.scrollLeft}),m.createElement("div",Object.assign({ref:c},t,{onScroll:d.update,className:w("navds-tabs__tablist",r),role:"tablist","aria-orientation":"horizontal",onKeyDown:_(n,s)})),d.show&&m.createElement(T,{dir:"right",hidden:!d.end,onClick:d.scrollRight}))});function Q({value:e}){const{id:a,selectedValue:r,makeTabId:n,makeTabPanelId:t}=h();return{labelledbyId:n(a,e),hidden:r!==e,id:t(a,e)}}var U=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const X=u.forwardRef((e,a)=>{var r,{className:n,value:t,children:s,lazy:o=!0,id:c}=e,d=U(e,["className","value","children","lazy","id"]);const i=Q({value:t});return m.createElement("div",Object.assign({ref:a},d,{className:w("navds-tabs__tabpanel",n),role:"tabpanel",tabIndex:0,"aria-labelledby":(r=d["aria-labelledby"])!==null&&r!==void 0?r:i.labelledbyId,id:c??i.id,hidden:i.hidden,"data-state":i.hidden?"inactive":"active"}),o&&i.hidden?null:s)});function Y({onChange:e,value:a,defaultValue:r="",id:n}){const[t,s]=u.useState(r),[o,c]=F({defaultValue:r,value:a,onChange:e});u.useEffect(()=>{a!=null&&s(a)},[a]);const d=k();return{id:`tabs-${n??d}`,selectedValue:o,setSelectedValue:c,focusedValue:t,setFocusedValue:s,makeTabId:Z,makeTabPanelId:ee}}function Z(e,a){return`${e}--tab-${a}`}function ee(e,a){return`${e}--tabpanel-${a}`}var ne=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const g=u.forwardRef((e,a)=>{var{className:r,children:n,size:t="medium",defaultValue:s="",value:o,onChange:c,id:d,selectionFollowsFocus:i=!1,loop:y=!0,iconPosition:O="left",fill:p=!1}=e,v=ne(e,["className","children","size","defaultValue","value","onChange","id","selectionFollowsFocus","loop","iconPosition","fill"]);const b=K(),l=Y({defaultValue:s,value:o,onChange:c,id:d}),f=Object.assign(Object.assign({},l),{selectionFollowsFocus:i,loop:y,size:t,iconPosition:O,fill:p});return m.createElement(D,{value:b},m.createElement(M,Object.assign({},f),m.createElement("div",Object.assign({ref:a},v,{id:d,className:w("navds-tabs",r,`navds-tabs--${t}`)}),n)))});g.Tab=H;g.List=J;g.Panel=X;export{g as T};
