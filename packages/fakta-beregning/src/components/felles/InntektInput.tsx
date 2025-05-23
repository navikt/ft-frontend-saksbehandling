import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { parseCurrencyInput } from '@navikt/ft-utils';

import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';

interface Props {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label: React.ReactNode;
}

export const InntektInput = ({ name, readOnly, isAksjonspunktClosed, label }: Props) => {
  const { resetField } = useFormContext<VurderFaktaBeregningFormValues>();
  useEffect(() => () => resetField(name as 'vurderFaktaBeregningForm.0.arbeidstakerInntektValues.0.fastsattBelop'), []);

  return (
    <InputField
      name={name}
      htmlSize={8}
      parse={parseCurrencyInput}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
      validate={readOnly ? [] : [required, maxValueFormatted(178956970)]}
      label={label}
    />
  );
};

InntektInput.buildInitialValues = (
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[],
  aktivitetStatus: string,
  opptjeningsaktivitetType?: string,
): { fastsattBelop: number } | undefined => {
  const fastsattBelop = andelerForFaktaOmBeregning?.find(
    andel =>
      andel.aktivitetStatus === aktivitetStatus &&
      (!opptjeningsaktivitetType || andel.arbeidsforhold?.arbeidsforholdType === opptjeningsaktivitetType),
  )?.fastsattBelop;

  if (!fastsattBelop) {
    return undefined;
  }

  return { fastsattBelop };
};
