import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import { LønnsendringScenario, PeriodeÅrsak, PgiType } from '@navikt/ft-kodeverk';
import type {
  AktivitetStatus,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
  Inntektsgrunnlag,
  Næring,
  Saksopplysninger,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../testdata/arbeidsgivere';
import {
  lagArbeidInntekt,
  lagFrilansInntekt,
  lagInntektsgrunnlagMåned,
  lagYtelseInntekt,
} from '../../testdata/utils/lagInntektsgrunnlag';
import { BeregningProsessIndex } from '../BeregningProsessIndex';
import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { AksjonspunktKode } from '../utils/aksjonspunkt';
import { SammenligningType } from './kodeverk/sammenligningType';
import { VilkårUtfallType } from './kodeverk/vilkårUtfallType';
import type { BeregningAksjonspunktSubmitType } from './types/BeregningsgrunnlagAP';

import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const STP = '2021-01-01';

const førSTP = (dager: number): string => dayjs(STP).subtract(dager, 'days').format(ISO_DATE_FORMAT);
const etterDato = (dato: string, dager: number): string => dayjs(dato).add(dager, 'days').format(ISO_DATE_FORMAT);
const etterSTP = (dager: number): string => etterDato(STP, dager);

const beregningsperiodeFom = '2022-03-01';
const beregningsperiodeTom = '2022-05-31';
const defaultArbeidsgiverIdent = '222222222';
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const lagNæring = (varigEndring: boolean, nyoppstartet: boolean): Næring => ({
  begrunnelse:
    'Jeg utvidet virksomheten fra en ren transportfirma til også å tilby gardiner. ' +
    'Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
  endringsdato: '2016-05-01',
  erNyoppstartet: nyoppstartet,
  erVarigEndret: varigEndring,
  kanRegnskapsførerKontaktes: true,
  oppgittInntekt: 474257,
  oppstartsdato: '2015-11-01',
  orgnr: '555555555',
  regnskapsførerNavn: 'Regnskapsfører Regn S. Fører',
  regnskapsførerTlf: '99999999',
  utenlandskvirksomhetsnavn: undefined,
  virksomhetType: 'ANNEN',
});

const lagPGIVerdier = () => [
  {
    beløp: 124412,
    årstall: 2017,
  },
  {
    beløp: 98456,
    årstall: 2016,
  },
  {
    beløp: 9861482,
    årstall: 2015,
  },
];

const lagPGISnitt = () =>
  lagPGIVerdier().reduce((total, nesteVerdi) => total + nesteVerdi.beløp, 0) / lagPGIVerdier().length;

const lagSNUtenPGI = (
  andelnr: number,
  beregnet: number | undefined,
  overstyrt: number | undefined,
  skalFastsettGrunnlag: boolean,
  erNyIArbeidslivet?: boolean,
  næring?: Næring,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: 'SN',
  beregningsperiodeFom: '2019-01-01',
  beregningsperiodeTom: '2021-12-31',
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erNyIArbeidslivet,
  skalFastsetteGrunnlag: skalFastsettGrunnlag,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  næringer: næring ? [næring] : [lagNæring(!!overstyrt, false)],
});

const lagSNMedPGI = (
  andelnr: number,
  beregnet: number,
  overstyrt: number | undefined,
  skalFastsettGrunnlag: boolean,
  erNyIArbeidslivet?: boolean,
  næring?: Næring,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: 'SN',
  beregningsperiodeFom: '2019-01-01',
  beregningsperiodeTom: '2021-12-31',
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erNyIArbeidslivet,
  skalFastsetteGrunnlag: skalFastsettGrunnlag,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  pgiSnitt: lagPGISnitt(),
  pgiVerdier: lagPGIVerdier(),
  næringer: næring ? [næring] : [lagNæring(!!overstyrt, false)],
});

const lagBrukersAndelMedPGI = (
  andelnr: number,
  beregnet: number,
  overstyrt: number | undefined,
  skalFastsettGrunnlag: boolean,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: 'BA',
  beregningsperiodeFom: '2019-01-01',
  beregningsperiodeTom: '2021-12-31',
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  skalFastsetteGrunnlag: skalFastsettGrunnlag,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  pgiSnitt: lagPGISnitt(),
  pgiVerdier: lagPGIVerdier(),
});

const lagAPMedKode = (kode: string, begrunnelse?: string): DeepWriteable<BeregningAvklaringsbehov> => ({
  definisjon: kode,
  status: begrunnelse ? 'UTFO' : 'OPPR',
  begrunnelse,
  kanLoses: true,
});

