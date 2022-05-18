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
  // eslint-disable-next-line react/no-unused-prop-types
  // formNames?: string[];
  // eslint-disable-next-line react/no-unused-prop-types
  // formName?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  // doNotCheckForRequiredFields?: boolean;
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
// const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => {
//   const fNames = ownProps.formNames ? ownProps.formNames : [ownProps.formName];
//   const formNames = fNames.map(f => (f.includes('.') ? f.substr(f.lastIndexOf('.') + 1) : f));
//   return {
//     isSubmitting: formNames.some(formName => reduxIsSubmitting(formName)(state)),
//     isDirty: formNames.some(formName => reduxIsDirty(formName)(state)),
//     hasEmptyRequiredFields: ownProps.doNotCheckForRequiredFields
//       ? // @ts-ignore
//         false
//       : formNames.some(formName => hasBehandlingFormErrorsOfType(formName, isRequiredMessage())(state as never)), // TODO: Finn ut hva som er galt her
//   };
// };
export default FaktaSubmitButton;
