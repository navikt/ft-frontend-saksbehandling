import {
  AktivitetStatus,
  FaktaOmBeregningTilfelle,
  Inntektskategori,
  OpptjeningAktivitetType as OAType,
  Organisasjonstype as organisasjonstyper,
} from '@navikt/ft-kodeverk';
import type {
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  ATFLSammeOrgAndel,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  FaktaOmBeregningAndel,
} from '@navikt/ft-types';
import { formatCurrencyNoKr, formaterArbeidsgiver } from '@navikt/ft-utils';

import type {
  ArbeidstakerInntektValues,
  FaktaOmBeregningAksjonspunktValues,
  GenerellAndelInfo,
} from '../../typer/FaktaBeregningTypes';
import type { AndelFieldIdentifikator, AndelFieldValue } from '../../typer/FieldValues';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import type { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import { besteberegningField } from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import { erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse } from './vurderOgFastsettATFL/forms/AvsluttetArbeidsforhold';
import { lonnsendringField } from './vurderOgFastsettATFL/forms/lonnsendringFormUtils';
import { erNyoppstartetFLField } from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import { harEtterlonnSluttpakkeField } from './vurderOgFastsettATFL/forms/VurderEtterlonnSluttpakkeForm';
import { andelsnrMottarYtelseMap } from './vurderOgFastsettATFL/forms/VurderMottarYtelseUtils';

export const INNTEKT_FIELD_ARRAY_NAME = 'inntektFieldArray';

const preutfyllInntektskategori = (andel: AndelForFaktaOmBeregning) =>
  andel.inntektskategori && andel.inntektskategori !== Inntektskategori.UDEFINERT ? andel.inntektskategori : '';

const lagVisningsnavn = (
  andel: AndelForFaktaOmBeregning,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): string | undefined => {
  const agOpplysning = andel.arbeidsforhold?.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent]
    : undefined;
  if (!agOpplysning) {
    return andel.arbeidsforhold?.arbeidsforholdType
      ? kodeverkSamling['OpptjeningAktivitetType'].find(oat => oat.kode === andel.arbeidsforhold?.arbeidsforholdType)
          ?.navn
      : kodeverkSamling['AktivitetStatus'].find(at => at.kode === andel.aktivitetStatus)?.navn;
  }
  return formaterArbeidsgiver(agOpplysning, andel.arbeidsforhold?.eksternArbeidsforholdId);
};

export const setGenerellAndelsinfo = (
  andel: AndelForFaktaOmBeregning,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): GenerellAndelInfo => ({
  andel: lagVisningsnavn(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling) || '',
  aktivitetStatus: andel.aktivitetStatus,
  andelsnr: andel.andelsnr,
  nyAndel: false,
  inntektskategori: preutfyllInntektskategori(andel),
  lagtTilAvSaksbehandler: andel.lagtTilAvSaksbehandler === true,
});

const atflSammeOrgListeInneholderAndel = (
  liste: ATFLSammeOrgAndel[] | undefined,
  field: AndelFieldIdentifikator,
): ATFLSammeOrgAndel | undefined => (liste ? liste.find(element => element.andelsnr === field.andelsnr) : undefined);

const arbeidsforholdUtenIMInneholderAndel = (
  liste: FaktaOmBeregningAndel[] | undefined,
  field: AndelFieldIdentifikator,
): FaktaOmBeregningAndel | undefined =>
  liste ? liste.find(element => element.andelsnr === field.andelsnr) : undefined;

const erArbeidstakerUtenInntektsmeldingOgFrilansISammeOrganisasjon = (
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
): boolean => {
  const andelIListe = atflSammeOrgListeInneholderAndel(
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe,
    field,
  );
  return !!andelIListe && (andelIListe.inntektPrMnd === null || andelIListe.inntektPrMnd === undefined);
};

// Aktivitetstatus
export const erArbeidstaker = (field: AndelFieldIdentifikator): boolean =>
  !!field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER;

export const erFrilanser = (field: AndelFieldIdentifikator): boolean =>
  !!field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.FRILANSER;

