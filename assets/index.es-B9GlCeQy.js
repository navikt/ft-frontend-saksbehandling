import{e as C,r as d}from"./index-DNHX5htx.js";import{H as S,K as w,R as A,I as B,r as c}from"./index.es-Dq6sdjeM.js";import{L as j,a as T}from"./Label-CYbek38p.js";import{A as _}from"./Alert-Ja4tf6sE.js";import{V as O,H as $}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{S as D}from"./PersonPencilFill-DqunLdn1.js";import{B as L}from"./Box-C3b4VC_S.js";import{S as F,a as P}from"./KeyVerticalFill-DmgzHF4Z.js";import{M as f}from"./Modal-DdoS0OAm.js";import{L as N}from"./Loader-42dkOmtz.js";var E=Object.defineProperty,H=(r,e,t)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,K=(r,e,t)=>H(r,e+"",t);function I(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var m={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function J(){if(b)return h;b=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(o,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var l in s)l!=="key"&&(a[l]=s[l])}else a=s;return s=a.ref,{$$typeof:r,type:o,key:i,ref:s!==void 0?s:null,props:a}}return h.Fragment=e,h.jsx=t,h.jsxs=t,h}var x;function V(){return x||(x=1,m.exports=J()),m.exports}var n=V();const Fr=({children:r})=>!r||Array.isArray(r)&&r.length===0?null:n.jsx(_,{variant:"warning",size:"small",children:n.jsx(O,{gap:"2",children:C.Children.map(r,e=>n.jsx(T,{size:"small",children:e},S(e)?e.key:e))})}),R="_button_1rql2_1",z={button:R},g={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},y=c(g),Pr=({onClick:r=()=>{},erOverstyrt:e=!1})=>{const[t,o]=d.useState(e),s=()=>{t||(o(!0),r(!0))};return d.useEffect(()=>{o(e)},[e]),n.jsx("button",{className:z.button,"data-testid":"overstyringsknapp",type:"button",onClick:s,"aria-disabled":e,children:t?n.jsx(F,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:y.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):n.jsx(P,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:y.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},p="#B7B1A9",M=4,G=(r,e,t)=>`
  .arrowBoxTop${r} {
    background: #ffffff;
    border: 1px solid ${p};
    border-radius: ${M}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${r}:before {
    background-color: #ffffff;
    border: 1px solid ${p};
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
`,q=(r,e,t)=>`
  .arrowBoxLeft${r} {
    background: #ffffff;
    border: 1px solid ${p};
    border-radius: ${M}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${r}:before {
    background-color: #ffffff;
    border: 1px solid ${p};
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
`,W=(r,e,t,o)=>e?q(r,t,o):G(r,t,o),X=(r,e,t)=>t?"":e?`arrowBoxLeft${r}`:`arrowBoxTop${r}`,Nr=({children:r,alignOffset:e=0,alignLeft:t=!1,marginTop:o=0,marginLeft:s=0,hideBorder:a=!1})=>n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:W(e,t,o,s)}}),n.jsx("div",{className:X(e,t,a),children:r})]});var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var k;function Z(){return k||(k=1,function(r){(function(){var e={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=s(a,o.call(this,l)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)e.call(a,l)&&a[l]&&(i=s(i,this&&this[l]||l));return i}function s(a,i){return i?a?a+" "+i:a+i:a}r.exports?(t.default=t,r.exports=t):window.classNames=t})()}(v)),v.exports}var U=Z();const u=I(U),Q="_borderbox_1vkvn_1",Y="_error_1vkvn_5",rr="_warning_1vkvn_8",er={borderbox:Q,error:Y,warning:rr},tr=u.bind(er),ar=({error:r=!1,className:e,children:t})=>n.jsx(L,{padding:"4",className:tr("borderbox",{error:r},e),children:t}),nr="_aksjonspunkt_kn1hn_1",or="_erAksjonspunktApent_kn1hn_4",sr="_erIkkeGodkjentAvBeslutter_kn1hn_8",ir={aksjonspunkt:nr,erAksjonspunktApent:or,erIkkeGodkjentAvBeslutter:sr};u.bind(ir);const Er=({dateString:r,year:e,month:t,day:o})=>n.jsx(n.Fragment,{children:A(r,{year:e,month:t,day:o})});c(g);const Hr=({dateStringFom:r,dateStringTom:e,showTodayString:t=!1})=>n.jsx(n.Fragment,{children:w(r,e,{showTodayString:t})}),lr="_modalText_lvzd7_1",dr={modalText:lr},hr=c(g),pr=()=>{},cr=2e3;class gr extends d.Component{constructor(e){super(e),K(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,cr)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:e}=this.state;if(!e)return null;const{pendingMessage:t}=this.props;return n.jsx(f,{width:"small",open:!0,"aria-label":t,onClose:pr,children:n.jsx(f.Body,{children:n.jsxs($,{children:[n.jsx(N,{size:"large"}),n.jsx("div",{className:dr.modalText,children:n.jsx(j,{size:"small",children:hr.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const ur=({withoutBorder:r,error:e,children:t,className:o})=>r?t:n.jsx(ar,{error:e,className:o,children:t}),Kr=({merknaderFraBeslutter:r,title:e,children:t,withoutBorder:o=!1,className:s=""})=>{const a=!!(r&&r.notAccepted);return n.jsxs(ur,{withoutBorder:o&&!a,error:a,className:s,children:[e&&n.jsxs(n.Fragment,{children:[n.jsx(j,{size:"small",children:e}),n.jsx("div",{style:{marginBottom:"20px"}})]}),t]})},fr="_divider_1t980_1",mr="_dividerParagraf_1t980_8",br="_leftPanel_1t980_11",xr="_rightPanel_1t980_14",yr={divider:fr,dividerParagraf:mr,leftPanel:br,rightPanel:xr};u.bind(yr);const Ir=()=>n.jsx("span",{"data-testid":"editedIcon",children:n.jsx(D,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})}),Jr=r=>{const e=d.useRef(void 0);return d.useEffect(()=>{e.current=r},[r]),e.current};class vr extends d.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Error caught by error boundary:",e,t)}render(){const{hasError:e}=this.state,{children:t,errorMessage:o}=this.props;return e?n.jsx(_,{variant:"error",children:o||"Noe gikk galt"}):t}}c(g);const kr="_noWrap_1a1ul_2",jr={noWrap:kr},_r=({children:r})=>n.jsx("span",{className:jr.noWrap,children:r}),Vr=({beløp:r,withKr:e=!1})=>{const t=r==null?void 0:r.toString().replace(/\s/g,"");return n.jsxs(_r,{children:[t?B(t):"-",t&&e&&" kr"]})};gr.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"at"};vr.__docgenInfo={description:"",methods:[],displayName:"ut"};export{Nr as G,Fr as J,_r as L,Er as X,vr as a,Jr as c,Ir as i,Vr as m,Hr as n,Pr as q,Kr as s,ar as u};
