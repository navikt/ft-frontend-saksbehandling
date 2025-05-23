import{e as C,r as d}from"./index-DNHX5htx.js";import{q as w,t as A,a as T,o as B,r as c}from"./index.es-Bs6SSTCM.js";import{L as _,a as O}from"./Label-CYbek38p.js";import{A as M}from"./Alert-Ja4tf6sE.js";import{V as D,H as $}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{S as K}from"./PersonPencilFill-DqunLdn1.js";import{T as L}from"./Tooltip-BnLM-CWP.js";import{B as N}from"./Box-C3b4VC_S.js";import{S as P,a as F}from"./KeyVerticalFill-DmgzHF4Z.js";import{M as g}from"./Modal-DdoS0OAm.js";import{L as E}from"./Loader-42dkOmtz.js";var G=Object.defineProperty,H=(r,e,t)=>e in r?G(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,I=(r,e,t)=>H(r,e+"",t);function V(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var m={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function z(){if(b)return p;b=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,n){var i=null;if(n!==void 0&&(i=""+n),o.key!==void 0&&(i=""+o.key),"key"in o){n={};for(var l in o)l!=="key"&&(n[l]=o[l])}else n=o;return o=n.ref,{$$typeof:r,type:s,key:i,ref:o!==void 0?o:null,props:n}}return p.Fragment=e,p.jsx=t,p.jsxs=t,p}var x;function J(){return x||(x=1,m.exports=z()),m.exports}var a=J();const Gr=({children:r})=>!r||Array.isArray(r)&&r.length===0?null:a.jsx(M,{variant:"warning",size:"small",children:a.jsx(D,{gap:"2",children:C.Children.map(r,e=>a.jsx(O,{size:"small",children:e},w(e)?e.key:e))})}),Z="_button_1rql2_1",Q={button:Z},h={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},k=c(h),Hr=({onClick:r=()=>{},erOverstyrt:e=!1})=>{const[t,s]=d.useState(e),o=()=>{t||(s(!0),r(!0))};return d.useEffect(()=>{s(e)},[e]),a.jsx("button",{className:Q.button,"data-testid":"overstyringsknapp",type:"button",onClick:o,"aria-disabled":e,children:t?a.jsx(P,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:k.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):a.jsx(F,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:k.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},u="#B7B1A9",S=4,R=(r,e,t)=>`
  .arrowBoxTop${r} {
    background: #ffffff;
    border: 1px solid ${u};
    border-radius: ${S}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${r}:before {
    background-color: #ffffff;
    border: 1px solid ${u};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${r}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,W=(r,e,t)=>`
  .arrowBoxLeft${r} {
    background: #ffffff;
    border: 1px solid ${u};
    border-radius: ${S}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${r}:before {
    background-color: #ffffff;
    border: 1px solid ${u};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${r}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,q=(r,e,t,s)=>e?W(r,t,s):R(r,t,s),U=(r,e,t)=>t?"":e?`arrowBoxLeft${r}`:`arrowBoxTop${r}`,Ir=({children:r,alignOffset:e=0,alignLeft:t=!1,marginTop:s=0,marginLeft:o=0,hideBorder:n=!1})=>a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:q(e,t,s,o)}}),a.jsx("div",{className:U(e,t,n),children:r})]});var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var y;function X(){return y||(y=1,function(r){(function(){var e={}.hasOwnProperty;function t(){for(var n="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(n=o(n,s.call(this,l)))}return n}function s(n){if(typeof n=="string"||typeof n=="number")return this&&this[n]||n;if(typeof n!="object")return"";if(Array.isArray(n))return t.apply(this,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var i="";for(var l in n)e.call(n,l)&&n[l]&&(i=o(i,this&&this[l]||l));return i}function o(n,i){return i?n?n+" "+i:n+i:n}r.exports?(t.default=t,r.exports=t):window.classNames=t})()}(v)),v.exports}var Y=X();const f=V(Y),rr="_borderbox_1vkvn_1",er="_error_1vkvn_5",tr="_warning_1vkvn_8",ar={borderbox:rr,error:er,warning:tr},nr=f.bind(ar),sr=({error:r=!1,className:e,children:t})=>a.jsx(N,{padding:"4",className:nr("borderbox",{error:r},e),children:t}),or="_aksjonspunkt_kn1hn_1",ir="_erAksjonspunktApent_kn1hn_4",lr="_erIkkeGodkjentAvBeslutter_kn1hn_8",dr={aksjonspunkt:or,erAksjonspunktApent:ir,erIkkeGodkjentAvBeslutter:lr},pr=f.bind(dr),Vr=({erAksjonspunktApent:r,erIkkeGodkjentAvBeslutter:e,className:t,children:s})=>a.jsx("div",{className:pr(t,"aksjonspunkt",{erAksjonspunktApent:r&&!e,erIkkeGodkjentAvBeslutter:e}),children:s}),zr=({dateString:r,year:e,month:t,day:s})=>a.jsx(a.Fragment,{children:B(r,{year:e,month:t,day:s})});c(h);const Jr=({dateStringFom:r,dateStringTom:e,showTodayString:t=!1})=>a.jsx(a.Fragment,{children:A(r,e,{showTodayString:t})}),cr="_modalText_lvzd7_1",hr={modalText:cr},ur=c(h),fr=()=>{},gr=2e3;class mr extends d.Component{constructor(e){super(e),I(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,gr)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:e}=this.state;if(!e)return null;const{pendingMessage:t}=this.props;return a.jsx(g,{width:"small",open:!0,"aria-label":t,onClose:fr,children:a.jsx(g.Body,{children:a.jsxs($,{children:[a.jsx(E,{size:"large"}),a.jsx("div",{className:hr.modalText,children:a.jsx(_,{size:"small",children:ur.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const br=({withoutBorder:r,error:e,children:t,className:s})=>r?t:a.jsx(sr,{error:e,className:s,children:t}),Zr=({merknaderFraBeslutter:r,title:e,children:t,withoutBorder:s=!1,className:o=""})=>{const n=!!(r&&r.notAccepted);return a.jsxs(br,{withoutBorder:s&&!n,error:n,className:o,children:[e&&a.jsxs(a.Fragment,{children:[a.jsx(_,{size:"small",children:e}),a.jsx("div",{style:{marginBottom:"20px"}})]}),t]})},xr="_divider_1t980_1",kr="_dividerParagraf_1t980_8",vr="_leftPanel_1t980_11",yr="_rightPanel_1t980_14",jr={divider:xr,dividerParagraf:kr,leftPanel:vr,rightPanel:yr};f.bind(jr);const Qr=()=>a.jsx("span",{"data-testid":"editedIcon",children:a.jsx(K,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})}),Rr=r=>{const e=d.useRef(void 0);return d.useEffect(()=>{e.current=r},[r]),e.current};class _r extends d.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Error caught by error boundary:",e,t)}render(){const{hasError:e}=this.state,{children:t,errorMessage:s}=this.props;return e?a.jsx(M,{variant:"error",children:s||"Noe gikk galt"}):t}}c(h);const Mr="_noWrap_2yhvg_1",Sr={noWrap:Mr},Wr=({children:r})=>a.jsx("span",{className:Sr.noWrap,children:r}),Cr=c(h),wr=({tekst:r,children:e})=>{const[t,s]=d.useState(!1);if(!r)return e;const o=async()=>{await navigator.clipboard.writeText(r),s(!0),setTimeout(()=>{s(!1)},1e3)};return a.jsx(L,{content:Cr.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:a.jsx("span",{"aria-hidden":"true",onClick:o,children:e??r})})},j={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},qr=({beløp:r,kr:e=!1,rød:t=!1})=>{const s=r==null?void 0:r.toString().replace(/\s/g,"");return a.jsx(wr,{tekst:s,children:a.jsxs("span",{className:t?j.rød:j.default,children:[s?T(s):"-",s&&e&&" kr"]})})};mr.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"it"};_r.__docgenInfo={description:"",methods:[],displayName:"pt"};export{Gr as G,Vr as Q,Hr as X,Ir as Z,Wr as b,Qr as d,zr as e,Rr as f,Zr as l,sr as m,Jr as o,_r as p,qr as x};
