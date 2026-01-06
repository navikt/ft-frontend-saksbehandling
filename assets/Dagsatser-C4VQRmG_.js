import{aM as _,aN as L,d as G,x as D,j as n,X as q,Y as T,a9 as F,r as K,a1 as m,E as V,H as B,B as M,aO as h,a4 as j,$ as O,a0 as w}from"./iframe-DGClZT-o.js";import{I as c,T as y}from"./index.es-BDctT3QU.js";import{S as U}from"./Spacer-BvwAKzKw.js";import{M as o}from"./message-DM_uILvT.js";import{T as t}from"./Table-B5NN45sO.js";var k=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(k||{});const Y=new Set(["VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN","FASTSETT_BG_AT_FL","FASTSETT_BG_SN","FASTSETT_BG_TB_ARB","FASTSETT_BG_SN_NY_I_ARB_LIVT","VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV"]),Ne=e=>e.some(r=>Y.has(r.definisjon)&&r.kanLoses),I=(...e)=>r=>e.includes(r.definisjon),Re=(e,r)=>{const a=e.vilkårsperiodeFom;return(r?.perioder?r.perioder.filter(i=>i.vurderesIBehandlingen&&!i.erForlengelse):[]).some(i=>i.periode.fom===a)},be=e=>e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel??[]:[],J=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,x=(e,r)=>{const a=e.perioder.find(({periode:l})=>l.fom===r);if(!a)throw new Error(`Finner ikke vilkårsperiode med fom ${r}`);return a};var P=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(P||{});const H={AT:1,FL:2,DP:3,SP_AV_DP:4,PSB_AV_DP:5,AAP:6,KUN_YTELSE:7,MS:8,BA:9,SN:10},z=260,C=new Set([y.ARBEIDSFORHOLD_AVSLUTTET,y.NATURALYTELSE_TILKOMMER,y.NATURALYTELSE_BORTFALT]),$=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar??0,X=(e,r)=>{switch(e){case"AT":case"FL":return r.find(I(k.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,k.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD));case"SN":return r.find(I(k.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,k.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE));case"BA":return r.find(I(k.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON));default:return}},Q=({arbeidsforhold:e})=>{const r=e?.naturalytelseBortfaltPrÅr,a=e?.naturalytelseTilkommetPrÅr||0;return r?r-a:0},W=({beregnetPrAar:e,pgiSnitt:r})=>{const a=e!=null,l=r!=null;return a||l},Z=(e,r)=>{const a=e.filter(J);return Map.groupBy(a,i=>i.aktivitetStatus).entries().map(([i,s])=>{const g=X(i,r),E=s.every(W),d=s.reduce((N,b)=>$(b)+N,0),v=s.reduce((N,b)=>Q(b)+N,0),A=(d||0)+(v||0),u=E&&!L(g);return{inntekt:d,bortfaltNaturalytelse:v,inntektPlussNaturalytelse:A,erFerdigBeregnet:u,aktivitetStatus:i}}).toArray().sort(ae)},ee=e=>e.some(r=>C.has(r)),ne=e=>e?G(e.beregningsgrunnlagPeriodeFom).subtract(1,"day").format(D):void 0,re=({avklaringsbehov:e,skjaeringstidspunktBeregning:r,beregningsgrunnlagPeriode:a})=>a.filter(l=>l.beregningsgrunnlagPeriodeFom===r||ee(l.periodeAarsaker??[])).sort(_("beregningsgrunnlagPeriodeFom")).map((l,i,s)=>{const{beregningsgrunnlagPeriodeFom:g,beregningsgrunnlagPrStatusOgAndel:E,periodeAarsaker:d,redusertPrAar:v,avkortetPrAar:A,dagsats:u}=l,N=Z(E||[],e);return{fom:g,tom:ne(s[i+1]),årsak:d||[],andeler:N,redusertPrAar:v,avkortetPrAar:A,dagsats:u}}),S=e=>H[e.aktivitetStatus]||100,ae=(e,r)=>S(e)-S(r),te=(e,r)=>R(e)>r*6,le=({aktivitetStatus:e})=>!!e&&e.includes("MIDL_INAKTIV"),R=e=>e.reduce((r,a)=>(a.inntektPlussNaturalytelse||0)+r,0),ie=(e,r,a)=>r&&e.avkortetPrAar?e.avkortetPrAar:a&&e.redusertPrAar?e.redusertPrAar:R(e.andeler),se=(e,r)=>r?.ytelsetype!==c.FORELDREPENGER&&e.avkortetPrAar?Math.round(e.avkortetPrAar/z):e.dagsats||0,ue="_table_1iu5y_1",oe="_periodeLabel_1iu5y_25",p={table:ue,periodeLabel:oe},f=({beregningsgrunnlag:e,vilkårsperiode:r,tabellPeriode:a,skalVisePeriode:l,kodeverkSamling:i})=>{const s=a.andeler.every(u=>u.erFerdigBeregnet),g=te(a.andeler,e.grunnbeløp),E=e.dekningsgrad!==100,d=r.vilkarStatus===P.OPPFYLT,v=r.vilkarStatus===P.IKKE_OPPFYLT,A=ie(a,g,E);return n.jsxs(q,{gap:"space-8",children:[l&&n.jsx(T,{size:"small",className:p.periodeLabel,children:n.jsx(o,{id:"Dagsats.Periode",values:{periode:F(a.fom,a.tom)}})}),n.jsxs(t,{size:"small",className:p.table,children:[n.jsxs(t.Body,{children:[a.andeler.map(u=>n.jsxs(K.Fragment,{children:[n.jsxs(t.Row,{shadeOnHover:!1,children:[n.jsx(t.DataCell,{textSize:"small",children:me(u,i)}),n.jsx(t.DataCell,{textSize:"small",align:"right",children:u.erFerdigBeregnet?n.jsx(m,{beløp:u.inntekt,kr:!0}):n.jsx(V,{size:"small",children:n.jsx(o,{id:"Dagsats.IkkeBeregnet"})})})]}),!!u.bortfaltNaturalytelse&&n.jsxs(t.Row,{shadeOnHover:!1,children:[n.jsx(t.DataCell,{textSize:"small",children:n.jsx(o,{id:"Dagsats.Naturalytelser"})}),n.jsx(t.DataCell,{textSize:"small",align:"right",children:n.jsx(m,{beløp:u.bortfaltNaturalytelse,kr:!0})})]})]},`andel_${u.aktivitetStatus}`)),d&&g&&n.jsxs(t.Row,{shadeOnHover:!1,children:[n.jsx(t.DataCell,{textSize:"small",children:n.jsx(o,{id:"Dagsats.AvkortetOver6G",values:{grunnbeløp:n.jsx(m,{beløp:e.grunnbeløp*6,kr:!0})}})}),n.jsx(t.DataCell,{textSize:"small",align:"right",children:n.jsx(m,{beløp:-R(a.andeler)+e.grunnbeløp*6,kr:!0})})]}),d&&E&&n.jsxs(t.Row,{shadeOnHover:!1,children:[n.jsx(t.DataCell,{textSize:"small",children:n.jsx(o,{id:"Dagsats.Redusert"})}),n.jsx(t.DataCell,{textSize:"small",align:"right",children:n.jsx(m,{beløp:-R(a.andeler)*.2,kr:!0})})]})]}),s&&n.jsx("tfoot",{children:n.jsxs(t.Row,{shadeOnHover:!1,children:[n.jsx(t.DataCell,{textSize:"small",children:n.jsx(o,{id:"Dagsats.TotalÅrsinntekt",values:{erRedusert:g||E}})}),n.jsx(t.DataCell,{textSize:"small",align:"right",children:n.jsx(m,{beløp:A,kr:!0})})]})})]}),d&&s&&n.jsxs(B,{"data-row-type":"summary",children:[n.jsx(M,{size:"small",children:n.jsx(o,{id:"Dagsats.BeregnetDagsats",values:{b:h,inntekt:n.jsx(m,{beløp:A,kr:!0})}})}),n.jsx(U,{}),n.jsx(T,{size:"small",children:n.jsx(m,{beløp:se(a,e.ytelsesspesifiktGrunnlag),kr:!0})})]}),v&&s&&n.jsx(j,{variant:"error",size:"small",inline:!0,children:n.jsx(o,{id:le(e)?"Dagsats.VilkårIkkeOppfyltMidlertidigInaktiv":"Dagsats.VilkårIkkeOppfylt",values:{grunnbeløp:n.jsx(m,{beløp:e.grunnbeløp,kr:!0})}})})]})},me=(e,r)=>{const a=r.AktivitetStatus.find(l=>l.kode===e.aktivitetStatus)?.navn??e.aktivitetStatus;return n.jsx(o,{id:"Dagsats.FastsattÅrsinntekt",values:{aktivitetStatus:a}})};f.__docgenInfo={description:"",methods:[],displayName:"Dagsats",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},vilkårsperiode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},tabellPeriode:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom?: string;
  redusertPrAar?: number;
  avkortetPrAar?: number;
  dagsats?: number;
  årsak: string[];
  andeler: TabellRadData[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"redusertPrAar",value:{name:"number",required:!1}},{key:"avkortetPrAar",value:{name:"number",required:!1}},{key:"dagsats",value:{name:"number",required:!1}},{key:"årsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  erFerdigBeregnet: boolean;
  inntekt?: number;
  bortfaltNaturalytelse?: number;
  inntektPlussNaturalytelse?: number;
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
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erFerdigBeregnet",value:{name:"boolean",required:!0}},{key:"inntekt",value:{name:"number",required:!1}},{key:"bortfaltNaturalytelse",value:{name:"number",required:!1}},{key:"inntektPlussNaturalytelse",value:{name:"number",required:!1}}]}}],raw:"TabellRadData[]",required:!0}}]}},description:""},skalVisePeriode:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};const de=({beregningsgrunnlag:e,beregningsgrunnlagsvilkår:r,kodeverkSamling:a})=>{const l=x(r,e.vilkårsperiodeFom),i=re(e);return n.jsxs(O.New,{background:"neutral-soft",padding:"5",flexBasis:"0%",flexGrow:"1",children:[n.jsx(w,{size:"small",level:"4",children:n.jsx(o,{id:"Dagsats.Tittel"})}),i.map(s=>n.jsx(f,{beregningsgrunnlag:e,vilkårsperiode:l,tabellPeriode:s,skalVisePeriode:i.length>1,kodeverkSamling:a},s.fom))]})};de.__docgenInfo={description:"",methods:[],displayName:"Dagsatser",props:{beregningsgrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},beregningsgrunnlagsvilkår:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""}}};export{k as A,de as D,J as a,Re as e,be as f,Ne as h,I as m};
