import{r as y,e as z,R as v,aP as Q,aQ as J,au as P,aR as ee,i as M,B as ne,aA as te,h as re,aU as ae,Y as ie,aX as se,aY as le,j as s,aZ as oe,d as w,x as O,l as C,ap as q,a1 as ue,X as de}from"./iframe-B0hEvG41.js";import{R as E}from"./index.es-BDctT3QU.js";import{i as ge,g as ce}from"./index-BCO1X-C8.js";import{n as me}from"./nb-KvUejL3Y.js";import{T as k}from"./Table-BGWxsu8a.js";import{M as A}from"./message-Zb8ePgpC.js";import{E as N}from"./ExpansionCard-BLKyAJZi.js";var pe=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fe=y.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=pe(e,["title","titleId"]);let i=z();return i=t?n||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?v.createElement("title",{id:i},t):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.5 2.25c-.69 0-1.25.56-1.25 1.25v16.75h-2.5V10.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v9.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V3.5c0-.69-.56-1.25-1.25-1.25zm.25 18V3.75h2.5v16.5zm-8-9.5v9.5h2.5v-9.5z",clipRule:"evenodd"}))});var ve=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ye=y.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ve(e,["title","titleId"]);let i=z();return i=t?n||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?v.createElement("title",{id:i},t):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm12 16c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18c0 .69.56 1.25 1.25 1.25h2.25v-9.5h-3.5zm9.5-8.25v9.5h-4.5v-9.5z",clipRule:"evenodd"}))});y.createContext(null);const[be,Ye,ke,Te]=Q(),[Ie,B]=J({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function Ee({value:e,disabled:r=!1,onFocus:t,onClick:n,onKeyDown:a},i){const{setSelectedValue:o,setFocusedValue:l,selectedValue:d,focusedValue:g}=B(),{register:b,descendants:c}=Te({disabled:r,value:e}),u=e===d,p=()=>l(e),h=y.useCallback(T=>{const x=c.values().findIndex(m=>m.value===g),X={ArrowLeft:()=>{var m;const f=c.prevEnabled(x,!1);(m=f?.node)===null||m===void 0||m.focus()},ArrowRight:()=>{var m;const f=c.nextEnabled(x,!1);(m=f?.node)===null||m===void 0||m.focus()},Home:()=>{var m;const f=c.firstEnabled();(m=f?.node)===null||m===void 0||m.focus()},End:()=>{var m;const f=c.lastEnabled();(m=f?.node)===null||m===void 0||m.focus()}},Z=T.shiftKey||T.ctrlKey||T.altKey||T.metaKey,D=X[T.key];D&&!Z?(T.preventDefault(),D(T)):T.key==="Tab"&&d&&setTimeout(()=>l(d))},[c,g,d,l]);return{ref:ee([b,i]),isSelected:u,isFocused:g===e,onClick:P(n,()=>d!==e&&o(e)),onFocus:r?void 0:P(t,p),onKeyDown:P(a,h)}}var he=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ne=y.forwardRef((e,r)=>{var{className:t,children:n,icon:a,label:i,value:o,onClick:l,onFocus:d,onKeyDown:g}=e,b=he(e,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:c}=M(),u=Ee({value:o,onClick:l,onFocus:d,disabled:!1,onKeyDown:g},r),p=B();return v.createElement("button",Object.assign({},b,{ref:u.ref,className:c("navds-toggle-group__button",t),type:"button",role:"radio","aria-checked":u.isSelected,"data-selected":u.isSelected,tabIndex:u.isFocused?0:-1,onClick:u.onClick,onFocus:u.onFocus,onKeyDown:u.onKeyDown}),v.createElement(ne,{as:"span",className:c("navds-toggle-group__button-inner"),size:p?.size},n??v.createElement(v.Fragment,null,a,i)))});function Ae({onChange:e,value:r,defaultValue:t=""}){const[n,a]=y.useState(t),[i,o]=te({defaultValue:t,value:r,onChange:e});return y.useEffect(()=>{r!=null&&a(r)},[r]),{selectedValue:i,setSelectedValue:o,focusedValue:n,setFocusedValue:a}}var xe=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const j=y.forwardRef((e,r)=>{var{className:t,children:n,onChange:a,size:i="medium",label:o,value:l,defaultValue:d,variant:g,fill:b=!1,"data-color":c}=e,u=xe(e,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:p}=M(),h=re(!1),T=ke(),x=Ae({defaultValue:d,value:l,onChange:a}),K=Object.assign(Object.assign({},x),{size:i}),R=ae();!l&&!d&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!l&&!d&&console.error("ToggleGroup needs either a value or defaultValue");let I;return h?.isDarkside?I=g:I=g??"action",v.createElement(be,{value:T},v.createElement(Ie,Object.assign({},K),v.createElement("div",{className:p("navds-toggle-group__wrapper",t,{"navds-toggle-group__wrapper--fill":b}),"data-color":c??Se(I)},o&&v.createElement(ie,{as:"div",size:i,className:p("navds-toggle-group__label"),id:R},o),v.createElement("div",Object.assign({"aria-labelledby":o?R:void 0},u,{ref:r,className:p("navds-toggle-group",`navds-toggle-group--${i}`,{[`navds-toggle-group--${I}`]:I}),role:"radiogroup"}),n))))});function Se(e){switch(e){case"action":return"accent";case"neutral":return"neutral";default:return}}j.Item=Ne;const we=(e,r)=>t=>{if(!t)return r.formatMessage({id:"ArbeidsgiverUtils.IngenArbeidsgiverReferanse"});const n=e[t];return n?se(n):r.formatMessage({id:"ArbeidsgiverUtils.UkjentArbeidsgiver"},{arbeidsgiverIdent:t})},L=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],je=["#C0B2D2","#8269A2"],Re=["#99DEAD","#2AA758"],Pe=(e,r)=>{switch(e){case"ARBEIDSTAKERINNTEKT":return L[r%L.length];case"FRILANSINNTEKT":return je;case"YTELSEINNTEKT":return Re;default:le(e)}},V=({option:e})=>{const r=y.useRef(null);return y.useEffect(()=>{let t;r.current!==null&&(t=ge(r.current,void 0,{locale:"nb-NO"}));const n=()=>{t?.resize()};return globalThis.addEventListener("resize",n),()=>{t?.dispose(),globalThis.removeEventListener("resize",n)}},[]),y.useEffect(()=>{if(r.current!==null){const t=ce(r.current);t&&t.setOption(e)}},[e]),s.jsx("div",{ref:r,style:{width:"auto",height:"400px"}})};V.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const Y=(e,r)=>({inntekter:t})=>!t||t.length===0?0:t.filter(Oe(e,r)).reduce((n,a)=>n+a.beløp,0),Oe=(e,r)=>t=>t.inntektAktivitetType===e&&(r===void 0||"arbeidsgiverIdent"in t&&r===t.arbeidsgiverIdent),Fe=(e,r)=>{const t=Map.groupBy(e,n=>n.fom);for(let n=0;n<12;n+=1){const a=w(r,O).add(n,"M"),i=a.format(O),o=a.endOf("M").format(O);t.has(i)||t.set(i,[{fom:i,tom:o,inntekter:[]}])}return t.values().toArray().flat().sort((n,a)=>w(n.fom).isBefore(w(a.fom))?-1:1)},G=(e,r)=>e.flatMap(t=>t.inntekter).some(t=>t.inntektAktivitetType===r),_=(e,r,t)=>G(e,r)?{[r==="FRILANSINNTEKT"?t.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):t.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:e.map(Y(r))}:{},qe=(e,r,t)=>{const n=E.ARBEID;if(!G(e,n))return{};const a=new Set(e.flatMap(l=>l.inntekter).flatMap(l=>"arbeidsgiverIdent"in l?[l.arbeidsgiverIdent]:[])),i=new Map,o=we(r,t);for(const l of a){const d=o(l);i.set(d,e.map(Y(n,l)))}return Object.fromEntries(i)},H=(e,r,t,n)=>{const a=Fe(e,r),i=_(a,E.FRILANS,n),o=_(a,E.YTELSE,n),l=qe(a,t,n);return{periodeData:a.map(g=>g.fom),dataForFrilans:i,dataForYtelse:o,dataForArbeid:l}},$=e=>oe(w(e).locale(me).format("MMM YY").replace(".","")),S=e=>getComputedStyle(document.documentElement).getPropertyValue(e),U=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:a,dataForFrilans:i,dataForYtelse:o,dataForArbeid:l}=H(r,e,t,n),d=S("--ax-font-size-small"),g={fontFamily:S("--ax-font-family"),color:S("--ax-text-neutral"),fontSize:d};return s.jsx(V,{option:{textStyle:g,legend:{data:[...Object.keys(l),...Object.keys(i),...Object.keys(o)],top:"top"},grid:{top:"7%",left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:d,formatter:b=>q(b)||""}},yAxis:{type:"category",axisLabel:{fontSize:d},data:a.map(b=>$(b))},series:[...Object.entries(l).map(F(E.ARBEID)),...Object.entries(i).map(F(E.FRILANS)),...Object.entries(o).map(F(E.YTELSE))],tooltip:{trigger:"axis",textStyle:g,borderColor:S("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},F=e=>([r,t],n)=>{const[a,i]=Pe(e,n);return{name:r,data:t,color:a,itemStyle:{borderWidth:1,borderRadius:4,borderColor:i},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:o=>q(o)||""},label:{show:!0,formatter:o=>{const l=o.value;return l>5e3&&q(l)||""}}}};U.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const W=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:a,dataForFrilans:i,dataForYtelse:o,dataForArbeid:l}=H(r,e,t,n),d=[...Object.entries(l),...Object.entries(i),...Object.entries(o)].map(([g,b])=>({inntektspostNavn:g,inntekter:b}));return s.jsxs(k,{size:"small",zebraStripes:!0,children:[s.jsx(k.Header,{children:s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"col",textSize:"small",children:s.jsx(A,{id:"SammenligningsgrunnlagTabell.Måned"})}),s.jsx(k.HeaderCell,{scope:"col",textSize:"small",children:s.jsx(A,{id:"SammenligningsgrunnlagTabell.Inntektskilde"})}),s.jsx(k.HeaderCell,{scope:"col",textSize:"small",align:"right",children:s.jsx(A,{id:"SammenligningsgrunnlagTabell.Beløp"})})]})}),s.jsx(k.Body,{children:a.map((g,b)=>{const c=d.map(({inntektspostNavn:u,inntekter:p})=>({inntektspostNavn:u,beløp:p[b]})).filter(({beløp:u})=>u!==0);return s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"row",textSize:"small",children:$(g)}),s.jsx(k.DataCell,{textSize:"small",children:c.map(({inntektspostNavn:u},p)=>s.jsxs(y.Fragment,{children:[u,p<c.length-1&&s.jsx("br",{})]},u))}),s.jsx(k.DataCell,{align:"right",textSize:"small",children:c.map(({beløp:u},p)=>s.jsxs(y.Fragment,{children:[s.jsx(ue,{beløp:u,kr:!0}),p<c.length-1&&s.jsx("br",{})]},`${p}-${u}`))})]},g)}).reverse()})]})};W.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagTabell",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Ce=({sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),[a,i]=y.useState("graf");return s.jsxs(N,{defaultOpen:!0,size:"small","aria-label":n.formatMessage({id:"Sammenligningsgrunnlag.ExpansionCard.Header"}),children:[s.jsxs(N.Header,{children:[s.jsx(N.Title,{size:"small",children:s.jsx(A,{id:"Sammenligningsgrunnlag.ExpansionCard.Header"})}),s.jsx(N.Description,{children:s.jsx(A,{id:"Sammenligningsgrunnlag.ExpansionCard.Description"})})]}),s.jsx(N.Content,{children:s.jsxs(de,{gap:"space-16",children:[s.jsxs(j,{size:"small",value:a,onChange:o=>i(o),children:[s.jsx(j.Item,{value:"graf",icon:s.jsx(fe,{"aria-hidden":!0}),label:"Graf"}),s.jsx(j.Item,{value:"tabell",icon:s.jsx(ye,{"aria-hidden":!0}),label:"Tabell"})]}),a==="graf"&&s.jsx(U,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t}),a==="tabell"&&s.jsx(W,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t})]})})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"Sammenligningsgrunnlag",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};export{Ce as S,we as f};