const vilkarMedUtfall = (kode: VilkårUtfallType, fom?: string, tom?: string): Vilkår => ({
  vilkarType: 'FP_VK_41',
  perioder: [
    {
      periode: {
        fom: fom || STP,
        tom: tom || etterSTP(20),
      },
      vurderesIBehandlingen: true,
      vilkarStatus: kode,
      merknadParametere: {},
    },
  ],
  overstyrbar: true,
});

const lagArbeidsforhold = (
  arbeidsgiverIdent: string,
  arbeidsforholdId: string | undefined = undefined,
  eksternArbeidsforholdId?: string | undefined,
  naturalytelseBortfaltPrÅr?: number,
  naturalytelseTilkommetPrÅr?: number,
): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent,
  arbeidsforholdId,
  eksternArbeidsforholdId,
  arbeidsforholdType: 'ARBEID',
  refusjonPrAar: 360000,
  belopFraInntektsmeldingPrMnd: 30000,
  organisasjonstype: 'VIRKSOMHET',
  startdato: førSTP(400),
  sisteLønnsendringsdato: førSTP(400),
  stillingsprosenter: [{ prosent: 100, fomDato: førSTP(400), tomDato: TIDENES_ENDE }],
  naturalytelseBortfaltPrÅr,
  naturalytelseTilkommetPrÅr,
  opphoersdato: '2070-12-31',
});

const defaultArbeidsforhold = lagArbeidsforhold(defaultArbeidsgiverIdent);

const lagArbeidsandel = (
  andelsnr: number,
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  beregnetPrAar: number,
  overstyrtPrAar: number | undefined,
  skalFastsetteGrunnlag: boolean,
  erTidsbegrensetArbeidsforhold: boolean,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: 'AT',
  beregningsperiodeFom,
  beregningsperiodeTom,
  beregnetPrAar: beregnetPrAar,
  overstyrtPrAar: overstyrtPrAar,
  bruttoPrAar: overstyrtPrAar || beregnetPrAar,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erTidsbegrensetArbeidsforhold,
  skalFastsetteGrunnlag,
  andelsnr,
  arbeidsforhold,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const malArbeidsandel = (): BeregningsgrunnlagAndel =>
  lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, false, false);

const lagFrilansandel = (
  andelsnr: number,
  beregnetPrAar: number,
  overstyrtPrAar: number | undefined,
  skalFastsetteGrunnlag: boolean,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: 'FL',
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar,
  overstyrtPrAar,
  bruttoPrAar: overstyrtPrAar || beregnetPrAar,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  skalFastsetteGrunnlag,
  andelsnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  arbeidsforhold: defaultArbeidsforhold,
});

