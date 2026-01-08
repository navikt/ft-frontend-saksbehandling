import{r as k,f as B,R as b,aT as Q,aU as ee,av as O,aV as ne,l as M,B as te,aB as re,k as ae,aY as ie,Y as se,a$ as le,j as s,b0 as oe,d as j,x as P,b1 as ue,i as C,aq as q,an as _,X as de}from"./iframe-DhpJkxJ1.js";import{R as h}from"./index.es-BDctT3QU.js";import{i as ge,g as ce}from"./index-BCO1X-C8.js";import{n as me}from"./nb-BhH4xAEy.js";import{T as y}from"./Table-BVvNUCAC.js";import{M as E}from"./message-CkDnx30t.js";import{E as N}from"./ExpansionCard-DASPtNDr.js";var pe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ve=k.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=pe(e,["title","titleId"]);let i=B();return i=t?n||"title-"+i:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?b.createElement("title",{id:i},t):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.5 2.25c-.69 0-1.25.56-1.25 1.25v16.75h-2.5V10.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v9.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V3.5c0-.69-.56-1.25-1.25-1.25zm.25 18V3.75h2.5v16.5zm-8-9.5v9.5h2.5v-9.5z",clipRule:"evenodd"}))});var fe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const be=k.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=fe(e,["title","titleId"]);let i=B();return i=t?n||"title-"+i:void 0,b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?b.createElement("title",{id:i},t):null,b.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm12 16c.69 0 1.25-.56 1.25-1.25V9.75h-3.5v9.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18c0 .69.56 1.25 1.25 1.25h2.25v-9.5h-3.5zm9.5-8.25v9.5h-4.5v-9.5z",clipRule:"evenodd"}))});k.createContext(null);const[ye,Ge,ke,Te]=Q(),[Ie,V]=ee({name:"ToggleGroupContext",hookName:"useToggleGroupContext",providerName:"ToggleGroupProvider",errorMessage:"<ToggleGroup.Item> needs to be wrapped within <ToggleGroup>"});function Ee({value:e,disabled:a=!1,onFocus:t,onClick:n,onKeyDown:r},i){const{setSelectedValue:l,setFocusedValue:d,selectedValue:c,focusedValue:u}=V(),{register:v,descendants:g}=Te({disabled:a,value:e}),o=e===c,p=()=>d(e),x=k.useCallback(T=>{const S=g.values().findIndex(m=>m.value===u),Z={ArrowLeft:()=>{var m;const f=g.prevEnabled(S,!1);(m=f?.node)===null||m===void 0||m.focus()},ArrowRight:()=>{var m;const f=g.nextEnabled(S,!1);(m=f?.node)===null||m===void 0||m.focus()},Home:()=>{var m;const f=g.firstEnabled();(m=f?.node)===null||m===void 0||m.focus()},End:()=>{var m;const f=g.lastEnabled();(m=f?.node)===null||m===void 0||m.focus()}},J=T.shiftKey||T.ctrlKey||T.altKey||T.metaKey,D=Z[T.key];D&&!J?(T.preventDefault(),D(T)):T.key==="Tab"&&c&&setTimeout(()=>d(c))},[g,u,c,d]);return{ref:ne([v,i]),isSelected:o,isFocused:u===e,onClick:O(n,()=>c!==e&&l(e)),onFocus:a?void 0:O(t,p),onKeyDown:O(r,x)}}var he=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const xe=k.forwardRef((e,a)=>{var{className:t,children:n,icon:r,label:i,value:l,onClick:d,onFocus:c,onKeyDown:u}=e,v=he(e,["className","children","icon","label","value","onClick","onFocus","onKeyDown"]);const{cn:g}=M(),o=Ee({value:l,onClick:d,onFocus:c,disabled:!1,onKeyDown:u},a),p=V();return b.createElement("button",Object.assign({},v,{ref:o.ref,className:g("navds-toggle-group__button",t),type:"button",role:"radio","aria-checked":o.isSelected,"data-selected":o.isSelected,tabIndex:o.isFocused?0:-1,onClick:o.onClick,onFocus:o.onFocus,onKeyDown:o.onKeyDown}),b.createElement(te,{as:"span",className:g("navds-toggle-group__button-inner"),size:p?.size},n??b.createElement(b.Fragment,null,r,i)))});function Ne({onChange:e,value:a,defaultValue:t=""}){const[n,r]=k.useState(t),[i,l]=re({defaultValue:t,value:a,onChange:e});return k.useEffect(()=>{a!=null&&r(a)},[a]),{selectedValue:i,setSelectedValue:l,focusedValue:n,setFocusedValue:r}}var Se=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const A=k.forwardRef((e,a)=>{var{className:t,children:n,onChange:r,size:i="medium",label:l,value:d,defaultValue:c,variant:u,fill:v=!1,"data-color":g}=e,o=Se(e,["className","children","onChange","size","label","value","defaultValue","variant","fill","data-color"]);const{cn:p}=M(),x=ae(!1),T=ke(),S=Ne({defaultValue:c,value:d,onChange:r}),K=Object.assign(Object.assign({},S),{size:i}),R=ie();!d&&!c&&console.error("ToggleGroup without value or defaultvalue is not allowed"),!d&&!c&&console.error("ToggleGroup needs either a value or defaultValue");let I;return x?.isDarkside?I=u:I=u??"action",b.createElement(ye,{value:T},b.createElement(Ie,Object.assign({},K),b.createElement("div",{className:p("navds-toggle-group__wrapper",t,{"navds-toggle-group__wrapper--fill":v}),"data-color":g??we(I)},l&&b.createElement(se,{as:"div",size:i,className:p("navds-toggle-group__label"),id:R},l),b.createElement("div",Object.assign({"aria-labelledby":l?R:void 0},o,{ref:a,className:p("navds-toggle-group",`navds-toggle-group--${i}`,{[`navds-toggle-group--${I}`]:I}),role:"radiogroup"}),n))))});function we(e){switch(e){case"action":return"accent";case"neutral":return"neutral";default:return}}A.Item=xe;const L=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],je=["#C0B2D2","#8269A2"],Ae=["#99DEAD","#2AA758"],Re=(e,a)=>{switch(e){case"ARBEIDSTAKERINNTEKT":return L[a%L.length];case"FRILANSINNTEKT":return je;case"YTELSEINNTEKT":return Ae;default:le(e)}},Y=({option:e})=>{const a=k.useRef(null);return k.useEffect(()=>{let t;a.current!==null&&(t=ge(a.current,void 0,{locale:"nb-NO"}));const n=()=>{t?.resize()};return globalThis.addEventListener("resize",n),()=>{t?.dispose(),globalThis.removeEventListener("resize",n)}},[]),k.useEffect(()=>{if(a.current!==null){const t=ce(a.current);t&&t.setOption(e)}},[e]),s.jsx("div",{ref:a,style:{width:"auto",height:"400px"}})};Y.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const G=(e,a)=>({inntekter:t})=>!t||t.length===0?0:t.filter(Oe(e,a)).reduce((n,r)=>n+r.beløp,0),Oe=(e,a)=>t=>t.inntektAktivitetType===e&&(a===void 0||"arbeidsgiverIdent"in t&&a===t.arbeidsgiverIdent),Pe=(e,a)=>{const t=Map.groupBy(e,n=>n.fom);for(let n=0;n<12;n+=1){const r=j(a,P).add(n,"M"),i=r.format(P),l=r.endOf("M").format(P);t.has(i)||t.set(i,[{fom:i,tom:l,inntekter:[]}])}return t.values().toArray().flat().sort((n,r)=>j(n.fom).isBefore(j(r.fom))?-1:1)},H=(e,a)=>e.flatMap(t=>t.inntekter).some(t=>t.inntektAktivitetType===a),z=(e,a,t)=>H(e,a)?{[a==="FRILANSINNTEKT"?t.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):t.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:e.map(G(a))}:{},Fe=(e,a)=>{const t=h.ARBEID;if(!H(e,t))return{};const n=new Set(e.flatMap(i=>i.inntekter).flatMap(i=>"arbeidsgiverIdent"in i?[i.arbeidsgiverIdent]:[])),r=new Map;for(const i of n){const l=ue(a[i]);r.set(l,e.map(G(t,i)))}return Object.fromEntries(r)},$=(e,a,t,n)=>{const r=Pe(e,a),i=z(r,h.FRILANS,n),l=z(r,h.YTELSE,n),d=Fe(r,t);return{periodeData:r.map(u=>u.fom),dataForFrilans:i,dataForYtelse:l,dataForArbeid:d}},W=e=>oe(j(e).locale(me).format("MMM YY").replace(".","")),w=e=>getComputedStyle(document.documentElement).getPropertyValue(e),U=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:a,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:r,dataForFrilans:i,dataForYtelse:l,dataForArbeid:d}=$(a,e,t,n),c=w("--ax-font-size-small"),u={fontFamily:w("--ax-font-family"),color:w("--ax-text-neutral"),fontSize:c};return s.jsx(Y,{option:{textStyle:u,legend:{data:[...Object.keys(d),...Object.keys(i),...Object.keys(l)],top:"top"},grid:{top:"7%",left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:c,formatter:v=>q(v)||""}},yAxis:{type:"category",axisLabel:{fontSize:c},data:r.map(v=>W(v))},series:[...Object.entries(d).map(F(h.ARBEID)),...Object.entries(i).map(F(h.FRILANS)),...Object.entries(l).map(F(h.YTELSE))],tooltip:{trigger:"axis",textStyle:u,borderColor:w("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},F=e=>([a,t],n)=>{const[r,i]=Re(e,n);return{name:a,data:t,color:r,itemStyle:{borderWidth:1,borderRadius:4,borderColor:i},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:l=>q(l)||""},label:{show:!0,formatter:l=>{const d=l.value;return d>5e3&&q(d)||""}}}};U.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qe="_table_1i70v_1",Ce={table:qe},X=({sammenligningsgrunnlagFom:e,sammenligningsgrunnlagInntekter:a,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),{periodeData:r,dataForFrilans:i,dataForYtelse:l,dataForArbeid:d}=$(a,e,t,n),c=[...Object.entries(d),...Object.entries(i),...Object.entries(l)].map(([u,v])=>({inntektspostNavn:u,inntekter:v}));return s.jsxs(y,{size:"small",zebraStripes:!0,className:Ce.table,children:[s.jsx(y.Header,{children:s.jsxs(y.Row,{children:[s.jsx(y.HeaderCell,{scope:"col",textSize:"small",children:s.jsx(E,{id:"SammenligningsgrunnlagTabell.Måned"})}),s.jsx(y.HeaderCell,{scope:"col",textSize:"small",children:s.jsx(E,{id:"SammenligningsgrunnlagTabell.Inntektskilde"})}),s.jsx(y.HeaderCell,{scope:"col",textSize:"small",align:"right",children:s.jsx(E,{id:"SammenligningsgrunnlagTabell.Beløp"})})]})}),s.jsx(y.Body,{children:r.map((u,v)=>{const g=c.map(({inntektspostNavn:o,inntekter:p})=>({inntektspostNavn:o,beløp:p[v]})).filter(({beløp:o})=>o!==0);return s.jsxs(y.Row,{children:[s.jsx(y.HeaderCell,{scope:"row",textSize:"small",children:W(u)}),s.jsx(y.DataCell,{textSize:"small",children:g.map(({inntektspostNavn:o},p)=>s.jsxs(k.Fragment,{children:[o,p<g.length-1&&s.jsx("br",{})]},o))}),s.jsx(y.DataCell,{align:"right",textSize:"small",children:g.map(({beløp:o},p)=>s.jsxs(k.Fragment,{children:[s.jsx(_,{beløp:o,kr:!0}),p<g.length-1&&s.jsx("br",{})]},`${p}-${o}`))})]},u)}).reverse()}),s.jsx("tfoot",{children:s.jsxs(y.Row,{children:[s.jsx(y.HeaderCell,{scope:"row",colSpan:2,textSize:"small",children:s.jsx(E,{id:"Tabell.Total"})}),s.jsx(y.HeaderCell,{scope:"row",align:"right",textSize:"small",children:s.jsx(_,{beløp:c.reduce((u,{inntekter:v})=>u+v.reduce((g,o)=>g+o,0),0),kr:!0})})]})})]})};X.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagTabell",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Ke=({sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t})=>{const n=C(),[r,i]=k.useState("graf");return s.jsxs(N,{defaultOpen:!0,size:"small","aria-label":n.formatMessage({id:"Sammenligningsgrunnlag.ExpansionCard.Header"}),children:[s.jsxs(N.Header,{children:[s.jsx(N.Title,{size:"small",children:s.jsx(E,{id:"Sammenligningsgrunnlag.ExpansionCard.Header"})}),s.jsx(N.Description,{children:s.jsx(E,{id:"Sammenligningsgrunnlag.ExpansionCard.Description"})})]}),s.jsx(N.Content,{children:s.jsxs(de,{gap:"space-16",children:[s.jsxs(A,{size:"small",value:r,onChange:l=>i(l),children:[s.jsx(A.Item,{value:"graf",icon:s.jsx(ve,{"aria-hidden":!0}),label:"Graf"}),s.jsx(A.Item,{value:"tabell",icon:s.jsx(be,{"aria-hidden":!0}),label:"Tabell"})]}),r==="graf"&&s.jsx(U,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t}),r==="tabell"&&s.jsx(X,{sammenligningsgrunnlagInntekter:e,sammenligningsgrunnlagFom:a,arbeidsgiverOpplysningerPerId:t})]})})]})};Ke.__docgenInfo={description:"",methods:[],displayName:"Sammenligningsgrunnlag",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};export{Ke as S};
