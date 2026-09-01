import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Syntetisk testdata for beregningsgrunnlag
 * Kombinert arbeidstaker (AT) og frilanser (FL) i FP-sak med åpent AP (FASTSETT_BG_AT_FL).
 *
 * Tallgrunnlag:
 * - Arbeidstaker: 30 000/mnd → 360 000/år (inntektsmelding 30 000/mnd)
 * - Frilanser:    25 000/mnd → 300 000/år
 * - Periode brutto: 660 000/år
 * - Sammenligning (12 mnd): AT 30 000/mnd + FL 10 000/mnd = 480 000/år rapportert
 *   → differanse 180 000, avvik 37,5 %
 */
const beregningsgrunnlag: Beregningsgrunnlag = {
  vilkårsperiodeFom: '2025-10-31',
  avklaringsbehov: [
    {
      definisjon: 'FASTSETT_BG_AT_FL',
      status: 'OPPR',
      kanLoses: true,
      erTrukket: false,
    },
  ],
  skjaeringstidspunktBeregning: '2025-10-31',
  aktivitetStatus: ['AT', 'FL'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2025-10-31',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 660000,
      bruttoPrAar: 660000,
      bruttoInkludertBortfaltNaturalytelsePrAar: 660000,
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2025-07-01',
          beregningsperiodeTom: '2025-09-30',
          beregnetPrAar: 360000,
          bruttoPrAar: 360000,
          andelsnr: 1,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '222222222',
            startdato: '2010-10-01',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 30000,
            stillingsprosenter: [
              {
                prosent: 100,
                fomDato: '2010-10-01',
                tomDato: '9999-12-31',
              },
            ],
            sisteLønnsendringsdato: '2010-10-01',
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
        {
          aktivitetStatus: 'FL',
          andelsnr: 2,
          arbeidsforhold: {
            arbeidsforholdType: 'FRILANS',
          },
          beregningsperiodeFom: '2025-07-01',
          beregningsperiodeTom: '2025-09-30',
          beregnetPrAar: 300000,
          bruttoPrAar: 300000,
          inntektskategori: 'FRILANSER',
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          fastsattAvSaksbehandler: false,
          skalFastsetteGrunnlag: true,
        },
      ],
    },
  ],
  sammenligningsgrunnlagPrStatus: [
    {
      sammenligningsgrunnlagFom: '2024-10-01',
      sammenligningsgrunnlagTom: '2025-09-30',
      rapportertPrAar: 480000,
      avvikPromille: 375,
      avvikProsent: 37.5,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
      differanseBeregnet: 180000,
    },
  ],
  grunnbeløp: 130160,
  faktaOmBeregning: {
    saksopplysninger: {
      lønnsendringSaksopplysning: [],
      kortvarigeArbeidsforhold: [],
    },
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '2025-10-31',
          aktiviteter: [
            {
              arbeidsgiverIdent: '222222222',
              fom: '2010-10-01',
              tom: '9999-12-31',
              arbeidsforholdType: 'ARBEID',
            },
            {
              fom: '2020-03-16',
              tom: '9999-12-31',
              arbeidsforholdType: 'FRILANS',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2025-10-31',
    },
    andelerForFaktaOmBeregning: [
      {
        belopReadOnly: 30000,
        fastsattBelop: 30000,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        refusjonskrav: 30000,
        arbeidsforhold: {
          arbeidsgiverIdent: '222222222',
          startdato: '2010-10-01',
          arbeidsforholdType: 'ARBEID',
          belopFraInntektsmeldingPrMnd: 30000,
        },
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
      {
        belopReadOnly: 25000,
        fastsattBelop: 25000,
        inntektskategori: 'FRILANSER',
        aktivitetStatus: 'FL',
        arbeidsforhold: {
          arbeidsforholdType: 'FRILANS',
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
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-08-01',
        tom: '2025-08-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-07-01',
        tom: '2025-07-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-06-01',
        tom: '2025-06-30',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-05-01',
        tom: '2025-05-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-04-01',
        tom: '2025-04-30',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-03-01',
        tom: '2025-03-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-02-01',
        tom: '2025-02-28',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2025-01-01',
        tom: '2025-01-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2024-12-01',
        tom: '2024-12-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2024-11-01',
        tom: '2024-11-30',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
      {
        fom: '2024-10-01',
        tom: '2024-10-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 10000 },
        ],
      },
    ],
    beregningsgrunnlagInntekter: [
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000 },
        ],
      },
      {
        fom: '2025-08-01',
        tom: '2025-08-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000 },
        ],
      },
      {
        fom: '2025-07-01',
        tom: '2025-07-31',
        inntekter: [
          { inntektAktivitetType: 'ARBEIDSTAKERINNTEKT', beløp: 30000, arbeidsgiverIdent: '222222222' },
          { inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000 },
        ],
      },
    ],
  },
};

const beregningsgrunnlagsvilkår: Vilkår = {
  vilkarType: 'FP_VK_41',
  overstyrbar: true,
  perioder: [
    {
      vurderesIBehandlingen: true,
      merknadParametere: {},
      periode: {
        fom: '2025-10-31',
        tom: '9999-12-31',
      },
      vilkarStatus: 'IKKE_VURDERT',
    },
  ],
};

export const arbeidstakerOgFrilansFP = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
