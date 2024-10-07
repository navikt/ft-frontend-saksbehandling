import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AktivitetStatus, Inntektskategori, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt,
  ArbeidsforholdTilFordeling,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmFordeling,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
  Vilkar,
} from '@navikt/ft-types';
import { alleKodeverk } from '@ft-frontend-saksbehandling/storybook-utils';

import {
  bgMedDelvisRefusjon as vurderDelvisRefBG,
  bgUtenDelvisRefusjon as vurderRefusjonBG,
} from '../testdata/VurderRefusjon';
import FordelBeregningsgrunnlagFaktaIndex from './FordelBeregningsgrunnlagFaktaIndex';
import { beregningsgrunnlag as bgArbeidOgGradertNæring } from '../testdata/ArbeidOgGradertNaring';
import { beregningsgrunnlag as bgMedNaturalytelse } from '../testdata/NyttArbeidOgNaturalytelse';
import bgFlerePerioderMedHelg from '../testdata/FlerePerioderMedHelg';
import bgFlerePerioderMedForlengelse from '../testdata/FlerePerioderMedForlengelse';
import bgTilkommetInntektsforholdMedForlengelse from '../testdata/TilkommetAktivitetMedForlengelse';
import bgTilkommetInntektsforholdMedForlengelseLukketAP from '../testdata/TilkommetAktivitetMedForlengelseLukketAP';
import bgTilkommetInntektsforholdMedRevurdering from '../testdata/TilkommetAktivitetRevurderingLøstTidligere';
import bgTilkommetInntektsforholdMedRevurdering1MaiSplitt from '../testdata/TilkommetAktivitetRevurderingLøstTidligere1MaiKryss';
import bgTilkommetAktivitetTrePerioderHelgMellom from '../testdata/TilkommetAktivitetTrePerioderHelgMellom';

import { FaktaFordelBeregningAvklaringsbehovCode } from '..';
import VurderRefusjonBeregningsgrunnlagAP from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagAP from './types/interface/FordelBeregningsgrunnlagAP';

import '@navikt/ds-css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import VurderNyttInntektsforholdAP from './types/interface/VurderNyttInntektsforholdAP';
import KodeverkForPanel from './types/kodeverkForPanel';

const agOpplysninger = {
  874652202: {
    navn: 'NAV Innlandet',
    identifikator: '874652202',
    erPrivatPerson: false,
  },
  123456789: {
    navn: 'Arbeidsgiveren',
    identifikator: '123456789',
    erPrivatPerson: false,
  },
  123456700: {
    navn: 'Arbeidsgiveren',
    identifikator: '123456700',
    erPrivatPerson: false,
  },
  999999997: {
    navn: 'Arbeidsgiveren',
    identifikator: '999999997',
    erPrivatPerson: false,
  },
  974652293: {
    navn: 'NAV Troms og Finnmark',
    identifikator: '974652293',
    erPrivatPerson: false,
  },
  974239965: {
    navn: 'NAV Trøndelag',
    identifikator: '974239965',
    erPrivatPerson: false,
  },
  999999999: {
    navn: 'NAV Gokk',
    identifikator: '999999999',
    erPrivatPerson: false,
  },
  999999998: {
    navn: 'TESTY TEST',
    identifikator: '999999998',
    erPrivatPerson: true,
    fødselsdato: '2000-01-01',
  },
  910909088: {
    navn: 'BEDRIFT A/S',
    identifikator: '910909088',
    erPrivatPerson: false,
  },
};

const fordelAP = [
  {
    definisjon: FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG,
    status: 'OPPR',
    kanLoses: true,
  },
];

export default {
  title: 'fakta-fordel-beregningsgrunnlag',
  component: FordelBeregningsgrunnlagFaktaIndex,
};

const lagVilkår = (perioder: any[]): Vilkar => ({
  vilkarType: 'VK_41',
  overstyrbar: false,
  perioder: perioder.map(p => ({
    periode: { fom: p.fom, tom: p.tom },
    vurderesIBehandlingen: p.vurderesIBehandlingen,
    merknadParametere: {},
    vilkarStatus: 'OPPFYLT',
  })),
});

