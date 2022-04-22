import { BeregningAvklaringsbehov, Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';

export const beregningsgrunnlag = {
  skjaeringstidspunktBeregning: '2020-01-13',
  skjæringstidspunkt: '2020-01-13',
  aktivitetStatus: ['AT'],
  avklaringsbehov: [{
    definisjon: '5052',
    status: 'OPPR',
    kanLoses: true,
  }],
  vilkårperiodeFom: '2022-03-02',
  beregningsgrunnlagPeriode: [{
    beregningsgrunnlagPeriodeFom: '2020-01-13',
    beregnetPrAar: 0,
    bruttoPrAar: 0,
    bruttoInkludertBortfaltNaturalytelsePrAar: 0,
    avkortetPrAar: 0,
    periodeAarsaker: [],
    beregningsgrunnlagPrStatusOgAndel: [{
      aktivitetStatus: 'AT',
      beregningsperiodeFom: '2019-10-01',
      beregningsperiodeTom: '2019-12-31',
      andelsnr: 1,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverNavn: 'BEDRIFT AS',
        arbeidsgiverId: '910909088',
        arbeidsgiverIdent: '910909088',
        startdato: '2019-02-03',
        opphoersdato: '2020-02-03',
        arbeidsforholdType: 'ARBEID',
        belopFraInntektsmeldingPrMnd: 30000.00,
        organisasjonstype: 'VIRKSOMHET',
      },
      fastsattAvSaksbehandler: false,
      lagtTilAvSaksbehandler: false,
      belopPrMndEtterAOrdningen: 10000.0000000000,
      belopPrAarEtterAOrdningen: 120000.000000000000,
      erTilkommetAndel: false,
      skalFastsetteGrunnlag: false,
    } as BeregningsgrunnlagAndel],
  }],
  sammenligningsgrunnlagPrStatus: [],
  ledetekstBrutto: 'Brutto beregningsgrunnlag',
  ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
  ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
  halvG: 49929.0,
  grunnbeløp: 99858,
  faktaOmBeregning: {
    faktaOmBeregningTilfeller: ['VURDER_BESTEBEREGNING'],
    avklarAktiviteter: {
      skjæringstidspunktOpptjening: '2020-01-13',
      aktiviteterTomDatoMapping: [{
        tom: '2020-01-13',
        aktiviteter: [{
          arbeidsgiverIdent: '910909088',
          fom: '2019-02-03',
          tom: '2020-02-03',
          arbeidsforholdType: 'ARBEID',
          skalBrukes: true,
        }],
      }, {
        tom: '2019-11-12',
        aktiviteter: [{
          fom: '2019-02-03',
          tom: '2019-11-11',
          arbeidsforholdType: 'DAGPENGER',
        }],
      }],
    },
    vurderBesteberegning: { skalHaBesteberegning: undefined },
    andelerForFaktaOmBeregning: [{
      belopReadOnly: 30000.00,
      inntektskategori: 'ARBEIDSTAKER',
      aktivitetStatus: 'AT',
      visningsnavn: 'BEDRIFT AS (910909088)',
      arbeidsforhold: {
        arbeidsgiverNavn: 'BEDRIFT AS',
        arbeidsgiverId: '910909088',
        arbeidsgiverIdent: '910909088',
        startdato: '2019-02-03',
        opphoersdato: '2020-02-03',
        arbeidsforholdType: 'ARBEID',
        belopFraInntektsmeldingPrMnd: 30000.00,
        organisasjonstype: 'VIRKSOMHET',
      },
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
    }],
    vurderMilitaer: { harMilitaer: undefined },
  },
  hjemmel: '-',
  årsinntektVisningstall: 0,
  dekningsgrad: 100,
  erOverstyrtInntekt: false,
  periode: {
    fom: '2022-03-02',
    tom: '2022-04-30',
  },
} as Beregningsgrunnlag;

export const aksjonspunkt = [
  {
    definisjon: '5058',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
    erAktivt: true,
  }];

export const avklaringsbehov = [
  {
    definisjon: '5058',
    status: 'OPPR',
    kanLoses: true,
  }] as BeregningAvklaringsbehov[];
