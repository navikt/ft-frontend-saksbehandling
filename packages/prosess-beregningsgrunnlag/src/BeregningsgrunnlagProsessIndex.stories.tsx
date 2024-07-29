import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';
import {
  AktivitetStatus,
  InntektAktivitetType,
  LønnsendringScenario,
  PeriodeAarsak,
  PgiType,
  SammenligningType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/ft-kodeverk';
import {
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
  Inntektsgrunnlag,
  Næring,
  Saksopplysninger,
  SammenligningsgrunlagProp,
  Vilkar,
} from '@navikt/ft-types';
import { alleKodeverk } from '@navikt/ft-storybook-utils';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import dayjs from 'dayjs';
import { BeregningAksjonspunktSubmitType } from './types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAvklaringsbehovCode from './types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import BeregningsgrunnlagProsessIndex from './BeregningsgrunnlagProsessIndex';

import '@navikt/ds-css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import KodeverkForPanel from './types/kodeverkForPanel';

const STP = '2021-01-01';

const førSTP = (dager: number): string => dayjs(STP).subtract(dager, 'days').format(ISO_DATE_FORMAT);
const etterDato = (dato: string, dager: number): string => dayjs(dato).add(dager, 'days').format(ISO_DATE_FORMAT);
const etterSTP = (dager: number): string => etterDato(STP, dager);

const bgpFom = '2022-03-01';
const bgpTom = '2022-05-31';

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
  orgnr: '999999998',
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
): BeregningsgrunnlagAndel =>
  ({
    aktivitetStatus: AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
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
  }) as BeregningsgrunnlagAndel;

const lagSNMedPGI = (
  andelnr: number,
  beregnet: number,
  overstyrt: number | undefined,
  skalFastsettGrunnlag: boolean,
  erNyIArbeidslivet?: boolean,
  næring?: Næring,
): BeregningsgrunnlagAndel =>
  ({
    aktivitetStatus: AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
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
  }) as BeregningsgrunnlagAndel;

const lagBrukersAndelMedPGI = (
  andelnr: number,
  beregnet: number,
  overstyrt: number | undefined,
  skalFastsettGrunnlag: boolean,
): BeregningsgrunnlagAndel =>
  ({
    aktivitetStatus: AktivitetStatus.BRUKERS_ANDEL,
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
  }) as BeregningsgrunnlagAndel;

const lagAPMedKode = (kode: string, begrunnelse?: string): DeepWriteable<BeregningAvklaringsbehov> => ({
  definisjon: kode,
  status: begrunnelse ? 'UTFO' : 'OPPR',
  begrunnelse,
  kanLoses: true,
});

const vilkarMedUtfall = (kode: string, fom?: string, tom?: string): Vilkar =>
  ({
    vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
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
  }) as Vilkar;

const arbeidsgiverOpplysninger = {
  999999996: {
    identifikator: '999999996',
    navn: 'BEDRIFT AS',
    erPrivatPerson: false,
  },
  999999999: {
    identifikator: '999999999',
    navn: 'Andeby bank',
    erPrivatPerson: false,
  },
  999999998: {
    identifikator: '999999998',
    navn: 'Gardslien transport og Gardiner AS',
    erPrivatPerson: false,
  },
  999999997: {
    identifikator: '999999997',
    navn: 'Svaneby sykehjem',
    erPrivatPerson: false,
  },
};

const lagArbeidsforhold = (
  arbeidsgiverIdent: string,
  arbeidsforholdId: string | undefined,
  eksternArbeidsforholdId?: string | undefined,
  bortfaltNaturalytelse?: number,
  tilkommetNaturalytelse?: number,
): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent,
  arbeidsforholdId,
  eksternArbeidsforholdId,
  arbeidsforholdType: 'ARBEID',
  refusjonPrAar: 360000,
  belopFraInntektsmeldingPrMnd: 30000,
  organisasjonstype: 'VIRKSOMHET',
  stillingsProsent: 100,
  stillingsNavn: 'Beregningsmann',
  startdato: førSTP(400),
  naturalytelseBortfaltPrÅr: bortfaltNaturalytelse,
  naturalytelseTilkommetPrÅr: tilkommetNaturalytelse,
  opphoersdato: '2070-12-31',
});

