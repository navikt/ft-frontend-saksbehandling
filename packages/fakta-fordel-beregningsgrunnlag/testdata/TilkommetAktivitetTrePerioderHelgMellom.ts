import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag } from '@navikt/ft-types';

export const beregningsgrunnlag = [
  {
    avklaringsbehov: [
      {
        definisjon: 'VURDER_NYTT_INNTKTSFRHLD',
        status: 'OPPR',
        kanLoses: true,
      },
    ],
    skjaeringstidspunktBeregning: '2023-04-10',
    aktivitetStatus: ['MIDL_INAKTIV'],
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2022-11-08',
        beregningsgrunnlagPeriodeTom: '2022-11-08',
        beregnetPrAar: 0,
        bruttoPrAar: 480000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 480000,
        periodeAarsaker: [],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'AT',
            andelsnr: 2,
            inntektskategori: '-',
            arbeidsforhold: {
              arbeidsgiverIdent: '999999997',
              startdato: '2022-10-27',
              arbeidsforholdType: 'ARBEID',
              belopFraInntektsmeldingPrMnd: 40000,
            },
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: true,
            skalFastsetteGrunnlag: false,
          },
          {
            aktivitetStatus: 'BA',
            beregningsperiodeFom: '2018-01-01',
            beregningsperiodeTom: '2020-12-31',
            beregnetPrAar: 0,
            overstyrtPrAar: 480000,
            bruttoPrAar: 480000,
            andelsnr: 1,
            inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
            pgiSnitt: 0,
            pgiVerdier: [
              {
                beløp: 0,
                årstall: 2020,
              },
              {
                beløp: 0,
                årstall: 2019,
              },
              {
                beløp: 0,
                årstall: 2018,
              },
            ],
            næringer: [],
          },
        ],
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-11-09',
        beregningsgrunnlagPeriodeTom: '2022-11-15',
        beregnetPrAar: 0,
        bruttoPrAar: 480000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 480000,
        periodeAarsaker: ['ENDRING_I_AKTIVITETER_SØKT_FOR'],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'BA',
            beregningsperiodeFom: '2018-01-01',
            beregningsperiodeTom: '2020-12-31',
            beregnetPrAar: 0,
            overstyrtPrAar: 480000,
            bruttoPrAar: 480000,
            andelsnr: 1,
            inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
            pgiSnitt: 0,
            pgiVerdier: [
              {
                beløp: 0,
                årstall: 2020,
              },
              {
                beløp: 0,
                årstall: 2019,
              },
              {
                beløp: 0,
                årstall: 2018,
              },
            ],
            næringer: [],
          },
        ],
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-11-16',
        beregningsgrunnlagPeriodeTom: '2022-11-20',
        beregnetPrAar: 0,
        bruttoPrAar: 480000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 480000,
        periodeAarsaker: ['ENDRING_I_AKTIVITETER_SØKT_FOR'],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'BA',
            beregningsperiodeFom: '2018-01-01',
            beregningsperiodeTom: '2020-12-31',
            beregnetPrAar: 0,
            overstyrtPrAar: 480000,
            bruttoPrAar: 480000,
            andelsnr: 1,
            inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
            pgiSnitt: 0,
            pgiVerdier: [
              {
                beløp: 0,
                årstall: 2020,
              },
              {
                beløp: 0,
                årstall: 2019,
              },
              {
                beløp: 0,
                årstall: 2018,
              },
            ],
            næringer: [],
          },
        ],
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-11-21',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        beregnetPrAar: 0,
        bruttoPrAar: 480000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 480000,
        periodeAarsaker: ['ENDRING_I_AKTIVITETER_SØKT_FOR'],
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'BA',
            beregningsperiodeFom: '2018-01-01',
            beregningsperiodeTom: '2020-12-31',
            beregnetPrAar: 0,
            overstyrtPrAar: 480000,
            bruttoPrAar: 480000,
            andelsnr: 1,
            inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: true,
            pgiSnitt: 0,
            pgiVerdier: [
              {
                beløp: 0,
                årstall: 2020,
              },
              {
                beløp: 0,
                årstall: 2019,
              },
              {
                beløp: 0,
                årstall: 2018,
              },
            ],
            næringer: [],
          },
        ],
      },
    ],
    sammenligningsgrunnlagPrStatus: [
      {
        sammenligningsgrunnlagFom: '2022-11-08',
        sammenligningsgrunnlagTom: '2022-12-07',
        rapportertPrAar: 480000,
        avvikPromille: 1000,
        avvikProsent: 100,
        sammenligningsgrunnlagType: 'SAMMENLIGNING_MIDL_INAKTIV',
        differanseBeregnet: -480000,
      },
    ],
    grunnbeløp: 111477,
    faktaOmBeregning: {
      saksopplysninger: {
        arbeidsforholdMedLønnsendring: [],
        kortvarigeArbeidsforhold: [],
      },
      avklarAktiviteter: {
        aktiviteterTomDatoMapping: [
          {
            tom: '2022-11-08',
            aktiviteter: [
              {
                arbeidsgiverIdent: '999999997',
                fom: '2022-10-27',
                tom: '9999-12-31',
                arbeidsforholdType: 'ARBEID',
              },
            ],
          },
        ],
        skjæringstidspunkt: '2022-11-08',
      },
      andelerForFaktaOmBeregning: [
        {
          fastsattBelop: 0,
          inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
          aktivitetStatus: 'BA',
          andelsnr: 1,
          skalKunneEndreAktivitet: false,
          lagtTilAvSaksbehandler: false,
        },
      ],
    },
    faktaOmFordeling: {
      vurderNyttInntektsforholdDto: {
        harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: false,
        vurderInntektsforholdPerioder: [
          {
            fom: '2023-04-10',
            tom: '2023-04-14',
            inntektsforholdListe: [
              {
                aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                arbeidsgiverId: '999999997',
                bruttoInntektPrÅr: undefined,
                inntektFraInntektsmeldingPrÅr: 450000,
                arbeidsforholdId: '123',
                skalRedusereUtbetaling: false,
                periode: {
                  fom: '2022-11-09',
                  tom: '2022-11-20',
                },
              },
            ],
          },
          {
            fom: '2023-04-17',
            tom: '2023-04-21',
            inntektsforholdListe: [
              {
                aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                arbeidsgiverId: '999999997',
                bruttoInntektPrÅr: undefined,
                inntektFraInntektsmeldingPrÅr: 450000,
                arbeidsforholdId: '123',
                skalRedusereUtbetaling: false,
                periode: {
                  fom: '2022-11-09',
                  tom: '2022-11-20',
                },
              },
            ],
          },
          {
            fom: '2023-04-24',
            tom: '2023-04-28',
            inntektsforholdListe: [
              {
                aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                arbeidsgiverId: '999999997',
                bruttoInntektPrÅr: undefined,
                inntektFraInntektsmeldingPrÅr: 450000,
                arbeidsforholdId: '123',
                skalRedusereUtbetaling: false,
                periode: {
                  fom: '2022-11-09',
                  tom: '2022-11-20',
                },
              },
              {
                aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                arbeidsgiverId: '974652293',
                bruttoInntektPrÅr: 300000,
                inntektFraInntektsmeldingPrÅr: null,
                arbeidsforholdId: '456',
                skalRedusereUtbetaling: true,
                periode: {
                  fom: '2022-11-14',
                  tom: '2022-11-20',
                },
              },
            ],
          },
        ],
      },
      fordelBeregningsgrunnlag: {
        fordelBeregningsgrunnlagPerioder: [
          {
            fom: '2022-11-08',
            tom: '2022-11-08',
            fordelBeregningsgrunnlagAndeler: [
              {
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                aktivitetStatus: 'BA',
                kilde: 'PROSESS_START',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [100],
                refusjonskravPrAar: 0,
                nyttArbeidsforhold: false,
                arbeidsforholdType: '-',
              },
              {
                andelsnr: 2,
                arbeidsforhold: {
                  arbeidsgiverIdent: '999999997',
                  startdato: '2022-10-27',
                  arbeidsforholdType: 'ARBEID',
                },
                inntektskategori: '-',
                aktivitetStatus: 'AT',
                kilde: 'PROSESS_PERIODISERING',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [0],
                refusjonskravPrAar: 0,
                belopFraInntektsmeldingPrAar: 480000,
                nyttArbeidsforhold: true,
                arbeidsforholdType: 'ARBEID',
              },
            ],
            skalRedigereInntekt: true,
            skalPreutfyllesMedBeregningsgrunnlag: false,
            skalKunneEndreRefusjon: false,
          },
          {
            fom: '2022-11-09',
            tom: '2022-11-11',
            fordelBeregningsgrunnlagAndeler: [
              {
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                aktivitetStatus: 'BA',
                kilde: 'PROSESS_START',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [100],
                refusjonskravPrAar: 0,
                nyttArbeidsforhold: false,
                arbeidsforholdType: '-',
              },
              {
                andelsnr: 2,
                arbeidsforhold: {
                  arbeidsgiverIdent: '999999997',
                  startdato: '2022-10-27',
                  arbeidsforholdType: 'ARBEID',
                },
                inntektskategori: '-',
                aktivitetStatus: 'AT',
                kilde: 'PROSESS_PERIODISERING',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [0],
                refusjonskravPrAar: 0,
                belopFraInntektsmeldingPrAar: 480000,
                nyttArbeidsforhold: true,
                arbeidsforholdType: 'ARBEID',
              },
            ],
            skalRedigereInntekt: false,
            skalPreutfyllesMedBeregningsgrunnlag: false,
            skalKunneEndreRefusjon: false,
          },
          {
            fom: '2022-11-12',
            tom: '2022-11-13',
            fordelBeregningsgrunnlagAndeler: [
              {
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                aktivitetStatus: 'BA',
                kilde: 'PROSESS_START',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [100],
                refusjonskravPrAar: 0,
                nyttArbeidsforhold: false,
                arbeidsforholdType: '-',
              },
              {
                andelsnr: 2,
                arbeidsforhold: {
                  arbeidsgiverIdent: '999999997',
                  startdato: '2022-10-27',
                  arbeidsforholdType: 'ARBEID',
                },
                inntektskategori: '-',
                aktivitetStatus: 'AT',
                kilde: 'PROSESS_PERIODISERING',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [0],
                refusjonskravPrAar: 0,
                belopFraInntektsmeldingPrAar: 480000,
                nyttArbeidsforhold: true,
                arbeidsforholdType: 'ARBEID',
              },
            ],
            skalRedigereInntekt: false,
            skalPreutfyllesMedBeregningsgrunnlag: false,
            skalKunneEndreRefusjon: false,
          },
          {
            fom: '2022-11-14',
            tom: '2022-11-15',
            fordelBeregningsgrunnlagAndeler: [
              {
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                aktivitetStatus: 'BA',
                kilde: 'PROSESS_START',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [100],
                refusjonskravPrAar: 0,
                nyttArbeidsforhold: false,
                arbeidsforholdType: '-',
              },
              {
                andelsnr: 2,
                arbeidsforhold: {
                  arbeidsgiverIdent: '999999997',
                  startdato: '2022-10-27',
                  arbeidsforholdType: 'ARBEID',
                },
                inntektskategori: '-',
                aktivitetStatus: 'AT',
                kilde: 'PROSESS_PERIODISERING',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [0],
                refusjonskravPrAar: 0,
                belopFraInntektsmeldingPrAar: 480000,
                nyttArbeidsforhold: true,
                arbeidsforholdType: 'ARBEID',
              },
            ],
            skalRedigereInntekt: false,
            skalPreutfyllesMedBeregningsgrunnlag: false,
            skalKunneEndreRefusjon: false,
          },
          {
            fom: '2022-11-16',
            tom: '2022-11-20',
            fordelBeregningsgrunnlagAndeler: [
              {
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                aktivitetStatus: 'BA',
                kilde: 'PROSESS_START',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [100],
                refusjonskravPrAar: 0,
                nyttArbeidsforhold: false,
                arbeidsforholdType: '-',
              },
              {
                andelsnr: 2,
                arbeidsforhold: {
                  arbeidsgiverIdent: '999999997',
                  startdato: '2022-10-27',
                  arbeidsforholdType: 'ARBEID',
                },
                inntektskategori: '-',
                aktivitetStatus: 'AT',
                kilde: 'PROSESS_PERIODISERING',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [0],
                refusjonskravPrAar: 0,
                belopFraInntektsmeldingPrAar: 480000,
                nyttArbeidsforhold: true,
                arbeidsforholdType: 'ARBEID',
              },
              {
                andelsnr: 3,
                arbeidsforhold: {
                  arbeidsgiverIdent: '974652293',
                  startdato: '2022-10-27',
                  arbeidsforholdType: 'ARBEID',
                },
                inntektskategori: '-',
                aktivitetStatus: 'AT',
                kilde: 'PROSESS_PERIODISERING',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [0],
                refusjonskravPrAar: 0,
                belopFraInntektsmeldingPrAar: 300000,
                nyttArbeidsforhold: true,
                arbeidsforholdType: 'ARBEID',
              },
            ],
            skalRedigereInntekt: false,
            skalPreutfyllesMedBeregningsgrunnlag: false,
            skalKunneEndreRefusjon: false,
          },
          {
            fom: '2022-11-21',
            tom: '9999-12-31',
            fordelBeregningsgrunnlagAndeler: [
              {
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                aktivitetStatus: 'BA',
                kilde: 'PROSESS_START',
                lagtTilAvSaksbehandler: false,
                andelIArbeid: [100],
                refusjonskravPrAar: 0,
                nyttArbeidsforhold: false,
                arbeidsforholdType: '-',
              },
            ],
            skalRedigereInntekt: false,
            skalPreutfyllesMedBeregningsgrunnlag: false,
            skalKunneEndreRefusjon: false,
          },
        ],
        arbeidsforholdTilFordeling: [
          {
            arbeidsgiverIdent: '999999997',
            startdato: '2022-10-27',
            arbeidsforholdType: 'ARBEID',
            perioderMedGraderingEllerRefusjon: [
              {
                erRefusjon: false,
                erGradering: false,
                erSøktYtelse: true,
                fom: '2022-11-08',
                tom: '2022-11-08',
              },
            ],
          },
        ],
      },
    },
    dekningsgrad: 100,
    ytelsesspesifiktGrunnlag: {
      ytelsetype: 'OMP',
    },
    erOverstyrtInntekt: false,
    vilkårsperiodeFom: '2023-04-10',
    forlengelseperioder: [],
  } as Beregningsgrunnlag,
];
