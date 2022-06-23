import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  AktivitetStatus,
  InntektAktivitetType,
  PeriodeAarsak,
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
  SammenligningsgrunlagProp,
  Vilkar,
} from '@navikt/ft-types';
import { alleKodeverk } from '@navikt/ft-storybook-utils';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import dayjs from 'dayjs';
import { BeregningAksjonspunktSubmitType } from './types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from './types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';
import BeregningsgrunnlagProsessIndex from './BeregningsgrunnlagProsessIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const STP = '2021-01-01';

const førSTP = (dager: number): string => dayjs(STP).subtract(dager, 'days').format(ISO_DATE_FORMAT);
const etterSTP = (dager: number): string => dayjs(STP).add(dager, 'days').format(ISO_DATE_FORMAT);

const bgpFom = '2022-03-01';
const bgpTom = '2022-05-31';

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const lagNæring = (varigEndring: boolean, nyoppstartet: boolean): Næring => ({
  begrunnelse:
    'Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie. ' +
    'Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
  endringsdato: '2016-05-01',
  erNyoppstartet: nyoppstartet,
  erVarigEndret: varigEndring,
  kanRegnskapsførerKontaktes: true,
  oppgittInntekt: 474257,
  oppstartsdato: '2015-11-01',
  orgnr: '910909088',
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
    pgiVerdier: lagPGIVerdier(),
    næringer: næring ? [næring] : [lagNæring(!!overstyrt, false)],
  } as BeregningsgrunnlagAndel);

const lagAPMedKode = (kode: string, begrunnelse?: string): DeepWriteable<BeregningAvklaringsbehov> => ({
  definisjon: kode,
  status: begrunnelse ? 'UTFO' : 'OPPR',
  begrunnelse,
  kanLoses: true,
});

const vilkarMedUtfall = (kode: string): Vilkar =>
  ({
    vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
    perioder: [
      {
        periode: {
          fom: STP,
          tom: '9999-12-31',
        },
        vurderesIBehandlingen: true,
        vilkarStatus: kode,
        merknadParametere: {},
      },
    ],
  } as Vilkar);

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

const malArbeidsorhold = (): BeregningsgrunnlagArbeidsforhold => lagArbeidsforhold('999999996', undefined, undefined);

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

