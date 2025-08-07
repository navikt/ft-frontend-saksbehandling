import { FormattedMessage } from 'react-intl';

import { Label, Table, VStack } from '@navikt/ds-react';

import { OpptjeningAktivitetType as opptjeningAktivitetTyper } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

import type { AktiviteterValues, AvklarAktiviteterValues } from '../../typer/AvklarAktivitetTypes';
import type { BeregningAktivitetTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import type { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import { VurderAktiviteterTabellRad } from './VurderAktiviteterRow';
import { isSameOrBefore, lagAktivitetFieldId, mapToInitialValues } from './vurderAktiviteterTabellUtils';

const finnHeading = (aktiviteter: BeregningAktivitet[], skjaeringstidspunkt: string) => {
  const harVentelonnVartpenger = aktiviteter.some(
    aktivitet =>
      aktivitet.arbeidsforholdType && aktivitet.arbeidsforholdType === opptjeningAktivitetTyper.VENTELØNN_VARTPENGER,
  );

  if (harVentelonnVartpenger) {
    return (
      <Label size="small">
        <FormattedMessage
          id="VurderAktiviteterTabell.VentelonnVartpenger.Overskrift"
          values={{ skjaeringstidspunkt: dateFormat(skjaeringstidspunkt) }}
        />
      </Label>
    );
  }
  return null;
};

interface Props {
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  aktiviteter: BeregningAktivitet[];
  kodeverkSamling: KodeverkForPanel;
  erOverstyrt: boolean;
  harAvklaringsbehov: boolean;
  tomDatoForAktivitetGruppe: string;
  valgtSkjæringstidspunkt?: string;
  ingenAktiviterErBrukt: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
}

export const VurderAktiviteterTabell = ({
  readOnly,
  isAvklaringsbehovClosed,
  aktiviteter,
  kodeverkSamling,
  erOverstyrt,
  harAvklaringsbehov,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}: Props) => (
  <VStack gap="space-8">
    {finnHeading(aktiviteter, tomDatoForAktivitetGruppe)}
    <Table size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textSize="small">
            <FormattedMessage id="VurderAktiviteterTabell.Header.Aktivitet" />
          </Table.HeaderCell>
          <Table.HeaderCell textSize="small">
            <FormattedMessage id="VurderAktiviteterTabell.Header.Periode" />
          </Table.HeaderCell>
          <Table.HeaderCell textSize="small">
            <FormattedMessage id="VurderAktiviteterTabell.Header.Benytt" />
          </Table.HeaderCell>
          <Table.HeaderCell textSize="small">
            <FormattedMessage id="VurderAktiviteterTabell.Header.IkkeBenytt" />
          </Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {aktiviteter.map(aktivitet => (
          <VurderAktiviteterTabellRad
            key={`${aktivitet.arbeidsgiverIdent}-${aktivitet.fom}-${aktivitet.tom}`}
            aktivitet={aktivitet}
            readOnly={readOnly}
            isAvklaringsbehovClosed={isAvklaringsbehovClosed}
            kodeverkSamling={kodeverkSamling}
            erOverstyrt={erOverstyrt}
            harAvklaringsbehov={harAvklaringsbehov}
            tomDatoForAktivitetGruppe={tomDatoForAktivitetGruppe}
            valgtSkjæringstidspunkt={valgtSkjæringstidspunkt}
            ingenAktiviterErBrukt={ingenAktiviterErBrukt}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            fieldId={fieldId}
          />
        ))}
      </Table.Body>
    </Table>
  </VStack>
);

VurderAktiviteterTabell.transformValues = (
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
        values.aktiviteterValues &&
        (values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].skalBrukes === 'false' ||
          values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom != null),
    )
    .map(aktivitet => ({
      // Sjekker om ident har 9 tegn, antar da at det er et orgnr
      oppdragsgiverOrg:
        aktivitet.arbeidsgiverIdent && aktivitet.arbeidsgiverIdent.length === 9
          ? aktivitet.arbeidsgiverIdent
          : undefined,
      arbeidsforholdRef: aktivitet.arbeidsforholdId,
      fom: aktivitet.fom,
      tom:
        values.aktiviteterValues && values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom != null
          ? values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom
          : aktivitet.tom,
      opptjeningAktivitetType: aktivitet.arbeidsforholdType,
      arbeidsgiverIdentifikator: aktivitet.arbeidsgiverIdent,
      skalBrukes:
        erValgtSkjæringstidspunktLikEllerFørTomDato && values.aktiviteterValues
          ? values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].skalBrukes === 'true'
          : true,
    }));
};

VurderAktiviteterTabell.buildInitialValues = (
  aktiviteter: BeregningAktivitet[],
  kodeverkSamling: KodeverkForPanel,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AktiviteterValues => {
  const initialValues: AktiviteterValues = {};
  if (!aktiviteter) {
    return initialValues;
  }
  aktiviteter.forEach(aktivitet => {
    initialValues[lagAktivitetFieldId(aktivitet)] = mapToInitialValues(
      aktivitet,
      kodeverkSamling,
      erOverstyrt,
      harAksjonspunkt,
      erTomLikEllerFørSkjæringstidpunkt,
      arbeidsgiverOpplysningerPerId,
    );
  });
  return initialValues;
};
