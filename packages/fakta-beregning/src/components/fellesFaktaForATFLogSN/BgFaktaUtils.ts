import {
  AktivitetStatus,
  FaktaOmBeregningTilfelle,
  Inntektskategori,
  KodeverkType,
  OpptjeningAktivitetType as OAType,
  Organisasjonstype as organisasjonstyper,
} from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  ATFLSammeOrgAndel,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
} from '@navikt/ft-types';
import { formatCurrencyNoKr, getKodeverknavnFn, removeSpacesFromNumber } from '@navikt/ft-utils';
import { FaktaOmBeregningAksjonspunktValues, GenerellAndelInfo } from '../../typer/FaktaBeregningTypes';
import AndelFieldValue, { AndelFieldIdentifikator } from '../../typer/FieldValues';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import { createVisningsnavnFakta } from '../ArbeidsforholdHelper';
import { besteberegningField } from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse from './vurderOgFastsettATFL/forms/AvsluttetArbeidsforhold';
import { lonnsendringField } from './vurderOgFastsettATFL/forms/LonnsendringForm';
import { erNyoppstartetFLField } from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import { harEtterlonnSluttpakkeField } from './vurderOgFastsettATFL/forms/VurderEtterlonnSluttpakkeForm';
import { andelsnrMottarYtelseMap } from './vurderOgFastsettATFL/forms/VurderMottarYtelseUtils';

export const INNTEKT_FIELD_ARRAY_NAME = 'inntektFieldArray';

const preutfyllInntektskategori = (andel: AndelForFaktaOmBeregning) =>
  andel.inntektskategori && andel.inntektskategori !== Inntektskategori.UDEFINERT ? andel.inntektskategori : '';

export const setArbeidsforholdInitialValues = (andel: AndelForFaktaOmBeregning) => ({
  arbeidsgiverId: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsgiverIdent : null,
  arbeidsforholdId: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsforholdId : null,
  arbeidsperiodeFom: andel.arbeidsforhold ? andel.arbeidsforhold.startdato : '',
  arbeidsperiodeTom: andel.arbeidsforhold ? andel.arbeidsforhold.opphoersdato : '',
  arbeidsforholdType: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsforholdType : null,
});

const lagVisningsnavn = (
  andel: AndelForFaktaOmBeregning,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): string => {
  const agOpplysning = andel.arbeidsforhold
    ? arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent]
    : undefined;
  if (!agOpplysning) {
    return andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdType
      ? getKodeverknavnFn(alleKodeverk)(andel.arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : getKodeverknavnFn(alleKodeverk)(andel.aktivitetStatus, KodeverkType.AKTIVITET_STATUS);
  }
  return createVisningsnavnFakta(agOpplysning, andel.arbeidsforhold.eksternArbeidsforholdId);
};

export const setGenerellAndelsinfo = (
  andel: AndelForFaktaOmBeregning,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): GenerellAndelInfo => ({
  andel: lagVisningsnavn(andel, arbeidsgiverOpplysningerPerId, alleKodeverk),
  aktivitetStatus: andel.aktivitetStatus,
  andelsnr: andel.andelsnr,
  nyAndel: false,
  inntektskategori: preutfyllInntektskategori(andel),
  lagtTilAvSaksbehandler: andel.lagtTilAvSaksbehandler === true,
});

export const mapAndelFieldIdentifikator = (andel: AndelForFaktaOmBeregning): AndelFieldIdentifikator => ({
  aktivitetStatus: andel.aktivitetStatus,
  andelsnr: andel.andelsnr,
  arbeidsgiverId: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsgiverIdent : null,
  arbeidsforholdType: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsforholdType : null,
});

const atflSammeOrgListeInneholderAndel = (
  liste: ATFLSammeOrgAndel[],
  field: AndelFieldIdentifikator,
): ATFLSammeOrgAndel => (liste ? liste.find(element => element.andelsnr === field.andelsnr) : undefined);

const arbeidsforholdUtenIMInneholderAndel = (
  liste: AndelForFaktaOmBeregning[],
  field: AndelFieldIdentifikator,
): AndelForFaktaOmBeregning => (liste ? liste.find(element => element.andelsnr === field.andelsnr) : undefined);

