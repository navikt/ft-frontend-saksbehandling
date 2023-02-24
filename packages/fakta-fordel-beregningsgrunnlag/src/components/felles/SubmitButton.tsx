import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react/esm';

import { ariaCheck } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean): boolean => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  return !isDirty;
};

interface OwnProps {
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * ProsessStegSubmitButton
 */
const SubmitButton: FunctionComponent<OwnProps> = ({ isReadOnly, isSubmittable, onClick, isSubmitting, isDirty }) => {
  if (!isReadOnly) {
    return (
      <Button
        size="small"
        loading={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable)}
        onClick={onClick || ariaCheck}
        type={onClick ? 'button' : 'submit'}
      >
        {intl.formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Button>
    );
  }
  return null;
};

export default SubmitButton;
