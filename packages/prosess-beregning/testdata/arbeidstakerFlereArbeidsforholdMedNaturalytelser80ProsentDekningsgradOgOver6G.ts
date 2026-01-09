import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../src/types/Vilkår';

/**
 * Syntetisk beregningsgrunnlag for arbeidstaker i foreldrepengesak
 * med 80 % dekningsgrad, to arbeidsgivere og bortfalt naturalytelse
 * hos én arbeidsgiver. Samlet beregningsgrunnlag er over 6G.
 * Saksnummer: 352029431 (dev)
 */
const beregningsgrunnlag: Beregningsgrunnlag = {
  avklaringsbehov: [
    {
      definisjon: 'FASTSETT_BG_AT_FL',
      status: 'UTFO',
      kanLoses: true,
      erTrukket: false,
      begrunnelse: 'bubuj',
      vurdertAv: 'Z123456',
      vurdertTidspunkt: '2026-01-08T11:26:53.667',
    },
  ],
  skjaeringstidspunktBeregning: '2026-01-02',
  aktivitetStatus: ['AT'],
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPeriodeFom: '2026-01-02',
      beregningsgrunnlagPeriodeTom: '9999-12-31',
      beregnetPrAar: 1700460,
      bruttoPrAar: 1700460,
      bruttoInkludertBortfaltNaturalytelsePrAar: 1845636,
      avkortetPrAar: 780960,
      redusertPrAar: 624768,
      periodeAarsaker: [],
      dagsats: 2403,
      beregningsgrunnlagPrStatusOgAndel: [
        {
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2025-10-01',
          beregningsperiodeTom: '2025-12-31',
          beregnetPrAar: 910248,
          overstyrtPrAar: 910248,
          bruttoPrAar: 910248,
          avkortetPrAar: 446590.73,
          redusertPrAar: 357272.58,
          andelsnr: 2,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '333333333',
            startdato: '2006-01-07',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 75854,
            naturalytelseBortfaltPrÅr: 145176,
            stillingsprosenter: [
              {
                prosent: 50,
                fomDato: '2006-01-07',
                tomDato: '9999-12-31',
              },
            ],
            sisteLønnsendringsdato: '2006-01-07',
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
        {
          aktivitetStatus: 'AT',
          beregningsperiodeFom: '2025-10-01',
          beregningsperiodeTom: '2025-12-31',
          beregnetPrAar: 790212,
          overstyrtPrAar: 790212,
          bruttoPrAar: 790212,
          avkortetPrAar: 334369.27,
          redusertPrAar: 267495.42,
          andelsnr: 1,
          inntektskategori: 'ARBEIDSTAKER',
          arbeidsforhold: {
            arbeidsgiverIdent: '555555555',
            startdato: '2002-06-24',
            arbeidsforholdType: 'ARBEID',
            belopFraInntektsmeldingPrMnd: 65851,
            stillingsprosenter: [
              {
                prosent: 49,
                fomDato: '2002-06-24',
                tomDato: '9999-12-31',
              },
            ],
            sisteLønnsendringsdato: '2002-06-24',
          },
          lagtTilAvSaksbehandler: false,
          erTilkommetAndel: false,
          skalFastsetteGrunnlag: true,
        },
      ],
    },
  ],
  sammenligningsgrunnlagPrStatus: [
    {
      sammenligningsgrunnlagFom: '2025-01-01',
      sammenligningsgrunnlagTom: '2025-12-31',
      rapportertPrAar: 1117640,
      avvikPromille: 651.368956,
      avvikProsent: 65.1368956,
      sammenligningsgrunnlagType: 'SAMMENLIGNING_AT_FL',
      differanseBeregnet: 582820,
    },
  ],
  grunnbeløp: 130160,
  faktaOmBeregning: {
    saksopplysninger: {
      lønnsendringSaksopplysning: [],
      kortvarigeArbeidsforhold: [],
    },
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '2026-01-02',
          aktiviteter: [
            {
              arbeidsgiverIdent: '555555555',
              fom: '2002-06-24',
              tom: '9999-12-31',
              arbeidsforholdType: 'ARBEID',
            },
            {
              arbeidsgiverIdent: '333333333',
              fom: '2006-01-07',
              tom: '9999-12-31',
              arbeidsforholdType: 'ARBEID',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2026-01-02',
    },
    andelerForFaktaOmBeregning: [
      {
        belopReadOnly: 65851,
        fastsattBelop: 65851,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        arbeidsforhold: {
          arbeidsgiverIdent: '555555555',
          startdato: '2002-06-24',
          arbeidsforholdType: 'ARBEID',
          belopFraInntektsmeldingPrMnd: 65851,
        },
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
      {
        belopReadOnly: 75854,
        fastsattBelop: 75854,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        arbeidsforhold: {
          arbeidsgiverIdent: '333333333',
          startdato: '2006-01-07',
          arbeidsforholdType: 'ARBEID',
          belopFraInntektsmeldingPrMnd: 75854,
          naturalytelseBortfaltPrÅr: 145176,
        },
        andelsnr: 2,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
    ],
  },
  faktaOmFordeling: {
    fordelBeregningsgrunnlag: {
      fordelBeregningsgrunnlagPerioder: [
        {
          fom: '2026-01-02',
          tom: '9999-12-31',
          fordelBeregningsgrunnlagAndeler: [
            {
              andelsnr: 1,
              arbeidsforhold: {
                arbeidsgiverIdent: '555555555',
                startdato: '2002-06-24',
                arbeidsforholdType: 'ARBEID',
              },
              inntektskategori: 'ARBEIDSTAKER',
              aktivitetStatus: 'AT',
              kilde: 'PROSESS_START',
              lagtTilAvSaksbehandler: false,
              andelIArbeid: [0],
              refusjonskravPrAar: 0,
              belopFraInntektsmeldingPrAar: 790212,
              nyttArbeidsforhold: false,
              arbeidsforholdType: 'ARBEID',
            },
            {
              andelsnr: 2,
              arbeidsforhold: {
                arbeidsgiverIdent: '333333333',
                startdato: '2006-01-07',
                arbeidsforholdType: 'ARBEID',
                naturalytelseBortfaltPrÅr: 145176,
              },
              inntektskategori: 'ARBEIDSTAKER',
              aktivitetStatus: 'AT',
              kilde: 'PROSESS_START',
              lagtTilAvSaksbehandler: false,
              andelIArbeid: [0],
              refusjonskravPrAar: 0,
              belopFraInntektsmeldingPrAar: 910248,
              nyttArbeidsforhold: false,
              arbeidsforholdType: 'ARBEID',
            },
          ],
          skalRedigereInntekt: false,
          skalPreutfyllesMedBeregningsgrunnlag: false,
          skalKunneEndreRefusjon: false,
        },
      ],
      arbeidsforholdTilFordeling: [],
    },
  },
  dekningsgrad: 80,
  ytelsesspesifiktGrunnlag: {
    ytelsetype: 'FP',
  },
  erOverstyrtInntekt: false,
  inntektsgrunnlag: {
    pgiGrunnlag: [],
    sammenligningsgrunnlagInntekter: [
      {
        fom: '2025-07-01',
        tom: '2025-07-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-10-01',
        tom: '2025-10-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-08-01',
        tom: '2025-08-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-06-01',
        tom: '2025-06-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-05-01',
        tom: '2025-05-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-04-01',
        tom: '2025-04-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-03-01',
        tom: '2025-03-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-02-01',
        tom: '2025-02-28',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
      {
        fom: '2025-01-01',
        tom: '2025-01-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 57320,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
    ],
    beregningsgrunnlagInntekter: [
      {
        fom: '2025-10-01',
        tom: '2025-10-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 54444,
            arbeidsgiverIdent: '555555555',
          },
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            beløp: 45222,
            arbeidsgiverIdent: '333333333',
          },
        ],
      },
    ],
  },
  vilkårsperiodeFom: '2026-01-02',
};
const beregningsgrunnlagsvilkår: Vilkår = {
  vilkarType: 'FP_VK_41',
  overstyrbar: true,
  perioder: [
    {
      vurderesIBehandlingen: true,
      merknadParametere: {},
      periode: {
        fom: '2026-01-02',
        tom: '9999-12-31',
      },
      vilkarStatus: 'OPPFYLT',
    },
  ],
};

export const arbeidstakerFlereArbeidsforholdMedNaturalytelser80ProsentDekningsgradOgOver6G = {
  beregningsgrunnlagListe: [beregningsgrunnlag],
  beregningsgrunnlagsvilkår,
};
