import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';
import { ariaCheck } from '@navikt/ft-form-validators';
import messages from '../../i18n/nb_NO.json';
const intl = createIntl(messages);

const isDisabled = (
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
export interface OwnProps {
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent) => void;
  hasEmptyRequiredFields?: boolean;
}
/**
 * ProsessStegSubmitButton
 */
const ProsessStegSubmitButton: FunctionComponent<OwnProps> = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  text,
  onClick,
  hasEmptyRequiredFields,
}) => {
  if (!isReadOnly) {
    return (
      <Button
        variant="primary"
        size="small"
        loading={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable, hasEmptyRequiredFields)}
        onClick={onClick || ariaCheck}
        type={onClick ? 'button' : 'submit'}
      >
        {text || intl.formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Button>
    );
  }
  return null;
};
export default ProsessStegSubmitButton;
