import{r as d,e as h}from"./index-DASCADcX.js";import{u as R,_ as S,s as T,M as H,F as M,n as p}from"./index.es-DxogalCq.js";import{B as K,L as I,a as P}from"./Label-C-_BY61p.js";import{A as $}from"./Alert-CsAGiB4k.js";import{V as q,H as V}from"./VStack-CjRg3Zfs.js";import{S as Z}from"./PersonPencilFill-CoF6qBVB.js";import{B as J}from"./Box-BRUAy9sN.js";import{S as W,a as Q}from"./KeyVerticalFill-m_CavoP-.js";import{c as j}from"./clsx-B-dksMZM.js";import{c as U}from"./Button-CiEWTRO4.js";import{u as X,S as Y}from"./Checkmark-abnGd_Ay.js";import{S as G}from"./ChevronDown-DKSW_DmS.js";import{M as B}from"./Modal-BsdIhMBu.js";import{L as ee}from"./Loader-DokcRViZ.js";var re=function(e,r){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)r.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]]);return a};const ae=d.forwardRef((e,r)=>{var{className:a,header:s,children:o,open:t,defaultOpen:l=!1,onClick:i,size:u="medium",onOpenChange:_}=e,y=re(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const[c,b]=X({defaultValue:l,value:t,onChange:_}),k=u==="small"?"small":"medium";return h.createElement("div",{className:j("navds-read-more",`navds-read-more--${u}`,a,{"navds-read-more--open":c}),"data-volume":"low"},h.createElement("button",Object.assign({},y,{ref:r,type:"button",className:j("navds-read-more__button","navds-body-short",{"navds-body-short--small":u==="small"}),onClick:U(i,()=>b(f=>!f)),"aria-expanded":c,"data-state":c?"open":"closed"}),h.createElement(G,{className:"navds-read-more__expand-icon","aria-hidden":!0}),h.createElement("span",null,s)),h.createElement(K,{as:"div","aria-hidden":!c,className:j("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:k,"data-state":c?"open":"closed"},o))});function te(e,r){var a=e.values,s=S(e,["values"]),o=r.values,t=S(r,["values"]);return T(o,a)&&T(s,t)}function L(e){var r=R(),a=r.formatMessage,s=r.textComponent,o=s===void 0?d.Fragment:s,t=e.id,l=e.description,i=e.defaultMessage,u=e.values,_=e.children,y=e.tagName,c=y===void 0?o:y,b=e.ignoreTag,k={id:t,description:l,defaultMessage:i},f=a(k,u,{ignoreTag:b});return typeof _=="function"?_(Array.isArray(f)?f:[f]):c?d.createElement(c,null,d.Children.toArray(f)):d.createElement(d.Fragment,null,f)}L.displayName="FormattedMessage";var C=d.memo(L,te);C.displayName="MemoizedFormattedMessage";var ne=Object.defineProperty,se=(e,r,a)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,oe=(e,r,a)=>se(e,r+"",a);function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function ie(){if(O)return g;O=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(s,o,t){var l=null;if(t!==void 0&&(l=""+t),o.key!==void 0&&(l=""+o.key),"key"in o){t={};for(var i in o)i!=="key"&&(t[i]=o[i])}else t=o;return o=t.ref,{$$typeof:e,type:s,key:l,ref:o!==void 0?o:null,props:t}}return g.Fragment=r,g.jsx=a,g.jsxs=a,g}var A;function de(){return A||(A=1,N.exports=ie()),N.exports}var n=de();const Fr=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:n.jsx($,{variant:"warning",size:"small",children:n.jsx(q,{gap:"2",children:h.Children.map(e,r=>n.jsx(P,{size:"small",children:r},H(r)?r.key:r))})}),ce="_button_1rql2_1",me={button:ce},x={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"},D=p(x),Ir=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[a,s]=d.useState(r),o=()=>{a||(s(!0),e(!0))};return d.useEffect(()=>{s(r)},[r]),n.jsx("button",{className:me.button,"data-testid":"overstyringsknapp",type:"button",onClick:o,"aria-disabled":r,children:a?n.jsx(W,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:D.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):n.jsx(Q,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:D.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},v="#B7B1A9",z=4,fe=(e,r,a)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${v};
    border-radius: ${z}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${a}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${v};
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
`,he=(e,r,a)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${v};
    border-radius: ${z}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${a}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${v};
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
`,ue=(e,r,a,s)=>r?he(e,a,s):fe(e,a,s),ge=(e,r,a)=>a?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,$r=({children:e,alignOffset:r=0,alignLeft:a=!1,marginTop:s=0,marginLeft:o=0,hideBorder:t=!1})=>n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:ue(r,a,s,o)}}),n.jsx("div",{className:ge(r,a,t),children:e})]});var E={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var F;function pe(){return F||(F=1,function(e){(function(){var r={}.hasOwnProperty;function a(){for(var t="",l=0;l<arguments.length;l++){var i=arguments[l];i&&(t=o(t,s.call(this,i)))}return t}function s(t){if(typeof t=="string"||typeof t=="number")return this&&this[t]||t;if(typeof t!="object")return"";if(Array.isArray(t))return a.apply(this,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var l="";for(var i in t)r.call(t,i)&&t[i]&&(l=o(l,this&&this[i]||i));return l}function o(t,l){return l?t?t+" "+l:t+l:t}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(E)),E.exports}var xe=pe();const m=le(xe),_e="_borderbox_1vkvn_1",ye="_error_1vkvn_5",ve="_warning_1vkvn_8",be={borderbox:_e,error:ye,warning:ve},ke=m.bind(be),je=({error:e=!1,className:r,children:a})=>n.jsx(J,{padding:"4",className:ke("borderbox",{error:e},r),children:a}),we="_aksjonspunkt_kn1hn_1",Me="_erAksjonspunktApent_kn1hn_4",Ce="_erIkkeGodkjentAvBeslutter_kn1hn_8",Pe={aksjonspunkt:we,erAksjonspunktApent:Me,erIkkeGodkjentAvBeslutter:Ce};m.bind(Pe);const Lr=({dateString:e})=>n.jsx(M,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)});p(x);const Se="_floatRight_gekng_1",Te={floatRight:Se},zr=({children:e})=>n.jsx("span",{className:Te.floatRight,children:e});p(x);const Be="_flexColumnNew_1vdv1_1",Ne={flexColumnNew:Be},Oe=m.bind(Ne),Rr=({children:e,className:r})=>n.jsx("div",{className:Oe("flexColumnNew",r),children:e}),Ae="_flexRow_1yf0y_1",De="_spaceBetween_1yf0y_9",Ee="_alignItemsToBaseline_1yf0y_12",Fe="_alignItemsToFlexEnd_1yf0y_15",Ie="_justifyItemsToFlexEnd_1yf0y_18",$e="_wrap_1yf0y_21",Le={flexRow:Ae,spaceBetween:De,alignItemsToBaseline:Ee,alignItemsToFlexEnd:Fe,justifyItemsToFlexEnd:Ie,wrap:$e},ze=m.bind(Le),Hr=({children:e,spaceBetween:r=!1,alignItemsToBaseline:a=!1,alignItemsToFlexEnd:s=!1,wrap:o=!1,className:t})=>n.jsx("div",{className:ze("flexRow",{spaceBetween:r},{alignItemsToBaseline:a},{alignItemsToFlexEnd:s},{wrap:o},t),children:e}),Re="_flexContainer_1dk1o_1",He="_fluid_1dk1o_6",Ke="_fullHeight_1dk1o_9",qe="_flexWrap_1dk1o_17",Ve={flexContainer:Re,fluid:He,fullHeight:Ke,flexWrap:qe},Ze=m.bind(Ve),Kr=({children:e,wrap:r=!1,fullHeight:a=!1})=>n.jsx("div",{className:Ze("flexContainer","fluid",{flexWrap:r,fullHeight:a}),children:e}),Je=p(x),qr=({dateStringFom:e,dateStringTom:r,showTodayString:a=!1,size:s})=>n.jsxs(P,{as:"span",size:s,children:[n.jsx(M,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)})," - ",r&&n.jsx(M,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(r)}),a&&!r&&n.jsx("span",{children:Je.formatMessage({id:"PeriodLabel.DateToday"})})]}),We="_fourPx_qda5k_1",Qe="_eightPx_qda5k_4",Ue="_sixteenPx_qda5k_7",Xe="_twentyPx_qda5k_10",Ye="_thirtyTwoPx_qda5k_13",Ge="_fourtyPx_qda5k_16",er={fourPx:We,eightPx:Qe,sixteenPx:Ue,twentyPx:Xe,thirtyTwoPx:Ye,fourtyPx:Ge},rr=m.bind(er),ar=({fourPx:e=!1,eightPx:r=!1,sixteenPx:a=!1,twentyPx:s=!1,thirtyTwoPx:o=!1,fourtyPx:t=!1})=>n.jsx("div",{className:rr({fourPx:e,eightPx:r,sixteenPx:a,twentyPx:s,thirtyTwoPx:o,fourtyPx:t})}),tr="_modalText_lvzd7_1",nr={modalText:tr},sr=p(x),or=()=>{},lr=2e3;class ir extends d.Component{constructor(r){super(r),oe(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,lr)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:r}=this.state;if(!r)return null;const{pendingMessage:a}=this.props;return n.jsx(B,{width:"small",open:!0,"aria-label":a,onClose:or,children:n.jsx(B.Body,{children:n.jsxs(V,{children:[n.jsx(ee,{size:"large"}),n.jsx("div",{className:nr.modalText,children:n.jsx(I,{size:"small",children:sr.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const dr=({withoutBorder:e,error:r,children:a,className:s})=>e?a:n.jsx(je,{error:r,className:s,children:a}),Vr=({merknaderFraBeslutter:e,title:r,children:a,withoutBorder:s=!1,className:o=""})=>{const t=!!(e&&e.notAccepted);return n.jsxs(dr,{withoutBorder:s&&!t,error:t,className:o,children:[r&&n.jsxs(n.Fragment,{children:[n.jsx(I,{size:"small",children:r}),n.jsx(ar,{twentyPx:!0})]}),a]})},cr="_divider_1t980_1",mr="_dividerParagraf_1t980_8",fr="_leftPanel_1t980_11",hr="_rightPanel_1t980_14",ur={divider:cr,dividerParagraf:mr,leftPanel:fr,rightPanel:hr};m.bind(ur);const gr="_editedIcon_ulrjl_1",pr={editedIcon:gr},xr=m.bind(pr),Zr=({className:e=""})=>n.jsx("span",{"data-testid":"editedIcon",className:xr("editedIcon",e),children:n.jsx(Z,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),Jr=e=>{const r=d.useRef(void 0);return d.useEffect(()=>{r.current=e},[e]),r.current},_r="_checkBlaIkon_e3roh_1",yr="_container_e3roh_5",vr="_rad_e3roh_11",w={checkBlaIkon:_r,container:yr,rad:vr},Wr=({saksopplysninger:e})=>n.jsx("div",{className:w.container,children:e.map((r,a)=>n.jsxs("div",{className:w.rad,children:[r.readMoreContent&&n.jsx(ae,{size:"small",header:n.jsx(C,{id:r.textId}),children:r.readMoreContent}),!r.readMoreContent&&n.jsxs(n.Fragment,{children:[n.jsx(Y,{className:w.checkBlaIkon,height:35,width:35}),n.jsx(P,{size:"small",children:n.jsx(C,{id:r.textId})})]})]},`BlaBoksMedCheckmarkListe-${r.textId}-${a}`))});class br extends d.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,a){console.error("Error caught by error boundary:",r,a)}render(){const{hasError:r}=this.state,{children:a,errorMessage:s}=this.props;return r?n.jsx($,{variant:"error",children:s||"Noe gikk galt"}):a}}ir.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"en"};br.__docgenInfo={description:"",methods:[],displayName:"ln"};export{Ir as D,Rr as K,Fr as L,C as M,ar as Q,ae as R,zr as U,Hr as X,$r as Y,Kr as Z,qr as a,Jr as b,je as c,br as l,Zr as n,Wr as s,Vr as t,Lr as z};
