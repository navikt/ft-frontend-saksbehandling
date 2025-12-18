import{r as y,e as M,R as v,aP as Q,aQ as J,au as O,aR as ee,i as B,B as ne,aA as te,h as re,aU as ae,Y as ie,aX as se,aY as oe,j as s,aZ as le,d as x,x as F,l as C,ap as R,X as ue}from"./iframe-DLqdTrFT.js";import{R as E}from"./index.es-BDctT3QU.js";import{i as de,g as ge}from"./index-BCO1X-C8.js";import{n as ce}from"./nb-CR18wMN4.js";import{T as k}from"./Table-JkqoETHY.js";import{M as A}from"./message-DLLKVwdf.js";import{E as N}from"./ExpansionCard-88H6QgTB.js";var me=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pe=y.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=me(e,["title","titleId"]);let i=M();return i=t?n||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?v.createElement("title",{id:i},t):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.5 2.25c-.69 0-1.25.56-1.25 1.25v16.75h-2.5V10.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v9.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V3.5c0-.69-.56-1.25-1.25-1.25zm.25 18V3.75h2.5v16.5zm-8-9.5v9.5h2.5v-9.5z",clipRule:"evenodd"}))});var fe=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ve=y.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=fe(e,["title","titleId"]);let i=M();return i=t?n||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?v.createElement("title",{id:i},t):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm12 16c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18c0 .69.56 1.25 1.25 1.25h2.25v-9.5h-3.5zm9.5-8.25v9.5h-4.5v-9.5z",clipRule:"evenodd"}))});y.createContext(null);const[ye,Ve,be,ke]=Q(),[Te,z]=J({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function Ie({value:e,disabled:r=!1,onFocus:t,onClick:n,onKeyDown:a},i){const{setSelectedValue:l,setFocusedValue:o,selectedValue:d,focusedValue:g}=z(),{register:b,descendants:c}=ke({disabled:r,value:e}),u=e===d,p=()=>o(e),h=y.useCallback(T=>{const w=c.values().findIndex(m=>m.value===g),X={ArrowLeft:()=>{var m;const f=c.prevEnabled(w,!1);(m=f?.node)===null||m===void 0||m.focus()},ArrowRight:()=>{var m;const f=c.nextEnabled(w,!1);(m=f?.node)===null||m===void 0||m.focus()},Home:()=>{var m;const f=c.firstEnabled();(m=f?.node)===null||m===void 0||m.focus()},End:()=>{var m;const f=c.lastEnabled();(m=f?.node)===null||m===void 0||m.focus()}},Z=T.shiftKey||T.ctrlKey||T.altKey||T.metaKey,D=X[T.key];D&&!Z?(T.preventDefault(),D(T)):T.key==="Tab"&&d&&setTimeout(()=>o(d))},[c,g,d,o]);return{ref:ee([b,i]),isSelected:u,isFocused:g===e,onClick:O(n,()=>d!==e&&l(e)),onFocus:r?void 0:O(t,p),onKeyDown:O(a,h)}}var Ee=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const he=y.forwardRef((e,r)=>{var{className:t,children:n,icon:a,label:i,value:l,onClick:o,onFocus:d,onKeyDown:g}=e,b=Ee(e,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:c}=B(),u=Ie({value:l,onClick:o,onFocus:d,disabled:!1,onKeyDown:g},r),p=z();return v.createElement("button",Object.assign({},b,{ref:u.ref,className:c("navds-toggle-group__button",t),type:"button",role:"radio","aria-checked":u.isSelected,"data-selected":u.isSelected,tabIndex:u.isFocused?0:-1,onClick:u.onClick,onFocus:u.onFocus,onKeyDown:u.onKeyDown}),v.createElement(ne,{as:"span",className:c("navds-toggle-group__button-inner"),size:p?.size},n??v.createElement(v.Fragment,null,a,i)))});function Ne({onChange:e,value:r,defaultValue:t=""}){const[n,a]=y.useState(t),[i,l]=te({defaultValue:t,value:r,onChange:e});return y.useEffect(()=>{r!=null&&a(r)},[r]),{selectedValue:i,setSelectedValue:l,focusedValue:n,setFocusedValue:a}}var Ae=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const S=y.forwardRef((e,r)=>{var{className:t,children:n,onChange:a,size:i="medium",label:l,value:o,defaultValue:d,variant:g,fill:b=!1,"data-color":c}=e,u=Ae(e,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:p}=B(),h=re(!1),T=be(),w=Ne({defaultValue:d,value:o,onChange:a}),K=Object.assign(Object.assign({},w),{size:i}),P=ae();!o&&!d&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!o&&!d&&console.error("ToggleGroup needs either a value or defaultValue");let I;return h?.isDarkside?I=g:I=g??"action",v.createElement(ye,{value:T},v.createElement(Te,Object.assign({},K),v.createElement("div",{className:p("navds-toggle-group__wrapper",t,{"navds-toggle-group__wrapper--fill":b}),"data-color":c??we(I)},l&&v.createElement(ie,{as:"div",size:i,className:p("navds-toggle-group__label"),id:P},l),v.createElement("div",Object.assign({"aria-labelledby":l?P:void 0},u,{ref:r,className:p("navds-toggle-group",`navds-toggle-group--${i}`,{[`navds-toggle-group--${I}`]:I}),role:"radiogroup"}),n))))});function we(e){switch(e){case"action":return"accent";case"neutral":return"neutral";default:return}}S.Item=he;const je=(e,r)=>t=>{if(!t)return r.formatMessage({id:"ArbeidsgiverUtils.IngenArbeidsgiverReferanse"});const n=e[t];return n?se(n):r.formatMessage({id:"ArbeidsgiverUtils.UkjentArbeidsgiver"},{arbeidsgiverIdent:t})},L=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],xe=["#C0B2D2","#8269A2"],Se=["#99DEAD","#2AA758"],Re=(e,r)=>{switch(e){case"ARBEIDSTAKERINNTEKT":return L[r%L.length];case"FRILANSINNTEKT":return xe;case"YTELSEINNTEKT":return Se;default:oe(e)}},V=({option:e})=>{const r=y.useRef(null);return y.useEffect(()=>{let t;r.current!==null&&(t=de(r.current,void 0,{locale:"nb-NO"}));const n=()=>{t?.resize()};return globalThis.addEventListener("resize",n),()=>{t?.dispose(),globalThis.removeEventListener("resize",n)}},[]),y.useEffect(()=>{if(r.current!==null){const t=ge(r.current);t&&t.setOption(e)}},[e]),s.jsx("div",{ref:r,style:{width:"auto",height:"500px"}})};V.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const Y=(e,r)=>({inntekter:t})=>!t||t.length===0?0:t.filter(Pe(e,r)).reduce((n,a)=>n+a.beløp,0),Pe=(e,r)=>t=>t.inntektAktivitetType===e&&(r===void 0||"arbeidsgiverIdent"in t&&r===t.arbeidsgiverIdent),Oe=(e,r)=>{const t=Map.groupBy(e,n=>n.fom);for(let n=0;n<12;n+=1){const a=x(r,F).add(n,"M"),i=a.format(F),l=a.endOf("M").format(F);t.has(i)||t.set(i,[{fom:i,tom:l,inntekter:[]}])}return t.values().toArray().flat().sort((n,a)=>x(n.fom).isBefore(x(a.fom))?-1:1)},G=(e,r)=>e.flatMap(t=>t.inntekter).some(t=>t.inntektAktivitetType===r),_=(e,r,t)=>G(e,r)?{[r==="FRILANSINNTEKT"?t.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):t.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:e.map(Y(r))}:{},Fe=(e,r,t)=>{const n=E.ARBEID;if(!G(e,n))return{};const a=new Set(e.flatMap(o=>o.inntekter).flatMap(o=>"arbeidsgiverIdent"in o?[o.arbeidsgiverIdent]:[])),i=new Map,l=je(r,t);for(const o of a){const d=l(o);i.set(d,e.map(Y(n,o)))}return Object.fromEntries(i)},H=(e,r,t,n)=>{const a=Oe(e,r),i=_(a,E.FRILANS,n),l=_(a,E.YTELSE,n),o=Fe(a,t,n);return{periodeData:a.map(g=>g.fom),dataForFrilans:i,dataForYtelse:l,dataForArbeid:o}},$=e=>le(x(e).locale(ce).format("MMM YY").replace(".","")),j=e=>getComputedStyle(document.documentElement).getPropertyValue(e),U=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:a,dataForFrilans:i,dataForYtelse:l,dataForArbeid:o}=H(r,e,t,n),d=j("--ax-font-size-medium"),g={fontFamily:j("--ax-font-family"),color:j("--ax-text-neutral"),fontSize:d};return s.jsx(V,{option:{textStyle:g,legend:{data:[...Object.keys(o),...Object.keys(i),...Object.keys(l)],top:"top"},grid:{left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:d,formatter:b=>R(b)||""}},yAxis:{type:"category",axisLabel:{fontSize:d},data:a.map(b=>$(b))},series:[...Object.entries(o).map(q(E.ARBEID)),...Object.entries(i).map(q(E.FRILANS)),...Object.entries(l).map(q(E.YTELSE))],tooltip:{trigger:"axis",textStyle:g,borderColor:j("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},q=e=>([r,t],n)=>{const[a,i]=Re(e,n);return{name:r,data:t,color:a,itemStyle:{borderWidth:1,borderRadius:4,borderColor:i},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:l=>R(l)||""},label:{show:!0,formatter:l=>{const o=l.value;return o>5e3&&R(o)||""}}}};U.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"union",raw:`| InntektsgrunnlagInntektAT
| {
    inntektAktivitetType: 'FRILANSINNTEKT' | 'YTELSEINNTEKT';
    beløp: number;
  }`,elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: 'ARBEIDSTAKERINNTEKT';
  arbeidsgiverIdent: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"literal",value:"'ARBEIDSTAKERINNTEKT'",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  inntektAktivitetType: 'FRILANSINNTEKT' | 'YTELSEINNTEKT';
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"union",raw:"'FRILANSINNTEKT' | 'YTELSEINNTEKT'",elements:[{name:"literal",value:"'FRILANSINNTEKT'"},{name:"literal",value:"'YTELSEINNTEKT'"}],required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}]}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const W=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:a,dataForFrilans:i,dataForYtelse:l,dataForArbeid:o}=H(r,e,t,n),d=[...Object.entries(o),...Object.entries(i),...Object.entries(l)].map(([g,b])=>({inntektspostNavn:g,inntekter:b}));return s.jsxs(k,{size:"small",zebraStripes:!0,children:[s.jsx(k.Header,{children:s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"col",children:s.jsx(A,{id:"SammenligningsgrunnlagTabell.Måned"})}),s.jsx(k.HeaderCell,{scope:"col",children:s.jsx(A,{id:"SammenligningsgrunnlagTabell.Inntektskilde"})}),s.jsx(k.HeaderCell,{scope:"col",align:"right",children:s.jsx(A,{id:"SammenligningsgrunnlagTabell.Beløp"})})]})}),s.jsx(k.Body,{children:a.map((g,b)=>{const c=d.map(({inntektspostNavn:u,inntekter:p})=>({inntektspostNavn:u,beløp:p[b]})).filter(({beløp:u})=>u!==0);return s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"row",children:$(g)}),s.jsx(k.DataCell,{children:c.map(({inntektspostNavn:u},p)=>s.jsxs(y.Fragment,{children:[u,p<c.length-1&&s.jsx("br",{})]},u))}),s.jsx(k.DataCell,{align:"right",children:c.map(({beløp:u},p)=>s.jsxs(y.Fragment,{children:[R(u)||"",p<c.length-1&&s.jsx("br",{})]},`${p}-${u}`))})]},g)}).reverse()})]})};W.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagTabell",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"union",raw:`| InntektsgrunnlagInntektAT
| {
    inntektAktivitetType: 'FRILANSINNTEKT' | 'YTELSEINNTEKT';
    beløp: number;
  }`,elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: 'ARBEIDSTAKERINNTEKT';
  arbeidsgiverIdent: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"literal",value:"'ARBEIDSTAKERINNTEKT'",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  inntektAktivitetType: 'FRILANSINNTEKT' | 'YTELSEINNTEKT';
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"union",raw:"'FRILANSINNTEKT' | 'YTELSEINNTEKT'",elements:[{name:"literal",value:"'FRILANSINNTEKT'"},{name:"literal",value:"'YTELSEINNTEKT'"}],required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}]}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qe=({sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),[a,i]=y.useState("graf");return s.jsxs(N,{defaultOpen:!0,size:"small","aria-label":n.formatMessage({id:"Sammenligningsgrunnlag.ExpansionCard.Header"}),children:[s.jsxs(N.Header,{children:[s.jsx(N.Title,{size:"small",children:s.jsx(A,{id:"Sammenligningsgrunnlag.ExpansionCard.Header"})}),s.jsx(N.Description,{children:s.jsx(A,{id:"Sammenligningsgrunnlag.ExpansionCard.Description"})})]}),s.jsx(N.Content,{children:s.jsxs(ue,{gap:"space-16",children:[s.jsxs(S,{size:"small",value:a,onChange:l=>i(l),children:[s.jsx(S.Item,{value:"graf",icon:s.jsx(pe,{"aria-hidden":!0}),label:"Graf"}),s.jsx(S.Item,{value:"tabell",icon:s.jsx(ve,{"aria-hidden":!0}),label:"Tabell"})]}),a==="graf"&&s.jsx(U,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t}),a==="tabell"&&s.jsx(W,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t})]})})]})};qe.__docgenInfo={description:"",methods:[],displayName:"Sammenligningsgrunnlag",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"union",raw:`| InntektsgrunnlagInntektAT
| {
    inntektAktivitetType: 'FRILANSINNTEKT' | 'YTELSEINNTEKT';
    beløp: number;
  }`,elements:[{name:"signature",type:"object",raw:`{
  inntektAktivitetType: 'ARBEIDSTAKERINNTEKT';
  arbeidsgiverIdent: string;
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"literal",value:"'ARBEIDSTAKERINNTEKT'",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  inntektAktivitetType: 'FRILANSINNTEKT' | 'YTELSEINNTEKT';
  beløp: number;
}`,signature:{properties:[{key:"inntektAktivitetType",value:{name:"union",raw:"'FRILANSINNTEKT' | 'YTELSEINNTEKT'",elements:[{name:"literal",value:"'FRILANSINNTEKT'"},{name:"literal",value:"'YTELSEINNTEKT'"}],required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}]}],raw:"InntektsgrunnlagInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}>`}],raw:"InntektsgrunnlagMåned[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};export{qe as S,je as f};
