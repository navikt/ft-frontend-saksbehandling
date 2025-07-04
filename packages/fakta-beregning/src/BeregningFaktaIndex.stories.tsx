import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { action } from 'storybook/actions';

import { alleKodeverk as alleKodeverkMock } from '@navikt/ft-frontend-storybook-utils';
import {
  AksjonspunktStatus,
  AktivitetStatus as aktivitetStatuser,
  FaktaOmBeregningTilfelle,
  Inntektskategori,
  OpptjeningAktivitetType,
} from '@navikt/ft-kodeverk';
import type {
  AndelForFaktaOmBeregning,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  FaktaOmBeregningAndel,
} from '@navikt/ft-types';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import {
  beregningsgrunnlag as bgArbeidOgAAP,
  vilkar as vilkarArbeidOgAAP,
} from '../testdata/ArbeidMedAAPPåSkjæringstidspunktet';
import { beregningsgrunnlag as bgArbeidOgAAPLøstAksjonspunkt } from '../testdata/ArbeidMedAAPPåSkjæringstidspunktetLøstAksjonspunkt';
import {
  beregningsgrunnlag as bgMedArbeidOgDagpenger,
  vilkar as vilkarArbeidOgDagpenger,
} from '../testdata/ArbeidMedDagpengerIOpptjeningsperioden';
import { agOpplysninger } from '../testdata/arbeidsgiverOpplysninger';
import { bgOverstyreUtenAvklaringsbehov, vilkarOverstyreUtenAvklaringsbehov } from '../testdata/bgUtenAvklaringsbehov';
import {
  beregningsgrunnlag as bgToArbeidsforholdIOpptjeningsperioden,
  vilkar as vilkarToArbeidsforholdIOpptjeningsperioden,
} from '../testdata/ToArbeidsforholdIOpptjeningsperioden';
import { BeregningFaktaIndex } from './BeregningFaktaIndex';
import { FaktaBeregningAvklaringsbehovCode } from './typer/interface/FaktaBeregningAvklaringsbehovCode';
import type { KodeverkForPanel } from './typer/KodeverkForPanel';
import type { Vilkår, Vilkårperiode } from './typer/Vilkår';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const opprettetVurderFakta = {
  definisjon: FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN,
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
  avklaringsbehov: BeregningAvklaringsbehov[] = [],
): Beregningsgrunnlag =>
  ({
    vilkårsperiodeFom: stp,
    periode: {
      fom: stp,
      tom: dayjs(stp).subtract(-10, 'days'),
    },
    avklaringsbehov,
    skjaeringstidspunktBeregning: stp,
    dekningsgrad: 100,
    grunnbeløp: 100,
    erOverstyrtInntekt: false,
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPeriodeFom: stp,
        beregningsgrunnlagPeriodeTom: TIDENES_ENDE,
        beregningsgrunnlagPrStatusOgAndel: andeler.map(andel => ({
          andelsnr: andel.andelsnr,
          aktivitetStatus: andel.aktivitetStatus,
          inntektskategori: andel.inntektskategori,
          arbeidsforhold: andel.arbeidsforhold,
        })),
      },
    ],
    inntektsgrunnlag: {
      pgiGrunnlag: [],
      sammenligningsgrunnlagInntekter: [],
      beregningsgrunnlagInntekter: [
        {
          fom: '2024-12-01',
          tom: '2024-12-31',
          inntekter: [
            {
              inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
              beløp: 20000,
              arbeidsgiverIdent: '795349533',
            },
          ],
        },
        {
          fom: '2024-11-01',
          tom: '2024-11-30',
          inntekter: [
            {
              inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
              beløp: 30000,
              arbeidsgiverIdent: '795349533',
            },
            {
              inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
              beløp: 31756,
              arbeidsgiverIdent: '12345679',
            },
          ],
        },
        {
          fom: '2024-10-01',
          tom: '2024-10-31',
          inntekter: [
            {
              inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
              beløp: 40000,
              arbeidsgiverIdent: '795349533',
            },
            {
              inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
              beløp: 12456,
              arbeidsgiverIdent: '12345679',
            },
            {
              inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
              beløp: 513,
              arbeidsgiverIdent: '12345678',
            },
            {
              inntektAktivitetType: 'FRILANSINNTEKT',
              beløp: 9824,
            },
          ],
        },
      ],
    },
    faktaOmBeregning,
  }) as Beregningsgrunnlag;

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
    arbeidsgiverIdent: '12345678',
    startdato: '2019-01-01',
    arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  },
};
const standardFaktaArbeidstakerAndel2 = {
  ...lagAndel(4, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverIdent: '12345679',
    startdato: '2019-01-01',
    opphoersdato: '2020-01-01',
    arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  },
};
const tidsbegrensetFaktaArbeidstakerAndel = {
  ...lagAndel(6, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverIdent: '12345671',
    startdato: '2019-09-01',
    opphoersdato: '2020-01-01',
    arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  },
};
const etterlønnSluttpakkeFaktaArbeidstakerAndel = {
  ...lagAndel(7, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER),
  belopReadOnly: 30000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: {
    arbeidsgiverIdent: '795349533',
    startdato: '2019-09-01',
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

const vilkar: Vilkår = {
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

const lagVilkar = (perioder: Vilkårperiode[]): Vilkår => ({
  vilkarType: '',
  overstyrbar: true,
  perioder: perioder.map(p => ({
    vurderesIBehandlingen: p.vurderesIBehandlingen,
    merknadParametere: { name: '' },
    periode: {
      fom: p.periode.fom,
      tom: p.periode.tom,
    },
    vilkarStatus: 'IKKE_VURDERT',
  })),
});

const meta = {
  component: BeregningFaktaIndex,
  args: {
    erOverstyrer: true,
    kodeverkSamling: alleKodeverkMock as KodeverkForPanel,
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    readOnly: false,
    submittable: true,
    setFormData: () => undefined,
    arbeidsgiverOpplysningerPerId: agOpplysninger,
  },
} satisfies Meta<typeof BeregningFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Arbeid og dagpenger
 *
 * Her er det ingen aksjonspunkt, men panelet skal vere synlig siden saksbehandler har overstyringsrolle
 *
 */
export const ArbeidOgDagpengerAp5058: Story = {
  args: {
    beregningsgrunnlag: bgMedArbeidOgDagpenger,
    vilkar: vilkarArbeidOgDagpenger,
  },
};

export const ArbeidOgDagpengerAp5058EnPeriode: Story = {
  args: {
    beregningsgrunnlag: [bgMedArbeidOgDagpenger[0]],
    vilkar: vilkarArbeidOgDagpenger,
  },
};

const lagBeregningsgrunnlag1 = () => {
  const overstyringAPBeregningsaktiviteter = {
    id: 1,
    definisjon: FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
    status: AksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    begrunnelse: undefined,
  };

  const overstyringAPBeregningsgrunnlag = {
    id: 1,
    definisjon: FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
    status: AksjonspunktStatus.OPPRETTET,
    kanLoses: true,
    begrunnelse: undefined,
  };

  return {
    ...bgMedArbeidOgDagpenger[0],
    avklaringsbehov: [overstyringAPBeregningsaktiviteter, overstyringAPBeregningsgrunnlag],
  };
};

/**
 * Aktiviteter i beregning er overstyrt og aksjonspunktet er i status OPPRETTET.
 * Saksbehandler er ikke overstyrer. Får ikke lov til å redigere.
 */
export const VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: [lagBeregningsgrunnlag1()],
    vilkar: vilkarArbeidOgDagpenger,
  },
};

/**
 * To arbeidsforhold og saksbehandler har overstyringsrolle
 *
 * Her er det ikkje aksjonspunkt, men panelet skal likevel vere synlig siden saksbehandler er overstyrer
 *
 */
export const ToArbeidsforholdIOpptjeningsperioden: Story = {
  args: {
    beregningsgrunnlag: bgToArbeidsforholdIOpptjeningsperioden,
    vilkar: vilkarToArbeidsforholdIOpptjeningsperioden,
  },
};

/**
 * Arbeid og AAP med opprettet aksjonspunkt
 *
 * Dersom bruker har både arbeid og full AAP på skjæringstidspunktet blir det opprettet aksjonspunkt 5052.
 * I dette scenarioet setter opp panelet i situasjonen der saksbehandler ser aksjonspunktet for første gang.
 *
 */
export const ArbeidOgAAPAp5052: Story = {
  args: {
    beregningsgrunnlag: bgArbeidOgAAP,
    vilkar: vilkarArbeidOgAAP,
  },
};

/**
 * Arbeid og AAP med uført aksjonspunkt
 *
 * Dersom bruker har både arbeid og full AAP på skjæringstidspunktet blir det opprettet aksjonspunkt 5052.
 * I dette scenarioet setter opp panelet i situasjonen der saksbehandler har løst aksjonspunktet 5052 og gått videre.
 *
 */
export const ArbeidOgAAPMedUtførtAksjonspunktAp5052Ap5058: Story = {
  args: {
    beregningsgrunnlag: bgArbeidOgAAPLøstAksjonspunkt,
    vilkar: vilkarArbeidOgAAP,
  },
};

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
export const VurderingAvBesteberegningMedDagpengerIOpptjeningsperiodenAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: [bgMedArbeidOgDagpenger[0]],
    vilkar: vilkarArbeidOgDagpenger,
  },
};

