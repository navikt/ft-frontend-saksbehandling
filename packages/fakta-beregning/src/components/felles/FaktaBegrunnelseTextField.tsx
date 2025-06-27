import { FieldValues, UseControllerProps } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { createIntl, decodeHtmlEntity } from '@navikt/ft-utils';

import styles from './faktaBegrunnelseTextField.module.css';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minLength3 = minLength(3);
const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

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
  [key: string]: string | undefined;
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
  const code = hasVurderingText ? 'FaktaBegrunnelseTextField.Vurdering' : 'FaktaBegrunnelseTextField.Begrunnelse';
  const textAreaLabel = label || intl.formatMessage({ id: code });
  return (
    <RawIntlProvider value={intl}>
      {(isSubmittable || hasBegrunnelse) && (
        <div className={styles.begrunnelseTextField}>
          <RhfTextarea
            name={name}
            control={control}
            label={textAreaLabel}
            validate={isReadOnly ? [] : [required, minLength3, maxLength4000, hasValidText]}
            className={isReadOnly ? styles.explanationTextareaReadOnly : styles.explanationTextarea}
            maxLength={MAX_LENGTH}
            readOnly={isReadOnly}
          />
        </div>
      )}
    </RawIntlProvider>
  );
};

FaktaBegrunnelseTextField.buildInitialValues = (
  hentetBegrunnelse: string | undefined,
  begrunnelseFieldName = 'begrunnelse',
): FormValues => ({
  [begrunnelseFieldName]: decodeHtmlEntity(hentetBegrunnelse),
});

FaktaBegrunnelseTextField.transformValues = (values: FormValues, name = 'begrunnelse'): TransformedValues => ({
  begrunnelse: values[name] as string,
});
