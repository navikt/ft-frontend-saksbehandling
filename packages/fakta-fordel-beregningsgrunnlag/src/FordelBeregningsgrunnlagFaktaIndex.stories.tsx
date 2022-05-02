import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { inntektskategorier, periodeAarsak } from '@navikt/ft-kodeverk';
import {
  Behandling,
  Aksjonspunkt,
  Beregningsgrunnlag,
  FaktaOmFordeling,
  ArbeidsforholdTilFordeling,
  BeregningsgrunnlagPeriodeProp,
  BeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
  FordelBeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
} from '@navikt/ft-types';
import { alleKodeverk } from '@navikt/ft-storybook-utils';

import {
  bgUtenDelvisRefusjon as vurderRefusjonBG,
  bgMedDelvisRefusjon as vurderDelvisRefBG,
  aksjonspunkt as vurderRefusjonAP,
} from '../testdata/VurderRefusjon';
import FordelBeregningsgrunnlagFaktaIndex from './FordelBeregningsgrunnlagFaktaIndex';
import { beregningsgrunnlag as bgArbeidOgGradertNæring, aksjonspunkt as apArbeidOgGradertNæring } from '../testdata/ArbeidOgGradertNaring';
import { beregningsgrunnlag as bgMedNaturalytelse, aksjonspunkt as apMedNaturalytelse } from '../testdata/NyttArbeidOgNaturalytelse';
import { FaktaFordelBeregningAksjonspunktCode } from '..';
import VurderRefusjonBeregningsgrunnlagAP from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagAP from './types/interface/FordelBeregningsgrunnlagAP';

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

const fordelAP = ([{
  definisjon: FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG,
  status: 'OPPR',
  erAktivt: true,
  kanLoses: true,
}]);

export default {
  title: 'fakta/fakta-fordel-beregningsgrunnlag',
  component: FordelBeregningsgrunnlagFaktaIndex,
};

