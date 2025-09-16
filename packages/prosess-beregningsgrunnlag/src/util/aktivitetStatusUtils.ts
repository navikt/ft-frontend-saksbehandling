import { AktivitetStatus, BeregningsgrunnlagAndelType } from '@navikt/ft-kodeverk';

export const aktivitetstatusTilAndeltypeMap = {} as Record<string, string>;
aktivitetstatusTilAndeltypeMap[AktivitetStatus.BRUKERS_ANDEL] = BeregningsgrunnlagAndelType.BRUKERS_ANDEL;
aktivitetstatusTilAndeltypeMap[AktivitetStatus.FRILANSER] = BeregningsgrunnlagAndelType.FRILANS;
aktivitetstatusTilAndeltypeMap[AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE] = BeregningsgrunnlagAndelType.EGEN_NÆRING;
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
  AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
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
const statuserSomStotterDagpenger = [
  AktivitetStatus.DAGPENGER,
  AktivitetStatus.SYKEPENGER_AV_DAGPENGER,
  AktivitetStatus.PLEIEPENGER_AV_DAGPENGER,
];
const statuserSomStotterDagpengerEllerAAP = [
  AktivitetStatus.DAGPENGER,
  AktivitetStatus.SYKEPENGER_AV_DAGPENGER,
  AktivitetStatus.PLEIEPENGER_AV_DAGPENGER,
  AktivitetStatus.ARBEIDSAVKLARINGSPENGER,
];
const statuserSomStotterTilstottendeYtelser = [AktivitetStatus.KUN_YTELSE];
const statuserSomStotterMilitaer = [AktivitetStatus.MILITAER_ELLER_SIVIL];
export const isStatusDagpengerOrAAP = (status: string): boolean =>
  statuserSomStotterDagpengerEllerAAP.some(s => s === status);
export const isStatusDagpenger = (status: string): boolean => statuserSomStotterDagpenger.some(s => s === status);
export const isStatusTilstotendeYtelse = (status: string): boolean =>
  statuserSomStotterTilstottendeYtelser.some(s => s === status);
export const isStatusFrilanserOrKombinasjon = (status: string): boolean =>
  statuserSomStotterFrilanser.some(s => s === status);
export const isStatusArbeidstakerOrKombinasjon = (status: string): boolean =>
  statuserSomStotterArbeidstaker.some(s => s === status);
export const isStatusSNOrKombinasjon = (status: string): boolean =>
  statuserSomStotterSelvstendigNaeringsdrivende.some(s => s === status);
export const isStatusKombinasjon = (status: string): boolean => kombinasjonsstatuser.some(s => s === status);
export const isStatusMilitaer = (status: string): boolean => statuserSomStotterMilitaer.some(s => s === status);
