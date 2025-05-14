import dayjs from 'dayjs';

import { KodeverkType, OpptjeningAktivitetType as opptjeningAktivitetTyper } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';

import { AktivitetValues } from '../../typer/AvklarAktivitetTypes';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { createVisningsnavnFakta } from '../../utils/ArbeidsforholdHelper';

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
 *
 * Det legges til slutt på en felles "suffiks" på alle genererte prefikser
 *
 * @param {*} aktivitet
 */
export const lagAktivitetFieldId = (aktivitet: BeregningAktivitet): string => {
  if (aktivitet.arbeidsgiverIdent) {
    const aktivitetPrefiks = aktivitetFieldIdPrefiks(aktivitet, aktivitet.arbeidsgiverIdent);
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
 * @param {*} erIngenAktiviteterBrukt - true hvis alle aktiviteter er satt til "Ikke benytt"
 */
export const skalVurdereAktivitet = (
  aktivitet: BeregningAktivitet,
  skalOverstyre: boolean,
  harAksjonspunkt: boolean,
  erSkjæringstidpunktLikEllerFørTom: boolean,
  erIngenAktiviteterBrukt: boolean,
): boolean => {
  if (!skalOverstyre && !harAksjonspunkt) {
    return false;
  }
  if (aktivitet.arbeidsforholdType && aktivitet.arbeidsforholdType === opptjeningAktivitetTyper.AAP) {
    return false;
  }
  if (skalOverstyre) {
    return erAktivitetValgbar(erSkjæringstidpunktLikEllerFørTom, erIngenAktiviteterBrukt);
  }
  return true;
};

const lagVisningsnavn = (
  aktivitet: BeregningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): string => {
  const agOpplysning = aktivitet.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[aktivitet.arbeidsgiverIdent]
    : undefined;
  if (!agOpplysning) {
    return aktivitet.arbeidsforholdType
      ? kodeverkSamling[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(oat => oat.kode === aktivitet.arbeidsforholdType)
          ?.navn || ''
      : '';
  }
  return createVisningsnavnFakta(agOpplysning, aktivitet.eksternArbeidsforholdId);
};

export const isSameOrBefore = (dato1: string, dato2: string): boolean =>
  dayjs(dato1).isSame(dayjs(dato2)) || dayjs(dato1).isBefore(dayjs(dato2));

const skalBrukesPretufylling = (
  aktivitet: BeregningAktivitet,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
): string | undefined => {
  if (skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt, erTomLikEllerFørSkjæringstidpunkt, false)) {
    if (aktivitet.skalBrukes === undefined || aktivitet.skalBrukes === null) {
      return undefined;
    }
    return aktivitet.skalBrukes.toString();
  }
  return aktivitet.skalBrukes === true || aktivitet.skalBrukes === null || aktivitet.skalBrukes === undefined
    ? 'true'
    : 'false';
};

export const mapToInitialValues = (
  aktivitet: BeregningAktivitet,
  kodeverkSamling: KodeverkForPanel,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AktivitetValues => ({
  beregningAktivitetNavn: lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, kodeverkSamling),
  fom: aktivitet.fom,
  tom: aktivitet.tom,
  skalBrukes: skalBrukesPretufylling(aktivitet, erOverstyrt, harAksjonspunkt, erTomLikEllerFørSkjæringstidpunkt),
});
