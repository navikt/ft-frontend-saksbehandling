import{r as W,f as Ln,R as ie,aN as de,j as r,aE as Gn,b7 as $e,b8 as ue,b1 as ze,aM as Ce,a5 as me,i as _n,H as F,a0 as ve,h as oe,a1 as _,o as qn,B as V,aC as Dn,aI as Xe,$ as Fn,X as I,aO as Vn,d as Fe,u as O,b9 as $,ba as z,aq as q,ap as D,J as hn,aJ as Ee,b2 as Kn,O as Ve,bb as p,am as Bn,bc as jn,M as Mn,aF as wn,P as he,p as On,a3 as cn}from"./iframe-DGClZT-o.js";import{f,A,m as ee,D as Un,h as Yn,e as Jn,a as xn}from"./Dagsatser-C4VQRmG_.js";import{M as o}from"./message-DM_uILvT.js";import{A as Hn}from"./Avviksberegninger-Cok3MnHO.js";import{A as $n}from"./AktivitetStatusTags-BQ5eapiY.js";import{T as E}from"./Table-B5NN45sO.js";import{S as C}from"./Spacer-BvwAKzKw.js";import{S as zn}from"./Sammenligningsgrunnlag-D10aL883.js";import{t as R,d as X,o as ke,a as be,N as Ae}from"./style-BsDKydG7.js";import{T as Qe}from"./index.es-BDctT3QU.js";import{$ as Ne}from"./index.es-DHTa1rDE.js";import{m as Cn}from"./nb_NO-BCNXSgat.js";import{T as se}from"./Tabs-Ci8gPS9U.js";var Xn=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const Qn=W.forwardRef((e,n)=>{var{title:a,titleId:t}=e,l=Xn(e,["title","titleId"]);let i=Ln();return i=a?t||"title-"+i:void 0,ie.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},l),a?ie.createElement("title",{id:i},a):null,ie.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.5 4.75a.25.25 0 0 0-.25.25v1.25h5.5V5a.25.25 0 0 0-.25-.25zM7.75 5v1.25H3.5c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h7.75V11a.75.75 0 0 1 1.5 0v1.75h7.75c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-4.25V5a1.75 1.75 0 0 0-1.75-1.75h-5A1.75 1.75 0 0 0 7.75 5m3.5 9.25V15a.75.75 0 0 0 1.5 0v-.75h7.5v4.25c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-4.25z",clipRule:"evenodd"}))}),Z=(e,n)=>({identifikator:e,navn:n,erPrivatPerson:!1}),ya={222222222:Z("222222222","TROSSIG NATURSTRIDIG TIGER AS"),333333333:Z("333333333","SAUEFABRIKK"),444444444:Z("444444444","INTERESSANT INTUITIV KATT DIAMETER"),555555555:Z("555555555","Gardslien transport og Gardiner AS")},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Zn,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Wn,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:er,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:nr,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:rr}=A,ar={[er]:"LegacyAksjonspunktTittel.Arbeidstaker",[nr]:"LegacyAksjonspunktTittel.TidsbegrensetArbeidsforhold",[rr]:"LegacyAksjonspunktTittel.NyIArbeidslivetSN",[Wn]:"LegacyAksjonspunktTittel.VarigEndretArbeidssituasjon",[Zn]:"LegacyAksjonspunktTittel.SelvstendigNaeringsdrivende"},Ze=({beregningsgrunnlag:{avklaringsbehov:e,beregningsgrunnlagPeriode:n}})=>{const a=f(n),t=e.filter(de);if(a.length===0)return null;const i=(a.find(s=>s.aktivitetStatus==="SN")?.næringer??[]).some(s=>s.erVarigEndret===!0);return r.jsx(Gn,{children:t.map(s=>r.jsx(o,{id:ar[s.definisjon],values:{erVarigEndring:i}},s.definisjon))})};Ze.__docgenInfo={description:"",methods:[],displayName:"LegacyAksjonspunktTittel",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`},description:""}}};const We=({avklaringsbehov:e})=>e?.begrunnelse?r.jsx($e,{tittel:r.jsx(o,{id:"ReadonlyAPGraderingUtenBG.Tittel"}),aksjonspunkt:e,children:r.jsx(ue,{size:"small",label:r.jsx(o,{id:"ReadonlyAPGraderingUtenBG.Begrunnelse"}),value:e.begrunnelse})}):null;We.__docgenInfo={description:`Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.`,methods:[],displayName:"ReadonlyAPGraderingUtenBG",props:{avklaringsbehov:{required:!0,tsType:{name:"union",raw:"BeregningAvklaringsbehov | undefined",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`},{name:"undefined"}]},description:""}}};const Ke=(e,n)=>e.arbeidsforhold?.arbeidsforholdType&&n.OpptjeningAktivitetType.find(a=>a.kode===e.arbeidsforhold?.arbeidsforholdType)?.navn||"",en=(e,n)=>a=>{if(a.arbeidsforhold?.arbeidsgiverIdent){const t=e[a.arbeidsforhold.arbeidsgiverIdent];return t?ze(t,a.arbeidsforhold.eksternArbeidsforholdId):Ke(a,n)}return Ke(a,n)},Be=e=>e?e.flatMap(({inntekter:n})=>n).filter(n=>n.inntektAktivitetType==="ARBEIDSTAKERINNTEKT").reduce((n,a)=>(n[a.arbeidsgiverIdent]=(n[a.arbeidsgiverIdent]||0)+a.beløp,n),{}):{},tr=e=>e.filter(n=>n.aktivitetStatus==="AT").filter(n=>n.erTilkommetAndel===!1),lr=({inntektsgrunnlag:e,beregningsgrunnlagPeriode:n},a)=>{const t=f(n),l=tr(t),i=Be(e?.beregningsgrunnlagInntekter),s=Be(e?.sammenligningsgrunnlagInntekter);return l.map(u=>{const g=u.arbeidsforhold?.arbeidsgiverIdent;return{andelsLabel:a(u),andelsnr:u.andelsnr,ansattPeriode:u.arbeidsforhold?{fom:u.arbeidsforhold.startdato,tom:u.arbeidsforhold.opphoersdato}:void 0,sisteLønnsendringsdato:u.arbeidsforhold?.sisteLønnsendringsdato,formatertStillingsprosenter:ir(u.arbeidsforhold?.stillingsprosenter),inntektsmeldingÅrsinntekt:u.arbeidsforhold?.belopFraInntektsmeldingPrMnd?u.arbeidsforhold.belopFraInntektsmeldingPrMnd*12:void 0,beregningsgrunnlagÅrsinntekt:g?i[g]:0,sammenligningsgrunnlagÅrsinntekt:g?s[g]:0}})},ir=(e=[])=>{if(e.length===0)return;const n=e.toSorted(Ce("fomDato")),a=n.at(-1),t=n.at(-2);return a&&t?`Fra ${t.prosent}% til ${a.prosent}% (${me(a.fomDato)})`:e[0].prosent+"%"},sr="_table_1oitq_1",ur={table:sr},nn=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,kodeverkSamling:a})=>{const t=_n(),l=lr(e,en(n,a));return l.length===0?null:r.jsxs("div",{children:[r.jsxs(F,{gap:"space-8",align:"center",children:[r.jsx(Qn,{"aria-hidden":!0,fontSize:"1.25rem"}),r.jsx(ve,{size:"small",level:"4",children:r.jsx(o,{id:"Arbeidsinntekt.Tittel"})})]}),r.jsxs(E,{size:"small",className:ur.table,children:[r.jsx(E.Header,{children:r.jsxs(E.Row,{children:[r.jsx(E.HeaderCell,{}),r.jsxs(E.HeaderCell,{scope:"col",textSize:"small",align:"right",children:[r.jsx(o,{id:"Arbeidsinntekt.Table.Inntektsmelding"}),r.jsx(oe,{children:r.jsx(o,{id:"Arbeidsinntekt.Table.Inntektsmelding.HelpText"})})]}),r.jsxs(E.HeaderCell,{scope:"col",textSize:"small",align:"right",children:[r.jsx(o,{id:"Arbeidsinntekt.Table.Innrapportert"}),r.jsx(oe,{children:r.jsx(o,{id:"Arbeidsinntekt.Table.Innrapportert.HelpText"})})]}),r.jsx(E.HeaderCell,{scope:"col",textSize:"small",align:"right",children:r.jsx(o,{id:"Arbeidsinntekt.Table.Sammenligningsgrunnlag"})}),r.jsx(E.HeaderCell,{})]})}),r.jsx(E.Body,{children:l.map(i=>r.jsxs(E.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:r.jsxs("div",{children:[i.ansattPeriode?.fom&&r.jsx(qn,{content:t.formatMessage({id:"Arbeidsinntekt.Ansettelsesperiode"}),children:r.jsx(V,{size:"small",as:"span",children:r.jsx(Dn,{dateStringFom:i.ansattPeriode.fom,dateStringTom:i.ansattPeriode.tom})})}),i.sisteLønnsendringsdato&&r.jsx(ue,{horizontal:!0,size:"small",label:r.jsx(o,{id:"Arbeidsinntekt.SistEndretLonn"}),value:r.jsx(Xe,{dateString:i.sisteLønnsendringsdato})}),i.formatertStillingsprosenter&&r.jsx(ue,{size:"small",label:r.jsx(o,{id:"Arbeidsinntekt.Stillingsprosent"}),value:i.formatertStillingsprosenter})]}),children:[r.jsx(E.DataCell,{textSize:"small",children:i.andelsLabel}),r.jsx(E.DataCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:i.inntektsmeldingÅrsinntekt,kr:!0})}),r.jsx(E.DataCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:i.beregningsgrunnlagÅrsinntekt,kr:!0})}),r.jsx(E.DataCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:i.sammenligningsgrunnlagÅrsinntekt,kr:!0})})]},i.andelsnr))}),r.jsx("tfoot",{children:r.jsxs(E.Row,{children:[r.jsx(E.HeaderCell,{textSize:"small",children:r.jsx(o,{id:"Arbeidsinntekt.Table.Total"})}),r.jsx(E.HeaderCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:l.reduce((i,{inntektsmeldingÅrsinntekt:s})=>i+(s??0),0),kr:!0})}),r.jsx(E.HeaderCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:l.reduce((i,{beregningsgrunnlagÅrsinntekt:s})=>i+(s??0),0),kr:!0})}),r.jsx(E.HeaderCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:l.reduce((i,{sammenligningsgrunnlagÅrsinntekt:s})=>i+(s??0),0),kr:!0})}),r.jsx(E.HeaderCell,{})]})})]})]})};nn.__docgenInfo={description:"",methods:[],displayName:"Arbeidsinntekt",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};const rn=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,kodeverkSamling:a})=>r.jsx(Fn.New,{background:"neutral-soft",padding:"5",children:r.jsxs(I,{gap:"space-12",children:[r.jsx(ve,{size:"medium",level:"2",children:r.jsx(o,{id:"GrunnlagForBeregning.Tittel"})}),r.jsxs(F,{align:"center",children:[r.jsx($n,{kodeverkSamling:a,beregningsgrunnlagPeriode:e.beregningsgrunnlagPeriode}),r.jsx(C,{}),r.jsx(V,{size:"small",children:r.jsx(o,{id:"GrunnlagForBeregning.Skjæringstidspunkt",values:{dato:me(e.skjaeringstidspunktBeregning),b:Vn}})})]}),r.jsx(nn,{beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,kodeverkSamling:a})]})});rn.__docgenInfo={description:"",methods:[],displayName:"GrunnlagForBeregning",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},beregningsgrunnlagsvilkår:{required:!0,tsType:{name:"union",raw:"Vilkår | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurderesIBehandlingen",value:{name:"boolean",required:!0}},{key:"erForlengelse",value:{name:"boolean",required:!1}},{key:"merknad",value:{name:"string",required:!1}},{key:"merknadParametere",value:{name:"signature",type:"object",raw:"{ [name: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:"{ fom: string; tom: string }",signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>`}],raw:"Vilkårperiode[]",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}>`},{name:"null"}]},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};const an=({beregningsgrunnlag:e,beregningsgrunnlagsvilkår:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t})=>{const{sammenligningsgrunnlagPrStatus:l=[],inntektsgrunnlag:i,avklaringsbehov:s}=e;return r.jsxs(I,{gap:"space-8",paddingBlock:"space-16",children:[r.jsx(Ze,{beregningsgrunnlag:e}),r.jsx(rn,{beregningsgrunnlag:e,beregningsgrunnlagsvilkår:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t}),l.length>0&&r.jsx(Hn,{sammenligningsgrunnlagPrStatus:l}),l.length>0&&i&&i.sammenligningsgrunnlagInntekter.length>0&&r.jsx(zn,{sammenligningsgrunnlagFom:l[0].sammenligningsgrunnlagFom,sammenligningsgrunnlagInntekter:i.sammenligningsgrunnlagInntekter,arbeidsgiverOpplysningerPerId:t}),r.jsx(We,{avklaringsbehov:s.find(ee(A.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG))}),r.jsx(Un,{beregningsgrunnlag:e,beregningsgrunnlagsvilkår:n,kodeverkSamling:a})]})};an.__docgenInfo={description:"",methods:[],displayName:"TabInnhold",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},beregningsgrunnlagsvilkår:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurderesIBehandlingen",value:{name:"boolean",required:!0}},{key:"erForlengelse",value:{name:"boolean",required:!1}},{key:"merknad",value:{name:"string",required:!1}},{key:"merknadParametere",value:{name:"signature",type:"object",raw:"{ [name: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:"{ fom: string; tom: string }",signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>`}],raw:"Vilkårperiode[]",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}>`},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};const or=(e,n)=>{const a=gr(e,n),t=a.find(s=>s.skalVurderes&&s.harAksjonspunkt)?.bgIndex??0,[l,i]=W.useState(t);return{tabOptions:a,currentTabValue:l.toString(),onTabChange:s=>i(Number(s))}},gr=(e,n)=>e.map((a,t)=>({bgIndex:t,skalVurderes:Jn(a,n),harAksjonspunkt:Yn(a.avklaringsbehov),skjæringstidspunkt:a.skjaeringstidspunktBeregning,optionLabel:me(a.skjaeringstidspunktBeregning)})).sort((a,t)=>Fe(a.skjæringstidspunkt).diff(Fe(t.skjæringstidspunkt)));var P=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(P||{});const dr=new Set(["FL","AT_FL","AT_FL_SN","FL_SN"]),mr=new Set(["AT","AT_FL","AT_FL_SN","AT_SN"]),vr=new Set(["SN","FL_SN","AT_FL_SN","AT_SN"]),Er=e=>dr.has(e),kr=e=>mr.has(e),br=e=>vr.has(e),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Ar,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Nr,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:yr,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Rr,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:pr}=A;var M=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(M||{});const tn=(e,n=[])=>P.SN===e||P.MIDLERTIDIG_INAKTIV===e||P.ATFLSN===e&&n.some(br)?"8-35":"8-30",ge=e=>{switch(e.definisjon){case pr:case Rr:case yr:return"8-35";case Ar:case Nr:return"8-30";default:return null}},Pr="BeregningForm",ye=e=>`${Pr}_${e}`,c=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,fieldIndex:l,formName:i,skalValideres:s})=>{const{control:u}=O(),g=Re(n),m=en(t,a);return r.jsx(r.Fragment,{children:g.map((d,k)=>r.jsxs(F,{wrap:!1,children:[r.jsx(V,{size:"small",children:m(d)}),r.jsx(C,{}),r.jsx($,{name:`${i}.${l}.inntekt${k}`,control:u,validate:s?[R,X(178956970)]:[],readOnly:e||d.skalFastsetteGrunnlag!==!0,parse:z,htmlSize:12,style:{textAlign:"right"},hideLabel:!0,isEdited:e&&(!!d.overstyrtPrAar||d.overstyrtPrAar===0)})]},d.andelsnr))})};c.buildInitialValues=e=>{const n=Re(e),a={};return n.forEach((t,l)=>{a[`inntekt${l}`]=q(t.overstyrtPrAar)??""}),a};c.transformValues=(e,n)=>n.some(a=>a.aktivitetStatus==="AT")?{inntektPrAndelList:Re(n).map(({andelsnr:t},l)=>{const i=e[`inntekt${l}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:i===void 0||i===""?0:D(i),andelsnr:t}})}:{inntektPrAndelList:[]};const Re=e=>e?e.filter(n=>n.aktivitetStatus==="AT").filter(n=>xn(n)):[];c.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"alleAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},alias:"ArbeidstakerInntektValues"}},{name:"alleAndelerIForstePeriode",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}}],returns:{type:{name:"Pick",elements:[{name:"intersection",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
}`,signature:{properties:[{key:"inntektPrAndelList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  inntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:"ArbeidsinntektResultat[]",required:!0}},{key:"inntektFrilanser",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'inntektPrAndelList'"}],raw:"Pick<FastsettAvvikATFLResultatAP, 'inntektPrAndelList'>"}}}],displayName:"AksjonspunktBehandlerAT",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleAndelerIForstePeriode:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const Tr=e=>e.some(n=>n.aktivitetStatus==="FL"&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),h=({readOnly:e,fieldIndex:n,formName:a,alleAndelerIForstePeriode:t,skalValideres:l})=>{const{control:i}=O();return r.jsxs(F,{wrap:!1,children:[r.jsx(V,{size:"small",children:r.jsx(o,{id:"AksjonspunktBehandlerFL.Label"})}),r.jsx(C,{}),r.jsx($,{control:i,name:`${a}.${n}.inntektFrilanser`,validate:l?[R,X(178956970)]:void 0,readOnly:e,hideLabel:!0,parse:z,htmlSize:12,style:{textAlign:"right"},isEdited:e&&Tr(t)})]})};h.buildInitialValues=e=>{const n=e.length>0?q(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};h.transformValues=e=>({inntektFrilanser:e.inntektFrilanser===void 0?null:D(e.inntektFrilanser)});h.__docgenInfo={description:`AksjonspunktBehandlerFL

Viser et inputfelt for å sette frilansinntekt ved aksjonspunkt.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"relevanteAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`FrilansInntektValues &
ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}],alias:"ATFLValues"}}],returns:null}],displayName:"AksjonspunktBehandlerFL",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},alleAndelerIForstePeriode:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const je="inntektField",Ir=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(Qe.ARBEIDSFORHOLD_AVSLUTTET),ne=e=>{const n=[];let a=0;for(;a<e.length;){const t={...e[a]};for(a+=1;a<e.length&&!Ir(e[a]);)a+=1;n.push({...t,beregningsgrunnlagPeriodeTom:e[a-1].beregningsgrunnlagPeriodeTom})}return n},w=(e,n)=>e.arbeidsforhold?`${je}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${je}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,re=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus==="AT"&&n.erTilkommetAndel!==!0):[],ln=e=>{const n=e?.arbeidsforholdId?e?.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},fr=(e,n,a)=>{const t=e.arbeidsgiverIdent?a[e.arbeidsgiverIdent]:null;return t?ze(t,e.eksternArbeidsforholdId):e.arbeidsforholdType?n.OpptjeningAktivitetType.find(l=>l.kode===e.arbeidsforholdType)?.navn:""},sn=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),Sr=(e,n,a)=>{const t=re(e),l={};return t.forEach(i=>{if(!i.arbeidsforhold)return;const s=ln(i.arbeidsforhold),u=sn();u.tabellInnhold=fr(i.arbeidsforhold,n,a),u.erTidsbegrenset=i.erTidsbegrensetArbeidsforhold===void 0?!1:i.erTidsbegrensetArbeidsforhold,l[s]=[u]}),l},pe=e=>e.toSorted(Ce("beregningsgrunnlagPeriodeFom"))[0],un=(e,n)=>{const a=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus==="AT"?a?.find(t=>t.arbeidsforhold?.arbeidsgiverIdent===e.arbeidsforhold?.arbeidsgiverIdent&&t.arbeidsforhold?.arbeidsforholdId===e.arbeidsforhold?.arbeidsforholdId):a?.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Pe=(e,n)=>{const a=pe(n);return!!un(e,a)?.erTidsbegrensetArbeidsforhold},Lr=(e,n,a)=>{const t=ne(e),l=e[0].beregningsgrunnlagPeriodeFom,i=Sr(e[0],n,a);return t.forEach(s=>{const u=s.beregningsgrunnlagPeriodeFom===l;re(s).forEach(m=>{const d=Pe(m,e),k=ln(m.arbeidsforhold),v=sn();v.tabellInnhold=m.overstyrtPrAar!==void 0&&m.overstyrtPrAar!==null?q(m.overstyrtPrAar):"",v.erTidsbegrenset=!1,v.isEditable=d?!0:u,v.inputfieldKey=w(m,s),i[k].push(v)})}),i},Gr=({bruttoPrPeriodeList:e})=>r.jsxs(E.Row,{shadeOnHover:!1,children:[r.jsx(E.HeaderCell,{textSize:"small",children:r.jsx(o,{id:"AksjonspunktBehandlerTB.SumPeriode"})}),e.map(({periodeFom:n,brutto:a})=>r.jsx(E.HeaderCell,{textSize:"small",align:"right",children:r.jsx(_,{beløp:a,kr:!0})},n))]}),_r=({bruttoPrPeriodeList:e})=>r.jsxs(E.Row,{shadeOnHover:!1,children:[r.jsx(E.HeaderCell,{scope:"col"}),e.map(({periodeFom:n})=>r.jsxs(E.HeaderCell,{textSize:"small",align:"right",children:[r.jsx(Xe,{dateString:n}),r.jsx(oe,{children:r.jsx(o,{id:"AksjonspunktBehandlerTB.OmberegnetAar"},`Tittel_${n}`)})]},`periodetittel${n}`))]}),qr=({tabellData:e,readOnly:n,finnesAlleredeLøstPeriode:a,fieldIndex:t,formName:l,skalValideres:i,control:s})=>Object.entries(e).map(([u,g])=>r.jsx(E.Row,{shadeOnHover:!1,children:g.map(m=>m.isEditable?r.jsx(E.DataCell,{align:"right",children:r.jsxs(F,{children:[r.jsx(C,{}),r.jsx($,{name:`${l}.${t}.${m.inputfieldKey}`,control:s,validate:i?[R,X(178956970)]:void 0,readOnly:n,isEdited:n&&a,hideLabel:!0,parse:z,htmlSize:12,style:{textAlign:"right"}})]})},`Col-${m.inputfieldKey}`):r.jsx(E.DataCell,{textSize:"small",children:m.tabellInnhold},m.tabellInnhold))},u)),Dr=(e,n,a,t)=>{if(e.length<1)return[];const l=ne(e),i=[];return l.forEach(s=>{const m=re(s).map(d=>{const k=w(d,s),v=n.watch(`${t}.${a}.${k}`);return v===void 0||v===""?0:D(v)}).reduce((d,k)=>d+k,0);i.push({brutto:m,periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom})}),i},U=({readOnly:e,beregningsgrunnlagPeriode:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,fieldIndex:l,formName:i,skalValideres:s})=>{const u=Lr(n,a,t),g=n.some(k=>k.beregningsgrunnlagPrStatusOgAndel?.some(v=>v.aktivitetStatus==="AT"&&(!!v.overstyrtPrAar||v.overstyrtPrAar===0))),m=O(),d=Dr(n,m,l,i);return r.jsxs(E,{children:[r.jsx(E.Header,{children:r.jsx(_r,{bruttoPrPeriodeList:d})}),r.jsx(E.Body,{children:r.jsx(qr,{tabellData:u,readOnly:e,finnesAlleredeLøstPeriode:g,fieldIndex:l,formName:i,skalValideres:s,control:m.control})}),r.jsx("tfoot",{children:r.jsx(Gr,{bruttoPrPeriodeList:d})})]})};U.buildInitialValues=e=>{const n={},a=ne(e),t=pe(e);return a.forEach(l=>{(l.beregningsgrunnlagPrStatusOgAndel?l.beregningsgrunnlagPrStatusOgAndel.filter(s=>s.aktivitetStatus==="AT"):[]).forEach(s=>{if(Pe(s,e)){const g=q(s.overstyrtPrAar);n[w(s,l)]=g||""}else{const g=un(s,t),m=q(g?.overstyrtPrAar);n[w(s,l)]=m||""}})}),n};U.transformValues=(e,n)=>{const a=[],t=pe(n);return ne(n).forEach(i=>{const s=re(i),u=[];s.forEach(g=>{if(Pe(g,n)){const d=D(e[w(g,i)]);u.push({andelsnr:g.andelsnr,bruttoFastsattInntekt:d})}else{const d=D(e[w(g,t)]);u.push({andelsnr:g.andelsnr,bruttoFastsattInntekt:d})}}),a.push({periodeFom:i.beregningsgrunnlagPeriodeFom,periodeTom:i.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:u})}),{fastsatteTidsbegrensedePerioder:a}};U.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"beregningsgrunnlagPeriode",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},alias:"TidsbegrenseArbeidsforholdValues"}},{name:"perioder",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]"}}],returns:{type:{name:"Pick",elements:[{name:"intersection",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
}`,signature:{properties:[{key:"fastsatteTidsbegrensedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"fastsatteTidsbegrensedeAndeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  bruttoFastsattInntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"bruttoFastsattInntekt",value:{name:"number",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdInntektResultat[]",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdPeriodeResultat[]",required:!0}},{key:"frilansInntekt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'fastsatteTidsbegrensedePerioder'"}],raw:"Pick<FastsettAvvikATFLTidsbegrensetResultatAP, 'fastsatteTidsbegrensedePerioder'>"}}}],displayName:"AksjonspunktBehandlerTidsbegrenset",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},beregningsgrunnlagPeriode:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const Fr=(e,n,a,t)=>!e&&!a||n?!0:t===void 0?!e:!e&&t||t,on=({isReadOnly:e,isSubmittable:n,isSubmitting:a,isDirty:t,text:l,onClick:i,hasEmptyRequiredFields:s})=>e?null:r.jsx(hn,{variant:"primary",size:"small",loading:a,disabled:Fr(t,a,n,s),onClick:i,type:i?"button":"submit",children:l||r.jsx(o,{id:"ProsessStegSubmitButton.Label"})});on.__docgenInfo={description:"ProsessStegSubmitButton",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const gn=4e3,Vr=ke(gn),hr=be(3),Te="fastsettBeregningsgrunnlagSNBegrunnelse",Ie="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Kr}=A,K=({readOnly:e,isAksjonspunktClosed:n,erNyIArbeidslivet:a,fieldIndex:t,formName:l,aksjonspunkt:i,skalValideres:s})=>{const{control:u}=O();return r.jsxs(I,{gap:"space-40",children:[a&&r.jsxs(F,{wrap:!1,children:[r.jsx(V,{size:"small",children:r.jsx(o,{id:"FastsettSNNyIArbeid.Tittel"})}),r.jsx(C,{}),r.jsx($,{name:`${l}.${t}.${Ie}`,control:u,validate:s?[R,X(178956970)]:[],parse:z,hideLabel:!0,htmlSize:12,style:{textAlign:"right"},isEdited:e&&n,readOnly:e})]}),r.jsx(Ee,{name:`${l}.${t}.${Te}`,control:u,label:r.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:s?[R,Vr,hr,Ae]:[],isEdited:e&&n,maxLength:gn,readOnly:e,description:r.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:g=>g.toString().replaceAll("‑","-").replaceAll("	"," ")}),r.jsx(Ne,{ident:i?.vurdertAv,date:i?.vurdertTidspunkt})]})};K.buildInitialValues=(e,n)=>{const a=e.find(l=>l.aktivitetStatus==="SN"),t=n.find(ee(Kr));return{[Ie]:a?q(a.overstyrtPrAar):void 0,[Te]:t?.begrunnelse?t.begrunnelse:void 0}};K.transformValues=e=>({begrunnelse:e[Te],bruttoBeregningsgrunnlag:D(e[Ie])});K.__docgenInfo={description:`FastsettSN

Aksjonspunkt: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE

Presentasjonskomponent. Setter opp inputfelt som lar saksbehandler fastsette
næringsinntekt for selvstendig næringsdrivende. Opprettes enten hvis det er varig endret / nyoppstartet næring eller søker er ny i arbeidslivet.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"relevanteAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}},{name:"avklaringsbehov",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Required",elements:[{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"Required<NyIArbeidslivetValues>",alias:"Required"}}],returns:{type:{name:"intersection",raw:`{
  bruttoBeregningsgrunnlag: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag: number;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}}}],displayName:"FastsettSNNyIArbeid",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},isAksjonspunktClosed:{required:!0,tsType:{name:"boolean"},description:""},erNyIArbeidslivet:{required:!0,tsType:{name:"boolean"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const dn=4e3,Br=ke(dn),jr=be(3),fe="varigEndringNyoppstartetBegrunnelse",Se="erVarigEndret",Le="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Mr,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:wr}=A,Y=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:a,erNyoppstartet:t,fieldIndex:l,formName:i,isAksjonspunktClosed:s,aksjonspunkt:u,skalValideres:g})=>{const{radioOption1:m,radioOption2:d,radioLegend:k}=cr(t,n,a),v=O(),b=v.watch(i)[l].erVarigEndret;return r.jsxs(I,{gap:"space-16",children:[r.jsxs(Kn,{name:`${i}.${l}.${Se}`,control:v.control,validate:g?[R]:[],legend:k,readOnly:e,isEdited:e&&s,children:[r.jsx(Ve,{value:!1,size:"small",children:m}),r.jsx(Ve,{value:!0,size:"small",children:d})]}),b&&r.jsxs(F,{gap:"space-16",align:"center",children:[r.jsx(V,{size:"small",children:Or(a)}),r.jsx($,{name:`${i}.${l}.${Le}`,control:v.control,validate:g?[R,X(178956970)]:[],parse:z,hideLabel:!0,htmlSize:12,style:{textAlign:"right"},readOnly:e,isEdited:e&&s})]}),r.jsx(Ee,{name:`${i}.${l}.${fe}`,control:v.control,label:r.jsx(o,{id:"Forms.Vurdering"}),validate:g?[R,Br,jr,Ae]:[],maxLength:dn,readOnly:e,description:r.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:J=>J.toString().replaceAll("‑","-").replaceAll("	"," ")}),r.jsx(Ne,{ident:u?.vurdertAv,date:u?.vurdertTidspunkt})]})};Y.buildInitialValues=(e,n)=>{const a=e.find(l=>l.aktivitetStatus==="SN"||l.aktivitetStatus==="BA"),t=n.find(ee(Mr,wr));if(t){const l=de(t)?void 0:e?.[0]?.overstyrtPrAar!=null;return{[Se]:l,[fe]:t.begrunnelse?t.begrunnelse:"",[Le]:a?q(a.overstyrtPrAar):void 0}}return{}};Y.transformValues=e=>{const n=e[Se];return{begrunnelse:e[fe],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?D(e[Le]):void 0}};const Or=e=>e?r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.VarigEndretInntektFastsettesTil"}):r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.BruttoBerGr2"}),cr=(e,n,a)=>{let t=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.IngenEndring"}),l=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.EndretNaering"});e&&!n&&(t=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.IkkeNyoppstartet"}),l=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.Nyoppstartet"})),n&&!e&&(t=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.IkkeVarigEndring"}),l=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.VarigEndring"}));let i=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringNæring"});return a&&(i=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringArbeid"})),e&&(i=r.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.RadioTittel.NyoppstartetNæring"})),{radioOption1:t,radioOption2:l,radioLegend:i}};Y.__docgenInfo={description:`VurderVarigEndretEllerNyoppstartetSN

Aksjonspunkt: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE eller
VURDER_VARIG_ENDRET_ARBEIDSSITUASJON

Presentasjonskomponent. Setter opp radioknapper som lar saksbehandler vurdere
aksjonspunkt om søker har hatt varig endret eller nyoppstartet næring eller varig endret arbeidssituasjon.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"relevanteAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}},{name:"avklaringsbehov",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Required",elements:[{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}}],raw:"Required<VurderOgFastsettValues>",alias:"Required"}}],returns:{type:{name:"intersection",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
}`,signature:{properties:[{key:"erVarigEndretNaering",value:{name:"boolean",required:!0}},{key:"erVarigEndret",value:{name:"boolean",required:!0}},{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}}}],displayName:"VurderVarigEndringEllerNyoppstartet",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erVarigEndring:{required:!1,tsType:{name:"boolean"},description:""},erVarigEndretArbeidssituasjon:{required:!1,tsType:{name:"boolean"},description:""},erNyoppstartet:{required:!1,tsType:{name:"boolean"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},isAksjonspunktClosed:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ge,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Ur,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:mn}=A,Yr=e=>[Ur,Ge,mn].includes(e.definisjon),T=({readOnly:e,aksjonspunkt:n,erNyIArbeidslivet:a=!1,erVarigEndring:t=!1,erNyoppstartet:l=!1,fieldIndex:i,formName:s,skalValideres:u})=>{if(!Yr(n))return null;const g=!de(n);return a?r.jsx(K,{readOnly:e,isAksjonspunktClosed:g,erNyIArbeidslivet:a,fieldIndex:i,formName:s,aksjonspunkt:n,skalValideres:u}):r.jsx(Y,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===mn,erNyoppstartet:l,fieldIndex:i,formName:s,isAksjonspunktClosed:g,aksjonspunkt:n,skalValideres:u})};T.buildInitialValues=(e,n)=>p(Ge,n)?K.buildInitialValues(e,n):Y.buildInitialValues(e,n);T.transformValues=(e,n)=>p(Ge,n)?K.transformValues(e):Y.transformValues(e);T.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"relevanteAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}},{name:"aksjonspunkt",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]"}}],returns:{type:{name:"union",raw:"VurderOgFastsettValues | NyIArbeidslivetValues",elements:[{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"union",raw:"VurderOgFastsettValues | NyIArbeidslivetValues",elements:[{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}}]}},{name:"gjeldendeAvklaringsbehov",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]"}}],returns:{type:{name:"union",raw:"VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetBruttoNæringResultatAP",elements:[{name:"intersection",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
}`,signature:{properties:[{key:"erVarigEndretNaering",value:{name:"boolean",required:!0}},{key:"erVarigEndret",value:{name:"boolean",required:!0}},{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  bruttoBeregningsgrunnlag: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag: number;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}]}}}],displayName:"AksjonspunktBehandlerSNEllerMidlertidigInaktiv",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`},description:""},erNyIArbeidslivet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erVarigEndring:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erNyoppstartet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:vn,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:En,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:kn,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:bn,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:An}=A,Jr=e=>(f(e).find(l=>l.aktivitetStatus==="SN")?.næringer??[]).some(l=>l.erNyoppstartet===!0)?r.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.Nyoppstartet"}):r.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.VarigEndring"}),Nn=(e,n)=>{switch(e.definisjon){case vn:return Jr(n);case An:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.SNNyIArb"});case En:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.VarigEndringArbeid"});case kn:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.ATFL"});case bn:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.ATFLTidsbegrenset"});default:return"Ukjent aksjonspunkt"}},xr=e=>{const n=e.some(kr),a=e.some(Er);return n&&a?r.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.ATFLAvvik"}):a?r.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.FLAvvik"}):r.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.ATAvvik"})},yn=(e,n)=>{switch(e.definisjon){case vn:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.VarigEndringNyoppstartet"});case An:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.SNNyIArb"});case En:return r.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.VarigEndringArbeid"});case kn:case bn:return xr(n);default:return"Ukjent aksjonspunkt"}};Nn.__docgenInfo={description:"",methods:[],displayName:"finnAPBeskrivelse"};yn.__docgenInfo={description:"",methods:[],displayName:"finnAPTittel"};const{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Hr,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:$r}=A,zr=e=>e.find(ee(Hr,$r)),Cr=be(3),Rn=4e3,Xr=ke(Rn),S=({kodeverkSamling:e,beregningsgrunnlagPeriode:n,arbeidsgiverOpplysningerPerId:a,readOnly:t,fieldIndex:l,formName:i,avklaringsbehov:s,skalValideres:u})=>{const{control:g}=O(),m=Qr(n),d=Me(n,"FL"),k=Me(n,"AT");return r.jsxs(r.Fragment,{children:[m&&r.jsx(U,{readOnly:t,formName:i,beregningsgrunnlagPeriode:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:a,fieldIndex:l,skalValideres:u}),r.jsxs("div",{children:[!m&&k&&r.jsx(c,{readOnly:t,alleAndelerIForstePeriode:f(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:a,fieldIndex:l,formName:i,skalValideres:u}),d&&r.jsx(h,{readOnly:t,fieldIndex:l,formName:i,alleAndelerIForstePeriode:f(n),skalValideres:u})]}),r.jsxs("div",{children:[r.jsx(Ee,{name:`${i}.${l}.ATFLVurdering`,control:g,label:r.jsx(o,{id:"Forms.Vurdering"}),validate:[R,Xr,Cr,Ae],maxLength:Rn,readOnly:t,minRows:3,description:r.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:v=>v.toString().replaceAll("‑","-").replaceAll("	"," ")}),r.jsx(Ne,{ident:s?.vurdertAv,date:s?.vurdertTidspunkt})]})]})},Me=(e,n)=>!e||e.length<1?!1:f(e)?.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag),Qr=e=>e.some(({periodeAarsaker:n})=>n?.includes(Qe.ARBEIDSFORHOLD_AVSLUTTET));S.buildInitialValues=e=>{const n=zr(e);return{ATFLVurdering:n?.begrunnelse?n.begrunnelse:""}};S.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,...c.transformValues(e,n),...h.transformValues(e)});S.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,...U.transformValues(e,n),frilansInntekt:h.transformValues(e).inntektFrilanser});S.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"gjeldendeAvklaringsbehov",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}}},{name:"transformATFLValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`FrilansInntektValues &
ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}],alias:"ATFLValues"}},{name:"alleAndelerIFørstePeriode",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]"}}],returns:{type:{name:"intersection",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
}`,signature:{properties:[{key:"inntektPrAndelList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  inntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:"ArbeidsinntektResultat[]",required:!0}},{key:"inntektFrilanser",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}}},{name:"transformATFLTidsbegrensetValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`FrilansInntektValues &
TidsbegrenseArbeidsforholdValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}],alias:"ATFLTidsbegrensetValues"}},{name:"allePerioder",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]"}}],returns:{type:{name:"intersection",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
}`,signature:{properties:[{key:"fastsatteTidsbegrensedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"fastsatteTidsbegrensedeAndeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  bruttoFastsattInntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"bruttoFastsattInntekt",value:{name:"number",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdInntektResultat[]",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdPeriodeResultat[]",required:!0}},{key:"frilansInntekt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}}}],displayName:"ArbeidstakerEllerFrilansContainer",props:{kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},beregningsgrunnlagPeriode:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},avklaringsbehov:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const pn=({readOnly:e,beregningsgrunnlagPeriode:n,aksjonspunkt:a,fieldIndex:t,formName:l,skalValideres:i})=>{const s=f(n).find(d=>d.aktivitetStatus&&d.aktivitetStatus==="SN"),u=s?.erNyIArbeidslivet,g=a.definisjon===A.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||s?.næringer?.some(d=>d.erVarigEndret===!0),m=s?.næringer?.some(d=>d.erNyoppstartet===!0);return!u&&!m&&!g?null:r.jsx(T,{readOnly:e,aksjonspunkt:a,erNyIArbeidslivet:u,erVarigEndring:g,erNyoppstartet:m,fieldIndex:t,formName:l,skalValideres:i})};pn.__docgenInfo={description:"",methods:[],displayName:"SelvstendigNæringsdrivendeContainer",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},beregningsgrunnlagPeriode:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:we,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Oe,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:ce,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Ue,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Ye}=A,Pn=({readOnly:e,isSubmittable:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:l,vilkår:i,submitCallback:s,formData:u,setFormData:g,aktivIndex:m,lovparagraf:d,finnesFormSomSubmittes:k,setSubmitting:v})=>{const N=l.filter(y=>Wr(y.avklaringsbehov,d)),b=ye(d),J=(y,G)=>{v(!0),s(aa(y,G))},B=Bn({defaultValues:u||Je(N,i,b,d)}),Q=()=>{B.reset(Je(N,i,b,d))},x=l.reduce((y,G)=>y+G.avklaringsbehov.length,0),H=jn(x);W.useEffect(()=>{H!==void 0&&x!==H&&(v(!1),u||Q())},[x,u,Q,v,H]);const{control:ae}=B,{fields:L}=Mn({name:b,control:ae}),te=l[m].vilkårsperiodeFom;return r.jsx(wn,{formMethods:B,onSubmit:y=>J(y,d),setDataOnUnmount:g,children:L.map((y,G)=>{const{beregningsgrunnlagPeriode:le,avklaringsbehov:fn,vilkårsperiodeFom:qe,aktivitetStatus:Sn}=N[G],j=fn.find(_e(d)),De=Zr(i,qe);return j?r.jsx("div",{style:{display:qe===te?"block":"none"},children:r.jsx($e,{tittel:yn(j,Sn??[]),beskrivelse:Nn(j,le),aksjonspunkt:j,children:r.jsxs(I,{gap:"space-16",children:[d===M.ÅTTE_TRETTI&&r.jsx(S,{kodeverkSamling:a,beregningsgrunnlagPeriode:le,arbeidsgiverOpplysningerPerId:t,readOnly:e,fieldIndex:G,formName:b,avklaringsbehov:j,skalValideres:De}),d===M.ÅTTE_TRETTIFEM&&r.jsx(pn,{readOnly:e,beregningsgrunnlagPeriode:le,fieldIndex:G,formName:b,aksjonspunkt:j,skalValideres:De}),r.jsx("div",{children:r.jsx(on,{isReadOnly:e,isSubmittable:n,isDirty:B.formState.isDirty,isSubmitting:k})})]})})},y.id):null})})},Zr=(e,n)=>{const a=Tn(e,n);return a?a.vurderesIBehandlingen&&!a.erForlengelse:!1},_e=e=>n=>ge(n)===e,Wr=(e,n)=>e.some(_e(n)),Tn=(e,n)=>e.perioder.find(({periode:a})=>a.fom===n),ea=({beregningsgrunnlagPeriode:e,avklaringsbehov:n},a)=>{if(!e)return{};const t=f(e),l=t.filter(m=>m.aktivitetStatus==="AT"),i=t.filter(m=>m.aktivitetStatus==="FL"),s=t.filter(m=>["SN","BA"].includes(m.aktivitetStatus)),u={...S.buildInitialValues(n),...U.buildInitialValues(e),...h.buildInitialValues(i),...c.buildInitialValues(l)},g={...T.buildInitialValues(s,n)};switch(a?.sammenligningsgrunnlagType){case void 0:return K.buildInitialValues(s,n);case P.ATFLSN:return{...u,...g};case P.AT_FL:return u;case P.SN:case P.MIDLERTIDIG_INAKTIV:return g;default:return{}}},Je=(e,n,a,t)=>({[a]:e.map(l=>{const i=Tn(n,l.vilkårsperiodeFom),s=l.avklaringsbehov.find(_e(t)),u=l.sammenligningsgrunnlagPrStatus?.find(g=>tn(g.sammenligningsgrunnlagType,l.aktivitetStatus)===t);return{...s?ea(l,u):{},periode:i.periode,erTilVurdering:i.vurderesIBehandlingen&&!i.erForlengelse,gjeldendeAvklaringsbehov:s?[s]:[],skjæringstidspunkt:l.skjaeringstidspunktBeregning,allePerioder:l.beregningsgrunnlagPeriode}})}),na=(e,n)=>(n.aksjonspunkter.forEach(a=>{const t=e.find(l=>l.kode===a.kode);t===void 0?e.push({kode:a.kode,begrunnelse:a.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...a.aksjonspunktData}]}):(t.grunnlag.push({periode:n.periode,...a.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${a.aksjonspunktData.begrunnelse}`)}),e),ra=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,l)=>!t.beregningsgrunnlagPeriodeFom||!l.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(l.beregningsgrunnlagPeriodeFom));const a=n[0].beregningsgrunnlagPrStatusOgAndel??[];if(p(we,e.gjeldendeAvklaringsbehov))return[{kode:we,aksjonspunktData:S.transformATFLValues(e,a)}];if(p(Ue,e.gjeldendeAvklaringsbehov))return[{kode:Ue,aksjonspunktData:T.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(p(Ye,e.gjeldendeAvklaringsbehov))return[{kode:Ye,aksjonspunktData:T.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(p(ce,e.gjeldendeAvklaringsbehov))return[{kode:ce,aksjonspunktData:T.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(p(Oe,e.gjeldendeAvklaringsbehov))return[{kode:Oe,aksjonspunktData:S.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},aa=(e,n)=>e[ye(n)].filter(l=>l.erTilVurdering).map(l=>({periode:l.periode,aksjonspunkter:ra(l)})).reduce(na,[]);Pn.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktBehandler",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},beregningsgrunnlagListe:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`}],raw:"Beregningsgrunnlag[]"},description:""},vilkår:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurderesIBehandlingen",value:{name:"boolean",required:!0}},{key:"erForlengelse",value:{name:"boolean",required:!1}},{key:"merknad",value:{name:"string",required:!1}},{key:"merknadParametere",value:{name:"signature",type:"object",raw:"{ [name: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:"{ fom: string; tom: string }",signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>`}],raw:"Vilkårperiode[]",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse: string;
  grunnlag: BeregningsgrunnlagValuesSubmitType[];
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"grunnlag",value:{name:"Array",elements:[{name:"intersection",raw:"PeriodeOgBegrunnelseType & BeregningsgrunnlagResultatAP",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  begrunnelse: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},{name:"union",raw:`| NyIArbeidslivetBruttoNæringResultatAP
| VurderVarigEndretNyoppstartetResultatAP
| FastsettAvvikATFLTidsbegrensetResultatAP
| FastsettAvvikATFLResultatAP`,elements:[{name:"intersection",raw:`{
  bruttoBeregningsgrunnlag: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag: number;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
}`,signature:{properties:[{key:"erVarigEndretNaering",value:{name:"boolean",required:!0}},{key:"erVarigEndret",value:{name:"boolean",required:!0}},{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
}`,signature:{properties:[{key:"fastsatteTidsbegrensedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"fastsatteTidsbegrensedeAndeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  bruttoFastsattInntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"bruttoFastsattInntekt",value:{name:"number",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdInntektResultat[]",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdPeriodeResultat[]",required:!0}},{key:"frilansInntekt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
}`,signature:{properties:[{key:"inntektPrAndelList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  inntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:"ArbeidsinntektResultat[]",required:!0}},{key:"inntektFrilanser",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValuesSubmitType[]",required:!0}}]}}],raw:"BeregningAksjonspunktSubmitType[]"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: BeregningsgrunnlagValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"intersection",raw:"VurderingValues & AksjonspunktDataValues",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  erTilVurdering: boolean;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"erTilVurdering",value:{name:"boolean",required:!0}},{key:"gjeldendeAvklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"allePerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}}]}},{name:"union",raw:`| ATFLTidsbegrensetValues
| FrilansInntektValues
| VurderOgFastsettValues
| NyIArbeidslivetValues
| ATFLValues`,elements:[{name:"intersection",raw:`FrilansInntektValues &
TidsbegrenseArbeidsforholdValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}},{name:"intersection",raw:`FrilansInntektValues &
ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValues[]",required:!0}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregningFormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: BeregningsgrunnlagValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"intersection",raw:"VurderingValues & AksjonspunktDataValues",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  erTilVurdering: boolean;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"erTilVurdering",value:{name:"boolean",required:!0}},{key:"gjeldendeAvklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"allePerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}}]}},{name:"union",raw:`| ATFLTidsbegrensetValues
| FrilansInntektValues
| VurderOgFastsettValues
| NyIArbeidslivetValues
| ATFLValues`,elements:[{name:"intersection",raw:`FrilansInntektValues &
TidsbegrenseArbeidsforholdValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}},{name:"intersection",raw:`FrilansInntektValues &
ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValues[]",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},aktivIndex:{required:!0,tsType:{name:"number"},description:""},lovparagraf:{required:!0,tsType:{name:"LovParagraf"},description:""},finnesFormSomSubmittes:{required:!0,tsType:{name:"boolean"},description:""},setSubmitting:{required:!0,tsType:{name:"signature",type:"function",raw:"(toggle: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggle"}],return:{name:"void"}}},description:""}}};const In=({readOnly:e,isSubmittable:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:l,vilkår:i,submitCallback:s,formData:u,setFormData:g,aktivtBeregningsgrunnlagIndeks:m})=>{const d=ta(l),[k,v]=W.useState(!1),N=b=>{if(d[b]&&d[b].length>0){const J=d[b],B=l[m].vilkårsperiodeFom,Q=J.find(L=>L.vilkårsperiodeFom===B),x=d[b].some(L=>L.avklaringsbehov.some(te=>ge(te)===b)),H=Q?.avklaringsbehov.some(L=>ge(L)===b),ae=ye(b);return r.jsx(I,{gap:"space-40",children:x&&r.jsx("div",{style:{display:H?"block":"none"},children:r.jsx(Pn,{readOnly:e,lovparagraf:b,kodeverkSamling:a,isSubmittable:n,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:l,vilkår:i,submitCallback:s,formData:u&&ae in u?u:void 0,setFormData:g,aktivIndex:m,finnesFormSomSubmittes:k,setSubmitting:v})})})}return null};return r.jsxs(I,{gap:"space-20",children:[N(M.ÅTTE_TRETTI),N(M.ÅTTE_TRETTIFEM)]})},xe=(e,n,a)=>{const t={...e};return t[n]?t[n].push(a):t[n]=[a],t},ta=e=>e.reduce((n,a)=>{let t={...n};return p(A.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,a.avklaringsbehov)&&(t=xe(t,M.ÅTTE_TRETTIFEM,a)),!a.sammenligningsgrunnlagPrStatus||a.sammenligningsgrunnlagPrStatus.length===0||a.sammenligningsgrunnlagPrStatus.forEach(l=>{const i=tn(l.sammenligningsgrunnlagType,a.aktivitetStatus);t=xe(t,i,a)}),t},{});In.__docgenInfo={description:"",methods:[],displayName:"FastsettBeregningAksjonspunktContainer",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},beregningsgrunnlagListe:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`}],raw:"Beregningsgrunnlag[]"},description:""},vilkår:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurderesIBehandlingen",value:{name:"boolean",required:!0}},{key:"erForlengelse",value:{name:"boolean",required:!1}},{key:"merknad",value:{name:"string",required:!1}},{key:"merknadParametere",value:{name:"signature",type:"object",raw:"{ [name: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:"{ fom: string; tom: string }",signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>`}],raw:"Vilkårperiode[]",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}>`},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  begrunnelse: string;
  grunnlag: BeregningsgrunnlagValuesSubmitType[];
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"grunnlag",value:{name:"Array",elements:[{name:"intersection",raw:"PeriodeOgBegrunnelseType & BeregningsgrunnlagResultatAP",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  begrunnelse: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},{name:"union",raw:`| NyIArbeidslivetBruttoNæringResultatAP
| VurderVarigEndretNyoppstartetResultatAP
| FastsettAvvikATFLTidsbegrensetResultatAP
| FastsettAvvikATFLResultatAP`,elements:[{name:"intersection",raw:`{
  bruttoBeregningsgrunnlag: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag: number;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  erVarigEndretNaering: boolean;
  erVarigEndret: boolean;
  bruttoBeregningsgrunnlag?: number;
}`,signature:{properties:[{key:"erVarigEndretNaering",value:{name:"boolean",required:!0}},{key:"erVarigEndret",value:{name:"boolean",required:!0}},{key:"bruttoBeregningsgrunnlag",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[];
  frilansInntekt: number | null;
}`,signature:{properties:[{key:"fastsatteTidsbegrensedePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektResultat[];
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"fastsatteTidsbegrensedeAndeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  bruttoFastsattInntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"bruttoFastsattInntekt",value:{name:"number",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdInntektResultat[]",required:!0}}]}}],raw:"TidsbegrensetArbeidsforholdPeriodeResultat[]",required:!0}},{key:"frilansInntekt",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]},{name:"intersection",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
} & Begrunnelse`,elements:[{name:"signature",type:"object",raw:`{
  inntektPrAndelList: ArbeidsinntektResultat[];
  inntektFrilanser: number | null;
}`,signature:{properties:[{key:"inntektPrAndelList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  inntekt: number;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:"ArbeidsinntektResultat[]",required:!0}},{key:"inntektFrilanser",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValuesSubmitType[]",required:!0}}]}}],raw:"BeregningAksjonspunktSubmitType[]"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},formData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: BeregningsgrunnlagValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"intersection",raw:"VurderingValues & AksjonspunktDataValues",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  erTilVurdering: boolean;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"erTilVurdering",value:{name:"boolean",required:!0}},{key:"gjeldendeAvklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"allePerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}}]}},{name:"union",raw:`| ATFLTidsbegrensetValues
| FrilansInntektValues
| VurderOgFastsettValues
| NyIArbeidslivetValues
| ATFLValues`,elements:[{name:"intersection",raw:`FrilansInntektValues &
TidsbegrenseArbeidsforholdValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}},{name:"intersection",raw:`FrilansInntektValues &
ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValues[]",required:!0}}]}},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregningFormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: BeregningsgrunnlagValues[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"intersection",raw:"VurderingValues & AksjonspunktDataValues",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  erTilVurdering: boolean;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"erTilVurdering",value:{name:"boolean",required:!0}},{key:"gjeldendeAvklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"allePerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}}]}},{name:"union",raw:`| ATFLTidsbegrensetValues
| FrilansInntektValues
| VurderOgFastsettValues
| NyIArbeidslivetValues
| ATFLValues`,elements:[{name:"intersection",raw:`FrilansInntektValues &
TidsbegrenseArbeidsforholdValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erVarigEndret?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}`,signature:{properties:[{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"varigEndringNyoppstartetBegrunnelse",value:{name:"string",required:!1}},{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrunnlagSNBegrunnelse?: string;
}`,signature:{properties:[{key:"bruttoBeregningsgrunnlag",value:{name:"string",required:!1}},{key:"fastsettBeregningsgrunnlagSNBegrunnelse",value:{name:"string",required:!1}}]}},{name:"intersection",raw:`FrilansInntektValues &
ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inntektFrilanser?: string;
}`,signature:{properties:[{key:"inntektFrilanser",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  ATFLVurdering: string;
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValues[]",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},aktivtBeregningsgrunnlagIndeks:{required:!0,tsType:{name:"number"},description:""}}};const He=On(Cn),la=({beregningsgrunnlagListe:e,beregningsgrunnlagsvilkår:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,formData:l,setFormData:i,submitCallback:s,isReadOnly:u,isSubmittable:g})=>{const{tabOptions:m,currentTabValue:d,onTabChange:k}=or(e,n);if(!n||e.length===0||e.length===1&&!e[0].aktivitetStatus){const v=n?.perioder?.some(N=>N.avslagKode==="1043");return r.jsx(he,{value:He,children:r.jsxs(I,{gap:"space-8",children:[r.jsx(ve,{size:"medium",level:"2",children:r.jsx(o,{id:"BeregningsgrunnlagProsessIndex.Title"})}),r.jsx(V,{size:"small",children:r.jsx(o,{id:v?"BeregningsgrunnlagProsessIndex.IkkeTilstrekkeligInntektsgrunnlag":"BeregningsgrunnlagProsessIndex.HarIkkeBeregningsregler"})})]})})}return r.jsxs(he,{value:He,children:[r.jsx(se,{value:d,onChange:k,children:m.length>1&&r.jsx(se.List,{children:m.map(v=>r.jsx(se.Tab,{value:v.bgIndex.toString(),id:`${v.optionLabel}-tab`,label:v.optionLabel,"aria-controls":`${v.optionLabel}-panel`,icon:v.harAksjonspunkt&&v.skalVurderes?r.jsx(cn,{"aria-hidden":!0,color:"var(--ax-bg-warning-strong)"}):void 0},v.bgIndex))})}),m.map(v=>r.jsx("div",{role:"tabpanel",hidden:v.bgIndex.toString()!==d,id:`${v.optionLabel}-panel`,"aria-labelledby":`${v.optionLabel}-tab`,children:r.jsx(an,{beregningsgrunnlag:e[v.bgIndex],beregningsgrunnlagsvilkår:n,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t})},v.bgIndex)),r.jsx(In,{readOnly:u,isSubmittable:g,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:e,vilkår:n,submitCallback:s,formData:l,setFormData:i,aktivtBeregningsgrunnlagIndeks:Number(d)})]})};la.__docgenInfo={description:"",methods:[],displayName:"BeregningProsessIndex",props:{beregningsgrunnlagListe:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}`,signature:{properties:[{key:"vilkårsperiodeFom",value:{name:"string",required:!0}},{key:"avklaringsbehov",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erTrukket",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurdertAv",value:{name:"string",required:!1}},{key:"vurdertTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>`}],raw:"BeregningAvklaringsbehov[]",required:!0}},{key:"skjaeringstidspunktBeregning",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"grunnbeløp",value:{name:"number",required:!0}},{key:"erOverstyrtInntekt",value:{name:"boolean",required:!0}},{key:"aktivitetStatus",value:{name:"Array",elements:[{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}],raw:"AktivitetStatus[]",required:!1}},{key:"beregningsgrunnlagPeriode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}`,signature:{properties:[{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsgrunnlagPeriodeFom",value:{name:"string",required:!0}},{key:"beregningsgrunnlagPeriodeTom",value:{name:"string",required:!0}},{key:"bruttoInkludertBortfaltNaturalytelsePrAar",value:{name:"number",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"ledetekstAvkortet",value:{name:"string",required:!1}},{key:"ledetekstBrutto",value:{name:"string",required:!1}},{key:"ledetekstRedusert",value:{name:"string",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"periodeAarsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"beregningsgrunnlagPrStatusOgAndel",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"string",required:!1}},{key:"beregnetPrAar",value:{name:"number",required:!1}},{key:"beregningsperiodeFom",value:{name:"string",required:!1}},{key:"beregningsperiodeTom",value:{name:"string",required:!1}},{key:"bruttoPrAar",value:{name:"number",required:!1}},{key:"overstyrtPrAar",value:{name:"number",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"pgiSnitt",value:{name:"number",required:!1}},{key:"pgiVerdier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  årstall: number;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"årstall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  årstall: number;
}>`}],raw:"PgiVerdier[]",required:!1}},{key:"aarsbeloepFraTilstoetendeYtelse",value:{name:"number",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"erTidsbegrensetArbeidsforhold",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"andelsnr",value:{name:"number",required:!0}},{key:"lonnsendringIBeregningsperioden",value:{name:"boolean",required:!1}},{key:"besteberegningPrAar",value:{name:"number",required:!1}},{key:"skalFastsetteGrunnlag",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"erTilkommetAndel",value:{name:"boolean",required:!1}},{key:"næringer",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}`,signature:{properties:[{key:"orgnr",value:{name:"string",required:!0}},{key:"virksomhetType",value:{name:"string",required:!0}},{key:"utenlandskvirksomhetsnavn",value:{name:"string",required:!1}},{key:"erVarigEndret",value:{name:"boolean",required:!1}},{key:"erNyoppstartet",value:{name:"boolean",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"endringsdato",value:{name:"string",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"oppstartsdato",value:{name:"string",required:!1}},{key:"regnskapsførerNavn",value:{name:"string",required:!1}},{key:"regnskapsførerTlf",value:{name:"string",required:!1}},{key:"kanRegnskapsførerKontaktes",value:{name:"boolean",required:!1}},{key:"erNyIArbeidslivet",value:{name:"boolean",required:!1}},{key:"oppgittInntekt",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  orgnr: string;
  virksomhetType: string;
  utenlandskvirksomhetsnavn?: string;
  erVarigEndret?: boolean;
  erNyoppstartet?: boolean;
  begrunnelse?: string;
  endringsdato?: string;
  opphørsdato?: string;
  oppstartsdato?: string;
  regnskapsførerNavn?: string;
  regnskapsførerTlf?: string;
  kanRegnskapsførerKontaktes?: boolean;
  erNyIArbeidslivet?: boolean;
  oppgittInntekt?: number;
}>`}],raw:"Næring[]",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdType?: string;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  avkortetPrAar?: number;
  inntektskategori?: string;
  beregnetPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  bruttoPrAar?: number;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  pgiSnitt?: number;
  pgiVerdier?: PgiVerdier[];
  aarsbeloepFraTilstoetendeYtelse?: number;
  erNyIArbeidslivet?: boolean;
  erTidsbegrensetArbeidsforhold?: boolean;
  erNyoppstartet?: boolean;
  andelsnr: number;
  lonnsendringIBeregningsperioden?: boolean;
  besteberegningPrAar?: number;
  skalFastsetteGrunnlag?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  erTilkommetAndel?: boolean;
  næringer?: Næring[];
}>`}],raw:"BeregningsgrunnlagAndel[]",required:!1}}]}}],raw:`Readonly<{
  avkortetPrAar?: number;
  beregnetPrAar?: number;
  beregningsgrunnlagPeriodeFom: string;
  beregningsgrunnlagPeriodeTom: string;
  bruttoInkludertBortfaltNaturalytelsePrAar?: number;
  bruttoPrAar?: number;
  dagsats?: number;
  ledetekstAvkortet?: string;
  ledetekstBrutto?: string;
  ledetekstRedusert?: string;
  overstyrtPrAar?: number;
  redusertPrAar?: number;
  periodeAarsaker?: string[];
  beregningsgrunnlagPrStatusOgAndel?: BeregningsgrunnlagAndel[];
}>`}],raw:"BeregningsgrunnlagPeriodeProp[]",required:!0}},{key:"sammenligningsgrunnlagPrStatus",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}`,signature:{properties:[{key:"sammenligningsgrunnlagType",value:{name:"union",raw:`| 'SAMMENLIGNING_FL'
| 'SAMMENLIGNING_SN'
| 'SAMMENLIGNING_AT'
| 'SAMMENLIGNING_AT_FL'
| 'SAMMENLIGNING_ATFL_SN'
| 'SAMMENLIGNING_MIDL_INAKTIV'`,elements:[{name:"literal",value:"'SAMMENLIGNING_FL'"},{name:"literal",value:"'SAMMENLIGNING_SN'"},{name:"literal",value:"'SAMMENLIGNING_AT'"},{name:"literal",value:"'SAMMENLIGNING_AT_FL'"},{name:"literal",value:"'SAMMENLIGNING_ATFL_SN'"},{name:"literal",value:"'SAMMENLIGNING_MIDL_INAKTIV'"}],required:!0}},{key:"differanseBeregnet",value:{name:"number",required:!0}},{key:"avvikProsent",value:{name:"number",required:!0}},{key:"avvikPromille",value:{name:"number",required:!0}},{key:"rapportertPrAar",value:{name:"number",required:!0}},{key:"sammenligningsgrunnlagFom",value:{name:"string",required:!0}},{key:"sammenligningsgrunnlagTom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  sammenligningsgrunnlagType: SammenligningType;
  differanseBeregnet: number;
  avvikProsent: number;
  avvikPromille: number;
  rapportertPrAar: number;
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagTom: string;
}>`}],raw:"SammenligningsgrunlagProp[]",required:!1}},{key:"faktaOmBeregning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}`,signature:{properties:[{key:"saksopplysninger",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}`,signature:{properties:[{key:"lønnsendringSaksopplysning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}`,signature:{properties:[{key:"sisteLønnsendringsdato",value:{name:"string",required:!0}},{key:"lønnsendringscenario",value:{name:"string",required:!0}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  sisteLønnsendringsdato: string;
  lønnsendringscenario: string;
  arbeidsforhold: SaksopplysningArbeidsforhold;
}>`}],raw:"LønnsendringSaksopplysning[]",required:!1}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"andelsnr",value:{name:"number",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  andelsnr: number;
  arbeidsgiverIdent: string;
  arbeidsforholdId?: string;
}>`,required:!0}],raw:"SaksopplysningArbeidsforhold[]",required:!0}}]}}],raw:`Readonly<{
  lønnsendringSaksopplysning?: LønnsendringSaksopplysning[];
  kortvarigeArbeidsforhold: SaksopplysningArbeidsforhold[];
}>`,required:!1}},{key:"beregningsgrunnlagArbeidsforhold",value:{name:"Array",elements:[{name:"unknown"}],raw:`(BeregningsgrunnlagArbeidsforhold & {
  erTidsbegrensetArbeidsforhold?: boolean;
})[]`,required:!1}},{key:"avklarAktiviteter",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"aktiviteterTomDatoMapping",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}`,signature:{properties:[{key:"tom",value:{name:"string",required:!0}},{key:"aktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"skalBrukes",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  skalBrukes?: boolean;
}>`}],raw:"BeregningAktivitet[]",required:!1}}]}}],raw:`Readonly<{
  tom: string;
  aktiviteter?: BeregningAktivitet[];
}>`}],raw:"AvklarBeregningAktiviteter[]",required:!1}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  aktiviteterTomDatoMapping?: AvklarBeregningAktiviteter[];
  skjæringstidspunkt: string;
}>`,required:!1}},{key:"frilansAndel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}},{key:"vurderMilitaer",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  harMilitaer?: boolean;
}`,signature:{properties:[{key:"harMilitaer",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  harMilitaer?: boolean;
}>`,required:!1}},{key:"vurderBesteberegning",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skalHaBesteberegning?: boolean;
}`,signature:{properties:[{key:"skalHaBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  skalHaBesteberegning?: boolean;
}>`,required:!1}},{key:"refusjonskravSomKommerForSentListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"erRefusjonskravGyldig",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  erRefusjonskravGyldig?: boolean;
}>`}],raw:"RefusjonskravSomKommerForSentListe[]",required:!1}},{key:"arbeidsforholdMedLønnsendringUtenIM",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
}>`,required:!1}],raw:"FaktaOmBeregningAndel[]",required:!1}},{key:"andelerForFaktaOmBeregning",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"refusjonskrav",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"belopReadOnly",value:{name:"number",required:!1}},{key:"fastsattBelop",value:{name:"number",required:!1}},{key:"skalKunneEndreAktivitet",value:{name:"boolean",required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  andelsnr?: number;
  refusjonskrav?: number;
  inntektskategori?: Inntektskategori;
  aktivitetStatus: AktivitetStatus;
  belopReadOnly?: number;
  fastsattBelop?: number;
  skalKunneEndreAktivitet?: boolean;
  lagtTilAvSaksbehandler: boolean;
}>`}],raw:"AndelForFaktaOmBeregning[]",required:!0}},{key:"kortvarigeArbeidsforhold",value:{name:"Array",elements:[{name:"KortvarigAndel"}],raw:"KortvarigAndel[]",required:!1}},{key:"kunYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"KunYtelseAndel"}],raw:"KunYtelseAndel[]",required:!1}},{key:"fodendeKvinneMedDP",value:{name:"boolean",required:!0}},{key:"erBesteberegning",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  andeler?: KunYtelseAndel[];
  fodendeKvinneMedDP: boolean;
  erBesteberegning?: boolean;
}>`,required:!1}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vurderMottarYtelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}`,signature:{properties:[{key:"erFrilans",value:{name:"boolean",required:!1}},{key:"frilansMottarYtelse",value:{name:"boolean",required:!1}},{key:"frilansInntektPrMnd",value:{name:"number",required:!1}},{key:"arbeidstakerAndelerUtenIM",value:{name:"Array",elements:[{name:"ArbeidstakerUtenIMAndel"}],raw:"ArbeidstakerUtenIMAndel[]",required:!1}}]}}],raw:`Readonly<{
  erFrilans?: boolean;
  frilansMottarYtelse?: boolean;
  frilansInntektPrMnd?: number;
  arbeidstakerAndelerUtenIM?: ArbeidstakerUtenIMAndel[];
}>`,required:!1}},{key:"arbeidstakerOgFrilanserISammeOrganisasjonListe",value:{name:"Array",elements:[{name:"ATFLSammeOrgAndel"}],raw:"ATFLSammeOrgAndel[]",required:!1}}]}}],raw:`Readonly<{
  saksopplysninger?: Saksopplysninger;
  beregningsgrunnlagArbeidsforhold?: (BeregningsgrunnlagArbeidsforhold & {
    erTidsbegrensetArbeidsforhold?: boolean;
  })[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  frilansAndel?: FaktaOmBeregningAndel;
  vurderMilitaer?: VurderMilitaer;
  vurderBesteberegning?: VurderBesteberegning;
  refusjonskravSomKommerForSentListe?: RefusjonskravSomKommerForSentListe[];
  arbeidsforholdMedLønnsendringUtenIM?: FaktaOmBeregningAndel[];
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  kunYtelse?: KunYtelse;
  faktaOmBeregningTilfeller?: string[];
  vurderMottarYtelse?: VurderMottarYtelse;
  arbeidstakerOgFrilanserISammeOrganisasjonListe?: ATFLSammeOrgAndel[];
}>`,required:!1}},{key:"faktaOmFordeling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}`,signature:{properties:[{key:"fordelBeregningsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}`,signature:{properties:[{key:"arbeidsforholdTilFordeling",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}`,signature:{properties:[{key:"aktørId",value:{name:"number",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"perioderMedGraderingEllerRefusjon",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}`,signature:{properties:[{key:"erRefusjon",value:{name:"boolean",required:!1}},{key:"erGradering",value:{name:"boolean",required:!1}},{key:"erSøktYtelse",value:{name:"boolean",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erRefusjon?: boolean;
  erGradering?: boolean;
  erSøktYtelse?: boolean;
  fom?: string;
  tom?: string;
}>`}],raw:"PerioderMedGraderingEllerRefusjon[]",required:!1}},{key:"permisjon",value:{name:"signature",type:"object",raw:`{
  permisjonFom?: string;
  permisjonTom?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}}]},required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktørId?: number;
  arbeidsforholdId?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdType?: string;
  arbeidsgiverId?: string;
  arbeidsgiverNavn?: string;
  belopFraInntektsmeldingPrMnd?: number;
  eksternArbeidsforholdId?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  opphoersdato?: string;
  organisasjonstype?: string;
  perioderMedGraderingEllerRefusjon?: PerioderMedGraderingEllerRefusjon[];
  permisjon?: {
    permisjonFom?: string;
    permisjonTom?: string;
  };
  refusjonPrAar?: number;
  startdato?: string;
}>`}],raw:"ArbeidsforholdTilFordeling[]",required:!1}},{key:"fordelBeregningsgrunnlagPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"fordelBeregningsgrunnlagAndeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"andelIArbeid",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"andelsnr",value:{name:"number",required:!1}},{key:"arbeidsforhold",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"refusjonPrAar",value:{name:"number",required:!1}},{key:"belopFraInntektsmeldingPrMnd",value:{name:"number",required:!1}},{key:"organisasjonstype",value:{name:"string",required:!1}},{key:"naturalytelseBortfaltPrÅr",value:{name:"number",required:!1}},{key:"naturalytelseTilkommetPrÅr",value:{name:"number",required:!1}},{key:"startdato",value:{name:"string",required:!1}},{key:"opphoersdato",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"arbeidsforholdType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}},{key:"sisteLønnsendringsdato",value:{name:"string",required:!1}},{key:"stillingsprosenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  prosent: number;
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"prosent",value:{name:"number",required:!0}},{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  prosent: number;
  fomDato: string;
  tomDato: string;
}>`}],raw:"Stillingsprosent[]",required:!1}},{key:"stillingsNavn",value:{name:"string",required:!1}},{key:"stillingsProsent",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>`,required:!1}},{key:"arbeidsforholdType",value:{name:"string",required:!1}},{key:"belopFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"fordelingForrigeBehandlingPrAar",value:{name:"number",required:!1}},{key:"fordeltPrAar",value:{name:"number",required:!1}},{key:"inntektskategori",value:{name:"union",raw:`| 'ARBEIDSTAKER'
| 'FRILANSER'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'DAGPENGER'
| 'ARBEIDSAVKLARINGSPENGER'
| 'SJØMANN'
| 'DAGMAMMA'
| 'JORDBRUKER'
| 'FISKER'
| 'ARBEIDSTAKER_UTEN_FERIEPENGER'
| '-'`,elements:[{name:"literal",value:"'ARBEIDSTAKER'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'ARBEIDSAVKLARINGSPENGER'"},{name:"literal",value:"'SJØMANN'"},{name:"literal",value:"'DAGMAMMA'"},{name:"literal",value:"'JORDBRUKER'"},{name:"literal",value:"'FISKER'"},{name:"literal",value:"'ARBEIDSTAKER_UTEN_FERIEPENGER'"},{name:"literal",value:"'-'"}],required:!1}},{key:"lagtTilAvSaksbehandler",value:{name:"boolean",required:!1}},{key:"nyttArbeidsforhold",value:{name:"boolean",required:!1}},{key:"refusjonskravFraInntektsmeldingPrAar",value:{name:"number",required:!1}},{key:"refusjonskravPrAar",value:{name:"number",required:!1}},{key:"kilde",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus?: AktivitetStatus;
  andelIArbeid?: number[];
  andelsnr?: number;
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold;
  arbeidsforholdType?: string;
  belopFraInntektsmeldingPrAar?: number;
  fordelingForrigeBehandlingPrAar?: number;
  fordeltPrAar?: number;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  nyttArbeidsforhold?: boolean;
  refusjonskravFraInntektsmeldingPrAar?: number;
  refusjonskravPrAar?: number;
  kilde?: string;
}>`}],raw:"FordelBeregningsgrunnlagAndel[]",required:!1}},{key:"skalRedigereInntekt",value:{name:"boolean",required:!1}},{key:"skalPreutfyllesMedBeregningsgrunnlag",value:{name:"boolean",required:!1}},{key:"skalKunneEndreRefusjon",value:{name:"boolean",required:!1}},{key:"tom",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  fordelBeregningsgrunnlagAndeler?: FordelBeregningsgrunnlagAndel[];
  skalRedigereInntekt?: boolean;
  skalPreutfyllesMedBeregningsgrunnlag?: boolean;
  skalKunneEndreRefusjon?: boolean;
  tom?: string;
}>`}],raw:"FordelBeregningsgrunnlagPeriode[]",required:!1}}]}}],raw:`Readonly<{
  arbeidsforholdTilFordeling?: ArbeidsforholdTilFordeling[];
  fordelBeregningsgrunnlagPerioder?: FordelBeregningsgrunnlagPeriode[];
}>`,required:!1}},{key:"vurderNyttInntektsforholdDto",value:{name:"signature",type:"object",raw:`{
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
  harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
}`,signature:{properties:[{key:"vurderInntektsforholdPerioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntektsforholdListe",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"arbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!0}},{key:"bruttoInntektPrÅr",value:{name:"number",required:!1}},{key:"inntektFraInntektsmeldingPrÅr",value:{name:"number",required:!1}},{key:"skalRedusereUtbetaling",value:{name:"boolean",required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
  bruttoInntektPrÅr?: number;
  inntektFraInntektsmeldingPrÅr?: number;
  skalRedusereUtbetaling: boolean;
  periode?: {
    fom: string;
    tom: string;
  };
}>`}],raw:"Inntektsforhold[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntektsforholdListe: Inntektsforhold[];
}>`}],raw:"VurderInntektsforholdPeriode[]",required:!1}},{key:"harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  fordelBeregningsgrunnlag?: FordelBeregningsgrunnlag;
  vurderNyttInntektsforholdDto?: {
    vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[];
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
  };
}>`,required:!1}},{key:"ytelsesspesifiktGrunnlag",value:{name:"intersection",raw:`Readonly<{
  ytelsetype: string;
}> &
  ForeldrepengerGrunnlag`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  ytelsetype: string;
}`,signature:{properties:[{key:"ytelsetype",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  ytelsetype: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}`,signature:{properties:[{key:"besteberegninggrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  besteMåneder: Månedsgrunnlag[];
}`,signature:{properties:[{key:"besteMåneder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}`,signature:{properties:[{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}},{key:"opptjeningAktivitetType",value:{name:"string",required:!0}},{key:"inntekt",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: string;
  inntekt: number;
}>`}],raw:"BesteberegningInntekt[]",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>`}],raw:"Månedsgrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>`,required:!1}}]}}],raw:`Readonly<{
  besteberegninggrunnlag?: Besteberegninggrunnlag;
}>`}],required:!1}},{key:"refusjonTilVurdering",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: RefusjonTilVurderingAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tidligereUtbetalinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"erTildeltRefusjon",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>`}],raw:"TidligereUtbetalinger[]",required:!1}},{key:"nyttRefusjonskravFom",value:{name:"string",required:!0}},{key:"fastsattNyttRefusjonskravFom",value:{name:"string",required:!1}},{key:"tidligsteMuligeRefusjonsdato",value:{name:"string",required:!0}},{key:"arbeidsgiver",value:{name:"signature",type:"object",raw:`{
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktørId?: string;
}`,signature:{properties:[{key:"arbeidsgiverOrgnr",value:{name:"string",required:!1}},{key:"arbeidsgiverAktørId",value:{name:"string",required:!1}}]},required:!1}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdRef",value:{name:"string",required:!1}},{key:"skalKunneFastsetteDelvisRefusjon",value:{name:"boolean",required:!0}},{key:"fastsattDelvisRefusjonPrMnd",value:{name:"number",required:!1}},{key:"maksTillattDelvisRefusjonPrMnd",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  };
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>`}],raw:"RefusjonTilVurderingAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>`,required:!1}},{key:"inntektsgrunnlag",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}`,signature:{properties:[{key:"beregningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"sammenligningsgrunnlagInntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"InntektsgrunnlagMåned[]",required:!0}},{key:"pgiGrunnlag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  år: number;
  inntekter: PGIGrunnlag[];
}`,signature:{properties:[{key:"år",value:{name:"number",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  pgiType: string;
  beløp: number;
}`,signature:{properties:[{key:"pgiType",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  pgiType: string;
  beløp: number;
}>`}],raw:"PGIGrunnlag[]",required:!0}}]}}],raw:`Readonly<{
  år: number;
  inntekter: PGIGrunnlag[];
}>`}],raw:"PGIPrÅr[]",required:!0}}]}}],raw:`Readonly<{
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  pgiGrunnlag: PGIPrÅr[];
}>`,required:!1}},{key:"forlengelseperioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
}>`}],raw:"ForlengelsePeriodeProp[]",required:!1}}]}}],raw:`Readonly<{
  vilkårsperiodeFom: string;
  avklaringsbehov: BeregningAvklaringsbehov[];
  skjaeringstidspunktBeregning: string;
  dekningsgrad?: number;
  grunnbeløp: number;
  erOverstyrtInntekt: boolean;
  aktivitetStatus?: AktivitetStatus[];
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[];
  faktaOmBeregning?: FaktaOmBeregning;
  faktaOmFordeling?: FaktaOmFordeling;
  ytelsesspesifiktGrunnlag?: YtelseGrunnlag;
  refusjonTilVurdering?: RefusjonTilVurdering;
  inntektsgrunnlag?: Inntektsgrunnlag;
  forlengelseperioder?: ForlengelsePeriodeProp[];
}>`}],raw:"Beregningsgrunnlag[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},beregningsgrunnlagsvilkår:{required:!0,tsType:{name:"union",raw:"Vilkår | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vurderesIBehandlingen",value:{name:"boolean",required:!0}},{key:"erForlengelse",value:{name:"boolean",required:!1}},{key:"merknad",value:{name:"string",required:!1}},{key:"merknadParametere",value:{name:"signature",type:"object",raw:"{ [name: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"periode",value:{name:"signature",type:"object",raw:"{ fom: string; tom: string }",signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>`}],raw:"Vilkårperiode[]",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  overstyrbar: boolean;
  perioder: Vilkårperiode[];
}>`},{name:"null"}]},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AktivitetStatus: AktivitetStatus;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'IKKE_YRKESAKTIV'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"OpptjeningAktivitetType",value:{name:"union",raw:`| 'AAP'
| 'ARBEID'
| 'DAGPENGER'
| 'FORELDREPENGER'
| 'FRILANS'
| 'FRILOPP'
| 'FRISINN'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'NÆRING'
| 'OMSORGSPENGER'
| 'OPPLÆRINGSPENGER'
| 'PLEIEPENGER'
| 'SVANGERSKAPSPENGER'
| 'SYKEPENGER'
| 'VARTPENGER'
| 'VIDERE_ETTERUTDANNING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'ETTERLØNN_SLUTTPAKKE'
| 'UTDANNINGSPERMISJON'
| 'SYKEPENGER_AV_DAGPENGER'
| 'PLEIEPENGER_AV_DAGPENGER'
| 'MELLOM_ARBEID'
| '-'`,elements:[{name:"literal",value:"'AAP'"},{name:"literal",value:"'ARBEID'"},{name:"literal",value:"'DAGPENGER'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'FRILANS'"},{name:"literal",value:"'FRILOPP'"},{name:"literal",value:"'FRISINN'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'OMSORGSPENGER'"},{name:"literal",value:"'OPPLÆRINGSPENGER'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'SVANGERSKAPSPENGER'"},{name:"literal",value:"'SYKEPENGER'"},{name:"literal",value:"'VARTPENGER'"},{name:"literal",value:"'VIDERE_ETTERUTDANNING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'SYKEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'PLEIEPENGER_AV_DAGPENGER'"},{name:"literal",value:"'MELLOM_ARBEID'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""}}};export{la as B,P as S,ya as a};
