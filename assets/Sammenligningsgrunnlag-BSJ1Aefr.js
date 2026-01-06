import{r as y,f as z,R as f,aT as J,aU as Q,av as O,aV as ee,l as B,B as ne,aB as te,k as re,aY as ae,Y as ie,a$ as se,j as s,b0 as le,d as j,x as P,b1 as oe,i as C,aq as q,a1 as ue,X as de}from"./iframe-CjQwzbid.js";import{R as E}from"./index.es-BDctT3QU.js";import{i as ge,g as ce}from"./index-BCO1X-C8.js";import{n as me}from"./nb-DShpNJ9v.js";import{T as k}from"./Table-D9El3HOd.js";import{M as x}from"./message-BSOj-b45.js";import{E as N}from"./ExpansionCard-BCuCW3fj.js";var pe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ve=y.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=pe(e,["title","titleId"]);let i=z();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.5 2.25c-.69 0-1.25.56-1.25 1.25v16.75h-2.5V10.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v9.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V3.5c0-.69-.56-1.25-1.25-1.25zm.25 18V3.75h2.5v16.5zm-8-9.5v9.5h2.5v-9.5z",clipRule:"evenodd"}))});var fe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ye=y.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=fe(e,["title","titleId"]);let i=z();return i=t?n||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?f.createElement("title",{id:i},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm12 16c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18c0 .69.56 1.25 1.25 1.25h2.25v-9.5h-3.5zm9.5-8.25v9.5h-4.5v-9.5z",clipRule:"evenodd"}))});y.createContext(null);const[be,Ve,ke,Te]=J(),[Ie,M]=Q({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function Ee({value:e,disabled:a=!1,onFocus:t,onClick:n,onKeyDown:r},i){const{setSelectedValue:l,setFocusedValue:u,selectedValue:g,focusedValue:d}=M(),{register:b,descendants:c}=Te({disabled:a,value:e}),o=e===g,p=()=>u(e),h=y.useCallback(T=>{const S=c.values().findIndex(m=>m.value===d),X={ArrowLeft:()=>{var m;const v=c.prevEnabled(S,!1);(m=v?.node)===null||m===void 0||m.focus()},ArrowRight:()=>{var m;const v=c.nextEnabled(S,!1);(m=v?.node)===null||m===void 0||m.focus()},Home:()=>{var m;const v=c.firstEnabled();(m=v?.node)===null||m===void 0||m.focus()},End:()=>{var m;const v=c.lastEnabled();(m=v?.node)===null||m===void 0||m.focus()}},Z=T.shiftKey||T.ctrlKey||T.altKey||T.metaKey,D=X[T.key];D&&!Z?(T.preventDefault(),D(T)):T.key==="Tab"&&g&&setTimeout(()=>u(g))},[c,d,g,u]);return{ref:ee([b,i]),isSelected:o,isFocused:d===e,onClick:O(n,()=>g!==e&&l(e)),onFocus:a?void 0:O(t,p),onKeyDown:O(r,h)}}var he=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ne=y.forwardRef((e,a)=>{var{className:t,children:n,icon:r,label:i,value:l,onClick:u,onFocus:g,onKeyDown:d}=e,b=he(e,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:c}=B(),o=Ee({value:l,onClick:u,onFocus:g,disabled:!1,onKeyDown:d},a),p=M();return f.createElement("button",Object.assign({},b,{ref:o.ref,className:c("navds-toggle-group__button",t),type:"button",role:"radio","aria-checked":o.isSelected,"data-selected":o.isSelected,tabIndex:o.isFocused?0:-1,onClick:o.onClick,onFocus:o.onFocus,onKeyDown:o.onKeyDown}),f.createElement(ne,{as:"span",className:c("navds-toggle-group__button-inner"),size:p?.size},n??f.createElement(f.Fragment,null,r,i)))});function xe({onChange:e,value:a,defaultValue:t=""}){const[n,r]=y.useState(t),[i,l]=te({defaultValue:t,value:a,onChange:e});return y.useEffect(()=>{a!=null&&r(a)},[a]),{selectedValue:i,setSelectedValue:l,focusedValue:n,setFocusedValue:r}}var Se=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const A=y.forwardRef((e,a)=>{var{className:t,children:n,onChange:r,size:i="medium",label:l,value:u,defaultValue:g,variant:d,fill:b=!1,"data-color":c}=e,o=Se(e,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:p}=B(),h=re(!1),T=ke(),S=xe({defaultValue:g,value:u,onChange:r}),K=Object.assign(Object.assign({},S),{size:i}),R=ae();!u&&!g&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!u&&!g&&console.error("ToggleGroup needs either a value or defaultValue");let I;return h?.isDarkside?I=d:I=d??"action",f.createElement(be,{value:T},f.createElement(Ie,Object.assign({},K),f.createElement("div",{className:p("navds-toggle-group__wrapper",t,{"navds-toggle-group__wrapper--fill":b}),"data-color":c??we(I)},l&&f.createElement(ie,{as:"div",size:i,className:p("navds-toggle-group__label"),id:R},l),f.createElement("div",Object.assign({"aria-labelledby":l?R:void 0},o,{ref:a,className:p("navds-toggle-group",`navds-toggle-group--${i}`,{[`navds-toggle-group--${I}`]:I}),role:"radiogroup"}),n))))});function we(e){switch(e){case"action":return"accent";case"neutral":return"neutral";default:return}}A.Item=Ne;const L=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],je=["#C0B2D2","#8269A2"],Ae=["#99DEAD","#2AA758"],Re=(e,a)=>{switch(e){case"ARBEIDSTAKERINNTEKT":return L[a%L.length];case"FRILANSINNTEKT":return je;case"YTELSEINNTEKT":return Ae;default:se(e)}},V=({option:e})=>{const a=y.useRef(null);return y.useEffect(()=>{let t;a.current!==null&&(t=ge(a.current,void 0,{locale:"nb-NO"}));const n=()=>{t?.resize()};return globalThis.addEventListener("resize",n),()=>{t?.dispose(),globalThis.removeEventListener("resize",n)}},[]),y.useEffect(()=>{if(a.current!==null){const t=ce(a.current);t&&t.setOption(e)}},[e]),s.jsx("div",{ref:a,style:{width:"auto",height:"400px"}})};V.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const Y=(e,a)=>({inntekter:t})=>!t||t.length===0?0:t.filter(Oe(e,a)).reduce((n,r)=>n+r.beløp,0),Oe=(e,a)=>t=>t.inntektAktivitetType===e&&(a===void 0||"arbeidsgiverIdent"in t&&a===t.arbeidsgiverIdent),Pe=(e,a)=>{const t=Map.groupBy(e,n=>n.fom);for(let n=0;n<12;n+=1){const r=j(a,P).add(n,"M"),i=r.format(P),l=r.endOf("M").format(P);t.has(i)||t.set(i,[{fom:i,tom:l,inntekter:[]}])}return t.values().toArray().flat().sort((n,r)=>j(n.fom).isBefore(j(r.fom))?-1:1)},G=(e,a)=>e.flatMap(t=>t.inntekter).some(t=>t.inntektAktivitetType===a),_=(e,a,t)=>G(e,a)?{[a==="FRILANSINNTEKT"?t.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):t.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:e.map(Y(a))}:{},Fe=(e,a)=>{const t=E.ARBEID;if(!G(e,t))return{};const n=new Set(e.flatMap(i=>i.inntekter).flatMap(i=>"arbeidsgiverIdent"in i?[i.arbeidsgiverIdent]:[])),r=new Map;for(const i of n){const l=oe(a[i]);r.set(l,e.map(Y(t,i)))}return Object.fromEntries(r)},H=(e,a,t,n)=>{const r=Pe(e,a),i=_(r,E.FRILANS,n),l=_(r,E.YTELSE,n),u=Fe(r,t);return{periodeData:r.map(d=>d.fom),dataForFrilans:i,dataForYtelse:l,dataForArbeid:u}},$=e=>le(j(e).locale(me).format("MMM YY").replace(".","")),w=e=>getComputedStyle(document.documentElement).getPropertyValue(e),W=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:a,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:r,dataForFrilans:i,dataForYtelse:l,dataForArbeid:u}=H(a,e,t,n),g=w("--ax-font-size-small"),d={fontFamily:w("--ax-font-family"),color:w("--ax-text-neutral"),fontSize:g};return s.jsx(V,{option:{textStyle:d,legend:{data:[...Object.keys(u),...Object.keys(i),...Object.keys(l)],top:"top"},grid:{top:"7%",left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:g,formatter:b=>q(b)||""}},yAxis:{type:"category",axisLabel:{fontSize:g},data:r.map(b=>$(b))},series:[...Object.entries(u).map(F(E.ARBEID)),...Object.entries(i).map(F(E.FRILANS)),...Object.entries(l).map(F(E.YTELSE))],tooltip:{trigger:"axis",textStyle:d,borderColor:w("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},F=e=>([a,t],n)=>{const[r,i]=Re(e,n);return{name:a,data:t,color:r,itemStyle:{borderWidth:1,borderRadius:4,borderColor:i},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:l=>q(l)||""},label:{show:!0,formatter:l=>{const u=l.value;return u>5e3&&q(u)||""}}}};W.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const U=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:a,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:r,dataForFrilans:i,dataForYtelse:l,dataForArbeid:u}=H(a,e,t,n),g=[...Object.entries(u),...Object.entries(i),...Object.entries(l)].map(([d,b])=>({inntektspostNavn:d,inntekter:b}));return s.jsxs(k,{size:"small",zebraStripes:!0,children:[s.jsx(k.Header,{children:s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"col",textSize:"small",children:s.jsx(x,{id:"SammenligningsgrunnlagTabell.Måned"})}),s.jsx(k.HeaderCell,{scope:"col",textSize:"small",children:s.jsx(x,{id:"SammenligningsgrunnlagTabell.Inntektskilde"})}),s.jsx(k.HeaderCell,{scope:"col",textSize:"small",align:"right",children:s.jsx(x,{id:"SammenligningsgrunnlagTabell.Beløp"})})]})}),s.jsx(k.Body,{children:r.map((d,b)=>{const c=g.map(({inntektspostNavn:o,inntekter:p})=>({inntektspostNavn:o,beløp:p[b]})).filter(({beløp:o})=>o!==0);return s.jsxs(k.Row,{children:[s.jsx(k.HeaderCell,{scope:"row",textSize:"small",children:$(d)}),s.jsx(k.DataCell,{textSize:"small",children:c.map(({inntektspostNavn:o},p)=>s.jsxs(y.Fragment,{children:[o,p<c.length-1&&s.jsx("br",{})]},o))}),s.jsx(k.DataCell,{align:"right",textSize:"small",children:c.map(({beløp:o},p)=>s.jsxs(y.Fragment,{children:[s.jsx(ue,{beløp:o,kr:!0}),p<c.length-1&&s.jsx("br",{})]},`${p}-${o}`))})]},d)}).reverse()})]})};U.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagTabell",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qe=({sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),[r,i]=y.useState("graf");return s.jsxs(N,{defaultOpen:!0,size:"small","aria-label":n.formatMessage({id:"Sammenligningsgrunnlag.ExpansionCard.Header"}),children:[s.jsxs(N.Header,{children:[s.jsx(N.Title,{size:"small",children:s.jsx(x,{id:"Sammenligningsgrunnlag.ExpansionCard.Header"})}),s.jsx(N.Description,{children:s.jsx(x,{id:"Sammenligningsgrunnlag.ExpansionCard.Description"})})]}),s.jsx(N.Content,{children:s.jsxs(de,{gap:"space-16",children:[s.jsxs(A,{size:"small",value:r,onChange:l=>i(l),children:[s.jsx(A.Item,{value:"graf",icon:s.jsx(ve,{"aria-hidden":!0}),label:"Graf"}),s.jsx(A.Item,{value:"tabell",icon:s.jsx(ye,{"aria-hidden":!0}),label:"Tabell"})]}),r==="graf"&&s.jsx(W,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t}),r==="tabell"&&s.jsx(U,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t})]})})]})};qe.__docgenInfo={description:"",methods:[],displayName:"Sammenligningsgrunnlag",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};export{qe as S};
