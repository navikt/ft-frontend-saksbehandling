import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { Label } from '@navikt/ds-react';
import { Table } from '@navikt/ft-ui-komponenter';
import { hasValidDate } from '@navikt/ft-form-validators';

import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { FormattedMessage } from 'react-intl';
import { OpptjeningAktivitetType as opptjeningAktivitetTyper } from '@navikt/ft-kodeverk';
import VurderAktiviteterTabellRad from './VurderAktiviteterRow';

const finnHeading = (aktiviteter: BeregningAktivitet[], erOverstyrt: boolean, skjaeringstidspunkt: string) => {
  const datoFeil = hasValidDate(skjaeringstidspunkt);
  const formatertStp = datoFeil ? '' : dayjs(skjaeringstidspunkt).format(DDMMYYYY_DATE_FORMAT);
  if (erOverstyrt) {
    return (
      <FormattedMessage
        id="VurderAktiviteterTabell.Overstyrt.Overskrift"
        values={{ skjaeringstidspunkt: formatertStp }}
      />
    );
  }
  const harAAP = aktiviteter.some(a => a.arbeidsforholdType && a.arbeidsforholdType === opptjeningAktivitetTyper.AAP);
  const harVentelonnVartpenger = aktiviteter.some(
    aktivitet =>
      aktivitet.arbeidsforholdType && aktivitet.arbeidsforholdType === opptjeningAktivitetTyper.VENTELØNN_VARTPENGER,
  );
  if (harAAP) {
    return (
      <FormattedMessage
        id="VurderAktiviteterTabell.FullAAPKombinert.Overskrift"
        values={{ skjaeringstidspunkt: formatertStp }}
      />
    );
  }
  if (harVentelonnVartpenger) {
    return (
      <FormattedMessage
        id="VurderAktiviteterTabell.VentelonnVartpenger.Overskrift"
        values={{ skjaeringstidspunkt: formatertStp }}
      />
    );
  }
  return '';
};

const getHeaderTextCodes = (): string[] => [
  'VurderAktiviteterTabell.Header.Aktivitet',
  'VurderAktiviteterTabell.Header.Periode',
  'VurderAktiviteterTabell.Header.Benytt',
  'VurderAktiviteterTabell.Header.IkkeBenytt',
];

type OwnProps = {
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  aktiviteter: BeregningAktivitet[];
  alleKodeverk: AlleKodeverk;
  erOverstyrt: boolean;
  harAvklaringsbehov: boolean;
  tomDatoForAktivitetGruppe: string;
  valgtSkjæringstidspunkt: string;
  ingenAktiviterErBrukt: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
};

const VurderAktiviteterTabellReactHookForm: FunctionComponent<OwnProps> = ({
  readOnly,
  isAvklaringsbehovClosed,
  aktiviteter,
  alleKodeverk,
  erOverstyrt,
  harAvklaringsbehov,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}) => (
  <>
    <Label size="small">{finnHeading(aktiviteter, erOverstyrt, tomDatoForAktivitetGruppe)}</Label>
    <Table headerTextCodes={getHeaderTextCodes()} noHover>
      {aktiviteter.map(aktivitet => (
        <VurderAktiviteterTabellRad
          key={`${aktivitet.arbeidsgiverIdent}-${aktivitet.fom}-${aktivitet.tom}`}
          aktivitet={aktivitet}
          readOnly={readOnly}
          isAvklaringsbehovClosed={isAvklaringsbehovClosed}
          alleKodeverk={alleKodeverk}
          erOverstyrt={erOverstyrt}
          harAvklaringsbehov={harAvklaringsbehov}
          tomDatoForAktivitetGruppe={tomDatoForAktivitetGruppe}
          valgtSkjæringstidspunkt={valgtSkjæringstidspunkt}
          ingenAktiviterErBrukt={ingenAktiviterErBrukt}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldId={fieldId}
        />
      ))}
    </Table>
  </>
);
export default VurderAktiviteterTabellReactHookForm;
