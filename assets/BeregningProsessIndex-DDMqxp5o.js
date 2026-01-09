import{r as C,f as fn,R as ne,aQ as le,j as n,aH as In,b8 as Me,b9 as z,b2 as we,aO as Tn,aP as Oe,a4 as ie,aF as ae,an as A,i as Sn,a1 as Ln,H as P,a2 as se,h as te,o as Gn,B as q,aL as ce,X as f,aS as _n,d as Te,u as K,ba as U,bb as Y,at as G,as as _,J as qn,aM as ue,b3 as Dn,O as Se,bc as L,al as Fn,bd as Vn,M as hn,aI as Kn,P as Le,p as Bn,a0 as jn}from"./iframe-CV4PufWi.js";import{f as I,A as y,D as Mn,m as B,h as wn,e as On,a as cn,Å as Ue,b as Ye,c as Un}from"./Dagsatser-CtKZlbKF.js";import{M as o}from"./message-I4fBysJT.js";import{A as Yn}from"./AktivitetStatusTags-DOsQhtas.js";import{T as g}from"./Table-CwVBr0LB.js";import{A as Jn}from"./Avviksberegninger-CsbjKscs.js";import{S as xn}from"./Sammenligningsgrunnlag-TAohOK3j.js";import{S as J}from"./Spacer-C5m9jPjD.js";import{t as N,d as x,o as oe,a as ge,N as de}from"./style-D7EH5Eer.js";import{T as Je}from"./index.es-BDctT3QU.js";import{A as me}from"./index.es-GDA7hr3q.js";import{m as Hn}from"./nb_NO-DgNF7AbR.js";import{T as re}from"./Tabs-CcWxilo8.js";var $n=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const zn=C.forwardRef((e,r)=>{var{title:a,titleId:t}=e,l=$n(e,["title","titleId"]);let i=fn();return i=a?t||"title-"+i:void 0,ne.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":i},l),a?ne.createElement("title",{id:i},a):null,ne.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.5 4.75a.25.25 0 0 0-.25.25v1.25h5.5V5a.25.25 0 0 0-.25-.25zM7.75 5v1.25H3.5c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h7.75V11a.75.75 0 0 1 1.5 0v1.75h7.75c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-4.25V5a1.75 1.75 0 0 0-1.75-1.75h-5A1.75 1.75 0 0 0 7.75 5m3.5 9.25V15a.75.75 0 0 0 1.5 0v-.75h7.5v4.25c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-4.25z",clipRule:"evenodd"}))}),$=(e,r)=>({identifikator:e,navn:r,erPrivatPerson:!1}),Ea={222222222:$("222222222","TROSSIG NATURSTRIDIG TIGER AS"),333333333:$("333333333","SAUEFABRIKK"),444444444:$("444444444","INTERESSANT INTUITIV KATT DIAMETER"),555555555:$("555555555","Gardslien transport og Gardiner AS")},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Cn,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Xn,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Qn,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Zn,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Wn}=y,er={[Qn]:"LegacyAksjonspunktTittel.Arbeidstaker",[Zn]:"LegacyAksjonspunktTittel.TidsbegrensetArbeidsforhold",[Wn]:"LegacyAksjonspunktTittel.NyIArbeidslivetSN",[Xn]:"LegacyAksjonspunktTittel.VarigEndretArbeidssituasjon",[Cn]:"LegacyAksjonspunktTittel.SelvstendigNaeringsdrivende"},xe=({beregningsgrunnlag:{avklaringsbehov:e,beregningsgrunnlagPeriode:r}})=>{const a=I(r),t=e.filter(le);if(a.length===0)return null;const i=(a.find(s=>s.aktivitetStatus==="SN")?.næringer??[]).some(s=>s.erVarigEndret===!0);return n.jsx(In,{children:t.map(s=>n.jsx(o,{id:er[s.definisjon],values:{erVarigEndring:i}},s.definisjon))})};xe.__docgenInfo={description:"",methods:[],displayName:"LegacyAksjonspunktTittel",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const He=({avklaringsbehov:e})=>e?.begrunnelse?n.jsx(Me,{tittel:n.jsx(o,{id:"ReadonlyAPGraderingUtenBG.Tittel"}),aksjonspunkt:e,children:n.jsx(z,{size:"small",label:n.jsx(o,{id:"ReadonlyAPGraderingUtenBG.Begrunnelse"}),value:e.begrunnelse})}):null;He.__docgenInfo={description:`Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
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
}>`},{name:"undefined"}]},description:""}}};const Ge=(e,r)=>e.arbeidsforhold?.arbeidsforholdType&&r.OpptjeningAktivitetType.find(a=>a.kode===e.arbeidsforhold?.arbeidsforholdType)?.navn||"",$e=(e,r)=>a=>{if(a.arbeidsforhold?.arbeidsgiverIdent){const t=e[a.arbeidsforhold.arbeidsgiverIdent];return t?we(t,a.arbeidsforhold.eksternArbeidsforholdId):Ge(a,r)}return Ge(a,r)},nr=(e,r)=>{const a=(r.beregningsgrunnlagPrStatusOgAndel??[]).find(t=>t.arbeidsforhold?.arbeidsgiverIdent===e);return a?.arbeidsforhold?.naturalytelseBortfaltPrÅr?a?.arbeidsforhold?.naturalytelseBortfaltPrÅr:0},rr=(e,r)=>r.flatMap(a=>{const t=nr(e,a);return t?[{fom:a.beregningsgrunnlagPeriodeFom,tom:a.beregningsgrunnlagPeriodeTom,beløpPrÅr:t,beløpPrMåned:t/12}]:[]}).sort(Tn),ar=e=>e?e.flatMap(({inntekter:r})=>r).filter(r=>r.inntektAktivitetType==="ARBEIDSTAKERINNTEKT").reduce((r,a)=>(r[a.arbeidsgiverIdent]=(r[a.arbeidsgiverIdent]||0)+a.beløp,r),{}):{},tr=e=>e.filter(r=>r.aktivitetStatus==="AT").filter(r=>r.erTilkommetAndel===!1),lr=({inntektsgrunnlag:e,beregningsgrunnlagPeriode:r},a)=>{const t=I(r),l=tr(t),i=ar(e?.beregningsgrunnlagInntekter);return l.map(s=>{const u=s.arbeidsforhold?.arbeidsgiverIdent;return{andelsLabel:a(s),andelsnr:s.andelsnr,ansattPeriode:s.arbeidsforhold?{fom:s.arbeidsforhold.startdato,tom:s.arbeidsforhold.opphoersdato}:void 0,sisteLønnsendringsdato:s.arbeidsforhold?.sisteLønnsendringsdato,formatertStillingsprosenter:ir(s.arbeidsforhold?.stillingsprosenter),inntektsmeldingMånedinntekt:s.arbeidsforhold?.belopFraInntektsmeldingPrMnd?s.arbeidsforhold.belopFraInntektsmeldingPrMnd:void 0,inntektsmeldingÅrsinntekt:s.arbeidsforhold?.belopFraInntektsmeldingPrMnd?s.arbeidsforhold.belopFraInntektsmeldingPrMnd*12:void 0,beregningsgrunnlagMånedinntekt:u?(i[u]??0)/3:0,beregningsgrunnlagÅrsinntekt:u?(i[u]??0)/3*12:0,naturalytelser:u?rr(u,r):void 0}})},ir=(e=[])=>{if(e.length===0)return;const r=e.toSorted(Oe("fomDato")),a=r.at(-1),t=r.at(-2);return a&&t?`Fra ${t.prosent}% til ${a.prosent}% (${ie(a.fomDato)})`:e[0].prosent+"%"},sr="_table_9ukpu_1",ze={table:sr},Ce=({naturalytelseEndringer:e})=>n.jsx(z,{horizontal:e.length===1,size:"small",label:n.jsx(o,{id:"Arbeidsinntekt.Naturalytelse"}),value:e.length===1?n.jsx(o,{id:"Arbeidsinntekt.Naturalytelse.EnPeriode",values:{beløpPrMåned:n.jsx(A,{beløp:e[0].beløpPrMåned,kr:!0}),beløpPrÅr:n.jsx(A,{beløp:e[0].beløpPrÅr,kr:!0}),periode:n.jsx(ae,{dateStringFom:e[0].fom,dateStringTom:e[0].tom})}}):n.jsxs(g,{size:"small",className:ze.table,children:[n.jsx(g.Header,{children:n.jsxs(g.Row,{children:[n.jsx(g.HeaderCell,{}),n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(o,{id:"Tabell.Måned"})}),n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(o,{id:"Tabell.År"})})]})}),n.jsx(g.Body,{children:e.map(r=>n.jsxs(g.Row,{children:[n.jsx(g.DataCell,{textSize:"small",children:n.jsx(ae,{dateStringFom:r.fom,dateStringTom:r.tom})}),n.jsx(g.DataCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:r.beløpPrMåned,kr:!0})}),n.jsx(g.DataCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:r.beløpPrÅr,kr:!0})})]},r.fom))})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"Naturalytelser",props:{naturalytelseEndringer:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnEndringerINaturalytelserForArbeidsgiver"}],raw:"ReturnType<typeof finnEndringerINaturalytelserForArbeidsgiver>"},description:""}}};const Xe=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:a})=>{const t=Sn(),l=lr(e,$e(r,a));return l.length===0?null:n.jsxs(Ln.New,{background:"neutral-soft",padding:"5",children:[n.jsxs(P,{gap:"space-12",align:"center",children:[n.jsx(zn,{"aria-hidden":!0,fontSize:"1.25rem"}),n.jsx(se,{size:"small",level:"4",children:n.jsx(o,{id:"Arbeidsinntekt.Tittel"})})]}),n.jsxs(g,{size:"small",className:ze.table,children:[n.jsxs(g.Header,{children:[n.jsxs(g.Row,{children:[n.jsx(g.HeaderCell,{}),n.jsxs(g.HeaderCell,{scope:"colgroup",textSize:"small",align:"right",colSpan:2,children:[n.jsx(o,{id:"Arbeidsinntekt.Table.Inntektsmelding"}),n.jsx(te,{children:n.jsx(o,{id:"Arbeidsinntekt.Table.Inntektsmelding.HelpText"})})]}),n.jsx(g.HeaderCell,{}),n.jsxs(g.HeaderCell,{scope:"colgroup",textSize:"small",align:"right",colSpan:2,children:[n.jsx(o,{id:"Arbeidsinntekt.Table.Innrapportert"}),n.jsx(te,{children:n.jsx(o,{id:"Arbeidsinntekt.Table.Innrapportert.HelpText"})})]}),n.jsx(g.HeaderCell,{})]}),n.jsxs(g.Row,{children:[n.jsx(g.HeaderCell,{}),n.jsx(g.HeaderCell,{scope:"col",textSize:"small",align:"right",children:n.jsx(o,{id:"Tabell.Måned"})}),n.jsx(g.HeaderCell,{scope:"col",textSize:"small",align:"right",children:n.jsx(o,{id:"Tabell.År"})}),n.jsx(g.HeaderCell,{}),n.jsx(g.HeaderCell,{scope:"col",textSize:"small",align:"right",children:n.jsx(o,{id:"Tabell.Måned"})}),n.jsx(g.HeaderCell,{scope:"col",textSize:"small",align:"right",children:n.jsx(o,{id:"Tabell.År"})}),n.jsx(g.HeaderCell,{})]})]}),n.jsx(g.Body,{children:l.map(i=>n.jsxs(g.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:n.jsxs("div",{children:[i.ansattPeriode?.fom&&n.jsx(Gn,{content:t.formatMessage({id:"Arbeidsinntekt.Ansettelsesperiode"}),children:n.jsx(q,{size:"small",as:"span",children:n.jsx(ae,{dateStringFom:i.ansattPeriode.fom,dateStringTom:i.ansattPeriode.tom})})}),i.sisteLønnsendringsdato&&n.jsx(z,{horizontal:!0,size:"small",label:n.jsx(o,{id:"Arbeidsinntekt.SistEndretLonn"}),value:n.jsx(ce,{dateString:i.sisteLønnsendringsdato})}),i.formatertStillingsprosenter&&n.jsx(z,{horizontal:!0,size:"small",label:n.jsx(o,{id:"Arbeidsinntekt.Stillingsprosent"}),value:i.formatertStillingsprosenter}),i.naturalytelser&&i.naturalytelser.length>0&&n.jsx(Ce,{naturalytelseEndringer:i.naturalytelser})]}),children:[n.jsx(g.DataCell,{textSize:"small",children:i.andelsLabel}),n.jsx(g.DataCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:i.inntektsmeldingMånedinntekt,kr:!0})}),n.jsx(g.DataCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:i.inntektsmeldingÅrsinntekt,kr:!0})}),n.jsx(g.DataCell,{}),n.jsx(g.DataCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:i.beregningsgrunnlagMånedinntekt,kr:!0})}),n.jsx(g.DataCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:i.beregningsgrunnlagÅrsinntekt,kr:!0})})]},i.andelsnr))}),l.length>1&&n.jsx("tfoot",{children:n.jsxs(g.Row,{children:[n.jsx(g.HeaderCell,{textSize:"small",children:n.jsx(o,{id:"Tabell.Total"})}),n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:l.reduce((i,{inntektsmeldingMånedinntekt:s})=>i+(s??0),0),kr:!0})}),n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:l.reduce((i,{inntektsmeldingÅrsinntekt:s})=>i+(s??0),0),kr:!0})}),n.jsx(g.DataCell,{}),n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:l.reduce((i,{beregningsgrunnlagMånedinntekt:s})=>i+(s??0),0),kr:!0})}),n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:l.reduce((i,{beregningsgrunnlagÅrsinntekt:s})=>i+(s??0),0),kr:!0})}),n.jsx(g.HeaderCell,{})]})})]})]})};Xe.__docgenInfo={description:"",methods:[],displayName:"Arbeidsinntekt",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};const Qe=({beregningsgrunnlag:e,beregningsgrunnlagsvilkår:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t})=>{const{sammenligningsgrunnlagPrStatus:l=[],inntektsgrunnlag:i,avklaringsbehov:s}=e;return n.jsxs(f,{gap:"space-16",children:[n.jsx(xe,{beregningsgrunnlag:e}),n.jsxs(f,{gap:"space-12",children:[n.jsx(se,{size:"medium",level:"2",children:n.jsx(o,{id:"TabInnhold.Tittel"})}),n.jsxs(P,{align:"center",gap:"space-12",children:[n.jsx(Yn,{kodeverkSamling:a,beregningsgrunnlagPeriode:e.beregningsgrunnlagPeriode}),n.jsx(J,{}),n.jsx(q,{size:"small",children:n.jsx(o,{id:"TabInnhold.Skjæringstidspunkt",values:{dato:ie(e.skjaeringstidspunktBeregning),b:_n}})})]})]}),n.jsx(Xe,{beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:t,kodeverkSamling:a}),n.jsxs(P,{gap:"space-8",children:[n.jsx(Jn,{sammenligningsgrunnlagPrStatus:e.sammenligningsgrunnlagPrStatus}),n.jsx(Mn,{beregningsgrunnlag:e,beregningsgrunnlagsvilkår:r,kodeverkSamling:a})]}),l.length>0&&i&&i.sammenligningsgrunnlagInntekter.length>0&&n.jsx(xn,{sammenligningsgrunnlagFom:l[0].sammenligningsgrunnlagFom,sammenligningsgrunnlagInntekter:i.sammenligningsgrunnlagInntekter,arbeidsgiverOpplysningerPerId:t}),n.jsx(He,{avklaringsbehov:s.find(B(y.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG))})]})};Qe.__docgenInfo={description:"",methods:[],displayName:"TabInnhold",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};const ur=(e,r)=>{const a=or(e,r),l=a.find(u=>u.skalVurderes&&u.harAksjonspunkt)?.skjæringstidspunkt??a[0].skjæringstidspunkt,[i,s]=C.useState(l);return{tabOptions:a,currentSkjæringstidspunkt:i,currentBeregningsgrunnlag:e.find(u=>u.skjaeringstidspunktBeregning===i)??e[0],onTabChange:u=>s(u)}},or=(e,r)=>e.map(a=>({beregningsgrunnlag:a,skjæringstidspunkt:a.skjaeringstidspunktBeregning,skalVurderes:On(a.vilkårsperiodeFom,r),harAksjonspunkt:wn(a.avklaringsbehov),optionLabel:ie(a.skjaeringstidspunktBeregning)})).sort((a,t)=>Te(a.skjæringstidspunkt).diff(Te(t.skjæringstidspunkt))),gr="BeregningForm",dr=e=>`${gr}_${e}`;var R=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(R||{});const j=({readOnly:e,alleAndelerIForstePeriode:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,fieldIndex:l,formName:i,skalValideres:s})=>{const{control:u}=K(),v=ve(r),d=$e(t,a);return n.jsx(n.Fragment,{children:v.map((m,b)=>n.jsxs(P,{wrap:!1,children:[n.jsx(q,{size:"small",children:d(m)}),n.jsx(J,{}),n.jsx(U,{name:`${i}.${l}.inntekt${b}`,control:u,validate:s?[N,x(178956970)]:[],readOnly:e||m.skalFastsetteGrunnlag!==!0,parse:Y,htmlSize:12,style:{textAlign:"right"},hideLabel:!0,isEdited:e&&(!!m.overstyrtPrAar||m.overstyrtPrAar===0)})]},m.andelsnr))})};j.buildInitialValues=e=>{const r=ve(e),a={};return r.forEach((t,l)=>{a[`inntekt${l}`]=G(t.overstyrtPrAar)??""}),a};j.transformValues=(e,r)=>r.some(a=>a.aktivitetStatus==="AT")?{inntektPrAndelList:ve(r).map(({andelsnr:t},l)=>{const i=e[`inntekt${l}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:i===void 0||i===""?0:_(i),andelsnr:t}})}:{inntektPrAndelList:[]};const ve=e=>e?e.filter(r=>r.aktivitetStatus==="AT").filter(r=>cn(r)):[];j.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"alleAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const mr=e=>e.some(r=>r.aktivitetStatus==="FL"&&(r.overstyrtPrAar||r.overstyrtPrAar===0)),D=({readOnly:e,fieldIndex:r,formName:a,alleAndelerIForstePeriode:t,skalValideres:l})=>{const{control:i}=K();return n.jsxs(P,{wrap:!1,children:[n.jsx(q,{size:"small",children:n.jsx(o,{id:"AksjonspunktBehandlerFL.Label"})}),n.jsx(J,{}),n.jsx(U,{control:i,name:`${a}.${r}.inntektFrilanser`,validate:l?[N,x(178956970)]:void 0,readOnly:e,hideLabel:!0,parse:Y,htmlSize:12,style:{textAlign:"right"},isEdited:e&&mr(t)})]})};D.buildInitialValues=e=>{const r=e.length>0?G(e[0].overstyrtPrAar):void 0;return r?{inntektFrilanser:r}:{}};D.transformValues=e=>({inntektFrilanser:e.inntektFrilanser===void 0?null:_(e.inntektFrilanser)});D.__docgenInfo={description:`AksjonspunktBehandlerFL

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
}>`}],raw:"BeregningsgrunnlagAndel[]"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const _e="inntektField",vr=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(r=>r).includes(Je.ARBEIDSFORHOLD_AVSLUTTET),X=e=>{const r=[];let a=0;for(;a<e.length;){const t={...e[a]};for(a+=1;a<e.length&&!vr(e[a]);)a+=1;r.push({...t,beregningsgrunnlagPeriodeTom:e[a-1].beregningsgrunnlagPeriodeTom})}return r},h=(e,r)=>e.arbeidsforhold?`${_e}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${r.beregningsgrunnlagPeriodeFom}`:`${_e}_${e.andelsnr}_${r.beregningsgrunnlagPeriodeFom}`,Q=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(r=>r.aktivitetStatus==="AT"&&r.erTilkommetAndel!==!0):[],Ze=e=>{const r=e?.arbeidsforholdId?e?.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${r}`:""},Er=(e,r,a)=>{const t=e.arbeidsgiverIdent?a[e.arbeidsgiverIdent]:null;return t?we(t,e.eksternArbeidsforholdId):e.arbeidsforholdType?r.OpptjeningAktivitetType.find(l=>l.kode===e.arbeidsforholdType)?.navn:""},We=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),kr=(e,r,a)=>{const t=Q(e),l={};return t.forEach(i=>{if(!i.arbeidsforhold)return;const s=Ze(i.arbeidsforhold),u=We();u.tabellInnhold=Er(i.arbeidsforhold,r,a),u.erTidsbegrenset=i.erTidsbegrensetArbeidsforhold===void 0?!1:i.erTidsbegrensetArbeidsforhold,l[s]=[u]}),l},Ee=e=>e.toSorted(Oe("beregningsgrunnlagPeriodeFom"))[0],en=(e,r)=>{const a=r.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus==="AT"?a?.find(t=>t.arbeidsforhold?.arbeidsgiverIdent===e.arbeidsforhold?.arbeidsgiverIdent&&t.arbeidsforhold?.arbeidsforholdId===e.arbeidsforhold?.arbeidsforholdId):a?.find(t=>t.aktivitetStatus===e.aktivitetStatus)},ke=(e,r)=>{const a=Ee(r);return!!en(e,a)?.erTidsbegrensetArbeidsforhold},br=(e,r,a)=>{const t=X(e),l=e[0].beregningsgrunnlagPeriodeFom,i=kr(e[0],r,a);return t.forEach(s=>{const u=s.beregningsgrunnlagPeriodeFom===l;Q(s).forEach(d=>{const m=ke(d,e),b=Ze(d.arbeidsforhold),E=We();E.tabellInnhold=d.overstyrtPrAar!==void 0&&d.overstyrtPrAar!==null?G(d.overstyrtPrAar):"",E.erTidsbegrenset=!1,E.isEditable=m?!0:u,E.inputfieldKey=h(d,s),i[b].push(E)})}),i},Ar=({bruttoPrPeriodeList:e})=>n.jsxs(g.Row,{shadeOnHover:!1,children:[n.jsx(g.HeaderCell,{textSize:"small",children:n.jsx(o,{id:"AksjonspunktBehandlerTB.SumPeriode"})}),e.map(({periodeFom:r,brutto:a})=>n.jsx(g.HeaderCell,{textSize:"small",align:"right",children:n.jsx(A,{beløp:a,kr:!0})},r))]}),Nr=({bruttoPrPeriodeList:e})=>n.jsxs(g.Row,{shadeOnHover:!1,children:[n.jsx(g.HeaderCell,{scope:"col"}),e.map(({periodeFom:r})=>n.jsxs(g.HeaderCell,{textSize:"small",align:"right",children:[n.jsx(ce,{dateString:r}),n.jsx(te,{children:n.jsx(o,{id:"AksjonspunktBehandlerTB.OmberegnetAar"},`Tittel_${r}`)})]},`periodetittel${r}`))]}),yr=({tabellData:e,readOnly:r,finnesAlleredeLøstPeriode:a,fieldIndex:t,formName:l,skalValideres:i,control:s})=>Object.entries(e).map(([u,v])=>n.jsx(g.Row,{shadeOnHover:!1,children:v.map(d=>d.isEditable?n.jsx(g.DataCell,{align:"right",children:n.jsxs(P,{children:[n.jsx(J,{}),n.jsx(U,{name:`${l}.${t}.${d.inputfieldKey}`,control:s,validate:i?[N,x(178956970)]:void 0,readOnly:r,isEdited:r&&a,hideLabel:!0,parse:Y,htmlSize:12,style:{textAlign:"right"}})]})},`Col-${d.inputfieldKey}`):n.jsx(g.DataCell,{textSize:"small",children:d.tabellInnhold},d.tabellInnhold))},u)),Rr=(e,r,a,t)=>{if(e.length<1)return[];const l=X(e),i=[];return l.forEach(s=>{const d=Q(s).map(m=>{const b=h(m,s),E=r.watch(`${t}.${a}.${b}`);return E===void 0||E===""?0:_(E)}).reduce((m,b)=>m+b,0);i.push({brutto:d,periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom})}),i},M=({readOnly:e,beregningsgrunnlagPeriode:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,fieldIndex:l,formName:i,skalValideres:s})=>{const u=br(r,a,t),v=r.some(b=>b.beregningsgrunnlagPrStatusOgAndel?.some(E=>E.aktivitetStatus==="AT"&&(!!E.overstyrtPrAar||E.overstyrtPrAar===0))),d=K(),m=Rr(r,d,l,i);return n.jsxs(g,{children:[n.jsx(g.Header,{children:n.jsx(Nr,{bruttoPrPeriodeList:m})}),n.jsx(g.Body,{children:n.jsx(yr,{tabellData:u,readOnly:e,finnesAlleredeLøstPeriode:v,fieldIndex:l,formName:i,skalValideres:s,control:d.control})}),n.jsx("tfoot",{children:n.jsx(Ar,{bruttoPrPeriodeList:m})})]})};M.buildInitialValues=e=>{const r={},a=X(e),t=Ee(e);return a.forEach(l=>{(l.beregningsgrunnlagPrStatusOgAndel?l.beregningsgrunnlagPrStatusOgAndel.filter(s=>s.aktivitetStatus==="AT"):[]).forEach(s=>{if(ke(s,e)){const v=G(s.overstyrtPrAar);r[h(s,l)]=v||""}else{const v=en(s,t),d=G(v?.overstyrtPrAar);r[h(s,l)]=d||""}})}),r};M.transformValues=(e,r)=>{const a=[],t=Ee(r);return X(r).forEach(i=>{const s=Q(i),u=[];s.forEach(v=>{if(ke(v,r)){const m=_(e[h(v,i)]);u.push({andelsnr:v.andelsnr,bruttoFastsattInntekt:m})}else{const m=_(e[h(v,t)]);u.push({andelsnr:v.andelsnr,bruttoFastsattInntekt:m})}}),a.push({periodeFom:i.beregningsgrunnlagPeriodeFom,periodeTom:i.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:u})}),{fastsatteTidsbegrensedePerioder:a}};M.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"beregningsgrunnlagPeriode",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const pr=(e,r,a,t)=>!e&&!a||r?!0:t===void 0?!e:!e&&t||t,nn=({isReadOnly:e,isSubmittable:r,isSubmitting:a,isDirty:t,text:l,onClick:i,hasEmptyRequiredFields:s})=>e?null:n.jsx(qn,{variant:"primary",size:"small",loading:a,disabled:pr(t,a,r,s),onClick:i,type:i?"button":"submit",children:l||n.jsx(o,{id:"ProsessStegSubmitButton.Label"})});nn.__docgenInfo={description:"ProsessStegSubmitButton",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};const rn=4e3,Pr=oe(rn),fr=ge(3),be="fastsettBeregningsgrunnlagSNBegrunnelse",Ae="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ir}=y,F=({readOnly:e,isAksjonspunktClosed:r,erNyIArbeidslivet:a,fieldIndex:t,formName:l,aksjonspunkt:i,skalValideres:s})=>{const{control:u}=K();return n.jsxs(f,{gap:"space-40",children:[a&&n.jsxs(P,{wrap:!1,children:[n.jsx(q,{size:"small",children:n.jsx(o,{id:"FastsettSNNyIArbeid.Tittel"})}),n.jsx(J,{}),n.jsx(U,{name:`${l}.${t}.${Ae}`,control:u,validate:s?[N,x(178956970)]:[],parse:Y,hideLabel:!0,htmlSize:12,style:{textAlign:"right"},isEdited:e&&r,readOnly:e})]}),n.jsx(ue,{name:`${l}.${t}.${be}`,control:u,label:n.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:s?[N,Pr,fr,de]:[],isEdited:e&&r,maxLength:rn,readOnly:e,description:n.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:v=>v.toString().replaceAll("‑","-").replaceAll("	"," ")}),n.jsx(me,{ident:i?.vurdertAv,date:i?.vurdertTidspunkt})]})};F.buildInitialValues=(e,r)=>{const a=e.find(l=>l.aktivitetStatus==="SN"),t=r.find(B(Ir));return{[Ae]:a?G(a.overstyrtPrAar):void 0,[be]:t?.begrunnelse?t.begrunnelse:void 0}};F.transformValues=e=>({begrunnelse:e[be],bruttoBeregningsgrunnlag:_(e[Ae])});F.__docgenInfo={description:`FastsettSN

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
}>`},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const an=4e3,Tr=oe(an),Sr=ge(3),Ne="varigEndringNyoppstartetBegrunnelse",ye="erVarigEndret",Re="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Lr,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Gr}=y,w=({readOnly:e,erVarigEndring:r,erVarigEndretArbeidssituasjon:a,erNyoppstartet:t,fieldIndex:l,formName:i,isAksjonspunktClosed:s,aksjonspunkt:u,skalValideres:v})=>{const{radioOption1:d,radioOption2:m,radioLegend:b}=qr(t,r,a),E=K(),O=E.watch(i)[l].erVarigEndret;return n.jsxs(f,{gap:"space-16",children:[n.jsxs(Dn,{name:`${i}.${l}.${ye}`,control:E.control,validate:v?[N]:[],legend:b,readOnly:e,isEdited:e&&s,children:[n.jsx(Se,{value:!1,size:"small",children:d}),n.jsx(Se,{value:!0,size:"small",children:m})]}),O&&n.jsxs(P,{gap:"space-16",align:"center",children:[n.jsx(q,{size:"small",children:_r(a)}),n.jsx(U,{name:`${i}.${l}.${Re}`,control:E.control,validate:v?[N,x(178956970)]:[],parse:Y,hideLabel:!0,htmlSize:12,style:{textAlign:"right"},readOnly:e,isEdited:e&&s})]}),n.jsx(ue,{name:`${i}.${l}.${Ne}`,control:E.control,label:n.jsx(o,{id:"Forms.Vurdering"}),validate:v?[N,Tr,Sr,de]:[],maxLength:an,readOnly:e,description:n.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:V=>V.toString().replaceAll("‑","-").replaceAll("	"," ")}),n.jsx(me,{ident:u?.vurdertAv,date:u?.vurdertTidspunkt})]})};w.buildInitialValues=(e,r)=>{const a=e.find(l=>l.aktivitetStatus==="SN"||l.aktivitetStatus==="BA"),t=r.find(B(Lr,Gr));if(t){const l=le(t)?void 0:e?.[0]?.overstyrtPrAar!=null;return{[ye]:l,[Ne]:t.begrunnelse?t.begrunnelse:"",[Re]:a?G(a.overstyrtPrAar):void 0}}return{}};w.transformValues=e=>{const r=e[ye];return{begrunnelse:e[Ne],erVarigEndretNaering:r,erVarigEndret:r,bruttoBeregningsgrunnlag:r?_(e[Re]):void 0}};const _r=e=>e?n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.VarigEndretInntektFastsettesTil"}):n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.BruttoBerGr2"}),qr=(e,r,a)=>{let t=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.IngenEndring"}),l=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.EndretNaering"});e&&!r&&(t=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.IkkeNyoppstartet"}),l=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.Nyoppstartet"})),r&&!e&&(t=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.IkkeVarigEndring"}),l=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.VarigEndring"}));let i=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringNæring"});return a&&(i=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringArbeid"})),e&&(i=n.jsx(o,{id:"VurderVarigEndringEllerNyoppstartet.RadioTittel.NyoppstartetNæring"})),{radioOption1:t,radioOption2:l,radioLegend:i}};w.__docgenInfo={description:`VurderVarigEndretEllerNyoppstartetSN

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
}>`},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:pe,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Dr,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:tn}=y,Fr=e=>[Dr,pe,tn].includes(e.definisjon),p=({readOnly:e,aksjonspunkt:r,erNyIArbeidslivet:a=!1,erVarigEndring:t=!1,erNyoppstartet:l=!1,fieldIndex:i,formName:s,skalValideres:u})=>{if(!Fr(r))return null;const v=!le(r);return a?n.jsx(F,{readOnly:e,isAksjonspunktClosed:v,erNyIArbeidslivet:a,fieldIndex:i,formName:s,aksjonspunkt:r,skalValideres:u}):n.jsx(w,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:r.definisjon===tn,erNyoppstartet:l,fieldIndex:i,formName:s,isAksjonspunktClosed:v,aksjonspunkt:r,skalValideres:u})};p.buildInitialValues=(e,r)=>L(pe,r)?F.buildInitialValues(e,r):w.buildInitialValues(e,r);p.transformValues=(e,r)=>L(pe,r)?F.transformValues(e):w.transformValues(e);p.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"relevanteAndeler",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},erNyIArbeidslivet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erVarigEndring:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erNyoppstartet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const Vr=new Set(["FL","AT_FL","AT_FL_SN","FL_SN"]),hr=new Set(["AT","AT_FL","AT_FL_SN","AT_SN"]),Kr=new Set(["SN","FL_SN","AT_FL_SN","AT_SN"]),Br=e=>Vr.has(e),jr=e=>hr.has(e),Mr=e=>Kr.has(e),wr=(e,r)=>{const a=ln(e,r);return a?a.vurderesIBehandlingen&&!a.erForlengelse:!1},ln=(e,r)=>e.perioder.find(({periode:a})=>a.fom===r),Or=(e,r)=>(r.aksjonspunkter.forEach(a=>{const t=e.find(l=>l.kode===a.kode);t===void 0?e.push({kode:a.kode,begrunnelse:a.aksjonspunktData.begrunnelse,grunnlag:[{periode:r.periode,...a.aksjonspunktData}]}):(t.grunnlag.push({periode:r.periode,...a.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${a.aksjonspunktData.begrunnelse}`)}),e),cr=(e,r=[])=>({sammenligningsgrunnlagType:a})=>R.SN===a||R.MIDLERTIDIG_INAKTIV===a||R.ATFLSN===a&&r.some(Mr)?Ue.has(e):Ye.has(e),{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:sn,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:un,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:on,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:gn,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:dn}=y,Ur=e=>(I(e).find(l=>l.aktivitetStatus==="SN")?.næringer??[]).some(l=>l.erNyoppstartet===!0)?n.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.Nyoppstartet"}):n.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.VarigEndring"}),mn=(e,r)=>{switch(e){case sn:return Ur(r);case dn:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.SNNyIArb"});case un:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.VarigEndringArbeid"});case on:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.ATFL"});case gn:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Detaljer.ATFLTidsbegrenset"});default:return"Ukjent aksjonspunkt"}},Yr=e=>{const r=e.some(jr),a=e.some(Br);return r&&a?n.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.ATFLAvvik"}):a?n.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.FLAvvik"}):n.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.ATAvvik"})},vn=(e,r)=>{switch(e){case sn:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.VarigEndringNyoppstartet"});case dn:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.SNNyIArb"});case un:return n.jsx(o,{id:"AksjonspunktBehandlerHeader.Tittel.VarigEndringArbeid"});case on:case gn:return Yr(r);default:return"Ukjent aksjonspunkt"}};mn.__docgenInfo={description:"",methods:[],displayName:"finnAPBeskrivelse"};vn.__docgenInfo={description:"",methods:[],displayName:"finnAPTittel"};const{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Jr,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:xr}=y,Hr=e=>e.find(B(Jr,xr)),$r=ge(3),En=4e3,zr=oe(En),T=({kodeverkSamling:e,beregningsgrunnlagPeriode:r,arbeidsgiverOpplysningerPerId:a,readOnly:t,fieldIndex:l,formName:i,avklaringsbehov:s,skalValideres:u})=>{const{control:v}=K(),d=Cr(r),m=qe(r,"FL"),b=qe(r,"AT");return n.jsxs(n.Fragment,{children:[d&&n.jsx(M,{readOnly:t,formName:i,beregningsgrunnlagPeriode:r,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:a,fieldIndex:l,skalValideres:u}),n.jsxs(f,{gap:"space-8",children:[!d&&b&&n.jsx(j,{readOnly:t,alleAndelerIForstePeriode:I(r),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:a,fieldIndex:l,formName:i,skalValideres:u}),m&&n.jsx(D,{readOnly:t,fieldIndex:l,formName:i,alleAndelerIForstePeriode:I(r),skalValideres:u})]}),n.jsxs("div",{children:[n.jsx(ue,{name:`${i}.${l}.ATFLVurdering`,control:v,label:n.jsx(o,{id:"Forms.Vurdering"}),validate:[N,zr,$r,de],maxLength:En,readOnly:t,minRows:3,description:n.jsx(o,{id:"Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:E=>E.toString().replaceAll("‑","-").replaceAll("	"," ")}),n.jsx(me,{ident:s?.vurdertAv,date:s?.vurdertTidspunkt})]})]})},qe=(e,r)=>!e||e.length<1?!1:I(e)?.some(t=>t.aktivitetStatus===r&&t.skalFastsetteGrunnlag),Cr=e=>e.some(({periodeAarsaker:r})=>r?.includes(Je.ARBEIDSFORHOLD_AVSLUTTET));T.buildInitialValues=e=>{const r=Hr(e);return{ATFLVurdering:r?.begrunnelse?r.begrunnelse:""}};T.transformATFLValues=(e,r)=>({begrunnelse:e.ATFLVurdering,...j.transformValues(e,r),...D.transformValues(e)});T.transformATFLTidsbegrensetValues=(e,r)=>({begrunnelse:e.ATFLVurdering,...M.transformValues(e,r),frilansInntekt:D.transformValues(e).inntektFrilanser});T.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"gjeldendeAvklaringsbehov",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const kn=({readOnly:e,beregningsgrunnlagPeriode:r,aksjonspunkt:a,fieldIndex:t,formName:l,skalValideres:i})=>{const s=I(r).find(m=>m.aktivitetStatus&&m.aktivitetStatus==="SN"),u=s?.erNyIArbeidslivet,v=a.definisjon===y.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||s?.næringer?.some(m=>m.erVarigEndret===!0),d=s?.næringer?.some(m=>m.erNyoppstartet===!0);return!u&&!d&&!v?null:n.jsx(p,{readOnly:e,aksjonspunkt:a,erNyIArbeidslivet:u,erVarigEndring:v,erNyoppstartet:d,fieldIndex:t,formName:l,skalValideres:i})};kn.__docgenInfo={description:"",methods:[],displayName:"SelvstendigNæringsdrivendeContainer",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},beregningsgrunnlagPeriode:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""},formName:{required:!0,tsType:{name:"ReturnType",elements:[{name:"finnFormName"}],raw:"ReturnType<typeof finnFormName>"},description:""},skalValideres:{required:!0,tsType:{name:"boolean"},description:""}}};const{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:De,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Fe,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ve,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:he,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Ke}=y,bn=({readOnly:e,isSubmittable:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagForAksjonspunkt:l,vilkår:i,submitCallback:s,formData:u,setFormData:v,aktivtBeregningsgrunnlag:d,aksjonspunktKode:m,finnesFormSomSubmittes:b,setSubmitting:E})=>{const k=dr(m),O=S=>{E(!0),s(Zr(S,k))},V=Fn({defaultValues:u&&k in u?u:Be(l,i,k,m)}),Pe=()=>{V.reset(Be(l,i,k,m))},Z=l.reduce((S,c)=>S+c.avklaringsbehov.length,0),W=Vn(Z);C.useEffect(()=>{W!==void 0&&Z!==W&&(E(!1),u||Pe())},[Z,u,Pe,E,W]);const{control:Nn}=V,{fields:yn}=hn({name:k,control:Nn}),Rn=d.vilkårsperiodeFom;return n.jsx(Kn,{formMethods:V,onSubmit:S=>O(S),setDataOnUnmount:v,children:yn.map((S,c)=>{const{beregningsgrunnlagPeriode:ee,avklaringsbehov:pn,vilkårsperiodeFom:fe,aktivitetStatus:Pn}=l[c],H=pn.find(B(m)),Ie=wr(i,fe);return H?n.jsx("div",{style:{display:fe===Rn?"block":"none"},children:n.jsx(Me,{tittel:vn(m,Pn??[]),beskrivelse:mn(m,ee),aksjonspunkt:H,children:n.jsxs(f,{gap:"space-16",children:[Ye.has(m)&&n.jsx(T,{kodeverkSamling:a,beregningsgrunnlagPeriode:ee,arbeidsgiverOpplysningerPerId:t,readOnly:e,fieldIndex:c,formName:k,avklaringsbehov:H,skalValideres:Ie}),Ue.has(m)&&n.jsx(kn,{readOnly:e,beregningsgrunnlagPeriode:ee,fieldIndex:c,formName:k,aksjonspunkt:H,skalValideres:Ie}),n.jsx("div",{children:n.jsx(nn,{isReadOnly:e,isSubmittable:r,isDirty:V.formState.isDirty,isSubmitting:b})})]})})},S.id):null})})},Xr=({beregningsgrunnlagPeriode:e,avklaringsbehov:r},a)=>{if(!e)return{};const t=I(e),l=t.filter(d=>d.aktivitetStatus==="AT"),i=t.filter(d=>d.aktivitetStatus==="FL"),s=t.filter(d=>["SN","BA"].includes(d.aktivitetStatus)),u={...T.buildInitialValues(r),...M.buildInitialValues(e),...D.buildInitialValues(i),...j.buildInitialValues(l)},v={...p.buildInitialValues(s,r)};switch(a?.sammenligningsgrunnlagType){case void 0:return F.buildInitialValues(s,r);case R.ATFLSN:return{...u,...v};case R.AT_FL:return u;case R.SN:case R.MIDLERTIDIG_INAKTIV:return v;default:return{}}},Be=(e,r,a,t)=>({[a]:e.map(l=>{const i=ln(r,l.vilkårsperiodeFom),s=l.avklaringsbehov.find(B(t)),u=l.sammenligningsgrunnlagPrStatus?.find(cr(t,l.aktivitetStatus));return{...s?Xr(l,u):{},periode:i.periode,erTilVurdering:i.vurderesIBehandlingen&&!i.erForlengelse,gjeldendeAvklaringsbehov:s?[s]:[],skjæringstidspunkt:l.skjaeringstidspunktBeregning,allePerioder:l.beregningsgrunnlagPeriode}})}),Qr=e=>{const{allePerioder:r}=e;if(r.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");r.sort((t,l)=>!t.beregningsgrunnlagPeriodeFom||!l.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(l.beregningsgrunnlagPeriodeFom));const a=r[0].beregningsgrunnlagPrStatusOgAndel??[];if(L(De,e.gjeldendeAvklaringsbehov))return[{kode:De,aksjonspunktData:T.transformATFLValues(e,a)}];if(L(he,e.gjeldendeAvklaringsbehov))return[{kode:he,aksjonspunktData:p.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(L(Ke,e.gjeldendeAvklaringsbehov))return[{kode:Ke,aksjonspunktData:p.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(L(Ve,e.gjeldendeAvklaringsbehov))return[{kode:Ve,aksjonspunktData:p.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(L(Fe,e.gjeldendeAvklaringsbehov))return[{kode:Fe,aksjonspunktData:T.transformATFLTidsbegrensetValues(e,r)}];throw new Error("Må submitte et aksjonspunkt")},Zr=(e,r)=>e[r].filter(l=>l.erTilVurdering).map(l=>({periode:l.periode,aksjonspunkter:Qr(l)})).reduce(Or,[]);bn.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktBehandler",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},beregningsgrunnlagForAksjonspunkt:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValues[]",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},aktivtBeregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},aksjonspunktKode:{required:!0,tsType:{name:"AksjonspunktKode"},description:""},finnesFormSomSubmittes:{required:!0,tsType:{name:"boolean"},description:""},setSubmitting:{required:!0,tsType:{name:"signature",type:"function",raw:"(toggle: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggle"}],return:{name:"void"}}},description:""}}};const An=({beregningsgrunnlagListe:e,...r})=>{const a=Wr(e),[t,l]=C.useState(!1);return n.jsx(n.Fragment,{children:Object.entries(a).map(([i,s])=>n.jsx(bn,{...r,aksjonspunktKode:i,beregningsgrunnlagForAksjonspunkt:s,finnesFormSomSubmittes:t,setSubmitting:l},i))})},Wr=e=>e.reduce((r,a)=>(a.avklaringsbehov.filter(Un).map(t=>t.definisjon).forEach(t=>{r[t]||(r[t]=[]),r[t].push(a)}),r),{});An.__docgenInfo={description:"",methods:[],displayName:"FastsettBeregningAksjonspunktContainer",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"ATFLVurdering",value:{name:"string",required:!0}}]}}]}]}]}],raw:"BeregningsgrunnlagValues[]",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},aktivtBeregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const je=Bn(Hn),ea=({beregningsgrunnlagListe:e,beregningsgrunnlagsvilkår:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,formData:l,setFormData:i,submitCallback:s,isReadOnly:u,isSubmittable:v})=>{const{tabOptions:d,currentSkjæringstidspunkt:m,onTabChange:b,currentBeregningsgrunnlag:E}=ur(e,r);if(!r||e.length===0||e.length===1&&!e[0].aktivitetStatus){const k=r?.perioder?.some(O=>O.avslagKode==="1043");return n.jsx(Le,{value:je,children:n.jsxs(f,{gap:"space-8",children:[n.jsx(se,{size:"medium",level:"2",children:n.jsx(o,{id:"BeregningsgrunnlagProsessIndex.Title"})}),n.jsx(q,{size:"small",children:n.jsx(o,{id:k?"BeregningsgrunnlagProsessIndex.IkkeTilstrekkeligInntektsgrunnlag":"BeregningsgrunnlagProsessIndex.HarIkkeBeregningsregler"})})]})})}return n.jsx(Le,{value:je,children:n.jsxs(f,{gap:"space-8",children:[n.jsx(re,{value:m,onChange:b,children:d.length>1&&n.jsx(re.List,{children:d.map(k=>n.jsx(re.Tab,{value:k.skjæringstidspunkt,id:`${k.optionLabel}-tab`,label:k.optionLabel,"aria-controls":`${k.optionLabel}-panel`,icon:k.harAksjonspunkt&&k.skalVurderes?n.jsx(jn,{"aria-hidden":!0,color:"var(--ax-bg-warning-strong)"}):void 0},k.skjæringstidspunkt))})}),d.map(k=>n.jsx("div",{role:"tabpanel",hidden:k.skjæringstidspunkt!==m,id:`${k.optionLabel}-panel`,"aria-labelledby":`${k.optionLabel}-tab`,children:n.jsx(Qe,{beregningsgrunnlag:k.beregningsgrunnlag,beregningsgrunnlagsvilkår:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t})},k.skjæringstidspunkt)),n.jsx(An,{readOnly:u,isSubmittable:v,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:e,vilkår:r,submitCallback:s,formData:l,setFormData:i,aktivtBeregningsgrunnlag:E})]})})};ea.__docgenInfo={description:"",methods:[],displayName:"BeregningProsessIndex",props:{beregningsgrunnlagListe:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""}}};export{ea as B,R as S,Ea as a};
