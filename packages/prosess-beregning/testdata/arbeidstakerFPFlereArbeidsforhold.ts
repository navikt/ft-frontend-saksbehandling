import type { Beregningsgrunnlag } from '@navikt/ft-types';

/**
 * Syntetisk testdata for beregningsgrunnlag
 * Saksnummer: 352029012 (dev)
 * Beregningsgrunnlag for arbeidstaker i FP-sak med åpent AP.
 */
export const arbeidstakerFPFlereArbeidsforhold: Beregningsgrunnlag = {
  avklaringsbehov: [
    {
      definisjon: 'FASTSETT_BG_AT_FL',
      status: 'OPPR',
      kanLoses: true,
      erTrukket: false,
    },
  ],
  skjaeringstidspunktBeregning: '2025-12-03',
  aktivitetStatus: ['AT'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2025-12-03',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 1080000,
      bruttoPrAar: 1080000,
      bruttoInkludertBortfaltNaturalytelsePrAar: 1080000,
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2025-09-01',
          beregningsperiodeTom: '2025-11-30',
          beregnetPrAar: 600000,
          bruttoPrAar: 600000,
          andelsnr: 1,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '444444444',
            startdato: '2005-12-15',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 50000,
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
        {
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2025-09-01',
          beregningsperiodeTom: '2025-11-30',
          beregnetPrAar: 480000,
          bruttoPrAar: 480000,
          andelsnr: 2,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '222222222',
            startdato: '2010-10-01',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 40000,
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
      ],
    },
  ],
  sammenligningsgrunnlagPrStatus: [
    {
      sammenligningsgrunnlagFom: '2024-12-01',
      sammenligningsgrunnlagTom: '2025-11-30',
      rapportertPrAar: 268054,
      avvikPromille: 3029.038925,
      avvikProsent: 302.9038925,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
      differanseBeregnet: 811946,
    },
  ],
  grunnbeløp: 130160,
  faktaOmBeregning: {
    saksopplysninger: {
      // @ts-expect-error typen er ufullstendig
      arbeidsforholdMedLønnsendring: [],
      lønnsendringSaksopplysning: [],
      kortvarigeArbeidsforhold: [],
    },
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '2025-12-03',
          aktiviteter: [
            {
              arbeidsgiverIdent: '444444444',
              fom: '2005-12-15',
              tom: '9999-12-31',
              arbeidsforholdType: 'ARBEID',
            },
            {
              arbeidsgiverIdent: '222222222',
              fom: '2010-10-01',
              tom: '9999-12-31',
              arbeidsforholdType: 'ARBEID',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2025-12-03',
    },
    andelerForFaktaOmBeregning: [
      {
        belopReadOnly: 50000,
        fastsattBelop: 50000,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        refusjonskrav: 50000,
        arbeidsforhold: {
          arbeidsgiverIdent: '444444444',
          startdato: '2005-12-15',
          arbeidsforholdType: 'ARBEID',
          belopFraInntektsmeldingPrMnd: 50000,
        },
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
      {
        belopReadOnly: 40000,
        fastsattBelop: 40000,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        refusjonskrav: 40000,
        arbeidsforhold: {
          arbeidsgiverIdent: '222222222',
          startdato: '2010-10-01',
          arbeidsforholdType: 'ARBEID',
          belopFraInntektsmeldingPrMnd: 40000,
        },
        andelsnr: 2,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
    ],
  },
  dekningsgrad: 100,
  ytelsesspesifiktGrunnlag: {
    ytelsetype: 'FP',
  },
  erOverstyrtInntekt: false,
  inntektsgrunnlag: {
    pgiGrunnlag: [],
    sammenligningsgrunnlagInntekter: [
      {
        fom: '2025-03-01',
        tom: '2025-03-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 5459,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-02-01',
        tom: '2025-02-28',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 5459,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-11-01',
        tom: '2025-11-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 7800,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-10-01',
        tom: '2025-10-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 23976,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 0,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-08-01',
        tom: '2025-08-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 17680,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-07-01',
        tom: '2025-07-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 17680,
            arbeidsgiverIdent: '444444444',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 5000,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-06-01',
        tom: '2025-06-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 5000,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
    ],
    beregningsgrunnlagInntekter: [
      {
        fom: '2025-11-01',
        tom: '2025-11-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 7800,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-10-01',
        tom: '2025-10-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 23976,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 0,
            arbeidsgiverIdent: '444444444',
          },
        ],
      },
    ],
  },
};