const lagGenerellAndel = (
  andelsnr: number,
  status: AktivitetStatus,
  beregnetPrAar: number,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: status,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar,
  bruttoPrAar: beregnetPrAar,
  avkortetPrAar: beregnetPrAar,
  redusertPrAar: beregnetPrAar,
  andelsnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const lagTBAndel = (
  andelsnr: number,
  arbeidsgiverIdent: string,
  beregnetPrAar: number,
  overstyrtPrAar?: number,
): BeregningsgrunnlagAndel => {
  const arbeidsforhold = lagArbeidsforhold(arbeidsgiverIdent);
  return lagArbeidsandel(andelsnr, arbeidsforhold, beregnetPrAar, overstyrtPrAar, true, true);
};

const lagPeriode = (
  beregningsgrunnlagPrStatusOgAndel: BeregningsgrunnlagAndel[],
  periodeAarsaker: string[],
  beregningsgrunnlagPeriodeFom: string,
  beregningsgrunnlagPeriodeTom: string | undefined = TIDENES_ENDE,
  dagsats?: number,
): BeregningsgrunnlagPeriodeProp => ({
  beregningsgrunnlagPeriodeFom,
  beregningsgrunnlagPeriodeTom,
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000,
  redusertPrAar: 360000,
  ledetekstBrutto: 'Brutto beregningsgrunnlag',
  ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
  ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
  periodeAarsaker,
  dagsats,
  beregningsgrunnlagPrStatusOgAndel: beregningsgrunnlagPrStatusOgAndel,
});

const malPeriode = (
  beregningsgrunnlagPrStatusOgAndel: BeregningsgrunnlagAndel[],
  fom: string = STP,
): BeregningsgrunnlagPeriodeProp => lagPeriode(beregningsgrunnlagPrStatusOgAndel, [], fom, undefined, 999);

const malPerioder = (
  andelsliste: BeregningsgrunnlagAndel[],
  skjæringstidspunkt: string = STP,
  dagerEtter: number = 20,
): BeregningsgrunnlagPeriodeProp[] => [
  lagPeriode(andelsliste, [], skjæringstidspunkt, etterDato(skjæringstidspunkt, dagerEtter), 999),
  lagPeriode(andelsliste, [], etterDato(skjæringstidspunkt, dagerEtter + 1), undefined, 0),
];

const lagSammenligningsGrunnlag = (
  sammenligningsgrunnlagType: SammenligningType,
  rapportertPrAar: number,
  avvikProsent: number,
  differanseBeregnet: number,
): SammenligningsgrunlagProp => ({
  sammenligningsgrunnlagFom: '2020-01-01',
  sammenligningsgrunnlagTom: '2020-12-31',
  rapportertPrAar,
  avvikPromille: avvikProsent ? avvikProsent * 10 : 0,
  avvikProsent,
  sammenligningsgrunnlagType,
  differanseBeregnet,
});

const malSGGrunnlagAvvik = (kode: SammenligningType) => lagSammenligningsGrunnlag(kode, 200000, 30, -150000);
const malSGGrunnlag = (kode: SammenligningType) => lagSammenligningsGrunnlag(kode, 200000, 0, 0);

const lagPensjonsgivendeInntekt = (beløp: number, pgiType: string) => ({
  beløp,
  pgiType,
});

const inntektsgrunnlagSN: Inntektsgrunnlag = {
  beregningsgrunnlagInntekter: [],
  sammenligningsgrunnlagInntekter: [],
  pgiGrunnlag: [
    {
      år: 2015,
      inntekter: [lagPensjonsgivendeInntekt(110000, PgiType.LØNN), lagPensjonsgivendeInntekt(10000, PgiType.NÆRING)],
    },
    {
      år: 2016,
      inntekter: [lagPensjonsgivendeInntekt(70000, PgiType.LØNN), lagPensjonsgivendeInntekt(50000, PgiType.NÆRING)],
    },
    {
      år: 2017,
      inntekter: [lagPensjonsgivendeInntekt(15000, PgiType.LØNN), lagPensjonsgivendeInntekt(150000, PgiType.NÆRING)],
    },
  ],
};

const lagInntektsgrunnlag = (): Inntektsgrunnlag => ({
  sammenligningsgrunnlagInntekter: [
    lagInntektsgrunnlagMåned('2020-01-01', [
      lagArbeidInntekt(35000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(4000),
      lagFrilansInntekt(0),
    ]),
    lagInntektsgrunnlagMåned('2020-02-01', [
      lagArbeidInntekt(70000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(6000),
      lagFrilansInntekt(5000),
    ]),
    lagInntektsgrunnlagMåned('2020-03-01', [
      lagArbeidInntekt(40000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(7000),
      lagFrilansInntekt(12000),
    ]),
    lagInntektsgrunnlagMåned('2020-04-01', [
      lagArbeidInntekt(50000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(20000),
      lagFrilansInntekt(45000),
    ]),
    lagInntektsgrunnlagMåned('2020-05-01', [
      lagArbeidInntekt(37000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(10000),
      lagFrilansInntekt(30000),
    ]),
    lagInntektsgrunnlagMåned('2020-06-01', [
      lagArbeidInntekt(45000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(5000),
      lagFrilansInntekt(20000),
    ]),
    lagInntektsgrunnlagMåned('2020-07-01', [
      lagArbeidInntekt(25000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(3000),
      lagFrilansInntekt(25000),
    ]),
    lagInntektsgrunnlagMåned('2020-08-01', [
      lagArbeidInntekt(33000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(7000),
      lagFrilansInntekt(0),
    ]),
    lagInntektsgrunnlagMåned('2020-09-01', [
      lagArbeidInntekt(25000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(6000),
      lagFrilansInntekt(33000),
    ]),
    lagInntektsgrunnlagMåned('2020-10-01', [
      lagArbeidInntekt(8000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(20000),
      lagFrilansInntekt(1000),
    ]),
    lagInntektsgrunnlagMåned('2020-11-01', [
      lagArbeidInntekt(54000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(1000),
      lagFrilansInntekt(25000),
    ]),
    lagInntektsgrunnlagMåned('2020-12-01', [
      lagArbeidInntekt(47000, defaultArbeidsgiverIdent),
      lagYtelseInntekt(0),
      lagFrilansInntekt(10000),
    ]),
  ],
  beregningsgrunnlagInntekter: [],
  pgiGrunnlag: [],
});

const lagBG = (
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[],
  aktivitetStatus: AktivitetStatus[],
  inntektsgrunnlag?: Inntektsgrunnlag,
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[],
  avklaringsbehov: BeregningAvklaringsbehov[] = [],
  skjaeringstidspunktBeregning: string = STP,
  saksopplysninger: Saksopplysninger = { lønnsendringSaksopplysning: [], kortvarigeArbeidsforhold: [] },
): Beregningsgrunnlag => ({
  avklaringsbehov,
  skjaeringstidspunktBeregning,
  vilkårsperiodeFom: skjaeringstidspunktBeregning,
  aktivitetStatus,
  beregningsgrunnlagPeriode,
  dekningsgrad: 80,
  grunnbeløp: 99858,
  sammenligningsgrunnlagPrStatus,
  faktaOmBeregning: {
    andelerForFaktaOmBeregning: [],
    saksopplysninger,
  },
  erOverstyrtInntekt: false,
  inntektsgrunnlag,
});

const meta = {
  component: BeregningProsessIndex,
  args: {
    submitCallback: action('submit') as (data: BeregningAksjonspunktSubmitType[]) => Promise<void>,
    isSubmittable: true,
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
    arbeidsgiverOpplysningerPerId,
    setFormData: () => undefined,
  },
} satisfies Meta<typeof BeregningProsessIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvvikMedSammenligningsgraf5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)]),
        ['AT'],
        lagInntektsgrunnlag(),
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
        STP,
        {
          lønnsendringSaksopplysning: [
            {
              sisteLønnsendringsdato: '2020-12-14',
              lønnsendringscenario: LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND.toString(),
              arbeidsforhold: { arbeidsgiverIdent: defaultArbeidsgiverIdent, andelsnr: 1 },
            },
          ],
          kortvarigeArbeidsforhold: [],
        },
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const ArbeidstakerMedAvvikAp5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)]),
        ['AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
        STP,
        {
          lønnsendringSaksopplysning: [
            {
              sisteLønnsendringsdato: '2019-10-20',
              lønnsendringscenario: LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND.toString(),
              arbeidsforhold: { arbeidsgiverIdent: defaultArbeidsgiverIdent, andelsnr: 1 },
            },
          ],
          kortvarigeArbeidsforhold: [],
        },
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagAp5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)]),
        ['AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
        STP,
      ),
      lagBG(
        [malPeriode([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)], '2021-02-01')],
        ['AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
        '2021-02-01',
      ),
    ],
    beregningsgrunnlagsvilkår: {
      vilkarType: 'FP_VK_41',
      overstyrbar: false,
      perioder: [
        {
          periode: {
            fom: STP,
            tom: '2021-01-20',
          },
          vurderesIBehandlingen: true,
          vilkarStatus: 'TIL_VURDERING',
          merknadParametere: {},
        },
        {
          periode: {
            fom: '2021-02-01',
            tom: '2021-02-10',
          },
          vurderesIBehandlingen: true,
          vilkarStatus: 'TIL_VURDERING',
          merknadParametere: {},
        },
      ],
    },
  },
};

export const ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, 200000, true, false)]),
        ['AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'En begrunnelse')],
      ),
      lagBG(
        malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false)], '2021-02-01'),
        ['AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
        '2021-02-01',
      ),
    ],
    beregningsgrunnlagsvilkår: {
      vilkarType: 'FP_VK_41',
      overstyrbar: false,
      perioder: [
        {
          periode: {
            fom: STP,
            tom: '2021-01-20',
          },
          vurderesIBehandlingen: false,
          vilkarStatus: 'GODKJENT',
          merknadParametere: {},
        },
        {
          periode: {
            fom: '2021-02-01',
            tom: '2021-02-10',
          },
          vurderesIBehandlingen: true,
          vilkarStatus: 'TIL_VURDERING',
          merknadParametere: {},
        },
      ],
    },
  },
};

