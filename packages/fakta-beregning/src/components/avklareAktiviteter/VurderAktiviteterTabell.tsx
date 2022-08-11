import dayjs from 'dayjs';
import { KodeverkType, OpptjeningAktivitetType as opptjeningAktivitetTyper } from '@navikt/ft-kodeverk';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { getKodeverknavnFn } from '@navikt/ft-utils';
import AvklarAktiviteterValues, { AktiviteterValues, AktivitetValues } from '../../typer/AvklarAktivitetTypes';
import { BeregningAktivitetTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import { createVisningsnavnFakta } from '../ArbeidsforholdHelper';

/**
 * Lager en unik aktivitet-ID prefiks basert på idType for en aktivitet. Man prøver å legge på
 * aktivitet.arbeidsforholdId, om den finnes.
 *
 * @param {*} aktivitet
 * @param {*} idType er enten arbeidsgiverIdent eller aktørIdString for en aktivitet
 */
const aktivitetFieldIdPrefiks = (aktivitet: BeregningAktivitet, idType: string): string => {
  if (aktivitet.arbeidsforholdId) {
    return idType + aktivitet.arbeidsforholdId;
  }
  return idType;
};

/**
 * Felles suffiks som legges bak prefiks ved generering av aktivitetFieldIDer
 *
 * @param aktivitetPrefiks
 * @param aktivitet
 * @returns aktivitetFieldId
 */
const appendAktivitetFieldIdSuffiks = (aktivitetPrefiks: string, aktivitet: BeregningAktivitet): string =>
  aktivitetPrefiks + aktivitet.fom.replace('.', '');

/**
 * Oppretter en unik ID for en aktivitet. Denne IDen brukes for å identifisere aktiviteter, slik at man f.eks kan
 * gjøre oppslag på disse. IDen består av en prefiks som genereres ift om det finnes en arbeidsgiverIdent
 * eller en aktørIdString (eller ingen).
 *
 * Det legges til slutt på en felles "suffiks" på alle genererte prefikser
 *
 * @param {*} aktivitet
 */
export const lagAktivitetFieldId = (aktivitet: BeregningAktivitet): string => {
  if (aktivitet.arbeidsgiverIdent || aktivitet.aktørIdString) {
    const aktivitetPrefiks = aktivitetFieldIdPrefiks(
      aktivitet,
      aktivitet.arbeidsgiverIdent ? aktivitet.arbeidsgiverIdent : aktivitet.aktørIdString,
    );
    return appendAktivitetFieldIdSuffiks(aktivitetPrefiks, aktivitet);
  }
  return appendAktivitetFieldIdSuffiks(aktivitet.arbeidsforholdType, aktivitet);
};

/**
 * Avgjør om en en aktivitet er valgbar i forhold til skjæringstidspunkt eller ift om ingen aktiviteter er i bruk
 * (og ingen øvrige betingelser som f.eks overstyring)
 *
 * @param {*} erSkjæringstidpunktLikEllerFørTom true hvis t.o.m dato for aktiviteten er lik eller etter s.t.p
 * @param {*} ingenAktiviterErBrukt true hvis ingen aktiviteter er brukt
 * @returns true hvis aktivitet er valgbar (uavhengig av overstyring)
 */
const erAktivitetValgbar = (erSkjæringstidpunktLikEllerFørTom: boolean, ingenAktiviterErBrukt: boolean): boolean =>
  erSkjæringstidpunktLikEllerFørTom || ingenAktiviterErBrukt;

/**
 * Denne metoden avgjør om en aktivitet skal kunne vurderes - eller ikke. Dvs om det skal kunne velges
 * om den kan benyttes eller ikke (brukes for å avgjøre om radiobuttons for en aktivitet er synlig)
 *
 * @param {*} aktivitet - aktivitet som skal vurderes brukt
 * @param {*} skalOverstyre - om overstyring er aktivert
 * @param {*} harAksjonspunkt - om behandlingen har et aksjonspunkt for avklaringen av aktiviteter
 * @param {*} erSkjæringstidpunktLikEllerFørTom - om et gjeldende skjæringstidspunkt er lik eller før t.o.m dato
 * @param {*} ingenAktiviterErBrukt - true hvis alle aktiviteter er satt til "Ikke benytt"
 */
export const skalVurdereAktivitet = (
  aktivitet: BeregningAktivitet,
  skalOverstyre: boolean,
  harAksjonspunkt: boolean,
  erSkjæringstidpunktLikEllerFørTom: boolean,
  ingenAktiviterErBrukt: boolean,
): boolean => {
  if (!skalOverstyre && !harAksjonspunkt) {
    return false;
  }
  if (aktivitet.arbeidsforholdType && aktivitet.arbeidsforholdType === opptjeningAktivitetTyper.AAP) {
    return false;
  }
  if (skalOverstyre) {
    return erAktivitetValgbar(erSkjæringstidpunktLikEllerFørTom, ingenAktiviterErBrukt);
  }
  return true;
};

const lagVisningsnavn = (
  aktivitet: BeregningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[aktivitet.arbeidsgiverIdent];
  if (!agOpplysning) {
    return aktivitet.arbeidsforholdType
      ? getKodeverknavnFn(alleKodeverk)(aktivitet.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : '';
  }
  return createVisningsnavnFakta(agOpplysning, aktivitet.eksternArbeidsforholdId);
};

const isSameOrBefore = (dato1: string, dato2: string): boolean =>
  dayjs(dato1).isSame(dayjs(dato2)) || dayjs(dato1).isBefore(dayjs(dato2));

const skalBrukesPretufylling = (
  aktivitet: BeregningAktivitet,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
): string => {
  if (skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt, erTomLikEllerFørSkjæringstidpunkt, false)) {
    if (aktivitet.skalBrukes === undefined || aktivitet.skalBrukes === null) {
      return null;
    }
    return aktivitet.skalBrukes.toString();
  }
  return aktivitet.skalBrukes === true || aktivitet.skalBrukes === null || aktivitet.skalBrukes === undefined
    ? 'true'
    : 'false';
};

const mapToInitialValues = (
  aktivitet: BeregningAktivitet,
  alleKodeverk: AlleKodeverk,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AktivitetValues => ({
  beregningAktivitetNavn: lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, alleKodeverk),
  fom: aktivitet.fom,
  tom: aktivitet.tom,
  skalBrukes: skalBrukesPretufylling(aktivitet, erOverstyrt, harAksjonspunkt, erTomLikEllerFørSkjæringstidpunkt),
});

export const transformValues = (
  values: AvklarAktiviteterValues,
  aktiviteter: BeregningAktivitet[],
  valgtSkjæringstidspunkt: string,
  tomDatoForAktivitetGruppe: string,
): BeregningAktivitetTransformedValues[] => {
  const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(
    valgtSkjæringstidspunkt,
    tomDatoForAktivitetGruppe,
  );
  return aktiviteter
    .filter(
      aktivitet =>
        values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].skalBrukes === 'false' ||
        values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom != null,
    )
    .map(aktivitet => ({
      oppdragsgiverOrg: aktivitet.aktørIdString ? null : aktivitet.arbeidsgiverIdent,
      arbeidsforholdRef: aktivitet.arbeidsforholdId,
      fom: aktivitet.fom,
      tom:
        values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom != null
          ? values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom
          : aktivitet.tom,
      opptjeningAktivitetType: aktivitet.arbeidsforholdType ? aktivitet.arbeidsforholdType : null,
      arbeidsgiverIdentifikator: aktivitet.arbeidsgiverIdent,
      skalBrukes: erValgtSkjæringstidspunktLikEllerFørTomDato
        ? values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].skalBrukes === 'true'
        : true,
    }));
};

export const buildInitialValues = (
  aktiviteter: BeregningAktivitet[],
  alleKodeverk: AlleKodeverk,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AktiviteterValues => {
  if (!aktiviteter) {
    return {};
  }
  const initialValues = {};
  aktiviteter.forEach(aktivitet => {
    initialValues[lagAktivitetFieldId(aktivitet)] = mapToInitialValues(
      aktivitet,
      alleKodeverk,
      erOverstyrt,
      harAksjonspunkt,
      erTomLikEllerFørSkjæringstidpunkt,
      arbeidsgiverOpplysningerPerId,
    );
  });
  return initialValues;
};