const Template: StoryFn<{
  readOnly: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (
    aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP | VurderNyttInntektsforholdAP,
  ) => Promise<void>;
  vilkårsperioder?: any[];
}> = ({ readOnly, beregningsgrunnlagListe, submitCallback, vilkårsperioder = null }) => (
  <FordelBeregningsgrunnlagFaktaIndex
    beregningsgrunnlagListe={beregningsgrunnlagListe as Beregningsgrunnlag[]}
    beregningsgrunnlagVilkår={lagVilkår(
      vilkårsperioder ||
        beregningsgrunnlagListe.map(bg => ({
          fom: bg.vilkårsperiodeFom,
          tom: '9999-12-31',
          vurderesIBehandlingen: true,
        })),
    )}
    submitCallback={submitCallback}
    readOnly={readOnly}
    kodeverkSamling={alleKodeverk as KodeverkForPanel}
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    submittable
  />
);

const lagBGAndel = (
  andelsnr: number,
  aktivitetstatuskode: string,
  beregnet?: number,
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: aktivitetstatuskode,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  bruttoPrAar: beregnet,
  andelsnr,
  erTilkommetAndel: false,
  arbeidsforhold,
});

const lagBGPeriode = (
  andelsliste: BeregningsgrunnlagAndel[],
  periodeAarsaker: string[],
  fom: string,
  tom?: string,
): BeregningsgrunnlagPeriodeProp => {
  const sum = andelsliste.reduce((acc, andel) => acc + (andel.beregnetPrAar ? andel.beregnetPrAar : 0), 0);
  return {
    beregningsgrunnlagPeriodeFom: fom,
    beregningsgrunnlagPeriodeTom: tom || '9999-12-31',
    beregnetPrAar: sum,
    bruttoPrAar: sum,
    bruttoInkludertBortfaltNaturalytelsePrAar: sum,
    periodeAarsaker,
    beregningsgrunnlagPrStatusOgAndel: andelsliste,
  };
};

const lagBG = (
  perioder: BeregningsgrunnlagPeriodeProp[],
  faktaOmFordeling: FaktaOmFordeling,
  avklaringsbehov: BeregningAvklaringsbehov[],
  skjæringstidspunkt = '2019-09-16',
): Beregningsgrunnlag =>
  // @ts-ignore
  ({
    avklaringsbehov,
    skjaeringstidspunktBeregning: skjæringstidspunkt,
    vilkårsperiodeFom: skjæringstidspunkt,
    aktivitetStatus: [],
    dekningsgrad: null,
    grunnbeløp: null,
    erOverstyrtInntekt: null,
    beregningsgrunnlagPeriode: perioder,
    ledetekstBrutto: 'Brutto beregningsgrunnlag',
    ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
    ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
    halvG: 49929,
    hjemmel: 'F_14_7_8_30',
    faktaOmFordeling,
    årsinntektVisningstall: 360000,
  }) as Beregningsgrunnlag;

const lagFaktaOmFordeling = (
  arbfor: ArbeidsforholdTilFordeling[],
  perioder: FordelBeregningsgrunnlagPeriode[],
): FaktaOmFordeling => ({
  fordelBeregningsgrunnlag: {
    arbeidsforholdTilFordeling: arbfor,
    fordelBeregningsgrunnlagPerioder: perioder,
  },
});

const lagArbforTilFordeling = (
  arbGiverId: string,
  arbId: string,
  refKrav: number,
  refKravFom: string,
): ArbeidsforholdTilFordeling => ({
  arbeidsforholdId: arbId,
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverIdent: arbGiverId,
  eksternArbeidsforholdId: 'ARB001-001',
  opphoersdato: '2020-10-27',
  organisasjonstype: 'VIRKSOMHET',
  perioderMedGraderingEllerRefusjon: [
    {
      erRefusjon: true,
      erGradering: false,
      fom: refKravFom,
    },
  ],
  refusjonPrAar: refKrav,
  startdato: '2019-11-27',
});

