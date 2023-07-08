import{r as b,R as T,a as Ve,g as Ye}from"./index-ebeaab24.js";import{c as Z}from"./clsx.m-1229b3e0.js";import{r as Xe}from"./index-9c09ad76.js";import{p as Te}from"./index-f50b85d6.js";import{u as Ze}from"./useId-e957bc34.js";import{L as Ge}from"./Loader-1a535254.js";import{L as Je}from"./Label-63b3f2b2.js";var Qe=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const et=b.forwardRef((e,t)=>{var{title:n,titleId:o}=e,a=Qe(e,["title","titleId"]);let c=Ze();return c=n?o||"title-"+c:void 0,b.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":c},a),n?b.createElement("title",{id:c},n):null,b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),tt=et;function Ae(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}const nt=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ot=nt()?b.useLayoutEffect:()=>{},rt=(e,t)=>Object.entries(e).filter(([n])=>!t.includes(n)).reduce((n,[o,a])=>Object.assign(Object.assign({},n),{[o]:a}),{});var at=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const lt=b.forwardRef((e,t)=>{var{as:n="button",variant:o="primary",className:a,children:c,size:v="medium",loading:l=!1,disabled:i,style:s,icon:d,iconPosition:h="left"}=e,S=at(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const E=b.useRef(null),[C,M]=b.useState(),L=b.useMemo(()=>Ae([E,t]),[t]);ot(()=>{if(l){const K=window.requestAnimationFrame(()=>{var U,F;M((F=(U=E==null?void 0:E.current)===null||U===void 0?void 0:U.getBoundingClientRect())===null||F===void 0?void 0:F.width)});return()=>{M(void 0),cancelAnimationFrame(K)}}},[l,c]);const P=i??C?rt(S,["href"]):S;return T.createElement(n,Object.assign({},P,{ref:L,className:Z(a,"navds-button",`navds-button--${o}`,`navds-button--${v}`,{"navds-button--loading":C,"navds-button--icon-only":!!d&&!c,"navds-button--disabled":i??C}),style:Object.assign(Object.assign({},s),{width:C}),disabled:i??C?!0:void 0}),C?T.createElement(Ge,{size:v}):T.createElement(T.Fragment,null,d&&h==="left"&&T.createElement("span",{className:"navds-button__icon"},d),c&&T.createElement(Je,{as:"span",size:v==="medium"?"medium":"small","aria-live":"polite"},c),d&&h==="right"&&T.createElement("span",{className:"navds-button__icon"},d)))}),st=lt;var me={exports:{}},j={},ve={exports:{}},x={},he={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n=/input|select|textarea|button|object|iframe/;function o(i){var s=i.offsetWidth<=0&&i.offsetHeight<=0;if(s&&!i.innerHTML)return!0;try{var d=window.getComputedStyle(i);return s?d.getPropertyValue("overflow")!=="visible"||i.scrollWidth<=0&&i.scrollHeight<=0:d.getPropertyValue("display")=="none"}catch{return console.warn("Failed to inspect element style"),!1}}function a(i){for(var s=i,d=i.getRootNode&&i.getRootNode();s&&s!==document.body;){if(d&&s===d&&(s=d.host.parentNode),o(s))return!1;s=s.parentNode}return!0}function c(i,s){var d=i.nodeName.toLowerCase(),h=n.test(d)&&!i.disabled||d==="a"&&i.href||s;return h&&a(i)}function v(i){var s=i.getAttribute("tabindex");s===null&&(s=void 0);var d=isNaN(s);return(d||s>=0)&&c(i,!d)}function l(i){var s=[].slice.call(i.querySelectorAll("*"),0).reduce(function(d,h){return d.concat(h.shadowRoot?l(h.shadowRoot):[h])},[]);return s.filter(v)}e.exports=t.default})(he,he.exports);var xe=he.exports;Object.defineProperty(x,"__esModule",{value:!0});x.resetState=ct;x.log=dt;x.handleBlur=Q;x.handleFocus=ee;x.markForFocusLater=pt;x.returnFocus=mt;x.popWithoutFocus=vt;x.setupScopedFocus=ht;x.teardownScopedFocus=yt;var it=xe,ut=ft(it);function ft(e){return e&&e.__esModule?e:{default:e}}var $=[],q=null,ye=!1;function ct(){$=[]}function dt(){}function Q(){ye=!0}function ee(){if(ye){if(ye=!1,!q)return;setTimeout(function(){if(!q.contains(document.activeElement)){var e=(0,ut.default)(q)[0]||q;e.focus()}},0)}}function pt(){$.push(document.activeElement)}function mt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{$.length!==0&&(t=$.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function vt(){$.length>0&&$.pop()}function ht(e){q=e,window.addEventListener?(window.addEventListener("blur",Q,!1),document.addEventListener("focus",ee,!0)):(window.attachEvent("onBlur",Q),document.attachEvent("onFocus",ee))}function yt(){q=null,window.addEventListener?(window.removeEventListener("blur",Q),document.removeEventListener("focus",ee)):(window.detachEvent("onBlur",Q),document.detachEvent("onFocus",ee))}var be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var n=xe,o=a(n);function a(l){return l&&l.__esModule?l:{default:l}}function c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return l.activeElement.shadowRoot?c(l.activeElement.shadowRoot):l.activeElement}function v(l,i){var s=(0,o.default)(l);if(!s.length){i.preventDefault();return}var d=void 0,h=i.shiftKey,S=s[0],E=s[s.length-1],C=c();if(l===C){if(!h)return;d=E}if(E===C&&!h&&(d=S),S===C&&h&&(d=E),d){i.preventDefault(),d.focus();return}var M=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=M!=null&&M[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var P=s.indexOf(C);if(P>-1&&(P+=h?-1:1),d=s[P],typeof d>"u"){i.preventDefault(),d=h?E:S,d.focus();return}i.preventDefault(),d.focus()}}e.exports=t.default})(be,be.exports);var bt=be.exports,D={},Ot=function(){},gt=Ot,A={},De={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(De);var _t=De.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Ct=_t,Et=wt(Ct);function wt(e){return e&&e.__esModule?e:{default:e}}var fe=Et.default,St=fe.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=fe.canUseDOM?window.NodeList:{};A.canUseDOM=fe.canUseDOM;A.default=St;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=Tt;D.log=At;D.assertNodeList=Le;D.setElement=xt;D.validateElement=Oe;D.hide=Dt;D.show=Lt;D.documentNotReadyOrSSRTesting=Ft;var Mt=gt,Rt=Nt(Mt),Pt=A;function Nt(e){return e&&e.__esModule?e:{default:e}}var R=null;function Tt(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(e){return e.removeAttribute("aria-hidden")})),R=null}function At(){}function Le(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function xt(e){var t=e;if(typeof t=="string"&&Pt.canUseDOM){var n=document.querySelectorAll(t);Le(n,t),t=n}return R=t||R,R}function Oe(e){var t=e||R;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Rt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Dt(e){var t=!0,n=!1,o=void 0;try{for(var a=Oe(e)[Symbol.iterator](),c;!(t=(c=a.next()).done);t=!0){var v=c.value;v.setAttribute("aria-hidden","true")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function Lt(e){var t=!0,n=!1,o=void 0;try{for(var a=Oe(e)[Symbol.iterator](),c;!(t=(c=a.next()).done);t=!0){var v=c.value;v.removeAttribute("aria-hidden")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function Ft(){R=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=Ut;B.log=kt;var G={},J={};function _e(e,t){e.classList.remove(t)}function Ut(){var e=document.getElementsByTagName("html")[0];for(var t in G)_e(e,G[t]);var n=document.body;for(var o in J)_e(n,J[o]);G={},J={}}function kt(){}var Wt=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},It=function(t,n){return t[n]&&(t[n]-=1),n},Ht=function(t,n,o){o.forEach(function(a){Wt(n,a),t.add(a)})},jt=function(t,n,o){o.forEach(function(a){It(n,a),n[a]===0&&t.remove(a)})};B.add=function(t,n){return Ht(t.classList,t.nodeName.toLowerCase()=="html"?G:J,n.split(" "))};B.remove=function(t,n){return jt(t.classList,t.nodeName.toLowerCase()=="html"?G:J,n.split(" "))};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.log=$t;z.resetState=Bt;function qt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Fe=function e(){var t=this;qt(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var o=t.openInstances.indexOf(n);o!==-1&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(o){return o(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},se=new Fe;function $t(){console.log("portalOpenInstances ----------"),console.log(se.openInstances.length),se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Bt(){se=new Fe}z.default=se;var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=Yt;ge.log=Xt;var zt=z,Kt=Vt(zt);function Vt(e){return e&&e.__esModule?e:{default:e}}var _=void 0,N=void 0,H=[];function Yt(){for(var e=[_,N],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=N=null,H=[]}function Xt(){console.log("bodyTrap ----------"),console.log(H.length);for(var e=[_,N],t=0;t<e.length;t++){var n=e[t],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function Ce(){H.length!==0&&H[H.length-1].focusContent()}function Zt(e,t){!_&&!N&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ce),N=_.cloneNode(),N.addEventListener("focus",Ce)),H=t,H.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==N&&document.body.appendChild(N)):(_.parentElement&&_.parentElement.removeChild(_),N.parentElement&&N.parentElement.removeChild(N))}Kt.default.subscribe(Zt);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var m=1;m<arguments.length;m++){var y=arguments[m];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&(p[r]=y[r])}return p},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},a=function(){function p(m,y){for(var r=0;r<y.length;r++){var u=y[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(m,u.key,u)}}return function(m,y,r){return y&&p(m.prototype,y),r&&p(m,r),m}}(),c=b,v=Te,l=k(v),i=x,s=F(i),d=bt,h=k(d),S=D,E=F(S),C=B,M=F(C),L=A,P=k(L),K=z,U=k(K);function F(p){if(p&&p.__esModule)return p;var m={};if(p!=null)for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(m[y]=p[y]);return m.default=p,m}function k(p){return p&&p.__esModule?p:{default:p}}function oe(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function V(p,m){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:p}function de(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);p.prototype=Object.create(m&&m.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(p,m):p.__proto__=m)}var Y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},X=9,je=27,re=0,pe=function(p){de(m,p);function m(y){oe(this,m);var r=V(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,y));return r.setOverlayRef=function(u){r.overlay=u,r.props.overlayRef&&r.props.overlayRef(u)},r.setContentRef=function(u){r.content=u,r.props.contentRef&&r.props.contentRef(u)},r.afterClose=function(){var u=r.props,g=u.appElement,w=u.ariaHideApp,O=u.htmlOpenClassName,ae=u.bodyOpenClassName;ae&&M.remove(document.body,ae),O&&M.remove(document.getElementsByTagName("html")[0],O),w&&re>0&&(re-=1,re===0&&E.show(g)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(s.returnFocus(r.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),U.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(s.setupScopedFocus(r.node),s.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var u=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:u},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(u){u.keyCode===X&&(0,h.default)(r.content,u),r.props.shouldCloseOnEsc&&u.keyCode===je&&(u.stopPropagation(),r.requestClose(u))},r.handleOverlayOnClick=function(u){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(u):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(u){!r.props.shouldCloseOnOverlayClick&&u.target==r.overlay&&u.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(u){return r.ownerHandlesClose()&&r.props.onRequestClose(u)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(u,g){var w=(typeof g>"u"?"undefined":o(g))==="object"?g:{base:Y[u],afterOpen:Y[u]+"--after-open",beforeClose:Y[u]+"--before-close"},O=w.base;return r.state.afterOpen&&(O=O+" "+w.afterOpen),r.state.beforeClose&&(O=O+" "+w.beforeClose),typeof g=="string"&&g?O+" "+g:O},r.attributesFromObject=function(u,g){return Object.keys(g).reduce(function(w,O){return w[u+"-"+O]=g[O],w},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return a(m,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,u){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!u.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,u=r.appElement,g=r.ariaHideApp,w=r.htmlOpenClassName,O=r.bodyOpenClassName;O&&M.add(document.body,O),w&&M.add(document.getElementsByTagName("html")[0],w),g&&(re+=1,E.hide(u)),U.default.register(this)}},{key:"render",value:function(){var r=this.props,u=r.id,g=r.className,w=r.overlayClassName,O=r.defaultStyles,ae=r.children,qe=g?{}:O.content,$e=w?{}:O.overlay;if(this.shouldBeClosed())return null;var Be={ref:this.setOverlayRef,className:this.buildClassName("overlay",w),style:n({},$e,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ze=n({id:u,ref:this.setContentRef,style:n({},qe,this.props.style.content),className:this.buildClassName("content",g),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ke=this.props.contentElement(ze,ae);return this.props.overlayElement(Be,Ke)}}]),m}(c.Component);pe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},pe.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(P.default),l.default.instanceOf(L.SafeHTMLCollection),l.default.instanceOf(L.SafeNodeList),l.default.arrayOf(l.default.instanceOf(P.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=pe,e.exports=t.default})(ve,ve.exports);var Gt=ve.exports;function Ue(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function ke(e){function t(n){var o=this.constructor.getDerivedStateFromProps(e,n);return o??null}this.setState(t.bind(this))}function We(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Ue.__suppressDeprecationWarning=!0;ke.__suppressDeprecationWarning=!0;We.__suppressDeprecationWarning=!0;function Jt(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,o=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||o!==null||a!==null){var c=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+v+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ue,t.componentWillReceiveProps=ke),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=We;var l=t.componentDidUpdate;t.componentDidUpdate=function(s,d,h){var S=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;l.call(this,s,d,S)}}return e}const Qt=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Jt},Symbol.toStringTag,{value:"Module"})),en=Ve(Qt);Object.defineProperty(j,"__esModule",{value:!0});j.bodyOpenClassName=j.portalClassName=void 0;var Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},tn=function(){function e(t,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Ie=b,ie=te(Ie),nn=Xe,ue=te(nn),on=Te,f=te(on),rn=Gt,we=te(rn),an=D,ln=un(an),W=A,Se=te(W),sn=en;function un(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function te(e){return e&&e.__esModule?e:{default:e}}function fn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Me(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function cn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dn=j.portalClassName="ReactModalPortal",pn=j.bodyOpenClassName="ReactModal__Body--open",I=W.canUseDOM&&ue.default.createPortal!==void 0,Re=function(t){return document.createElement(t)},Pe=function(){return I?ue.default.createPortal:ue.default.unstable_renderSubtreeIntoContainer};function le(e){return e()}var ne=function(e){cn(t,e);function t(){var n,o,a,c;fn(this,t);for(var v=arguments.length,l=Array(v),i=0;i<v;i++)l[i]=arguments[i];return c=(o=(a=Me(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(l))),a),a.removePortal=function(){!I&&ue.default.unmountComponentAtNode(a.node);var s=le(a.props.parentSelector);s&&s.contains(a.node)?s.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(s){a.portal=s},a.renderPortal=function(s){var d=Pe(),h=d(a,ie.default.createElement(we.default,Ee({defaultStyles:t.defaultStyles},s)),a.node);a.portalRef(h)},o),Me(a,c)}return tn(t,[{key:"componentDidMount",value:function(){if(W.canUseDOM){I||(this.node=Re("div")),this.node.className=this.props.portalClassName;var o=le(this.props.parentSelector);o.appendChild(this.node),!I&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var a=le(o.parentSelector),c=le(this.props.parentSelector);return{prevParent:a,nextParent:c}}},{key:"componentDidUpdate",value:function(o,a,c){if(W.canUseDOM){var v=this.props,l=v.isOpen,i=v.portalClassName;o.portalClassName!==i&&(this.node.className=i);var s=c.prevParent,d=c.nextParent;d!==s&&(s.removeChild(this.node),d.appendChild(this.node)),!(!o.isOpen&&!l)&&!I&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!W.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,a=Date.now(),c=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||a+this.props.closeTimeoutMS);c?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-a)):this.removePortal()}}},{key:"render",value:function(){if(!W.canUseDOM||!I)return null;!this.node&&I&&(this.node=Re("div"));var o=Pe();return o(ie.default.createElement(we.default,Ee({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){ln.setElement(o)}}]),t}(Ie.Component);ne.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.oneOfType([f.default.instanceOf(Se.default),f.default.instanceOf(W.SafeHTMLCollection),f.default.instanceOf(W.SafeNodeList),f.default.arrayOf(f.default.instanceOf(Se.default))]),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func};ne.defaultProps={isOpen:!1,portalClassName:dn,bodyOpenClassName:pn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ie.default.createElement("div",t,n)},contentElement:function(t,n){return ie.default.createElement("div",t,n)}};ne.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,sn.polyfill)(ne);j.default=ne;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=j,o=a(n);function a(c){return c&&c.__esModule?c:{default:c}}t.default=o.default,e.exports=t.default})(me,me.exports);var mn=me.exports;const He=Ye(mn);var vn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const hn=b.forwardRef((e,t)=>{var{className:n}=e,o=vn(e,["className"]);return T.createElement("div",Object.assign({},o,{ref:t,className:Z("navds-modal__content",n)}))}),yn=hn;var bn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const ce=b.forwardRef((e,t)=>{var n,o,{children:a,open:c,onClose:v,className:l,overlayClassName:i,shouldCloseOnOverlayClick:s=!0,shouldCloseOnEsc:d=!0,closeButton:h=!0,"aria-describedby":S,"aria-labelledby":E,"aria-modal":C,"aria-label":M,style:L,parentSelector:P}=e,K=bn(e,["children","open","onClose","className","overlayClassName","shouldCloseOnOverlayClick","shouldCloseOnEsc","closeButton","aria-describedby","aria-labelledby","aria-modal","aria-label","style","parentSelector"]);const U=b.useRef(null),F=b.useMemo(()=>Ae([U,t]),[t]),k=b.useRef(null),oe=(n=Ne())===null||n===void 0?void 0:n.rootElement,V=(o=Ne())===null||o===void 0?void 0:o.appElement;b.useEffect(()=>{V&&ce.setAppElement(V)},[V]);const de=X=>{s||X.type==="keydown"?v():k.current&&k.current.focus()},Y=()=>P||(oe!==void 0?()=>oe:void 0);return T.createElement(He,Object.assign({},K,{parentSelector:Y(),style:L,isOpen:c,ref:F,className:Z("navds-modal",l),overlayClassName:Z("navds-modal__overlay",i),shouldCloseOnOverlayClick:s,shouldCloseOnEsc:d,onRequestClose:X=>de(X),aria:{describedby:S,labelledby:E,modal:C},contentLabel:M}),a,h&&T.createElement(st,{className:Z("navds-modal__button",{"navds-modal__button--shake":s}),size:"small",variant:"tertiary-neutral",ref:k,onClick:v,icon:T.createElement(tt,{title:"Lukk modalvindu"})}))});ce.setAppElement=e=>He.setAppElement(e);ce.Content=yn;const Rn=ce;globalThis&&globalThis.__rest;const On=b.createContext(void 0),Ne=()=>b.useContext(On);export{st as B,Rn as M};
//# sourceMappingURL=Provider-d1398b57.js.map
