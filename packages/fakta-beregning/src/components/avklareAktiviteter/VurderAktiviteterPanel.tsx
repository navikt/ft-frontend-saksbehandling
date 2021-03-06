import React, { FunctionComponent } from 'react';
import moment from 'moment';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  BeregningAktivitet,
} from '@navikt/ft-types';
import { BeregningAktiviteterTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import {
  buildInitialValues as buildInitialValuesForTabell,
  lagAktivitetFieldId,
  transformValues as transformValuesForTabell,
} from './VurderAktiviteterTabell';
import AvklarAktiviteterValues, { AktiviteterValues } from '../../typer/AvklarAktivitetTypes';
import VurderAktiviteterTabellReactHookForm from './VurderAktiviteterTabellReactHookForm';

const harListeAktivitetSomSkalBrukes = (
  mapping: AvklarBeregningAktiviteter,
  values: AvklarAktiviteterValues,
): boolean =>
  mapping.aktiviteter.find(aktivitet => {
    const fieldId = lagAktivitetFieldId(aktivitet);
    return !!values.aktiviteterValues && !!values.aktiviteterValues[fieldId]
      ? values.aktiviteterValues[fieldId].skalBrukes !== 'false'
      : aktivitet.skalBrukes;
  }) !== undefined;

export const finnPlasseringIListe = (gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[], dato: string): number => {
  let i = 0;
  while (
    i < gjeldendeTomDatoMapping.length &&
    moment(dato).isBefore(gjeldendeTomDatoMapping[i].tom === undefined ? null : gjeldendeTomDatoMapping[i].tom)
  ) {
    i += 1;
  }
  return i;
};

export const leggTilAktivitet = (
  gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[],
  aktivitet: BeregningAktivitet,
  tomDato: string,
): void => {
  // Finnes gjeldendeTomDatoMapping med tomDato ?
  const eksisterende = gjeldendeTomDatoMapping.find(({ tom }) => tom === tomDato);
  if (eksisterende === undefined) {
    const nyTomDatoMapping = {
      tom: tomDato,
      aktiviteter: [aktivitet],
    };
    const index = finnPlasseringIListe(gjeldendeTomDatoMapping, tomDato);
    gjeldendeTomDatoMapping.splice(index, 0, nyTomDatoMapping);
  } else {
    eksisterende.aktiviteter.push(aktivitet);
  }
};

const lagTomDatoMapping = (values: AvklarAktiviteterValues): AvklarBeregningAktiviteter[] => {
  const forrigeTomDatoMapping = values.avklarAktiviteter.aktiviteterTomDatoMapping;
  const gjeldendeTomDatoMapping = [];
  const stpOpptjening = values.avklarAktiviteter.skj??ringstidspunkt;

  // Alle aktiviteter som har t.o.m dato p?? en dag f??r, eller etter, skal legges til i gjeldendeTomDatoMapping
  forrigeTomDatoMapping
    .flatMap(({ aktiviteter }) => aktiviteter)
    .forEach(aktivitet => {
      const nyAktivitet = { ...aktivitet };
      const tomDato = values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom;
      if (!!tomDato && tomDato !== nyAktivitet.tom) {
        nyAktivitet.tom = tomDato;
      }
      if (moment(tomDato).isSameOrAfter(moment(stpOpptjening).subtract(1, 'days'))) {
        leggTilAktivitet(gjeldendeTomDatoMapping, nyAktivitet, stpOpptjening);
      } else {
        leggTilAktivitet(gjeldendeTomDatoMapping, nyAktivitet, moment(tomDato).add(1, 'days').format('YYYY-MM-DD'));
      }
    });
  return gjeldendeTomDatoMapping;
};

/**
 * Returnerer aktuelle aktivitetslister som skal vises frem i panelet (f.eks om man skal vise frem benyttet aktivitet,
 * eller ogs?? andre aktiviteter for overstyring)
 */
const finnListerSomSkalVurderes = (
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  values: AvklarAktiviteterValues,
  erOverstyrt: boolean,
): AvklarBeregningAktiviteter[] => {
  const nyTomDatoMapping = values ? lagTomDatoMapping(values) : aktiviteterTomDatoMapping;
  if (erOverstyrt) {
    return nyTomDatoMapping;
  }

  if (!values || harListeAktivitetSomSkalBrukes(nyTomDatoMapping[0], values) || nyTomDatoMapping.length === 1) {
    return [nyTomDatoMapping[0]];
  }
  return [nyTomDatoMapping[0], nyTomDatoMapping[1]];
};

/**
 *  Utleder "gjeldende" skj??ringstidspunkt (s.t.p) av lister med aktiviteter inndelt i skj??ringstidspunkt.
 *  Disse inndelingene antas sortert i rekkef??lge med seneste s.t.p f??rst. Det sjekkes derfor  i rekkef??lge om
 *  en aktivitet skal brukes (skalBrukes), og s.t.p for inndelingen til den f??rste aktiviteten som
 *  skal brukes blir brukt.
 *
 *  Det antas alts?? at et s.t.p for en aktivitet er angitt i listeSomSkalVurderes[k].tom, der
 *  listeSomSkalVurderes[k].aktiviteter er en samling aktiviteter for s.t.p inndeling 'k'.
 *  (Liste med lister av aktiviteter).
 *
 * @param {*} values - Verdier fra n??v??rende form values
 * @param {*} listeSomSkalVurderes - Liste med aktiviteter delt inn i "b??tter" for skj??ringstidspunkt
 * @returns seneste skj??ringstidspunkt for en aktivitet som er satt til "skalBrukes". Undefined hvis
 * noen av argumentene er undefined.
 */
const utledGjeldendeSkj??ringstidspunkt = (
  values: AvklarAktiviteterValues,
  listeSomSkalVurderes: AvklarBeregningAktiviteter[],
): string => {
  if (values === undefined || listeSomSkalVurderes === undefined) {
    return undefined;
  }
  for (let k = 0; k < listeSomSkalVurderes.length; k += 1) {
    const { aktiviteter } = listeSomSkalVurderes[k];
    for (let i = 0; i < aktiviteter.length; i += 1) {
      const tempaktivitet = values.aktiviteterValues[lagAktivitetFieldId(aktiviteter[i])];
      if (tempaktivitet.skalBrukes === 'true') {
        return listeSomSkalVurderes[k].tom;
      }
    }
  }
  return undefined;
};

type OwnProps = {
  erOverstyrt: boolean;
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  harAvklaringsbehov: boolean;
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[];
  alleKodeverk: AlleKodeverk;
  values: AvklarAktiviteterValues;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
};

interface StaticFunctions {
  transformValues: (
    values: AvklarAktiviteterValues,
    aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
    erOverstyrt: boolean,
  ) => BeregningAktiviteterTransformedValues;
  harIngenAktiviteter: (
    values: AvklarAktiviteterValues,
    aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
    erOverstyrt: boolean,
  ) => boolean;
  buildInitialValues: (
    aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
    alleKodeverk: AlleKodeverk,
    erOverstyrt: boolean,
    harAvklaringsbehov: boolean,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  ) => AktiviteterValues;
}

/**
 * VurderAktiviteterPanel
 *
 * Presentasjonskomponent.. Inneholder tabeller for avklaring av skj??ringstidspunkt
 */
export const VurderAktiviteterPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAvklaringsbehovClosed,
  values,
  aktiviteterTomDatoMapping,
  erOverstyrt,
  harAvklaringsbehov,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}) => {
  const listeSomSkalVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const gjeldendeSkj??ringstidspunkt = utledGjeldendeSkj??ringstidspunkt(values, listeSomSkalVurderes);

  return (
    <>
      {listeSomSkalVurderes.map(aktivitetMap => (
        <VurderAktiviteterTabellReactHookForm
          readOnly={readOnly}
          isAvklaringsbehovClosed={isAvklaringsbehovClosed}
          aktiviteter={aktivitetMap.aktiviteter}
          erOverstyrt={erOverstyrt}
          harAvklaringsbehov={harAvklaringsbehov}
          alleKodeverk={alleKodeverk}
          tomDatoForAktivitetGruppe={aktivitetMap.tom}
          valgtSkj??ringstidspunkt={gjeldendeSkj??ringstidspunkt}
          ingenAktiviterErBrukt={gjeldendeSkj??ringstidspunkt === undefined}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={aktivitetMap.tom}
          fieldId={fieldId}
        />
      ))}
    </>
  );
};

