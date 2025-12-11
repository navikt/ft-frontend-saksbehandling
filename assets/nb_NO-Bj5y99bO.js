import{az as S,r as c,j as E,d as m,x as f,aA as N,k as R,ao as b}from"./iframe-AHoChqZU.js";import{R as g}from"./index.es-BDctT3QU.js";import{i as F,g as D}from"./index-BCO1X-C8.js";const k=[["#CCE1FF","#3386E0"],["#99C4DD","#3386E0"],["#3386E0","#005B82"],["#368DA8","#005B82"],["#66CBEC","#368DA8"],["#005B82","#368DA8"]],L=["#C0B2D2","#8269A2"],h=["#99DEAD","#2AA758"],j=(n,t)=>{switch(n){case"ARBEIDSTAKERINNTEKT":return k[t%k.length];case"FRILANSINNTEKT":return L;case"YTELSEINNTEKT":return h;default:S(n)}},T=({option:n})=>{const t=c.useRef(null);return c.useEffect(()=>{let e;t.current!==null&&(e=F(t.current,void 0,{locale:"nb-NO"}));const r=()=>{e?.resize()};return globalThis.addEventListener("resize",r),()=>{e?.dispose(),globalThis.removeEventListener("resize",r)}},[]),c.useEffect(()=>{if(t.current!==null){const e=D(t.current);e&&e.setOption(n)}},[n]),E.jsx("div",{ref:t,style:{width:"auto",height:"500px"}})};T.__docgenInfo={description:"",methods:[],displayName:"ReactECharts",props:{option:{required:!0,tsType:{name:"EChartsOption"},description:""}}};const A=(n,t)=>({inntekter:e})=>!e||e.length===0?0:e.filter(x(n,t)).reduce((r,i)=>r+i.beløp,0),x=(n,t)=>e=>e.inntektAktivitetType===n&&(t===void 0||"arbeidsgiverIdent"in e&&t===e.arbeidsgiverIdent),B=(n,t)=>{const e=Map.groupBy(n,r=>r.fom);for(let r=0;r<12;r+=1){const i=m(t,f).add(r,"M"),s=i.format(f),a=i.endOf("M").format(f);e.has(s)||e.set(s,[{fom:s,tom:a,inntekter:[]}])}return e.values().toArray().flat().sort((r,i)=>m(r.fom).isBefore(m(i.fom))?-1:1)},I=(n,t)=>n.flatMap(e=>e.inntekter).some(e=>e.inntektAktivitetType===t),y=(n,t,e)=>I(n,t)?{[t==="FRILANSINNTEKT"?e.formatMessage({id:"SammenligningsgrunnlagGraf.Frilans"}):e.formatMessage({id:"SammenligningsgrunnlagGraf.Ytelse"})]:n.map(A(t))}:{},P=(n,t,e)=>{const r=g.ARBEID;if(!I(n,r))return{};const i=new Set(n.flatMap(a=>a.inntekter).flatMap(a=>"arbeidsgiverIdent"in a?[a.arbeidsgiverIdent]:[])),s=new Map;for(const a of i){const o=t[a],l=o?N(o):e.formatMessage({id:"SammenligningsgrunnlagGraf.UkjentArbeidsgiver"},{arbeidsgiverIdent:a});s.set(l,n.map(A(r,a)))}return Object.fromEntries(s)},q=(n,t,e,r)=>{const i=B(n,t),s=y(i,g.FRILANS,r),a=y(i,g.YTELSE,r),o=P(i,e,r);return{periodeData:i.map(u=>u.fom),dataForFrilans:s,dataForYtelse:a,dataForArbeid:o}},d=n=>getComputedStyle(document.documentElement).getPropertyValue(n),K=({sammenligningsgrunnlagFom:n,sammenligningsgrunnlagInntekter:t,arbeidsgiverOpplysningerPerId:e})=>{const r=R(),{periodeData:i,dataForFrilans:s,dataForYtelse:a,dataForArbeid:o}=q(t,n,e,r),l=d("--ax-font-size-medium"),u={fontFamily:d("--ax-font-family"),color:d("--ax-text-neutral"),fontSize:l};return E.jsx(T,{option:{textStyle:u,legend:{data:[...Object.keys(o),...Object.keys(s),...Object.keys(a)],top:"top"},grid:{left:"0%",bottom:"0%",right:"0%"},xAxis:{type:"value",axisLabel:{fontSize:l,formatter:p=>b(p)||""}},yAxis:{type:"category",axisLabel:{fontSize:l},data:i.map(p=>m(p).format("MMM YY"))},series:[...Object.entries(o).map(v(g.ARBEID)),...Object.entries(s).map(v(g.FRILANS)),...Object.entries(a).map(v(g.YTELSE))],tooltip:{trigger:"axis",textStyle:u,borderColor:d("--ax-border-neutral-subtleA"),borderRadius:12,padding:[16,20],borderWidth:1}}})},v=n=>([t,e],r)=>{const[i,s]=j(n,r);return{name:t,data:e,color:i,itemStyle:{borderWidth:1,borderRadius:4,borderColor:s},stack:"total",type:"bar",emphasis:{focus:"series"},tooltip:{valueFormatter:a=>b(a)||""},label:{show:!0,formatter:a=>{const o=a.value;return o>5e3&&b(o)||""}}}};K.__docgenInfo={description:"",methods:[],displayName:"SammenligningsgrunnlagGraf",props:{sammenligningsgrunnlagFom:{required:!0,tsType:{name:"string"},description:""},sammenligningsgrunnlagInntekter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Y={"GrunnlagForBeregning.Tittel":"Grunnlag for beregning","GrunnlagForBeregning.Skjæringstidspunkt":"Skjæringstidspunkt for beregning <b>{dato}</b>","Sammenligningsgrunnlag.ExpansionCard.Header":"Sammenligningsgrunnlag §8-30 fra A-ordningen","Sammenligningsgrunnlag.ExpansionCard.Description":"Inntekt og ytelser etter kap. 8, 9 og 14 de 12 siste månedene","SammenligningsgrunnlagGraf.Arbeid":"Arbeid","SammenligningsgrunnlagGraf.Frilans":"Frilans","SammenligningsgrunnlagGraf.Ytelse":"Ytelse","SammenligningsgrunnlagGraf.UkjentArbeidsgiver":"Ukjent arbeidsgiver ({arbeidsgiverIdent})"};export{K as S,Y as m};
