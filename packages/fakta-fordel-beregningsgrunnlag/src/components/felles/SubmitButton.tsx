import React from 'react';

import { Button } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean): boolean => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  return !isDirty;
};

interface Props {
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * ProsessStegSubmitButton
 */
export const SubmitButton = ({ isReadOnly, isSubmittable, onClick, isSubmitting, isDirty }: Props) => {
  if (!isReadOnly) {
    return (
      <Button
        size="small"
        loading={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable)}
        onClick={onClick}
        type={onClick ? 'button' : 'submit'}
      >
        {intl.formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Button>
    );
  }
  return null;
};
