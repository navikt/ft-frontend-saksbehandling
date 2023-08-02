import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Heading, Button } from '@navikt/ds-react';

import { SelectField, TextAreaField, Form } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { VerticalSpacer, FlexContainer, FlexRow, FlexColumn, FloatRight } from '@navikt/ft-ui-komponenter';

import styles from './endreBehandlendeEnhetModal.module.css';

const maxLength400 = maxLength(400);

export type FormValues = {
  nyEnhet: string;
  begrunnelse: string;
};

export interface OwnProps {
  lukkModal: () => void;
  behandlendeEnheter: {
    enhetId: string;
    enhetNavn: string;
  }[];
  gjeldendeBehandlendeEnhetId?: string;
  gjeldendeBehandlendeEnhetNavn?: string;
  handleSubmit: (formValues: FormValues) => void;
}

/**
 * EndreBehandlendeEnhetModal
 *
 * Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
 * Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.
 */
const EndreBehandlendeEnhetModal: FunctionComponent<OwnProps> = ({
  handleSubmit,
  lukkModal,
  behandlendeEnheter,
  gjeldendeBehandlendeEnhetId,
  gjeldendeBehandlendeEnhetNavn,
}) => {
  const options = behandlendeEnheter.map((enhet, index) => (
    <option key={enhet.enhetId} value={`${index}`}>
      {`${enhet.enhetId} ${enhet.enhetNavn}`}
    </option>
  ));

  const selectOptions = [
    <option key={gjeldendeBehandlendeEnhetId} disabled>
      {`${gjeldendeBehandlendeEnhetId} ${gjeldendeBehandlendeEnhetNavn}`}
    </option>,
  ].concat(options);

  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const nyEnhet = formMethods.watch('nyEnhet');
  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <Modal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.ModalDescription' })}
      onClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Form formMethods={formMethods} onSubmit={handleSubmit}>
          <Heading size="small">
            <FormattedMessage id="EndreBehandlendeEnhetModal.EndreEnhet" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <SelectField
            name="nyEnhet"
            label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.NyEnhetField' })}
            validate={[required]}
            selectValues={selectOptions}
            className={styles.selectWidth}
          />
          <VerticalSpacer sixteenPx />
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.BegrunnelseField' })}
            validate={[required, maxLength400, hasValidText]}
            maxLength={400}
          />
          <VerticalSpacer sixteenPx />
          <FloatRight>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Button size="small" variant="primary" className={styles.button} disabled={!(nyEnhet && begrunnelse)}>
                    {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Ok' })}
                  </Button>
                </FlexColumn>
                <FlexColumn>
                  <Button size="small" variant="secondary" onClick={lukkModal} type="button">
                    {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Avbryt' })}
                  </Button>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
          </FloatRight>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EndreBehandlendeEnhetModal;
