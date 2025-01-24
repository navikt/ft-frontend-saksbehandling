import { Beregningsgrunnlag, BeregningsgrunnlagAndel, Vilkår } from '@navikt/ft-types';

export const beregningsgrunnlag = [
  {
    skjaeringstidspunktBeregning: '2022-01-13',
    aktivitetStatus: ['AT'],
    avklaringsbehov: [
      {
        definisjon: 'AVKLAR_AKTIVITETER',
        status: 'OPPR',
        kanLoses: true,
      },
    ],
    vilkårsperiodeFom: '2022-01-13',
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2020-01-13',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        beregnetPrAar: 0,
        bruttoPrAar: 0,
        bruttoInkludertBortfaltNaturalytelsePrAar: 0,
        avkortetPrAar: 0,
        periodeAarsaker: [],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'AT',
            beregningsperiodeFom: '2019-10-01',
            beregningsperiodeTom: '2019-12-31',
            andelsnr: 1,
            inntektskategori: 'ARBEIDSTAKER',
            arbeidsforhold: {
              arbeidsgiverIdent: '910909088',
              startdato: '2019-02-03',
              opphoersdato: '2020-04-01',
              arbeidsforholdType: 'ARBEID',
              belopFraInntektsmeldingPrMnd: 30000.0,
              organisasjonstype: 'VIRKSOMHET',
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            belopPrMndEtterAOrdningen: 10000.0,
            belopPrAarEtterAOrdningen: 120000.0,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: false,
          } as BeregningsgrunnlagAndel,
        ],
      },
    ],
    sammenligningsgrunnlagPrStatus: [],
    grunnbeløp: 99858,
    faktaOmBeregning: {
      faktaOmBeregningTilfeller: [],
      avklarAktiviteter: {
        skjæringstidspunkt: '2020-01-13',
        aktiviteterTomDatoMapping: [
          {
            tom: '2020-01-13',
            aktiviteter: [
              {
                arbeidsgiverIdent: '910909088',
                fom: '2019-02-03',
                tom: '2020-04-01',
                arbeidsforholdType: 'ARBEID',
                skalBrukes: true,
              },
              {
                fom: '2019-02-03',
                tom: '2020-04-01',
                arbeidsforholdType: 'AAP',
              },
            ],
          },
        ],
      },
      vurderBesteberegning: { skalHaBesteberegning: undefined },
      andelerForFaktaOmBeregning: [
        {
          belopReadOnly: 30000.0,
          inntektskategori: 'ARBEIDSTAKER',
          aktivitetStatus: 'AT',
          arbeidsforhold: {
            arbeidsgiverIdent: '910909088',
            startdato: '2019-02-03',
            opphoersdato: '2020-02-03',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 30000.0,
            organisasjonstype: 'VIRKSOMHET',
          },
          andelsnr: 1,
          skalKunneEndreAktivitet: false,
          lagtTilAvSaksbehandler: false,
        },
      ],
    },
    dekningsgrad: 100,
    erOverstyrtInntekt: false,
  },
] as Beregningsgrunnlag[];

export const vilkar: Vilkår = {
  vilkarType: '',
  overstyrbar: true,
  perioder: [
    {
      vurderesIBehandlingen: true,
      merknadParametere: { name: '' },
      periode: {
        fom: '2022-01-13',
        tom: '2022-01-20',
      },
      vilkarStatus: 'IKKE_VURDERT',
    },
  ],
};

export const aksjonspunkt = [
  {
    definisjon: 'AVKLAR_AKTIVITETER',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
  },
];
