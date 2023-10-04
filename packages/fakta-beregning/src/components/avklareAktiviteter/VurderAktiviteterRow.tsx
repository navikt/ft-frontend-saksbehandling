import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { DateLabel, EditedIcon, PeriodLabel, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { prettifyDateString } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { BodyShort } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import createVisningsnavnFakta from '../ArbeidsforholdHelper';
import { lagAktivitetFieldId, skalVurdereAktivitet } from './VurderAktiviteterTabell';
import styles from './vurderAktiviteterTabell.module.css';
import KodeverkForPanel from '../../typer/kodeverkForPanel';

type OwnProps = {
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  aktivitet: BeregningAktivitet;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrt: boolean;
  harAvklaringsbehov: boolean;
  tomDatoForAktivitetGruppe: string;
  valgtSkjæringstidspunkt?: string;
  ingenAktiviterErBrukt: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
};

const isSameOrBefore = (dato1: string | undefined, dato2: string): boolean =>
  dayjs(dato1).isSame(dayjs(dato2)) || dayjs(dato1).isBefore(dayjs(dato2));

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

const VurderAktiviteterTabellRad: FunctionComponent<OwnProps> = ({
  readOnly,
  isAvklaringsbehovClosed,
  aktivitet,
  kodeverkSamling,
  erOverstyrt,
  harAvklaringsbehov,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}) => {
  const intl = useIntl();
  const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(
    valgtSkjæringstidspunkt,
    tomDatoForAktivitetGruppe,
  );

  const lagLabel = (skalBrukes: boolean) => {
    const arbeidsgiver = lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, kodeverkSamling);
    const dato = `${prettifyDateString(aktivitet.fom)} til ${prettifyDateString(aktivitet.tom || '')}`;
    return `${skalBrukes ? 'Benytt' : 'Ikke benytt'} ${arbeidsgiver} ${dato}`;
  };

  return (
    <TableRow key={lagAktivitetFieldId(aktivitet)}>
      <TableColumn className={styles.navnKol}>
        <BodyShort>{lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, kodeverkSamling)}</BodyShort>
      </TableColumn>
      <TableColumn className={styles.rowalign}>
        {!erOverstyrt && (
          <BodyShort>
            <PeriodLabel dateStringFom={aktivitet.fom} dateStringTom={aktivitet.tom} />
          </BodyShort>
        )}
        {erOverstyrt && (
          <div>
            <DateLabel dateString={aktivitet.fom} /> -{' '}
            <Datepicker
              name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.tom`}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
            />
          </div>
        )}
      </TableColumn>
      <TableColumn className={styles.radios}>
        <RadioGroupPanel
          name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          label={intl.formatMessage({ id: 'VurderAktiviteterTabell.Header.Benytt' })}
          validate={[required]}
          isHorizontal
          isReadOnly={
            readOnly ||
            !skalVurdereAktivitet(
              aktivitet,
              erOverstyrt,
              harAvklaringsbehov,
              erValgtSkjæringstidspunktLikEllerFørTomDato,
              ingenAktiviterErBrukt,
            )
          }
          radios={[
            {
              value: 'true',
              label: lagLabel(true),
            },
          ]}
          hideLegend
          hideRadioLabels
        />
      </TableColumn>
      <TableColumn className={styles.radios}>
        <RadioGroupPanel
          name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          label={intl.formatMessage({ id: 'VurderAktiviteterTabell.Header.IkkeBenytt' })}
          validate={[required]}
          isHorizontal
          isReadOnly={
            readOnly ||
            !skalVurdereAktivitet(
              aktivitet,
              erOverstyrt,
              harAvklaringsbehov,
              erValgtSkjæringstidspunktLikEllerFørTomDato,
              ingenAktiviterErBrukt,
            )
          }
          radios={[
            {
              value: 'false',
              label: lagLabel(false),
            },
          ]}
          hideLegend
          hideRadioLabels
        />
      </TableColumn>
      {isAvklaringsbehovClosed && readOnly && (
        <TableColumn>
          {skalVurdereAktivitet(
            aktivitet,
            erOverstyrt,
            harAvklaringsbehov,
            erValgtSkjæringstidspunktLikEllerFørTomDato,
            ingenAktiviterErBrukt,
          ) && <EditedIcon />}
        </TableColumn>
      )}
    </TableRow>
  );
};
export default VurderAktiviteterTabellRad;
