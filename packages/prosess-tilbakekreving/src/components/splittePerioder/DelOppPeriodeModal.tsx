import { useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { Alert, BodyShort, Button, Heading, Label, Modal, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

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
      (dateAfterOrEqual(tomDato)(dayjs(periodeData.tom.toString()).subtract(1, 'day')) ||
        dateBeforeOrEqual(tomDato)(periodeData.fom))
    ) {
      return intl.formatMessage({ id: 'DelOppPeriodeModalImpl.DatoUtenforPeriode' });
    }
    return null;
  };

const transformValues = (values: FormValues, periodeData: Periode): any => {
  const addDay = dayjs(values.forstePeriodeTomDato).add(1, 'days');
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

export interface Props {
  periodeData: Periode;
  cancelEvent: () => void;
  showModal: boolean;
  finnesBelopMed0Verdi: boolean;
  splitPeriod: (perioder: PerioderData) => void;
}

export const DelOppPeriodeModal = ({
  periodeData,
  showModal,
  cancelEvent,
  finnesBelopMed0Verdi,
  splitPeriod,
}: Props) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => splitPeriod(transformValues(values, periodeData))}
    >
      <Modal
        open={showModal}
        aria-label={intl.formatMessage({ id: 'DelOppPeriodeModalImpl.ModalDescription' })}
        onClose={cancelEvent}
        width="medium"
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="DelOppPeriodeModalImpl.DelOppPerioden" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="4">
            <div>
              <Label size="small">
                <FormattedMessage id="DelOppPeriodeModalImpl.Periode" />
              </Label>
              <BodyShort size="small">
                {`${dayjs(periodeData.fom.toString()).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(
                  periodeData.tom.toString(),
                ).format(DDMMYYYY_DATE_FORMAT)}`}
              </BodyShort>
            </div>
            <Datepicker
              name="forstePeriodeTomDato"
              label={<FormattedMessage id="DelOppPeriodeModalImpl.AngiTomDato" />}
              validate={[required, hasValidDate, validerMotPeriode(periodeData, intl)]}
              fromDate={dayjs(periodeData.fom).toDate()}
              toDate={dayjs(periodeData.tom).toDate()}
            />
            {finnesBelopMed0Verdi && (
              <Alert variant="error">
                <FormattedMessage id="DelOppPeriodeModalImpl.BelopEr0" />
              </Alert>
            )}
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary" className={styles.button} disabled={!formMethods.formState.isDirty}>
            <FormattedMessage id="DelOppPeriodeModalImpl.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={cancelEvent} className={styles.cancelButton} type="button">
            <FormattedMessage id="DelOppPeriodeModalImpl.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
