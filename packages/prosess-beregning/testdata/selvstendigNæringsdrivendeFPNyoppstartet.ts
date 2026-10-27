import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Saksnummer: 352035128 (dev).
 * Nyoppstartet næring med mer enn 25 % avvik.
 */
const beregningsgrunnlag: Beregningsgrunnlag = {
  vilkårsperiodeFom: '2026-11-02',
  aktivitetStatus: ['SN'],
  avklaringsbehov: [
    {
      definisjon: 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN',
      status: 'OPPR',
      kanLoses: true,
      erTrukket: false,
    },
  ],
  beregningsgrunnlagPeriode: [
    {
      beregnetPrAar: 124346.04,
      beregningsgrunnlagPeriodeFom: '2026-11-02',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'SN',
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsforholdType: 'NÆRING',
          },
          beregnetPrAar: 124346.04,
          beregningsperiodeFom: '2023-01-01',
          beregningsperiodeTom: '2025-12-31',
          bruttoPrAar: 124346.04,
          erTilkommetAndel: false,
          fastsattAvSaksbehandler: false,
          inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
          lagtTilAvSaksbehandler: false,
          næringer: [
            {
              erNyIArbeidslivet: false,
              erNyoppstartet: true,
              erVarigEndret: false,
              kanRegnskapsførerKontaktes: false,
              oppgittInntekt: 900000,
              opphørsdato: '9999-12-31',
              oppstartsdato: '2025-01-01',
              orgnr: '999999999',
              virksomhetType: 'ANNEN',
            },
          ],
          pgiSnitt: 124346,
          pgiVerdier: [
            {
              beløp: 373038,
              årstall: 2025,
            },
            {
              beløp: 0,
              årstall: 2024,
            },
            {
              beløp: 0,
              årstall: 2023,
            },
          ],
          skalFastsetteGrunnlag: true,
        },
      ],
      bruttoInkludertBortfaltNaturalytelsePrAar: 124346.04,
      bruttoPrAar: 124346.04,
      periodeAarsaker: [],
    },
  ],
  dekningsgrad: 100,
  erOverstyrtInntekt: false,
  faktaOmBeregning: {
    andelerForFaktaOmBeregning: [
      {
        aktivitetStatus: 'SN',
        andelsnr: 1,
        arbeidsforhold: {
          arbeidsforholdType: 'NÆRING',
        },
        fastsattBelop: 10362.17,
        inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
        lagtTilAvSaksbehandler: false,
        skalKunneEndreAktivitet: false,
      },
    ],
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          aktiviteter: [
            {
              arbeidsforholdType: 'NÆRING',
              fom: '2025-01-01',
              tom: '9999-12-31',
            },
          ],
          tom: '2026-11-02',
        },
      ],
      skjæringstidspunkt: '2026-11-02',
    },
    saksopplysninger: {
      kortvarigeArbeidsforhold: [],
      lønnsendringSaksopplysning: [],
    },
  },
  grunnbeløp: 136549,
  inntektsgrunnlag: {
    beregningsgrunnlagInntekter: [],
    pgiGrunnlag: [
      {
        inntekter: [
          {
            beløp: 350000,
            pgiType: 'LØNN',
          },
        ],
        år: 2025,
      },
    ],
    sammenligningsgrunnlagInntekter: [],
  },
  sammenligningsgrunnlagPrStatus: [
    {
      avvikPromille: 6237.8664698,
      avvikProsent: 623.78664698,
      differanseBeregnet: -775654,
      rapportertPrAar: 900000,
      sammenligningsgrunnlagFom: '2025-01-01',
      sammenligningsgrunnlagTom: '2025-01-31',
      sammenligningsgrunnlagType: 'SAMMENLIGNING_SN',
    },
  ],
  skjaeringstidspunktBeregning: '2026-11-02',
  ytelsesspesifiktGrunnlag: {
    ytelsetype: 'FP',
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

export const selvstendigNæringsdrivendeFPNyoppstartet = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
