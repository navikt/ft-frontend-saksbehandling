import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { arbeidstakerFPFlereArbeidsforhold } from '../../../testdata/arbeidstakerFPFlereArbeidsforhold';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { Dagsatser } from './Dagsatser';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: Dagsatser,
  decorators: [withIntl],
  args: {
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
  },
} satisfies Meta<typeof Dagsatser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FastsattBGMedUtregnetDagsatser: Story = {
  args: {
    beregningsgrunnlag: {
      avklaringsbehov: [
        {
          definisjon: 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN',
          status: 'UTFO',
          kanLoses: true,
          erTrukket: false,
          begrunnelse: 'cqewcqewcqfvqev',
          vurdertAv: 'Z994834',
          vurdertTidspunkt: '2025-12-23T16:01:39.853',
        },
      ],
      skjaeringstidspunktBeregning: '2024-10-16',
      aktivitetStatus: ['SN'],
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPeriodeFom: '2024-10-16',
          beregningsgrunnlagPeriodeTom: '9999-12-31',
          beregnetPrAar: 322156.77,
          bruttoPrAar: 203000,
          bruttoInkludertBortfaltNaturalytelsePrAar: 203000,
          avkortetPrAar: 203000,
          redusertPrAar: 162400,
          periodeAarsaker: [],
          dagsats: 625,
          beregningsgrunnlagPrStatusOgAndel: [
            {
              aktivitetStatus: 'SN',
              beregningsperiodeFom: '2021-01-01',
              beregningsperiodeTom: '2023-12-31',
              beregnetPrAar: 322156.77,
              overstyrtPrAar: 203000,
              bruttoPrAar: 203000,
              avkortetPrAar: 203000,
              redusertPrAar: 162400,
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
      faktaOmFordeling: {
        fordelBeregningsgrunnlag: {
          fordelBeregningsgrunnlagPerioder: [
            {
              fom: '2024-10-16',
              tom: '9999-12-31',
              fordelBeregningsgrunnlagAndeler: [
                {
                  andelsnr: 1,
                  arbeidsforhold: {
                    arbeidsforholdType: 'NÆRING',
                  },
                  inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
                  aktivitetStatus: 'SN',
                  kilde: 'PROSESS_START',
                  lagtTilAvSaksbehandler: false,
                  andelIArbeid: [0],
                  refusjonskravPrAar: 0,
                  nyttArbeidsforhold: false,
                  arbeidsforholdType: 'NÆRING',
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
      vilkårsperiodeFom: '2024-10-16',
    },
    beregningsgrunnlagsvilkår: {
      vilkarType: 'FP_VK_41',
      overstyrbar: true,
      perioder: [
        {
          vurderesIBehandlingen: true,
          merknadParametere: {},
          periode: {
            fom: '2024-10-16',
            tom: TIDENES_ENDE,
          },
          vilkarStatus: 'OPPFYLT',
        },
      ],
    },
  },
};

export const IkkeFastsatt: Story = {
  args: {
    beregningsgrunnlag: arbeidstakerFPFlereArbeidsforhold.beregningsgrunnlagListe[0],
    beregningsgrunnlagsvilkår: arbeidstakerFPFlereArbeidsforhold.beregningsgrunnlagsvilkår,
  },
};
