import{r as l}from"./iframe-DzXUO6GT.js";import{Q as w,w as S,o as C,r as c}from"./index.es-yTIDcLWJ.js";import{S as A}from"./PersonPencilFill-DyJneeHY.js";import{L as B,B as M}from"./Label-BptAkRyu.js";import{A as j}from"./Alert-DFJmKH85.js";import{V as T}from"./VStack-vldtWtPo.js";import{T as $}from"./Tooltip-B3LKtxru.js";import{B as O}from"./Box-DL9bOJYF.js";import{B as D}from"./Button-af7718Cc.js";import{S as K,a as N}from"./KeyVerticalFill-DFYvwClO.js";function F(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var f={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function L(){if(m)return p;m=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(o,i,a){var s=null;if(a!==void 0&&(s=""+a),i.key!==void 0&&(s=""+i.key),"key"in i){a={};for(var d in i)d!=="key"&&(a[d]=i[d])}else a=i;return i=a.ref,{$$typeof:r,type:o,key:s,ref:i!==void 0?i:null,props:a}}return p.Fragment=e,p.jsx=t,p.jsxs=t,p}var x;function E(){return x||(x=1,f.exports=L()),f.exports}var n=E();const wr=({children:r})=>{const e=l.Children.toArray(r);return e.length===0?null:n.jsx(j,{variant:"warning",size:"small",children:n.jsx(T,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:e.map(t=>n.jsx(M,{size:"small",children:t},P(t)))})})},P=r=>{if(l.isValidElement(r))return r.key;if(typeof r=="string"||typeof r=="number")return`tekst-${r}`},u={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},k=c(u),Sr=({onClick:r=()=>{},erOverstyrt:e=!1})=>{const[t,o]=l.useState(e),i=()=>{t||(o(!0),r(!0))};return l.useEffect(()=>{o(e)},[e]),n.jsx(D,{variant:t?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:i,"aria-disabled":e,disabled:e,icon:t?n.jsx(K,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:k.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):n.jsx(N,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:k.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},h="var(--ax-bg-neutral-strong)",_=4,V=(r,e,t)=>`
  .arrowBoxTop${r} {
    background: var(--ax-bg-default);
    border: 1px solid ${h};
    border-radius: ${_}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${r}:before {
    background-color: var(--ax-bg-default);
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
`,H=(r,e,t)=>`
  .arrowBoxLeft${r} {
    background: var(--ax-bg-default);
    border: 1px solid ${h};
    border-radius: ${_}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${e}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${r}:before {
    background-color: var(--ax-bg-default);
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
`,I=(r,e,t,o)=>e?H(r,t,o):V(r,t,o),G=(r,e,t)=>t?"":e?`arrowBoxLeft${r}`:`arrowBoxTop${r}`,Cr=({children:r,alignOffset:e=0,alignLeft:t=!1,marginTop:o=0,marginLeft:i=0,hideBorder:a=!1})=>n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:I(e,t,o,i)}}),n.jsx("div",{className:G(e,t,a),children:r})]});var b={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var v;function J(){return v||(v=1,function(r){(function(){var e={}.hasOwnProperty;function t(){for(var a="",s=0;s<arguments.length;s++){var d=arguments[s];d&&(a=i(a,o.call(this,d)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var d in a)e.call(a,d)&&a[d]&&(s=i(s,this&&this[d]||d));return s}function i(a,s){return s?a?a+" "+s:a+s:a}r.exports?(t.default=t,r.exports=t):window.classNames=t})()}(b)),b.exports}var W=J();const g=F(W),z="_borderbox_1a0x6_1",Q="_error_1a0x6_5",U="_warning_1a0x6_8",Z={borderbox:z,error:Q,warning:U},R=g.bind(Z),Y=({error:r=!1,className:e,children:t})=>n.jsx(O.New,{padding:"4",className:R("borderbox",{error:r},e),children:t}),q="_aksjonspunkt_11wjs_1",X="_erAksjonspunktApent_11wjs_4",rr="_erIkkeGodkjentAvBeslutter_11wjs_8",er={aksjonspunkt:q,erAksjonspunktApent:X,erIkkeGodkjentAvBeslutter:rr},tr=g.bind(er),Ar=({erAksjonspunktApent:r,erIkkeGodkjentAvBeslutter:e,className:t,children:o})=>n.jsx("div",{className:tr(t,"aksjonspunkt",{erAksjonspunktApent:r&&!e,erIkkeGodkjentAvBeslutter:e}),children:o}),Br=({dateString:r,year:e,month:t,day:o})=>n.jsx(n.Fragment,{children:C(r,{year:e,month:t,day:o})});c(u);const Mr=({dateStringFom:r,dateStringTom:e,showTodayString:t=!1})=>n.jsx(n.Fragment,{children:w(r,e,{showTodayString:t})});c(u);const ar=({withoutBorder:r,error:e,children:t,className:o})=>r?t:n.jsx(Y,{error:e,className:o,children:t}),Tr=({merknaderFraBeslutter:r,title:e,children:t,withoutBorder:o=!1,className:i=""})=>{const a=!!(r&&r.notAccepted);return n.jsxs(ar,{withoutBorder:o&&!a,error:a,className:i,children:[e&&n.jsxs(n.Fragment,{children:[n.jsx(B,{size:"small",children:e}),n.jsx("div",{style:{marginBottom:"20px"}})]}),t]})},nr="_divider_1jpov_1",or="_dividerParagraf_1jpov_8",ir="_leftPanel_1jpov_11",sr="_rightPanel_1jpov_14",dr={divider:nr,dividerParagraf:or,leftPanel:ir,rightPanel:sr};g.bind(dr);const $r=()=>n.jsx("span",{"data-testid":"editedIcon",children:n.jsx(A,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})}),Or=r=>{const e=l.useRef(void 0);return l.useEffect(()=>{e.current=r},[r]),e.current};class lr extends l.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Error caught by error boundary:",e,t)}render(){const{hasError:e}=this.state,{children:t,errorMessage:o}=this.props;return e?n.jsx(j,{variant:"error",children:o||"Noe gikk galt"}):t}}c(u);const pr="_noWrap_2yhvg_1",cr={noWrap:pr},Dr=({children:r})=>n.jsx("span",{className:cr.noWrap,children:r}),ur=c(u),hr=({tekst:r,children:e})=>{const[t,o]=l.useState(!1);if(!r)return e;const i=async()=>{await navigator.clipboard.writeText(r),o(!0),setTimeout(()=>{o(!1)},1e3)};return n.jsx($,{content:ur.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:n.jsx("span",{"aria-hidden":"true",onClick:i,children:e??r})})},y={default:"_default_af3od_1",rød:"_rød_af3od_5"},Kr=({beløp:r,kr:e=!1,rød:t=!1})=>{const o=r?.toString().replace(/\s/g,"");return n.jsx(hr,{tekst:o,children:n.jsxs("span",{className:t?y.rød:y.default,children:[o?S(o):"-",o&&e&&" kr"]})})};lr.__docgenInfo={description:"",methods:[],displayName:"ct"};export{Br as G,Cr as H,Ar as J,Sr as U,wr as W,lr as c,Kr as f,Or as i,Tr as n,$r as o,Mr as r,Dr as u};