const malArbeidsorhold = (): BeregningsgrunnlagArbeidsforhold => lagArbeidsforhold('999999996', undefined);

const lagBrukersAndel = (andelnr: number, beregnet: number): BeregningsgrunnlagAndel => ({
  aktivitetStatus: AktivitetStatus.BRUKERS_ANDEL,
  beregningsperiodeFom: undefined,
  beregningsperiodeTom: undefined,
  beregnetPrAar: beregnet,
  overstyrtPrAar: undefined,
  bruttoPrAar: beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erTidsbegrensetArbeidsforhold: false,
  skalFastsetteGrunnlag: false,
  andelsnr: andelnr,
  arbeidsforhold: undefined,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const lagArbeidsandel = (
  andelnr: number,
  arbeid: BeregningsgrunnlagArbeidsforhold,
  beregnet: number,
  overstyrt: number | undefined,
  skalFastsette: boolean,
  erTidsbegrenset: boolean,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
  beregningsperiodeFom: bgpFom,
  beregningsperiodeTom: bgpTom,
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  erTidsbegrensetArbeidsforhold: erTidsbegrenset,
  skalFastsetteGrunnlag: skalFastsette,
  andelsnr: andelnr,
  arbeidsforhold: arbeid,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const malArbeidsandel = (): BeregningsgrunnlagAndel =>
  lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, false, false);

const lagFrilansandel = (
  andelnr: number,
  beregnet: number,
  overstyrt: number | undefined,
  skalFastsette: boolean,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: AktivitetStatus.FRILANSER,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
  bruttoPrAar: overstyrt || beregnet,
  avkortetPrAar: 360000,
  redusertPrAar: 599000,
  skalFastsetteGrunnlag: skalFastsette,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
  arbeidsforhold: malArbeidsorhold(),
});

const lagGenerellAndel = (andelnr: number, status: string, beregnet: number): BeregningsgrunnlagAndel => ({
  aktivitetStatus: status,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  bruttoPrAar: beregnet,
  avkortetPrAar: beregnet,
  redusertPrAar: beregnet,
  andelsnr: andelnr,
  lagtTilAvSaksbehandler: false,
  erTilkommetAndel: false,
});

const lagTBAndel = (
  andelnr: number,
  arbeidsgiverIdent: string,
  beregnet: number,
  overstyrt?: number,
): BeregningsgrunnlagAndel => {
  const arbfor = lagArbeidsforhold(arbeidsgiverIdent, undefined);
  return lagArbeidsandel(andelnr, arbfor, beregnet, overstyrt, true, true);
};

const lagPeriode = (
  andelsliste: BeregningsgrunnlagAndel[],
  periodeAarsaker: string[],
  fom: string,
  tom?: string | undefined,
  dagsats?: number,
): BeregningsgrunnlagPeriodeProp => ({
  beregningsgrunnlagPeriodeFom: fom,
  beregningsgrunnlagPeriodeTom: tom || '31-12-9999',
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000,
  redusertPrAar: 360000,
  periodeAarsaker,
  dagsats,
  beregningsgrunnlagPrStatusOgAndel: andelsliste,
});

const malPeriode = (andelsliste: BeregningsgrunnlagAndel[], fom: string = STP): BeregningsgrunnlagPeriodeProp =>
  lagPeriode(andelsliste, [], fom, undefined, 999);

const malPerioder = (
  andelsliste: BeregningsgrunnlagAndel[],
  skjæringstidspunkt?: string,
  dagerEtter?: number,
): BeregningsgrunnlagPeriodeProp[] => [
  lagPeriode(andelsliste, [], skjæringstidspunkt || STP, etterDato(skjæringstidspunkt || STP, dagerEtter || 20), 999),
  lagPeriode(andelsliste, [], etterDato(skjæringstidspunkt || STP, dagerEtter ? dagerEtter + 1 : 21), undefined, 0),
];

const lagSammenligningsGrunnlag = (
  kode: string,
  rapportertPrAar: number,
  avvikProsent: number,
  differanse: number,
): SammenligningsgrunlagProp => ({
  sammenligningsgrunnlagFom: '2020-01-01',
  sammenligningsgrunnlagTom: '2020-12-31',
  rapportertPrAar,
  avvikPromille: avvikProsent ? avvikProsent * 10 : 0,
  avvikProsent,
  sammenligningsgrunnlagType: kode,
  differanseBeregnet: differanse,
});

const malSGGrunnlagAvvik = (kode: string) => lagSammenligningsGrunnlag(kode, 200000, 30, -150000);
const malSGGrunnlag = (kode: string) => lagSammenligningsGrunnlag(kode, 200000, 0, 0);

type Inntekt = {
  inntektAktivitetType: string;
  beløp: number;
};

type InntektOgPeriode = {
  fom: string;
  tom: string;
  inntekter: Inntekt[];
};

const lagATInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: InntektAktivitetType.ARBEID,
  beløp: inntekt,
});

const lagYtelseInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: InntektAktivitetType.YTELSE,
  beløp: inntekt,
});

const lagFLInntektsgrunnlag = (inntekt: number): Inntekt => ({
  inntektAktivitetType: InntektAktivitetType.FRILANS,
  beløp: inntekt,
});

const lagMånedInntekt = (fom: string, tom: string, inntekter: Inntekt[]): InntektOgPeriode => ({
  fom,
  tom,
  inntekter,
});

const lagInntektPgi = (beløp: number, pgiType: string) => ({
  beløp,
  pgiType,
});

const inntektsgrunnlagSN = {
  måneder: [],
  pgiGrunnlag: [
    {
      år: 2015,
      inntekter: [lagInntektPgi(110000, PgiType.LØNN), lagInntektPgi(10000, PgiType.NÆRING)],
    },
    {
      år: 2016,
      inntekter: [lagInntektPgi(70000, PgiType.LØNN), lagInntektPgi(50000, PgiType.NÆRING)],
    },
    {
      år: 2017,
      inntekter: [lagInntektPgi(15000, PgiType.LØNN), lagInntektPgi(150000, PgiType.NÆRING)],
    },
  ],
};

const lagInntektsgrunnlag = (): Inntektsgrunnlag => {
  const måneder = [];
  måneder.push(
    lagMånedInntekt('2020-01-01', '2020-01-31', [
      lagATInntektsgrunnlag(35000),
      lagYtelseInntektsgrunnlag(4000),
      lagFLInntektsgrunnlag(0),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-02-01', '2020-02-28', [
      lagATInntektsgrunnlag(70000),
      lagYtelseInntektsgrunnlag(6000),
      lagFLInntektsgrunnlag(5000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-03-01', '2020-03-31', [
      lagATInntektsgrunnlag(40000),
      lagYtelseInntektsgrunnlag(7000),
      lagFLInntektsgrunnlag(12000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-04-01', '2020-04-30', [
      lagATInntektsgrunnlag(50000),
      lagYtelseInntektsgrunnlag(20000),
      lagFLInntektsgrunnlag(45000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-05-01', '2020-05-31', [
      lagATInntektsgrunnlag(37000),
      lagYtelseInntektsgrunnlag(10000),
      lagFLInntektsgrunnlag(30000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-06-01', '2020-06-30', [
      lagATInntektsgrunnlag(45000),
      lagYtelseInntektsgrunnlag(5000),
      lagFLInntektsgrunnlag(20000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-07-01', '2020-07-31', [
      lagATInntektsgrunnlag(25000),
      lagYtelseInntektsgrunnlag(3000),
      lagFLInntektsgrunnlag(25000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-08-01', '2020-08-31', [
      lagATInntektsgrunnlag(33000),
      lagYtelseInntektsgrunnlag(7000),
      lagFLInntektsgrunnlag(0),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-09-01', '2020-09-30', [
      lagATInntektsgrunnlag(25000),
      lagYtelseInntektsgrunnlag(6000),
      lagFLInntektsgrunnlag(33000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-10-01', '2020-10-31', [
      lagATInntektsgrunnlag(8000),
      lagYtelseInntektsgrunnlag(20000),
      lagFLInntektsgrunnlag(1000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-11-01', '2020-11-30', [
      lagATInntektsgrunnlag(54000),
      lagYtelseInntektsgrunnlag(1000),
      lagFLInntektsgrunnlag(25000),
    ]),
  );
  måneder.push(
    lagMånedInntekt('2020-12-01', '2020-12-31', [
      lagATInntektsgrunnlag(47000),
      lagYtelseInntektsgrunnlag(0),
      lagFLInntektsgrunnlag(10000),
    ]),
  );
  return {
    måneder,
  } as Inntektsgrunnlag;
};

const lagBG = (
  perioder: BeregningsgrunnlagPeriodeProp[],
  statuser: string[],
  inntektsgrunnlag?: Inntektsgrunnlag,
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp[],
  avklaringsbehov?: BeregningAvklaringsbehov[],
  skjæringstidspunkt: string = STP,
  saksopplysninger: Saksopplysninger = { lønnsendringSaksopplysning: [], kortvarigeArbeidsforhold: [] },
): Beregningsgrunnlag => {
  const beregningsgrunnlag = {
    avklaringsbehov: avklaringsbehov || [],
    skjaeringstidspunktBeregning: skjæringstidspunkt,
    vilkårsperiodeFom: skjæringstidspunkt,
    aktivitetStatus: statuser,
    beregningsgrunnlagPeriode: perioder,
    dekningsgrad: 80,
    grunnbeløp: 99858,
    sammenligningsgrunnlagPrStatus: sammenligningsgrunnlagPrStatus || null,
    ledetekstBrutto: 'Brutto beregningsgrunnlag',
    ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
    ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
    halvG: 49929,
    faktaOmBeregning: {
      andelerForFaktaOmBeregning: [],
      saksopplysninger,
    },
    hjemmel: {
      kode: 'F_14_7_8_30',
      kodeverk: 'BG_HJEMMEL',
    },
    årsinntektVisningstall: 360000,
    erOverstyrtInntekt: false,
    inntektsgrunnlag,
  };
  // @ts-ignore
  return beregningsgrunnlag;
};

export default {
  title: 'prosess-beregningsgrunnlag',
  component: BeregningsgrunnlagProsessIndex,
};

const Template: StoryFn<{
  readOnly: boolean;
  vilkar: Vilkar;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
}> = ({ readOnly, vilkar, beregningsgrunnlagListe, submitCallback }) => (
  <BeregningsgrunnlagProsessIndex
    beregningsgrunnlagListe={beregningsgrunnlagListe}
    submitCallback={submitCallback}
    isReadOnly={readOnly}
    readOnlySubmitButton={false}
    beregningsgrunnlagsvilkar={vilkar}
    kodeverkSamling={alleKodeverk as KodeverkForPanel}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
    setFormData={() => undefined}
  />
);

export const MidlertidigInaktivOppfylt = Template.bind({});
MidlertidigInaktivOppfylt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagBrukersAndel(1, 200000)]),
      ['MIDL_INAKTIV'],
      lagInntektsgrunnlag(),
      [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)],
      [],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MidlertidigInaktivAvslått = Template.bind({});
MidlertidigInaktivAvslått.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagBrukersAndel(1, 20000)]),
      ['MIDL_INAKTIV'],
      lagInntektsgrunnlag(),
      [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)],
      [],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvvikMedSammenligningsgraf5038 = Template.bind({});
AvvikMedSammenligningsgraf5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)]),
      ['AT'],
      lagInntektsgrunnlag(),
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      STP,
      {
        lønnsendringSaksopplysning: [
          {
            sisteLønnsendringsdato: '2020-12-14',
            lønnsendringscenario: LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND.toString(),
            arbeidsforhold: { arbeidsgiverIdent: '999999996', andelsnr: 1 },
          },
        ],
        kortvarigeArbeidsforhold: [],
      },
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerUtenAvvik = Template.bind({});
ArbeidstakerUtenAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, false, false)]),
      ['AT'],
      undefined,
      [malSGGrunnlag(SammenligningType.AT_FL)],
      [],
      STP,
      {
        lønnsendringSaksopplysning: [
          {
            sisteLønnsendringsdato: '2019-12-01',
            lønnsendringscenario: LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND.toString(),
            arbeidsforhold: { arbeidsgiverIdent: '999999996', andelsnr: 1 },
          },
        ],
        kortvarigeArbeidsforhold: [],
      },
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerUtenAvvikFlereArbeidsforholdMedLønnsendring = Template.bind({});
ArbeidstakerUtenAvvikFlereArbeidsforholdMedLønnsendring.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([
        lagArbeidsandel(1, lagArbeidsforhold('999999996', undefined), 200000, undefined, false, false),
        lagArbeidsandel(2, lagArbeidsforhold('999999997', undefined), 200000, undefined, false, false),
        lagArbeidsandel(3, lagArbeidsforhold('999999998', undefined), 200000, undefined, false, false),
      ]),
      ['AT'],
      undefined,
      [malSGGrunnlag(SammenligningType.AT_FL)],
      [],
      STP,
      {
        lønnsendringSaksopplysning: [
          {
            sisteLønnsendringsdato: '2019-12-15',
            lønnsendringscenario: LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND.toString(),
            arbeidsforhold: { arbeidsgiverIdent: '999999996', andelsnr: 1 },
          },
          {
            sisteLønnsendringsdato: '2019-12-05',
            lønnsendringscenario: LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND.toString(),
            arbeidsforhold: { arbeidsgiverIdent: '999999998', andelsnr: 3 },
          },
          {
            sisteLønnsendringsdato: '2019-12-01',
            lønnsendringscenario: LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND.toString(),
            arbeidsforhold: { arbeidsgiverIdent: '999999997', andelsnr: 2 },
          },
        ],
        kortvarigeArbeidsforhold: [],
      },
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const BrukersAndelUtenAvvik = Template.bind({});
BrukersAndelUtenAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([malArbeidsandel(), lagGenerellAndel(1, AktivitetStatus.BRUKERS_ANDEL, 200000)]),
      ['AT', 'BA'],
      undefined,
      [malSGGrunnlag(SammenligningType.AT_FL)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAvvikAp5038 = Template.bind({});
ArbeidstakerMedAvvikAp5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)]),
      ['AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      STP,
      {
        lønnsendringSaksopplysning: [
          {
            sisteLønnsendringsdato: '2019-10-20',
            lønnsendringscenario: LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND.toString(),
            arbeidsforhold: { arbeidsgiverIdent: '999999996', andelsnr: 1 },
          },
        ],
        kortvarigeArbeidsforhold: [],
      },
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagAp5038 = Template.bind({});
ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagAp5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)]),
      ['AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      STP,
    ),
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)], '2021-02-01')],
      ['AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      '2021-02-01',
    ),
  ],
  vilkar: {
    vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
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
  } as Vilkar,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038 = Template.bind({});
ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 200000, 200000, true, false)]),
      ['AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          'En begrunnelse',
        ),
      ],
    ),
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)], '2021-02-01'),
      ['AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
      '2021-02-01',
    ),
  ],
  vilkar: {
    vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
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
  } as Vilkar,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerFrilansMedAvvikAp5038 = Template.bind({});