export const ArbeidstakerFrilansMedAvvikAp5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([
          lagArbeidsandel(1, defaultArbeidsforhold, 200000, undefined, true, false),
          lagFrilansandel(1, 200000, undefined, true),
        ]),
        ['AT_FL'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const SelvstendigNæringsdrivendeMedAksjonspunktAp5039: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false))]),
        ['SN'],
        inntektsgrunnlagSN,
        [malSGGrunnlagAvvik(SammenligningType.SN)],
        [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagBrukersAndelMedPGI(1, 200000, undefined, true)], '2021-01-01', 15),
        ['MIDL_INAKTIV'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)],
        [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)],
        '2021-01-01',
      ),
      lagBG(
        malPerioder(
          [
            lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)),
            lagArbeidsandel(2, defaultArbeidsforhold, 150000, 150000, true, false),
            lagFrilansandel(3, 200000, 200000, true),
          ],
          '2021-02-01',
          15,
        ),
        ['AT_FL_SN'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.SN), malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [
          lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'En fin begrunnelse'),
          lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE),
        ],
        '2021-02-01',
      ),
      lagBG(
        malPerioder([lagSNUtenPGI(1, undefined, undefined, true, true, lagNæring(false, false))], '2021-03-01', 15),
        ['SN'],
        undefined,
        [],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],
        '2021-03-01',
      ),
    ],
    beregningsgrunnlagsvilkår: {
      overstyrbar: false,
      vilkarType: 'FP_VK_41',
      perioder: [
        {
          periode: {
            fom: '2021-01-01',
            tom: '2021-01-15',
          },
          vurderesIBehandlingen: true,
          vilkarStatus: VilkårUtfallType.IKKE_VURDERT,
          erForlengelse: false,
          merknadParametere: {},
        },
        {
          periode: {
            fom: '2021-02-01',
            tom: '2021-02-15',
          },
          vurderesIBehandlingen: true,
          vilkarStatus: VilkårUtfallType.IKKE_VURDERT,
          erForlengelse: false,
          merknadParametere: {},
        },
        {
          periode: {
            fom: '2021-03-01',
            tom: '2021-03-15',
          },
          vurderesIBehandlingen: true,
          vilkarStatus: VilkårUtfallType.IKKE_VURDERT,
          erForlengelse: false,
          merknadParametere: {},
        },
      ],
    },
  },
};