const mapIKKode = (bgStatus: string): string => {
  switch (bgStatus) {
    case 'AT':
      return Inntektskategori.ARBEIDSTAKER;
    case 'AAP':
      return Inntektskategori.ARBEIDSAVKLARINGSPENGER;
    case 'FL':
      return Inntektskategori.FRILANSER;
    case 'SN':
      return Inntektskategori.SELVSTENDIG_NÆRINGSDRIVENDE;
    default:
      return Inntektskategori.UDEFINERT;
  }
};

const lagFordelingsandel = (
  andelsnr: number,
  status: string,
  ref: number,
  fordelt?: number,
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold,
): FordelBeregningsgrunnlagAndel => ({
  aktivitetStatus: status,
  andelsnr,
  arbeidsforholdType: '-',
  arbeidsforhold,
  andelIArbeid: [0],
  fordeltPrAar: fordelt,
  inntektskategori: mapIKKode(status),
  lagtTilAvSaksbehandler: false,
  nyttArbeidsforhold: false,
  refusjonskravFraInntektsmeldingPrAar: ref,
  refusjonskravPrAar: ref,
});

const lagFordelPeriode = (
  fordelAndeler: FordelBeregningsgrunnlagAndel[],
  graderingEllerRef: boolean,
  skalKunneEndreRef: boolean,
  fom: string,
  tom?: string,
): FordelBeregningsgrunnlagPeriode => ({
  fom,
  fordelBeregningsgrunnlagAndeler: fordelAndeler,
  skalRedigereInntekt: graderingEllerRef,
  skalPreutfyllesMedBeregningsgrunnlag: false,
  skalKunneEndreRefusjon: skalKunneEndreRef,
  tom,
});

