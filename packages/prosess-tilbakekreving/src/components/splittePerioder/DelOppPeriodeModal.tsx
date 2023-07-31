import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { useForm } from 'react-hook-form';
import moment from 'moment/moment';
import { Modal, Button, Label, BodyShort, Alert, Heading } from '@navikt/ds-react';

import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Datepicker, Form } from '@navikt/ft-form-hooks';

import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import styles from './delOppPeriodeModal.module.css';

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

export interface OwnProps {
  periodeData: Periode;
  cancelEvent: () => void;
  showModal: boolean;
  finnesBelopMed0Verdi: boolean;
  splitPeriod: (perioder: PerioderData) => void;
}

const DelOppPeriodeModal: FunctionComponent<OwnProps> = ({
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
      open={showModal}
      aria-label={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
      onClose={cancelEvent}
      closeButton={false}
      className={styles.modal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Form
          formMethods={formMethods}
          onSubmit={(values: FormValues) => splitPeriod(transformValues(values, periodeData))}
        >
          <Heading size="small" className={styles.marginTop}>
            <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
          </Heading>
          <div className={styles.marginTop}>
            <Label size="small">
              <FormattedMessage id="DelOppPeriodeModalImpl.Periode" />
            </Label>
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
              disabledDays={{ fromDate: moment(periodeData.fom).toDate(), toDate: moment(periodeData.tom).toDate() }}
            />
          </div>
          {finnesBelopMed0Verdi && (
            <Alert variant="error">
              <FormattedMessage id="DelOppPeriodeModalImpl.BelopEr0" />
            </Alert>
          )}
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                  className={styles.button}
                  disabled={!formMethods.formState.isDirty}
                >
                  <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button
                  size="small"
                  variant="secondary"
                  onClick={cancelEvent}
                  className={styles.cancelButton}
                  type="button"
                >
                  <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default DelOppPeriodeModal;
