import{r as i,R as h,a as ce}from"./index-DRjF_FHU.js";import{r as fe}from"./index-rX-Bn4lm.js";import{c as P}from"./clsx-B-dksMZM.js";import{j as me}from"./jsx-runtime-DR9Q75dM.js";import{D as he,H as pe}from"./Label-DOinVv3C.js";import{c as N}from"./composeEventHandlers-DeH74NdU.js";import{B as ge,S as be,u as ve}from"./Button-Bju1lT_0.js";import{u as ye,a as _e}from"./Loader-DC86TeWE.js";var we=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function Ee(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Oe(e={}){const{name:t,hookName:n="useContext",providerName:o="Provider",errorMessage:r,defaultValue:a}=e,l=i.createContext(a),d=i.forwardRef((p,m)=>{var{children:v}=p,g=we(p,["children"]);const _=h.useMemo(()=>g,Object.values(g));return h.createElement(l.Provider,{value:m?Object.assign(Object.assign({},_),{ref:m}):_},v)});function f(p=!0){var m;const v=i.useContext(l);if(!v&&p){const g=new Error(r??Ee(n,o));throw g.name="ContextError",(m=Error.captureStackTrace)===null||m===void 0||m.call(Error,g,f),g}return v}return l.displayName=t,[d,f]}const[xe,X]=Oe({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),Me=i.createContext(void 0),Ce=()=>i.useContext(Me);var D=function(){return D=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},D.apply(this,arguments)};var De=i.createContext(void 0);function Se(){var e=i.useContext(De);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}i.createContext(void 0);i.forwardRef(function(e,t){var n=Se(),o=n.classNames,r=n.styles,a=[o.button_reset,o.button];e.className&&a.push(e.className);var l=a.join(" "),d=D(D({},r.button_reset),r.button);return e.style&&Object.assign(d,e.style),me.jsx("button",D({},e,{ref:t,type:"button",className:l,style:d}))});i.createContext(void 0);i.createContext(void 0);var b;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(b||(b={}));b.Selected;b.Disabled;b.Hidden;b.Today;b.RangeEnd;b.RangeMiddle;b.RangeStart;b.Outside;i.createContext(void 0);i.createContext(void 0);i.createContext(void 0);const ke=i.createContext(null);i.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});function Pe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ne(e){return e instanceof Element||e instanceof Pe(e).Element}var I=typeof document<"u"?i.useLayoutEffect:i.useEffect;let j=!1,je=0;const q=()=>"floating-ui-"+je++;function Te(){const[e,t]=i.useState(()=>j?q():void 0);return I(()=>{e==null&&t(q())},[]),i.useEffect(()=>{j||(j=!0)},[]),e}const Ie=ce.useId,Le=Ie||Te;function Re(e){return"data-floating-ui-"+e}const Ae=i.createContext(null);function He(e){let{id:t,root:n}=e===void 0?{}:e;const[o,r]=i.useState(null),a=Le(),l=Fe(),d=i.useMemo(()=>({id:t,root:n,portalContext:l,uniqueId:a}),[t,n,l,a]),f=i.useRef();return I(()=>()=>{o==null||o.remove()},[o,d]),I(()=>{if(f.current===d)return;f.current=d;const{id:p,root:m,portalContext:v,uniqueId:g}=d,_=p?document.getElementById(p):null,C=Re("portal");if(_){const u=document.createElement("div");u.id=g,u.setAttribute(C,""),_.appendChild(u),r(u)}else{let u=m||(v==null?void 0:v.portalNode);u&&!Ne(u)&&(u=u.current),u=u||document.body;let w=null;p&&(w=document.createElement("div"),w.id=p,u.appendChild(w));const E=document.createElement("div");E.id=g,E.setAttribute(C,""),u=w||u,u.appendChild(E),r(E)}},[d]),o}const Fe=()=>i.useContext(Ae);var Be=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const ze=i.forwardRef((e,t)=>{var{className:n}=e,o=Be(e,["className"]);return h.createElement("div",Object.assign({},o,{ref:t,className:P("navds-modal__body",n)}))});var Ke=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Ve=i.forwardRef((e,t)=>{var{className:n}=e,o=Ke(e,["className"]);return h.createElement("div",Object.assign({},o,{ref:t,className:P("navds-modal__footer",n)}))});var qe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Z=i.forwardRef((e,t)=>{var{children:n,className:o,closeButton:r=!0}=e,a=qe(e,["children","className","closeButton"]);const l=X(),d=ye("Modal");return h.createElement("div",Object.assign({},a,{ref:t,className:P("navds-modal__header",o)}),l.closeHandler&&r&&h.createElement(ge,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:f=>{["Enter"," "].includes(f.key)&&f.repeat&&f.preventDefault()},onClick:l.closeHandler,icon:h.createElement(be,{title:d("close")})}),n)}),$=({clientX:e,clientY:t},{left:n,top:o,right:r,bottom:a})=>!(e<n||t<o||e>r||t>a);function $e(e,t,n){if(!(t&&t.closeButton===!1))return n?()=>{var o;return n()!==!1&&((o=e.current)===null||o===void 0?void 0:o.close())}:()=>{var o;return(o=e.current)===null||o===void 0?void 0:o.close()}}const k="navds-modal__document-body";function Ue(e,t,n){h.useEffect(()=>{if(n||!e.current||!t)return;e.current.open&&document.body.classList.add(k);const o=new MutationObserver(()=>{var r;!((r=e.current)===null||r===void 0)&&r.open?document.body.classList.add(k):document.body.classList.remove(k)});return o.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{o.disconnect(),document.body.classList.remove(k)}},[e,t,n])}const M=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function G(e,t){var n="on"+t.type.toLowerCase();return typeof e[n]=="function"&&e[n](t),e.dispatchEvent(t)}function S(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function J(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Ye(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function T(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Q(e){var t=["button","input","keygen","select","textarea"],n=t.map(function(l){return l+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=e.querySelector(n.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var r=e.querySelectorAll("*"),a=0;a<r.length&&!(r[a].tagName&&r[a].shadowRoot&&(o=Q(r[a].shadowRoot),o));a++);return o}function U(e){return e.isConnected||document.body.contains(e)}function ee(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=s.formSubmitter;if(!n){var o=e.target,r="getRootNode"in o&&o.getRootNode()||document;n=r.activeElement}return!n||n.form!==t?null:n}function We(e){if(!e.defaultPrevented){var t=e.target,n=s.imagemapUseValue,o=ee(e);n===null&&o&&(n=o.value);var r=S(t);if(r){var a=o&&o.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&(e.preventDefault(),n!=null?r.close(n):r.close())}}}function te(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",We,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,o=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),r,a=function(l){if(l.target===e){var d="DOMNodeRemoved";n|=l.type.substr(0,d.length)===d,window.clearTimeout(r),r=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}te.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&U(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),s.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Q(this.dialog_)),J(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!U(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!s.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,s.needsCentering(this.dialog_)?(s.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});G(this.dialog_,t)}};var s={};s.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"};s.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],o=null;try{o=n.cssRules}catch{}if(o)for(var r=0;r<o.length;++r){var a=o[r],l=null;try{l=document.querySelectorAll(a.selectorText)}catch{}if(!(!l||!Ye(l,e))){var d=a.style.getPropertyValue("top"),f=a.style.getPropertyValue("bottom");if(d&&d!=="auto"||f&&f!=="auto")return!0}}}return!1};s.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!s.isInlinePositionSetByStylesheet(e)};s.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new te(e)};s.registerDialog=function(e){e.showModal||s.forceRegisterDialog(e)};s.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(o){for(var r=0,a;a=o.removedNodes[r];++r)a instanceof Element&&(a.localName==="dialog"&&n.push(a),n=n.concat(a.querySelectorAll("dialog")))}),n.length&&e(n)}))};s.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};s.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};s.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,n;n=this.pendingDialogStack[t];++t)n.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var o=this.pendingDialogStack[0];if(o){var r=o.dialog.parentNode||document.body;r.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};s.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=S(e);){for(var t=0,n;n=this.pendingDialogStack[t];++t)if(n.dialog===e)return t===0;e=e.parentElement}return!1};s.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),J(t),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],o=n.dialog,r=o.compareDocumentPosition(t);return r&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};s.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&G(n.dialog,t)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};s.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};s.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};s.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};M&&(s.dm=new s.DialogManager,s.formSubmitter=null,s.imagemapUseValue=null);if(M){var Y=document.createElement("form");if(Y.setAttribute("method","dialog"),Y.method!=="dialog"){var x=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(x){var Xe=x.get;x.get=function(){return T(this)?"dialog":Xe.call(this)};var Ze=x.set;x.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Ze.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",x)}}document.addEventListener("click",function(e){if(s.formSubmitter=null,s.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var n=e.composedPath();t=n.shift()||t}if(!(!t||!T(t.form))){var o=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!o){if(!(t.localName==="input"&&t.type==="image"))return;s.imagemapUseValue=e.offsetX+","+e.offsetY}var r=S(t);r&&(s.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,n=S(t);if(!n){var o=ee(e),r=o&&o.getAttribute("formmethod")||t.getAttribute("method");r==="dialog"&&e.preventDefault()}});var Ge=HTMLFormElement.prototype.submit,Je=function(){if(!T(this))return Ge.call(this);var e=S(this);e&&e.close()};HTMLFormElement.prototype.submit=Je}var Qe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const W="navds-modal--polyfilled",L=i.forwardRef((e,t)=>{var n,o,{header:r,children:a,open:l,onBeforeClose:d,onCancel:f,closeOnBackdropClick:p,width:m,placement:v,portal:g,className:_,"aria-labelledby":C,style:u,onClick:w,onMouseDown:E}=e,R=Qe(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const c=i.useRef(null),oe=ve(c,t),A=_e(),ne=(n=Ce())===null||n===void 0?void 0:n.rootElement,y=He({root:ne}),re=i.useContext(ke),H=X(!1)!==void 0;H&&!re&&console.error("Modals should not be nested"),i.useEffect(()=>{M&&c.current&&y&&(s.registerDialog(c.current),c.current.classList.add(W)),c.current&&y&&(c.current.autofocus=!0)},[y]),i.useEffect(()=>{c.current&&y&&l!==void 0&&(l&&!c.current.open?c.current.showModal():!l&&c.current.open&&c.current.close())},[y,l]),Ue(c,y,H);const F=typeof m=="string"&&["small","medium"].includes(m),ae=P("navds-modal",_,{[W]:M,"navds-modal--autowidth":!m,[`navds-modal--${m}`]:F,"navds-modal--top":v==="top"&&!M}),ie=Object.assign(Object.assign({},u),F?{}:{width:m}),B=i.useRef({clientX:0,clientY:0}),se=O=>{B.current=O},z=p&&!M,le=O=>{if(O.target!==c.current)return;const V=c.current.getBoundingClientRect();$(B.current,V)||$(O,V)||d!==void 0&&d()===!1||c.current.close()},de=O=>{d&&d()===!1&&O.preventDefault()},ue=!C&&!R["aria-label"]&&r?A:C,K=h.createElement("dialog",Object.assign({},R,{ref:oe,className:ae,style:ie,onCancel:N(f,de),onClick:z?N(w,le):w,onMouseDown:z?N(E,se):E,"aria-labelledby":ue}),h.createElement(xe,{closeHandler:$e(c,r,d),ref:c},r&&h.createElement(Z,null,r.label&&h.createElement(he,{className:"navds-modal__label"},r.label),h.createElement(pe,{size:(o=r.size)!==null&&o!==void 0?o:"medium",level:"1",id:A},r.icon&&h.createElement("span",{className:"navds-modal__header-icon"},r.icon),r.heading)),a));return g?y?fe.createPortal(K,y):null:K});L.Header=Z;L.Body=ze;L.Footer=Ve;export{L as M};
