import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';

interface InntektInputProps {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label: React.ReactNode;
}

interface StaticFunctions {
  buildInitialValues: (
    andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[],
    aktivitetStatus: string,
  ) => { fastsattBelop: number };
}

const InntektInput: FunctionComponent<InntektInputProps> & StaticFunctions = ({
  name,
  readOnly,
  isAksjonspunktClosed,
  label,
}) => {
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
): { fastsattBelop: number } => {
  const fastsattBelop = andelerForFaktaOmBeregning?.find(
    andel => andel.aktivitetStatus === aktivitetStatus,
  )?.fastsattBelop;

  if (!fastsattBelop) {
    return null;
  }

  return { fastsattBelop };
};
export default InntektInput;
