import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import styles from './inntektInput.module.css';

interface InntektInputProps {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label: React.ReactNode;
}

const InntektInput: FunctionComponent<InntektInputProps> = ({ name, readOnly, isAksjonspunktClosed, label }) => (
  <div className={styles.inntektInput}>
    <InputField
      name={name}
      htmlSize={8}
      parse={parseCurrencyInput}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
      validate={[required, maxValueFormatted(178956970)]}
      label={label}
    />
    <p className={styles.krLabel}>kr</p>
  </div>
);

export default InntektInput;
