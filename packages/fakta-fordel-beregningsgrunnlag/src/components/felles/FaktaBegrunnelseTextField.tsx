import { FieldValues, UseControllerProps } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { createIntl, decodeHtmlEntity } from '@navikt/ft-utils';

import styles from './faktaBegrunnelseTextField.module.css';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

interface Props<T extends FieldValues> {
  name: UseControllerProps<T>['name'];
  control: UseControllerProps<T>['control'];
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasBegrunnelse: boolean;
  label?: string;
  hasVurderingText?: boolean;
}

export type FormValues = {
  [key: string]: any;
};

type TransformedValues = {
  begrunnelse: string;
};

/**
 * FaktaBegrunnelseTextField
 */
export const FaktaBegrunnelseTextField = <T extends FieldValues>({
  name,
  control,
  isReadOnly,
  isSubmittable,
  hasBegrunnelse,
  label,
  hasVurderingText = false,
}: Props<T>) => {
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.BegrunnEndringene';
  const textAreaLabel = label || intl.formatMessage({ id: code });
  return (
    <RawIntlProvider value={intl}>
      {(isSubmittable || hasBegrunnelse) && (
        <div className={styles.begrunnelseTextField}>
          <RhfTextarea
            name={name}
            control={control}
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
