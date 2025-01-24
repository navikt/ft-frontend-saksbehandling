import { Button } from '@navikt/ds-react';
import { ariaCheck } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';
import React from 'react';
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
export interface Props {
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
export const ProsessStegSubmitButton = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  text,
  onClick,
  hasEmptyRequiredFields,
}: Props) => {
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
