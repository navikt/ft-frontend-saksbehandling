import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Syntetisk testdata for beregningsgrunnlag
 * Saksnummer: 352018813 (dev)
 * Beregningsgrunnlag for arbeidstaker i FP-sak med åpent AP.
 */
const beregningsgrunnlag: Beregningsgrunnlag = {
  vilkårsperiodeFom: '2024-10-16',
  avklaringsbehov: [
    {
      definisjon: 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN',
      status: 'OPPR',
      kanLoses: true,
      erTrukket: false,
    },
  ],
  skjaeringstidspunktBeregning: '2024-10-16',
  aktivitetStatus: ['SN'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2024-10-16',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 322156.77,
      bruttoPrAar: 322156.77,
      bruttoInkludertBortfaltNaturalytelsePrAar: 322156.77,
      periodeAarsaker: [],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'SN',
          beregningsperiodeFom: '2021-01-01',
          beregningsperiodeTom: '2023-12-31',
          beregnetPrAar: 322156.77,
          bruttoPrAar: 322156.77,
          andelsnr: 1,
          inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
          arbeidsforhold: {
            arbeidsforholdType: 'NÆRING',
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
          pgiSnitt: 322157,
          pgiVerdier: [
            {
              beløp: 266752,
              årstall: 2023,
            },
            {
              beløp: 225949,
              årstall: 2022,
            },
            {
              beløp: 473769,
              årstall: 2021,
            },
          ],
          næringer: [
            {
              orgnr: '905203975',
              erVarigEndret: true,
              erNyoppstartet: false,
              virksomhetType: 'ANNEN',
              begrunnelse: 'Næringen vel',
              endringsdato: '2024-09-02',
              oppstartsdato: '2016-10-05',
              opphørsdato: '9999-12-31',
              kanRegnskapsførerKontaktes: false,
              erNyIArbeidslivet: false,
              oppgittInntekt: 48,
            },
          ],
        },
      ],
    },
  ],
  sammenligningsgrunnlagPrStatus: [
    {
      sammenligningsgrunnlagFom: '2024-09-01',
      sammenligningsgrunnlagTom: '2024-09-30',
      rapportertPrAar: 48,
      avvikPromille: 999.8510042,
      avvikProsent: 99.98510042,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_SN',
      differanseBeregnet: 322109,
    },
  ],
  grunnbeløp: 124028,
  faktaOmBeregning: {
    saksopplysninger: {
      lønnsendringSaksopplysning: [],
      kortvarigeArbeidsforhold: [],
    },
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '2024-10-16',
          aktiviteter: [
            {
              fom: '2016-10-05',
              tom: '9999-12-31',
              arbeidsforholdType: 'NÆRING',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2024-10-16',
    },
    andelerForFaktaOmBeregning: [
      {
        fastsattBelop: 26846.3975,
        inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
        aktivitetStatus: 'SN',
        arbeidsforhold: {
          arbeidsforholdType: 'NÆRING',
        },
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
    ],
  },
  dekningsgrad: 80,
  ytelsesspesifiktGrunnlag: {
    ytelsetype: 'FP',
  },
  erOverstyrtInntekt: false,
  inntektsgrunnlag: {
    pgiGrunnlag: [
      {
        år: 2023,
        inntekter: [
          {
            pgiType: 'LØNN',
            beløp: 250000,
          },
        ],
      },
      {
        år: 2022,
        inntekter: [
          {
            pgiType: 'NÆRING',
            beløp: 100000,
          },
          {
            pgiType: 'LØNN',
            beløp: 100000,
          },
        ],
      },
      {
        år: 2021,
        inntekter: [
          {
            pgiType: 'NÆRING',
            beløp: 200000,
          },
          {
            pgiType: 'LØNN',
            beløp: 200000,
          },
        ],
      },
    ],
    sammenligningsgrunnlagInntekter: [],
    beregningsgrunnlagInntekter: [],
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

export const selvstendigNæringsdrivendeFP = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
