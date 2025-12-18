import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Syntetisk testdata for beregningsgrunnlag
 * Saksnummer: 352028404 (dev)
 * Beregningsgrunnlag for arbeidstaker i FP-sak med åpent AP.
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
  aktivitetStatus: ['AT'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2025-10-31',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 360000,
      bruttoPrAar: 360000,
      bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
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
      sammenligningsgrunnlagFom: '2024-10-01',
      sammenligningsgrunnlagTom: '2025-09-30',
      rapportertPrAar: 120000,
      avvikPromille: 2000,
      avvikProsent: 200,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
      differanseBeregnet: 240000,
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
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
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
        ],
      },
    ],
    beregningsgrunnlagInntekter: [
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 30000,
            arbeidsgiverIdent: '222222222',
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

export const arbeidstakerFPEttArbeidsforhold = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
