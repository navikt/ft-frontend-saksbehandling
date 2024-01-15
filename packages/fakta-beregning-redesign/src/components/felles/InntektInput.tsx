import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();

  const månedsinntektValidator = (number: number): ReactNode | null =>
    removeSpacesFromNumber(number) >= 1 ? null : intl.formatMessage({ id: 'InntektInput.MånedsinntektGyldigVerdi' });

  return (
    <InputField
      name={name}
      htmlSize={8}
      parse={parseCurrencyInput}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
      validate={[required, maxValueFormatted(178956970), månedsinntektValidator]}
      label={label}
    />
  );
};

InntektInput.buildInitialValues = (
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[],
  aktivitetStatus: string,
): { fastsattBelop: number } => {
  const fastsattBelop = andelerForFaktaOmBeregning?.find(andel => andel.aktivitetStatus === aktivitetStatus)
    ?.fastsattBelop;

  if (!fastsattBelop) {
    return null;
  }

  return { fastsattBelop };
};
export default InntektInput;