export const erDagpenger = (field: AndelFieldIdentifikator): boolean =>
  !!field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.DAGPENGER;

export const erSelvstendigNæringsdrivende = (field: AndelFieldIdentifikator): boolean =>
  !!field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE;

export const erMilitaerEllerSivil = (field: AndelFieldIdentifikator): boolean =>
  !!field.aktivitetStatus && field.aktivitetStatus === AktivitetStatus.MILITAER_ELLER_SIVIL;

// Nyoppstartet frilanser
const erNyoppstartetFrilanser = (
  field: AndelFieldIdentifikator,
  values: FaktaOmBeregningAksjonspunktValues,
): boolean => {
  const val = values;
  if (!val) {
    return false;
  }
  return erFrilanser(field) && !!values[erNyoppstartetFLField];
};

// Besteberegning
const skalHaBesteberegning = (values: FaktaOmBeregningAksjonspunktValues): boolean => !!values[besteberegningField];

// Lonnsendring
const harLonnsendringUtenInntektsmelding = (
  values: FaktaOmBeregningAksjonspunktValues,
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
) =>
  faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM &&
  arbeidsforholdUtenIMInneholderAndel(faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM, field) &&
  values[lonnsendringField];

const erATUtenInntektsmeldingMedLonnsendring = (
  field: AndelFieldIdentifikator,
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
) => erArbeidstaker(field) && harLonnsendringUtenInntektsmelding(values, field, faktaOmBeregning);

// AT og FL i samme organisasjon

export const andelErStatusFLOgHarATISammeOrg = (
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
): boolean => !!faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe && erFrilanser(field);

const andelErStatusATUtenInntektsmeldingOgHarFLISammeOrg = (
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
): boolean =>
  !!faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe &&
  erArbeidstaker(field) &&
  erArbeidstakerUtenInntektsmeldingOgFrilansISammeOrganisasjon(field, faktaOmBeregning);

// Søker mottar ytelse
const sokerMottarYtelseForAndel = (
  values: FaktaOmBeregningAksjonspunktValues,
  field: AndelFieldIdentifikator,
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
): boolean => {
  if (!faktaOmBeregning.vurderMottarYtelse) {
    return false;
  }
  const mottarYtelseMap = andelsnrMottarYtelseMap(values, faktaOmBeregning.vurderMottarYtelse, beregningsgrunnlag);
  return !!field.andelsnr && !!mottarYtelseMap[field.andelsnr];
};

// Etterlønn / sluttpakke
const andelErEtterlønnSluttpakkeOgSkalFastsettes = (
  andel: AndelFieldIdentifikator,
  values: FaktaOmBeregningAksjonspunktValues,
): boolean => {
  if (andel.arbeidsforholdType && andel.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE) {
    return !!values[harEtterlonnSluttpakkeField];
  }
  return false;
};

// Manuelt registrert med handlingstype LAGT_TIL_AV_BRUKER
export const erAndelKunstigArbeidsforhold = (
  andel: AndelFieldIdentifikator,
  beregningsgrunnlag: Beregningsgrunnlag,
): boolean => {
  const firstBgPeriod = beregningsgrunnlag.beregningsgrunnlagPeriode[0];
  const lagtTilAvBruker = firstBgPeriod.beregningsgrunnlagPrStatusOgAndel?.find(
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

const skalFastsettInntektForAndel =
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
    if (
      erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse(
        andel,
        beregningsgrunnlag,
        andel.arbeidsforholdId,
      )
    ) {
      return true;
    }
    if (andelErEtterlønnSluttpakkeOgSkalFastsettes(andel, values)) {
      return true;
    }
    return false;
  };

const skalKunneEndreBeregningsgrunnlag =
  (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) =>
  (andel: AndelFieldIdentifikator): boolean => {
    if (skalFastsettInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andel)) {
      return true;
    }
    return erNyoppstartetFrilanser(andel, values);
  };

// Overstyring
export const erOverstyringAvBeregningsgrunnlag = (values: FaktaOmBeregningAksjonspunktValues): boolean =>
  !!values && values[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] === true;

const harOverstyringsAP = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov &&
  avklaringsbehov.some(ap => ap.definisjon === FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);