const erArbeidstakerUtenInntektsmeldingOgFrilansISammeOrganisasjon = (
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
): boolean => {
  const andelIListe = atflSammeOrgListeInneholderAndel(
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe,
    field,
  );
  return andelIListe && (andelIListe.inntektPrMnd === null || andelIListe.inntektPrMnd === undefined);
};

// Aktivitetstatus

const erArbeidstaker = (field: AndelFieldIdentifikator): boolean =>
  field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER;

const erFrilanser = (field: AndelFieldIdentifikator): boolean =>
  field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.FRILANSER;

// Nyoppstartet frilanser

const erNyoppstartetFrilanser = (field: AndelFieldIdentifikator, values: any): boolean => {
  const val = values;
  if (!val) {
    return false;
  }
  return erFrilanser(field) && values[erNyoppstartetFLField];
};

// Besteberegning

const skalHaBesteberegning = (values: FaktaOmBeregningAksjonspunktValues): boolean => values[besteberegningField];

// export const skalHaBesteberegningSelector = createSelector([getFormValuesForBeregning], skalHaBesteberegning);

// Lonnsendring

const harLonnsendringUtenInntektsmelding = (values, field, faktaOmBeregning) =>
  faktaOmBeregning.arbeidsforholdMedL??nnsendringUtenIM &&
  arbeidsforholdUtenIMInneholderAndel(faktaOmBeregning.arbeidsforholdMedL??nnsendringUtenIM, field) &&
  values[lonnsendringField];

const erATUtenInntektsmeldingMedLonnsendring = (
  field: AndelFieldIdentifikator,
  values: any,
  faktaOmBeregning: FaktaOmBeregning,
) => erArbeidstaker(field) && harLonnsendringUtenInntektsmelding(values, field, faktaOmBeregning);

// AT og FL i samme organisasjon

export const andelErStatusFLOgHarATISammeOrg = (
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
): boolean => faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe && erFrilanser(field);

const andelErStatusATUtenInntektsmeldingOgHarFLISammeOrg = (
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
): boolean =>
  faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe &&
  erArbeidstaker(field) &&
  erArbeidstakerUtenInntektsmeldingOgFrilansISammeOrganisasjon(field, faktaOmBeregning);

// S??ker mottar ytelse
const sokerMottarYtelseForAndel = (
  values: FaktaOmBeregningAksjonspunktValues,
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
): boolean => {
  const mottarYtelseMap = andelsnrMottarYtelseMap(values, faktaOmBeregning.vurderMottarYtelse, beregningsgrunnlag);
  return mottarYtelseMap[field.andelsnr];
};

// Etterl??nn / sluttpakke
const andelErEtterl??nnSluttpakkeOgSkalFastsettes = (andel: AndelFieldIdentifikator, values: any): boolean => {
  if (andel.arbeidsforholdType && andel.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE) {
    return values[harEtterlonnSluttpakkeField];
  }
  return false;
};

// Manuelt registrert med handlingstype LAGT_TIL_AV_BRUKER
const erAndelKunstigArbeidsforhold = (
  andel: AndelFieldIdentifikator,
  beregningsgrunnlag: Beregningsgrunnlag,
): boolean => {
  const firstBgPeriod = beregningsgrunnlag.beregningsgrunnlagPeriode[0];
  const lagtTilAvBruker = firstBgPeriod.beregningsgrunnlagPrStatusOgAndel.find(
    a =>
      a.arbeidsforhold &&
      a.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsgiverId &&
      a.arbeidsforhold.organisasjonstype &&
      a.arbeidsforhold.organisasjonstype === organisasjonstyper.KUNSTIG,
  );
  return lagtTilAvBruker !== undefined;
};

// Kun Ytelse
const harKunYtelse = (faktaOmBeregning: FaktaOmBeregning): boolean =>
  !!faktaOmBeregning.faktaOmBeregningTilfeller &&
  faktaOmBeregning.faktaOmBeregningTilfeller.find(kode => kode === FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE) !==
    undefined;

