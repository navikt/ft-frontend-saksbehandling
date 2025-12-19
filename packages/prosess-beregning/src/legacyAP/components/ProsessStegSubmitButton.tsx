import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '@navikt/ds-react';

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
interface Props {
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
        onClick={onClick}
        type={onClick ? 'button' : 'submit'}
      >
        {text || <FormattedMessage id="ProsessStegSubmitButton.Label" />}
      </Button>
    );
  }
  return null;
};