ArbeidstakerFrilansMedAvvikAp5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([
        lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false),
        lagFrilansandel(1, 200000, undefined, true),
      ]),
      ['AT_FL'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const Militær = Template.bind({});
Militær.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(malPerioder([lagGenerellAndel(1, AktivitetStatus.MILITAER_ELLER_SIVIL, 300000)]), ['MS']),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeMedAksjonspunktAp5039 = Template.bind({});
SelvstendigNæringsdrivendeMedAksjonspunktAp5039.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false))]),
      ['SN'],
      inntektsgrunnlagSN,
      [malSGGrunnlagAvvik(SammenligningType.SN)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039 = Template.bind({});
MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagBrukersAndelMedPGI(1, 200000, undefined, true)], '2021-01-01', 15),
      ['MIDL_INAKTIV'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)],
      '2021-01-01',
    ),
    lagBG(
      malPerioder(
        [
          lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)),
          lagArbeidsandel(2, malArbeidsorhold(), 150000, 150000, true, false),
          lagFrilansandel(3, 200000, 200000, true),
        ],
        '2021-02-01',
        15,
      ),
      ['AT_FL_SN'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.SN), malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          'En fin begrunnelse',
        ),
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
      '2021-02-01',
    ),
    lagBG(
      malPerioder([lagSNUtenPGI(1, undefined, undefined, true, true, lagNæring(false, false))], '2021-03-01', 15),
      ['SN'],
      undefined,
      [],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],
      '2021-03-01',
    ),
  ],
  vilkar: {
    overstyrbar: false,
    vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
    perioder: [
      {
        periode: {
          fom: '2021-01-01',
          tom: '2021-01-15',
        },
        vurderesIBehandlingen: true,
        vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
        erForlengelse: false,
        merknadParametere: {},
      },
      {
        periode: {
          fom: '2021-02-01',
          tom: '2021-02-15',
        },
        vurderesIBehandlingen: true,
        vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
        erForlengelse: false,
        merknadParametere: {},
      },
      {
        periode: {
          fom: '2021-03-01',
          tom: '2021-03-15',
        },
        vurderesIBehandlingen: true,
        vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
        erForlengelse: false,
        merknadParametere: {},
      },
    ],
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MidlertidigInaktivMedAksjonspunktAp5054 = Template.bind({});
MidlertidigInaktivMedAksjonspunktAp5054.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagBrukersAndelMedPGI(1, 200000, undefined, true)]),
      ['MIDL_INAKTIV'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.MIDLERTIDIG_INAKTIV)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MangeTidsbegrensetArbeidsforholdMedAvvikAp5047 = Template.bind({});