const lagTBAndel = (andelnr: number, arbeidsgiverIdent: string, beregnet: number): BeregningsgrunnlagAndel => {
  const arbfor = lagArbeidsforhold(arbeidsgiverIdent, undefined, undefined);
  return lagArbeidsandel(andelnr, arbfor, beregnet, undefined, true, true);
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

const malPeriode = (andelsliste: BeregningsgrunnlagAndel[]): BeregningsgrunnlagPeriodeProp =>
  lagPeriode(andelsliste, [], STP, undefined, 999);

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

const malSGGrunnlagAvvik = () => lagSammenligningsGrunnlag(SammenligningType.ATFLSN, 200000, 30, -150000);
const malSGGrunnlag = () => lagSammenligningsGrunnlag(SammenligningType.ATFLSN, 200000, 0, 0);

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
  sammenligningsgrunnlagPrStatus?: SammenligningsgrunlagProp,
  avklaringsbehov?: BeregningAvklaringsbehov[],
): Beregningsgrunnlag => {
  const beregningsgrunnlag = {
    avklaringsbehov: avklaringsbehov || [],
    skjaeringstidspunktBeregning: STP,
    vilkårsperiodeFom: STP,
    aktivitetStatus: statuser,
    beregningsgrunnlagPeriode: perioder,
    dekningsgrad: 80,
    grunnbeløp: 99858,
    sammenligningsgrunnlagPrStatus: sammenligningsgrunnlagPrStatus ? [sammenligningsgrunnlagPrStatus] : null,
    ledetekstBrutto: 'Brutto beregningsgrunnlag',
    ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
    ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
    halvG: 49929,
    faktaOmBeregning: {
      andelerForFaktaOmBeregning: [],
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

const Template: Story<{
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
    alleKodeverk={alleKodeverk as any}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysninger}
    setFormData={() => undefined}
  />
);

export const JusterDekningsgradAP = Template.bind({});
JusterDekningsgradAP.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)])],
      ['AT'],
      lagInntektsgrunnlag(),
      malSGGrunnlagAvvik(),
      [
        lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS),
        lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD),
      ],
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
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, false, false)])],
      ['AT'],
      undefined,
      malSGGrunnlag(),
      [],
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
      [malPeriode([malArbeidsandel(), lagGenerellAndel(1, AktivitetStatus.BRUKERS_ANDEL, 200000)])],
      ['AT, BA'],
      undefined,
      malSGGrunnlag(),
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAvvik = Template.bind({});
ArbeidstakerMedAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)])],
      ['AT'],
      undefined,
      malSGGrunnlagAvvik(),
      [lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAvvikOgFlereBeregningsgrunnlag = Template.bind({});
ArbeidstakerMedAvvikOgFlereBeregningsgrunnlag.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)])],
      ['AT'],
      undefined,
      malSGGrunnlagAvvik(),
      [lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false)])],
      ['AT'],
      undefined,
      malSGGrunnlagAvvik(),
      [lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerFrilansMedAvvik = Template.bind({});
ArbeidstakerFrilansMedAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        malPeriode([
          lagArbeidsandel(1, malArbeidsorhold(), 200000, undefined, true, false),
          lagFrilansandel(1, 200000, undefined, true),
        ]),
      ],
      ['AT_FL'],
      undefined,
      malSGGrunnlagAvvik(),
      [lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const Militær = Template.bind({});
Militær.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG([malPeriode([lagGenerellAndel(1, AktivitetStatus.MILITAER_ELLER_SIVIL, 300000)])], ['MS'], undefined),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeMedAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeMedAksjonspunkt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(true, false))])],
      ['SN'],
      undefined,
      malSGGrunnlagAvvik(),
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const MangeTidsbegrensetArbeidsforholdMedAvvik = Template.bind({});
MangeTidsbegrensetArbeidsforholdMedAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
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
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik()],
      skjaeringstidspunktBeregning: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT_FL'],
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const TidsbegrensetArbeidsforholdMedAvvik = Template.bind({});
TidsbegrensetArbeidsforholdMedAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    {
      avklaringsbehov: [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
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
      sammenligningsgrunnlagPrStatus: [malSGGrunnlagAvvik()],
      skjaeringstidspunktBeregning: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT'],
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerFrilanserOgSelvstendigNæringsdrivende = Template.bind({});
ArbeidstakerFrilanserOgSelvstendigNæringsdrivende.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        malPeriode([
          lagSNMedPGI(1, 200000, undefined, true),
          lagArbeidsandel(2, malArbeidsorhold(), 150000, undefined, false, false),
          lagFrilansandel(3, 200000, undefined, false),
        ]),
      ],
      ['AT_FL_SN'],
      undefined,
      malSGGrunnlagAvvik(),
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
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
              lagArbeidsforhold('999999999', undefined, undefined, 5000, undefined),
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
              lagArbeidsforhold('999999999', undefined, undefined, 4000, undefined),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [],
          etterSTP(21),
          etterSTP(30),
        ),
        lagPeriode(
          [
            lagArbeidsandel(
              1,
              lagArbeidsforhold('999999999', undefined, undefined, 3000, undefined),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [],
          etterSTP(31),
          etterSTP(50),
        ),
        lagPeriode(
          [
            lagArbeidsandel(
              1,
              lagArbeidsforhold('999999999', undefined, undefined, 2000, undefined),
              100000,
              undefined,
              false,
              false,
            ),
          ],
          [],
          etterSTP(51),
          etterSTP(200),
        ),
      ],
      sammenligningsgrunnlag: malSGGrunnlag(),
      skjaeringstidspunktBeregning: STP,
      vilkårsperiodeFom: STP,
      dekningsgrad: 100,
      aktivitetStatus: ['AT'],
    },
  ] as Beregningsgrunnlag[],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const Dagpenger = Template.bind({});
