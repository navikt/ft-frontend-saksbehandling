import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Syntetisk testdata for beregningsgrunnlag
 * Saksnummer: 352034449 (dev)
 * Beregningsgrunnlag for ren frilanser i FP-sak med åpent AP (FASTSETT_BG_AT_FL).
 */
const beregningsgrunnlag: Beregningsgrunnlag = {
  vilkårsperiodeFom: '2026-07-26',
  avklaringsbehov: [
    {
      definisjon: 'FASTSETT_BG_AT_FL',
      status: 'OPPR',
      kanLoses: true,
      erTrukket: false,
    },
  ],
  skjaeringstidspunktBeregning: '2026-07-26',
  aktivitetStatus: ['FL'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2026-07-26',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 780000.0,
      bruttoPrAar: 780000.0,
      bruttoInkludertBortfaltNaturalytelsePrAar: 780000.0,
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'FL',
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsforholdType: 'FRILANS',
          },
          beregnetPrAar: 780000.0,
          beregningsperiodeFom: '2026-04-01',
          beregningsperiodeTom: '2026-06-30',
          bruttoPrAar: 780000.0,
          erTilkommetAndel: false,
          fastsattAvSaksbehandler: false,
          inntektskategori: 'FRILANSER',
          lagtTilAvSaksbehandler: false,
          skalFastsetteGrunnlag: true,
        },
      ],
    },
  ],
  sammenligningsgrunnlagPrStatus: [
    {
      sammenligningsgrunnlagFom: '2025-07-01',
      sammenligningsgrunnlagTom: '2026-06-30',
      rapportertPrAar: 420000.0,
      avvikPromille: 857.1428571,
      avvikProsent: 85.71428571,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
      differanseBeregnet: 360000.0,
    },
  ],
  grunnbeløp: 136549.0,
  faktaOmBeregning: {
    saksopplysninger: {
      lønnsendringSaksopplysning: [],
      kortvarigeArbeidsforhold: [],
    },
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '2026-07-26',
          aktiviteter: [
            {
              fom: '2020-03-16',
              tom: '9999-12-31',
              arbeidsforholdType: 'FRILANS',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2026-07-26',
    },
    andelerForFaktaOmBeregning: [
      {
        aktivitetStatus: 'FL',
        andelsnr: 1,
        arbeidsforhold: {
          arbeidsforholdType: 'FRILANS',
        },
        belopReadOnly: 65000.0,
        fastsattBelop: 65000.0,
        inntektskategori: 'FRILANSER',
        lagtTilAvSaksbehandler: false,
        skalKunneEndreAktivitet: false,
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
    beregningsgrunnlagInntekter: [
      {
        fom: '2026-06-01',
        tom: '2026-06-30',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 85000.0 }],
      },
      {
        fom: '2026-05-01',
        tom: '2026-05-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 85000.0 }],
      },
      {
        fom: '2026-04-01',
        tom: '2026-04-30',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
    ],
    sammenligningsgrunnlagInntekter: [
      {
        fom: '2026-06-01',
        tom: '2026-06-30',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 85000.0 }],
      },
      {
        fom: '2026-05-01',
        tom: '2026-05-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 85000.0 }],
      },
      {
        fom: '2026-04-01',
        tom: '2026-04-30',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2026-03-01',
        tom: '2026-03-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2026-02-01',
        tom: '2026-02-28',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2026-01-01',
        tom: '2026-01-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2025-12-01',
        tom: '2025-12-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2025-11-01',
        tom: '2025-11-30',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2025-10-01',
        tom: '2025-10-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2025-08-01',
        tom: '2025-08-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
      },
      {
        fom: '2025-07-01',
        tom: '2025-07-31',
        inntekter: [{ inntektAktivitetType: 'FRILANSINNTEKT', beløp: 25000.0 }],
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
        fom: beregningsgrunnlag.skjaeringstidspunktBeregning,
        tom: '9999-12-31',
      },
      vilkarStatus: 'IKKE_VURDERT',
    },
  ],
};

export const frilansFP = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
