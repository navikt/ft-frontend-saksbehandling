import type { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import type { Vilkår } from '../src/typer/Vilkår';

export const beregningsgrunnlag = [
  {
    skjaeringstidspunktBeregning: '2022-01-13',
    aktivitetStatus: ['AT'],
    avklaringsbehov: [
      {
        definisjon: 'AVKLAR_AKTIVITETER',
        status: 'UTFO',
        kanLoses: true,
        begrunnelse: 'En veldig god begrunnelse.',
      },
      {
        definisjon: 'VURDER_FAKTA_ATFL_SN',
        status: 'OPPR',
        kanLoses: true,
      },
    ],
    vilkårsperiodeFom: '2022-01-13',
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: '2020-01-13',
        beregningsgrunnlagPeriodeTom: TIDENES_ENDE,
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
          {
            aktivitetStatus: 'AAP',
            andelsnr: 2,
            inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
            fastsattAvSaksbehandler: false,
            lagtTilAvSaksbehandler: false,
            erTilkommetAndel: false,
            skalFastsetteGrunnlag: false,
          } as BeregningsgrunnlagAndel,
        ],
      },
    ],
    sammenligningsgrunnlagPrStatus: [],
    grunnbeløp: 99858,
    faktaOmBeregning: {
      faktaOmBeregningTilfeller: ['VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'],
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
      refusjonskravSomKommerForSentListe: [
        {
          arbeidsgiverIdent: '910909088',
        },
      ],
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
        {
          aktivitetStatus: 'AAP',
          belopReadOnly: 10000.0,
          andelsnr: 2,
          inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
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
    status: 'UTFO',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
    begrunnelse: 'Denne begrunnelsen skal ikke vises.',
  },
  {
    definisjon: 'VURDER_FAKTA_ATFL_SN',
    status: 'OPPR',
    toTrinnsBehandling: true,
    aksjonspunktType: 'MANU',
    kanLoses: true,
  },
];
