import{r as l,e as u}from"./index-DNHX5htx.js";import{u as I,_ as C,b as S,J as V,s as H,R as J,r as y}from"./index.es-Djg88Nde.js";import{B as R,L as E,a as F}from"./Label-CYbek38p.js";import{A as D}from"./Alert-Ja4tf6sE.js";import{V as K,H as U}from"./VStack-xkjQwvKn.js";import{u as q}from"./Theme-C_brBVJK.js";import{S as Q}from"./PersonPencilFill-DqunLdn1.js";import{B as Z}from"./Box-C3b4VC_S.js";import{S as G,a as X}from"./KeyVerticalFill-DmgzHF4Z.js";import{c as Y}from"./Button-Cc809GDC.js";import{u as W,S as ee}from"./Checkmark-DkINtRdf.js";import{S as re}from"./ChevronDown-6T9JsqER.js";import{M as w}from"./Modal-OqvqWSjt.js";import{L as ae}from"./Loader-42dkOmtz.js";var te=function(e,r){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)r.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};const ne=l.forwardRef((e,r)=>{var{className:a,header:o,children:s,open:t,defaultOpen:i=!1,onClick:d,size:p="medium",onOpenChange:g}=e,v=te(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=q(),[c,k]=W({defaultValue:i,value:t,onChange:g}),h=p==="small"?"small":"medium";return u.createElement("div",{className:m("navds-read-more",`navds-read-more--${p}`,a,{"navds-read-more--open":c}),"data-volume":"low"},u.createElement("button",Object.assign({},v,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":p==="small"}),onClick:Y(d,()=>k(z=>!z)),"aria-expanded":c,"data-state":c?"open":"closed"}),u.createElement(re,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),u.createElement("span",null,o)),u.createElement(R,{as:"div","aria-hidden":!c,className:m("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:h,"data-state":c?"open":"closed"},s))});function oe(e,r){var a=e.values,o=C(e,["values"]),s=r.values,t=C(r,["values"]);return S(s,a)&&S(o,t)}function P(e){var r=I(),a=r.formatMessage,o=r.textComponent,s=o===void 0?l.Fragment:o,t=e.id,i=e.description,d=e.defaultMessage,p=e.values,g=e.children,v=e.tagName,m=v===void 0?s:v,c=e.ignoreTag,k={id:t,description:i,defaultMessage:d},h=a(k,p,{ignoreTag:c});return typeof g=="function"?g(Array.isArray(h)?h:[h]):m?l.createElement(m,null,h):l.createElement(l.Fragment,null,h)}P.displayName="FormattedMessage";var j=l.memo(P,oe);j.displayName="MemoizedFormattedMessage";var se=Object.defineProperty,ie=(e,r,a)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,de=(e,r,a)=>ie(e,r+"",a);function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B;function ce(){if(B)return f;B=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,s,t){var i=null;if(t!==void 0&&(i=""+t),s.key!==void 0&&(i=""+s.key),"key"in s){t={};for(var d in s)d!=="key"&&(t[d]=s[d])}else t=s;return s=t.ref,{$$typeof:e,type:o,key:i,ref:s!==void 0?s:null,props:t}}return f.Fragment=r,f.jsx=a,f.jsxs=a,f}var A;function me(){return A||(A=1,O.exports=ce()),O.exports}var n=me();const sr=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:n.jsx(D,{variant:"warning",size:"small",children:n.jsx(K,{gap:"2",children:u.Children.map(e,r=>n.jsx(F,{size:"small",children:r},V(r)?r.key:r))})}),he="_button_1rql2_1",ue={button:he},x={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},$=y(x),ir=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[a,o]=l.useState(r),s=()=>{a||(o(!0),e(!0))};return l.useEffect(()=>{o(r)},[r]),n.jsx("button",{className:ue.button,"data-testid":"overstyringsknapp",type:"button",onClick:s,"aria-disabled":r,children:a?n.jsx(G,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:$.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):n.jsx(X,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:$.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},b="#B7B1A9",L=4,pe=(e,r,a)=>`
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
`,fe=(e,r,a)=>`
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
`,ge=(e,r,a,o)=>r?fe(e,a,o):pe(e,a,o),ve=(e,r,a)=>a?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,dr=({children:e,alignOffset:r=0,alignLeft:a=!1,marginTop:o=0,marginLeft:s=0,hideBorder:t=!1})=>n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:ge(r,a,o,s)}}),n.jsx("div",{className:ve(r,a,t),children:e})]});var N={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var T;function be(){return T||(T=1,function(e){(function(){var r={}.hasOwnProperty;function a(){for(var t="",i=0;i<arguments.length;i++){var d=arguments[i];d&&(t=s(t,o.call(this,d)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return this&&this[t]||t;if(typeof t!="object")return"";if(Array.isArray(t))return a.apply(this,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var i="";for(var d in t)r.call(t,d)&&t[d]&&(i=s(i,this&&this[d]||d));return i}function s(t,i){return i?t?t+" "+i:t+i:t}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(N)),N.exports}var ye=be();const M=le(ye),xe="_borderbox_1vkvn_1",ke="_error_1vkvn_5",_e="_warning_1vkvn_8",je={borderbox:xe,error:ke,warning:_e},Me=M.bind(je),Ce=({error:e=!1,className:r,children:a})=>n.jsx(Z,{padding:"4",className:Me("borderbox",{error:e},r),children:a}),Se="_aksjonspunkt_kn1hn_1",we="_erAksjonspunktApent_kn1hn_4",Oe="_erIkkeGodkjentAvBeslutter_kn1hn_8",Be={aksjonspunkt:Se,erAksjonspunktApent:we,erIkkeGodkjentAvBeslutter:Oe};M.bind(Be);const lr=({dateString:e,year:r,month:a,day:o})=>n.jsx(n.Fragment,{children:J(e,{year:r,month:a,day:o})});y(x);const cr=({dateStringFom:e,dateStringTom:r,showTodayString:a=!1})=>n.jsx(n.Fragment,{children:H(e,r,{showTodayString:a})}),Ae="_modalText_lvzd7_1",$e={modalText:Ae},Ne=y(x),Te=()=>{},Ee=2e3;class Fe extends l.Component{constructor(r){super(r),de(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,Ee)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:r}=this.state;if(!r)return null;const{pendingMessage:a}=this.props;return n.jsx(w,{width:"small",open:!0,"aria-label":a,onClose:Te,children:n.jsx(w.Body,{children:n.jsxs(U,{children:[n.jsx(ae,{size:"large"}),n.jsx("div",{className:$e.modalText,children:n.jsx(E,{size:"small",children:Ne.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const De=({withoutBorder:e,error:r,children:a,className:o})=>e?a:n.jsx(Ce,{error:r,className:o,children:a}),mr=({merknaderFraBeslutter:e,title:r,children:a,withoutBorder:o=!1,className:s=""})=>{const t=!!(e&&e.notAccepted);return n.jsxs(De,{withoutBorder:o&&!t,error:t,className:s,children:[r&&n.jsxs(n.Fragment,{children:[n.jsx(E,{size:"small",children:r}),n.jsx("div",{style:{marginBottom:"20px"}})]}),a]})},Pe="_divider_1t980_1",Le="_dividerParagraf_1t980_8",ze="_leftPanel_1t980_11",Ie="_rightPanel_1t980_14",Ve={divider:Pe,dividerParagraf:Le,leftPanel:ze,rightPanel:Ie};M.bind(Ve);const hr=()=>n.jsx("span",{"data-testid":"editedIcon",children:n.jsx(Q,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})}),ur=e=>{const r=l.useRef(void 0);return l.useEffect(()=>{r.current=e},[e]),r.current},He="_checkBlaIkon_e3roh_1",Je="_container_e3roh_5",Re="_rad_e3roh_11",_={checkBlaIkon:He,container:Je,rad:Re},pr=({saksopplysninger:e})=>n.jsx("div",{className:_.container,children:e.map((r,a)=>n.jsxs("div",{className:_.rad,children:[r.readMoreContent&&n.jsx(ne,{size:"small",header:n.jsx(j,{id:r.textId}),children:r.readMoreContent}),!r.readMoreContent&&n.jsxs(n.Fragment,{children:[n.jsx(ee,{className:_.checkBlaIkon,height:35,width:35}),n.jsx(F,{size:"small",children:n.jsx(j,{id:r.textId})})]})]},`BlaBoksMedCheckmarkListe-${r.textId}-${a}`))});class Ke extends l.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,a){console.error("Error caught by error boundary:",r,a)}render(){const{hasError:r}=this.state,{children:a,errorMessage:o}=this.props;return r?n.jsx(D,{variant:"error",children:o||"Noe gikk galt"}):a}}y(x);Fe.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"et"};Ke.__docgenInfo={description:"",methods:[],displayName:"it"};export{dr as H,lr as J,j as M,cr as Q,ne as R,ir as U,sr as V,Ce as d,Ke as i,hr as n,pr as o,mr as r,ur as s};