Dagpenger.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG([malPeriode([lagGenerellAndel(1, AktivitetStatus.DAGPENGER, 300000)])], ['DP'], undefined),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GraderingPåBeregningsgrunnlagUtenPenger = Template.bind({});
GraderingPåBeregningsgrunnlagUtenPenger.args = {
  readOnly: true,
  beregningsgrunnlagListe: [
    lagBG([malPeriode([malArbeidsandel()])], ['AT'], undefined, malSGGrunnlag(), [
      {
        definisjon: ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
        status: 'UTFO',
        begrunnelse: 'her var det noe galt en gang',
        kanLoses: true,
      },
    ]),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt = Template.bind({});
ArbeidstakerDagpengerOgSelvstendigNæringsdrivendeUtenAksjonspunkt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [
        malPeriode([
          lagSNMedPGI(1, 200000, undefined, false),
          lagArbeidsandel(2, malArbeidsorhold(), 150000, undefined, false, false),
          lagGenerellAndel(3, AktivitetStatus.DAGPENGER, 200000),
        ]),
      ],
      ['AT_SN', 'DP'],
      undefined,
      malSGGrunnlag(),
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
      [
        malPeriode([
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
      ],
      ['AT'],
      undefined,
      malSGGrunnlag(),
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerAvslagHalvG = Template.bind({});
ArbeidstakerAvslagHalvG.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 30000, undefined, false, false)])],
      ['AT'],
      undefined,
      malSGGrunnlag(),
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerMedAksjonspunktBehandlet = Template.bind({});
ArbeidstakerMedAksjonspunktBehandlet.args = {
  readOnly: true,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagArbeidsandel(1, malArbeidsorhold(), 30000, 333333, true, false)])],
      ['AT'],
      undefined,
      malSGGrunnlagAvvik(),
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
          'Dette er en begrunnelse',
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FrilansMedAvvik = Template.bind({});
FrilansMedAvvik.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG([malPeriode([lagFrilansandel(1, 200000, undefined, true)])], ['FL'], undefined, malSGGrunnlagAvvik(), [
      lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS),
    ]),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeUtenAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeUtenAksjonspunkt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagSNMedPGI(1, 200000, undefined, false, false, lagNæring(false, false))])],
      ['SN'],
      undefined,
      undefined,
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendeNyoppstartetAksjonspunkt = Template.bind({});
SelvstendigNæringsdrivendeNyoppstartetAksjonspunkt.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagSNMedPGI(1, 200000, undefined, true, false, lagNæring(false, true))])],
      ['SN'],
      undefined,
      malSGGrunnlagAvvik(),
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SelvstendigNæringsdrivendNyIArbeidslivet = Template.bind({});
SelvstendigNæringsdrivendNyIArbeidslivet.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagSNMedPGI(1, 200000, undefined, true, true, lagNæring(false, false))])],
      ['SN'],
      undefined,
      undefined,
      [lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)],
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
      undefined,
      undefined,
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const YtelseFraNav = Template.bind({});
YtelseFraNav.args = {
  readOnly: false,
  beregningsgrunnlagListe: [
    lagBG(
      [malPeriode([lagGenerellAndel(1, AktivitetStatus.KUN_YTELSE, 325845)])],
      ['kun_YTELSE'],
      undefined,
      undefined,
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.OPPFYLT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ArbeidstakerOgAAPMedAksjonspunkt = Template.bind({});
ArbeidstakerOgAAPMedAksjonspunkt.args = {
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
      malSGGrunnlagAvvik(),
      [lagAPMedKode(ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS)],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FrilansDagpengerOgSelvstendigNæringsdrivende = Template.bind({});
FrilansDagpengerOgSelvstendigNæringsdrivende.args = {
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
      malSGGrunnlagAvvik(),
      [
        lagAPMedKode(
          ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
        ),
      ],
    ),
  ],
  vilkar: vilkarMedUtfall(VilkarUtfallType.IKKE_VURDERT),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