VurderAktiviteterPanel.harIngenAktiviteter = (values, aktiviteterTomDatoMapping, erOverstyrt): boolean => {
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const harAktiviteterSomSkalBrukes = harListeAktivitetSomSkalBrukes(listerSomVurderes[0], values);
  if (harAktiviteterSomSkalBrukes) {
    return false;
  }
  const harAktiviteterINesteSkj??ringstidspunkt =
    listerSomVurderes.length > 1 && listerSomVurderes[1].aktiviteter.length > 0;
  if (!harAktiviteterINesteSkj??ringstidspunkt) {
    return true;
  }
  const harAktiviteterSomSkalBrukesINesteSkj??ringstidspunkt = harListeAktivitetSomSkalBrukes(
    listerSomVurderes[1],
    values,
  );
  return !harAktiviteterSomSkalBrukesINesteSkj??ringstidspunkt;
};

const erLikEllerF??r = (dato1: string, dato2: string): boolean => moment(dato1).isSameOrBefore(moment(dato2));

VurderAktiviteterPanel.transformValues = (
  values: AvklarAktiviteterValues,
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  erOverstyrt: boolean,
): BeregningAktiviteterTransformedValues => {
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const gjeldendeSkj??ringstidspunkt = utledGjeldendeSkj??ringstidspunkt(values, listerSomVurderes);
  return {
    beregningsaktivitetLagreDtoList: listerSomVurderes.flatMap(liste =>
      transformValuesForTabell(values, liste.aktiviteter, gjeldendeSkj??ringstidspunkt, liste.tom),
    ),
  };
};

