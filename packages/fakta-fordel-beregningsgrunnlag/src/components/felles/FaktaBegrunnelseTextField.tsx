import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl, decodeHtmlEntity } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { BeregningAvklaringsbehov } from '@navikt/ft-types';

import styles from './faktaBegrunnelseTextField.module.css';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type OwnProps = {
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasBegrunnelse: boolean;
  label?: string;
  hasVurderingText?: boolean;
  name: string;
};

export type FormValues = {
  [key: string]: any;
};

type TransformedValues = {
  begrunnelse: string;
};

interface StaticFunctions {
  buildInitialValues: (aksjonspunkt: BeregningAvklaringsbehov, begrunnelseFieldName?: string) => FormValues;
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
  hasVurderingText = false,
  name = 'begrunnelse',
}) => {
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.BegrunnEndringene';
  const textAreaLabel = label || intl.formatMessage({ id: code });
  return (
    <RawIntlProvider value={intl}>
      {(isSubmittable || hasBegrunnelse) && (
        <div className={styles.begrunnelseTextField}>
          <TextAreaField
            name={name}
            label={isReadOnly ? '' : textAreaLabel}
            validate={isReadOnly ? [] : [required, minLength3, maxLength1500, hasValidText]}
            className={isReadOnly ? styles.explanationTextareaReadOnly : styles.explanationTextarea}
            maxLength={1500}
            readOnly={isReadOnly}
          />
        </div>
      )}
    </RawIntlProvider>
  );
};

const getBegrunnelse = (avklaringsbehov: BeregningAvklaringsbehov): string =>
  avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : '';

FaktaBegrunnelseTextField.buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov,
  begrunnelseFieldName = 'begrunnelse',
): FormValues => ({
  [begrunnelseFieldName]: decodeHtmlEntity(getBegrunnelse(avklaringsbehov)),
});

FaktaBegrunnelseTextField.transformValues = (values: FormValues, name = 'begrunnelse'): TransformedValues => ({
  begrunnelse: values[name] as string,
});

export default FaktaBegrunnelseTextField;