const Template: Story<{
  readOnly: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
}> = ({
  readOnly,
  beregningsgrunnlag,
  submitCallback,
  aksjonspunkter,
}) => (
  <FordelBeregningsgrunnlagFaktaIndex
    behandling={behandling}
    beregningsgrunnlag={beregningsgrunnlag}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    readOnly={readOnly}
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    harApneAksjonspunkter={!!aksjonspunkter}
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

const lagBGPeriode = (andelsliste: BeregningsgrunnlagAndel[], periodeAarsaker: string[], fom: string, tom?: string): BeregningsgrunnlagPeriodeProp => {
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

const lagBG = (perioder: BeregningsgrunnlagPeriodeProp[], faktaOmFordeling: FaktaOmFordeling): Beregningsgrunnlag => ({
  skjaeringstidspunktBeregning: '2019-09-16',
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

const lagFaktaOmFordeling = (arbfor: ArbeidsforholdTilFordeling[], perioder: FordelBeregningsgrunnlagPeriode[]): FaktaOmFordeling => ({
  fordelBeregningsgrunnlag: {
    arbeidsforholdTilFordeling: arbfor,
    fordelBeregningsgrunnlagPerioder: perioder,
  },
});

const lagArbforTilFordeling = (arbGiverId: string, arbId: string, refKrav: number, refKravFom: string): ArbeidsforholdTilFordeling => ({
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
      return inntektskategorier.ARBEIDSTAKER;
    case 'AAP':
      return inntektskategorier.ARBEIDSAVKLARINGSPENGER;
    case 'FL':
      return inntektskategorier.FRILANSER;
    case 'SN':
      return inntektskategorier.SELVSTENDIG_NÆRINGSDRIVENDE;
    default:
      return inntektskategorier.UDEFINERT;
  }
};

const lagFordelingsandel = (andelsnr: number, status: string, ref: number, fordelt: number,
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold): FordelBeregningsgrunnlagAndel => ({
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

const lagArbeidsforhold = (arbeidsgiverId: string, arbeidsforholdId: string, refKrav: number): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent: arbeidsgiverId,
  startdato: '2018-10-09',
  arbeidsforholdId,
  arbeidsforholdType: 'ARBEID',
  refusjonPrAar: refKrav,
  organisasjonstype: 'VIRKSOMHET',
});

export const ArbeidOgGradertNæringUtenBeregningsgrunnlag = Template.bind({});
ArbeidOgGradertNæringUtenBeregningsgrunnlag.args = {
  aksjonspunkter: apArbeidOgGradertNæring,
  readOnly: false,
  beregningsgrunnlag: bgArbeidOgGradertNæring,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const TilkommetArbeidMedFlyttingAvNaturalytelse = Template.bind({});
TilkommetArbeidMedFlyttingAvNaturalytelse.args = {
  aksjonspunkter: apMedNaturalytelse,
  readOnly: false,
  beregningsgrunnlag: bgMedNaturalytelse,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ViseVurderTilkommetRefusjonskrav = Template.bind({});
ViseVurderTilkommetRefusjonskrav.args = {
  aksjonspunkter: vurderRefusjonAP,
  readOnly: false,
  beregningsgrunnlag: vurderRefusjonBG,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon = Template.bind({});
SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon.args = {
  aksjonspunkter: vurderRefusjonAP,
  readOnly: false,
  beregningsgrunnlag: vurderDelvisRefBG,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AapOgRefusjon = Template.bind({});
AapOgRefusjon.args = {
  aksjonspunkter: fordelAP,
  readOnly: false,
  beregningsgrunnlag: lagBG([lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26'),
    lagBGPeriode([lagBGAndel(2, 'AAP', 100000),
      lagBGAndel(1, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000))],
    [periodeAarsak.ENDRING_I_REFUSJONSKRAV], '2019-11-27')],
  lagFaktaOmFordeling([lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
    [lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
      lagFordelPeriode([lagFordelingsandel(2, 'AAP', 0, 0),
        lagFordelingsandel(1, 'AT', 0, 0, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000))],
      true, false, '2019-11-27')])),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FordelingKanEndreRefusjonskrav = Template.bind({});
FordelingKanEndreRefusjonskrav.args = {
  aksjonspunkter: fordelAP,
  readOnly: false,
  beregningsgrunnlag: lagBG([lagBGPeriode([lagBGAndel(1, 'AAP', 100000)], [], '2019-08-05', '2019-11-26'),
    lagBGPeriode([lagBGAndel(2, 'AAP', 100000),
      lagBGAndel(1, 'AT', 300000, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000))],
    [periodeAarsak.ENDRING_I_REFUSJONSKRAV], '2019-11-27')],
  lagFaktaOmFordeling([lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
    [lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
      lagFordelPeriode([lagFordelingsandel(2, 'AAP', 0, 0),
        lagFordelingsandel(1, 'AT', 300000, 0, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000))],
      true, true, '2019-11-27')])),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SkalSlåSammenNaturalytelseperioder = Template.bind({});
SkalSlåSammenNaturalytelseperioder.args = {
  aksjonspunkter: fordelAP,
  readOnly: false,
  beregningsgrunnlag: lagBG([lagBGPeriode([lagBGAndel(1, 'AT', 100000,
    lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000))], [], '2019-08-05', '2019-11-26'),
  lagBGPeriode([lagBGAndel(1, 'AT', 100000,
    lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000))],
  [periodeAarsak.NATURALYTELSE_BORTFALT], '2019-11-27', '2019-12-05'),
  lagBGPeriode([lagBGAndel(1, 'AT', 100000,
    lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000)),
  lagBGAndel(2, 'AT', 300000,
    lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000))], [periodeAarsak.ENDRING_I_REFUSJONSKRAV], '2019-12-06')],
  lagFaktaOmFordeling([lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-12-06')],
    [lagFordelPeriode([lagFordelingsandel(1, 'AT', 0, 0,
      lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000))],
    false, false, '2019-08-05', '2019-11-26'),
    lagFordelPeriode([lagFordelingsandel(1, 'AT', 0, 0,
      lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000))], false, false, '2019-11-27', '2019-12-05'),
    lagFordelPeriode([lagFordelingsandel(1, 'AT', 0, 0,
      lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000)),
    lagFordelingsandel(2, 'AT', 300000, 0, lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000))],
    true, true, '2019-12-06')])),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
