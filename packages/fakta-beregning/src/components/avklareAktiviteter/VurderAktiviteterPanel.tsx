import { FormattedMessage } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { hasValidDate } from '@navikt/ft-form-validators';
import { ArbeidsgiverOpplysningerPerId, AvklarBeregningAktiviteter } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { AktiviteterValues, AvklarAktiviteterValues } from '../../typer/AvklarAktivitetTypes';
import { BeregningAktivitetTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { leggTilAktivitet } from './vurderAktiviteterPanelUtils';
import {
  buildInitialValues as buildInitialValuesForTabell,
  lagAktivitetFieldId,
  transformValues as transformValuesForTabell,
} from './VurderAktiviteterTabell';
import { VurderAktiviteterTabellReactHookForm } from './VurderAktiviteterTabellReactHookForm';

const harListeAktivitetSomSkalBrukes = (
  mapping: AvklarBeregningAktiviteter,
  values: AvklarAktiviteterValues,
): boolean =>
  !!mapping.aktiviteter &&
  mapping.aktiviteter.find(aktivitet => {
    const fieldId = lagAktivitetFieldId(aktivitet);
    return !!values.aktiviteterValues && !!values.aktiviteterValues[fieldId]
      ? values.aktiviteterValues[fieldId].skalBrukes !== 'false'
      : aktivitet.skalBrukes;
  }) !== undefined;

// Sjekk for om saksbehandler har skrevet en ugyldig dato i inputfeltet.
const finnesUgyldigeDatoer = (values: AvklarAktiviteterValues): boolean =>
  !!values.avklarAktiviteter?.aktiviteterTomDatoMapping &&
  values.avklarAktiviteter.aktiviteterTomDatoMapping.some(
    aktMap => aktMap.aktiviteter && !aktMap.aktiviteter.some(akt => !dayjs(akt.tom).isValid()),
  );

const lagTomDatoMapping = (values: AvklarAktiviteterValues): AvklarBeregningAktiviteter[] => {
  const forrigeTomDatoMapping = values.avklarAktiviteter
    ? values.avklarAktiviteter.aktiviteterTomDatoMapping || []
    : [];
  const gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[] = [];
  const stpOpptjening = values.avklarAktiviteter?.skjæringstidspunkt;

  if (!stpOpptjening) {
    throw new Error('Forventer skjæringstidspunkt for opptjening her!');
  }
  // Alle aktiviteter som har t.o.m dato på en dag før, eller etter, skal legges til i gjeldendeTomDatoMapping
  forrigeTomDatoMapping
    .flatMap(({ aktiviteter }) => aktiviteter)
    .forEach(aktivitet => {
      if (!aktivitet) {
        throw new Error('Må ha aktivitet i form values her!');
      }
      const nyAktivitet = { ...aktivitet };
      const tomDato = values.aktiviteterValues
        ? values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom
        : undefined;
      if (!!tomDato && tomDato !== nyAktivitet.tom) {
        nyAktivitet.tom = tomDato;
      }
      if (
        dayjs(tomDato).isSame(dayjs(stpOpptjening).subtract(1, 'days')) ||
        dayjs(tomDato).isAfter(dayjs(stpOpptjening).subtract(1, 'days'))
      ) {
        leggTilAktivitet(gjeldendeTomDatoMapping, nyAktivitet, stpOpptjening);
      } else {
        leggTilAktivitet(gjeldendeTomDatoMapping, nyAktivitet, dayjs(tomDato).add(1, 'days').format('YYYY-MM-DD'));
      }
    });
  return gjeldendeTomDatoMapping;
};

/**
 * Returnerer aktuelle aktivitetslister som skal vises frem i panelet (f.eks om man skal vise frem benyttet aktivitet,
 * eller også andre aktiviteter for overstyring)
 */
const finnListerSomSkalVurderes = (
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  values: AvklarAktiviteterValues,
  erOverstyrt: boolean,
): AvklarBeregningAktiviteter[] => {
  const nyTomDatoMapping =
    values && !finnesUgyldigeDatoer(values) ? lagTomDatoMapping(values) : aktiviteterTomDatoMapping;
  if (erOverstyrt) {
    return nyTomDatoMapping;
  }

  if (!values || harListeAktivitetSomSkalBrukes(nyTomDatoMapping[0], values) || nyTomDatoMapping.length === 1) {
    return [nyTomDatoMapping[0]];
  }
  return [nyTomDatoMapping[0], nyTomDatoMapping[1]];
};

/**
 *  Utleder "gjeldende" skjæringstidspunkt (s.t.p) av lister med aktiviteter inndelt i skjæringstidspunkt.
 *  Disse inndelingene antas sortert i rekkefølge med seneste s.t.p først. Det sjekkes derfor  i rekkefølge om
 *  en aktivitet skal brukes (skalBrukes), og s.t.p for inndelingen til den første aktiviteten som
 *  skal brukes blir brukt.
 *
 *  Det antas altså at et s.t.p for en aktivitet er angitt i listeSomSkalVurderes[k].tom, der
 *  listeSomSkalVurderes[k].aktiviteter er en samling aktiviteter for s.t.p inndeling 'k'.
 *  (Liste med lister av aktiviteter).
 *
 * @param {*} values - Verdier fra nåværende form values
 * @param {*} listeSomSkalVurderes - Liste med aktiviteter delt inn i "bøtter" for skjæringstidspunkt
 * @returns seneste skjæringstidspunkt for en aktivitet som er satt til "skalBrukes". Undefined hvis
 * noen av argumentene er undefined.
 */
const utledGjeldendeSkjæringstidspunkt = (
  values: AvklarAktiviteterValues,
  listeSomSkalVurderes: AvklarBeregningAktiviteter[],
): string | undefined => {
  if (values === undefined || listeSomSkalVurderes === undefined) {
    return undefined;
  }
  for (let k = 0; k < listeSomSkalVurderes.length; k += 1) {
    const aktiviteter = listeSomSkalVurderes[k].aktiviteter || [];
    for (let i = 0; i < aktiviteter.length; i += 1) {
      const tempaktivitet = values.aktiviteterValues
        ? values.aktiviteterValues[lagAktivitetFieldId(aktiviteter[i])]
        : undefined;
      if (tempaktivitet?.skalBrukes === 'true') {
        return listeSomSkalVurderes[k].tom;
      }
    }
  }
  return undefined;
};

const getFormatertSkjæringstidspunkt = (skjaeringstidspunkt: string | undefined) => {
  const datoFeil = !skjaeringstidspunkt || hasValidDate(skjaeringstidspunkt);
  return datoFeil ? '' : dayjs(skjaeringstidspunkt).format(DDMMYYYY_DATE_FORMAT);
};

type Props = {
  erOverstyrt: boolean;
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  harAvklaringsbehov: boolean;
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[];
  kodeverkSamling: KodeverkForPanel;
  values: AvklarAktiviteterValues;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
};

/**
 * VurderAktiviteterPanel
 *
 * Presentasjonskomponent.. Inneholder tabeller for avklaring av skjæringstidspunkt
 */
export const VurderAktiviteterPanel = ({
  readOnly,
  isAvklaringsbehovClosed,
  values,
  aktiviteterTomDatoMapping,
  erOverstyrt,
  harAvklaringsbehov,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}: Props) => {
  const listeSomSkalVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const gjeldendeSkjæringstidspunkt = utledGjeldendeSkjæringstidspunkt(values, listeSomSkalVurderes);

  return (
    <VStack gap="4">
      <BodyShort size="small">
        <FormattedMessage
          id="AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt"
          values={{ skjaeringstidspunkt: getFormatertSkjæringstidspunkt(gjeldendeSkjæringstidspunkt) }}
        />
      </BodyShort>
      {listeSomSkalVurderes.map(aktivitetMap => (
        <VurderAktiviteterTabellReactHookForm
          readOnly={readOnly}
          isAvklaringsbehovClosed={isAvklaringsbehovClosed}
          aktiviteter={aktivitetMap.aktiviteter || []}
          erOverstyrt={erOverstyrt}
          harAvklaringsbehov={harAvklaringsbehov}
          kodeverkSamling={kodeverkSamling}
          tomDatoForAktivitetGruppe={aktivitetMap.tom}
          valgtSkjæringstidspunkt={gjeldendeSkjæringstidspunkt}
          ingenAktiviterErBrukt={gjeldendeSkjæringstidspunkt === undefined}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={aktivitetMap.tom}
          fieldId={fieldId}
        />
      ))}
    </VStack>
  );
};

VurderAktiviteterPanel.harIngenAktiviteter = (
  values: AvklarAktiviteterValues,
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  erOverstyrt: boolean,
): boolean => {
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const harAktiviteterSomSkalBrukes = harListeAktivitetSomSkalBrukes(listerSomVurderes[0], values);
  if (harAktiviteterSomSkalBrukes) {
    return false;
  }
  const harAktiviteterINesteSkjæringstidspunkt =
    listerSomVurderes.length > 1 && listerSomVurderes[1].aktiviteter && listerSomVurderes[1].aktiviteter.length > 0;
  if (!harAktiviteterINesteSkjæringstidspunkt) {
    return true;
  }
  const harAktiviteterSomSkalBrukesINesteSkjæringstidspunkt = harListeAktivitetSomSkalBrukes(
    listerSomVurderes[1],
    values,
  );
  return !harAktiviteterSomSkalBrukesINesteSkjæringstidspunkt;
};

const erLikEllerFør = (dato1: string | undefined, dato2: string): boolean =>
  dayjs(dato1).isSame(dayjs(dato2)) || dayjs(dato1).isBefore(dayjs(dato2));

VurderAktiviteterPanel.transformValues = (
  values: AvklarAktiviteterValues,
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  erOverstyrt: boolean,
): BeregningAktivitetTransformedValues[] => {
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const gjeldendeSkjæringstidspunkt = utledGjeldendeSkjæringstidspunkt(values, listerSomVurderes);
  if (!gjeldendeSkjæringstidspunkt) {
    throw new Error('Finner ikke forventet skjæringstidspunkt, ugyldig tilstand');
  }
  return listerSomVurderes.flatMap(liste =>
    transformValuesForTabell(values, liste.aktiviteter || [], gjeldendeSkjæringstidspunkt, liste.tom),
  );
};

/**
 *  Utleder "gjeldende" skjæringstidspunkt (s.t.p) av lister med aktiviteter inndelt i skjæringstidspunkt.
 *  Disse inndelingene antas sortert i rekkefølge med seneste s.t.p først. Det sjekkes derfor  i rekkefølge om
 *  en aktivitet skal brukes (skalBrukes), og s.t.p for inndelingen til den første aktiviteten som
 *  skal brukes blir brukt.
 *
 *  Det antas altså at et s.t.p for en aktivitet er angitt i listeSomSkalVurderes[k].tom, der
 *  listeSomSkalVurderes[k].aktiviteter er en samling aktiviteter for s.t.p inndeling 'k'.
 *  (Liste med lister av aktiviteter).
 *
 * @param {*} aktiviteterTomDatoMapping - Liste med aktiviteter delt inn i "bøtter" for skjæringstidspunkt
 * @returns seneste skjæringstidspunkt for en aktivitet som er satt til "skalBrukes". Undefined hvis
 * noen av argumentene er undefined.
 */
const utledGjeldendeSkjæringstidspunktVedPreutfylling = (
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
): string | undefined => {
  if (aktiviteterTomDatoMapping === undefined) {
    return undefined;
  }
  for (let k = 0; k < aktiviteterTomDatoMapping.length; k += 1) {
    const aktiviteter = aktiviteterTomDatoMapping[k].aktiviteter || [];
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
  kodeverkSamling: KodeverkForPanel,
  erOverstyrt: boolean,
  harAvklaringsbehov: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AktiviteterValues => {
  if (!aktiviteterTomDatoMapping || aktiviteterTomDatoMapping.length === 0) {
    return {};
  }
  let initialValues = {};
  const gjeldendeSkjæringstidspunkt = utledGjeldendeSkjæringstidspunktVedPreutfylling(aktiviteterTomDatoMapping);

  aktiviteterTomDatoMapping.forEach(liste => {
    initialValues = {
      ...initialValues,
      ...buildInitialValuesForTabell(
        liste.aktiviteter || [],
        kodeverkSamling,
        erOverstyrt,
        harAvklaringsbehov,
        erLikEllerFør(gjeldendeSkjæringstidspunkt, liste.tom),
        arbeidsgiverOpplysningerPerId,
      ),
    };
  });
  return initialValues;
};
