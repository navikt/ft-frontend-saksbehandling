import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  aksjonspunktStatus,
  aktivitetStatus as aktivitetStatuser,
  faktaOmBeregningTilfelle,
  inntektskategorier,
  opptjeningAktivitetType,
} from '@navikt/ft-kodeverk';
import {
  AndelForFaktaOmBeregning,
  Behandling,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  FaktaOmBeregningAndel,
  Vilkar,
} from '@navikt/ft-types';
import { alleKodeverk as alleKodeverkMock } from '@navikt/ft-storybook-utils';

import dayjs from 'dayjs';
import BeregningFaktaIndex from './BeregningFaktaIndex';
import FaktaBeregningAksjonspunktCode from './typer/interface/FaktaBeregningAksjonspunktCode';
import {
  aksjonspunkt as aksjonspunktArbeidOgDagpenger,
  beregningsgrunnlag as bgMedArbeidOgDagpenger,
  vilkar as vilkarArbeidOgDagpenger,
} from '../testdata/ArbeidMedDagpengerIOpptjeningsperioden';

import {
  aksjonspunkt as aksjonspunktArbeidOgAAP,
  beregningsgrunnlag as bgArbeidOgAAP,
  vilkar as vilkarArbeidOgAAP,
} from '../testdata/ArbeidMedAAPPåSkjæringstidspunktet';

import {
  aksjonspunkt as aksjonspunktArbeidOgAAPLøstAksjonspunkt,
  beregningsgrunnlag as bgArbeidOgAAPLøstAksjonspunkt,
} from '../testdata/ArbeidMedAAPPåSkjæringstidspunktetLøstAksjonspunkt';

import {
  beregningsgrunnlag as bgToArbeidsforholdIOpptjeningsperioden,
  vilkar as vilkarToArbeidsforholdIOpptjeningsperioden,
} from '../testdata/ToArbeidsforholdIOpptjeningsperioden';

import agOpplysninger from '../testdata/arbeidsgiverOpplysninger';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-redux-legacy/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const {
  VURDER_MOTTAR_YTELSE,
  VURDER_BESTEBEREGNING,
  VURDER_LONNSENDRING,
  VURDER_NYOPPSTARTET_FL,
  VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
  VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT,
  VURDER_MILITÆR_SIVILTJENESTE,
  VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
  VURDER_ETTERLONN_SLUTTPAKKE,
  FASTSETT_BG_KUN_YTELSE,
  VURDER_SN_NY_I_ARBEIDSLIVET,
} = faktaOmBeregningTilfelle;

const lagBeregningsgrunnlag = (
  andeler: FaktaOmBeregningAndel[],
  faktaOmBeregning: FaktaOmBeregning,
  stp = '2022-03-02',
): Beregningsgrunnlag => ({
  vilkårperiodeFom: stp,
  periode: {
    fom: stp,
    tom: dayjs(stp).add(10, 'days'),
  },
  avklaringsbehov: [],
  skjaeringstidspunktBeregning: stp,
  dekningsgrad: null,
  grunnbeløp: null,
  erOverstyrtInntekt: null,
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPrStatusOgAndel: andeler.map((andel) => ({
        andelsnr: andel.andelsnr,
        aktivitetStatus: andel.aktivitetStatus,
        inntektskategori: andel.inntektskategori,
      })),
    },
  ],
  faktaOmBeregning,
} as Beregningsgrunnlag);

const lagAndel = (andelsnr: number, aktivitetStatus: string, inntektskategori: string): FaktaOmBeregningAndel => ({
  andelsnr,
  aktivitetStatus,
  inntektskategori,
});