const lagBeregningsgrunnlag2 = () => {
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

  return [
    lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta]),
    lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-15', [opprettetVurderFakta]),
  ];
};

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
export const FrilansOgArbeidsforholdMedLønnsendringOgNyoppstartetAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag2(),
    vilkar: lagVilkar([
      { periode: { fom: '2022-03-02', tom: '2022-03-10' }, vurderesIBehandlingen: false } as Vilkårperiode,
      { periode: { fom: '2022-03-15', tom: '2022-04-02' }, vurderesIBehandlingen: true } as Vilkårperiode,
    ]),
  },
};

const lagBeregningsgrunnlag3 = () => {
  const frilansBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaFrilansAndel.andelsnr,
    aktivitetStatus: standardFaktaFrilansAndel.aktivitetStatus,
    inntektskategori: standardFaktaFrilansAndel.inntektskategori,
    erNyoppstartet: null,
  };
  const andeler = [frilansBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [standardFaktaFrilansAndel];
  const vurderMottarYtelse = {
    erFrilans: true,
    frilansInntektPrMnd: 20000,
    arbeidstakerAndelerUtenIM: [],
  };
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_NYOPPSTARTET_FL],
    vurderMottarYtelse,
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-15', [opprettetVurderFakta])];
};

/**
 * Vurdering av om frilansaktivitet er nyoppstartet
 */
