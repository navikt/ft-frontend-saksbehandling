import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react';

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean, hasErrors?: boolean): boolean => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  if (!isDirty) {
    return true;
  }
  return hasErrors;
};

export interface OwnProps {
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent) => void;
  hasErrors?: boolean;
}

const SubmitButton: FunctionComponent<OwnProps> = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  text,
  onClick,
  hasErrors,
}) => {
  if (!isReadOnly) {
    return (
      <Button
        variant="primary"
        size="small"
        loading={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable, hasErrors)}
        onClick={onClick}
        type={onClick ? 'button' : 'submit'}
      >
        {text || 'Bekreft og fortsett'}
      </Button>
    );
  }
  return null;
};

export default SubmitButton;
