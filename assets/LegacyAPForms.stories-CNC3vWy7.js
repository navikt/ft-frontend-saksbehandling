import{d as ee,x as ne,an as le}from"./iframe-DIWqox6I.js";import{a as ue}from"./alleKodeverk-BqlsAwOV.js";import{R as re,U as ie,T as F,_ as D}from"./index.es-BDctT3QU.js";import{a as Ee,B as Se,A as a,S as l}from"./BeregningProsessIndex-CgT6rVt-.js";import"./style-D3zaXYSM.js";/* empty css              */import"./preload-helper-PPVm8Dsz.js";import"./message-BSP80JZW.js";import"./Avviksberegninger-DGXb7yYN.js";import"./Table-CiTg-050.js";import"./AktivitetStatusTags-C6pYo5Wo.js";import"./Spacer-BMQZmZYB.js";import"./Sammenligningsgrunnlag-BUkMxzqQ.js";import"./index-BCO1X-C8.js";import"./nb-_dRk2zcE.js";import"./ExpansionCard-yimrxcFc.js";import"./index.es-DoNgpp1x.js";import"./Search-CRq2EgMu.js";import"./nb_NO-DcRBD7AZ.js";import"./Tabs-DGVkCxNk.js";import"./ChevronRight-UfJfFy3y.js";const _=(e,n=[])=>{const r=ee(e).endOf("month").format(ne);return{fom:e,tom:r,inntekter:n}},I=(e,n)=>({inntektAktivitetType:re.ARBEID,beløp:e,arbeidsgiverIdent:n}),m=e=>({inntektAktivitetType:re.FRILANS,beløp:e}),v=e=>({inntektAktivitetType:re.YTELSE,beløp:e});var t=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(t||{});const{action:Re}=__STORYBOOK_MODULE_ACTIONS__,g="2021-01-01",Z=e=>ee(g).subtract(e,"days").format(ne),$=(e,n)=>ee(e).add(n,"days").format(ne),k=e=>$(g,e),Ne="2022-03-01",ke="2022-05-31",E="222222222",L=(e,n)=>({begrunnelse:"Jeg utvidet virksomheten fra en ren transportfirma til også å tilby gardiner. Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året",endringsdato:"2016-05-01",erNyoppstartet:n,erVarigEndret:e,kanRegnskapsførerKontaktes:!0,oppgittInntekt:474257,oppstartsdato:"2015-11-01",orgnr:"555555555",regnskapsførerNavn:"Regnskapsfører Regn S. Fører",regnskapsførerTlf:"99999999",utenlandskvirksomhetsnavn:void 0,virksomhetType:"ANNEN"}),X=()=>[{beløp:124412,årstall:2017},{beløp:98456,årstall:2016},{beløp:9861482,årstall:2015}],ge=()=>X().reduce((e,n)=>e+n.beløp,0)/X().length,_e=(e,n,r,o,N,f)=>({aktivitetStatus:"SN",beregningsperiodeFom:"2019-01-01",beregningsperiodeTom:"2021-12-31",beregnetPrAar:n,overstyrtPrAar:r,bruttoPrAar:r||n,avkortetPrAar:36e4,redusertPrAar:599e3,erNyIArbeidslivet:N,skalFastsetteGrunnlag:o,andelsnr:e,lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,næringer:f?[f]:[L(!1,!1)]}),b=(e,n,r,o,N,f)=>({aktivitetStatus:"SN",beregningsperiodeFom:"2019-01-01",beregningsperiodeTom:"2021-12-31",beregnetPrAar:n,overstyrtPrAar:r,bruttoPrAar:r||n,avkortetPrAar:36e4,redusertPrAar:599e3,erNyIArbeidslivet:N,skalFastsetteGrunnlag:o,andelsnr:e,lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,pgiSnitt:ge(),pgiVerdier:X(),næringer:f?[f]:[L(!1,!1)]}),te=(e,n,r,o)=>({aktivitetStatus:"BA",beregningsperiodeFom:"2019-01-01",beregningsperiodeTom:"2021-12-31",beregnetPrAar:n,overstyrtPrAar:r,bruttoPrAar:r||n,avkortetPrAar:36e4,redusertPrAar:599e3,skalFastsetteGrunnlag:o,andelsnr:e,lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,pgiSnitt:ge(),pgiVerdier:X()}),s=(e,n)=>({definisjon:e,status:n?"UTFO":"OPPR",begrunnelse:n,kanLoses:!0}),u=(e,n,r)=>({vilkarType:"FP_VK_41",perioder:[{periode:{fom:g,tom:k(20)},vurderesIBehandlingen:!0,vilkarStatus:e,merknadParametere:{}}],overstyrbar:!0}),de=(e,n=void 0,r,o,N)=>({arbeidsgiverIdent:e,arbeidsforholdId:n,eksternArbeidsforholdId:r,arbeidsforholdType:"ARBEID",refusjonPrAar:36e4,belopFraInntektsmeldingPrMnd:3e4,organisasjonstype:"VIRKSOMHET",startdato:Z(400),sisteLønnsendringsdato:Z(400),stillingsprosenter:[{prosent:100,fomDato:Z(400),tomDato:le}],naturalytelseBortfaltPrÅr:o,naturalytelseTilkommetPrÅr:N,opphoersdato:"2070-12-31"}),S=de(E),R=(e,n,r,o,N,f)=>({aktivitetStatus:"AT",beregningsperiodeFom:Ne,beregningsperiodeTom:ke,beregnetPrAar:r,overstyrtPrAar:o,bruttoPrAar:o||r,avkortetPrAar:36e4,redusertPrAar:599e3,erTidsbegrensetArbeidsforhold:f,skalFastsetteGrunnlag:N,andelsnr:e,arbeidsforhold:n,lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1}),Ie=()=>R(1,S,2e5,void 0,!1,!1),p=(e,n,r,o)=>({aktivitetStatus:"FL",beregningsperiodeFom:"2019-06-01",beregningsperiodeTom:"2019-08-31",beregnetPrAar:n,overstyrtPrAar:r,bruttoPrAar:r||n,avkortetPrAar:36e4,redusertPrAar:599e3,skalFastsetteGrunnlag:o,andelsnr:e,lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1,arbeidsforhold:S}),ae=(e,n,r)=>({aktivitetStatus:n,beregningsperiodeFom:"2019-06-01",beregningsperiodeTom:"2019-08-31",beregnetPrAar:r,bruttoPrAar:r,avkortetPrAar:r,redusertPrAar:r,andelsnr:e,lagtTilAvSaksbehandler:!1,erTilkommetAndel:!1}),A=(e,n,r,o)=>{const N=de(n);return R(e,N,r,o,!0,!0)},G=(e,n,r,o=le,N)=>({beregningsgrunnlagPeriodeFom:r,beregningsgrunnlagPeriodeTom:o,beregnetPrAar:36e4,bruttoPrAar:36e4,bruttoInkludertBortfaltNaturalytelsePrAar:36e4,avkortetPrAar:36e4,redusertPrAar:36e4,ledetekstBrutto:"Brutto beregningsgrunnlag",ledetekstAvkortet:"Avkortet beregningsgrunnlag (6G=599148)",ledetekstRedusert:"Redusert beregningsgrunnlag (100%)",periodeAarsaker:n,dagsats:N,beregningsgrunnlagPrStatusOgAndel:e}),se=(e,n=g)=>G(e,[],n,void 0,999),T=(e,n,r)=>[G(e,[],n||g,$(n||g,r||20),999),G(e,[],$(n||g,r?r+1:21),void 0,0)],oe=(e,n,r,o)=>({sammenligningsgrunnlagFom:"2020-01-01",sammenligningsgrunnlagTom:"2020-12-31",rapportertPrAar:n,avvikPromille:r?r*10:0,avvikProsent:r,sammenligningsgrunnlagType:e,differanseBeregnet:o}),i=e=>oe(e,2e5,30,-15e4),me=e=>oe(e,2e5,0,0),P=(e,n)=>({beløp:e,pgiType:n}),Ae={beregningsgrunnlagInntekter:[],sammenligningsgrunnlagInntekter:[],pgiGrunnlag:[{år:2015,inntekter:[P(11e4,D.LØNN),P(1e4,D.NÆRING)]},{år:2016,inntekter:[P(7e4,D.LØNN),P(5e4,D.NÆRING)]},{år:2017,inntekter:[P(15e3,D.LØNN),P(15e4,D.NÆRING)]}]},ve=()=>({sammenligningsgrunnlagInntekter:[_("2020-01-01",[I(35e3,E),v(4e3),m(0)]),_("2020-02-01",[I(7e4,E),v(6e3),m(5e3)]),_("2020-03-01",[I(4e4,E),v(7e3),m(12e3)]),_("2020-04-01",[I(5e4,E),v(2e4),m(45e3)]),_("2020-05-01",[I(37e3,E),v(1e4),m(3e4)]),_("2020-06-01",[I(45e3,E),v(5e3),m(2e4)]),_("2020-07-01",[I(25e3,E),v(3e3),m(25e3)]),_("2020-08-01",[I(33e3,E),v(7e3),m(0)]),_("2020-09-01",[I(25e3,E),v(6e3),m(33e3)]),_("2020-10-01",[I(8e3,E),v(2e4),m(1e3)]),_("2020-11-01",[I(54e3,E),v(1e3),m(25e3)]),_("2020-12-01",[I(47e3,E),v(0),m(1e4)])],beregningsgrunnlagInntekter:[],pgiGrunnlag:[]}),d=(e,n,r,o,N=[],f=g,Te={lønnsendringSaksopplysning:[],kortvarigeArbeidsforhold:[]})=>({avklaringsbehov:N,skjaeringstidspunktBeregning:f,vilkårsperiodeFom:f,aktivitetStatus:n,beregningsgrunnlagPeriode:e,dekningsgrad:80,grunnbeløp:99858,sammenligningsgrunnlagPrStatus:o,faktaOmBeregning:{andelerForFaktaOmBeregning:[],saksopplysninger:Te},erOverstyrtInntekt:!1,inntektsgrunnlag:r}),xe={component:Se,args:{submitCallback:Re("submit"),isSubmittable:!0,kodeverkSamling:ue,arbeidsgiverOpplysningerPerId:Ee,setFormData:()=>{}}},c={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([R(1,S,2e5,void 0,!0,!1)]),["AT"],ve(),[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],g,{lønnsendringSaksopplysning:[{sisteLønnsendringsdato:"2020-12-14",lønnsendringscenario:ie.DELVIS_MÅNEDSINNTEKT_SISTE_MND.toString(),arbeidsforhold:{arbeidsgiverIdent:E,andelsnr:1}}],kortvarigeArbeidsforhold:[]})],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},K={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([R(1,S,2e5,void 0,!0,!1)]),["AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],g,{lønnsendringSaksopplysning:[{sisteLønnsendringsdato:"2019-10-20",lønnsendringscenario:ie.FULL_MÅNEDSINNTEKT_TO_MND.toString(),arbeidsforhold:{arbeidsgiverIdent:E,andelsnr:1}}],kortvarigeArbeidsforhold:[]})],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},B={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([R(1,S,2e5,void 0,!0,!1)]),["AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],g),d([se([R(1,S,2e5,void 0,!0,!1)],"2021-02-01")],["AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],"2021-02-01")],beregningsgrunnlagsvilkår:{vilkarType:"FP_VK_41",overstyrbar:!1,perioder:[{periode:{fom:g,tom:"2021-01-20"},vurderesIBehandlingen:!0,vilkarStatus:"TIL_VURDERING",merknadParametere:{}},{periode:{fom:"2021-02-01",tom:"2021-02-10"},vurderesIBehandlingen:!0,vilkarStatus:"TIL_VURDERING",merknadParametere:{}}]}}},U={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([R(1,S,2e5,2e5,!0,!1)]),["AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,"En begrunnelse")]),d(T([R(1,S,2e5,void 0,!0,!1)],"2021-02-01"),["AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],"2021-02-01")],beregningsgrunnlagsvilkår:{vilkarType:"FP_VK_41",overstyrbar:!1,perioder:[{periode:{fom:g,tom:"2021-01-20"},vurderesIBehandlingen:!1,vilkarStatus:"GODKJENT",merknadParametere:{}},{periode:{fom:"2021-02-01",tom:"2021-02-10"},vurderesIBehandlingen:!0,vilkarStatus:"TIL_VURDERING",merknadParametere:{}}]}}},V={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([R(1,S,2e5,void 0,!0,!1),p(1,2e5,void 0,!0)]),["AT_FL"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},O={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([b(1,2e5,void 0,!0,!1,L(!0,!1))]),["SN"],Ae,[i(l.SN)],[s(a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},y={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([te(1,2e5,void 0,!0)],"2021-01-01",15),["MIDL_INAKTIV"],void 0,[i(l.MIDLERTIDIG_INAKTIV)],[s(a.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)],"2021-01-01"),d(T([b(1,2e5,void 0,!0,!1,L(!0,!1)),R(2,S,15e4,15e4,!0,!1),p(3,2e5,2e5,!0)],"2021-02-01",15),["AT_FL_SN"],void 0,[i(l.SN),i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,"En fin begrunnelse"),s(a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],"2021-02-01"),d(T([_e(1,void 0,void 0,!0,!0,L(!1,!1))],"2021-03-01",15),["SN"],void 0,[],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],"2021-03-01")],beregningsgrunnlagsvilkår:{overstyrbar:!1,vilkarType:"FP_VK_41",perioder:[{periode:{fom:"2021-01-01",tom:"2021-01-15"},vurderesIBehandlingen:!0,vilkarStatus:t.IKKE_VURDERT,erForlengelse:!1,merknadParametere:{}},{periode:{fom:"2021-02-01",tom:"2021-02-15"},vurderesIBehandlingen:!0,vilkarStatus:t.IKKE_VURDERT,erForlengelse:!1,merknadParametere:{}},{periode:{fom:"2021-03-01",tom:"2021-03-15"},vurderesIBehandlingen:!0,vilkarStatus:t.IKKE_VURDERT,erForlengelse:!1,merknadParametere:{}}]}}},M={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([te(1,2e5,void 0,!0)]),["MIDL_INAKTIV"],void 0,[i(l.MIDLERTIDIG_INAKTIV)],[s(a.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},h={args:{isReadOnly:!1,beregningsgrunnlagListe:[{avklaringsbehov:[s(a.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],beregningsgrunnlagPeriode:[G([A(1,"333333333",1e5),A(2,"555555555",25e4),A(3,"444444444",5e3),p(4,4500,void 0,!0)],[],g,k(20)),G([A(1,"333333333",1e5),A(2,"555555555",25e4),A(3,"444444444",5e3),p(4,4500,void 0,!0)],[F.ARBEIDSFORHOLD_AVSLUTTET],k(21),k(35)),G([A(1,"333333333",1e5),A(2,"555555555",25e4),A(3,"444444444",5e3),p(4,4500,void 0,!0)],[F.ARBEIDSFORHOLD_AVSLUTTET],k(36),k(40))],sammenligningsgrunnlagPrStatus:[i(l.AT_FL)],skjaeringstidspunktBeregning:g,vilkårsperiodeFom:g,dekningsgrad:100,aktivitetStatus:["AT_FL"],grunnbeløp:124028,erOverstyrtInntekt:!1}],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},j={args:{isReadOnly:!1,beregningsgrunnlagListe:[{avklaringsbehov:[s(a.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,"En begrunnelse")],beregningsgrunnlagPeriode:[G([A(1,"333333333",1e5,1e5),A(2,"555555555",25e4,25e4),A(3,"444444444",5e3,5e3),p(4,4500,4500,!0)],[],g,k(15),999),G([A(1,"333333333",1e5,1e5),A(2,"555555555",25e4,25e4),A(3,"444444444",5e3,5e3),p(4,4500,4500,!0)],[F.ARBEIDSFORHOLD_AVSLUTTET],k(16),k(20),800),G([A(1,"333333333",1e5,1e5),A(2,"555555555",25e4,25e4),A(3,"444444444",5e3,5e3),p(4,4500,4500,!0)],[F.ARBEIDSFORHOLD_AVSLUTTET],k(21),void 0,0)],sammenligningsgrunnlagPrStatus:[i(l.AT_FL)],skjaeringstidspunktBeregning:g,vilkårsperiodeFom:g,dekningsgrad:100,aktivitetStatus:["AT_FL"],grunnbeløp:124028,erOverstyrtInntekt:!1}],beregningsgrunnlagsvilkår:u(t.OPPFYLT)}},Y={args:{isReadOnly:!1,beregningsgrunnlagListe:[{avklaringsbehov:[s(a.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],beregningsgrunnlagPeriode:[G([A(1,"333333333",1e5)],[],g,k(20)),G([A(1,"333333333",1e5)],[F.ARBEIDSFORHOLD_AVSLUTTET],k(21),k(35))],sammenligningsgrunnlagPrStatus:[i(l.AT_FL)],skjaeringstidspunktBeregning:g,vilkårsperiodeFom:g,dekningsgrad:100,aktivitetStatus:["AT"],grunnbeløp:124028,erOverstyrtInntekt:!1}],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},H={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([b(1,2e5,void 0,!0,!1,L(!0,!1)),R(2,S,15e4,void 0,!1,!1),p(3,2e5,void 0,!1)]),["AT_FL_SN"],void 0,[i(l.SN)],[s(a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},J={args:{isReadOnly:!0,beregningsgrunnlagListe:[d(T([Ie()]),["AT"],void 0,[me(l.AT_FL)],[{definisjon:a.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,status:"UTFO",begrunnelse:"her var det noe galt en gang",kanLoses:!0}])],beregningsgrunnlagsvilkår:u(t.OPPFYLT)}},x={args:{isReadOnly:!0,beregningsgrunnlagListe:[d(T([R(1,S,3e4,333333,!0,!1)]),["AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,"Dette er en begrunnelse")])],beregningsgrunnlagsvilkår:u(t.OPPFYLT)}},C={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([p(1,2e5,void 0,!0)]),["FL"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},q={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([b(1,2e5,void 0,!0,!1,L(!1,!0))]),["SN"],void 0,[i(l.SN)],[s(a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},w={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([b(1,2e5,void 0,!0,!0,L(!1,!1))]),["SN"],void 0,void 0,[s(a.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},z={args:{isReadOnly:!1,beregningsgrunnlagListe:[d([se([R(1,S,325845,void 0,!0,!1),ae(1,"AAP",1e5)])],["KUN_YTELSE","AT"],void 0,[i(l.AT_FL)],[s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},Q={args:{isReadOnly:!1,beregningsgrunnlagListe:[d([se([p(1,100500,void 0,!1),b(2,5e5,void 0,!0,!1,L(!1,!0)),ae(3,"DP",100500)])],["FL_SN","DP"],void 0,[i(l.SN)],[s(a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}},W={args:{isReadOnly:!1,beregningsgrunnlagListe:[d(T([b(1,2e5,void 0,!0,!1,L(!0,!1)),R(2,S,15e4,2e5,!0,!1),ae(4,"DP",100500),p(3,2e5,1e5,!0)]),["AT_FL_SN","DP"],Ae,[i(l.SN),i(l.AT_FL)],[s(a.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE),s(a.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,"Dette er løst")])],beregningsgrunnlagsvilkår:u(t.IKKE_VURDERT)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)]), ['AT'], lagInntektsgrunnlag(), [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)], STP, {
      lønnsendringSaksopplysning: [{
        sisteLønnsendringsdato: '2020-12-14',
        lønnsendringscenario: LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND.toString(),
        arbeidsforhold: {
          arbeidsgiverIdent: defaultArbeidsgiverIdent,
          andelsnr: 1
        }
      }],
      kortvarigeArbeidsforhold: []
    })],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...c.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)]), ['AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)], STP, {
      lønnsendringSaksopplysning: [{
        sisteLønnsendringsdato: '2019-10-20',
        lønnsendringscenario: LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND.toString(),
        arbeidsforhold: {
          arbeidsgiverIdent: defaultArbeidsgiverIdent,
          andelsnr: 1
        }
      }],
      kortvarigeArbeidsforhold: []
    })],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...K.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)]), ['AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)], STP), lagBG([malPeriode([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)], '2021-02-01')], ['AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)], '2021-02-01')],
    beregningsgrunnlagsvilkår: {
      vilkarType: 'FP_VK_41',
      overstyrbar: false,
      perioder: [{
        periode: {
          fom: STP,
          tom: '2021-01-20'
        },
        vurderesIBehandlingen: true,
        vilkarStatus: 'TIL_VURDERING',
        merknadParametere: {}
      }, {
        periode: {
          fom: '2021-02-01',
          tom: '2021-02-10'
        },
        vurderesIBehandlingen: true,
        vilkarStatus: 'TIL_VURDERING',
        merknadParametere: {}
      }]
    }
  }
}`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, 200000, true, false)]), ['AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'En begrunnelse')]), lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)], '2021-02-01'), ['AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)], '2021-02-01')],
    beregningsgrunnlagsvilkår: {
      vilkarType: 'FP_VK_41',
      overstyrbar: false,
      perioder: [{
        periode: {
          fom: STP,
          tom: '2021-01-20'
        },
        vurderesIBehandlingen: false,
        vilkarStatus: 'GODKJENT',
        merknadParametere: {}
      }, {
        periode: {
          fom: '2021-02-01',
          tom: '2021-02-10'
        },
        vurderesIBehandlingen: true,
        vilkarStatus: 'TIL_VURDERING',
        merknadParametere: {}
      }]
    }
  }
}`,...U.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false), lagFrilansandel(1, 200000, undefined, true)]), ['AT_FL'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false))]), ['SN'], inntektsgrunnlagSN, [malSGGrunnlagAvvik(SammenligningType.SN)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...O.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagBrukersAndelMedPGI(1, 200000, undefined, true)], '2021-01-01', 15), ['MIDL_INAKTIV'], undefined, [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)], '2021-01-01'), lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)), lagArbeidsandel(2, defaultArbeidsforhold, 150000, 150000, true, false), lagFrilansandel(3, 200000, 200000, true)], '2021-02-01', 15), ['AT_FL_SN'], undefined, [malSGGrunnlagAvvik(SammenligningType.SN), malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'En fin begrunnelse'), lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)], '2021-02-01'), lagBG(malPerioder([lagSNUtenPGI(1, undefined, undefined, true, true, lagNæring(false, false))], '2021-03-01', 15), ['SN'], undefined, [], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)], '2021-03-01')],
    beregningsgrunnlagsvilkår: {
      overstyrbar: false,
      vilkarType: 'FP_VK_41',
      perioder: [{
        periode: {
          fom: '2021-01-01',
          tom: '2021-01-15'
        },
        vurderesIBehandlingen: true,
        vilkarStatus: VilkårUtfallType.IKKE_VURDERT,
        erForlengelse: false,
        merknadParametere: {}
      }, {
        periode: {
          fom: '2021-02-01',
          tom: '2021-02-15'
        },
        vurderesIBehandlingen: true,
        vilkarStatus: VilkårUtfallType.IKKE_VURDERT,
        erForlengelse: false,
        merknadParametere: {}
      }, {
        periode: {
          fom: '2021-03-01',
          tom: '2021-03-15'
        },
        vurderesIBehandlingen: true,
        vilkarStatus: VilkårUtfallType.IKKE_VURDERT,
        erForlengelse: false,
        merknadParametere: {}
      }]
    }
  }
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagBrukersAndelMedPGI(1, 200000, undefined, true)]), ['MIDL_INAKTIV'], undefined, [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [{
      avklaringsbehov: [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],
      beregningsgrunnlagPeriode: [lagPeriode([lagTBAndel(1, '333333333', 100000), lagTBAndel(2, '555555555', 250000), lagTBAndel(3, '444444444', 5000), lagFrilansandel(4, 4500, undefined, true)], [], STP, etterSTP(20)), lagPeriode([lagTBAndel(1, '333333333', 100000), lagTBAndel(2, '555555555', 250000), lagTBAndel(3, '444444444', 5000), lagFrilansandel(4, 4500, undefined, true)], [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(21), etterSTP(35)), lagPeriode([lagTBAndel(1, '333333333', 100000), lagTBAndel(2, '555555555', 250000), lagTBAndel(3, '444444444', 5000), lagFrilansandel(4, 4500, undefined, true)], [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(36), etterSTP(40))],
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT_FL'],
      grunnbeløp: 124028,
      erOverstyrtInntekt: false
    }],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [{
      avklaringsbehov: [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, 'En begrunnelse')],
      beregningsgrunnlagPeriode: [lagPeriode([lagTBAndel(1, '333333333', 100000, 100000), lagTBAndel(2, '555555555', 250000, 250000), lagTBAndel(3, '444444444', 5000, 5000), lagFrilansandel(4, 4500, 4500, true)], [], STP, etterSTP(15), 999), lagPeriode([lagTBAndel(1, '333333333', 100000, 100000), lagTBAndel(2, '555555555', 250000, 250000), lagTBAndel(3, '444444444', 5000, 5000), lagFrilansandel(4, 4500, 4500, true)], [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(16), etterSTP(20), 800), lagPeriode([lagTBAndel(1, '333333333', 100000, 100000), lagTBAndel(2, '555555555', 250000, 250000), lagTBAndel(3, '444444444', 5000, 5000), lagFrilansandel(4, 4500, 4500, true)], [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(21), undefined, 0)],
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT_FL'],
      grunnbeløp: 124028,
      erOverstyrtInntekt: false
    }],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.OPPFYLT)
  }
}`,...j.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [{
      avklaringsbehov: [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],
      beregningsgrunnlagPeriode: [lagPeriode([lagTBAndel(1, '333333333', 100000)], [], STP, etterSTP(20)), lagPeriode([lagTBAndel(1, '333333333', 100000)], [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET], etterSTP(21), etterSTP(35))],
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT'],
      grunnbeløp: 124028,
      erOverstyrtInntekt: false
    }],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...Y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)), lagArbeidsandel(2, defaultArbeidsforhold, 150000, undefined, false, false), lagFrilansandel(3, 200000, undefined, false)]), ['AT_FL_SN'], undefined, [malSGGrunnlagAvvik(SammenligningType.SN)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...H.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    beregningsgrunnlagListe: [lagBG(malPerioder([malArbeidsandel()]), ['AT'], undefined, [malSGGrunnlag(SammenligningType.AT_FL)], [{
      definisjon: AksjonspunktKode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
      status: 'UTFO',
      begrunnelse: 'her var det noe galt en gang',
      kanLoses: true
    }])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.OPPFYLT)
  }
}`,...J.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 30000, 333333, true, false)]), ['AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'Dette er en begrunnelse')])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.OPPFYLT)
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagFrilansandel(1, 200000, undefined, true)]), ['FL'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...C.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(false, true))]), ['SN'], undefined, [malSGGrunnlagAvvik(SammenligningType.SN)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...q.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, true, true, lagNæring(false, false))]), ['SN'], undefined, undefined, [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG([malPeriode([lagArbeidsandel(1, defaultArbeidsforhold, 325845, undefined, true, false), lagGenerellAndel(1, 'AAP', 100000)])], ['KUN_YTELSE', 'AT'], undefined, [malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG([malPeriode([lagFrilansandel(1, 100500, undefined, false), lagSNMedPGI(2, 500000, undefined, true, false, lagNæring(false, true)), lagGenerellAndel(3, 'DP', 100500)])], ['FL_SN', 'DP'], undefined, [malSGGrunnlagAvvik(SammenligningType.SN)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...Q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)), lagArbeidsandel(2, defaultArbeidsforhold, 150000, 200000, true, false), lagGenerellAndel(4, 'DP', 100500), lagFrilansandel(3, 200000, 100000, true)]), ['AT_FL_SN', 'DP'], inntektsgrunnlagSN, [malSGGrunnlagAvvik(SammenligningType.SN), malSGGrunnlagAvvik(SammenligningType.AT_FL)], [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE), lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'Dette er løst')])],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT)
  }
}`,...W.parameters?.docs?.source}}};const Ce=["AvvikMedSammenligningsgraf5038","ArbeidstakerMedAvvikAp5038","ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagAp5038","ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038","ArbeidstakerFrilansMedAvvikAp5038","SelvstendigNæringsdrivendeMedAksjonspunktAp5039","MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039","MidlertidigInaktivMedAksjonspunktAp5054","MangeTidsbegrensetArbeidsforholdMedAvvikAp5047","MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047","TidsbegrensetArbeidsforholdMedAvvikAp5047","ArbeidstakerFrilanserOgSelvstendigNæringsdrivendeAp5039","GraderingPåBeregningsgrunnlagUtenPenger","ArbeidstakerMedAksjonspunktBehandlet","FrilansMedAvvikAp5038","SelvstendigNæringsdrivendeNyoppstartetAksjonspunktAp5039","SelvstendigNæringsdrivendNyIArbeidslivetAp5049","ArbeidstakerOgAAPMedAksjonspunktAp5038","FrilansDagpengerOgSelvstendigNæringsdrivendeAp5039","AvvikNæringEtterLøstAvvikArbeid5038Og5039"];export{V as ArbeidstakerFrilansMedAvvikAp5038,H as ArbeidstakerFrilanserOgSelvstendigNæringsdrivendeAp5039,x as ArbeidstakerMedAksjonspunktBehandlet,K as ArbeidstakerMedAvvikAp5038,B as ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagAp5038,U as ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038,z as ArbeidstakerOgAAPMedAksjonspunktAp5038,c as AvvikMedSammenligningsgraf5038,W as AvvikNæringEtterLøstAvvikArbeid5038Og5039,Q as FrilansDagpengerOgSelvstendigNæringsdrivendeAp5039,C as FrilansMedAvvikAp5038,J as GraderingPåBeregningsgrunnlagUtenPenger,h as MangeTidsbegrensetArbeidsforholdMedAvvikAp5047,j as MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047,M as MidlertidigInaktivMedAksjonspunktAp5054,y as MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039,w as SelvstendigNæringsdrivendNyIArbeidslivetAp5049,O as SelvstendigNæringsdrivendeMedAksjonspunktAp5039,q as SelvstendigNæringsdrivendeNyoppstartetAksjonspunktAp5039,Y as TidsbegrensetArbeidsforholdMedAvvikAp5047,Ce as __namedExportsOrder,xe as default};