MangeTidsbegrensetArbeidsforholdMedAvvikAp5047.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        ),
      ],
      beregningsgrunnlagPeriode: [
        lagPeriode(
          [
            lagTBAndel(1, '999999999', 100000),
            lagTBAndel(2, '999999998', 250000),
            lagTBAndel(3, '999999997', 5000),
            lagFrilansandel(4, 4500, undefined, true),
          ],
          [],
          STP,
          etterSTP(20),
        ),
        lagPeriode(
          [
            lagTBAndel(1, '999999999', 100000),
            lagTBAndel(2, '999999998', 250000),
            lagTBAndel(3, '999999997', 5000),
            lagFrilansandel(4, 4500, undefined, true),
          ],
          [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
          etterSTP(21),
          etterSTP(35),
        ),
        lagPeriode(
          [
            lagTBAndel(1, '999999999', 100000),
            lagTBAndel(2, '999999998', 250000),
            lagTBAndel(3, '999999997', 5000),
            lagFrilansandel(4, 4500, undefined, true),
          ],
          [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
          etterSTP(36),
          etterSTP(40),
        ),
      ],
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT_FL'],
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047 = Template.bind({});
MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
          'En begrunnelse',
        ),
      ],
      beregningsgrunnlagPeriode: [
        lagPeriode(
          [
            lagTBAndel(1, '999999999', 100000, 100000),
            lagTBAndel(2, '999999998', 250000, 250000),
            lagTBAndel(3, '999999997', 5000, 5000),
            lagFrilansandel(4, 4500, 4500, true),
          ],
          [],
          STP,
          etterSTP(15),
          999,
        ),
        lagPeriode(
          [
            lagTBAndel(1, '999999999', 100000, 100000),
            lagTBAndel(2, '999999998', 250000, 250000),
            lagTBAndel(3, '999999997', 5000, 5000),
            lagFrilansandel(4, 4500, 4500, true),
          ],
          [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
          etterSTP(16),
          etterSTP(20),
          800,
        ),
        lagPeriode(
          [
            lagTBAndel(1, '999999999', 100000, 100000),
            lagTBAndel(2, '999999998', 250000, 250000),
            lagTBAndel(3, '999999997', 5000, 5000),
            lagFrilansandel(4, 4500, 4500, true),
          ],
          [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
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
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const TidsbegrensetArbeidsforholdMedAvvikAp5047 = Template.bind({});
TidsbegrensetArbeidsforholdMedAvvikAp5047.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
        ),
      ],
      beregningsgrunnlagPeriode: [
        lagPeriode([lagTBAndel(1, '999999999', 100000)], [], STP, etterSTP(20)),
        lagPeriode(
          [lagTBAndel(1, '999999999', 100000)],
          [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
          etterSTP(21),
          etterSTP(35),
        ),
      ],
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT'],
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerFrilanserOgSelvstendigNæringsdrivendeAp5039 = Template.bind({});
ArbeidstakerFrilanserOgSelvstendigNæringsdrivendeAp5039.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([
        lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)),
        lagArbeidsandel(2, malArbeidsorhold(), 150000, undefined, false, false),
        lagFrilansandel(3, 200000, undefined, false),
      ]),
      ['AT_FL_SN'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.SN)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const NaturalYtelse = Template.bind({});
NaturalYtelse.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [] as BeregningAvklaringsbehov[],
      beregningsgrunnlagPeriode: [
        lagPeriode(
          [
            lagArbeidsandel(
              1,
              lagArbeidsforhold('999999999', undefined, undefined, 5000),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [],
          STP,
          etterSTP(20),
        ),
        lagPeriode(
          [
            lagArbeidsandel(
              1,
              lagArbeidsforhold('999999999', undefined, undefined, 4000),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [PeriodeAarsak.NATURALYTELSE_BORTFALT],
          etterSTP(21),
          etterSTP(30),
        ),
        lagPeriode(
          [
            lagArbeidsandel(
              1,
              lagArbeidsforhold('999999999', undefined, undefined, 3000),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [PeriodeAarsak.NATURALYTELSE_BORTFALT],
          etterSTP(31),
          etterSTP(50),
        ),
        lagPeriode(
          [
            lagArbeidsandel(
              1,
              lagArbeidsforhold('999999999', undefined, undefined, 2000),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [PeriodeAarsak.NATURALYTELSE_BORTFALT],
          etterSTP(51),
          etterSTP(200),
        ),
      ],
      sammenligningsgrunnlagPrStatus: [malSGGrunnlag(SammenligningType.AT_FL)],
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT'],
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT, STP, etterSTP(200)),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const Dagpenger = Template.bind({});
Dagpenger.args = {
  readOnly: false,
  beregningsgrunnlagListe: [lagBG(malPerioder([lagGenerellAndel(1, AktivitetStatus.DAGPENGER, 300000)]), ['DP'])],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SykepengerAvDagpenger = Template.bind({});
SykepengerAvDagpenger.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(malPerioder([lagGenerellAndel(1, AktivitetStatus.SYKEPENGER_AV_DAGPENGER, 300000)]), ['SP_AV_DP']),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GraderingPåBeregningsgrunnlagUtenPenger = Template.bind({});
GraderingPåBeregningsgrunnlagUtenPenger.args = {
  readOnly: true,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([malArbeidsandel()]),
      ['AT'],
      undefined,
      [malSGGrunnlag(SammenligningType.AT_FL)],
      [
        {
          definisjon: ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
          status: 'UTFO',
          begrunnelse: 'her var det noe galt en gang',
          kanLoses: true,
        },
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt = Template.bind({});
ArbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([
        lagSNMedPGI(1, 200000, undefined, false),
        lagArbeidsandel(2, malArbeidsorhold(), 150000, undefined, false, false),
        lagGenerellAndel(3, AktivitetStatus.DAGPENGER, 200000),
      ]),
      ['AT_SN', 'DP'],
      undefined,
      [malSGGrunnlag(SammenligningType.SN)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMed3Arbeidsforhold2ISammeOrganisasjon = Template.bind({});
ArbeidstakerMed3Arbeidsforhold2ISammeOrganisasjon.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([
        lagArbeidsandel(
          1,
          lagArbeidsforhold('999999999', 'abc123abc123abc123', 'abc123abc123abc123'),
          150000,
          undefined,
          false,
          false,
        ),
        lagArbeidsandel(
          2,
          lagArbeidsforhold('999999999', 'osifgjoiwqhøqeh', 'osifgjoiwqhøqeh'),
          150000,
          undefined,
          false,
          false,
        ),
        lagArbeidsandel(
          2,
          lagArbeidsforhold('999999998', 'osifgjoiwqhøqeh', 'osifgjoiwqhøqeh'),
          150000,
          undefined,
          false,
          false,
        ),
      ]),
      ['AT'],
      undefined,
      [malSGGrunnlag(SammenligningType.AT_FL)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerAvslagHalvG = Template.bind({});
ArbeidstakerAvslagHalvG.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 30000, undefined, false, false)]), ['AT'], undefined, [
      malSGGrunnlag(SammenligningType.AT_FL),
    ]),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAksjonspunktBehandlet = Template.bind({});
ArbeidstakerMedAksjonspunktBehandlet.args = {
  readOnly: true,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagArbeidsandel(1, malArbeidsorhold(), 30000, 333333, true, false)]),
      ['AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          'Dette er en begrunnelse',
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FrilansMedAvvikAp5038 = Template.bind({});
FrilansMedAvvikAp5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagFrilansandel(1, 200000, undefined, true)]),
      ['FL'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeUtenAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeUtenAksjonspunkt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(malPerioder([lagSNMedPGI(1, 200000, undefined, false, false, lagNæring(false, false))]), ['SN']),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeNyoppstartetAksjonspunktAp5039 = Template.bind({});
SelvstendigNæringsdrivendeNyoppstartetAksjonspunktAp5039.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(false, true))]),
      ['SN'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.SN)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendNyIArbeidslivetAp5049 = Template.bind({});
SelvstendigNæringsdrivendNyIArbeidslivetAp5049.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([lagSNMedPGI(1, 200000, undefined, true, true, lagNæring(false, false))]),
      ['SN'],
      undefined,
      undefined,
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerOgSelvstendigNæringsdrivendeSnStorreEnnAtOgStorreEnn6g = Template.bind({});
ArbeidstakerOgSelvstendigNæringsdrivendeSnStorreEnnAtOgStorreEnn6g.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        malPeriode([
          lagSNMedPGI(1, 600000, undefined, false, false, lagNæring(false, false)),
          lagArbeidsandel(2, malArbeidsorhold(), 200000, undefined, false, false),
        ]),
      ],
      ['AT_SN'],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const YtelseFraNav = Template.bind({});
YtelseFraNav.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG([malPeriode([lagGenerellAndel(1, AktivitetStatus.KUN_YTELSE, 325845)])], ['kun_YTELSE']),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerOgAAPMedAksjonspunktAp5038 = Template.bind({});
ArbeidstakerOgAAPMedAksjonspunktAp5038.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        malPeriode([
          lagArbeidsandel(1, malArbeidsorhold(), 325845, undefined, true, false),
          lagGenerellAndel(1, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000),
        ]),
      ],
      ['KUN_YTELSE', 'AT'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [lagAPMedKode(ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FrilansDagpengerOgSelvstendigNæringsdrivendeAp5039 = Template.bind({});
FrilansDagpengerOgSelvstendigNæringsdrivendeAp5039.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        malPeriode([
          lagFrilansandel(1, 100500, undefined, false),
          lagSNMedPGI(2, 500000, undefined, true, false, lagNæring(false, true)),
          lagGenerellAndel(3, AktivitetStatus.DAGPENGER, 100500),
        ]),
      ],
      ['FL_SN', 'DP'],
      undefined,
      [malSGGrunnlagAvvik(SammenligningType.SN)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvvikNæringEtterLøstAvvikArbeid5038Og5039 = Template.bind({});
AvvikNæringEtterLøstAvvikArbeid5038Og5039.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      malPerioder([
        lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false)),
        lagArbeidsandel(2, malArbeidsorhold(), 150000, 200000, true, false),
        lagGenerellAndel(4, AktivitetStatus.DAGPENGER, 100500),
        lagFrilansandel(3, 200000, 100000, true),
      ]),
      ['AT_FL_SN', 'DP'],
      inntektsgrunnlagSN,
      [malSGGrunnlagAvvik(SammenligningType.SN), malSGGrunnlagAvvik(SammenligningType.AT_FL)],
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
        lagAPMedKode(
          ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          'Dette er løst',
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ManglerBeregningsgrunnlag = Template.bind({});
ManglerBeregningsgrunnlag.args = {
  readOnly: false,
  beregningsgrunnlagListe: [],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