const standardFaktaArbeidstakerAndel = {
  ...lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften',
    arbeidsgiverId: '12345678',
    arbeidsgiverIdent: '12345678',
    startdato: '01.01.2019',
    arbeidsforholdType: opptjeningAktivitetType.ARBEID,
  },
};
const standardFaktaArbeidstakerAndel2 = {
  ...lagAndel(4, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften2',
    arbeidsgiverId: '12345679',
    arbeidsgiverIdent: '12345679',
    startdato: '01.01.2019',
    opphoersdato: '01.01.2020',
    arbeidsforholdType: opptjeningAktivitetType.ARBEID,
  },
};
const tidsbegrensetFaktaArbeidstakerAndel = {
  ...lagAndel(6, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften3',
    arbeidsgiverId: '12345671',
    arbeidsgiverIdent: '12345671',
    startdato: '01.09.2019',
    opphoersdato: '01.01.2020',
    arbeidsforholdType: opptjeningAktivitetType.ARBEID,
  },
};
const etterlønnSluttpakkeFaktaArbeidstakerAndel = {
  ...lagAndel(7, aktivitetStatuser.ARBEIDSTAKER, inntektskategorier.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften4',
    arbeidsgiverId: '795349533',
    arbeidsgiverIdent: '795349533',
    startdato: '01.09.2019',
    arbeidsforholdType: opptjeningAktivitetType.ETTERLONN_SLUTTPAKKE,
  },
};
const standardFaktaDagpengerAndel = {
  ...lagAndel(3, aktivitetStatuser.DAGPENGER, inntektskategorier.DAGPENGER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaFrilansAndel = {
  ...lagAndel(2, aktivitetStatuser.FRILANSER, inntektskategorier.FRILANSER),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaMilitærAndel = {
  ...lagAndel(5, aktivitetStatuser.MILITAER_ELLER_SIVIL, inntektskategorier.ARBEIDSTAKER),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaYtelseAndel = {
  ...lagAndel(8, aktivitetStatuser.KUN_YTELSE, inntektskategorier.UDEFINERT),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaNæringAndel = {
  ...lagAndel(9, aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE, inntektskategorier.SELVSTENDIG_NÆRINGSDRIVENDE),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaAAPAndel = {
  ...lagAndel(10, aktivitetStatuser.ARBEIDSAVKLARINGSPENGER, inntektskategorier.ARBEIDSAVKLARINGSPENGER),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};

const merknaderFraBeslutter = {
  notAccepted: false,
};
const vilkar: Vilkar = {
  vilkarType: '',
  vilkarStatus: '',
  merknadParametere: {},
  avslagKode: '',
  overstyrbar: true,
  perioder: [
    {
      vurderesIBehandlingen: true,
      merknadParametere: { name: '' },
      periode: {
        fom: '2022-03-02',
        tom: '2022-03-04',
      },
      vilkarStatus: 'IKKE_VURDERT',
    },
  ],
};

export default {
  title: 'fakta-beregning',
  component: BeregningFaktaIndex,
};

/**
 * Arbeid og dagpenger
 *
 * Her er det ingen aksjonspunkt, men panelet skal vere synlig siden saksbehandler har overstyringsrolle
 *
 */
export const ArbeidOgDagpenger = () => (
  <BeregningFaktaIndex
    behandling={behandling}
    beregningsgrunnlag={bgMedArbeidOgDagpenger}
    aksjonspunkter={aksjonspunktArbeidOgDagpenger}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    alleMerknaderFraBeslutter={{
      [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
    }}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarArbeidOgDagpenger}
  />
);

/**
 * To arbeidsforhold og saksbehandler har overstyringsrolle
 *
 * Her er det ikkje aksjonspunkt, men panelet skal likevel vere synlig siden saksbehandler er overstyrer
 *
 */
export const ToArbeidsforholdIOpptjeningsperioden = () => (
  <BeregningFaktaIndex
    behandling={behandling}
    beregningsgrunnlag={bgToArbeidsforholdIOpptjeningsperioden}
    aksjonspunkter={[]}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    alleMerknaderFraBeslutter={{}}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarToArbeidsforholdIOpptjeningsperioden}
  />
);

/**
 * Arbeid og AAP med uført aksjonspunkt
 *
 * Dersom bruker har både arbeid og full AAP på skjæringstidspunktet blir det opprettet aksjonspunkt 5052.
 * I dette scenarioet setter opp panelet i situasjonen der saksbehandler ser aksjonspunktet for første gang.
 *
 */
export const ArbeidOgAAP = () => (
  <BeregningFaktaIndex
    behandling={behandling}
    beregningsgrunnlag={bgArbeidOgAAP}
    aksjonspunkter={aksjonspunktArbeidOgAAP}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    alleMerknaderFraBeslutter={{}}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarArbeidOgAAP}
  />
);

/**
 * Arbeid og AAP med uført aksjonspunkt
 *
 * Dersom bruker har både arbeid og full AAP på skjæringstidspunktet blir det opprettet aksjonspunkt 5052.
 * I dette scenarioet setter opp panelet i situasjonen der saksbehandler har løst aksjonspunktet 5052 og gått videre.
 *
 */
export const ArbeidOgAAPMedUtførtAksjonspunkt = () => (
  <BeregningFaktaIndex
    behandling={behandling}
    beregningsgrunnlag={bgArbeidOgAAPLøstAksjonspunkt}
    aksjonspunkter={aksjonspunktArbeidOgAAPLøstAksjonspunkt}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    alleMerknaderFraBeslutter={{}}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarArbeidOgAAP}
  />
);

export const FrilansOgArbeidsforholdMedLønnendringOgNyoppstartet = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };
  const frilansBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaFrilansAndel.andelsnr,
    aktivitetStatus: standardFaktaFrilansAndel.aktivitetStatus,
    inntektskategori: standardFaktaFrilansAndel.inntektskategori,
    erNyoppstartet: null,
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel, frilansBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel, standardFaktaFrilansAndel];
  const vurderMottarYtelse = {
    erFrilans: true,
    frilansInntektPrMnd: 20000,
    arbeidstakerAndelerUtenIM: [],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_LONNSENDRING, VURDER_NYOPPSTARTET_FL, VURDER_MOTTAR_YTELSE],
    arbeidsforholdMedLønnsendringUtenIM: [arbeidstakerBeregningsgrunnlagAndel],
    vurderMottarYtelse,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag1 = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02');
  const beregningsgrunnlag2 = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-15');

  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag1, beregningsgrunnlag2]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const DagpengerOgArbeidstakerMedVurderingAvBesteberegning = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };
  const dagpengerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaDagpengerAndel.andelsnr,
    aktivitetStatus: standardFaktaDagpengerAndel.aktivitetStatus ? standardFaktaDagpengerAndel.aktivitetStatus : '',
    inntektskategori: standardFaktaDagpengerAndel.inntektskategori ? standardFaktaDagpengerAndel.inntektskategori : '',
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel, dagpengerBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel, standardFaktaDagpengerAndel];
  const vurderBesteberegning = {
    andeler: [standardFaktaDagpengerAndel, standardFaktaArbeidstakerAndel],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_BESTEBEREGNING],
    vurderBesteberegning,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);

  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const KunArbeidstakerMedVurderingAvBesteberegning = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };
  const arbeidstakerBeregningsgrunnlagAndel2 = {
    andelsnr: standardFaktaArbeidstakerAndel2.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel2.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel2.inntektskategori,
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel, arbeidstakerBeregningsgrunnlagAndel2];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel, standardFaktaArbeidstakerAndel2];
  const vurderBesteberegning = {
    andeler: [standardFaktaArbeidstakerAndel2, standardFaktaArbeidstakerAndel],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_BESTEBEREGNING],
    vurderBesteberegning,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const FrilansOgArbeidsforholdISammeOrganisasjon = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: standardFaktaArbeidstakerAndel.arbeidsforhold,
  };
  const frilansBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaFrilansAndel.andelsnr,
    aktivitetStatus: standardFaktaFrilansAndel.aktivitetStatus,
    inntektskategori: standardFaktaFrilansAndel.inntektskategori,
    erNyoppstartet: null,
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel, frilansBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel, standardFaktaFrilansAndel];
  const vurderMottarYtelse = {
    erFrilans: true,
    frilansInntektPrMnd: 30000,
    arbeidstakerAndelerUtenIM: [],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_AT_OG_FL_I_SAMME_ORGANISASJON, VURDER_MOTTAR_YTELSE],
    arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerBeregningsgrunnlagAndel],
    vurderMottarYtelse,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const VurderingAvMilitær = () => {
  const arbeidstakerMilitærAndel = {
    andelsnr: standardFaktaMilitærAndel.andelsnr,
    aktivitetStatus: standardFaktaMilitærAndel.aktivitetStatus,
    inntektskategori: standardFaktaMilitærAndel.inntektskategori,
  };
  const andeler = [arbeidstakerMilitærAndel];
  const andelerForFaktaOmBeregning = [standardFaktaMilitærAndel];
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_MILITÆR_SIVILTJENESTE],
    andelerForFaktaOmBeregning,
  };
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const FrilansOgTidsbegrensetArbeidsforholdISammeOrganisasjon = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: tidsbegrensetFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: tidsbegrensetFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: tidsbegrensetFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: tidsbegrensetFaktaArbeidstakerAndel.arbeidsforhold,
  } as AndelForFaktaOmBeregning;
  const frilansBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaFrilansAndel.andelsnr,
    aktivitetStatus: standardFaktaFrilansAndel.aktivitetStatus,
    inntektskategori: standardFaktaFrilansAndel.inntektskategori,
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel, frilansBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [tidsbegrensetFaktaArbeidstakerAndel, standardFaktaFrilansAndel];
  const vurderMottarYtelse = {
    erFrilans: true,
    frilansInntektPrMnd: 30000,
    arbeidstakerAndelerUtenIM: [],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [
      VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
      VURDER_MOTTAR_YTELSE,
      VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
    ],
    arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerBeregningsgrunnlagAndel],
    kortvarigeArbeidsforhold: [arbeidstakerBeregningsgrunnlagAndel],
    vurderMottarYtelse,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const KunTidsbegrensetArbeidsforhold = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: tidsbegrensetFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: tidsbegrensetFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: tidsbegrensetFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: tidsbegrensetFaktaArbeidstakerAndel.arbeidsforhold,
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [tidsbegrensetFaktaArbeidstakerAndel];
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD],
    kortvarigeArbeidsforhold: [arbeidstakerBeregningsgrunnlagAndel],
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const VurderingAvEtterlønnSluttpakke = () => {
  const etterlønnSluttpakkeBeregningsgrunnlagAndel = {
    andelsnr: etterlønnSluttpakkeFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: etterlønnSluttpakkeFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: etterlønnSluttpakkeFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: etterlønnSluttpakkeFaktaArbeidstakerAndel.arbeidsforhold,
  };
  const andeler = [etterlønnSluttpakkeBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [etterlønnSluttpakkeFaktaArbeidstakerAndel];
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_ETTERLONN_SLUTTPAKKE],
    andelerForFaktaOmBeregning,
  };
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const FastsettingAvBeregningsgrunnlagForKunYtelse = () => {
  const beregningsgrunnlagYtelseAndel = {
    andelsnr: standardFaktaYtelseAndel.andelsnr,
    aktivitetStatus: standardFaktaYtelseAndel.aktivitetStatus,
    inntektskategori: standardFaktaYtelseAndel.inntektskategori,
  };
  const andeler = [beregningsgrunnlagYtelseAndel];
  const andelerForFaktaOmBeregning = [standardFaktaYtelseAndel];
  const kunYtelse = {
    fodendeKvinneMedDP: false,
    andeler,
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [FASTSETT_BG_KUN_YTELSE],
    andelerForFaktaOmBeregning,
    kunYtelse,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const SelvstendigNæringNyIArbeidslivet = () => {
  const beregningsgrunnlagNæringAndel = {
    andelsnr: standardFaktaNæringAndel.andelsnr,
    aktivitetStatus: standardFaktaNæringAndel.aktivitetStatus,
    inntektskategori: standardFaktaNæringAndel.inntektskategori,
  };
  const andeler = [beregningsgrunnlagNæringAndel];
  const andelerForFaktaOmBeregning = [standardFaktaNæringAndel];
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_SN_NY_I_ARBEIDSLIVET],
    andelerForFaktaOmBeregning,
  };
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const KombinasjonstestForFaktapanel = () => {
  const aapAktivitet = {
    arbeidsforholdType: opptjeningAktivitetType.AAP,
    fom: '01-01-2019',
    tom: '01-04-2020',
  };
  const arbeidsAktivitet = {
    ...standardFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const arbeidsAktivitet2 = {
    ...standardFaktaArbeidstakerAndel2.arbeidsforhold,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const tidsbegrensetarbeidsAktivitet = {
    ...tidsbegrensetFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const næringAktivitet = {
    arbeidsforholdType: opptjeningAktivitetType.NARING,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const etterlonnSluttpakkeAktivitet = {
    ...etterlønnSluttpakkeFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const frilansAktivitet = {
    arbeidsforholdType: opptjeningAktivitetType.FRILANS,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const militærAktivitet = {
    arbeidsforholdType: opptjeningAktivitetType.MILITAR_ELLER_SIVILTJENESTE,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const aktiviteter = [
    aapAktivitet,
    arbeidsAktivitet,
    arbeidsAktivitet2,
    næringAktivitet,
    tidsbegrensetarbeidsAktivitet,
    etterlonnSluttpakkeAktivitet,
    frilansAktivitet,
    militærAktivitet,
  ];
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };
  const arbeidstakerBeregningsgrunnlagAndel2 = {
    andelsnr: standardFaktaArbeidstakerAndel2.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel2.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel2.inntektskategori,
    arbeidsforhold: standardFaktaArbeidstakerAndel2.arbeidsforhold,
  };
  const tidsbegrensetarbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: tidsbegrensetFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: tidsbegrensetFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: tidsbegrensetFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: tidsbegrensetFaktaArbeidstakerAndel.arbeidsforhold,
    lagtTilAvSaksbehandler: false,
  };
  const beregningsgrunnlagNæringAndel = {
    andelsnr: standardFaktaNæringAndel.andelsnr,
    aktivitetStatus: standardFaktaNæringAndel.aktivitetStatus,
    inntektskategori: standardFaktaNæringAndel.inntektskategori,
  };
  const aapBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaAAPAndel.andelsnr,
    aktivitetStatus: standardFaktaAAPAndel.aktivitetStatus,
    inntektskategori: standardFaktaAAPAndel.inntektskategori,
  };
  const etterlønnSluttpakkeBeregningsgrunnlagAndel = {
    andelsnr: etterlønnSluttpakkeFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: etterlønnSluttpakkeFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: etterlønnSluttpakkeFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: etterlønnSluttpakkeFaktaArbeidstakerAndel.arbeidsforhold,
  };
  const frilansBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaFrilansAndel.andelsnr,
    aktivitetStatus: standardFaktaFrilansAndel.aktivitetStatus,
    inntektskategori: standardFaktaFrilansAndel.inntektskategori,
    erNyoppstartet: null,
  };
  const militærBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaMilitærAndel.andelsnr,
    aktivitetStatus: standardFaktaMilitærAndel.aktivitetStatus,
    inntektskategori: standardFaktaMilitærAndel.inntektskategori,
  };
  const andeler = [
    arbeidstakerBeregningsgrunnlagAndel,
    arbeidstakerBeregningsgrunnlagAndel2,
    tidsbegrensetarbeidstakerBeregningsgrunnlagAndel,
    beregningsgrunnlagNæringAndel,
    aapBeregningsgrunnlagAndel,
    etterlønnSluttpakkeBeregningsgrunnlagAndel,
    frilansBeregningsgrunnlagAndel,
    militærBeregningsgrunnlagAndel,
  ];
  const andelerForFaktaOmBeregning = [
    standardFaktaArbeidstakerAndel,
    standardFaktaArbeidstakerAndel2,
    tidsbegrensetFaktaArbeidstakerAndel,
    standardFaktaNæringAndel,
    standardFaktaAAPAndel,
    etterlønnSluttpakkeFaktaArbeidstakerAndel,
    standardFaktaFrilansAndel,
    standardFaktaMilitærAndel,
  ];
  const refusjonskravSomKommerForSentListe = [
    {
      arbeidsgiverIdent: standardFaktaArbeidstakerAndel.arbeidsforhold.arbeidsgiverIdent,
    },
  ];
  const vurderMottarYtelse = {
    erFrilans: true,
    frilansInntektPrMnd: 30000,
    arbeidstakerAndelerUtenIM: [standardFaktaArbeidstakerAndel2],
  };
  const vurderBesteberegning = {
    andeler: andelerForFaktaOmBeregning,
  };

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [
      VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT,
      VURDER_SN_NY_I_ARBEIDSLIVET,
      VURDER_NYOPPSTARTET_FL,
      VURDER_ETTERLONN_SLUTTPAKKE,
      VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
      VURDER_BESTEBEREGNING,
      VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
      VURDER_MOTTAR_YTELSE,
      VURDER_MILITÆR_SIVILTJENESTE,
    ],
    refusjonskravSomKommerForSentListe,
    arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerBeregningsgrunnlagAndel2],
    kortvarigeArbeidsforhold: [tidsbegrensetarbeidstakerBeregningsgrunnlagAndel],
    vurderBesteberegning,
    andelerForFaktaOmBeregning,
    vurderMottarYtelse,
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '01-01-2020',
          aktiviteter,
        },
      ],
    },
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.AVKLAR_AKTIVITETER,
          status: aksjonspunktStatus.UTFORT,
          begrunnelse: 'En begrunnelse for at arbeidsforholdet var gyldig.',
          kanLoses: true,
          erAktivt: true,
        },
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const OverstyringAvInntekt = () => {
  const arbeidsAktivitet = {
    ...standardFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const arbeidsAktivitet2 = {
    ...standardFaktaArbeidstakerAndel2.arbeidsforhold,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const aktiviteter = [arbeidsAktivitet, arbeidsAktivitet2];

  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };
  const arbeidstakerBeregningsgrunnlagAndel2 = {
    andelsnr: standardFaktaArbeidstakerAndel2.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel2.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel2.inntektskategori,
  };
  const andeler = [arbeidstakerBeregningsgrunnlagAndel, arbeidstakerBeregningsgrunnlagAndel2];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel, standardFaktaArbeidstakerAndel2];
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [],
    andelerForFaktaOmBeregning,
    avklarAktiviteter: {
      aktiviteterTomDatoMapping: [
        {
          tom: '01-01-2020',
          aktiviteter,
        },
      ],
    },
  };
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);

  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const VurderKunYtelseBesteberegning = () => {
  const beregningsgrunnlagYtelseAndel = {
    andelsnr: standardFaktaYtelseAndel.andelsnr,
    aktivitetStatus: standardFaktaYtelseAndel.aktivitetStatus,
    inntektskategori: standardFaktaYtelseAndel.inntektskategori,
  };
  const andeler = [beregningsgrunnlagYtelseAndel];
  const andelerForFaktaOmBeregning = [standardFaktaYtelseAndel];
  const kunYtelse = {
    fodendeKvinneMedDP: true,
    andeler,
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [FASTSETT_BG_KUN_YTELSE],
    andelerForFaktaOmBeregning,
    kunYtelse,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning);
  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[beregningsgrunnlag]}
      aksjonspunkter={[
        {
          definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
          kanLoses: true,
          erAktivt: true,
        },
      ]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const ReadonlyForVanligSaksbehandlerUtenOverstyrerrolleMedOverstyringsaksjonspunkt = () => {
  const overstyringAPBeregningsaktiviteter = {
    id: 1,
    definisjon: FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
    status: aksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
    begrunnelse: undefined,
  };

  const overstyringAPBeregningsgrunnlag = {
    id: 1,
    definisjon: FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
    status: aksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
    begrunnelse: undefined,
  };

  return (
    <BeregningFaktaIndex
      behandling={behandling}
      beregningsgrunnlag={[
        {
          ...bgMedArbeidOgDagpenger[0],
          avklaringsbehov: [overstyringAPBeregningsaktiviteter, overstyringAPBeregningsgrunnlag],
        },
      ]}
      aksjonspunkter={[overstyringAPBeregningsaktiviteter, overstyringAPBeregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      alleMerknaderFraBeslutter={{
        [FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: merknaderFraBeslutter,
      }}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      harApneAksjonspunkter
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkarArbeidOgDagpenger}
    />
  );
};
