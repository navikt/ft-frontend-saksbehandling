import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react';

import { ariaCheck } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabledFn = (
  isDirty: boolean,
  isSubmitting: boolean,
  isSubmittable: boolean,
  hasEmptyRequiredFields?: boolean,
): boolean => {
  if ((!isDirty && !isSubmittable) || isSubmitting) {
    return true;
  }
  if (hasEmptyRequiredFields === undefined) {
    return !isDirty;
  }
  return (!isDirty && hasEmptyRequiredFields) || hasEmptyRequiredFields;
};

interface OwnProps {
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent) => void;
  hasEmptyRequiredFields?: boolean;
  isDisabled?: boolean;
}

/**
 * ProsessStegSubmitButton
 */
const SubmitButton: FunctionComponent<OwnProps> = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  text,
  onClick,
  hasEmptyRequiredFields,
  isDisabled,
}) => {
  if (!isReadOnly) {
    return (
      <Button
        size="small"
        loading={isSubmitting}
        disabled={isDisabledFn(isDirty, isSubmitting, isSubmittable, hasEmptyRequiredFields) || !!isDisabled}
        onClick={onClick || ariaCheck}
        type={onClick ? 'button' : 'submit'}
      >
        {text || intl.formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Button>
    );
  }
  return null;
};

export default SubmitButton;
