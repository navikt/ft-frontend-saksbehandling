import {
  AksjonspunktStatus,
  AktivitetStatus as aktivitetStatuser,
  FaktaOmBeregningTilfelle,
  Inntektskategori,
  OpptjeningAktivitetType,
} from '@navikt/ft-kodeverk';
import { alleKodeverk as alleKodeverkMock } from '@navikt/ft-storybook-utils';
import {
  AndelForFaktaOmBeregning,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  FaktaOmBeregningAndel,
  Vilkar,
} from '@navikt/ft-types';
import '@navikt/ft-ui-komponenter/dist/style.css';
import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react';
import dayjs from 'dayjs';
import React from 'react';
import {
  beregningsgrunnlag as bgArbeidOgAAP,
  vilkar as vilkarArbeidOgAAP,
} from '../testdata/ArbeidMedAAPPåSkjæringstidspunktet';
import { beregningsgrunnlag as bgArbeidOgAAPLøstAksjonspunkt } from '../testdata/ArbeidMedAAPPåSkjæringstidspunktetLøstAksjonspunkt';
import {
  beregningsgrunnlag as bgMedArbeidOgDagpenger,
  vilkar as vilkarArbeidOgDagpenger,
} from '../testdata/ArbeidMedDagpengerIOpptjeningsperioden';
import agOpplysninger from '../testdata/arbeidsgiverOpplysninger';
import {
  beregningsgrunnlag as bgToArbeidsforholdIOpptjeningsperioden,
  vilkar as vilkarToArbeidsforholdIOpptjeningsperioden,
} from '../testdata/ToArbeidsforholdIOpptjeningsperioden';
import BeregningFaktaIndex from './BeregningFaktaIndex';
import FaktaBeregningAksjonspunktCode from './typer/interface/FaktaBeregningAksjonspunktCode';

const opprettetVurderFakta = {
  definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: undefined,
  kanLoses: true,
};

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
} = FaktaOmBeregningTilfelle;

