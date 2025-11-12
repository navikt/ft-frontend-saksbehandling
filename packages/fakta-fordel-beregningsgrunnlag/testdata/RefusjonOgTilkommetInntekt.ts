const beregningsgrunnlag = [
  {
    avklaringsbehov: [
      {
        definisjon: 'VURDER_REFUSJONSKRAV',
        status: 'OPPR',
        kanLoses: true,
        erTrukket: false,
      },
    ],
    skjaeringstidspunktBeregning: '2022-03-07',
    skjæringstidspunkt: '2022-03-07',
    aktivitetStatus: [
      'AT_FL',
    ],
    beregningsgrunnlagPeriode: {
      beregningsgrunnlagPeriodeFom: '2022-03-07',
      beregningsgrunnlagPeriodeTom: '2022-03-11',
      beregnetPrAar: 600000,
      bruttoPrAar: 600000,
      bruttoInkludertBortfaltNaturalytelsePrAar: 600000,
      periodeAarsaker: [
        'ENDRING_I_AKTIVITETER_SØKT_FOR',
      ],
      beregningsgrunnlagPrStatusOgAndel: [
        {
          dtoType: 'GENERELL',
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2021-12-01',
          beregningsperiodeTom: '2022-02-28',
          beregnetPrAar: 600000,
          bruttoPrAar: 600000,
          andelsnr: 2,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '874652202',
            startdato: '2021-06-18',
            arbeidsforholdType: 'ARBEID',
            refusjonPrAar: 600000,
            belopFraInntektsmeldingPrMnd: 50000,
          },
          fastsattAvSaksbehandler: false,
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: false,
        },
        {
          dtoType: 'FL',
          aktivitetStatus: 'FL',
          beregningsperiodeFom: '2021-12-01',
          beregningsperiodeTom: '2022-02-28',
          beregnetPrAar: 0,
          bruttoPrAar: 0,
          andelsnr: 1,
          inntektskategori: 'FRILANSER',
          arbeidsforhold: {
            arbeidsforholdType: 'FRILANS',
          },
          fastsattAvSaksbehandler: false,
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: false,
        },
      ],
    },
    sammenligningsgrunnlagPrStatus: [
      {
        sammenligningsgrunnlagFom: '2021-03-01',
        sammenligningsgrunnlagTom: '2022-02-28',
        rapportertPrAar: 736939.96,
        avvikPromille: 185.8224108,
        avvikProsent: 18.58224108,
        sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
        differanseBeregnet: -136939.96,
      },
    ],
    halvG: 53199.5,
    grunnbeløp: 106399,
    faktaOmBeregning: null,
    hjemmel: 'F_9_9_8_40',
    dekningsgrad: 100,
    refusjonTilVurdering: {
      andeler: [
        {
          aktivitetStatus: 'AT',
          tidligereUtbetalinger: [
            {
              fom: '2022-03-07',
              tom: '2022-03-24',
              erTildeltRefusjon: false,
            },
            {
              fom: '2022-04-01',
              tom: '2022-04-15',
              erTildeltRefusjon: false,
            },
          ],
          nyttRefusjonskravFom: '2022-03-07',
          tidligsteMuligeRefusjonsdato: '2022-03-07',
          arbeidsgiver: {
            arbeidsgiverOrgnr: '874652202',
          },
          skalKunneFastsetteDelvisRefusjon: true,
          maksTillattDelvisRefusjonPrMnd: 1,
        },
      ],
    },
    erOverstyrtInntekt: false,
    vilkårsperiodeFom: '2022-03-07',
    inntektsgrunnlag: [],
    forlengelseperioder: [
      {
        fom: '2022-03-07',
        tom: '2022-04-17',
      },
    ],
  },
  {
    avklaringsbehov: [
      {
        definisjon: 'VURDER_NYTT_INNTKTSFRHLD',
        status: 'UTFO',
        kanLoses: false,
        erTrukket: false,
        begrunnelse: 'Enda en begrunnelse',
        vurdertAv: 'Saksbehandler',
        vurdertTidspunkt: '2025-01-01T12:00:00.000',
      },
    ],
    skjaeringstidspunktBeregning: '2023-06-22',
    skjæringstidspunkt: '2023-06-22',
    aktivitetStatus: [
      'AT_FL',
    ],
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2023-06-22',
        beregningsgrunnlagPeriodeTom: '2023-06-23',
        beregnetPrAar: 821600,
        bruttoPrAar: 780000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 780000,
        periodeAarsaker: [
          'ENDRING_I_AKTIVITETER_SØKT_FOR',
        ],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            dtoType: 'GENERELL',
            aktivitetStatus: 'AT',
            beregningsperiodeFom: '2023-03-01',
            beregningsperiodeTom: '2023-05-31',
            beregnetPrAar: 780000,
            overstyrtPrAar: 780000,
            bruttoPrAar: 780000,
            andelsnr: 2,
            inntektskategori: 'ARBEIDSTAKER',
            arbeidsforhold: {
              arbeidsgiverIdent: '874652202',
              startdato: '2021-06-18',
              arbeidsforholdType: 'ARBEID',
              belopFraInntektsmeldingPrMnd: 65000,
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
          },
          {
            dtoType: 'FL',
            aktivitetStatus: 'FL',
            beregningsperiodeFom: '2023-03-01',
            beregningsperiodeTom: '2023-05-31',
            beregnetPrAar: 41600,
            overstyrtPrAar: 0,
            bruttoPrAar: 0,
            andelsnr: 1,
            inntektskategori: 'FRILANSER',
            arbeidsforhold: {
              arbeidsforholdType: 'FRILANS',
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
          },
        ],
      },
      {
        beregningsgrunnlagPeriodeFom: '2023-06-24',
        beregningsgrunnlagPeriodeTom: '2023-06-25',
        beregnetPrAar: 821600,
        bruttoPrAar: 780000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 780000,
        periodeAarsaker: [
          'ENDRING_I_AKTIVITETER_SØKT_FOR',
        ],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            dtoType: 'GENERELL',
            aktivitetStatus: 'AT',
            beregningsperiodeFom: '2023-03-01',
            beregningsperiodeTom: '2023-05-31',
            beregnetPrAar: 780000,
            overstyrtPrAar: 780000,
            bruttoPrAar: 780000,
            andelsnr: 2,
            inntektskategori: 'ARBEIDSTAKER',
            arbeidsforhold: {
              arbeidsgiverIdent: '874652202',
              startdato: '2021-06-18',
              arbeidsforholdType: 'ARBEID',
              belopFraInntektsmeldingPrMnd: 65000,
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
          },
          {
            dtoType: 'FL',
            aktivitetStatus: 'FL',
            beregningsperiodeFom: '2023-03-01',
            beregningsperiodeTom: '2023-05-31',
            beregnetPrAar: 41600,
            overstyrtPrAar: 0,
            bruttoPrAar: 0,
            andelsnr: 1,
            inntektskategori: 'FRILANSER',
            arbeidsforhold: {
              arbeidsforholdType: 'FRILANS',
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
          },
        ],
      },
      {
        beregningsgrunnlagPeriodeFom: '2025-01-31',
        beregningsgrunnlagPeriodeTom: '2025-01-31',
        beregnetPrAar: 821600,
        bruttoPrAar: 780000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 780000,
        periodeAarsaker: [
          'ENDRING_I_AKTIVITETER_SØKT_FOR',
          'TILKOMMET_INNTEKT_MANUELT',
          'TILKOMMET_INNTEKT',
        ],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            dtoType: 'GENERELL',
            aktivitetStatus: 'AT',
            beregningsperiodeFom: '2023-03-01',
            beregningsperiodeTom: '2023-05-31',
            beregnetPrAar: 780000,
            overstyrtPrAar: 780000,
            bruttoPrAar: 780000,
            andelsnr: 2,
            inntektskategori: 'ARBEIDSTAKER',
            arbeidsforhold: {
              arbeidsgiverIdent: '874652202',
              startdato: '2021-06-18',
              arbeidsforholdType: 'ARBEID',
              belopFraInntektsmeldingPrMnd: 65000,
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
          },
          {
            dtoType: 'FL',
            aktivitetStatus: 'FL',
            beregningsperiodeFom: '2023-03-01',
            beregningsperiodeTom: '2023-05-31',
            beregnetPrAar: 41600,
            overstyrtPrAar: 0,
            bruttoPrAar: 0,
            andelsnr: 1,
            inntektskategori: 'FRILANSER',
            arbeidsforhold: {
              arbeidsforholdType: 'FRILANS',
            },
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
          },
        ],
      },
    ],
    sammenligningsgrunnlagPrStatus: [
      {
        sammenligningsgrunnlagFom: '2022-06-01',
        sammenligningsgrunnlagTom: '2023-05-31',
        rapportertPrAar: 644151,
        avvikPromille: 275.4773337,
        avvikProsent: 27.54773337,
        sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
        differanseBeregnet: 177449,
      },
    ],
    halvG: 59310,
    grunnbeløp: 118620,
    faktaOmBeregning: null,
    hjemmel: 'F_9_9_8_40',
    faktaOmFordeling: {
      vurderNyttInntektsforholdDto: {
        vurderInntektsforholdPerioder: [
          {
            fom: '2025-01-01',
            tom: '2025-01-03',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-04',
            tom: '2025-01-05',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-06',
            tom: '2025-01-10',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-11',
            tom: '2025-01-12',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-13',
            tom: '2025-01-17',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-18',
            tom: '2025-01-19',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-20',
            tom: '2025-01-24',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-25',
            tom: '2025-01-26',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-27',
            tom: '2025-01-27',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-28',
            tom: '2025-01-30',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-01-31',
            tom: '2025-01-31',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-01',
            tom: '2025-02-02',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-03',
            tom: '2025-02-07',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-08',
            tom: '2025-02-09',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-10',
            tom: '2025-02-14',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-15',
            tom: '2025-02-16',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-17',
            tom: '2025-02-21',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-22',
            tom: '2025-02-23',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-02-24',
            tom: '2025-02-28',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-01',
            tom: '2025-03-02',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-03',
            tom: '2025-03-07',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-08',
            tom: '2025-03-09',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-10',
            tom: '2025-03-14',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-15',
            tom: '2025-03-16',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-17',
            tom: '2025-03-21',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-22',
            tom: '2025-03-23',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-24',
            tom: '2025-03-28',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
          {
            fom: '2025-03-29',
            tom: '2025-03-30',
            inntektsforholdListe: [
              {
                aktivitetStatus: 'SN',
                periode: {
                  fom: '2025-01-01',
                  tom: '2025-03-30',
                },
                bruttoInntektPrÅr: 0,
                skalRedusereUtbetaling: true,
              },
            ],
          },
        ],
        harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: true,
      },
    },
    dekningsgrad: 100,
    erOverstyrtInntekt: false,
    vilkårsperiodeFom: '2023-06-22',
    inntektsgrunnlag: null,
    forlengelseperioder: [
      {
        fom: '2023-06-22',
        tom: '2025-03-30',
      },
    ],
  },
];

export const bgRettKodeverk = beregningsgrunnlag;
