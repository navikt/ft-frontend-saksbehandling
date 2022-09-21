import { Beregningsgrunnlag, BeregningsgrunnlagAndel, Vilkar } from '@navikt/ft-types';

export const beregningsgrunnlag = [
  {
    skjaeringstidspunktBeregning: '2022-01-13',
    aktivitetStatus: ['AT'],
    avklaringsbehov: [
      {
        definisjon: '5058',
        status: 'OPPR',
        kanLoses: true,
      },
    ],
    vilkårsperiodeFom: '2022-01-13',
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2020-01-13',
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
              arbeidsgiverNavn: 'BEDRIFT AS',
              arbeidsgiverId: '910909088',
              arbeidsgiverIdent: '910909088',
              startdato: '2019-02-03',
              opphoersdato: '2020-02-03',
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
      faktaOmBeregningTilfeller: ['VURDER_BESTEBEREGNING'],
      avklarAktiviteter: {
        skjæringstidspunkt: '2020-01-13',
        aktiviteterTomDatoMapping: [
          {
            tom: '2020-01-13',
            aktiviteter: [
              {
                arbeidsgiverIdent: '910909088',
                fom: '2019-02-03',
                tom: '2020-02-14',
                arbeidsforholdType: 'ARBEID',
                skalBrukes: true,
              },
            ],
          },
          {
            tom: '2019-11-12',
            aktiviteter: [
              {
                fom: '2019-02-03',
                tom: '2019-11-11',
                arbeidsforholdType: 'DAGPENGER',
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
            arbeidsgiverNavn: 'BEDRIFT AS',
            arbeidsgiverId: '910909088',
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
      vurderMilitaer: { harMilitaer: undefined },
    },
    dekningsgrad: 100,
    erOverstyrtInntekt: false,
  },
  {
    skjaeringstidspunktBeregning: '2020-02-13',
    aktivitetStatus: ['AT'],
    avklaringsbehov: [],
    vilkårsperiodeFom: '2022-02-13',
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2020-02-13',
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
              arbeidsgiverNavn: 'BEDRIFT AS',
              arbeidsgiverId: '910909088',
              arbeidsgiverIdent: '910909088',
              startdato: '2019-02-03',
              opphoersdato: '2020-02-03',
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
      faktaOmBeregningTilfeller: ['VURDER_BESTEBEREGNING'],
      avklarAktiviteter: {
        skjæringstidspunkt: '2020-02-13',
        aktiviteterTomDatoMapping: [
          {
            tom: '2020-02-13',
            aktiviteter: [
              {
                arbeidsgiverIdent: '910909088',
                fom: '2019-02-03',
                tom: '2020-02-14',
                arbeidsforholdType: 'ARBEID',
                skalBrukes: true,
              },
            ],
          },
          {
            tom: '2019-11-12',
            aktiviteter: [
              {
                fom: '2019-02-03',
                tom: '2019-11-11',
                arbeidsforholdType: 'DAGPENGER',
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
            arbeidsgiverNavn: 'BEDRIFT AS',
            arbeidsgiverId: '910909088',
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
      vurderMilitaer: { harMilitaer: undefined },
    },
    dekningsgrad: 100,
    erOverstyrtInntekt: false,
  },
] as Beregningsgrunnlag[];

export const vilkar: Vilkar = {
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
    {
      vurderesIBehandlingen: true,
      merknadParametere: { name: '' },
      periode: {
        fom: '2022-02-13',
        tom: '2022-02-20',
      },
      vilkarStatus: 'IKKE_VURDERT',
    },
  ],
};

export const aksjonspunkt = [
  {
    definisjon: '5058',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
    erAktivt: true,
  },
];