export const erInitialOverstyringAvBeregningsgrunnlag = (beregningsgrunnlag: Beregningsgrunnlag) =>
  beregningsgrunnlag.erOverstyrtInntekt || harOverstyringsAP(beregningsgrunnlag.avklaringsbehov);

export const skalFastsetteInntektForAndel =
  (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) =>
  (andel: AndelFieldIdentifikator): boolean =>
    harKunYtelse(faktaOmBeregning) ||
    skalKunneEndreBeregningsgrunnlag(values, faktaOmBeregning, beregningsgrunnlag)(andel);

export const kanRedigereInntektForAndel =
  (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) =>
  (andel: AndelFieldIdentifikator) =>
    erOverstyringAvBeregningsgrunnlag(values) ||
    skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)(andel);

export const getKanRedigereInntekt =
  (values: FaktaOmBeregningAksjonspunktValues, beregningsgrunnlag: Beregningsgrunnlag) =>
  (andel: AndelFieldIdentifikator) => {
    if (!beregningsgrunnlag.faktaOmBeregning) {
      return false;
    }
    return kanRedigereInntektForAndel(values, beregningsgrunnlag.faktaOmBeregning, beregningsgrunnlag)(andel);
  };

// Skal redigere inntektskategori
export const skalRedigereInntektskategoriForAndel = (
  beregningsgrunnlag: Beregningsgrunnlag,
  andel: AndelFieldIdentifikator,
) => erAndelKunstigArbeidsforhold(andel, beregningsgrunnlag);

export const mapAndelToField = (
  andel: AndelForFaktaOmBeregning,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): AndelFieldValue => ({
  ...setGenerellAndelsinfo(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling),
  arbeidsforholdId: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsforholdId : undefined,
  arbeidsperiodeFom: andel.arbeidsforhold ? andel.arbeidsforhold.startdato : '',
  arbeidsperiodeTom: andel.arbeidsforhold ? andel.arbeidsforhold.opphoersdato : '',
  arbeidsforholdType: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsforholdType : undefined,
  aktivitetStatus: andel.aktivitetStatus,
  andelsnr: andel.andelsnr,
  arbeidsgiverId: andel.arbeidsforhold ? andel.arbeidsforhold.arbeidsgiverIdent : undefined,
  skalKunneEndreAktivitet: andel.skalKunneEndreAktivitet,
  fastsattBelop: andel.fastsattBelop || andel.fastsattBelop === 0 ? formatCurrencyNoKr(andel.fastsattBelop) : '',
  belopReadOnly: andel.belopReadOnly || andel.belopReadOnly === 0 ? formatCurrencyNoKr(andel.belopReadOnly) : '',
  refusjonskrav: andel.refusjonskrav || andel.refusjonskrav === 0 ? formatCurrencyNoKr(andel.refusjonskrav) : '',
});

export const getArbeidsgiverIndex = (
  arbeidstakerInntektValues: ArbeidstakerInntektValues[],
  arbeidsgiverIdent: string,
) => arbeidstakerInntektValues.findIndex(a => a.arbeidsgiverIdent === arbeidsgiverIdent);

export const getFastsattBelopFromArbeidstakerInntekt = (
  arbeidstakerInntektValues: ArbeidstakerInntektValues[] | undefined,
  arbeidsgiverIdent: string,
) =>
  arbeidstakerInntektValues?.find(arbeidsgiver => arbeidsgiver.arbeidsgiverIdent === arbeidsgiverIdent)?.fastsattBelop;

export const getFaktaOmBeregning = (beregningsgrunnlag: Beregningsgrunnlag): FaktaOmBeregning => {
  if (!beregningsgrunnlag.faktaOmBeregning) {
    throw new Error('Mangler fakta om beregning, ugyldig tilstand');
  }
  return beregningsgrunnlag.faktaOmBeregning;
};

export const getFaktaOmBeregningTilfellerKoder = (beregningsgrunnlag: Beregningsgrunnlag): string[] =>
  getFaktaOmBeregning(beregningsgrunnlag)?.faktaOmBeregningTilfeller ?? [];