export const FrilansNyoppstartetAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag3(),
    vilkar: lagVilkar([
      { periode: { fom: '2022-03-15', tom: '2022-04-02' }, vurderesIBehandlingen: true } as Vilkårperiode,
    ]),
  },
};

const lagBeregningsgrunnlag4 = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };

  const andeler = [arbeidstakerBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel];

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_LONNSENDRING],
    arbeidsforholdMedLønnsendringUtenIM: [arbeidstakerBeregningsgrunnlagAndel],
    andelerForFaktaOmBeregning,
  } as FaktaOmBeregning;
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-15', [opprettetVurderFakta])];
};

export const ArbeidsforholdMedLønnsendringAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag4(),
    vilkar: lagVilkar([
      { periode: { fom: '2022-03-15', tom: '2022-04-02' }, vurderesIBehandlingen: true } as Vilkårperiode,
    ]),
  },
};

const lagBeregningsgrunnlag5 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

export const DagpengerOgArbeidstakerMedVurderingAvBesteberegningAP5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag5(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag6 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

export const KunArbeidstakerMedVurderingAvBesteberegningAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag6(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag7 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Bruker har direkte overgang fra annen ytelse uten andre aktiviteter på skjæringstidspunktet.
 *
 * I slike saker blir saksehandler bedt om å fastsette inntekt og inntektskategori fra ytelse.
 * Det skal også vere mulig å legge til flere andeler med ulike inntektskategorier, men ikke samme inntektskategori flere ganger.
 *
 */
export const FastsettingAvBeregningsgrunnlagForKunYtelseAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag7(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag8 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Bruker har arbeid og frilansaktivitet for samme organisasjon i tillegg til et arbeidsforhold i en annen organisasjon.
 *
 * I dette tilfellet må saksbehandler fastsette inntekt for arbeidsforholdet og frilansaktiviteten manuelt
 *
 */
export const FrilansOgArbeidstakerISammeOrganisasjonAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag8(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag9 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Vurder om bruker mottar ytelse for frilansaktivitet
 *
 */
export const VurderOmBrukerMottarYtelseForFrilansAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag9(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag10 = () => {
  const arbeidstakerBeregningsgrunnlagAndel = {
    andelsnr: standardFaktaArbeidstakerAndel.andelsnr,
    aktivitetStatus: standardFaktaArbeidstakerAndel.aktivitetStatus,
    inntektskategori: standardFaktaArbeidstakerAndel.inntektskategori,
  };

  const andeler = [arbeidstakerBeregningsgrunnlagAndel];
  const andelerForFaktaOmBeregning = [standardFaktaArbeidstakerAndel];

  const vurderMottarYtelse = {
    erFrilans: false,
    frilansInntektPrMnd: 0,
    arbeidstakerAndelerUtenIM: [standardFaktaArbeidstakerAndel],
  };

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [VURDER_MOTTAR_YTELSE],
    andelerForFaktaOmBeregning,
    vurderMottarYtelse,
  } as FaktaOmBeregning;
  const avklaringsbehov = [
    {
      definisjon: FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ];
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', avklaringsbehov)];
};

export const VurderOmBrukerMottarYtelseForArbeidstakerAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag10(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag11 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Vurder om bruker har militærtjeneste
 *
 */
export const VurderingAvMilitærAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag11(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag12 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Kombinasjonstilfelle
 * - Vurder om bruker mottar ytelse for frilansaktivitet
 * - Vurder om arbeidsforhold er tidsbegrenset
 * - Bruker har arbeid og frilansaktivitet for samme organisasjon
 *
 */
export const FrilansOgTidsbegrensetArbeidsforholdISammeOrganisasjonAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag12(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag13 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Vurder om arbeidsforholdet er tidsbegrenset
 */
export const TidsbegrensetArbeidsforholdAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag13(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag14 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Vurder om bruker mottar etterlønn eller sluttpakke
 *
 */
export const VurderingAvEtterlønnSluttpakkeAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag14(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag15 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Vurder om søker er ny i arbeidslivet
 */
export const SelvstendigNæringNyIArbeidslivetAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag15(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag16 = () => {
  const aapAktivitet = {
    arbeidsforholdType: OpptjeningAktivitetType.AAP,
    fom: '2019-01-01',
    tom: '2020-04-01',
  };
  const arbeidsAktivitet = {
    ...standardFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const arbeidsAktivitet2 = {
    ...standardFaktaArbeidstakerAndel2.arbeidsforhold,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const tidsbegrensetarbeidsAktivitet = {
    ...tidsbegrensetFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const næringAktivitet = {
    arbeidsforholdType: OpptjeningAktivitetType.NARING,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const etterlonnSluttpakkeAktivitet = {
    ...etterlønnSluttpakkeFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const frilansAktivitet = {
    arbeidsforholdType: OpptjeningAktivitetType.FRILANS,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const militærAktivitet = {
    arbeidsforholdType: OpptjeningAktivitetType.MILITAR_ELLER_SIVILTJENESTE,
    fom: '2019-01-01',
    tom: '2020-04-01',
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
      definisjon: FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'En begrunnelse for at arbeidsforholdet var gyldig.',
      kanLoses: true,
    },
    {
      definisjon: FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ];
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', avklaringsbehov)];
};

export const KombinasjonstestForFaktapanelAp5052Ap5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag16(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag17 = () => {
  const arbeidsAktivitet = {
    ...standardFaktaArbeidstakerAndel.arbeidsforhold,
    fom: '2019-01-01',
    tom: '2020-04-01',
    skalBrukes: true,
  };
  const arbeidsAktivitet2 = {
    ...standardFaktaArbeidstakerAndel2.arbeidsforhold,
    fom: '2019-01-01',
    tom: '2020-04-01',
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
      definisjon: FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ];
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', avklaringsbehov)];
};

/**
 * Overstyring av inntekt med åpent aksjonspunkt. Saksbehandler har overstyringsrettighet.
 *
 * To Arbeidstakerandeler uten tilfeller i fakta om beregning
 *
 */
export const OverstyringAvInntektMedÅpentAksjonspunktAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag17(),
    vilkar: vilkar,
  },
};

const lagBeregningsgrunnlag18 = () => {
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
  return [lagBeregningsgrunnlag(andeler, faktaOmBeregning, '2022-03-02', [opprettetVurderFakta])];
};

/**
 * Søker har kun ytelse på skjæringstidspunktet med dagpenger i opptjeningsperioden.
 *
 * Vurdering om søker skal beregnes ved besteberegning.
 *
 * Dersom bruker skal beregnes ved besteberegning skal det vises ein link til regneark.
 *
 */
export const VurderKunYtelseBesteberegningAp5058: Story = {
  args: {
    erOverstyrer: false,
    beregningsgrunnlag: lagBeregningsgrunnlag18(),
    vilkar: vilkar,
  },
};

/**
 * Overstyrer skal kunne overstyre når det ikke finnes avklaringsbehov.
 *
 */
export const KanOverstyreBGUtenAvklaringsbehov: Story = {
  args: {
    beregningsgrunnlag: bgOverstyreUtenAvklaringsbehov,
    vilkar: vilkarOverstyreUtenAvklaringsbehov,
  },
};