export const MidlertidigInaktivMedAksjonspunktAp5054: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagBrukersAndelMedPGI(1, 200000, undefined, true)]),
        ['MIDL_INAKTIV'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)],
        [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const MangeTidsbegrensetArbeidsforholdMedAvvikAp5047: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      {
        avklaringsbehov: [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],
        beregningsgrunnlagPeriode: [
          lagPeriode(
            [
              lagTBAndel(1, '333333333', 100000),
              lagTBAndel(2, '555555555', 250000),
              lagTBAndel(3, '444444444', 5000),
              lagFrilansandel(4, 4500, undefined, true),
            ],
            [],
            STP,
            etterSTP(20),
          ),
          lagPeriode(
            [
              lagTBAndel(1, '333333333', 100000),
              lagTBAndel(2, '555555555', 250000),
              lagTBAndel(3, '444444444', 5000),
              lagFrilansandel(4, 4500, undefined, true),
            ],
            [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET],
            etterSTP(21),
            etterSTP(35),
          ),
          lagPeriode(
            [
              lagTBAndel(1, '333333333', 100000),
              lagTBAndel(2, '555555555', 250000),
              lagTBAndel(3, '444444444', 5000),
              lagFrilansandel(4, 4500, undefined, true),
            ],
            [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET],
            etterSTP(36),
            etterSTP(40),
          ),
        ],
        sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        skjaeringstidspunktBeregning: STP,
        vilkårsperiodeFom: STP,
        dekningsgrad: 100,
        aktivitetStatus: ['AT_FL'],
        grunnbeløp: 124028,
        erOverstyrtInntekt: false,
      },
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      {
        avklaringsbehov: [
          lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, 'En begrunnelse'),
        ],
        beregningsgrunnlagPeriode: [
          lagPeriode(
            [
              lagTBAndel(1, '333333333', 100000, 100000),
              lagTBAndel(2, '555555555', 250000, 250000),
              lagTBAndel(3, '444444444', 5000, 5000),
              lagFrilansandel(4, 4500, 4500, true),
            ],
            [],
            STP,
            etterSTP(15),
            999,
          ),
          lagPeriode(
            [
              lagTBAndel(1, '333333333', 100000, 100000),
              lagTBAndel(2, '555555555', 250000, 250000),
              lagTBAndel(3, '444444444', 5000, 5000),
              lagFrilansandel(4, 4500, 4500, true),
            ],
            [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET],
            etterSTP(16),
            etterSTP(20),
            800,
          ),
          lagPeriode(
            [
              lagTBAndel(1, '333333333', 100000, 100000),
              lagTBAndel(2, '555555555', 250000, 250000),
              lagTBAndel(3, '444444444', 5000, 5000),
              lagFrilansandel(4, 4500, 4500, true),
            ],
            [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET],
            etterSTP(21),
            undefined,
            0,
          ),
        ],
        sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        skjaeringstidspunktBeregning: STP,
        vilkårsperiodeFom: STP,
        dekningsgrad: 100,
        aktivitetStatus: ['AT_FL'],
        grunnbeløp: 124028,
        erOverstyrtInntekt: false,
      },
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.OPPFYLT),
  },
};

