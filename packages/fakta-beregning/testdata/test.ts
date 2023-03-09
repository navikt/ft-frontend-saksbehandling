import { Beregningsgrunnlag, Vilkar } from '@navikt/ft-types';

export const beregningsgrunnlag = [
  {
    avklaringsbehov: [
      {
        definisjon: {
          kode: 'VURDER_FAKTA_ATFL_SN',
          kodeNy: 'VURDER_FAKTA_ATFL_SN',
          kodeGammel: '5058',
          avklaringsbehovType: {
            kode: 'MANU',
            kodeverk: 'AVKLARINGSBEHOV_TYPE',
          },
          stegFunnet: {
            kode: 'KOFAKBER',
            kodeverk: 'BEREGNING_STEG',
          },
          kodeverk: 'AVKLARINGSBEHOV_DEF',
        },
        status: {
          kode: 'OPPR',
          kodeverk: 'AKSJONSPUNKT_STATUS',
        },
        kanLoses: true,
        erTrukket: false,
      },
    ],
    skjaeringstidspunktBeregning: '2022-02-07',
    skjæringstidspunkt: '2022-02-07',
    aktivitetStatus: [
      {
        kode: 'AT_FL',
        kodeverk: 'AKTIVITET_STATUS',
      },
    ],
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2022-02-07',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        beregnetPrAar: 0,
        bruttoPrAar: 0,
        bruttoInkludertBortfaltNaturalytelsePrAar: 0,
        periodeAarsaker: [],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            dtoType: 'GENERELL',
            aktivitetStatus: {
              kode: 'AT',
              kodeverk: 'AKTIVITET_STATUS',
            },
            beregningsperiodeFom: '2021-11-01',
            beregningsperiodeTom: '2022-01-31',
            andelsnr: 1,
            inntektskategori: {
              kode: 'ARBEIDSTAKER',
              kodeverk: 'INNTEKTSKATEGORI',
            },
            arbeidsforhold: {
              arbeidsgiverIdent: '995428563',
              startdato: '2018-02-01',
              opphoersdato: '2022-12-31',
              arbeidsforholdType: {
                kode: 'ARBEID',
                kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
              },
              belopFraInntektsmeldingPrMnd: 53125.0,
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: false,
          },
          {
            dtoType: 'FL',
            aktivitetStatus: {
              kode: 'FL',
              kodeverk: 'AKTIVITET_STATUS',
            },
            beregningsperiodeFom: '2021-11-01',
            beregningsperiodeTom: '2022-01-31',
            andelsnr: 2,
            inntektskategori: {
              kode: 'FRILANSER',
              kodeverk: 'INNTEKTSKATEGORI',
            },
            arbeidsforhold: {
              arbeidsforholdType: {
                kode: 'FRILANS',
                kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
              },
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: false,
          },
        ],
      },
    ],
    sammenligningsgrunnlagPrStatus: [],
    halvG: 53199.5,
    grunnbeløp: 106399.0,
    faktaOmBeregning: {
      saksopplysninger: {
        arbeidsforholdMedLønnsendring: [],
        kortvarigeArbeidsforhold: [],
      },
      frilansAndel: {
        andelsnr: 2,
        arbeidsforhold: {
          arbeidsforholdType: {
            kode: 'FRILANS',
            kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
          },
        },
        inntektskategori: {
          kode: 'FRILANSER',
          kodeverk: 'INNTEKTSKATEGORI',
        },
        lagtTilAvSaksbehandler: false,
        fastsattAvSaksbehandler: false,
        andelIArbeid: [],
      },
      faktaOmBeregningTilfeller: [
        {
          kode: 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON',
          kodeverk: 'FAKTA_OM_BEREGNING_TILFELLE',
        },
      ],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [
        {
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsgiverIdent: '995428563',
            startdato: '2018-02-01',
            opphoersdato: '2022-12-31',
            arbeidsforholdType: {
              kode: 'ARBEID',
              kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
            },
          },
          inntektskategori: {
            kode: 'ARBEIDSTAKER',
            kodeverk: 'INNTEKTSKATEGORI',
          },
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [],
          inntektPrMnd: 53125.0,
        },
      ],
      avklarAktiviteter: {
        aktiviteterTomDatoMapping: [
          {
            tom: '2022-02-07',
            aktiviteter: [
              {
                arbeidsgiverIdent: '995428563',
                fom: '2018-02-01',
                tom: '2022-12-31',
                arbeidsforholdType: {
                  kode: 'ARBEID',
                  kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
                },
              },
              {
                fom: '2021-01-01',
                tom: '9999-12-31',
                arbeidsforholdType: {
                  kode: 'FRILANS',
                  kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
                },
              },
            ],
          },
        ],
        skjæringstidspunkt: '2022-02-07',
      },
      andelerForFaktaOmBeregning: [
        {
          belopReadOnly: 53125.0,
          inntektskategori: {
            kode: 'ARBEIDSTAKER',
            kodeverk: 'INNTEKTSKATEGORI',
          },
          aktivitetStatus: {
            kode: 'AT',
            kodeverk: 'AKTIVITET_STATUS',
          },
          refusjonskrav: 53125.0,
          arbeidsforhold: {
            arbeidsgiverIdent: '995428563',
            startdato: '2018-02-01',
            opphoersdato: '2022-12-31',
            arbeidsforholdType: {
              kode: 'ARBEID',
              kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
            },
            belopFraInntektsmeldingPrMnd: 53125.0,
          },
          andelsnr: 1,
          skalKunneEndreAktivitet: false,
          lagtTilAvSaksbehandler: false,
        },
        {
          inntektskategori: {
            kode: 'FRILANSER',
            kodeverk: 'INNTEKTSKATEGORI',
          },
          aktivitetStatus: {
            kode: 'FL',
            kodeverk: 'AKTIVITET_STATUS',
          },
          arbeidsforhold: {
            arbeidsforholdType: {
              kode: 'FRILANS',
              kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
            },
          },
          andelsnr: 2,
          skalKunneEndreAktivitet: false,
          lagtTilAvSaksbehandler: false,
        },
      ],
      vurderMilitaer: {},
    },
    hjemmel: {
      kode: '-',
      kodeverk: 'BG_HJEMMEL',
    },
    dekningsgrad: 100,
    ytelsesspesifiktGrunnlag: {
      ytelsetype: 'OMP',
      skalAvviksvurdere: true,
    },
    erOverstyrtInntekt: false,
    vilkårsperiodeFom: '2022-02-07',
    forlengelseperioder: [],
  },
  {
    avklaringsbehov: [
      {
        definisjon: {
          kode: 'VURDER_FAKTA_ATFL_SN',
          kodeNy: 'VURDER_FAKTA_ATFL_SN',
          kodeGammel: '5058',
          avklaringsbehovType: {
            kode: 'MANU',
            kodeverk: 'AVKLARINGSBEHOV_TYPE',
          },
          stegFunnet: {
            kode: 'KOFAKBER',
            kodeverk: 'BEREGNING_STEG',
          },
          kodeverk: 'AVKLARINGSBEHOV_DEF',
        },
        status: {
          kode: 'OPPR',
          kodeverk: 'AKSJONSPUNKT_STATUS',
        },
        kanLoses: true,
        erTrukket: false,
      },
    ],
    skjaeringstidspunktBeregning: '2022-03-08',
    skjæringstidspunkt: '2022-03-08',
    aktivitetStatus: [
      {
        kode: 'AT_FL',
        kodeverk: 'AKTIVITET_STATUS',
      },
    ],
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2022-03-08',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        beregnetPrAar: 0,
        bruttoPrAar: 0,
        bruttoInkludertBortfaltNaturalytelsePrAar: 0,
        periodeAarsaker: [],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            dtoType: 'GENERELL',
            aktivitetStatus: {
              kode: 'AT',
              kodeverk: 'AKTIVITET_STATUS',
            },
            beregningsperiodeFom: '2021-12-01',
            beregningsperiodeTom: '2022-02-28',
            andelsnr: 1,
            inntektskategori: {
              kode: 'ARBEIDSTAKER',
              kodeverk: 'INNTEKTSKATEGORI',
            },
            arbeidsforhold: {
              arbeidsgiverIdent: '995428563',
              startdato: '2018-02-01',
              opphoersdato: '2022-12-31',
              arbeidsforholdType: {
                kode: 'ARBEID',
                kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
              },
              belopFraInntektsmeldingPrMnd: 53125.0,
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: false,
          },
          {
            dtoType: 'FL',
            aktivitetStatus: {
              kode: 'FL',
              kodeverk: 'AKTIVITET_STATUS',
            },
            beregningsperiodeFom: '2021-12-01',
            beregningsperiodeTom: '2022-02-28',
            andelsnr: 2,
            inntektskategori: {
              kode: 'FRILANSER',
              kodeverk: 'INNTEKTSKATEGORI',
            },
            arbeidsforhold: {
              arbeidsforholdType: {
                kode: 'FRILANS',
                kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
              },
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: false,
          },
        ],
      },
    ],
    sammenligningsgrunnlagPrStatus: [],
    halvG: 53199.5,
    grunnbeløp: 106399.0,
    faktaOmBeregning: {
      saksopplysninger: {
        arbeidsforholdMedLønnsendring: [],
        kortvarigeArbeidsforhold: [],
      },
      frilansAndel: {
        andelsnr: 2,
        arbeidsforhold: {
          arbeidsforholdType: {
            kode: 'FRILANS',
            kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
          },
        },
        inntektskategori: {
          kode: 'FRILANSER',
          kodeverk: 'INNTEKTSKATEGORI',
        },
        lagtTilAvSaksbehandler: false,
        fastsattAvSaksbehandler: false,
        andelIArbeid: [],
      },
      faktaOmBeregningTilfeller: [
        {
          kode: 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON',
          kodeverk: 'FAKTA_OM_BEREGNING_TILFELLE',
        },
      ],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [
        {
          andelsnr: 1,
          arbeidsforhold: {
            arbeidsgiverIdent: '995428563',
            startdato: '2018-02-01',
            opphoersdato: '2022-12-31',
            arbeidsforholdType: {
              kode: 'ARBEID',
              kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
            },
          },
          inntektskategori: {
            kode: 'ARBEIDSTAKER',
            kodeverk: 'INNTEKTSKATEGORI',
          },
          lagtTilAvSaksbehandler: false,
          fastsattAvSaksbehandler: false,
          andelIArbeid: [],
          inntektPrMnd: 53125.0,
        },
      ],
      avklarAktiviteter: {
        aktiviteterTomDatoMapping: [
          {
            tom: '2022-03-08',
            aktiviteter: [
              {
                arbeidsgiverIdent: '995428563',
                fom: '2018-02-01',
                tom: '2022-12-31',
                arbeidsforholdType: {
                  kode: 'ARBEID',
                  kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
                },
              },
              {
                fom: '2021-01-01',
                tom: '9999-12-31',
                arbeidsforholdType: {
                  kode: 'FRILANS',
                  kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
                },
              },
            ],
          },
        ],
        skjæringstidspunkt: '2022-03-08',
      },
      andelerForFaktaOmBeregning: [
        {
          belopReadOnly: 53125.0,
          inntektskategori: {
            kode: 'ARBEIDSTAKER',
            kodeverk: 'INNTEKTSKATEGORI',
          },
          aktivitetStatus: {
            kode: 'AT',
            kodeverk: 'AKTIVITET_STATUS',
          },
          refusjonskrav: 53125.0,
          arbeidsforhold: {
            arbeidsgiverIdent: '995428563',
            startdato: '2018-02-01',
            opphoersdato: '2022-12-31',
            arbeidsforholdType: {
              kode: 'ARBEID',
              kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
            },
            belopFraInntektsmeldingPrMnd: 53125.0,
          },
          andelsnr: 1,
          skalKunneEndreAktivitet: false,
          lagtTilAvSaksbehandler: false,
        },
        {
          inntektskategori: {
            kode: 'FRILANSER',
            kodeverk: 'INNTEKTSKATEGORI',
          },
          aktivitetStatus: {
            kode: 'FL',
            kodeverk: 'AKTIVITET_STATUS',
          },
          arbeidsforhold: {
            arbeidsforholdType: {
              kode: 'FRILANS',
              kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
            },
          },
          andelsnr: 2,
          skalKunneEndreAktivitet: false,
          lagtTilAvSaksbehandler: false,
        },
      ],
      vurderMilitaer: {},
    },
    hjemmel: {
      kode: '-',
      kodeverk: 'BG_HJEMMEL',
    },
    dekningsgrad: 100,
    ytelsesspesifiktGrunnlag: {
      ytelsetype: 'OMP',
      skalAvviksvurdere: true,
    },
    erOverstyrtInntekt: false,
    vilkårsperiodeFom: '2022-03-08',
    forlengelseperioder: [],
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
        fom: '2022-02-07',
        tom: '2022-02-07',
      },
      vilkarStatus: 'IKKE_VURDERT',
    },
    {
      vurderesIBehandlingen: true,
      merknadParametere: { name: '' },
      periode: {
        fom: '2022-03-08',
        tom: '2022-03-08',
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