const skalKunneOverstigeRapportertInntektOgTotaltBeregningsgrunnlag =
  (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) =>
  (andel: AndelFieldIdentifikator): boolean => {
    if (skalHaBesteberegning(values)) {
      return true;
    }
    if (sokerMottarYtelseForAndel(values, andel, faktaOmBeregning, beregningsgrunnlag)) {
      return true;
    }
    if (erATUtenInntektsmeldingMedLonnsendring(andel, values, faktaOmBeregning)) {
      return true;
    }
    if (andelErStatusFLOgHarATISammeOrg(andel, faktaOmBeregning)) {
      return true;
    }
    if (andelErStatusATUtenInntektsmeldingOgHarFLISammeOrg(andel, faktaOmBeregning)) {
      return true;
    }
    if (erAndelKunstigArbeidsforhold(andel, beregningsgrunnlag)) {
      return true;
    }
    if (erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse(andel, beregningsgrunnlag)) {
      return true;
    }
    if (andelErEtterl??nnSluttpakkeOgSkalFastsettes(andel, values)) {
      return true;
    }
    return false;
  };

const skalKunneEndreTotaltBeregningsgrunnlag =
  (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) =>
  (andel: AndelFieldIdentifikator): boolean => {
    if (
      skalKunneOverstigeRapportertInntektOgTotaltBeregningsgrunnlag(values, faktaOmBeregning, beregningsgrunnlag)(andel)
    ) {
      return true;
    }
    if (erNyoppstartetFrilanser(andel, values)) {
      return true;
    }
    return false;
  };

// Overstyring

export const erOverstyring = (values: FaktaOmBeregningAksjonspunktValues): boolean =>
  !!values && values[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] === true;

export const harOverstyringsAP = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov &&
  avklaringsbehov.some(ap => ap.definisjon === FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);

export const erOverstyringAvBeregningsgrunnlag = (
  values: FaktaOmBeregningAksjonspunktValues,
  beregningsgrunnlag: Beregningsgrunnlag,
  avklaringsbehov: BeregningAvklaringsbehov[],
) => erOverstyring(values) || beregningsgrunnlag.erOverstyrtInntekt || harOverstyringsAP(avklaringsbehov);

export const erInitialOverstyringAvBeregningsgrunnlag = ({ beregningsgrunnlag, avklaringsbehov }) =>
  beregningsgrunnlag.erOverstyrtInntekt || harOverstyringsAP(avklaringsbehov);

export const skalFastsetteInntektForAndel =
  (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) =>
  (andel: AndelFieldIdentifikator): boolean =>
    harKunYtelse(faktaOmBeregning) ||
    skalKunneEndreTotaltBeregningsgrunnlag(values, faktaOmBeregning, beregningsgrunnlag)(andel);

export const kanRedigereInntektForAndel = (values, faktaOmBeregning, beregningsgrunnlag) => andel =>
  erOverstyring(values) || skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andel);

export const getKanRedigereInntekt = (values, beregningsgrunnlag) => andel =>
  kanRedigereInntektForAndel(values, beregningsgrunnlag.faktaOmBeregning, beregningsgrunnlag)(andel);

// Skal redigere inntektskategori
export const skalRedigereInntektskategoriForAndel = beregningsgrunnlag => andel =>
  erAndelKunstigArbeidsforhold(andel, beregningsgrunnlag);

export const getSkalRedigereInntektskategori = beregningsgrunnlag =>
  skalRedigereInntektskategoriForAndel(beregningsgrunnlag);

export const mapToBelop = skalRedigereInntekt => andel => {
  const { fastsattBelop, readOnlyBelop } = andel;
  if (!skalRedigereInntekt || skalRedigereInntekt(andel)) {
    return fastsattBelop ? removeSpacesFromNumber(fastsattBelop) : 0;
  }
  return readOnlyBelop ? removeSpacesFromNumber(readOnlyBelop) : 0;
};

export const mapAndelToField = (
  andel: AndelForFaktaOmBeregning,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): AndelFieldValue => ({
  ...setGenerellAndelsinfo(andel, arbeidsgiverOpplysningerPerId, alleKodeverk),
  ...setArbeidsforholdInitialValues(andel),
  ...mapAndelFieldIdentifikator(andel),
  skalKunneEndreAktivitet: andel.skalKunneEndreAktivitet,
  fastsattBelop: andel.fastsattBelop || andel.fastsattBelop === 0 ? formatCurrencyNoKr(andel.fastsattBelop) : '',
  belopReadOnly: andel.belopReadOnly || andel.belopReadOnly === 0 ? formatCurrencyNoKr(andel.belopReadOnly) : '',
  refusjonskrav: andel.refusjonskrav || andel.refusjonskrav === 0 ? formatCurrencyNoKr(andel.refusjonskrav) : '',
});
