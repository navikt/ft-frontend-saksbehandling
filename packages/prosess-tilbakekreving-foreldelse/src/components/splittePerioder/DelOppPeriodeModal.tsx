import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { useForm } from 'react-hook-form';
import moment from 'moment/moment';
import { Detail, Label, BodyShort, Alert } from '@navikt/ds-react';
import Modal from 'nav-frontend-modal';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import styles from './delOppPeriodeModal.less';

type Periode = {
  fom: string;
  tom: string;
};

export type PerioderData = {
  forstePeriode: Periode;
  andrePeriode: Periode;
};

type FormValues = {
  forstePeriodeTomDato?: string;
};

const validerMotPeriode =
  (periodeData: Periode, intl: IntlShape) =>
  (tomDato: string): any => {
    if (
      tomDato &&
      (dateAfterOrEqual(tomDato)(moment(periodeData.tom.toString()).subtract(1, 'day')) ||
        dateBeforeOrEqual(tomDato)(periodeData.fom))
    ) {
      return intl.formatMessage({ id: 'DelOppPeriodeModalImpl.DatoUtenforPeriode' });
    }
    return null;
  };

const transformValues = (values: FormValues, periodeData: Periode): any => {
  const addDay = moment(values.forstePeriodeTomDato).add(1, 'days');
  const forstePeriode = {
    fom: periodeData.fom,
    tom: values.forstePeriodeTomDato,
  };
  const andrePeriode = {
    fom: addDay.format(ISO_DATE_FORMAT),
    tom: periodeData.tom,
  };
  return {
    forstePeriode,
    andrePeriode,
  };
};

interface PureOwnProps {
  periodeData: Periode;
  showModal: boolean;
  finnesBelopMed0Verdi: boolean;
  splitPeriod: (perioder: PerioderData) => void;
  cancelEvent: () => void;
}

const DelOppPeriodeModal: FunctionComponent<PureOwnProps> = ({
  periodeData,
  showModal,
  cancelEvent,
  finnesBelopMed0Verdi,
  splitPeriod,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  return (
    <Modal
      isOpen={showModal}
      contentLabel={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
      onRequestClose={cancelEvent}
      closeButton={false}
      className={styles.modal}
      shouldCloseOnOverlayClick={false}
    >
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => splitPeriod(transformValues(values, periodeData))}
      >
        <Label size="small" className={styles.marginTop}>
          <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
        </Label>
        <div className={styles.marginTop}>
          <Detail size="small">
            <FormattedMessage id="DelOppPeriodeModalImpl.Periode" />
          </Detail>
          <BodyShort size="small">
            {`${moment(periodeData.fom.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${moment(
              periodeData.tom.toString(),
            ).format(DDMMYYYY_DATE_FORMAT)}`}
          </BodyShort>
        </div>
        <div className={styles.marginTop}>
          <Datepicker
            name="forstePeriodeTomDato"
            label={<FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" />}
            validate={[required, hasValidDate, validerMotPeriode(periodeData, intl)]}
            disabledDays={{ before: moment(periodeData.fom).toDate(), after: moment(periodeData.tom).toDate() }}
            initialMonth={moment(periodeData.tom).toDate()}
          />
        </div>
        {finnesBelopMed0Verdi && (
          <Alert variant="error">
            <FormattedMessage id="DelOppPeriodeModalImpl.BelopEr0" />
          </Alert>
        )}
        <Row className={styles.marginTop}>
          <Column>
            <Hovedknapp mini htmlType="submit" className={styles.button} disabled={!formMethods.formState.isDirty}>
              <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
            </Hovedknapp>
            <Knapp htmlType="button" mini onClick={cancelEvent} className={styles.cancelButton}>
              <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
            </Knapp>
          </Column>
        </Row>
      </Form>
    </Modal>
  );
};

export default DelOppPeriodeModal;
