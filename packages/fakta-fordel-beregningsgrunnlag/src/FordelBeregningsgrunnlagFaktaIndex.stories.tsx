import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { Inntektskategori, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt,
  ArbeidsforholdTilFordeling,
  Behandling,
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
import { alleKodeverk } from '@navikt/ft-storybook-utils';

import {
  bgMedDelvisRefusjon as vurderDelvisRefBG,
  bgUtenDelvisRefusjon as vurderRefusjonBG,
} from '../testdata/VurderRefusjon';
import FordelBeregningsgrunnlagFaktaIndex from './FordelBeregningsgrunnlagFaktaIndex';
import { beregningsgrunnlag as bgArbeidOgGradertNæring } from '../testdata/ArbeidOgGradertNaring';
import { beregningsgrunnlag as bgMedNaturalytelse } from '../testdata/NyttArbeidOgNaturalytelse';
import { FaktaFordelBeregningAksjonspunktCode } from '..';
import VurderRefusjonBeregningsgrunnlagAP from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagAP from './types/interface/FordelBeregningsgrunnlagAP';

// eslint-disable-next-line import/no-unresolved
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

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
    navn: 'KATOLSK KEBAB A/S',
    identifikator: '999999999',
    erPrivatPerson: false,
  },
  999999998: {
    navn: 'JENS MAGNE',
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

const behandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-003',
} as Behandling;

const fordelAP = [
  {
    definisjon: FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG,
    status: 'OPPR',
    kanLoses: true,
  },
];

export default {
  title: 'fakta-fordel-beregningsgrunnlag',
  component: FordelBeregningsgrunnlagFaktaIndex,
};

const lagVilkår = (perioder): Vilkar => ({
  vilkarType: 'VK_41',
  overstyrbar: false,
  perioder: perioder.map(periode => ({
    periode,
    merknadParametere: {},
    vilkarStatus: 'OPPFYLT',
  })),
});

const Template: Story<{
  readOnly: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
  vilkårsperioder?: any[];
}> = ({ readOnly, beregningsgrunnlagListe, submitCallback, vilkårsperioder = null }) => (
  <FordelBeregningsgrunnlagFaktaIndex
    behandlingType={behandling.type}
    beregningsgrunnlagListe={beregningsgrunnlagListe}
    beregningsgrunnlagVilkår={lagVilkår(
      vilkårsperioder ||
        beregningsgrunnlagListe.map(bg => ({
          fom: bg.vilkårsperiodeFom,
          tom: '9999-12-31',
        })),
    )}
    submitCallback={submitCallback}
    readOnly={readOnly}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    submittable
  />
);

const lagBGAndel = (
  andelsnr: number,
  aktivitetstatuskode: string,
  beregnet: number,
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
    beregningsgrunnlagPeriodeTom: tom,
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
  } as Beregningsgrunnlag);

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
  fordelt: number,
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

export const ArbeidOgGradertNæringUtenBeregningsgrunnlag = Template.bind({});
ArbeidOgGradertNæringUtenBeregningsgrunnlag.args = {
  readOnly: false,
  beregningsgrunnlagListe: [bgArbeidOgGradertNæring],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const TilkommetArbeidMedFlyttingAvNaturalytelse = Template.bind({});
TilkommetArbeidMedFlyttingAvNaturalytelse.args = {
  readOnly: false,
  beregningsgrunnlagListe: [bgMedNaturalytelse],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const ViseVurderTilkommetRefusjonskrav = Template.bind({});
ViseVurderTilkommetRefusjonskrav.args = {
  readOnly: false,
  beregningsgrunnlagListe: [vurderRefusjonBG],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon = Template.bind({});
SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon.args = {
  readOnly: false,
  beregningsgrunnlagListe: [vurderDelvisRefBG],
  submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
};

export const AapOgRefusjon = Template.bind({});
AapOgRefusjon.args = {
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

export const FordelingKanEndreRefusjonskrav = Template.bind({});
FordelingKanEndreRefusjonskrav.args = {
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

export const SkalSlåSammenNaturalytelseperioder = Template.bind({});
SkalSlåSammenNaturalytelseperioder.args = {
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

export const FordelingFlereBeregningsgrunnlagKanEndreRefusjonskrav = Template.bind({});
FordelingFlereBeregningsgrunnlagKanEndreRefusjonskrav.args = {
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