/**
 *  Utleder "gjeldende" skj??ringstidspunkt (s.t.p) av lister med aktiviteter inndelt i skj??ringstidspunkt.
 *  Disse inndelingene antas sortert i rekkef??lge med seneste s.t.p f??rst. Det sjekkes derfor  i rekkef??lge om
 *  en aktivitet skal brukes (skalBrukes), og s.t.p for inndelingen til den f??rste aktiviteten som
 *  skal brukes blir brukt.
 *
 *  Det antas alts?? at et s.t.p for en aktivitet er angitt i listeSomSkalVurderes[k].tom, der
 *  listeSomSkalVurderes[k].aktiviteter er en samling aktiviteter for s.t.p inndeling 'k'.
 *  (Liste med lister av aktiviteter).
 *
 * @param {*} aktiviteterTomDatoMapping - Liste med aktiviteter delt inn i "b??tter" for skj??ringstidspunkt
 * @returns seneste skj??ringstidspunkt for en aktivitet som er satt til "skalBrukes". Undefined hvis
 * noen av argumentene er undefined.
 */
const utledGjeldendeSkj??ringstidspunktVedPreutfylling = (
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
): string => {
  if (aktiviteterTomDatoMapping === undefined) {
    return undefined;
  }
  for (let k = 0; k < aktiviteterTomDatoMapping.length; k += 1) {
    const { aktiviteter } = aktiviteterTomDatoMapping[k];
    for (let i = 0; i < aktiviteter.length; i += 1) {
      const skalBrukes =
        aktiviteter[i].skalBrukes === true ||
        aktiviteter[i].skalBrukes === null ||
        aktiviteter[i].skalBrukes === undefined;
      if (skalBrukes) {
        return aktiviteterTomDatoMapping[k].tom;
      }
    }
  }
  return undefined;
};

VurderAktiviteterPanel.buildInitialValues = (
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  alleKodeverk: AlleKodeverk,
  erOverstyrt: boolean,
  harAvklaringsbehov: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AktiviteterValues => {
  if (!aktiviteterTomDatoMapping || aktiviteterTomDatoMapping.length === 0) {
    return {};
  }
  let initialValues = {};
  const gjeldendeSkj??ringstidspunkt = utledGjeldendeSkj??ringstidspunktVedPreutfylling(aktiviteterTomDatoMapping);

  aktiviteterTomDatoMapping.forEach(liste => {
    initialValues = {
      ...initialValues,
      ...buildInitialValuesForTabell(
        liste.aktiviteter,
        alleKodeverk,
        erOverstyrt,
        harAvklaringsbehov,
        erLikEllerF??r(gjeldendeSkj??ringstidspunkt, liste.tom),
        arbeidsgiverOpplysningerPerId,
      ),
    };
  });
  return initialValues;
};

export default VurderAktiviteterPanel;
