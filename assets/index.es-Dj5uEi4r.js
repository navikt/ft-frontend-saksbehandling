import{r as l,e as p}from"./index-DASCADcX.js";import{u as z,_ as S,s as w,y as R,k as V,B as H,f as b}from"./index.es-CsyRfoMR.js";import{B as K,L as F,a as C}from"./Label-CfBdhDeq.js";import{A as D}from"./Alert-vBIWixRy.js";import{V as J,H as q}from"./VStack-CfnCueE0.js";import{u as U}from"./Theme-Bqc_BD0M.js";import{S as Z}from"./PersonPencilFill-CoF6qBVB.js";import{B as G}from"./Box-t-YAJNpB.js";import{S as Y,a as Q}from"./KeyVerticalFill-m_CavoP-.js";import{c as W}from"./Button-D87Irl5r.js";import{u as X,S as ee}from"./Checkmark-abnGd_Ay.js";import{S as re}from"./ChevronDown-DKSW_DmS.js";import{M as O}from"./Modal-Cf6h8GUk.js";import{L as ae}from"./Loader-C31s9nuZ.js";var te=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const ne=l.forwardRef((e,r)=>{var{className:a,header:n,children:s,open:t,defaultOpen:i=!1,onClick:d,size:u="medium",onOpenChange:g}=e,v=te(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=U(),[c,_]=X({defaultValue:i,value:t,onChange:g}),h=u==="small"?"small":"medium";return p.createElement("div",{className:m("navds-read-more",`navds-read-more--${u}`,a,{"navds-read-more--open":c}),"data-volume":"low"},p.createElement("button",Object.assign({},v,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":u==="small"}),onClick:W(d,()=>_(I=>!I)),"aria-expanded":c,"data-state":c?"open":"closed"}),p.createElement(re,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),p.createElement("span",null,n)),p.createElement(K,{as:"div","aria-hidden":!c,className:m("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:h,"data-state":c?"open":"closed"},s))});function oe(e,r){var a=e.values,n=S(e,["values"]),s=r.values,t=S(r,["values"]);return w(s,a)&&w(n,t)}function P(e){var r=z(),a=r.formatMessage,n=r.textComponent,s=n===void 0?l.Fragment:n,t=e.id,i=e.description,d=e.defaultMessage,u=e.values,g=e.children,v=e.tagName,m=v===void 0?s:v,c=e.ignoreTag,_={id:t,description:i,defaultMessage:d},h=a(_,u,{ignoreTag:c});return typeof g=="function"?g(Array.isArray(h)?h:[h]):m?l.createElement(m,null,l.Children.toArray(h)):l.createElement(l.Fragment,null,h)}P.displayName="FormattedMessage";var M=l.memo(P,oe);M.displayName="MemoizedFormattedMessage";var se=Object.defineProperty,ie=(e,r,a)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,de=(e,r,a)=>ie(e,r+"",a);function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A;function ce(){if(A)return f;A=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(n,s,t){var i=null;if(t!==void 0&&(i=""+t),s.key!==void 0&&(i=""+s.key),"key"in s){t={};for(var d in s)d!=="key"&&(t[d]=s[d])}else t=s;return s=t.ref,{$$typeof:e,type:n,key:i,ref:s!==void 0?s:null,props:t}}return f.Fragment=r,f.jsx=a,f.jsxs=a,f}var N;function me(){return N||(N=1,B.exports=ce()),B.exports}var o=me();const lr=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:o.jsx(D,{variant:"warning",size:"small",children:o.jsx(J,{gap:"2",children:p.Children.map(e,r=>o.jsx(C,{size:"small",children:r},R(r)?r.key:r))})}),he="_button_1rql2_1",pe={button:he},x={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"},T=b(x),cr=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[a,n]=l.useState(r),s=()=>{a||(n(!0),e(!0))};return l.useEffect(()=>{n(r)},[r]),o.jsx("button",{className:pe.button,"data-testid":"overstyringsknapp",type:"button",onClick:s,"aria-disabled":r,children:a?o.jsx(Y,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:T.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):o.jsx(Q,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:T.formatMessage({id:"OverstyringKnapp.Overstyring"})})})},y="#B7B1A9",L=4,ue=(e,r,a)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${y};
    border-radius: ${L}px;
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
`,fe=(e,r,a)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${y};
    border-radius: ${L}px;
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
`,ge=(e,r,a,n)=>r?fe(e,a,n):ue(e,a,n),ve=(e,r,a)=>a?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,mr=({children:e,alignOffset:r=0,alignLeft:a=!1,marginTop:n=0,marginLeft:s=0,hideBorder:t=!1})=>o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:ge(r,a,n,s)}}),o.jsx("div",{className:ve(r,a,t),children:e})]});var $={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var E;function ye(){return E||(E=1,function(e){(function(){var r={}.hasOwnProperty;function a(){for(var t="",i=0;i<arguments.length;i++){var d=arguments[i];d&&(t=s(t,n.call(this,d)))}return t}function n(t){if(typeof t=="string"||typeof t=="number")return this&&this[t]||t;if(typeof t!="object")return"";if(Array.isArray(t))return a.apply(this,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var i="";for(var d in t)r.call(t,d)&&t[d]&&(i=s(i,this&&this[d]||d));return i}function s(t,i){return i?t?t+" "+i:t+i:t}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}($)),$.exports}var be=ye();const k=le(be),xe="_borderbox_1vkvn_1",ke="_error_1vkvn_5",_e="_warning_1vkvn_8",je={borderbox:xe,error:ke,warning:_e},Me=k.bind(je),Ce=({error:e=!1,className:r,children:a})=>o.jsx(G,{padding:"4",className:Me("borderbox",{error:e},r),children:a}),Se="_aksjonspunkt_kn1hn_1",we="_erAksjonspunktApent_kn1hn_4",Oe="_erIkkeGodkjentAvBeslutter_kn1hn_8",Be={aksjonspunkt:Se,erAksjonspunktApent:we,erIkkeGodkjentAvBeslutter:Oe};k.bind(Be);const hr=({dateString:e,year:r,month:a,day:n})=>o.jsx(o.Fragment,{children:H(e,{year:r,month:a,day:n})});b(x);const pr=({dateStringFom:e,dateStringTom:r,showTodayString:a=!1,size:n})=>o.jsx(C,{as:"span",size:n,children:V(e,r,{showTodayString:a})}),Ae="_modalText_lvzd7_1",Ne={modalText:Ae},Te=b(x),$e=()=>{},Ee=2e3;class Fe extends l.Component{constructor(r){super(r),de(this,"timer"),this.enableMessage=this.enableMessage.bind(this),this.state={displayMessage:!1},this.timer=setTimeout(this.enableMessage,Ee)}componentWillUnmount(){clearTimeout(this.timer)}enableMessage(){this.setState({displayMessage:!0})}render(){const{displayMessage:r}=this.state;if(!r)return null;const{pendingMessage:a}=this.props;return o.jsx(O,{width:"small",open:!0,"aria-label":a,onClose:$e,children:o.jsx(O.Body,{children:o.jsxs(q,{children:[o.jsx(ae,{size:"large"}),o.jsx("div",{className:Ne.modalText,children:o.jsx(F,{size:"small",children:Te.formatMessage({id:"DataFetchPendingModal.LosningenJobberMedBehandlingen"})})})]})})})}}const De=({withoutBorder:e,error:r,children:a,className:n})=>e?a:o.jsx(Ce,{error:r,className:n,children:a}),ur=({merknaderFraBeslutter:e,title:r,children:a,withoutBorder:n=!1,className:s=""})=>{const t=!!(e&&e.notAccepted);return o.jsxs(De,{withoutBorder:n&&!t,error:t,className:s,children:[r&&o.jsxs(o.Fragment,{children:[o.jsx(F,{size:"small",children:r}),o.jsx("div",{style:{marginBottom:"20px"}})]}),a]})},Pe="_divider_1t980_1",Le="_dividerParagraf_1t980_8",Ie="_leftPanel_1t980_11",ze="_rightPanel_1t980_14",Re={divider:Pe,dividerParagraf:Le,leftPanel:Ie,rightPanel:ze};k.bind(Re);const Ve="_editedIcon_ulrjl_1",He={editedIcon:Ve},Ke=k.bind(He),fr=({className:e=""})=>o.jsx("span",{"data-testid":"editedIcon",className:Ke("editedIcon",e),children:o.jsx(Z,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-orange-600)"})}),gr=e=>{const r=l.useRef(void 0);return l.useEffect(()=>{r.current=e},[e]),r.current},Je="_checkBlaIkon_e3roh_1",qe="_container_e3roh_5",Ue="_rad_e3roh_11",j={checkBlaIkon:Je,container:qe,rad:Ue},vr=({saksopplysninger:e})=>o.jsx("div",{className:j.container,children:e.map((r,a)=>o.jsxs("div",{className:j.rad,children:[r.readMoreContent&&o.jsx(ne,{size:"small",header:o.jsx(M,{id:r.textId}),children:r.readMoreContent}),!r.readMoreContent&&o.jsxs(o.Fragment,{children:[o.jsx(ee,{className:j.checkBlaIkon,height:35,width:35}),o.jsx(C,{size:"small",children:o.jsx(M,{id:r.textId})})]})]},`BlaBoksMedCheckmarkListe-${r.textId}-${a}`))});class Ze extends l.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,a){console.error("Error caught by error boundary:",r,a)}render(){const{hasError:r}=this.state,{children:a,errorMessage:n}=this.props;return r?o.jsx(D,{variant:"error",children:n||"Noe gikk galt"}):a}}b(x);Fe.__docgenInfo={description:"",methods:[{name:"enableMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tt"};Ze.__docgenInfo={description:"",methods:[],displayName:"Rt"};export{vr as $,ur as A,M,gr as O,ne as R,fr as S,Ce as a,lr as b,Ze as c,cr as g,hr as j,mr as p,pr as w};
