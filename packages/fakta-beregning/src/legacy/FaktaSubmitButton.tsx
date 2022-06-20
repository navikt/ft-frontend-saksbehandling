import { ariaCheck } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';
import { Hovedknapp } from 'nav-frontend-knapper';
import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (
  isDirty: boolean,
  isSubmitting: boolean,
  isSubmittable: boolean,
  hasEmptyRequiredFields: boolean,
  hasOpenAksjonspunkter: boolean,
): boolean => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  if (hasOpenAksjonspunkter) {
    return hasEmptyRequiredFields || (!isDirty && hasEmptyRequiredFields);
  }

  return !isDirty;
};

interface PureOwnProps {
  buttonText?: string;
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasOpenAksjonspunkter: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * FaktaSubmitButton
 */
const FaktaSubmitButton: FunctionComponent<PureOwnProps> = ({
  isReadOnly,
  isSubmittable,
  hasOpenAksjonspunkter,
  buttonText,
  onClick,
}) => {
  const { formState } = useFormContext();
  const { isSubmitting, isDirty, isValid } = formState;

  return (
    <RawIntlProvider value={intl}>
      {!isReadOnly && (
        <Hovedknapp
          mini
          spinner={isSubmitting}
          disabled={isDisabled(isDirty, isSubmitting, isSubmittable, isValid, hasOpenAksjonspunkter)}
          onClick={onClick || ariaCheck}
          htmlType={onClick ? 'button' : 'submit'}
        >
          {!!buttonText && buttonText}
          {!buttonText && <FormattedMessage id="SubmitButton.ConfirmInformation" />}
        </Hovedknapp>
      )}
    </RawIntlProvider>
  );
};

export default FaktaSubmitButton;
