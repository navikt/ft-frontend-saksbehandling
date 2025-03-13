import{r as d,e as u}from"./index-DASCADcX.js";import{u as R,_ as P,s as S,M as H,F as w,n as x}from"./index.es-BN1WhiVC.js";import{B as K,L as F,a as C}from"./Label-CfBdhDeq.js";import{A as I}from"./Alert-vBIWixRy.js";import{V as q,H as V}from"./VStack-CfnCueE0.js";import{u as Z}from"./Theme-Bqc_BD0M.js";import{S as J}from"./PersonPencilFill-CoF6qBVB.js";import{B as W}from"./Box-t-YAJNpB.js";import{S as Q,a as U}from"./KeyVerticalFill-m_CavoP-.js";import{c as X}from"./Button-D87Irl5r.js";import{u as Y,S as G}from"./Checkmark-abnGd_Ay.js";import{S as ee}from"./ChevronDown-DKSW_DmS.js";import{M as T}from"./Modal-BDpe_Rzz.js";import{L as re}from"./Loader-C31s9nuZ.js";var ae=function(e,r){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)r.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]]);return a};const te=d.forwardRef((e,r)=>{var{className:a,header:s,children:o,open:t,defaultOpen:l=!1,onClick:i,size:g="medium",onOpenChange:y}=e,v=ae(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=Z(),[c,k]=Y({defaultValue:l,value:t,onChange:y}),h=g==="small"?"small":"medium";return u.createElement("div",{className:f("navds-read-more",`navds-read-more--${g}`,a,{"navds-read-more--open":c}),"data-volume":"low"},u.createElement("button",Object.assign({},v,{ref:r,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":g==="small"}),onClick:X(i,()=>k(z=>!z)),"aria-expanded":c,"data-state":c?"open":"closed"}),u.createElement(ee,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,s)),u.createElement(K,{as:"div","aria-hidden":!c,className:f("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:h,"data-state":c?"open":"closed"},o))});function ne(e,r){var a=e.values,s=P(e,["values"]),o=r.values,t=P(r,["values"]);return S(o,a)&&S(s,t)}function $(e){var r=R(),a=r.formatMessage,s=r.textComponent,o=s===void 0?d.Fragment:s,t=e.id,l=e.description,i=e.defaultMessage,g=e.values,y=e.children,v=e.tagName,f=v===void 0?o:v,c=e.ignoreTag,k={id:t,description:l,defaultMessage:i},h=a(k,g,{ignoreTag:c});return typeof y=="function"?y(Array.isArray(h)?h:[h]):f?d.createElement(f,null,d.Children.toArray(h)):d.createElement(d.Fragment,null,h)}$.displayName="FormattedMessage";var M=d.memo($,ne);M.displayName="MemoizedFormattedMessage";var se=Object.defineProperty,oe=(e,r,a)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,le=(e,r,a)=>oe(e,r+"",a);function ie(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function de(){if(N)return p;N=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(s,o,t){var l=null;if(t!==void 0&&(l=""+t),o.key!==void 0&&(l=""+o.key),"key"in o){t={};for(var i in o)i!=="key"&&(t[i]=o[i])}else t=o;return o=t.ref,{$$typeof:e,type:s,key:l,ref:o!==void 0?o:null,props:t}}return p.Fragment=r,p.jsx=a,p.jsxs=a,p}var O;function ce(){return O||(O=1,B.exports=de()),B.exports}var n=ce();const Ir=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:n.jsx(I,{variant:"warning",size:"small",children:n.jsx(q,{gap:"2",children:u.Children.map(e,r=>n.jsx(C,{size:"small",children:r},H(r)?r.key:r))})}),me="_button_1rql2_1",fe={button:me},_={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"},A=x(_),$r=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[a,s]=d.useState(r),o=()=>{a||(s(!0),e(!0))};return d.useEffect(()=>{s(r)},[r]),n.jsx("button",{className:fe.button,"data-testid":"overstyringsknapp",type:"button",onClick:o,"aria-disabled":r,children:a?n.jsx(Q,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:A.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):n.jsx(U,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:A.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},b="#B7B1A9",L=4,he=(e,r,a)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${b};
    border-radius: ${L}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${a}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${b};
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
`,ue=(e,r,a)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${b};
    border-radius: ${L}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${a}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${b};
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
`,ge=(e,r,a,s)=>r?ue(e,a,s):he(e,a,s),pe=(e,r,a)=>a?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,Lr=({children:e,alignOffset:r=0,alignLeft:a=!1,marginTop:s=0,marginLeft:o=0,hideBorder:t=!1})=>n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:ge(r,a,s,o)}}),n.jsx("div",{className:pe(r,a,t),children:e})]});var D={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var E;function xe(){return E||(E=1,function(e){(function(){var r={}.hasOwnProperty;function a(){for(var t="",l=0;l<arguments.length;l++){var i=arguments[l];i&&(t=o(t,s.call(this,i)))}return t}function s(t){if(typeof t=="string"||typeof t=="number")return this&&this[t]||t;if(typeof t!="object")return"";if(Array.isArray(t))return a.apply(this,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var l="";for(var i in t)r.call(t,i)&&t[i]&&(l=o(l,this&&this[i]||i));return l}function o(t,l){return l?t?t+" "+l:t+l:t}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(D)),D.exports}var _e=xe();const m=ie(_e),ye="_borderbox_1vkvn_1",ve="_error_1vkvn_5",be="_warning_1vkvn_8",ke={borderbox:ye,error:ve,warning:be},je=m.bind(ke),we=({error:e=!1,className:r,children:a})=>n.jsx(W,{padding:"4",className:je("borderbox",{error:e},r),children:a}),Me="_aksjonspunkt_kn1hn_1",Ce="_erAksjonspunktApent_kn1hn_4",Pe="_erIkkeGodkjentAvBeslutter_kn1hn_8",Se={aksjonspunkt:Me,erAksjonspunktApent:Ce,erIkkeGodkjentAvBeslutter:Pe};m.bind(Se);const zr=({dateString:e})=>n.jsx(w,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)});x(_);const Te="_floatRight_gekng_1",Be={floatRight:Te},Rr=({children:e})=>n.jsx("span",{className:Be.floatRight,children:e});x(_);const Ne="_flexColumnNew_1vdv1_1",Oe={flexColumnNew:Ne},Ae=m.bind(Oe),Hr=({children:e,className:r})=>n.jsx("div",{className:Ae("flexColumnNew",r),children:e}),De="_flexRow_1yf0y_1",Ee="_spaceBetween_1yf0y_9",Fe="_alignItemsToBaseline_1yf0y_12",Ie="_alignItemsToFlexEnd_1yf0y_15",$e="_justifyItemsToFlexEnd_1yf0y_18",Le="_wrap_1yf0y_21",ze={flexRow:De,spaceBetween:Ee,alignItemsToBaseline:Fe,alignItemsToFlexEnd:Ie,justifyItemsToFlexEnd:$e,wrap:Le},Re=m.bind(ze),Kr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:a=!1,alignItemsToFlexEnd:s=!1,wrap:o=!1,className:t})=>n.jsx("div",{className:Re("flexRow",{spaceBetween:r},{alignItemsToBaseline:a},{alignItemsToFlexEnd:s},{wrap:o},t),children:e}),He="_flexContainer_1dk1o_1",Ke="_fluid_1dk1o_6",qe="_fullHeight_1dk1o_9",Ve="_flexWrap_1dk1o_17",Ze={flexContainer:He,fluid:Ke,fullHeight:qe,flexWrap:Ve},Je=m.bind(Ze),qr=({children:e,wrap:r=!1,fullHeight:a=!1})=>n.jsx("div",{className:Je("flexContainer","fluid",{flexWrap:r,fullHeight:a}),children:e}),We=x(_),Vr=({dateStringFom:e,dateStringTom:r,showTodayString:a=!1,size:s})=>n.jsxs(C,{as:"span",size:s,children:[n.jsx(w,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)})," - ",r&&n.jsx(w,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(r)}),a&&!r&&n.jsx("span",{children:We.formatMessage({id:"PeriodLabel.DateToday"})})]}),Qe="_fourPx_qda5k_1",Ue="_eightPx_qda5k_4",Xe="_sixteenPx_qda5k_7",Ye="_twentyPx_qda5k_10",Ge="_thirtyTwoPx_qda5k_13",er="_fourtyPx_qda5k_16",rr={fourPx:Qe,eightPx:Ue,sixteenPx:Xe,twentyPx:Ye,thirtyTwoPx:Ge,fourtyPx:er},ar=m.bind(rr),tr=({fourPx:e=!1,eightPx:r=!1,sixteenPx:a=!1,twentyPx:s=!1,thirtyTwoPx:o=!1,fourtyPx:t=!1})=>n.jsx("div",{className:ar({fourPx:e,eightPx:r,sixteenPx:a,twentyPx:s,thirtyTwoPx:o,fourtyPx:t})}),nr="_modalText_lvzd7_1",sr={modalText:nr},or=x(_),lr=()=>{},ir=2e3;class dr extends d.Component{constructor(r){super(r),le(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,ir)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:r}=this.state;if(!r)return null;const{pendingMessage:a}=this.props;return n.jsx(T,{width:"small",open:!0,"aria-label":a,onClose:lr,children:n.jsx(T.Body,{children:n.jsxs(V,{children:[n.jsx(re,{size:"large"}),n.jsx("div",{className:sr.modalText,children:n.jsx(F,{size:"small",children:or.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const cr=({withoutBorder:e,error:r,children:a,className:s})=>e?a:n.jsx(we,{error:r,className:s,children:a}),Zr=({merknaderFraBeslutter:e,title:r,children:a,withoutBorder:s=!1,className:o=""})=>{const t=!!(e&&e.notAccepted);return n.jsxs(cr,{withoutBorder:s&&!t,error:t,className:o,children:[r&&n.jsxs(n.Fragment,{children:[n.jsx(F,{size:"small",children:r}),n.jsx(tr,{twentyPx:!0})]}),a]})},mr="_divider_1t980_1",fr="_dividerParagraf_1t980_8",hr="_leftPanel_1t980_11",ur="_rightPanel_1t980_14",gr={divider:mr,dividerParagraf:fr,leftPanel:hr,rightPanel:ur};m.bind(gr);const pr="_editedIcon_ulrjl_1",xr={editedIcon:pr},_r=m.bind(xr),Jr=({className:e=""})=>n.jsx("span",{"data-testid":"editedIcon",className:_r("editedIcon",e),children:n.jsx(J,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),Wr=e=>{const r=d.useRef(void 0);return d.useEffect(()=>{r.current=e},[e]),r.current},yr="_checkBlaIkon_e3roh_1",vr="_container_e3roh_5",br="_rad_e3roh_11",j={checkBlaIkon:yr,container:vr,rad:br},Qr=({saksopplysninger:e})=>n.jsx("div",{className:j.container,children:e.map((r,a)=>n.jsxs("div",{className:j.rad,children:[r.readMoreContent&&n.jsx(te,{size:"small",header:n.jsx(M,{id:r.textId}),children:r.readMoreContent}),!r.readMoreContent&&n.jsxs(n.Fragment,{children:[n.jsx(G,{className:j.checkBlaIkon,height:35,width:35}),n.jsx(C,{size:"small",children:n.jsx(M,{id:r.textId})})]})]},`BlaBoksMedCheckmarkListe-${r.textId}-${a}`))});class kr extends d.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,a){console.error("Error caught by error boundary:",r,a)}render(){const{hasError:r}=this.state,{children:a,errorMessage:s}=this.props;return r?n.jsx(I,{variant:"error",children:s||"Noe gikk galt"}):a}}dr.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"en"};kr.__docgenInfo={description:"",methods:[],displayName:"ln"};export{$r as D,Hr as K,Ir as L,M,tr as Q,te as R,Rr as U,Kr as X,Lr as Y,qr as Z,Vr as a,Wr as b,we as c,kr as l,Jr as n,Qr as s,Zr as t,zr as z};
