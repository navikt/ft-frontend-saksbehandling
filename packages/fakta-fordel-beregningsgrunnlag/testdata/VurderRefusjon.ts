import { BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

// @ts-expect-error Fiks
export const bgUtenDelvisRefusjon = {
  avklaringsbehov: [
    {
      definisjon: 'VURDER_REFUSJONSKRAV',
      status: 'OPPR',
      kanLoses: true,
    },
  ] as BeregningAvklaringsbehov[],
  skjaeringstidspunktBeregning: '2020-05-15',
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: null,
  skjæringstidspunkt: '2020-05-15',
  vilkårsperiodeFom: '2020-06-01',
  beregningsgrunnlagPeriode: [],
  refusjonTilVurdering: {
    andeler: [
      {
        aktivitetStatus: 'AT',
        tidligereUtbetalinger: [
          {
            fom: '2020-05-15',
            tom: '2020-05-31',
            erTildeltRefusjon: false,
          },
          {
            fom: '2020-06-01',
            tom: '2020-06-30',
            erTildeltRefusjon: true,
          },
          {
            fom: '2020-07-01',
            tom: '9999-12-31',
            erTildeltRefusjon: false,
          },
        ],
        nyttRefusjonskravFom: '2020-07-01',
        tidligsteMuligeRefusjonsdato: '2020-07-01',
        skalKunneFastsetteDelvisRefusjon: false,
        arbeidsgiver: {
          arbeidsgiverAktørId: '999999998',
        },
      },
    ],
  },
} as Beregningsgrunnlag;

// @ts-expect-error Fiks
export const bgMedDelvisRefusjon = {
  avklaringsbehov: [
    {
      definisjon: 'VURDER_REFUSJONSKRAV',
      status: 'OPPR',
      kanLoses: true,
    },
  ] as BeregningAvklaringsbehov[],
  skjaeringstidspunktBeregning: '2020-06-01',
  vilkårsperiodeFom: '2020-06-01',
  skjæringstidspunkt: '2020-06-01',
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: null,
  beregningsgrunnlagPeriode: [],
  refusjonTilVurdering: {
    andeler: [
      {
        aktivitetStatus: 'AT',
        tidligereUtbetalinger: [
          {
            fom: '2020-05-15',
            tom: '9999-12-31',
            erTildeltRefusjon: true,
          },
        ],
        nyttRefusjonskravFom: '2020-06-01',
        tidligsteMuligeRefusjonsdato: '2020-06-01',
        skalKunneFastsetteDelvisRefusjon: true,
        maksTillattDelvisRefusjonPrMnd: 12000,
        arbeidsgiver: {
          arbeidsgiverOrgnr: '999999999',
        },
      },
    ],
  },
} as Beregningsgrunnlag;

export const aksjonspunkt = [
  {
    definisjon: 'VURDER_REFUSJONSKRAV',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
  },
];
