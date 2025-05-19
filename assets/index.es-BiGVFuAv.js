import{e as S,r as d}from"./index-DNHX5htx.js";import{q as w,t as A,a as B,o as T,r as c}from"./index.es-Bs6SSTCM.js";import{L as _,a as $}from"./Label-CYbek38p.js";import{A as M}from"./Alert-Ja4tf6sE.js";import{V as O,H as D}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{S as L}from"./PersonPencilFill-DqunLdn1.js";import{B as N}from"./Box-C3b4VC_S.js";import{S as P,a as F}from"./KeyVerticalFill-DmgzHF4Z.js";import{M as g}from"./Modal-DdoS0OAm.js";import{L as E}from"./Loader-42dkOmtz.js";var K=Object.defineProperty,I=(r,e,t)=>e in r?K(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,G=(r,e,t)=>I(r,e+"",t);function H(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var m={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function J(){if(b)return p;b=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(o,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var l in s)l!=="key"&&(a[l]=s[l])}else a=s;return s=a.ref,{$$typeof:r,type:o,key:i,ref:s!==void 0?s:null,props:a}}return p.Fragment=e,p.jsx=t,p.jsxs=t,p}var x;function V(){return x||(x=1,m.exports=J()),m.exports}var n=V();const Pr=({children:r})=>!r||Array.isArray(r)&&r.length===0?null:n.jsx(M,{variant:"warning",size:"small",children:n.jsx(O,{gap:"2",children:S.Children.map(r,e=>n.jsx($,{size:"small",children:e},w(e)?e.key:e))})}),z="_button_1rql2_1",q={button:z},u={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},y=c(u),Fr=({onClick:r=()=>{},erOverstyrt:e=!1})=>{const[t,o]=d.useState(e),s=()=>{t||(o(!0),r(!0))};return d.useEffect(()=>{o(e)},[e]),n.jsx("button",{className:q.button,"data-testid":"overstyringsknapp",type:"button",onClick:s,"aria-disabled":e,children:t?n.jsx(P,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:y.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):n.jsx(F,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:y.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},h="#B7B1A9",C=4,R=(r,e,t)=>`
  .arrowBoxTop${r} {
    background: #ffffff;
    border: 1px solid ${h};
    border-radius: ${C}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${r}:before {
    background-color: #ffffff;
    border: 1px solid ${h};
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
    border: 1px solid ${h};
    border-radius: ${C}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${r}:before {
    background-color: #ffffff;
    border: 1px solid ${h};
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
`,Z=(r,e,t,o)=>e?W(r,t,o):R(r,t,o),U=(r,e,t)=>t?"":e?`arrowBoxLeft${r}`:`arrowBoxTop${r}`,Er=({children:r,alignOffset:e=0,alignLeft:t=!1,marginTop:o=0,marginLeft:s=0,hideBorder:a=!1})=>n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:Z(e,t,o,s)}}),n.jsx("div",{className:U(e,t,a),children:r})]});var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var k;function X(){return k||(k=1,function(r){(function(){var e={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=s(a,o.call(this,l)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)e.call(a,l)&&a[l]&&(i=s(i,this&&this[l]||l));return i}function s(a,i){return i?a?a+" "+i:a+i:a}r.exports?(t.default=t,r.exports=t):window.classNames=t})()}(v)),v.exports}var Q=X();const f=H(Q),Y="_borderbox_1vkvn_1",rr="_error_1vkvn_5",er="_warning_1vkvn_8",tr={borderbox:Y,error:rr,warning:er},ar=f.bind(tr),nr=({error:r=!1,className:e,children:t})=>n.jsx(N,{padding:"4",className:ar("borderbox",{error:r},e),children:t}),or="_aksjonspunkt_kn1hn_1",sr="_erAksjonspunktApent_kn1hn_4",ir="_erIkkeGodkjentAvBeslutter_kn1hn_8",lr={aksjonspunkt:or,erAksjonspunktApent:sr,erIkkeGodkjentAvBeslutter:ir},dr=f.bind(lr),Kr=({erAksjonspunktApent:r,erIkkeGodkjentAvBeslutter:e,className:t,children:o})=>n.jsx("div",{className:dr(t,"aksjonspunkt",{erAksjonspunktApent:r&&!e,erIkkeGodkjentAvBeslutter:e}),children:o}),Ir=({dateString:r,year:e,month:t,day:o})=>n.jsx(n.Fragment,{children:T(r,{year:e,month:t,day:o})});c(u);const Gr=({dateStringFom:r,dateStringTom:e,showTodayString:t=!1})=>n.jsx(n.Fragment,{children:A(r,e,{showTodayString:t})}),pr="_modalText_lvzd7_1",hr={modalText:pr},cr=c(u),ur=()=>{},fr=2e3;class gr extends d.Component{constructor(e){super(e),G(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,fr)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:e}=this.state;if(!e)return null;const{pendingMessage:t}=this.props;return n.jsx(g,{width:"small",open:!0,"aria-label":t,onClose:ur,children:n.jsx(g.Body,{children:n.jsxs(D,{children:[n.jsx(E,{size:"large"}),n.jsx("div",{className:hr.modalText,children:n.jsx(_,{size:"small",children:cr.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const mr=({withoutBorder:r,error:e,children:t,className:o})=>r?t:n.jsx(nr,{error:e,className:o,children:t}),Hr=({merknaderFraBeslutter:r,title:e,children:t,withoutBorder:o=!1,className:s=""})=>{const a=!!(r&&r.notAccepted);return n.jsxs(mr,{withoutBorder:o&&!a,error:a,className:s,children:[e&&n.jsxs(n.Fragment,{children:[n.jsx(_,{size:"small",children:e}),n.jsx("div",{style:{marginBottom:"20px"}})]}),t]})},br="_divider_1t980_1",xr="_dividerParagraf_1t980_8",yr="_leftPanel_1t980_11",vr="_rightPanel_1t980_14",kr={divider:br,dividerParagraf:xr,leftPanel:yr,rightPanel:vr};f.bind(kr);const Jr=()=>n.jsx("span",{"data-testid":"editedIcon",children:n.jsx(L,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})}),Vr=r=>{const e=d.useRef(void 0);return d.useEffect(()=>{e.current=r},[r]),e.current};class jr extends d.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Error caught by error boundary:",e,t)}render(){const{hasError:e}=this.state,{children:t,errorMessage:o}=this.props;return e?n.jsx(M,{variant:"error",children:o||"Noe gikk galt"}):t}}c(u);const _r="_noWrap_2yhvg_1",Mr={noWrap:_r},zr=({children:r})=>n.jsx("span",{className:Mr.noWrap,children:r}),j={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},qr=({beløp:r,kr:e=!1,rød:t=!1})=>{const o=r==null?void 0:r.toString().replace(/\s/g,"");return n.jsxs("span",{className:t?j.rød:j.default,children:[o?B(o):"-",o&&e&&" kr"]})};gr.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"at"};jr.__docgenInfo={description:"",methods:[],displayName:"ut"};export{Er as G,Pr as J,Kr as K,Ir as X,Vr as c,nr as f,qr as h,Jr as i,zr as m,Gr as n,Fr as q,Hr as s,jr as u};