const lagBeregningsgrunnlag = (
  andeler: FaktaOmBeregningAndel[],
  faktaOmBeregning: FaktaOmBeregning,
  stp = '2022-03-02',
  avklaringsbehov = [],
): Beregningsgrunnlag =>
  ({
    vilkårsperiodeFom: stp,
    periode: {
      fom: stp,
      tom: dayjs(stp).subtract(-10, 'days'),
    },
    avklaringsbehov,
    skjaeringstidspunktBeregning: stp,
    dekningsgrad: null,
    grunnbeløp: null,
    erOverstyrtInntekt: null,
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: stp,
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        beregningsgrunnlagPrStatusOgAndel: andeler.map(andel => ({
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
  ...lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften',
    arbeidsgiverId: '12345678',
    arbeidsgiverIdent: '12345678',
    startdato: '01.01.2019',
    arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  },
};
const standardFaktaArbeidstakerAndel2 = {
  ...lagAndel(4, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften2',
    arbeidsgiverId: '12345679',
    arbeidsgiverIdent: '12345679',
    startdato: '01.01.2019',
    opphoersdato: '01.01.2020',
    arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  },
};
const tidsbegrensetFaktaArbeidstakerAndel = {
  ...lagAndel(6, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften3',
    arbeidsgiverId: '12345671',
    arbeidsgiverIdent: '12345671',
    startdato: '01.09.2019',
    opphoersdato: '01.01.2020',
    arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  },
};
const etterlønnSluttpakkeFaktaArbeidstakerAndel = {
  ...lagAndel(7, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverNavn: 'Bedriften4',
    arbeidsgiverId: '795349533',
    arbeidsgiverIdent: '795349533',
    startdato: '01.09.2019',
    arbeidsforholdType: OpptjeningAktivitetType.ETTERLONN_SLUTTPAKKE,
  },
};
const standardFaktaDagpengerAndel = {
  ...lagAndel(3, aktivitetStatuser.DAGPENGER, Inntektskategori.DAGPENGER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaFrilansAndel = {
  ...lagAndel(2, aktivitetStatuser.FRILANSER, Inntektskategori.FRILANSER),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaMilitærAndel = {
  ...lagAndel(5, aktivitetStatuser.MILITAER_ELLER_SIVIL, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaYtelseAndel = {
  ...lagAndel(8, aktivitetStatuser.BRUKERS_ANDEL, Inntektskategori.UDEFINERT),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaNæringAndel = {
  ...lagAndel(9, aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE, Inntektskategori.SELVSTENDIG_NÆRINGSDRIVENDE),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};
const standardFaktaAAPAndel = {
  ...lagAndel(10, aktivitetStatuser.ARBEIDSAVKLARINGSPENGER, Inntektskategori.ARBEIDSAVKLARINGSPENGER),
  belopReadOnly: 10000,
  lagtTilAvSaksbehandler: false,
};

const vilkar: Vilkar = {
  vilkarType: '',
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

const lagVilkar = perioder => ({
  vilkarType: '',
  overstyrbar: true,
  perioder: perioder.map(p => ({
    vurderesIBehandlingen: p.vurderesIBehandlingen,
    merknadParametere: { name: '' },
    periode: {
      fom: p.fom,
      tom: p.tom,
    },
    vilkarStatus: 'IKKE_VURDERT',
  })),
});

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
export const ArbeidOgDagpenger: Story = () => (
  <BeregningFaktaIndex
    beregningsgrunnlag={bgMedArbeidOgDagpenger}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarArbeidOgDagpenger}
  />
);

/**
 * Aktiviteter i beregning er overstyrt og aksjonspunktet er i status OPPRETTET.
 * Saksbehandler er ikke overstyrer. Får ikke lov til å redigere.
 */
export const VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet: Story = () => {
  const overstyringAPBeregningsaktiviteter = {
    id: 1,
    definisjon: FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
    status: AksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
    begrunnelse: undefined,
  };

  const overstyringAPBeregningsgrunnlag = {
    id: 1,
    definisjon: FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
    status: AksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    erAktivt: true,
    begrunnelse: undefined,
  };

  const beregningsgrunnlag = {
    ...bgMedArbeidOgDagpenger[0],
    avklaringsbehov: [overstyringAPBeregningsaktiviteter, overstyringAPBeregningsgrunnlag],
  };

  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkarArbeidOgDagpenger}
    />
  );
};

/**
 * To arbeidsforhold og saksbehandler har overstyringsrolle
 *
 * Her er det ikkje aksjonspunkt, men panelet skal likevel vere synlig siden saksbehandler er overstyrer
 *
 */
export const ToArbeidsforholdIOpptjeningsperioden = () => (
  <BeregningFaktaIndex
    beregningsgrunnlag={bgToArbeidsforholdIOpptjeningsperioden}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarToArbeidsforholdIOpptjeningsperioden}
  />
);

/**
 * Arbeid og AAP med opprettet aksjonspunkt
 *
 * Dersom bruker har både arbeid og full AAP på skjæringstidspunktet blir det opprettet aksjonspunkt 5052.
 * I dette scenarioet setter opp panelet i situasjonen der saksbehandler ser aksjonspunktet for første gang.
 *
 */
export const ArbeidOgAAP: Story = () => (
  <BeregningFaktaIndex
    beregningsgrunnlag={bgArbeidOgAAP}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
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
export const ArbeidOgAAPMedUtførtAksjonspunkt: Story = () => (
  <BeregningFaktaIndex
    beregningsgrunnlag={bgArbeidOgAAPLøstAksjonspunkt}
    erOverstyrer
    alleKodeverk={alleKodeverkMock as any}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarArbeidOgAAP}
  />
);

/**
 * Opprettet aksjonspunkt i 5058, ingen aksjonspunkt i 5052.
 *
 * Ikke overstyringsrettighet.
 * Bruker har ikke dagpenger på stp, men dagpenger i opptjeningsperioden.
 * Aksjonspunkt for vurdering av om bruker skal beregnes etter besteberegning.
 * Dersom bruker beregnes etter besteberegning skal det legges til en andel for Dagpenger og både Arbeid og Dagpenger skal kunne redigeres.
 *
 * Skal ikke vise liste over aktiviteter, kun vurder fakta med vurdering av besteberegning
 */
export const VurderingAvBesteberegningMedDagpengerIOpptjeningsperioden: Story = () => (
  <BeregningFaktaIndex
    beregningsgrunnlag={bgMedArbeidOgDagpenger}
    erOverstyrer={false}
    alleKodeverk={alleKodeverkMock as any}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={false}
    submittable
    arbeidsgiverOpplysningerPerId={agOpplysninger}
    setFormData={() => undefined}
    vilkar={vilkarArbeidOgDagpenger}
  />
);

/**
 * To beregningsgrunnlag med aksjonspunkt 5058 i begge faner
 *
 * Kombinasjonstilfelle
 * - Vurdering om søker mottar ytelse for frilansaktivitet
 * - Arbeid og frilans i samme organisasjon
 * - Lønnsendring i beregningsperioden for arbeidsforhold
 * - Vurdering av om frilansaktivitet er nyoppstartet
 *
 */
export const FrilansOgArbeidsforholdMedLønnendringOgNyoppstartet: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag1 = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  const beregningsgrunnlag2 = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-15', [opprettetVurderFakta]);

  const callback = submitCallback || (action('button-click') as (data: any) => Promise<any>);

  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag1, beregningsgrunnlag2]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={callback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={lagVilkar([
        { fom: '2022-03-02', tom: '2022-03-10', vurderesIBehandlingen: false },
        { fom: '2022-03-15', tom: '2022-04-02', vurderesIBehandlingen: true },
      ])}
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Bruker har direkte overgang fra annen ytelse uten andre aktiviteter på skjæringstidspunktet.
 *
 * I slike saker blir saksehandler bedt om å fastsette inntekt og inntektskategori fra ytelse.
 * Det skal også vere mulig å legge til flere andeler med ulike inntektskategorier, men ikke samme inntektskategori flere ganger.
 *
 */
export const FastsettingAvBeregningsgrunnlagForKunYtelse: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback || (action('button-click') as (data: any) => Promise<any>)}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Bruker har arbeid og frilansaktivitet for samme organisasjon i tillegg til et arbeidsforhold i en annen organisasjon.
 *
 * I dette tilfellet må saksbehandler fastsette inntekt for arbeidsforholdet og frilansaktiviteten manuelt
 *
 */
export const FrilansOgArbeidstakerISammeOrganisasjon: Story = ({ submitCallback }) => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
    arbeidsforhold: standardFaktaArbeidstakerAndel.arbeidsforhold,
  };
  const arbeidstakerBeregningsgrunnlagAndel2 = {
    andelsnr: standardFaktaArbeidstakerAndel2.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel2.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel2.inntektskategori,
    arbeidsforhold: standardFaktaArbeidstakerAndel2.arbeidsforhold,
  };
  const frilansBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaFrilansAndel.andelsnr,
    aktivitetStatus: standardFaktaFrilansAndel.aktivitetStatus,
    inntektskategori: standardFaktaFrilansAndel.inntektskategori,
    erNyoppstartet: null,
  };
  const andeler = [
    arbeidstakerBeregningsgrunnlagAndel,
    arbeidstakerBeregningsgrunnlagAndel2,
    frilansBeregningsgrunnlagAndel,
  ];
  const andelerForFaktaOmBeregning = [
    standardFaktaArbeidstakerAndel,
    standardFaktaArbeidstakerAndel2,
    standardFaktaFrilansAndel,
  ];
  const vurderMottarYtelse = {
    erFrilans: true,
    frilansInntektPrMnd: 20000,
    arbeidstakerAndelerUtenIM: [],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_AT_OG_FL_I_SAMME_ORGANISASJON, VURDER_MOTTAR_YTELSE],
    arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerBeregningsgrunnlagAndel],
    andelerForFaktaOmBeregning,
    vurderMottarYtelse,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Vurder om bruker mottar ytelse for frilansaktivitet
 *
 */
export const VurderOmBrukerMottarYtelseForFrilans: Story = ({ submitCallback }) => {
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
    faktaOmBeregningTilfeller: [VURDER_MOTTAR_YTELSE],
    vurderMottarYtelse,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Vurder om bruker har militærtjeneste
 *
 */
export const VurderingAvMilitær: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Kombinasjonstilfelle
 * - Vurder om bruker mottar ytelse for frilansaktivitet
 * - Vurder om arbeidsforhold er tidsbegrenset
 * - Bruker har arbeid og frilansaktivitet for samme organisasjon
 *
 */
export const FrilansOgTidsbegrensetArbeidsforholdISammeOrganisasjon: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Vurder om arbeidsforholdet er tidsbegrenset
 *
 */
export const TidsbegrensetArbeidsforhold: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Vurder om bruker mottar etterlønn eller sluttpakke
 *
 */
export const VurderingAvEtterlønnSluttpakke: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Vurder om søker er ny i arbeidslivet
 *
 */
export const SelvstendigNæringNyIArbeidslivet: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

export const KombinasjonstestForFaktapanel = () => {
  const aapAktivitet = {
    arbeidsforholdType: OpptjeningAktivitetType.AAP,
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
    arbeidsforholdType: OpptjeningAktivitetType.NARING,
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
    arbeidsforholdType: OpptjeningAktivitetType.FRILANS,
    fom: '01-01-2019',
    tom: '01-04-2020',
    skalBrukes: true,
  };
  const militærAktivitet = {
    arbeidsforholdType: OpptjeningAktivitetType.MILITAR_ELLER_SIVILTJENESTE,
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
      skjæringstidspunkt: '',
    },
  } as FaktaOmBeregning;
  const avklaringsbehov = [
    {
      definisjon: FaktaBeregningAksjonspunktCode.AVKLAR_AKTIVITETER,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'En begrunnelse for at arbeidsforholdet var gyldig.',
      kanLoses: true,
    },
    {
      definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ];
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', avklaringsbehov);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Overstyring av inntekt med åpent aksjonspunkt. Saksbehandler har overstyringsrettighet.
 *
 * 2 Arbeidstakerandeler uten tilfeller i fakta om beregning
 *
 */
export const OverstyringAvInntektMedÅpentAksjonspunkt: Story = ({ submitCallback }) => {
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
      skjæringstidspunkt: '',
    },
  };
  const avklaringsbehov = [
    {
      definisjon: FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ];
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', avklaringsbehov);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};

/**
 * Søker har kun ytelse på skjæringstidspunktet med dagpenger i opptjeningsperioden.
 *
 * Vurdering om søker skal beregnes ved besteberegning.
 *
 * Dersom bruker skal beregnes ved besteberegning skal det vises ein link til regneark.
 *
 */
export const VurderKunYtelseBesteberegning: Story = ({ submitCallback }) => {
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
  const beregningsgrunnlag = lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]);
  return (
    <BeregningFaktaIndex
      beregningsgrunnlag={[beregningsgrunnlag]}
      erOverstyrer={false}
      alleKodeverk={alleKodeverkMock as any}
      submitCallback={submitCallback}
      readOnly={false}
      submittable
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      setFormData={() => undefined}
      vilkar={vilkar}
    />
  );
};
