import { Label, Table } from '@navikt/ds-react';
import { hasValidDate } from '@navikt/ft-form-validators';
import { ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import dayjs from 'dayjs';

import { OpptjeningAktivitetType as opptjeningAktivitetTyper } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { FormattedMessage } from 'react-intl';
import { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import { VurderAktiviteterTabellRad } from './VurderAktiviteterRow';
import styles from './vurderAktiviteterTabell.module.css';

const finnHeading = (aktiviteter: BeregningAktivitet[], erOverstyrt: boolean, skjaeringstidspunkt: string) => {
  const datoFeil = hasValidDate(skjaeringstidspunkt);
  const formatertStp = datoFeil ? '' : dayjs(skjaeringstidspunkt).format(DDMMYYYY_DATE_FORMAT);

  const harVentelonnVartpenger = aktiviteter.some(
    aktivitet =>
      aktivitet.arbeidsforholdType && aktivitet.arbeidsforholdType === opptjeningAktivitetTyper.VENTELØNN_VARTPENGER,
  );

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

type Props = {
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
};

export const VurderAktiviteterTabellReactHookForm = ({
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
  <>
    <Label size="small">{finnHeading(aktiviteter, erOverstyrt, tomDatoForAktivitetGruppe)}</Label>
    <Table size="small" className={styles.table}>
      <Table.Header>
        <Table.Row>
          {getHeaderTextCodes().map(header => (
            <Table.HeaderCell key={header} scope="col">
              <Label size="small" as="span">
                <FormattedMessage id={header} />
              </Label>
            </Table.HeaderCell>
          ))}
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
  </>
);
