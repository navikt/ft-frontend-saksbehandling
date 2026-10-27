import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Saksnummer: 352035217 (dev).
 * Varig endret jordbruksnæring med mer enn 25 % avvik.
 */
const beregningsgrunnlag: Beregningsgrunnlag = {
  vilkårsperiodeFom: '2026-10-11',
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
      beregnetPrAar: 335775.46,
      beregningsgrunnlagPeriodeFom: '2026-10-11',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'SN',
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsforholdType: 'NÆRING',
          },
          beregnetPrAar: 335775.46,
          beregningsperiodeFom: '2023-01-01',
          beregningsperiodeTom: '2025-12-31',
          bruttoPrAar: 335775.46,
          erTilkommetAndel: false,
          fastsattAvSaksbehandler: false,
          inntektskategori: 'JORDBRUKER',
          lagtTilAvSaksbehandler: false,
          næringer: [
            {
              begrunnelse:
                'Her er det en tekst fra bruker som er skrevet inn i søknaden, ' +
                'som forklarer den varige endringen i virksomheten i de siste 4 årene. Mjau!',
              endringsdato: '2025-01-01',
              erNyIArbeidslivet: false,
              erNyoppstartet: false,
              erVarigEndret: true,
              kanRegnskapsførerKontaktes: false,
              oppgittInntekt: 750000,
              opphørsdato: '9999-12-31',
              oppstartsdato: '2020-01-01',
              orgnr: '999999999',
              virksomhetType: 'JORDBRUK_SKOGBRUK',
            },
          ],
          pgiSnitt: 335775,
          pgiVerdier: [
            {
              beløp: 319747,
              årstall: 2025,
            },
            {
              beløp: 335159,
              årstall: 2024,
            },
            {
              beløp: 352420,
              årstall: 2023,
            },
          ],
          skalFastsetteGrunnlag: true,
        },
      ],
      bruttoInkludertBortfaltNaturalytelsePrAar: 335775.46,
      bruttoPrAar: 335775.46,
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
        fastsattBelop: 27981.2883333333,
        inntektskategori: 'JORDBRUKER',
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
              fom: '2020-01-01',
              tom: '9999-12-31',
            },
          ],
          tom: '2026-10-11',
        },
      ],
      skjæringstidspunkt: '2026-10-11',
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
            beløp: 300000,
            pgiType: 'LØNN',
          },
        ],
        år: 2025,
      },
      {
        inntekter: [
          {
            beløp: 300001,
            pgiType: 'LØNN',
          },
        ],
        år: 2024,
      },
      {
        inntekter: [
          {
            beløp: 300002,
            pgiType: 'LØNN',
          },
        ],
        år: 2023,
      },
    ],
    sammenligningsgrunnlagInntekter: [],
  },
  sammenligningsgrunnlagPrStatus: [
    {
      avvikPromille: 1233.6355196,
      avvikProsent: 123.36355196,
      differanseBeregnet: -414225,
      rapportertPrAar: 750000,
      sammenligningsgrunnlagFom: '2025-01-01',
      sammenligningsgrunnlagTom: '2025-01-31',
      sammenligningsgrunnlagType: 'SAMMENLIGNING_SN',
    },
  ],
  skjaeringstidspunktBeregning: '2026-10-11',
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

export const selvstendigNæringsdrivendeFPVarigEndring = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
