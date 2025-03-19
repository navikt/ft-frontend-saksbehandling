import{r as d,e as u}from"./index-DASCADcX.js";import{e as R,_ as C,s as P,v as H,F as S,V as x,u as V}from"./index.es-bwVch3Q4.js";import{B as q,L as I,a as M}from"./Label-CfBdhDeq.js";import{A as D}from"./Alert-vBIWixRy.js";import{V as K,H as J}from"./VStack-CfnCueE0.js";import{u as U}from"./Theme-Bqc_BD0M.js";import{S as G}from"./PersonPencilFill-CoF6qBVB.js";import{B as W}from"./Box-t-YAJNpB.js";import{S as Q,a as Z}from"./KeyVerticalFill-m_CavoP-.js";import{c as X}from"./Button-D87Irl5r.js";import{u as Y,S as ee}from"./Checkmark-abnGd_Ay.js";import{S as re}from"./ChevronDown-DKSW_DmS.js";import{M as T}from"./Modal-BDpe_Rzz.js";import{L as ae}from"./Loader-C31s9nuZ.js";var te=function(e,r){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)r.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]]);return a};const ne=d.forwardRef((e,r)=>{var{className:a,header:s,children:o,open:n,defaultOpen:l=!1,onClick:i,size:g="medium",onOpenChange:_}=e,v=te(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:f}=U(),[c,k]=Y({defaultValue:l,value:n,onChange:_}),h=g==="small"?"small":"medium";return u.createElement("div",{className:f("navds-read-more",`navds-read-more--${g}`,a,{"navds-read-more--open":c}),"data-volume":"low"},u.createElement("button",Object.assign({},v,{ref:r,type:"button",className:f("navds-read-more__button","navds-body-short",{"navds-body-short--small":g==="small"}),onClick:X(i,()=>k(z=>!z)),"aria-expanded":c,"data-state":c?"open":"closed"}),u.createElement(re,{className:f("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,s)),u.createElement(q,{as:"div","aria-hidden":!c,className:f("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:h,"data-state":c?"open":"closed"},o))});function se(e,r){var a=e.values,s=C(e,["values"]),o=r.values,n=C(r,["values"]);return P(o,a)&&P(s,n)}function $(e){var r=R(),a=r.formatMessage,s=r.textComponent,o=s===void 0?d.Fragment:s,n=e.id,l=e.description,i=e.defaultMessage,g=e.values,_=e.children,v=e.tagName,f=v===void 0?o:v,c=e.ignoreTag,k={id:n,description:l,defaultMessage:i},h=a(k,g,{ignoreTag:c});return typeof _=="function"?_(Array.isArray(h)?h:[h]):f?d.createElement(f,null,d.Children.toArray(h)):d.createElement(d.Fragment,null,h)}$.displayName="FormattedMessage";var w=d.memo($,se);w.displayName="MemoizedFormattedMessage";var oe=Object.defineProperty,le=(e,r,a)=>r in e?oe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,ie=(e,r,a)=>le(e,r+"",a);function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function ce(){if(N)return p;N=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(s,o,n){var l=null;if(n!==void 0&&(l=""+n),o.key!==void 0&&(l=""+o.key),"key"in o){n={};for(var i in o)i!=="key"&&(n[i]=o[i])}else n=o;return o=n.ref,{$$typeof:e,type:s,key:l,ref:o!==void 0?o:null,props:n}}return p.Fragment=r,p.jsx=a,p.jsxs=a,p}var O;function me(){return O||(O=1,B.exports=ce()),B.exports}var t=me();const $r=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:t.jsx(D,{variant:"warning",size:"small",children:t.jsx(K,{gap:"2",children:u.Children.map(e,r=>t.jsx(M,{size:"small",children:r},H(r)?r.key:r))})}),fe="_button_1rql2_1",he={button:fe},y={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},A=x(y),Lr=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[a,s]=d.useState(r),o=()=>{a||(s(!0),e(!0))};return d.useEffect(()=>{s(r)},[r]),t.jsx("button",{className:he.button,"data-testid":"overstyringsknapp",type:"button",onClick:o,"aria-disabled":r,children:a?t.jsx(Q,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:A.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):t.jsx(Z,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:A.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},b="#B7B1A9",L=4,ue=(e,r,a)=>`
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
`,ge=(e,r,a)=>`
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
`,pe=(e,r,a,s)=>r?ge(e,a,s):ue(e,a,s),xe=(e,r,a)=>a?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,zr=({children:e,alignOffset:r=0,alignLeft:a=!1,marginTop:s=0,marginLeft:o=0,hideBorder:n=!1})=>t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:pe(r,a,s,o)}}),t.jsx("div",{className:xe(r,a,n),children:e})]});var E={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var F;function ye(){return F||(F=1,function(e){(function(){var r={}.hasOwnProperty;function a(){for(var n="",l=0;l<arguments.length;l++){var i=arguments[l];i&&(n=o(n,s.call(this,i)))}return n}function s(n){if(typeof n=="string"||typeof n=="number")return this&&this[n]||n;if(typeof n!="object")return"";if(Array.isArray(n))return a.apply(this,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var l="";for(var i in n)r.call(n,i)&&n[i]&&(l=o(l,this&&this[i]||i));return l}function o(n,l){return l?n?n+" "+l:n+l:n}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(E)),E.exports}var _e=ye();const m=de(_e),ve="_borderbox_1vkvn_1",be="_error_1vkvn_5",ke="_warning_1vkvn_8",je={borderbox:ve,error:be,warning:ke},we=m.bind(je),Me=({error:e=!1,className:r,children:a})=>t.jsx(W,{padding:"4",className:we("borderbox",{error:e},r),children:a}),Ce="_aksjonspunkt_kn1hn_1",Pe="_erAksjonspunktApent_kn1hn_4",Se="_erIkkeGodkjentAvBeslutter_kn1hn_8",Te={aksjonspunkt:Ce,erAksjonspunktApent:Pe,erIkkeGodkjentAvBeslutter:Se};m.bind(Te);const Rr=({dateString:e,year:r,month:a,day:s})=>t.jsx(t.Fragment,{children:V(e,{year:r,month:a,day:s})}),Be="_floatRight_gekng_1",Ne={floatRight:Be},Hr=({children:e})=>t.jsx("span",{className:Ne.floatRight,children:e});x(y);const Oe="_flexColumnNew_1vdv1_1",Ae={flexColumnNew:Oe},Ee=m.bind(Ae),Vr=({children:e,className:r})=>t.jsx("div",{className:Ee("flexColumnNew",r),children:e}),Fe="_flexRow_1yf0y_1",Ie="_spaceBetween_1yf0y_9",De="_alignItemsToBaseline_1yf0y_12",$e="_alignItemsToFlexEnd_1yf0y_15",Le="_justifyItemsToFlexEnd_1yf0y_18",ze="_wrap_1yf0y_21",Re={flexRow:Fe,spaceBetween:Ie,alignItemsToBaseline:De,alignItemsToFlexEnd:$e,justifyItemsToFlexEnd:Le,wrap:ze},He=m.bind(Re),qr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:a=!1,alignItemsToFlexEnd:s=!1,wrap:o=!1,className:n})=>t.jsx("div",{className:He("flexRow",{spaceBetween:r},{alignItemsToBaseline:a},{alignItemsToFlexEnd:s},{wrap:o},n),children:e}),Ve="_flexContainer_1dk1o_1",qe="_fluid_1dk1o_6",Ke="_fullHeight_1dk1o_9",Je="_flexWrap_1dk1o_17",Ue={flexContainer:Ve,fluid:qe,fullHeight:Ke,flexWrap:Je},Ge=m.bind(Ue),Kr=({children:e,wrap:r=!1,fullHeight:a=!1})=>t.jsx("div",{className:Ge("flexContainer","fluid",{flexWrap:r,fullHeight:a}),children:e}),We=x(y),Jr=({dateStringFom:e,dateStringTom:r,showTodayString:a=!1,size:s})=>t.jsxs(M,{as:"span",size:s,children:[t.jsx(S,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)})," - ",r&&t.jsx(S,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(r)}),a&&!r&&t.jsx("span",{children:We.formatMessage({id:"PeriodLabel.DateToday"})})]}),Qe="_fourPx_qda5k_1",Ze="_eightPx_qda5k_4",Xe="_sixteenPx_qda5k_7",Ye="_twentyPx_qda5k_10",er="_thirtyTwoPx_qda5k_13",rr="_fourtyPx_qda5k_16",ar={fourPx:Qe,eightPx:Ze,sixteenPx:Xe,twentyPx:Ye,thirtyTwoPx:er,fourtyPx:rr},tr=m.bind(ar),nr=({fourPx:e=!1,eightPx:r=!1,sixteenPx:a=!1,twentyPx:s=!1,thirtyTwoPx:o=!1,fourtyPx:n=!1})=>t.jsx("div",{className:tr({fourPx:e,eightPx:r,sixteenPx:a,twentyPx:s,thirtyTwoPx:o,fourtyPx:n})}),sr="_modalText_lvzd7_1",or={modalText:sr},lr=x(y),ir=()=>{},dr=2e3;class cr extends d.Component{constructor(r){super(r),ie(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,dr)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:r}=this.state;if(!r)return null;const{pendingMessage:a}=this.props;return t.jsx(T,{width:"small",open:!0,"aria-label":a,onClose:ir,children:t.jsx(T.Body,{children:t.jsxs(J,{children:[t.jsx(ae,{size:"large"}),t.jsx("div",{className:or.modalText,children:t.jsx(I,{size:"small",children:lr.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const mr=({withoutBorder:e,error:r,children:a,className:s})=>e?a:t.jsx(Me,{error:r,className:s,children:a}),Ur=({merknaderFraBeslutter:e,title:r,children:a,withoutBorder:s=!1,className:o=""})=>{const n=!!(e&&e.notAccepted);return t.jsxs(mr,{withoutBorder:s&&!n,error:n,className:o,children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(I,{size:"small",children:r}),t.jsx(nr,{twentyPx:!0})]}),a]})},fr="_divider_1t980_1",hr="_dividerParagraf_1t980_8",ur="_leftPanel_1t980_11",gr="_rightPanel_1t980_14",pr={divider:fr,dividerParagraf:hr,leftPanel:ur,rightPanel:gr};m.bind(pr);const xr="_editedIcon_ulrjl_1",yr={editedIcon:xr},_r=m.bind(yr),Gr=({className:e=""})=>t.jsx("span",{"data-testid":"editedIcon",className:_r("editedIcon",e),children:t.jsx(G,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),Wr=e=>{const r=d.useRef(void 0);return d.useEffect(()=>{r.current=e},[e]),r.current},vr="_checkBlaIkon_e3roh_1",br="_container_e3roh_5",kr="_rad_e3roh_11",j={checkBlaIkon:vr,container:br,rad:kr},Qr=({saksopplysninger:e})=>t.jsx("div",{className:j.container,children:e.map((r,a)=>t.jsxs("div",{className:j.rad,children:[r.readMoreContent&&t.jsx(ne,{size:"small",header:t.jsx(w,{id:r.textId}),children:r.readMoreContent}),!r.readMoreContent&&t.jsxs(t.Fragment,{children:[t.jsx(ee,{className:j.checkBlaIkon,height:35,width:35}),t.jsx(M,{size:"small",children:t.jsx(w,{id:r.textId})})]})]},`BlaBoksMedCheckmarkListe-${r.textId}-${a}`))});class jr extends d.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,a){console.error("Error caught by error boundary:",r,a)}render(){const{hasError:r}=this.state,{children:a,errorMessage:s}=this.props;return r?t.jsx(D,{variant:"error",children:s||"Noe gikk galt"}):a}}x(y);cr.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"sn"};jr.__docgenInfo={description:"",methods:[],displayName:"xn"};export{Rr as G,w as M,Me as O,nr as Q,ne as R,Lr as U,$r as V,Jr as a,Hr as b,Gr as d,Wr as f,Ur as l,Qr as m,qr as n,Kr as o,zr as q,Vr as r,jr as x};