const lagArbeidsforhold = (
  arbeidsgiverId: string,
  arbeidsforholdId: string,
  refKrav: number,
): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent: arbeidsgiverId,
  startdato: '2018-10-09',
  arbeidsforholdId,
  arbeidsforholdType: 'ARBEID',
  refusjonPrAar: refKrav,
  organisasjonstype: 'VIRKSOMHET',
});
export const FlerePerioderMedHelg = Template.bind({});
FlerePerioderMedHelg.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgFlerePerioderMedHelg,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const FlerePerioderMedForlengelse = Template.bind({});
FlerePerioderMedForlengelse.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgFlerePerioderMedForlengelse,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const ArbeidOgGradertNæringUtenBeregningsgrunnlagAp5046 = Template.bind({});
ArbeidOgGradertNæringUtenBeregningsgrunnlagAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [bgArbeidOgGradertNæring],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const TilkommetArbeidMedFlyttingAvNaturalytelseAp5046 = Template.bind({});
TilkommetArbeidMedFlyttingAvNaturalytelseAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [bgMedNaturalytelse],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const ViseVurderTilkommetRefusjonskravAp5059 = Template.bind({});
ViseVurderTilkommetRefusjonskravAp5059.args = {
  readOnly: false,
  beregningsgrunnlagListe: [vurderRefusjonBG],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059 = Template.bind({});
SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059.args = {
  readOnly: false,
  beregningsgrunnlagListe: [vurderDelvisRefBG],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const AapOgRefusjonAp5046 = Template.bind({});
AapOgRefusjonAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26'),
        lagBGPeriode(
          [
            lagBGAndel(2, 'AAP', 100000),
            lagBGAndel(1, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2019-11-27',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
        [
          lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
          lagFordelPeriode(
            [
              lagFordelingsandel(2, 'AAP', 0, 0),
              lagFordelingsandel(
                1,
                'AT',
                0,
                0,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            false,
            '2019-11-27',
          ),
        ],
      ),
      fordelAP,
    ),
  ],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const FordelingKanEndreRefusjonskravAp5046 = Template.bind({});
FordelingKanEndreRefusjonskravAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26'),
        lagBGPeriode(
          [
            lagBGAndel(2, 'AAP', 100000),
            lagBGAndel(1, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2019-11-27',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
        [
          lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
          lagFordelPeriode(
            [
              lagFordelingsandel(2, 'AAP', 0, 0),
              lagFordelingsandel(
                1,
                'AT',
                300000,
                0,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            true,
            '2019-11-27',
          ),
        ],
      ),
      fordelAP,
    ),
  ],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const SkalSlåSammenNaturalytelseperioderAp5046 = Template.bind({});
SkalSlåSammenNaturalytelseperioderAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        lagBGPeriode(
          [lagBGAndel(1, 'AT', 100000, lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000))],
          [],
          '2019-08-05',
          '2019-11-26',
        ),
        lagBGPeriode(
          [lagBGAndel(1, 'AT', 100000, lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000))],
          [PeriodeAarsak.NATURALYTELSE_BORTFALT],
          '2019-11-27',
          '2019-12-05',
        ),
        lagBGPeriode(
          [
            lagBGAndel(1, 'AT', 100000, lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000)),
            lagBGAndel(2, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2019-12-06',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-12-06')],
        [
          lagFordelPeriode(
            [
              lagFordelingsandel(
                1,
                'AT',
                0,
                0,
                lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
              ),
            ],
            false,
            false,
            '2019-08-05',
            '2019-11-26',
          ),
          lagFordelPeriode(
            [
              lagFordelingsandel(
                1,
                'AT',
                0,
                0,
                lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
              ),
            ],
            false,
            false,
            '2019-11-27',
            '2019-12-05',
          ),
          lagFordelPeriode(
            [
              lagFordelingsandel(
                1,
                'AT',
                0,
                0,
                lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
              ),
              lagFordelingsandel(
                2,
                'AT',
                300000,
                0,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            true,
            '2019-12-06',
          ),
        ],
      ),
      fordelAP,
    ),
  ],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046 = Template.bind({});
FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26'),
        lagBGPeriode(
          [
            lagBGAndel(2, 'AAP', 100000),
            lagBGAndel(1, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2019-11-27',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
        [
          lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
          lagFordelPeriode(
            [
              lagFordelingsandel(2, 'AAP', 0, 0),
              lagFordelingsandel(
                1,
                'AT',
                300000,
                0,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            true,
            '2019-11-27',
          ),
        ],
      ),
      fordelAP,
      '2019-08-05',
    ),
    lagBG(
      [
        lagBGPeriode(
          [
            lagBGAndel(2, 'AAP', 100000),
            lagBGAndel(1, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2020-01-01',
          '9999-12-31',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2020-01-27')],
        [
          lagFordelPeriode(
            [
              lagFordelingsandel(2, 'AAP', 0, 0),
              lagFordelingsandel(
                1,
                'AT',
                300000,
                0,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            true,
            '2020-01-01',
            '9999-12-31',
          ),
        ],
      ),
      fordelAP,
      '2020-01-01',
    ),
  ],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046 = Template.bind({});
AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        lagBGPeriode([lagBGAndel(1, 'AAP', 300000)], [], '2019-08-05', '2019-11-26'),
        lagBGPeriode(
          [
            lagBGAndel(2, 'AAP', 300000),
            lagBGAndel(1, 'AT', undefined, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2019-11-27',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
        [
          lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0)], false, false, '2019-08-05', '2019-11-26'),
          lagFordelPeriode(
            [
              lagFordelingsandel(2, 'AAP', 0, 100000),
              lagFordelingsandel(
                1,
                'AT',
                300000,
                200000,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            false,
            '2019-11-27',
          ),
        ],
      ),
      [
        {
          definisjon: FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG,
          status: 'UTFO',
          kanLoses: true,
          begrunnelse: 'En god begrunnelse.',
        },
      ],
      '2019-08-05',
    ),
    lagBG(
      [
        lagBGPeriode([lagBGAndel(1, 'AAP', 300000)], [], '2020-01-01', '2020-01-26'),
        lagBGPeriode(
          [
            lagBGAndel(2, 'AAP', 300000),
            lagBGAndel(1, 'AT', undefined, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000)),
          ],
          [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
          '2020-01-27',
        ),
      ],
      lagFaktaOmFordeling(
        [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2020-01-27')],
        [
          lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2020-01-01', '2020-01-26'),
          lagFordelPeriode(
            [
              lagFordelingsandel(2, 'AAP', 0, 0),
              lagFordelingsandel(
                1,
                'AT',
                300000,
                0,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            true,
            false,
            '2020-01-27',
          ),
        ],
      ),
      fordelAP,
      '2020-01-01',
    ),
  ],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2019-08-05',
      tom: '2019-10-05',
      vurderesIBehandlingen: false,
    },
    {
      fom: '2020-01-01',
      tom: '2020-02-05',
      vurderesIBehandlingen: true,
    },
  ],
};

export const TilkommetAktivitet = Template.bind({});
TilkommetAktivitet.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [
        {
          definisjon: 'VURDER_NYTT_INNTKTSFRHLD',
          status: 'OPPR',
          kanLoses: true,
        },
      ],
      skjaeringstidspunktBeregning: '2022-11-08',
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
          lønnsendringSaksopplysning: [],
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
          harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: true,
          vurderInntektsforholdPerioder: [
            {
              fom: '2022-11-09',
              tom: '9999-12-31',
              inntektsforholdListe: [
                {
                  aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                  arbeidsgiverId: '999999997',
                  bruttoInntektPrÅr: 480000,
                  inntektFraInntektsmeldingPrÅr: 480000,
                  arbeidsforholdId: '123',
                  skalRedusereUtbetaling: false,
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
      vilkårsperiodeFom: '2022-11-08',
    },
  ],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2022-11-08',
      tom: '2022-11-08',
      vurderesIBehandlingen: true,
    },
  ],
};

export const TilkommetAktivitetMedForlengelse = Template.bind({});
TilkommetAktivitetMedForlengelse.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgTilkommetInntektsforholdMedForlengelse,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2022-11-08',
      tom: '2022-11-20',
      vurderesIBehandlingen: true,
      erForlengelse: true,
    },
  ],
};

export const TilkommetAktivitetMedForlengelseLukketAP = Template.bind({});
TilkommetAktivitetMedForlengelseLukketAP.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgTilkommetInntektsforholdMedForlengelseLukketAP,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2022-11-08',
      tom: '2022-11-20',
      vurderesIBehandlingen: true,
      erForlengelse: true,
    },
  ],
};

export const TilkommetAktivitetMedRevurdering = Template.bind({});
TilkommetAktivitetMedRevurdering.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgTilkommetInntektsforholdMedRevurdering,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2022-11-08',
      tom: '2022-11-20',
      vurderesIBehandlingen: true,
      erForlengelse: false,
    },
  ],
};

export const TilkommetAktivitetMedRevurdering1MaiKryss = Template.bind({});
TilkommetAktivitetMedRevurdering1MaiKryss.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgTilkommetInntektsforholdMedRevurdering1MaiSplitt,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2023-04-25',
      tom: '2023-05-20',
      vurderesIBehandlingen: true,
      erForlengelse: false,
    },
  ],
};

export const TilkommetAktiviteTreLikePerioderHelgMellomAlle = Template.bind({});
TilkommetAktiviteTreLikePerioderHelgMellomAlle.args = {
  readOnly: false,
  beregningsgrunnlagListe: bgTilkommetAktivitetTrePerioderHelgMellom,
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
  vilkårsperioder: [
    {
      fom: '2023-04-10',
      tom: '2023-04-28',
      vurderesIBehandlingen: true,
      erForlengelse: false,
    },
  ],
};
