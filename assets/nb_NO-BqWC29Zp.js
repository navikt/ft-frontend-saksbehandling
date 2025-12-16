import{r as b,e as M,R as v,aP as Z,aQ as J,at as P,aR as ee,i as B,B as ne,az as te,h as re,aU as ae,Y as ie,a_ as se,a$ as le,j as s,b0 as oe,d as w,x as F,l as C,ao as R,X as ue}from"./iframe-C7jmUBTT.js";import{R as E}from"./index.es-BDctT3QU.js";import{i as de,g as ge}from"./index-BCO1X-C8.js";import{n as me}from"./nb-Cdq9_vy9.js";import{T as k}from"./Table-DTkX82NH.js";import{M as h}from"./message-CvZ7mgW_.js";import{E as S}from"./ExpansionCard-Dvomv-VQ.js";var ce=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pe=b.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ce(e,["title","titleId"]);let i=M();return i=t?n||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?v.createElement("title",{id:i},t):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.5 2.25c-.69 0-1.25.56-1.25 1.25v16.75h-2.5V10.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v9.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V3.5c0-.69-.56-1.25-1.25-1.25zm.25 18V3.75h2.5v16.5zm-8-9.5v9.5h2.5v-9.5z",clipRule:"evenodd"}))});var fe=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ve=b.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=fe(e,["title","titleId"]);let i=M();return i=t?n||"title-"+i:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},a),t?v.createElement("title",{id:i},t):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm12 16c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18c0 .69.56 1.25 1.25 1.25h2.25v-9.5h-3.5zm9.5-8.25v9.5h-4.5v-9.5z",clipRule:"evenodd"}))});b.createContext(null);const[be,ze,ye,ke]=Z(),[Te,G]=J({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function Ie({value:e,disabled:r=!1,onFocus:t,onClick:n,onKeyDown:a},i){const{setSelectedValue:o,setFocusedValue:l,selectedValue:d,focusedValue:g}=G(),{register:y,descendants:m}=ke({disabled:r,value:e}),u=e===d,p=()=>l(e),A=b.useCallback(T=>{const N=m.values().findIndex(c=>c.value===g),Q={ArrowLeft:()=>{var c;const f=m.prevEnabled(N,!1);(c=f?.node)===null||c===void 0||c.focus()},ArrowRight:()=>{var c;const f=m.nextEnabled(N,!1);(c=f?.node)===null||c===void 0||c.focus()},Home:()=>{var c;const f=m.firstEnabled();(c=f?.node)===null||c===void 0||c.focus()},End:()=>{var c;const f=m.lastEnabled();(c=f?.node)===null||c===void 0||c.focus()}},X=T.shiftKey||T.ctrlKey||T.altKey||T.metaKey,D=Q[T.key];D&&!X?(T.preventDefault(),D(T)):T.key==="Tab"&&d&&setTimeout(()=>l(d))},[m,g,d,l]);return{ref:ee([y,i]),isSelected:u,isFocused:g===e,onClick:P(n,()=>d!==e&&o(e)),onFocus:r?void 0:P(t,p),onKeyDown:P(a,A)}}var Ee=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ae=b.forwardRef((e,r)=>{var{className:t,children:n,icon:a,label:i,value:o,onClick:l,onFocus:d,onKeyDown:g}=e,y=Ee(e,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:m}=B(),u=Ie({value:o,onClick:l,onFocus:d,disabled:!1,onKeyDown:g},r),p=G();return v.createElement("button",Object.assign({},y,{ref:u.ref,className:m("navds-toggle-group__button",t),type:"button",role:"radio","aria-checked":u.isSelected,"data-selected":u.isSelected,tabIndex:u.isFocused?0:-1,onClick:u.onClick,onFocus:u.onFocus,onKeyDown:u.onKeyDown}),v.createElement(ne,{as:"span",className:m("navds-toggle-group__button-inner"),size:p?.size},n??v.createElement(v.Fragment,null,a,i)))});function Se({onChange:e,value:r,defaultValue:t=""}){const[n,a]=b.useState(t),[i,o]=te({defaultValue:t,value:r,onChange:e});return b.useEffect(()=>{r!=null&&a(r)},[r]),{selectedValue:i,setSelectedValue:o,focusedValue:n,setFocusedValue:a}}var he=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const x=b.forwardRef((e,r)=>{var{className:t,children:n,onChange:a,size:i="medium",label:o,value:l,defaultValue:d,variant:g,fill:y=!1,"data-color":m}=e,u=he(e,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:p}=B(),A=re(!1),T=ye(),N=Se({defaultValue:d,value:l,onChange:a}),K=Object.assign(Object.assign({},N),{size:i}),O=ae();!l&&!d&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!l&&!d&&console.error("ToggleGroup needs either a value or defaultValue");let I;return A?.isDarkside?I=g:I=g??"action",v.createElement(be,{value:T},v.createElement(Te,Object.assign({},K),v.createElement("div",{className:p("navds-toggle-group__wrapper",t,{"navds-toggle-group__wrapper--fill":y}),"data-color":m??Ne(I)},o&&v.createElement(ie,{as:"div",size:i,className:p("navds-toggle-group__label"),id:O},o),v.createElement("div",Object.assign({"aria-labelledby":o?O:void 0},u,{ref:r,className:p("navds-toggle-group",`navds-toggle-group--${i}`,{[`navds-toggle-group--${I}`]:I}),role:"radiogroup"}),n))))});function Ne(e){switch(e){case"action":return"accent";case"neutral":return"neutral";default:return}}x.Item=Ae;const je=(e,r)=>t=>{if(!t)return r.formatMessage({id:"ArbeidsgiverUtils.IngenArbeidsgiverReferanse"});const n=e[t];return n?se(n):r.formatMessage({id:"ArbeidsgiverUtils.UkjentArbeidsgiver"},{arbeidsgiverIdent:t})},L=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],we=["#C0B2D2","#8269A2"],xe=["#99DEAD","#2AA758"],Re=(e,r)=>{switch(e){case"ARBEIDSTAKERINNTEKT":return L[r%L.length];case"FRILANSINNTEKT":return we;case"YTELSEINNTEKT":return xe;default:le(e)}},z=({option:e})=>{const r=b.useRef(null);return b.useEffect(()=>{let t;r.current!==null&&(t=de(r.current,void 0,{locale:"nb-NO"}));const n=()=>{t?.resize()};return globalThis.addEventListener("resize",n),()=>{t?.dispose(),globalThis.removeEventListener("resize",n)}},[]),b.useEffect(()=>{if(r.current!==null){const t=ge(r.current);t&&t.setOption(e)}},[e]),s.jsx("div",{ref:r,style:{width:"auto",height:"500px"}})};z.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const Y=(e,r)=>({inntekter:t})=>!t||t.length===0?0:t.filter(Oe(e,r)).reduce((n,a)=>n+a.beløp,0),Oe=(e,r)=>t=>t.inntektAktivitetType===e&&(r===void 0||"arbeidsgiverIdent"in t&&r===t.arbeidsgiverIdent),Pe=(e,r)=>{const t=Map.groupBy(e,n=>n.fom);for(let n=0;n<12;n+=1){const a=w(r,F).add(n,"M"),i=a.format(F),o=a.endOf("M").format(F);t.has(i)||t.set(i,[{fom:i,tom:o,inntekter:[]}])}return t.values().toArray().flat().sort((n,a)=>w(n.fom).isBefore(w(a.fom))?-1:1)},V=(e,r)=>e.flatMap(t=>t.inntekter).some(t=>t.inntektAktivitetType===r),_=(e,r,t)=>V(e,r)?{[r==="FRILANSINNTEKT"?t.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):t.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:e.map(Y(r))}:{},Fe=(e,r,t)=>{const n=E.ARBEID;if(!V(e,n))return{};const a=new Set(e.flatMap(l=>l.inntekter).flatMap(l=>"arbeidsgiverIdent"in l?[l.arbeidsgiverIdent]:[])),i=new Map,o=je(r,t);for(const l of a){const d=o(l);i.set(d,e.map(Y(n,l)))}return Object.fromEntries(i)},H=(e,r,t,n)=>{const a=Pe(e,r),i=_(a,E.FRILANS,n),o=_(a,E.YTELSE,n),l=Fe(a,t,n);return{periodeData:a.map(g=>g.fom),dataForFrilans:i,dataForYtelse:o,dataForArbeid:l}},$=e=>oe(w(e).locale(me).format("MMM YY").replace(".","")),j=e=>getComputedStyle(document.documentElement).getPropertyValue(e),U=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:a,dataForFrilans:i,dataForYtelse:o,dataForArbeid:l}=H(r,e,t,n),d=j("--ax-font-size-medium"),g={fontFamily:j("--ax-font-family"),color:j("--ax-text-neutral"),fontSize:d};return s.jsx(z,{option:{textStyle:g,legend:{data:[...Object.keys(l),...Object.keys(i),...Object.keys(o)],top:"top"},grid:{left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:d,formatter:y=>R(y)||""}},yAxis:{type:"category",axisLabel:{fontSize:d},data:a.map(y=>$(y))},series:[...Object.entries(l).map(q(E.ARBEID)),...Object.entries(i).map(q(E.FRILANS)),...Object.entries(o).map(q(E.YTELSE))],tooltip:{trigger:"axis",textStyle:g,borderColor:j("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},q=e=>([r,t],n)=>{const[a,i]=Re(e,n);return{name:r,data:t,color:a,itemStyle:{borderWidth:1,borderRadius:4,borderColor:i},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:o=>R(o)||""},label:{show:!0,formatter:o=>{const l=o.value;return l>5e3&&R(l)||""}}}};U.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const W=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:a,dataForFrilans:i,dataForYtelse:o,dataForArbeid:l}=H(r,e,t,n),d=[...Object.entries(l),...Object.entries(i),...Object.entries(o)].map(([g,y])=>({inntektspostNavn:g,inntekter:y}));return s.jsxs(k,{size:"small",zebraStripes:!0,children:[s.jsx(k.Header,{children:s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"col",children:s.jsx(h,{id:"SammenligningsgrunnlagTabell.Måned"})}),s.jsx(k.HeaderCell,{scope:"col",children:s.jsx(h,{id:"SammenligningsgrunnlagTabell.Inntektskilde"})}),s.jsx(k.HeaderCell,{scope:"col",align:"right",children:s.jsx(h,{id:"SammenligningsgrunnlagTabell.Beløp"})})]})}),s.jsx(k.Body,{children:a.map((g,y)=>{const m=d.map(({inntektspostNavn:u,inntekter:p})=>({inntektspostNavn:u,beløp:p[y]})).filter(({beløp:u})=>u!==0);return s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"row",children:$(g)}),s.jsx(k.DataCell,{children:m.map(({inntektspostNavn:u},p)=>s.jsxs(b.Fragment,{children:[u,p<m.length-1&&s.jsx("br",{})]},u))}),s.jsx(k.DataCell,{align:"right",children:m.map(({beløp:u},p)=>s.jsxs(b.Fragment,{children:[R(u)||"",p<m.length-1&&s.jsx("br",{})]},`${p}-${u}`))})]},g)}).reverse()})]})};W.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagTabell",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qe=({sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),[a,i]=b.useState("graf");return s.jsxs(S,{defaultOpen:!0,size:"small","aria-label":n.formatMessage({id:"Sammenligningsgrunnlag.ExpansionCard.Header"}),children:[s.jsxs(S.Header,{children:[s.jsx(S.Title,{size:"small",children:s.jsx(h,{id:"Sammenligningsgrunnlag.ExpansionCard.Header"})}),s.jsx(S.Description,{children:s.jsx(h,{id:"Sammenligningsgrunnlag.ExpansionCard.Description"})})]}),s.jsx(S.Content,{children:s.jsxs(ue,{gap:"space-16",children:[s.jsxs(x,{size:"small",value:a,onChange:o=>i(o),children:[s.jsx(x.Item,{value:"graf",icon:s.jsx(pe,{"aria-hidden":!0}),label:"Graf"}),s.jsx(x.Item,{value:"tabell",icon:s.jsx(ve,{"aria-hidden":!0}),label:"Tabell"})]}),a==="graf"&&s.jsx(U,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t}),a==="tabell"&&s.jsx(W,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:r,arbeidsgiverOpplysningerPerId:t})]})})]})};qe.__docgenInfo={description:"",methods:[],displayName:"Sammenligningsgrunnlag",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Ye={"GrunnlagForBeregning.Tittel":"Grunnlag for beregning","GrunnlagForBeregning.Skjæringstidspunkt":"Skjæringstidspunkt for beregning <b>{dato}</b>","Arbeidsinntekt.Tittel":"Arbeidsinntekt","Arbeidsinntekt.Table.TypeInntekt":"Type inntekt","Arbeidsinntekt.Table.Inntektsmelding":"<b>Inntektsmelding</b>{br}Omregnet årsinntekt","Arbeidsinntekt.Table.Innrapportert":"<b>Innrapportert § 8-28</b>{br}Rapportert årsinntekt","Arbeidsinntekt.Table.Sammenligningsgrunnlag":"Sammenligningsgr.","Arbeidsinntekt.Table.Total":"Totalt:","Arbeidsinntekt.Ansettelsesperiode":"Ansettelsesperiode","Arbeidsinntekt.SistEndretLonn":"Sist endret lønn:","Arbeidsinntekt.Stillingsprosent":"Stillingsprosent","Sammenligningsgrunnlag.ExpansionCard.Header":"Sammenligningsgrunnlag § 8-30 fra A-ordningen","Sammenligningsgrunnlag.ExpansionCard.Description":"Inntekt og ytelser etter kap. 8, 9 og 14 de 12 siste månedene","SammenligningsgrunnlagGraf.Arbeid":"Arbeid","SammenligningsgrunnlagGraf.Frilans":"Frilans","SammenligningsgrunnlagGraf.Ytelse":"Ytelse","SammenligningsgrunnlagTabell.Måned":"Måned","SammenligningsgrunnlagTabell.Inntektskilde":"Inntektskilde","SammenligningsgrunnlagTabell.Beløp":"Beløp","ArbeidsgiverUtils.UkjentArbeidsgiver":"Ukjent arbeidsgiver ({arbeidsgiverIdent})","ArbeidsgiverUtils.IngenArbeidsgiverReferanse":"Mangler arbeidsgiver referanse"};export{qe as S,je as f,Ye as m};