export const TidsbegrensetArbeidsforholdMedAvvikAp5047: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      {
        avklaringsbehov: [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD)],
        beregningsgrunnlagPeriode: [
          lagPeriode([lagTBAndel(1, '333333333', 100000)], [], STP, etterSTP(20)),
          lagPeriode(
            [lagTBAndel(1, '333333333', 100000)],
            [PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET],
            etterSTP(21),
            etterSTP(35),
          ),
        ],
        sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        skjaeringstidspunktBeregning: STP,
        vilkårsperiodeFom: STP,
        dekningsgrad: 100,
        aktivitetStatus: ['AT'],
        grunnbeløp: 124028,
        erOverstyrtInntekt: false,
      },
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const ArbeidstakerFrilanserOgSelvstendigNæringsdrivendeAp5039: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([
          lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)),
          lagArbeidsandel(2, defaultArbeidsforhold, 150000, undefined, false, false),
          lagFrilansandel(3, 200000, undefined, false),
        ]),
        ['AT_FL_SN'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.SN)],
        [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const GraderingPåBeregningsgrunnlagUtenPenger: Story = {
  args: {
    isReadOnly: true,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([malArbeidsandel()]),
        ['AT'],
        undefined,
        [malSGGrunnlag(SammenligningType.AT_FL)],
        [
          {
            definisjon: AksjonspunktKode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
            status: 'UTFO',
            begrunnelse: 'her var det noe galt en gang',
            kanLoses: true,
          },
        ],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.OPPFYLT),
  },
};

export const ArbeidstakerMedAksjonspunktBehandlet: Story = {
  args: {
    isReadOnly: true,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagArbeidsandel(1, defaultArbeidsforhold, 30000, 333333, true, false)]),
        ['AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'Dette er en begrunnelse')],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.OPPFYLT),
  },
};

export const FrilansMedAvvikAp5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagFrilansandel(1, 200000, undefined, true)]),
        ['FL'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const SelvstendigNæringsdrivendeNyoppstartetAksjonspunktAp5039: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(false, true))]),
        ['SN'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.SN)],
        [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const SelvstendigNæringsdrivendNyIArbeidslivetAp5049: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([lagSNMedPGI(1, 200000, undefined, true, true, lagNæring(false, false))]),
        ['SN'],
        undefined,
        undefined,
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const ArbeidstakerOgAAPMedAksjonspunktAp5038: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        [
          malPeriode([
            lagArbeidsandel(1, defaultArbeidsforhold, 325845, undefined, true, false),
            lagGenerellAndel(1, 'AAP', 100000),
          ]),
        ],
        ['KUN_YTELSE', 'AT'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const FrilansDagpengerOgSelvstendigNæringsdrivendeAp5039: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        [
          malPeriode([
            lagFrilansandel(1, 100500, undefined, false),
            lagSNMedPGI(2, 500000, undefined, true, false, lagNæring(false, true)),
            lagGenerellAndel(3, 'DP', 100500),
          ]),
        ],
        ['FL_SN', 'DP'],
        undefined,
        [malSGGrunnlagAvvik(SammenligningType.SN)],
        [lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE)],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};

export const AvvikNæringEtterLøstAvvikArbeid5038Og5039: Story = {
  args: {
    isReadOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        malPerioder([
          lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)),
          lagArbeidsandel(2, defaultArbeidsforhold, 150000, 200000, true, false),
          lagGenerellAndel(4, 'DP', 100500),
          lagFrilansandel(3, 200000, 100000, true),
        ]),
        ['AT_FL_SN', 'DP'],
        inntektsgrunnlagSN,
        [malSGGrunnlagAvvik(SammenligningType.SN), malSGGrunnlagAvvik(SammenligningType.AT_FL)],
        [
          lagAPMedKode(AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE),
          lagAPMedKode(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, 'Dette er løst'),
        ],
      ),
    ],
    beregningsgrunnlagsvilkår: vilkarMedUtfall(VilkårUtfallType.IKKE_VURDERT),
  },
};
