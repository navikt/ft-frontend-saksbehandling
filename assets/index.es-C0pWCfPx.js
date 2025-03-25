import{r as d,e as u}from"./index-DASCADcX.js";import{u as z,_ as M,s as S,y as R,k as H,B as V,f as v}from"./index.es-CsyRfoMR.js";import{B as q,L as $,a as C}from"./Label-CfBdhDeq.js";import{A as F}from"./Alert-vBIWixRy.js";import{V as K,H as J}from"./VStack-CfnCueE0.js";import{u as U}from"./Theme-Bqc_BD0M.js";import{S as W}from"./PersonPencilFill-CoF6qBVB.js";import{B as Z}from"./Box-t-YAJNpB.js";import{S as G,a as Q}from"./KeyVerticalFill-m_CavoP-.js";import{c as X}from"./Button-D87Irl5r.js";import{u as Y,S as ee}from"./Checkmark-abnGd_Ay.js";import{S as re}from"./ChevronDown-DKSW_DmS.js";import{M as P}from"./Modal-Cf6h8GUk.js";import{L as ae}from"./Loader-C31s9nuZ.js";var te=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const ne=d.forwardRef((e,r)=>{var{className:a,header:n,children:o,open:t,defaultOpen:l=!1,onClick:i,size:g="medium",onOpenChange:x}=e,_=te(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=U(),[c,k]=Y({defaultValue:l,value:t,onChange:x}),h=g==="small"?"small":"medium";return u.createElement("div",{className:m("navds-read-more",`navds-read-more--${g}`,a,{"navds-read-more--open":c}),"data-volume":"low"},u.createElement("button",Object.assign({},_,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":g==="small"}),onClick:X(i,()=>k(L=>!L)),"aria-expanded":c,"data-state":c?"open":"closed"}),u.createElement(re,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,n)),u.createElement(q,{as:"div","aria-hidden":!c,className:m("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:h,"data-state":c?"open":"closed"},o))});function se(e,r){var a=e.values,n=M(e,["values"]),o=r.values,t=M(r,["values"]);return S(o,a)&&S(n,t)}function I(e){var r=z(),a=r.formatMessage,n=r.textComponent,o=n===void 0?d.Fragment:n,t=e.id,l=e.description,i=e.defaultMessage,g=e.values,x=e.children,_=e.tagName,m=_===void 0?o:_,c=e.ignoreTag,k={id:t,description:l,defaultMessage:i},h=a(k,g,{ignoreTag:c});return typeof x=="function"?x(Array.isArray(h)?h:[h]):m?d.createElement(m,null,d.Children.toArray(h)):d.createElement(d.Fragment,null,h)}I.displayName="FormattedMessage";var w=d.memo(I,se);w.displayName="MemoizedFormattedMessage";var oe=Object.defineProperty,le=(e,r,a)=>r in e?oe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,ie=(e,r,a)=>le(e,r+"",a);function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function ce(){if(O)return p;O=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(n,o,t){var l=null;if(t!==void 0&&(l=""+t),o.key!==void 0&&(l=""+o.key),"key"in o){t={};for(var i in o)i!=="key"&&(t[i]=o[i])}else t=o;return o=t.ref,{$$typeof:e,type:n,key:l,ref:o!==void 0?o:null,props:t}}return p.Fragment=r,p.jsx=a,p.jsxs=a,p}var N;function fe(){return N||(N=1,B.exports=ce()),B.exports}var s=fe();const Ir=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:s.jsx(F,{variant:"warning",size:"small",children:s.jsx(K,{gap:"2",children:u.Children.map(e,r=>s.jsx(C,{size:"small",children:r},R(r)?r.key:r))})}),me="_button_1rql2_1",he={button:me},b={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},T=v(b),Dr=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[a,n]=d.useState(r),o=()=>{a||(n(!0),e(!0))};return d.useEffect(()=>{n(r)},[r]),s.jsx("button",{className:he.button,"data-testid":"overstyringsknapp",type:"button",onClick:o,"aria-disabled":r,children:a?s.jsx(G,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:T.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):s.jsx(Q,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:T.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},y="#B7B1A9",D=4,ue=(e,r,a)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${y};
    border-radius: ${D}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${a}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${y};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,ge=(e,r,a)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${y};
    border-radius: ${D}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${a}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${y};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,pe=(e,r,a,n)=>r?ge(e,a,n):ue(e,a,n),xe=(e,r,a)=>a?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Lr=({children:e,alignOffset:r=0,alignLeft:a=!1,marginTop:n=0,marginLeft:o=0,hideBorder:t=!1})=>s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:pe(r,a,n,o)}}),s.jsx("div",{className:xe(r,a,t),children:e})]});var A={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var E;function _e(){return E||(E=1,function(e){(function(){var r={}.hasOwnProperty;function a(){for(var t="",l=0;l<arguments.length;l++){var i=arguments[l];i&&(t=o(t,n.call(this,i)))}return t}function n(t){if(typeof t=="string"||typeof t=="number")return this&&this[t]||t;if(typeof t!="object")return"";if(Array.isArray(t))return a.apply(this,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var l="";for(var i in t)r.call(t,i)&&t[i]&&(l=o(l,this&&this[i]||i));return l}function o(t,l){return l?t?t+" "+l:t+l:t}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(A)),A.exports}var ye=_e();const f=de(ye),ve="_borderbox_1vkvn_1",be="_error_1vkvn_5",ke="_warning_1vkvn_8",je={borderbox:ve,error:be,warning:ke},we=f.bind(je),Ce=({error:e=!1,className:r,children:a})=>s.jsx(Z,{padding:"4",className:we("borderbox",{error:e},r),children:a}),Me="_aksjonspunkt_kn1hn_1",Se="_erAksjonspunktApent_kn1hn_4",Pe="_erIkkeGodkjentAvBeslutter_kn1hn_8",Be={aksjonspunkt:Me,erAksjonspunktApent:Se,erIkkeGodkjentAvBeslutter:Pe};f.bind(Be);const zr=({dateString:e,year:r,month:a,day:n})=>s.jsx(s.Fragment,{children:V(e,{year:r,month:a,day:n})}),Oe="_floatRight_gekng_1",Ne={floatRight:Oe},Rr=({children:e})=>s.jsx("span",{className:Ne.floatRight,children:e});v(b);const Te="_flexColumnNew_1vdv1_1",Ae={flexColumnNew:Te},Ee=f.bind(Ae),Hr=({children:e,className:r})=>s.jsx("div",{className:Ee("flexColumnNew",r),children:e}),$e="_flexRow_1yf0y_1",Fe="_spaceBetween_1yf0y_9",Ie="_alignItemsToBaseline_1yf0y_12",De="_alignItemsToFlexEnd_1yf0y_15",Le="_justifyItemsToFlexEnd_1yf0y_18",ze="_wrap_1yf0y_21",Re={flexRow:$e,spaceBetween:Fe,alignItemsToBaseline:Ie,alignItemsToFlexEnd:De,justifyItemsToFlexEnd:Le,wrap:ze},He=f.bind(Re),Vr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:a=!1,alignItemsToFlexEnd:n=!1,wrap:o=!1,className:t})=>s.jsx("div",{className:He("flexRow",{spaceBetween:r},{alignItemsToBaseline:a},{alignItemsToFlexEnd:n},{wrap:o},t),children:e}),Ve="_flexContainer_1dk1o_1",qe="_fluid_1dk1o_6",Ke="_fullHeight_1dk1o_9",Je="_flexWrap_1dk1o_17",Ue={flexContainer:Ve,fluid:qe,fullHeight:Ke,flexWrap:Je},We=f.bind(Ue),qr=({children:e,wrap:r=!1,fullHeight:a=!1})=>s.jsx("div",{className:We("flexContainer","fluid",{flexWrap:r,fullHeight:a}),children:e}),Kr=({dateStringFom:e,dateStringTom:r,showTodayString:a=!1,size:n})=>s.jsx(C,{as:"span",size:n,children:H(e,r,{showTodayString:a})}),Ze="_fourPx_qda5k_1",Ge="_eightPx_qda5k_4",Qe="_sixteenPx_qda5k_7",Xe="_twentyPx_qda5k_10",Ye="_thirtyTwoPx_qda5k_13",er="_fourtyPx_qda5k_16",rr={fourPx:Ze,eightPx:Ge,sixteenPx:Qe,twentyPx:Xe,thirtyTwoPx:Ye,fourtyPx:er},ar=f.bind(rr),tr=({fourPx:e=!1,eightPx:r=!1,sixteenPx:a=!1,twentyPx:n=!1,thirtyTwoPx:o=!1,fourtyPx:t=!1})=>s.jsx("div",{className:ar({fourPx:e,eightPx:r,sixteenPx:a,twentyPx:n,thirtyTwoPx:o,fourtyPx:t})}),nr="_modalText_lvzd7_1",sr={modalText:nr},or=v(b),lr=()=>{},ir=2e3;class dr extends d.Component{constructor(r){super(r),ie(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,ir)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:r}=this.state;if(!r)return null;const{pendingMessage:a}=this.props;return s.jsx(P,{width:"small",open:!0,"aria-label":a,onClose:lr,children:s.jsx(P.Body,{children:s.jsxs(J,{children:[s.jsx(ae,{size:"large"}),s.jsx("div",{className:sr.modalText,children:s.jsx($,{size:"small",children:or.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const cr=({withoutBorder:e,error:r,children:a,className:n})=>e?a:s.jsx(Ce,{error:r,className:n,children:a}),Jr=({merknaderFraBeslutter:e,title:r,children:a,withoutBorder:n=!1,className:o=""})=>{const t=!!(e&&e.notAccepted);return s.jsxs(cr,{withoutBorder:n&&!t,error:t,className:o,children:[r&&s.jsxs(s.Fragment,{children:[s.jsx($,{size:"small",children:r}),s.jsx(tr,{twentyPx:!0})]}),a]})},fr="_divider_1t980_1",mr="_dividerParagraf_1t980_8",hr="_leftPanel_1t980_11",ur="_rightPanel_1t980_14",gr={divider:fr,dividerParagraf:mr,leftPanel:hr,rightPanel:ur};f.bind(gr);const pr="_editedIcon_ulrjl_1",xr={editedIcon:pr},_r=f.bind(xr),Ur=({className:e=""})=>s.jsx("span",{"data-testid":"editedIcon",className:_r("editedIcon",e),children:s.jsx(W,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),Wr=e=>{const r=d.useRef(void 0);return d.useEffect(()=>{r.current=e},[e]),r.current},yr="_checkBlaIkon_e3roh_1",vr="_container_e3roh_5",br="_rad_e3roh_11",j={checkBlaIkon:yr,container:vr,rad:br},Zr=({saksopplysninger:e})=>s.jsx("div",{className:j.container,children:e.map((r,a)=>s.jsxs("div",{className:j.rad,children:[r.readMoreContent&&s.jsx(ne,{size:"small",header:s.jsx(w,{id:r.textId}),children:r.readMoreContent}),!r.readMoreContent&&s.jsxs(s.Fragment,{children:[s.jsx(ee,{className:j.checkBlaIkon,height:35,width:35}),s.jsx(C,{size:"small",children:s.jsx(w,{id:r.textId})})]})]},`BlaBoksMedCheckmarkListe-${r.textId}-${a}`))});class kr extends d.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,a){console.error("Error caught by error boundary:",r,a)}render(){const{hasError:r}=this.state,{children:a,errorMessage:n}=this.props;return r?s.jsx(F,{variant:"error",children:n||"Noe gikk galt"}):a}}v(b);dr.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"an"};kr.__docgenInfo={description:"",methods:[],displayName:"mn"};export{Dr as D,zr as J,w as M,Ce as O,tr as Q,ne as R,Lr as U,Ir as V,Rr as Z,Ur as c,Zr as f,kr as m,qr as n,Kr as o,Vr as r,Jr as s,Hr as t,Wr as u};
