import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { decodeHtmlEntity, hasValidText, maxLength, minLength, required, createIntl } from '@navikt/ft-utils';
import { TextAreaField } from '@navikt/ft-form-redux-legacy';

import styles from './faktaBegrunnelseTextField.less';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type OwnProps = {
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasBegrunnelse: boolean;
  label?: string;
  hasVurderingText?: boolean;
  name?: string;
};

export type FormValues = {
  [key: string]: any;
};

type TransformedValues = {
  begrunnelse: string;
};

interface StaticFunctions {
  buildInitialValues: (hentetBegrunnelse: string, begrunnelseFieldName?: string) => FormValues;
  transformValues: (values: FormValues, name?: string) => TransformedValues;
}

/**
 * FaktaBegrunnelseTextField
 */
const FaktaBegrunnelseTextField: FunctionComponent<OwnProps> & StaticFunctions = ({
  isReadOnly,
  isSubmittable,
  hasBegrunnelse,
  label,
  hasVurderingText,
  name,
}) => {
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.BegrunnEndringene';
  const textAreaLabel = label || { id: code };
  return (
    <RawIntlProvider value={intl}>
      {(isSubmittable || hasBegrunnelse) && (
        <div className={styles.begrunnelseTextField}>
          <TextAreaField
            name={name}
            label={isReadOnly ? '' : textAreaLabel}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            textareaClass={isReadOnly ? styles.explanationTextareaReadOnly : styles.explanationTextarea}
            maxLength={1500}
            readOnly={isReadOnly}
          />
        </div>
      )}
    </RawIntlProvider>
  );
};

FaktaBegrunnelseTextField.defaultProps = {
  name: 'begrunnelse',
  hasVurderingText: false,
};

FaktaBegrunnelseTextField.buildInitialValues = (
  hentetBegrunnelse: string,
  begrunnelseFieldName = 'begrunnelse',
): FormValues => ({
  [begrunnelseFieldName]: decodeHtmlEntity(hentetBegrunnelse),
});

FaktaBegrunnelseTextField.transformValues = (values: FormValues, name = 'begrunnelse'): TransformedValues => ({
  begrunnelse: values[name] as string,
});

export default FaktaBegrunnelseTextField;
