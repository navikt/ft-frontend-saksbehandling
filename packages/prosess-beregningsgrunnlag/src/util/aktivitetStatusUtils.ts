import { AktivitetStatus } from '@navikt/ft-kodeverk';

const statuserSomStotterFrilanser = [
  AktivitetStatus.FRILANSER,
  AktivitetStatus.KOMBINERT_AT_FL,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_FL_SN,
];
const statuserSomStotterArbeidstaker = [
  AktivitetStatus.ARBEIDSTAKER,
  AktivitetStatus.KOMBINERT_AT_FL,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_SN,
];
const statuserSomStotterSelvstendigNaeringsdrivende = [
  AktivitetStatus.SELVSTENDIG_NÆRINGSDRIVENDE,
  AktivitetStatus.KOMBINERT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_SN,
];
const kombinasjonsstatuser = [
  AktivitetStatus.KOMBINERT_AT_FL,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_SN,
];
const statuserSomStotterDagpengerEllerAAP = [
  AktivitetStatus.DAGPENGER,
  AktivitetStatus.SYKEPENGER_AV_DAGPENGER,
  AktivitetStatus.PLEIEPENGER_AV_DAGPENGER,
  AktivitetStatus.ARBEIDSAVKLARINGSPENGER,
];

export const isStatusDagpengerOrAAP = (status: string): boolean =>
  statuserSomStotterDagpengerEllerAAP.some(s => s === status);
export const isStatusTilstøtendeYtelse = (status: string): boolean => AktivitetStatus.KUN_YTELSE === status;
export const isStatusFrilanserOrKombinasjon = (status: string): boolean =>
  statuserSomStotterFrilanser.some(s => s === status);
export const isStatusArbeidstakerOrKombinasjon = (status: string): boolean =>
  statuserSomStotterArbeidstaker.some(s => s === status);
export const isStatusSNOrKombinasjon = (status: string): boolean =>
  statuserSomStotterSelvstendigNaeringsdrivende.some(s => s === status);
export const isStatusKombinasjon = (status: string): boolean => kombinasjonsstatuser.includes(status);
export const isStatusMilitær = (status: string): boolean => AktivitetStatus.MILITÆR_ELLER_SIVIL === status;
