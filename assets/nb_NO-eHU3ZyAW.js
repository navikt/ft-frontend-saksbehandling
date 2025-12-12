import{r as b,e as B,R as f,aQ as Z,aR as J,at as P,aS as ee,h as M,B as ne,az as te,g as re,aV as ae,X as ie,aY as se,j as s,aZ as le,d as j,x as F,a_ as oe,k as q,ao as x,W as ue}from"./iframe-C3gsCRWg.js";import{R as I}from"./index.es-BDctT3QU.js";import{i as de,g as ge}from"./index-BCO1X-C8.js";import{n as me}from"./nb-0RuRsOG1.js";import{T as k}from"./Table-CsESvFyv.js";import{M as h}from"./message-C16RN5a8.js";import{E as S}from"./ExpansionCard-nyyEXzQ9.js";var ce=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const pe=b.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=ce(e,["title","titleId"]);let i=B();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.5 2.25c-.69 0-1.25.56-1.25 1.25v16.75h-2.5V10.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v9.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V3.5c0-.69-.56-1.25-1.25-1.25zm.25 18V3.75h2.5v16.5zm-8-9.5v9.5h2.5v-9.5z",clipRule:"evenodd"}))});var ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const fe=b.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=ve(e,["title","titleId"]);let i=B();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm12 16c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18c0 .69.56 1.25 1.25 1.25h2.25v-9.5h-3.5zm9.5-8.25v9.5h-4.5v-9.5z",clipRule:"evenodd"}))});b.createContext(null);const[be,Ge,ye,ke]=Z(),[Te,G]=J({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function Ee({value:e,disabled:a=!1,onFocus:t,onClick:n,onKeyDown:r},i){const{setSelectedValue:l,setFocusedValue:o,selectedValue:d,focusedValue:g}=G(),{register:y,descendants:m}=ke({disabled:a,value:e}),u=e===d,p=()=>o(e),N=b.useCallback(T=>{const A=m.values().findIndex(c=>c.value===g),X={ArrowLeft:()=>{var c;const v=m.prevEnabled(A,!1);(c=v?.node)===null||c===void 0||c.focus()},ArrowRight:()=>{var c;const v=m.nextEnabled(A,!1);(c=v?.node)===null||c===void 0||c.focus()},Home:()=>{var c;const v=m.firstEnabled();(c=v?.node)===null||c===void 0||c.focus()},End:()=>{var c;const v=m.lastEnabled();(c=v?.node)===null||c===void 0||c.focus()}},Q=T.shiftKey||T.ctrlKey||T.altKey||T.metaKey,D=X[T.key];D&&!Q?(T.preventDefault(),D(T)):T.key==="Tab"&&d&&setTimeout(()=>o(d))},[m,g,d,o]);return{ref:ee([y,i]),isSelected:u,isFocused:g===e,onClick:P(n,()=>d!==e&&l(e)),onFocus:a?void 0:P(t,p),onKeyDown:P(r,N)}}var Ie=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ne=b.forwardRef((e,a)=>{var{className:t,children:n,icon:r,label:i,value:l,onClick:o,onFocus:d,onKeyDown:g}=e,y=Ie(e,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:m}=M(),u=Ee({value:l,onClick:o,onFocus:d,disabled:!1,onKeyDown:g},a),p=G();return f.createElement("button",Object.assign({},y,{ref:u.ref,className:m("navds-toggle-group__button",t),type:"button",role:"radio","aria-checked":u.isSelected,"data-selected":u.isSelected,tabIndex:u.isFocused?0:-1,onClick:u.onClick,onFocus:u.onFocus,onKeyDown:u.onKeyDown}),f.createElement(ne,{as:"span",className:m("navds-toggle-group__button-inner"),size:p?.size},n??f.createElement(f.Fragment,null,r,i)))});function Se({onChange:e,value:a,defaultValue:t=""}){const[n,r]=b.useState(t),[i,l]=te({defaultValue:t,value:a,onChange:e});return b.useEffect(()=>{a!=null&&r(a)},[a]),{selectedValue:i,setSelectedValue:l,focusedValue:n,setFocusedValue:r}}var he=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const R=b.forwardRef((e,a)=>{var{className:t,children:n,onChange:r,size:i="medium",label:l,value:o,defaultValue:d,variant:g,fill:y=!1,"data-color":m}=e,u=he(e,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:p}=M(),N=re(!1),T=ye(),A=Se({defaultValue:d,value:o,onChange:r}),C=Object.assign(Object.assign({},A),{size:i}),O=ae();!o&&!d&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!o&&!d&&console.error("ToggleGroup needs either a value or defaultValue");let E;return N?.isDarkside?E=g:E=g??"action",f.createElement(be,{value:T},f.createElement(Te,Object.assign({},C),f.createElement("div",{className:p("navds-toggle-group__wrapper",t,{"navds-toggle-group__wrapper--fill":y}),"data-color":m??Ae(E)},l&&f.createElement(ie,{as:"div",size:i,className:p("navds-toggle-group__label"),id:O},l),f.createElement("div",Object.assign({"aria-labelledby":l?O:void 0},u,{ref:a,className:p("navds-toggle-group",`navds-toggle-group--${i}`,{[`navds-toggle-group--${E}`]:E}),role:"radiogroup"}),n))))});function Ae(e){switch(e){case"action":return"accent";case"neutral":return"neutral";default:return}}R.Item=Ne;const _=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],we=["#C0B2D2","#8269A2"],je=["#99DEAD","#2AA758"],Re=(e,a)=>{switch(e){case"ARBEIDSTAKERINNTEKT":return _[a%_.length];case"FRILANSINNTEKT":return we;case"YTELSEINNTEKT":return je;default:se(e)}},z=({option:e})=>{const a=b.useRef(null);return b.useEffect(()=>{let t;a.current!==null&&(t=de(a.current,void 0,{locale:"nb-NO"}));const n=()=>{t?.resize()};return globalThis.addEventListener("resize",n),()=>{t?.dispose(),globalThis.removeEventListener("resize",n)}},[]),b.useEffect(()=>{if(a.current!==null){const t=ge(a.current);t&&t.setOption(e)}},[e]),s.jsx("div",{ref:a,style:{width:"auto",height:"500px"}})};z.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const V=(e,a)=>({inntekter:t})=>!t||t.length===0?0:t.filter(xe(e,a)).reduce((n,r)=>n+r.beløp,0),xe=(e,a)=>t=>t.inntektAktivitetType===e&&(a===void 0||"arbeidsgiverIdent"in t&&a===t.arbeidsgiverIdent),Oe=(e,a)=>{const t=Map.groupBy(e,n=>n.fom);for(let n=0;n<12;n+=1){const r=j(a,F).add(n,"M"),i=r.format(F),l=r.endOf("M").format(F);t.has(i)||t.set(i,[{fom:i,tom:l,inntekter:[]}])}return t.values().toArray().flat().sort((n,r)=>j(n.fom).isBefore(j(r.fom))?-1:1)},Y=(e,a)=>e.flatMap(t=>t.inntekter).some(t=>t.inntektAktivitetType===a),L=(e,a,t)=>Y(e,a)?{[a==="FRILANSINNTEKT"?t.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):t.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:e.map(V(a))}:{},Pe=(e,a,t)=>{const n=I.ARBEID;if(!Y(e,n))return{};const r=new Set(e.flatMap(l=>l.inntekter).flatMap(l=>"arbeidsgiverIdent"in l?[l.arbeidsgiverIdent]:[])),i=new Map;for(const l of r){const o=a[l],d=o?oe(o):t.formatMessage({id:"SammenligningsgrunnlagGraf.UkjentArbeidsgiver"},{arbeidsgiverIdent:l});i.set(d,e.map(V(n,l)))}return Object.fromEntries(i)},H=(e,a,t,n)=>{const r=Oe(e,a),i=L(r,I.FRILANS,n),l=L(r,I.YTELSE,n),o=Pe(r,t,n);return{periodeData:r.map(g=>g.fom),dataForFrilans:i,dataForYtelse:l,dataForArbeid:o}},$=e=>le(j(e).locale(me).format("MMM YY").replace(".","")),w=e=>getComputedStyle(document.documentElement).getPropertyValue(e),U=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:a,arbeidsgiverOpplysningerPerId:t})=>{const n=q(),{periodeData:r,dataForFrilans:i,dataForYtelse:l,dataForArbeid:o}=H(a,e,t,n),d=w("--ax-font-size-medium"),g={fontFamily:w("--ax-font-family"),color:w("--ax-text-neutral"),fontSize:d};return s.jsx(z,{option:{textStyle:g,legend:{data:[...Object.keys(o),...Object.keys(i),...Object.keys(l)],top:"top"},grid:{left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:d,formatter:y=>x(y)||""}},yAxis:{type:"category",axisLabel:{fontSize:d},data:r.map(y=>$(y))},series:[...Object.entries(o).map(K(I.ARBEID)),...Object.entries(i).map(K(I.FRILANS)),...Object.entries(l).map(K(I.YTELSE))],tooltip:{trigger:"axis",textStyle:g,borderColor:w("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},K=e=>([a,t],n)=>{const[r,i]=Re(e,n);return{name:a,data:t,color:r,itemStyle:{borderWidth:1,borderRadius:4,borderColor:i},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:l=>x(l)||""},label:{show:!0,formatter:l=>{const o=l.value;return o>5e3&&x(o)||""}}}};U.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"union",raw:`| {
    inntektAktivitetType: 'ARBEIDSTAKERINNTEKT';
    arbeidsgiverIdent: string;
    beløp: number;
  }
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const W=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:a,arbeidsgiverOpplysningerPerId:t})=>{const n=q(),{periodeData:r,dataForFrilans:i,dataForYtelse:l,dataForArbeid:o}=H(a,e,t,n),d=[...Object.entries(o),...Object.entries(i),...Object.entries(l)].map(([g,y])=>({inntektspostNavn:g,inntekter:y}));return s.jsxs(k,{size:"small",zebraStripes:!0,children:[s.jsx(k.Header,{children:s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"col",children:s.jsx(h,{id:"SammenligningsgrunnlagTabell.Måned"})}),s.jsx(k.HeaderCell,{scope:"col",children:s.jsx(h,{id:"SammenligningsgrunnlagTabell.Inntektskilde"})}),s.jsx(k.HeaderCell,{scope:"col",align:"right",children:s.jsx(h,{id:"SammenligningsgrunnlagTabell.Beløp"})})]})}),s.jsx(k.Body,{children:r.map((g,y)=>{const m=d.map(({inntektspostNavn:u,inntekter:p})=>({inntektspostNavn:u,beløp:p[y]})).filter(({beløp:u})=>u!==0);return s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"row",children:$(g)}),s.jsx(k.DataCell,{children:m.map(({inntektspostNavn:u},p)=>s.jsxs(b.Fragment,{children:[u,p<m.length-1&&s.jsx("br",{})]},u))}),s.jsx(k.DataCell,{align:"right",children:m.map(({beløp:u},p)=>s.jsxs(b.Fragment,{children:[x(u)||"",p<m.length-1&&s.jsx("br",{})]},`${p}-${u}`))})]},g)}).reverse()})]})};W.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagTabell",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"union",raw:`| {
    inntektAktivitetType: 'ARBEIDSTAKERINNTEKT';
    arbeidsgiverIdent: string;
    beløp: number;
  }
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Fe=({sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t})=>{const n=q(),[r,i]=b.useState("graf");return s.jsxs(S,{defaultOpen:!0,size:"small","aria-label":n.formatMessage({id:"Sammenligningsgrunnlag.ExpansionCard.Header"}),children:[s.jsxs(S.Header,{children:[s.jsx(S.Title,{size:"small",children:s.jsx(h,{id:"Sammenligningsgrunnlag.ExpansionCard.Header"})}),s.jsx(S.Description,{children:s.jsx(h,{id:"Sammenligningsgrunnlag.ExpansionCard.Description"})})]}),s.jsx(S.Content,{children:s.jsxs(ue,{gap:"space-16",children:[s.jsxs(R,{size:"small",value:r,onChange:l=>i(l),children:[s.jsx(R.Item,{value:"graf",icon:s.jsx(pe,{"aria-hidden":!0}),label:"Graf"}),s.jsx(R.Item,{value:"tabell",icon:s.jsx(fe,{"aria-hidden":!0}),label:"Tabell"})]}),r==="graf"&&s.jsx(U,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t}),r==="tabell"&&s.jsx(W,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t})]})})]})};Fe.__docgenInfo={description:"",methods:[],displayName:"Sammenligningsgrunnlag",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: InntektsgrunnlagInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"union",raw:`| {
    inntektAktivitetType: 'ARBEIDSTAKERINNTEKT';
    arbeidsgiverIdent: string;
    beløp: number;
  }
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ze={"GrunnlagForBeregning.Tittel":"Grunnlag for beregning","GrunnlagForBeregning.Skjæringstidspunkt":"Skjæringstidspunkt for beregning <b>{dato}</b>","Sammenligningsgrunnlag.ExpansionCard.Header":"Sammenligningsgrunnlag §8-30 fra A-ordningen","Sammenligningsgrunnlag.ExpansionCard.Description":"Inntekt og ytelser etter kap. 8, 9 og 14 de 12 siste månedene","SammenligningsgrunnlagGraf.Arbeid":"Arbeid","SammenligningsgrunnlagGraf.Frilans":"Frilans","SammenligningsgrunnlagGraf.Ytelse":"Ytelse","SammenligningsgrunnlagGraf.UkjentArbeidsgiver":"Ukjent arbeidsgiver ({arbeidsgiverIdent})","SammenligningsgrunnlagTabell.Måned":"Måned","SammenligningsgrunnlagTabell.Inntektskilde":"Inntektskilde","SammenligningsgrunnlagTabell.Beløp":"Beløp"};export{Fe as S,ze as m};
